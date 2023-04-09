function addData() {

    const name = document.getElementById("name").value;
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const subject4 = parseFloat(document.getElementById("subject4").value);

    const average = (subject1 + subject2 + subject3 + subject4) / 4;
  
    const table = document.getElementById("table");
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const subject1Cell = row.insertCell(1);
    const subject2Cell = row.insertCell(2);
    const subject3Cell = row.insertCell(3);
    const subject4Cell = row.insertCell(4);
    const averageCell = row.insertCell(5);
  
    nameCell.innerHTML = name;
    subject1Cell.innerHTML = subject1;
    subject2Cell.innerHTML = subject2;
    subject3Cell.innerHTML = subject3;
    subject4Cell.innerHTML = subject4;
    averageCell.innerHTML = average.toFixed(2);
  
    document.getElementById("form").reset();
  }
  
  function clearTable() {
    const table = document.getElementById("table");
    while (table.rows.length > 1) {
      table.deleteRow(-1);
    }

    document.getElementById("name").focus();
  }