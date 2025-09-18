<template>
  <div
    ref="ctnDom"
    :class="cn('block size-full', props?.class)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
  shaderCode: string;
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
}

const props = withDefaults(defineProps<Props>(), {
  hue: 300,
  saturation: 0.5,
  brightness: 1,
  speed: 1,
});

const ctnDom = ref<HTMLDivElement | null>(null);

let animateId: number;
let canvas: HTMLCanvasElement;
let gl: WebGLRenderingContext | null;
let program: WebGLProgram | null;
let buffer: WebGLBuffer | null;

// Vertex Shader
const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;

  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

function createShader(type: number, source: string): WebGLShader | null {
  if (!gl) return null;

  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(): WebGLProgram | null {
  if (!gl) return null;

  // Convert ShaderToy code to WebGL
  let fragmentShaderCode = props.shaderCode;

  // Add precision if not present
  if (!fragmentShaderCode.includes('precision')) {
    fragmentShaderCode = 'precision highp float;\n' + fragmentShaderCode;
  }

  // Add uniforms
  const uniformsCode = `
    uniform float iTime;
    uniform vec2 iResolution;
    uniform vec4 iMouse;
    varying vec2 vUv;
  `;

  // Replace mainImage with main
  fragmentShaderCode = fragmentShaderCode.replace(
    'void mainImage(out vec4 fragColor, vec2 fragCoord)',
    'void main()'
  );

  // Replace fragColor with gl_FragColor
  fragmentShaderCode = fragmentShaderCode.replace(/fragColor/g, 'gl_FragColor');

  // Replace fragCoord with gl_FragCoord.xy
  fragmentShaderCode = fragmentShaderCode.replace(/fragCoord/g, 'gl_FragCoord.xy');

  // Inject uniforms after precision
  const precisionMatch = fragmentShaderCode.match(/(precision\s+\w+\s+float\s*;)/);
  if (precisionMatch) {
    fragmentShaderCode = fragmentShaderCode.replace(
      precisionMatch[1],
      precisionMatch[1] + '\n' + uniformsCode
    );
  } else {
    fragmentShaderCode = uniformsCode + '\n' + fragmentShaderCode;
  }

  const vertShader = createShader(gl.VERTEX_SHADER, vertexShader);
  const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderCode);

  if (!vertShader || !fragShader) return null;

  const prog = gl.createProgram();
  if (!prog) return null;

  gl.attachShader(prog, vertShader);
  gl.attachShader(prog, fragShader);
  gl.linkProgram(prog);

  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(prog));
    gl.deleteProgram(prog);
    return null;
  }

  return prog;
}

function resize() {
  if (!ctnDom.value || !canvas || !gl) return;

  const rect = ctnDom.value.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  gl.viewport(0, 0, canvas.width, canvas.height);
}

function render(time: number) {
  if (!gl || !program || !buffer) return;

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);

  // Set uniforms
  const timeLocation = gl.getUniformLocation(program, 'iTime');
  const resolutionLocation = gl.getUniformLocation(program, 'iResolution');
  const mouseLocation = gl.getUniformLocation(program, 'iMouse');

  gl.uniform1f(timeLocation, time * 0.001 * props.speed);
  gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
  gl.uniform4f(mouseLocation, 0.0, 0.0, 0.0, 0.0);

  // Draw
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  const positionLocation = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.TRIANGLES, 0, 6);

  animateId = requestAnimationFrame(render);
}

onMounted(() => {
  if (!ctnDom.value) return;

  // Create WebGL canvas
  canvas = document.createElement('canvas');
  gl = canvas.getContext('webgl');

  if (!gl) {
    console.error('WebGL not supported');
    return;
  }

  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '0';

  ctnDom.value.appendChild(canvas);

  // Create program
  program = createProgram();
  if (!program) return;

  // Create buffer for full-screen quad
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
    -1,  1,
     1, -1,
     1,  1
  ]), gl.STATIC_DRAW);

  // Set clear color
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Set up resize listener
  window.addEventListener("resize", resize, false);
  resize();

  // Start animation
  animateId = requestAnimationFrame(render);
});

onUnmounted(() => {
  if (animateId) {
    cancelAnimationFrame(animateId);
  }
  window.removeEventListener("resize", resize);
  if (ctnDom.value && canvas) {
    ctnDom.value.removeChild(canvas);
  }
  if (gl) {
    gl.getExtension("WEBGL_lose_context")?.loseContext();
  }
});
</script>