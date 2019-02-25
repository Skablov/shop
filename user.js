const url = 'server.php';
var order = Create2DArray(10);
var count = 0; // переменная для массива
window.onload = read();

function read()
{
  let params = 'command=read';
  ajaxPost(url, params).then(resolve =>
  {
    resolve = JSON.parse(resolve);
    let thead = document.getElementById('thead').innerHTML = '<tr><th scope="col">Название товара</th><th scope="col">Описание</th><th scope="col">Цена</th></tr>';
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    let h3 = document.getElementById('h3').innerHTML = ' ';
    let div = document.getElementById('div').innerHTML = ' ';
    for(let i = 0; i < resolve.length / 4; i++)
    {
      let tr = document.createElement('tr');
      tr.innerHTML = '<th>' + resolve[(i * 4) + 1] + '</th><th>' + resolve[(i * 4) + 2] + '</th><th>' + resolve[(i * 4) + 3] + '</th>';
      tr.onclick = () =>
      {
        var number = prompt("Введите кол-во товара", '');
        if(!isNaN(number) && number)
        {
          order[count][0] = number; // кол-во
          order[count][1] = resolve[(i * 4) + 3]; // цена за шт
          order[count][2] = resolve[(i * 4) + 1]; // название товара
          count++;
          alert("Добавлено в корзину");
          let basket = document.getElementById('basket');
          basket.innerHTML = 'Корзина('+count+')';
        }
        else
        {
          alert("Введите число!");
          return;
        }
      };
      tbody.appendChild(tr);
    }

  }).catch(reject =>
  {
    alert("Ошибка работы сервера");
    console.log(reject);
  });
}

function del(i) // удаляем элем из массива
{
  order.splice(i,1);;
  if(count != 0)
  {
    count = count - 1;
    basket();
  }
  else
  {
      basket();
  }
}

function modal_window()
{
  let name = document.getElementById('name').value;
  let number = document.getElementById('number').value;
  let option = document.getElementById('option').value;
  let address = document.getElementById('address').value;
  if(!isEmpty(name) && !isEmpty(number) && !isEmpty(option) && !isEmpty(address))
  {
    let str = "";
    for(let i = 0; i < count; i++)
    {
      str += order[i][2] + ': ' + order[i][0] + ' ';
    }
    let params = 'command=client&&name='+name+'&&num='+number+'&&option='+option+'&&address='+address+'&&order=' + str;
    ajaxPost(url, params).then(resolve =>
    {
      alert(resolve);
      window.location.reload();
    }).catch(reject =>
    {
      alert("Ошибка работы сервера!");
      console.log(reject);
    });

  }
  else
  {
    alert("Вы не все ввели!");
    return;
  }
}


function basket()
{
  let thead = document.getElementById('thead').innerHTML = '<tr><th scope="col">Товар</th><th scope="col">Кол-во</th><th scope="col">Цена</th></tr>';
  let tbody = document.getElementById('tbody');
  tbody.innerHTML = ' ';
  let cost = 0;
  for(let i = 0; i < count; i++)
  {
    let tr = document.createElement('tr');
    tr.innerHTML = '<th>' + order[i][2] + '</th><th>' + order[i][0] + '</th><th>' + order[i][1] + '</th><th class="btn btn-danger" onclick=del('+i+')>x</th>';
    tbody.appendChild(tr);
    cost += order[i][1] * order[i][0];
  }
  let h3 = document.getElementById('h3').innerHTML = 'Итого к оплате: ' + cost;
  let div = document.getElementById('div');
  div.innerHTML = ' ';
  if(cost != 0)
  {
    div.innerHTML = '<label class="btn btn-success" data-toggle="modal" data-target="#myModal">Оплатить</label>';
  }
  if(count != 0)
  {
    let basket = document.getElementById('basket');
    basket.innerHTML = 'Корзина('+count+')';
  }
  else
  {
    let basket = document.getElementById('basket');
    basket.innerHTML = 'Корзина';
  }
}

function ajaxPost(url, params)
{
	return new Promise(function(resolve, reject)
	{
		var request = new XMLHttpRequest;
		request.open('POST',url,true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
		request.addEventListener("load", function()
		{
			if(request.status < 400)
			{
				resolve(request.responseText);
			}
			else
			{
				reject(Error("Ошибка получения данных"));
			}
		});
		request.send(params);
	});
}

function Create2DArray(rows) // что такое двумерный массив?
{
  var arr = [];
  for (var i = 0; i < rows; i++)
  {
    arr[i] = [];
  }
  return arr;
}

function isEmpty(str) // проверка на пустоту
{
  if (str.trim() == '')
    return true;
  return false;
}
