employeeList = [];

function createEmployee() {
  // lấy thông tin từ input
  var account = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var workday = document.getElementById("datepicker").value;
  var basicSalary = +document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var hoursWork = +document.getElementById("gioLam").value;

  // check trùng id
  var index = findById(account);

  if (index !== -1) {
    alert("account bị trùng!");
    return;
  }
  var employee = new Employee(
    account,
    name,
    email,
    password,
    workday,
    hoursWork,
    basicSalary,
    position
  );
  // bỏ đối tượng nhân viên vào ds
  employeeList.push(employee);
  // in danh sách nhân viên ra màn hình
  renderEmployees();

  // lưu ds xuống local storage
  saveLocalStorage();
}
function renderEmployees() {
    var result = "";
    for (var i = 0; i < employeeList.length; i++) {
      var currentemployee = employeeList[i];
      result += `<tr>
                      <td>${currentemployee.account}</td>
                      <td>${currentemployee.name}</td>
                      <td>${currentemployee.email}</td>
                      <td>${currentemployee.workday}</td>
                      <td>${currentemployee.position}</td>
                      <td>${currentemployee.totalSalaryForPosition().toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                      <td>${currentemployee.employRating()}</td>
                  </tr>`;
    }
  
    document.getElementById("tableDanhSach").innerHTML = result;
 }
 function saveLocalStorage() {
    var employeeListJSON = JSON.stringify(employeeList);
    localStorage.setItem("list", employeeListJSON);
  }
function findById(account) {
  for (var i = 0; i < employeeList.length; i++) {
    if (employeeList[i].account === account) {
      return i;
    }
  }
  return -1;
}
function getLocalStorage() {
    var employeeListJSON = localStorage.getItem("list");
    if (employeeListJSON === null) return;
  
    var employeeListLocal = JSON.parse(employeeListJSON);
    employeeList = mapData(employeeListLocal);
  
    renderEmployees();
  }
  
  // input: data local => output: data mới
  function mapData(employeeListLocal) {
    var result = [];
    for (var i = 0; i < employeeListLocal.length; i++) {
      var currentemployee = employeeListLocal[i];
      var copiedEmployee = new Employee(
        currentemployee.account,
        currentemployee.name,
        currentemployee.email,
        currentemployee.password,
        currentemployee.workday,
        currentemployee.hoursWork,
        currentemployee.basicSalary,
        currentemployee.position
      );
  
      result.push(copiedEmployee);
    }
  
    return result;
  }
  
  getLocalStorage();