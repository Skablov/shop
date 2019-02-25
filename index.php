<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="vieport" content="width-device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css?family=Spicy+Rice" rel="stylesheet">
  <!-- Последняя компиляция и сжатый CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Дополнение к теме -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <title>Главная страница</title>
  </head>
  <body>
    <div class="container text-center"><br><br>
      <h1>Авторизация пользователя!</h1><br>
      <form method="POST" action="check.php" class="form-inline">
        <div class="form-group">
          <input type="text" class="form-control" name="login" placeholder="логин"><br><br>
          <input type="password" class="form-control" name="password" placeholder="пароль"><br><br>
          <input type="submit" id="submit" value="Войти" class="btn-primary btn">
        </div>
      </form>
    </div>
  </body>
</html>
