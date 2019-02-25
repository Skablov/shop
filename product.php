<?php
  include('bd.php');
  session_start();
  if($_SESSION['id'] != 2)
  {
    header("Location: /index.php");
    exit;
  }
?>
<html>
<head>
  <meta charset="utf-8">
  <title>Администратор</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</head>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">Страница Администратора</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 text-dark" href="admin.php">Главная</a>
    </nav>
  </div>
<div class="container"><br>
  <table class="table">
    <thead class='thead-dark'>
      <tr>
        <th>Название</th>
        <th>Описание</th>
        <th>Стоимость</th>
      </tr>
    </thead>
    <tbody id='tbody'>
    </tbody>
  </table>
  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      Добавить товар
    </button>
  <div id="myModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Добавление товара</h4>
              </div>
              <div class="modal-body">
                  <form>
                    <div class="form-group" style="text-align:left">
                      <label>Название</label>
                      <input type="text" id="name" placeholder="Введите название" class="form-control">
                      <label>Описание</label>
                      <input type="text" id="about" placeholder="Описание" class="form-control">
                      <label>Стоимость</label><br>
                        <input type="text" id="cost" class="form-control" placeholder="Стоимость за шт">
                    </div>
                  </form>
              </div>
              <div class="modal-footer">
                <button class="btn btn-success" onclick='modal_window()'>Добавить</button>
                <button class="btn btn-default" type="button" data-dismiss="modal">Закрыть</button></div>
          </div>
        </div>
  <script src="product.js">

  </script>
</html>
