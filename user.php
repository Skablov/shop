<?php
  include('bd.php');
  session_start();
  if($_SESSION['id'] != 1)
  {
    header("Location: /index.php");
    exit;
  }
?>
<html>
<head>
  <meta charset="utf-8">
  <title>Главная страница</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</head>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">Магазин спортивного питания</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 text-dark" onclick="read()">Главная</a>
      <a class="p-2 text-dark" id="basket" onclick="basket()">Корзина</a>
    </nav>
  </div>
<div class="container">
  <table class="table">
    <thead id="thead">

    </thead>
    <tbody id='tbody'>

    </tbody>
  </table><br><br>
    <h3 id="h3"></h3>
</div>
<div class="container" id='div'>

</div>
<div id="myModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Заказ</h4>
            </div>
            <div class="modal-body">
                <form>
                  <div class="form-group" style="text-align:left">
                    <label>Ваше имя</label>
                    <input type="text" id="name" placeholder="Введите ваше имя" class="form-control">
                    <label>Ваш номер (для уточнения заказа)</label>
                    <input type="text" id="number" placeholder="Введите ваш номер" class="form-control">
                    <label>Тип оплаты</label><br>
                      <select class="form-control" id="option">
                        <option>Безналичный</option>
                        <option>Наличными</option>
                      </select>
                      <label>Адрес доставки</label><br>
                      <input type="text" id="address" class="form-control" placeholder="Адрес">
                  </div>
                </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-success" onclick='modal_window()'>Заказать</button>
              <button class="btn btn-default" type="button" data-dismiss="modal">Закрыть</button></div>
        </div>
      </div>
<script src="user.js"></script>
</html>
