function tinhTong() {
    var num = document.getElementById('num').value;
    var ten = 0;
    var unit = 0;
    var Tong = 0;

    ten = Math.floor(num/10);
    unit = Math.floor(num%10);
    Tong = ten + unit;
    document.getElementById("tinhTong").innerHTML = Tong ;

}