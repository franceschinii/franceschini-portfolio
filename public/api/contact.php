<?php
// Simple email handler for Hostinger shared hosting
// Expects POST: name, email, message, honeypot

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method Not Allowed']);
  exit;
}

function sanitize($s) { return trim(filter_var($s ?? '', FILTER_SANITIZE_STRING)); }

$name = sanitize($_POST['name'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = trim($_POST['message'] ?? '');
$honeypot = trim($_POST['website'] ?? '');

if ($honeypot !== '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Bad request']);
  exit;
}

if (!$name || !$email || !$message) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Preencha todos os campos']);
  exit;
}

$to = 'profissional.andrefranceschini@proton.me'; // adjust if needed
$subject = '[Portfolio] Novo contato de ' . $name;
$body = "Nome: {$name}\nEmail: {$email}\n\nMensagem:\n{$message}";

$headers = [];
$headers[] = 'From: Portfolio <no-reply@'.($_SERVER['HTTP_HOST'] ?? 'site').'>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$ok = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($ok) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Falha ao enviar email']);
}

