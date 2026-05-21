<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));
     $phone   = htmlspecialchars(trim($_POST['phone']));

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'tekniya.com';
        $mail->SMTPAuth   = true; 
        $mail->Username   = 'contact@tekniya.com'; // Email created in cPanel
        $mail->Password   = 'Nra?s8&@T9u1';             // Email password
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        
        $mail->setFrom('contact@tekniya.com', 'Website Contact');
        $mail->addAddress('info@tekniya.com'); // Your receiving email

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Message';
        $mail->Body    = "
            <strong>Name:</strong> $name<br>
            <strong>Email:</strong> $email<br>
            <strong>Phone:</strong> $phone<br><br> 
            <strong>Message:</strong><br>$message
        ";


        $mail->send();
        echo "<script>
        alert('Mail has been sent successfully!');
        window.location.href = 'contact.html';
    </script>";
    } catch (Exception $e) {
        echo "<script>
        alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}');
        window.location.href = 'contact.html';
    </script>";
    }
}
