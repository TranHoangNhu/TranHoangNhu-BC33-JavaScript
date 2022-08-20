function checkNullValid(value, selectorError, name) {
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  if (value === "") {
    spanValid.innerHTML = name + " không được bỏ trống";
    spanValid.style.color = "#CD950C";
    return false;
  }
  spanValid.innerHTML = "";
  return true;
}

function checkValidAccount(value, selectorError, name) {
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  // var regex = /^[A-Za-z]{4,6}$/;
  var regex = /^[0-9]{4,6}$/;
  if (regex.test(value)) {
    spanValid.innerHTML = "";
    return true;
  }
  spanValid.innerHTML = name + " tối đa 4 -6 ký số!";
  spanValid.style.color = "#CD950C";
  return false;
}

function checkValidName(value, selectorError, name) {
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  var regex = /^(([a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*)([a-zA-Z\s\'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*)([a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]))*$/;
  if (regex.test(value)) {
    spanValid.innerHTML = "";
    return true;
  }
  spanValid.innerHTML = name + " phải là chữ cái!";
  spanValid.style.color = "#CD950C";
  return false;
}

function checkValidEmail(value, selectorError, name) {
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(value)) {
    spanValid.innerHTML = "";
    return true;
  }
  spanValid.innerHTML = name + " Không đúng định dạng!";
  spanValid.style.color = "#CD950C";
  return false;
}

function checkValidPassWord(value, selectorError, name) {
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  var regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  if (regex.test(value)) {
    spanValid.innerHTML = "";
    return true;
  }
  spanValid.innerHTML =
    name +
    " phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)!";
  spanValid.style.color = "#CD950C";
  return false;
}

function checkValidDate(value, selectorError, name) {
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (regex.test(value)) {
    spanValid.innerHTML = "";
    return true;
  }
  spanValid.innerHTML = name + " phải đúng định dạng mm/dd/yyyy!";
  spanValid.style.color = "#CD950C";
  return false;
}

function checkValidBasicSalary(value, selectorError, name) {
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  var regex = /^[0-9]+$/;
  if (regex.test(value) && value >= 1000000 && value <= 20000000) {
    spanValid.innerHTML = "";
    return true;
  }
  spanValid.innerHTML = name + " phải Từ 1.000.000 -20.000.000!";
  spanValid.style.color = "#CD950C";
  return false;
}

function checkValidPosition(selectorError, name) {
  var checkValid = document.querySelector('#chucvu');
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  if (checkValid.value === 'Chọn chức vụ'){
    spanValid.innerHTML = name + " (Sếp, Trưởng Phòng, Nhân Viên)!";
    spanValid.style.color = "#CD950C";
    return false;
  }
  spanValid.innerHTML = "";
  return true;
}

function checkValidHoursWork(value, selectorError, name) {
  var spanValid = document.querySelector(selectorError);
  spanValid.style.display = "block";
  var regex = /^[0-9]+$/;
  if ((regex.test(value) === true) && (value >= 80) && (value <= 200)) {
    spanValid.innerHTML = "";
    return true;
  }
  spanValid.innerHTML = name + " trong tháng phải từ 80-200 giờ!";
  spanValid.style.color = "#CD950C";
  return false;
}
