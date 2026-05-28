// Bài 2: Tính giai thừa của một số nguyên dương
// Input: Nhập số nguyên dương n
// Process:
// Khởi tạo biến giaiThua = 1
// Dùng vòng lặp từ 1 đến n. Mỗi lần lặp: giaiThua = giaiThua * i
// Output: Hiển thị
//let n = 5;
// let giaiThua = 1;

// for (let i = 1; i <= n; i++) {
   // giaiThua *= i;
// }

// console.log("Giai thừa của", n, "là:", giaiThua);
let n = 6;
let a = 1;

for (let i = 1; i <= n; i++) {
    a *= i;
}

console.log("Giai thừa của", n, "là:", a);