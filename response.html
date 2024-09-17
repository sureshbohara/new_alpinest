<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {


	   // Check reCAPTCHA
        $recaptcha_secret = defined('RECAPTCHA_SECRET_KEY') ? RECAPTCHA_SECRET_KEY : '6Lc4vycqAAAAAMbQ69aSTMbfiJLDSJ1nEK3bkXw6'; 
        $recaptcha_response = isset($_POST['g-recaptcha-response']) ? sanitize_text_field($_POST['g-recaptcha-response']) : '';
        $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';

        $response = wp_remote_post($recaptcha_url, array(
            'body' => array(
                'secret' => $recaptcha_secret,
                'response' => $recaptcha_response
            )
        ));
        
        // Check if there was an error with the HTTP request
        if (is_wp_error($response)) {
            wp_die('Failed to connect to reCAPTCHA. Please try again later.');
        }

        $response_body = wp_remote_retrieve_body($response);
        $response_data = json_decode($response_body);

        // Check if reCAPTCHA response data is valid
        if (!isset($response_data->success) || !$response_data->success) {
            echo '<script>alert("reCAPTCHA verification failed. Please try again."); window.location.href = "' . esc_url($_SERVER['REQUEST_URI']) . '";</script>';
            exit();
        }
        

    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'ezbokingteam@gmail.com';
        $mail->Password   = 'yuxm bplm vzoj uooy'; 
        $mail->SMTPSecure = 'tls'; 
        $mail->Port       = 587;
        $mail->setFrom('ezbokingteam@gmail.com', $name);
        $mail->addReplyTo($email, $name);
        $mail->addAddress('vyvec.stha@gmail.com', $name);
        $mail->AddCC('ezweb@ez-websolution.com', $name);
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Information From Acworth Towne Executive Limousine';
        $mail->Body    = "<html>
        <head>
        <style>
        body { font-family: Arial, sans-serif; }
        h1 { color: #333; font-size:#16px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        table, th, td { border: 2px solid #000; font-size: 16px; }
        th, td { padding: 10px; text-align: left; }
        th { background-color: #f2f2f2; }
        td { background-color: #fff; }
        </style>
        </head>
        <body>
        <h1> <b>New Contact Information From Acworth Towne Executive Limousine!!!</b></h1>
        <table>
        <tr>
        <td><b>Passenger Name:</b></td>
        <td>$name</td>
        </tr>
        <tr>
        <td><b>Passenger Phone No.:</b></td>
        <td>$phone</td>
        </tr>
        <tr>
        <td><b>E-mail:</b></td>
        <td>$email</td>
        </tr>
        <tr>
 
        <td><b>Message:</b></td>
        <td> $message</td>
        </tr>
        </table>
        </head> 
        </html>";
        $mail->AltBody = "Passenger Name: $name\nPassenger Phone No: $phone\nEmail: $email\nMessage:\n$message";
        $mail->send();
        echo '<h3 style="padding: 5px; color: #000; background: #fff; text-align: center;"><b> New Contact Information Sent Successfully, We Will Contact You Soon, Thank You. | Acworth Towne Executive Limousine</b></h3>';
    } catch (Exception $e) {
        echo "Sorry! sending Message failed. Try again: {$mail->ErrorInfo}";
    }
} else {
    echo 'Invalid request method.';
}

?>