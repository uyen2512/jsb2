function tinhTrungBinh() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    var TrungBinh = 0;
    // console.log(typeof(num1)); => tất cả dữ liệu form đều là string
    // chuyển string thành number (ép kiểu) int,float
    // parseFloat
    // parseInt
    // + : 2 tính năng: + các số, nối chuỗi kí tự


    TrungBinh = (Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5)) / 5;
    document.getElementById('TrungBinh').innerHTML = TrungBinh;
}
