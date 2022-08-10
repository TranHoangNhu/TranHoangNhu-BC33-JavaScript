employeeList = [];
function createEmployee() {
  // lấy thông tin từ input
  var account = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var workday = document.getElementById("datepicker").value;
  var basicSalary = document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var hoursWork = document.getElementById("gioLam").value;

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
  //Kiểm tra rỗng
  var valid = 1;
  valid &=
    checkNullValid(employee.account.trim(), "#tknv", "Tài khoản nhân viên") &
    checkNullValid(employee.name.trim(), "#name", "Tên nhân viên") &
    checkNullValid(employee.email.trim(), "#email", "Email nhân viên") &
    checkNullValid(
      employee.password.trim(),
      "#password",
      "Mật khẩu nhân viên"
    ) &
    checkNullValid(
      employee.basicSalary.trim(),
      "#luongCB",
      "Lương căn bản nhân viên"
    ) &
    checkNullValid(
      employee.position.trim(),
      "#chucvu",
      "Vị trí chức vụ nhân viên"
    ) &
    checkNullValid(
      employee.hoursWork.trim(), 
      "#gioLam", 
      "Giờ làm nhân viên"
    );
  console.log(valid);
 
    valid &= checkValidAccount2(employee.account.trim(), "#tknv", "Tài khoản nhân viên");
  
  if (!valid) {
    return;
  }
  // bỏ đối tượng nhân viên vào ds
  employeeList.push(employee);
  // in danh sách nhân viên ra màn hình
  renderEmployees();

  // lưu ds xuống local storage
  saveLocalStorage();
}
// Render UI không đối số
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
                      <td>${currentemployee.totalSalary().toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}</td>
                      <td>${currentemployee.employRating()}</td>
                      <td>
                        <button class="btn btn-danger my-2" onclick="delEmploy('${currentemployee.account}')">Del</button>
                        <button class="btn btn-primary my-2" onclick="editEmploy('${
                          currentemployee.account
                        }')" data-toggle="modal" data-target="#updateModal">Update</button>
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
function editEmploy(accountClick) {
  var EmployEdit = null;
  for (var index = 0; index < employeeList.length; index++) {
    if (employeeList[index].account == accountClick) {
      //Tại vị trí này tìm thấy idClick = id object trong mảng
      EmployEdit = employeeList[index];
      break;
    }
  }
  var valid = 1;
  valid &=
    checkNullValid(
      EmployEdit.account.trim(),
      "#update_tknv",
      "Tài khoản nhân viên"
    ) &
    checkNullValid(EmployEdit.name.trim(), "#update_name", "Tên nhân viên") &
    checkNullValid(
      EmployEdit.email.trim(),
      "#update_email",
      "Email nhân viên"
    ) &
    checkNullValid(
      EmployEdit.password.trim(),
      "#update_password",
      "Mật khẩu nhân viên"
    ) &
    checkNullValid(
      EmployEdit.basicSalary.trim(),
      "#update_luongCB",
      "Lương căn bản nhân viên"
    ) &
    checkNullValid(
      EmployEdit.position.trim(),
      "#update_chucvu",
      "Vị trí chức vụ nhân viên"
    ) &
    checkNullValid(
      EmployEdit.hoursWork.trim(),
      "#update_gioLam",
      "Giờ làm nhân viên"
    );
  console.log(valid);
  if (!valid) {
    return;
  }

  if (EmployEdit !== null) {
    //Đưa dữ liệu lên các control input
    document.querySelector("#update_tknv").value = EmployEdit.account;
    document.querySelector("#update_name").value = EmployEdit.name;
    document.querySelector("#update_email").value = EmployEdit.email;
    document.querySelector("#update_password").value = EmployEdit.password;
    document.querySelector("#update_datepicker").value = EmployEdit.workday;
    document.querySelector("#update_luongCB").value = EmployEdit.basicSalary;
    document.querySelector("#update_chucvu").value = EmployEdit.position;
    document.querySelector("#update_gioLam").value = EmployEdit.hoursWork;
  }
}
function delEmploy(idClick) {
  // input id: giá trị người dùng click
  //output: index    //                 0   1   2
  for (var index = employeeList.length - 1; index >= 0; index--) {
    //Mỗi lần duyệt lấy ra 1 phần tử của mảng so với input người dùng click
    if (employeeList[index].account == idClick) {
      // indexDel = index; //Lưu lại vị trí id click = sinhVien có mã trùng với idClick
      // break; //thoát ra khỏi vòng lặp
      employeeList.splice(index, 1);
    }
  }
  renderEmployees();
  // saveLocalStorage(employeeList, 'arrEm');
  // if (indexDel !== -1) { //tìm thấy
  //   employeeList.splice(indexDel, 1);
  //   //Gọi lại hàm render table mới
  //   //Lưu danh sách sau khi xoá vào storage
  // }
  saveLocalStorage();
}
//Khi người dùng thay đổi sau đó bấm nút update
function updateEmploy() {
  var EmUpdate = new Employee();
  EmUpdate.account = document.querySelector("#update_tknv").value;
  EmUpdate.name = document.querySelector("#update_name").value;
  EmUpdate.email = document.querySelector("#update_email").value;
  EmUpdate.password = document.querySelector("#update_password").value;
  EmUpdate.workday = document.querySelector("#update_datepicker").value;
  EmUpdate.basicSalary = document.querySelector("#update_luongCB").value;
  EmUpdate.position = document.querySelector("#update_chucvu").value;
  EmUpdate.hoursWork = document.querySelector("#update_gioLam").value;
  console.log(EmUpdate);
  //Duyệt qua từng object trong employeeList tìm ra vị trí của object cần thay đổi
  //                 0      1      2
  //employeeList = [{id:1},{id:2},{id:3}]
  let indexEdit = -1;
  for (var index = 0; index < employeeList.length; index++) {
    if (employeeList[index].account === EmUpdate.account) {
      indexEdit = index; //1
      break;
    }
  }
  if (indexEdit !== -1) {
    //Nếu tìm thấy vị trí trong mảng thì lấy object trong mảng gán lại = object trên giao diện người dùng thay đổi
    // employeeList[indexEdit] = EmUpdate;
    employeeList[indexEdit].name = EmUpdate.name;
    employeeList[indexEdit].email = EmUpdate.email;
    employeeList[indexEdit].password = EmUpdate.password;
    employeeList[indexEdit].workday = EmUpdate.workday;
    employeeList[indexEdit].basicSalary = EmUpdate.basicSalary;
    employeeList[indexEdit].position = EmUpdate.position;
    employeeList[indexEdit].hoursWork = EmUpdate.hoursWork;
    //Gọi hàm rendertable truyền cho hàm mảng mới
    renderEmployees();
  }
  saveLocalStorage();
}
//render UI có đối số
function updateRenderEmployees(arrSV) {
  //input : ??? [{maSinhVien:'1',tenSinhVien:'A',...},{maSinhVien:'2',tenSinhVien:'B',...},{maSinhVien:'3',tenSinhVien:'C',...}]
  var result = "";
  for (var index = 0; index < arrSV.length; index++) {
    var obEmployee = arrSV[index];
    // obEmployee.salaryForPosition = function () {
    //   return this.position === "Giám Đốc"
    //     ? +(this.basicSalary * 3)
    //     : this.position === "Trưởng Phòng"
    //     ? +(this.basicSalary * 2)
    //     : +(this.basicSalary * 1);
    // };
    // obEmployee.totalSalary = function () {
    //   return (this.salaryForPosition() * this.hoursWork) / 240;
    // };
    // obEmployee.employRating = function () {
    //   return this.hoursWork >= 192
    //     ? "Nhân viên xuất sắc"
    //     : this.hoursWork >= 176
    //     ? "Nhân viên giỏi"
    //     : this.hoursWork >= 160
    //     ? "Nhân viên khá"
    //     : "Nhân viên trung bình";
    // };
    var trEmploy = `
        <tr>
        <td>${obEmployee.account}</td>
        <td>${obEmployee.name}</td>
        <td>${obEmployee.email}</td>
        <td>${obEmployee.workday}</td>
        <td>${obEmployee.position}</td>
        <td>${obEmployee
          .totalSalary()
          .toLocaleString("vi", { style: "currency", currency: "VND" })}</td>
        <td>${obEmployee.employRating()}</td>
        <td>
          <button class="btn btn-danger my-2" onclick="delEmploy('${
            obEmployee.account
          }')">Del</button>
          <button class="btn btn-primary my-2" onclick="editEmploy('${
            obEmployee.account
          }')" data-toggle="modal" data-target="#myModal">Update</button>
        </td>
        </tr>
      `;

    result += trEmploy;
  }
  document.getElementById("tableDanhSach").innerHTML = result;
  return result;
}

