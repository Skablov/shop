const url = 'server.php';
window.onload = read();

function read()
{
  let params = 'command=admin';
  ajaxPost(url, params).then(resolve =>
  {
    resolve = JSON.parse(resolve);
    console.log(resolve);
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = " ";
    for(let i = 0; i < resolve.length / 7; i++ )
    {
      let tr = document.createElement('tr');
      tr.innerHTML = '<th>' + resolve[(i * 7)] + '</th><th>' + resolve[(i * 7) + 1] + '</th><th>' + resolve[(i * 7) + 2] + '</th><th>' + resolve[(i * 7) + 3] + '</th><th>' + resolve[(i * 7) + 4] + '</th><th>' + resolve[(i * 7) + 5]+'<th class="btn btn-success" onclick=add('+resolve[(i * 7) + 6]+')>V</th>'+' '+' <th class="btn btn-danger" onclick=del('+resolve[(i * 7) + 6]+')>X</th>';
      tbody.appendChild(tr);
    }
  }).catch(reject =>
  {
    alert("Ошибка работы сервера");
    console.log(reject);
  });
}

function add(id)
{
  let params = 'command=add&&id='+id;
  ajaxPost(url, params).then(resolve =>
  {
    alert(resolve);
    read();
  }).catch(reject =>
  {
    alert("Ошибка подтверждения заказа");
    console.log(reject);
  });
}

function del(id)
{
  let params = 'command=del&&id=' + id;
  ajaxPost(url, params).then(resolve =>
  {
    alert(resolve);
    read();
  }).catch(reject =>
  {
    alert("Ошибка удаления заказа");
    console.log(reject);
  });
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

function isEmpty(str) // проверка на пустоту
{
  if (str.trim() == '')
    return true;
  return false;
}
