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
                      <td>${currentemployee.totalSalary().toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                      <td>${currentemployee.employRating()}</td>
                      <td>
                        <button class="btn btn-danger my-2" onclick="delEmploy('${currentemployee.account}')">Del</button>
                        <button class="btn btn-primary my-2" onclick="editEmploy('${currentemployee.account}')" data-toggle="modal" data-target="#myModal">Update</button>
                      </td>
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
  //Cập Nhật Nhân Viên
function editEmploy(idClick) {
  var EmployEdit = null;
  for (var index = 0; index < employeeList.length; index++) {
    if (employeeList[index].account == idClick) {
      //Tại vị trí này tìm thấy idClick = id object trong mảng
      EmployEdit = employeeList[index];
      break;
    }
  }
  // console.log(EmployEdit);
  if (EmployEdit !== null) {
    //Đưa dữ liệu lên các control input
    document.querySelector('#tknv').value = EmployEdit.account;
    document.querySelector('#name').value = EmployEdit.name;
    document.querySelector('#email').value = EmployEdit.email;
    document.querySelector('#password').value = EmployEdit.password;
    document.querySelector('#datepicker').value = EmployEdit.workday;
    document.querySelector('#luongCB').value = EmployEdit.basicSalary;
    document.querySelector('#chucvu').value = EmployEdit.position;
    document.querySelector('#gioLam').value = EmployEdit.hoursWork;
  }
}
function delEmploy(idClick) { // input id: giá trị người dùng click
  //output: index    //                 0   1   2
  var indexDel = -1; // employeeList = [{1},{2},{3}] employeeList[2].name ='abc';
  for (var index = employeeList.length - 1; index >= 0; index--) {
    //Mỗi lần duyệt lấy ra 1 phần tử của mảng so với input người dùng click
    if (employeeList[index].account == idClick) {
      // indexDel = index; //Lưu lại vị trí id click = sinhVien có mã trùng với idClick
      // break; //thoát ra khỏi vòng lặp
      employeeList.splice(index, 1);
    }
  }
  renderEmployees();
  // saveLocalStorage(employeeList, 'arrSV');
  // if (indexDel !== -1) { //tìm thấy
  //   employeeList.splice(indexDel, 1);
  //   //Gọi lại hàm render table mới
  //   //Lưu danh sách sau khi xoá vào storage
  // }
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

