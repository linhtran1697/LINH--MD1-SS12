// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. 
// Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, 
// yêu cầu người dùng tăng nhiệt độ.
// Bước 1: Tạo 1 prompt để người dùng nhập nhiệt độ vào

let i = +prompt ("Hãy nhập nhiệt độ bạn muốn kiểm tra");
while (i !== null) {
    if (i > 100) {
        console.log("Hãy giảm nhiệt độ xuống");
    } else if (i < 20) {
        console.log("Hãy tăng nhiệt độ lên");
    } else 
        console.log("Nhiệt độ phù hợp");
        break;
}
