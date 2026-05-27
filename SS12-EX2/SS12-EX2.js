// Bước 1: Gán giá trị cho biến cạnh hình vuông là a
let a = +prompt("Nhập cạnh hình vuông bạn muốn tính diện tích");
// Bước 2 : Kiểm tra biến, 
// Nếu biến a >0 Tính tính diện tích theo công thức: dientichS=a*a=0 
// =>> Hiển trị trên màn hình console 
// Nếu biến a===0 thì hiện màn hình "Cạnh phải có số đo khác 0"
// Các trường hợp còn lại thì  hiện là "Cạnh có số đo chưa hợp lệ "
if (a > 0) {
    let S = a*a
   console.log("Diện tích hình vuông là:" + S);
} else if (a===0) {
    console.log("Cạnh phải có số đo khác 0");
} else {
    console.log("Cạnh có số đo chưa hợp lệ");
}
