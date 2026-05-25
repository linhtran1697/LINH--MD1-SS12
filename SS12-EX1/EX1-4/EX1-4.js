let a = 5;
let b = 10;
let c = 7;
let max = a; // Giả sử a là số lớn nhất

if (b > max) {
    max = b; // Nếu b lớn hơn max, gán max = b
}
if (c > max) {
    max = c; // Nếu c lớn hơn max, gán max = c
}

console.log("Số lớn nhất là: " + max); // Kết quả: 10
alert("Số lớn nhất là: " + max);