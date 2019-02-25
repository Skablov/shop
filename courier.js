const url = 'server.php';
window.onload = read();

function read()
{
  let params = 'command=cour';
  ajaxPost(url, params).then(resolve =>
  {
    resolve = JSON.parse(resolve);
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    for(let i = 0; i < resolve.length / 6; i++)
    {
      let tr = document.createElement('tr');
      tr.innerHTML = '<th>' + resolve[(i * 6) + 1] + '</th><th>' + resolve[(i * 6) + 2] + '</th><th>' + resolve[(i * 6) + 3] + '</th><th>' + resolve[(i * 6) + 4] + '</th><th>' + resolve[(i * 6) + 5] + '</th>';
      tr.onclick = () =>
      {
        let answer = confirm("Этот заказ доставлен?");
        if(answer)
        {
          let params = 'command=ready&&id='+resolve[(i * 6)];
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
