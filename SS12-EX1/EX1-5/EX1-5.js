let kiemTra = prompt ("Nhập điểm kiểm tra của bạn:"); 
let giuaKy = prompt ("Nhập điểm giữa kỳ của bạn:");
let cuoiKy = prompt ("Nhập điểm cuối kỳ của bạn:");

// 2. Tính điểm trung bình (hệ số: KT 1, Giữa Kỳ 2, Cuối Kỳ 3)
let dtb = (kiemTra + (giuaKy * 2) + (cuoiKy * 3)) / 6;
dtb = parseInt(dtb);

// 3. Xếp loại học lực bằng câu lệnh if...else
let xepLoai = "";

if (dtb >= 9.0) {
    xepLoai = "Xuất Sắc";
} else if (dtb >= 8.0) {
    xepLoai = "Giỏi";
} else if (dtb >= 6.5) {
    xepLoai = "Khá";
} else if (dtb >= 5.0) {
    xepLoai = "Trung Bình";
} else {
    xepLoai = "Yếu";
}

// 4. In kết quả ra màn hình
console.log("Điểm trung bình của bạn là: " + dtb.toFixed(2));
alert ("Điểm trung bình của bạn là: " + dtb.toFixed(2));
console.log("Xếp loại học lực: " + xepLoai);
alert ("Xếp loại học lực: " + xepLoai);
