function tinhLuong() {
    var luong1ngay = 100000;
    var songaylam = document.getElementById("numbervd1").value;
    var Luong = 0;
    Luong = luong1ngay * songaylam;
    document.getElementById("Luong").innerHTML = Luong.toLocaleString();
}






