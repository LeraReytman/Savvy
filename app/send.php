<?php 

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/Exception.php';
  require 'PHPMailer/PHPMailer.php';
  require 'PHPMailer/SMTP.php';

  $mail = new PHPMailer;
  $mail->CharSet = 'utf-8';     
  
  $text = $_POST['text'];
  $phone = $_POST['phone'];

  $mail->isSMTP();
  $mail->Host = 'smtp.inbox.ru';
  $mail->SMTPAuth = true;
  $mail->Username = 'info.info11';
  $mail->Password = 'bzrVL8kwC7CrJ8qp6Jut';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;

  $mail->setFrom('info.info11@inbox.ru');
  $mail->addAddress('hel_333@mail.ru');
  
  $mail->isHTML(true);

  $mail->Subject = 'Заявка с "Savvy"';

  $mail->Body = 'Имя: ' . $text . '<br><br>Номер телефона: ' . $phone;

  $mail->AltBody = '';

  if(!$mail->send()) {

    $message = 'Error';

  } else {

    $message = 'Ok';

  }

  $response = ['message' => $message];

  header('Content-type: application/json');

  echo json_encode($response);

?>