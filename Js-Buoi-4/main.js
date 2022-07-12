// BÀI TẬP 1
document.getElementById("btnscore").onclick = function quanLyTuyenSinh() {
  var diemChuan = parseFloat(document.getElementById("diemchuan").value);
  var monThuNhat = parseFloat(document.getElementById("mon1").value);
  var monThuHai = parseFloat(document.getElementById("mon2").value);
  var monThuBa = parseFloat(document.getElementById("mon3").value);
  var diemUuTien = parseFloat(document.getElementById("khuvucuutien").value);
  var doiTuongUuTien = parseFloat(
    document.getElementById("doituonguutien").value
  );
  var diemTongKet = parseFloat(
    monThuNhat + monThuHai + monThuBa + diemUuTien + doiTuongUuTien
  );
  document.getElementById("thongbao").classList.remove("d-none");
  if (diemTongKet >= diemChuan) {
    document
      .getElementById("thongbao")
      .classList.replace("bg-warning", "bg-success");
    document.getElementById("content").innerText =
      "Bạn đã đậu với số điểm tổng kết là " + diemTongKet;
  } else {
    document
      .getElementById("thongbao")
      .classList.replace("bg-success", "bg-warning");
    document.getElementById("content").innerText =
      "Bạn đã rớt với số điểm tổng kết là " + diemTongKet;
  }

  // if(diemTongKet >= diemChuan)
  // {
  //     document.getElementById("thongbao").classList.remove("d-none");
  //     console.log(document.getElementById("thongbao").classList)
  //     document.getElementById("thongbao").classList.value="display-4"+' '+ "text-white"+' '+ "p-5"+' '+ "mt-4"+' '+ "mx-4"+' '+ "bg-success"+' '+ "text-center";
  //     document.getElementById("content").innerText = 'Bạn đã đậu với số điểm tổng kết là ' + diemTongKet;
  // }
  // else
  // {
  //     document.getElementById("thongbao").classList.remove("d-none");
  //     document.getElementById("thongbao").classList.value="display-4"+' '+ "text-white"+' '+ "p-5"+' '+ "mt-4"+' '+ "mx-4"+' '+ "bg-warning"+' '+ "text-center";
  //     document.getElementById("content").innerText = 'Bạn đã rớt với số điểm tổng kết là ' + diemTongKet;
  // }
};
// BÀI TẬP 2
document.getElementById("btntiendien").onclick = function quanLyTienDien() {
  var kw_1 = 500,
    kw_2 = 650,
    kw_3 = 850,
    kw_4 = 1100,
    kw_conlai = 1300;
  var hoTen = document.getElementById("inputName").value,
    soKw = Number(document.getElementById("inputKW").value),
    tongTienDien = 0;
  0 < soKw && soKw <= 50
    ? (tongTienDien = soKw * kw_1)
    : soKw > 50 && soKw <= 100
    ? (tongTienDien = 50 * kw_1 + (soKw - 50) * kw_2)
    : soKw > 100 && soKw <= 200
    ? (tongTienDien = 50 * kw_1 + 50 * kw_2 + (soKw - 100) * kw_3)
    : soKw > 200 && soKw <= 350
    ? (tongTienDien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soKw - 200) * kw_4)
    : soKw > 350
    ? (tongTienDien =
        50 * kw_1 +
        50 * kw_2 +
        100 * kw_3 +
        150 * kw_4 +
        (soKw - 350) * kw_conlai)
    : alert("Số kw không hợp lệ! Vui lòng nhập lại"),
    (document.getElementById("tiendien").innerHTML =
      "Họ tên: " +
      hoTen +
      " --- Tiền điện: " +
      tongTienDien.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      }));
};
// BAÌ TẬP 3
document.getElementById("btnThueThuNhap").onclick =
  function tinhThueThuNhapCaNhan() {
    var tenNguoiNopThue = document.getElementById("tennguoinopthue").value,
      tongThuNhapNam =
        document.getElementById("tongthunhapnam").value -
        4e6 -
        16e5 * document.getElementById("songuoiphuthuoc").value,
      thueThuNhap = 0;
    tongThuNhapNam > 0 && tongThuNhapNam <= 6e7
      ? (thueThuNhap = 0.05 * tongThuNhapNam)
      : tongThuNhapNam > 6e7 && tongThuNhapNam <= 12e7
      ? (thueThuNhap = 0.1 * tongThuNhapNam)
      : tongThuNhapNam > 12e7 && tongThuNhapNam <= 21e7
      ? (thueThuNhap = 0.15 * tongThuNhapNam)
      : tongThuNhapNam > 21e7 && tongThuNhapNam <= 384e6
      ? (thueThuNhap = 0.2 * tongThuNhapNam)
      : tongThuNhapNam > 384e6 && tongThuNhapNam <= 624e6
      ? (thueThuNhap = 0.25 * tongThuNhapNam)
      : tongThuNhapNam > 624e6 && tongThuNhapNam <= 96e7
      ? (thueThuNhap = 0.3 * tongThuNhapNam)
      : tongThuNhapNam > 96e7
      ? (thueThuNhap = 0.35 * tongThuNhapNam)
      : alert("Số tiền thu nhập không hợp lệ"),
      (document.getElementById("thuethunhapcanhan").innerHTML =
        "Họ tên: " +
        tenNguoiNopThue +
        "; Tiền thuế thu nhập cá nhân: " +
        thueThuNhap.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }) +
        " VND");
  };
// BÀI TẬP 4
function disableInput() {
  var e = document.getElementById("loaikh").value;
  document.getElementById("soketnoi").style.display =
    "company" == e ? "block" : "none";
}
document.getElementById("btnTinhTienCap").onclick = function tinhTienCap() {
  var loaiKH = document.getElementById("loaikh").value,
    maKH = document.getElementById("makh").value,
    soKenhCaoCap = document.getElementById("sokenhcaocap").value,
    soKetNoi = document.getElementById("soketnoi").value,
    tongTienCap = 0;
  "company" == loaiKH
    ? (tongTienCap = tinhTong(15, 75, 50, soKenhCaoCap, soKetNoi, 5))
    : "user" == loaiKH
    ? (tongTienCap = tinhTong(4.5, 20.5, 7.5, soKenhCaoCap, 0, 0))
    : alert("Hãy chọn loại khách hàng"),
    (document.getElementById("tongtiencap").innerHTML =
      "Mã khách hàng: " +
      maKH +
      "; Tiền cáp: " +
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(tongTienCap));
}
// function tinhTong(loaiKH, maKH, soKenhCaoCap, soKetNoi, tongTienCap, l) {
//   var thamSo = loaiKH + maKH + soKenhCaoCap * soKetNoi;
//   return tongTienCap > 10 && (thamSo += (tongTienCap - 10) * l), thamSo;
// }
function tinhTong(e, n, t, u, c, l) {
  var m = e + n + t * u;
  return c > 10 && (m += (c - 10) * l), m;
}

// BÀI TẬP 5
// document.getElementById("btntienboa").onclick = function tinhTienBoa() {
//   var tongHoaDon = parseFloat(document.getElementById("tonghoadon").value);
//   var phanTramTip = parseFloat(document.getElementById("phantramtip").value);
//   var soNguoi = parseFloat(document.getElementById("songuoi").value);
//   var tienBoaMoiNguoi = parseFloat((tongHoaDon * phanTramTip) / soNguoi);
//   document.getElementById("tienboa").innerHTML =
//     "TIP AMOUNT: " +
//     tienBoaMoiNguoi.toLocaleString("vi", {
//       style: "currency",
//       currency: "VND",
//     }) +
//     " /người";
// };
