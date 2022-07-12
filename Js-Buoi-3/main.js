// BÀI TẬP 1
(document.getElementById("btnSalary").onclick = function () {
  var e =
    document.getElementById("inputNum1").value *
    document.getElementById("inputNum2").value;
  document.getElementById("ketQuaLuong").innerHTML = e.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}),
  // BÀI TẬP 2
  (document.getElementById("btnTB").onclick = function () {
    var e = document.querySelectorAll(".bai2 .form-control"),
      t = 0;
    for (var n = 0; n < e.length; n++) t += Number(e[n].value);
    document.getElementById("txtTB").innerHTML = t / e.length;
  }),
  // BÀI TẬP 3
  (document.getElementById("btnCurrency").onclick = function () {
    var e = document.getElementById("usd").value,
      t = (23500 * e);
    document.getElementById("txtCurrency").innerHTML = t.toLocaleString("en-US", {style:"currency", currency:"USD"});
  }),
  // BÀI TẬP 4
  (document.getElementById("btnCal").onclick = function () {
    var e = document.getElementById("width").value,
      t = document.getElementById("height").value,
      n = e * t,
      u = 2 * (Number(e) + Number(t));
    document.getElementById(
      "txtCal"
    ).innerHTML = `\n        Diện tích: ${n};\n        Chu vi: ${u}\n    `;
  }),
  // BÀI TẬP 5
  (document.getElementById("btnSum").onclick = function () {
    var e = document.getElementById("number").value,
      t = Math.floor(e / 10),
      n = e % 10;
    document.getElementById("txtSum").innerHTML = t + n;
  });
