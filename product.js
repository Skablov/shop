const url = 'server.php';
window.onload = read();


function read()
{
  let params = 'command=product';
  ajaxPost(url, params).then(resolve =>
  {
    resolve = JSON.parse(resolve);
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = ' ';
    for(let i = 0; i < resolve.length / 4; i++)
    {
      let tr = document.createElement('tr');
      tr.innerHTML = '<th>' + resolve[(i * 4) + 1] + '</th><th>' + resolve[(i * 4) + 2] + '</th><th>' + resolve[(i * 4) + 3]+ '</th>';
      tr.onclick = () =>
      {
        let answer = confirm("Вы желаете удалить выбранный продукт?");
        if(answer)
        {
          let params = 'command=del_admin&&id=' + resolve[(i * 4)];
          ajaxPost(url, params).then(resolve =>
          {
            alert(resolve);
            read();
          }).catch(reject =>
          {
            alert("Ошибка обновления базы данных");
            console.log(reject);
          })
        }
        else
        {
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

function modal_window()
{
  let name = document.getElementById('name').value;
  let about = document.getElementById('about').value;
  let cost = document.getElementById('cost').value;
  if(!isEmpty(name) && !isEmpty(about) && !isEmpty(cost))
  {
    let params = 'command=product_add&&name=' + name +'&&about=' + about + '&&cost=' + cost;
    ajaxPost(url, params).then(resolve =>
    {
      alert(resolve);
      read();
    }).catch(reject =>
    {
      alert("Ошибка обновления базы данных");
      console.log(reject);
    })
  }
  else
  {
    alert("Вы не все ввели!");
    return;
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

function isEmpty(str) // проверка на пустоту
{
  if (str.trim() == '')
    return true;
  return false;
}
