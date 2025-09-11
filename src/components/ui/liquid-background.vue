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

const props = defineProps<{ class?: HTMLAttributes["class"] }>();

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

// Fragment Shader - igual ao original mas com cores azuis puras
const fragmentShader = `
  precision highp float;
  
  uniform float uTime;
  uniform vec2 uResolution;
  
  varying vec2 vUv;
  
  void main() {
    float mr = min(uResolution.x, uResolution.y);
    vec2 uv = (vUv * 2.0 - 1.0) * uResolution / mr;

    float d = -uTime * 1.2;
    float a = 0.0;
    for (float i = 0.0; i < 8.0; ++i) {
        a += cos(i - d - a * uv.x);
        d += sin(uv.y * i + a);
    }
    d += uTime * 1.0;
    
    vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
    col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);
    
    // CORES AZUIS PURAS - sem rosa/roxo
    // Mapear para tons de azul escuro -> azul médio -> azul claro
    float intensity = (col.r + col.g + col.b) / 3.0;
    
    vec3 darkBlue = vec3(0.05, 0.1, 0.2);   // Azul muito escuro
    vec3 mediumBlue = vec3(0.1, 0.3, 0.6);  // Azul médio
    vec3 lightBlue = vec3(0.4, 0.6, 0.8);   // Azul claro
    
    vec3 finalColor;
    if (intensity < 0.33) {
      finalColor = mix(darkBlue, mediumBlue, intensity * 3.0);
    } else if (intensity < 0.66) {
      finalColor = mix(mediumBlue, lightBlue, (intensity - 0.33) * 3.0);
    } else {
      finalColor = mix(lightBlue, vec3(0.7, 0.8, 0.9), (intensity - 0.66) * 3.0);
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
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
  
  const vertShader = createShader(gl.VERTEX_SHADER, vertexShader);
  const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShader);
  
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
  const timeLocation = gl.getUniformLocation(program, 'uTime');
  const resolutionLocation = gl.getUniformLocation(program, 'uResolution');
  
  gl.uniform1f(timeLocation, time * 0.001);
  gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
  
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