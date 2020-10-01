async function doHttp() {
  const res = await fetch(
    "http://localhost/darshana/RestFullApi/api/all/get.php",
    {
      method: "GET",
    }
  );

  const datas = await res.json();
  var index = 1;
  datas.forEach((data) => {
    var table = document.getElementById("table");
    var row = table.insertRow(index);
    index++;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = data.user_name;
    cell2.innerHTML = data.title;
    cell3.innerHTML = data.completed_date;
    cell4.innerHTML = data.time_spent;
    cell5.innerHTML = data.points;
    cell6.innerHTML = data.status;
  });
}

doHttp();
