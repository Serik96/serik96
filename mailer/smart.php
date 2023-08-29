<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$name = $_POST['name'];
$email = $_POST['email'];

$mail = new PHPMailer(true);

try {
    $mail->CharSet = 'utf-8';

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'jobfrontend7@gmail.com';
    $mail->Password = '123456789Serik17';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('jobfrontend7@gmail.com', 'CV');
    $mail->addAddress('postfront6@gmail.com');
    $mail->addReplyTo('jobfrontend7@gmail.com', 'Information');

    $mail->isHTML(true);
    $mail->Subject = 'Данные';
    $mail->Body = '
        Пользователь оставил данные <br> 
        Имя: ' . $name . ' <br>
        E-mail: ' . $email . '';

    $mail->send();
    echo 'Письмо успешно отправлено';
} catch (Exception $e) {
    echo "Ошибка при отправке письма: {$mail->ErrorInfo}";
}
?>
