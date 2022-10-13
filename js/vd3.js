//BÀI 3
function tienQuyDoi(){
    var soTien = document.getElementById('soTien').value;

    var tinhTien = 0;
    tinhTien = soTien * 23500;
    document.getElementById('tinhTien').innerHTML = tinhTien.toLocaleString();
}