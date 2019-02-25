<?php
  include('bd.php');
  header('Content-Type: text/html; charset=UTF-8');
  header("HTTP/1.1 200 OK");

  switch ($_POST['command'])
  {
    case 'read':
      $result = mysql_query("SELECT * FROM product",$db);
      $r = array();
      while($res = mysql_fetch_array($result))
      {
        array_push($r, $res['id'], $res['name'], $res['description'], $res['cost']);
      }
      echo json_encode($r);
      break;
    case 'client':
      $name = $_POST['name'];
      $num = $_POST['num'];
      $opt = $_POST['option'];
      $add = $_POST['address'];
      $order = $_POST['order'];
      $result = mysql_query("INSERT INTO client (name, address, product, num, type, status, date_b) VALUES ('$name', '$add', '$order', '$num', '$opt','0', now())",$db);
      echo 'Успешно, ожидайте звонка!';
      break;
    case 'admin':
      $result = mysql_query("SELECT * FROM client WHERE status='0'", $db);
      $r = array();
      while($res = mysql_fetch_array($result))
      {
        array_push($r, $res['name'], $res['address'], $res['product'], $res['num'], $res['type'], $res['date_b'], $res['id']);
      }
      echo json_encode($r);
      break;
    case 'add':
      $id = $_POST['id'];
      $result = mysql_query("UPDATE client SET status='1' WHERE id='$id'", $db);
      echo 'Успешно!';
      break;
    case 'del':
      $id = $_POST['id'];
      $result = mysql_query("DELETE FROM client WHERE id='$id'", $db);
      echo 'Успешно!';
      break;
    case 'cour':
      $result = mysql_query("SELECT * FROM client WHERE status='1'",$db);
      $r = array();
      while($res = mysql_fetch_array($result))
      {
        array_push($r, $res['id'], $res['name'], $res['address'], $res['product'], $res['num'], $res['type']);
      }
      echo json_encode($r);
      break;
    case 'ready':
      $id = $_POST['id'];
      $result = mysql_query("UPDATE client SET status='2' WHERE id='$id'", $db);
      echo 'Успешно!';
      break;
    case 'product':
      $result = mysql_query("SELECT * FROM product", $db);
      $r = array();
      while($res = mysql_fetch_array($result))
      {
        array_push($r, $res['id'], $res['name'], $res['description'], $res['cost']);
      }
      echo json_encode($r);
      break;
    case 'del_admin':
      $id = $_POST['id'];
      $result = mysql_query("DELETE FROM product WHERE id='$id'",$db);
      echo 'Успешно!';
      break;
    case 'product_add':
      $name = $_POST['name'];
      $des = $_POST['about'];
      $cost = $_POST['cost'];
      $result = mysql_query("INSERT INTO product (name, description, cost) VALUES ('$name','$des','$cost')", $db);
      echo 'Успешно!';
      break;
  }


 ?>
