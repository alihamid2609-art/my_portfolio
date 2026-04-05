<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

function clean_text(string $value): string {
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return strip_tags($value);
}

$name = clean_text($_POST['Name'] ?? '');
$company = clean_text($_POST['Company'] ?? '');
$email = trim($_POST['E-mail'] ?? '');
$phone = clean_text($_POST['Phone'] ?? '');
$message = trim($_POST['Message'] ?? '');
$subjectBase = clean_text($_POST['form_subject'] ?? 'Portfolio Contact Message');

if ($name === '' || $email === '' || $phone === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please fill all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

$emailDomain = strtolower(substr(strrchr($email, '@') ?: '', 1));
$allowedEduDomains = ['hu.edu.pk'];

if ($emailDomain === '' || !in_array($emailDomain, $allowedEduDomains, true)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please use your university email (hu.edu.pk).']);
    exit;
}

$to = 'alihamid2609@gmail.com';
$subject = $subjectBase . ' - ' . $name;
$serverHost = strtolower((string)($_SERVER['HTTP_HOST'] ?? $_SERVER['SERVER_NAME'] ?? ''));
$serverHost = preg_replace('/:\d+$/', '', $serverHost);
$serverHost = preg_replace('/^www\./', '', $serverHost);
if ($serverHost === '' || strpos($serverHost, '.') === false) {
    $serverHost = 'portfolio.localdomain';
}
$fromEmail = 'no-reply@' . $serverHost;

$bodyLines = [
    'New contact form submission:',
    '',
    'Name: ' . $name,
    'Company: ' . ($company !== '' ? $company : 'N/A'),
    'Email: ' . $email,
    'Phone: ' . $phone,
    '',
    'Message:',
    $message,
    '',
    'Sent At (UTC): ' . gmdate('Y-m-d H:i:s')
];

$body = implode("\r\n", $bodyLines);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Portfolio Contact <' . $fromEmail . '>',
    'Sender: ' . $fromEmail,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers), '-f' . $fromEmail);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Email sending failed on server. Please check SMTP/sendmail configuration.']);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Message sent successfully.']);
