function timSoChanLe() {
  for (var e = "", t = "", n = 0; n < 100; n++)
    n % 2 == 0 ? (e += n + " ") : (t += n + " ");
  document.getElementById("txtResult").innerHTML =
    "Số chẵn: " + e + "<br>👉Số lẻ: " + t;
}
function demSoChia3() {
  for (var e = 0, t = 0; t < 1e3; t++) t % 3 == 0 && e++;
  document.getElementById("txtResult2").innerHTML =
    "Số chia hết cho 3 nhỏ hơn 1000: " + e + " số";
}
function findMin() {
  for (var e = 0, t = 0, n = 1; n < 1e4; n++)
    if (((e += n), console.log(e), e > 1e4)) {
      console.log(n), (t = n);
      break;
    }
  document.getElementById("txtResult3").innerHTML =
    "Số nguyên dương nhỏ nhất: " + t;
}
function tinhTong() {
  for (
    var e = document.getElementById("inputX").value,
      t = document.getElementById("inputN").value,
      n = 0,
      o = 1;
    o <= t;
    o++
  )
    n += Math.pow(e, o);
  document.getElementById("txtResult4").innerHTML = "Tổng: " + n;
}
function tinhGT() {
  for (
    var e = document.getElementById("inputN1").value, t = 1, n = 1;
    n <= e;
    n++
  )
    t *= n;
  document.getElementById("txtResult5").innerHTML = "Giai thừa: " + t;
}
function taoDiv() {
  for (var e = "", t = 1; t <= 10; t++)
    e +=
      t % 2 == 0
        ? "<div class='bg-danger text-white p-2'>Div chẵn</div>"
        : "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
  document.getElementById("txtResult6").innerHTML = e;
}
function inSoNguyenTo() {
  for (
    var e = document.getElementById("inputN2").value, t = "", n = 1;
    n <= e;
    n++
  ) {
    checkPrime(n) && (t += " " + n);
  }
  document.getElementById("txtResult7").innerHTML = t;
}
function checkPrime(e) {
  if (e < 2) return !1;
  for (var t = 2; t <= Math.sqrt(e); t++) if (e % t == 0) return !1;
  return !0;
}
