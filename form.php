<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Form</title>
    </head>
    <body>
    <?php
    $name = $_POST['name'];
    $email = $_POST['email'];

    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    ?>
    <div class="div_form">
        <h1>Halo, <?php echo $name ?>.</h1>
        <h2>Email sudah berhasil terkirim ke  <?php echo $email ?>!</h2>
        <a href="index.html" class="return_to_menu">Kembali Ke Menu</a>
    </div>
    </body>
</html>