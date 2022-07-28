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
  this.totalSalaryForPosition = function () {
    return this.position === "Giám Đốc"
      ? +(this.basicSalary * this.hoursWork * 3)
      : this.position === "Trưởng Phòng"
      ? +(this.basicSalary * this.hoursWork * 2)
      : +(this.basicSalary * this.hoursWork * 1);
  };
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
