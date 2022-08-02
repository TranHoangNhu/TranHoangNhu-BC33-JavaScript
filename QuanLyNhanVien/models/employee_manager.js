function Employee(
  account,
  name,
  email,
  password,
  workday,
  hoursWork,
  basicSalary,
  position
) {
  this.account = account;
  this.name = name;
  this.email = email;
  this.password = password;
  this.workday = workday;
  this.basicSalary = basicSalary;
  this.position = position;
  this.hoursWork = hoursWork;
  //  Phuơng Thức Tính Lương Dựa Trên Chức Vụ
  this.salaryForPosition = function () {
    return this.position === "Giám Đốc"
      ? +(this.basicSalary * 3)
      : this.position === "Trưởng Phòng"
      ? +(this.basicSalary * 2)
      : +(this.basicSalary * 1);
  };
//  Phuơng Thức Tính Tổng Lương
  this.totalSalary = function () {
    return this.salaryForPosition() * this.hoursWork;
  };
  //  Phuơng Thức Xếp Loại Nhân Viên
  this.employRating = function () {
    return this.hoursWork >= 192
      ? "Nhân viên xuất sắc"
      : this.hoursWork >= 176
      ? "Nhân viên giỏi"
      : this.hoursWork >= 160
      ? "Nhân viên khá"
      : "Nhân viên trung bình";
  };

  // Cách viết hàm theo kiểu Arrow Function mà ko cần return
  // this.employRatingArrow = () =>
  //   this.hoursWork >= 192
  //     ? "Nhân viên xuất sắc"
  //     : this.hoursWork >= 176
  //     ? "Nhân viên giỏi"
  //     : this.hoursWork >= 160
  //     ? "Nhân viên khá"
  //     : "Nhân viên trung bình";
}