var searchEmploy = function () {
  //expression function(Không hỗ hoisting)
  //input: keyWord : string
  var keyWord = document.querySelector("#searchName").value; //a
  keyWord = removeVietnameseTones(keyWord); // nguyễn => nguyen
  //output: ?? []: arraySinhVien
  var output = [];
  //process:
  //B1: duyệt qua từng phần tử của mảng
  //B2: Kiểm tra tên có chứa từ khoá hay không
  //B3: Nếu có thì đưa object đó vào output
  //                  0        1         2
  // employeeList = [{id,name},{id,name},{id,name}]
  for (var index = 0; index < employeeList.length; index++) {
    // nguyễn văn a.search('a') => 11
    // nguyễn văn b.search('a') => -1
    // nguyễn văn c.search('a') => -1
    // this.employRating = function () {
    //   return this.hoursWork >= 192
    //     ? "Nhân viên xuất sắc"
    //     : this.hoursWork >= 176
    //     ? "Nhân viên giỏi"
    //     : this.hoursWork >= 160
    //     ? "Nhân viên khá"
    //     : "Nhân viên trung bình";
    // };
    var nameTable = removeVietnameseTones(employeeList[index].employRating()); // => nguyen van a.search(nguyen)
    if (
      nameTable.search(keyWord) != -1 ||
      employeeList[index].account == keyWord
    ) {
      //Tìm thấy => add object tại vị trí đó vào output
      output.push(employeeList[index]);
    }
  }
  console.log(output);
  //Dùng output render ra table
  updateRenderEmployees(output);
};
//Dom đến txtSearch cài đặt sự kiện oninput cho nó
document.querySelector("#searchName").oninput = searchEmploy;

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
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
