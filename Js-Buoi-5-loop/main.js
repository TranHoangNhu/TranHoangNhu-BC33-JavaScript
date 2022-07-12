// BÀI TẬP 1
(document.getElementById("btnSalary").onclick = function () {
  var e =
    document.getElementById("inputNum1").value *
    document.getElementById("inputNum2").value;
  document.getElementById("ketQuaLuong").innerHTML = e.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}),

