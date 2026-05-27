 
// Input: 
// Khởi tạo số nguyên cần kiểm tra bắt đầu từ num=2 (số nguyên tố đầu tiên)
console.log("20 số nguyên tố đầu tiên là:");
let number = 2
// Đặt một biến đếm count=0 để đếm các số nguyên đã tìm thấy
let count = 0
// Process:
// Dùng lặp while để chạy liên tục các biến sao cho count < 20
while (count < 20) {
    // Tạo biến cờ để giả định số đang xét là số nguyên tố
    let isPrime = true;
    // Dùng lặp for để kiểm tra Nếu lớn hơn 1 và chỉ chia hết cho 1 và chính nó => số nguyên tố
    for (let i = 2; i < number; i++ ) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    } 
    if (isPrime) { 
        console.log(number)
        count++;
    }
    number++;
}
// Dùng if để kiểm tra: Nếu số đó chia hết =>>  Không phải số nguyên tố và dùng break để thoát vòng lặp.
// Nếu isPrime == true sau khi kiểm tra xong, tăng biến đếm
// Tăng number lên 1 đơn vị sau mỗi lần lặp.
// Output:
// Hiện thị kết qủa của chuỗi kết quả cho người dùng