document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const code = document.getElementById('employeeCode').value;
    const name = document.getElementById('employeeName').value;

    const tableBody = document.getElementById('employeeTableBody');
    const row = document.createElement('tr');

    const codeCell = document.createElement('td');
    const nameCell = document.createElement('td');

    codeCell.textContent = code;
    nameCell.textContent = name;

    row.appendChild(codeCell);
    row.appendChild(nameCell);
    tableBody.appendChild(row);

    // Limpiar el formulario
    document.getElementById('employeeForm').reset();
});
