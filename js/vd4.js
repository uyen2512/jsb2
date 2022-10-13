function tinhCVDT() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    var chuVi = 0;
    var dienTich = 0;
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    dienTich = Number(chieuDai) * Number(chieuRong);

    document.getElementById('chuVi').innerHTML = chuVi ;
    document.getElementById('dienTich').innerHTML = dienTich;
}