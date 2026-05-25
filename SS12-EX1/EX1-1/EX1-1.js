let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
if (b === 0) {
    alert ("Không thể chia cho số 0")
} else if (a % b === 0) {
    alert ("a chia hết cho b");
} else {
    alert ("a không chia hết cho b");
    console.log("a không chia hết cho b");
}