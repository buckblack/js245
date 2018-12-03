//************** Xử lý Lưu trữ ***********
var Duong_dan_Du_lieu=`../Du_lieu_Luu_tru`
var Dia_chi_Dich_vu = "http://localhost:1000"


function Doc_Du_lieu_TXT(){
    var Xu_ly_HTTP=new XMLHttpRequest()
    var Tap_tin=`ho_ten.txt`
    var Dia_chi_Xu_ly=`${Duong_dan_Du_lieu}/${Tap_tin}`
    Xu_ly_HTTP.open(`GET`,`${Dia_chi_Xu_ly}`,false)
    Xu_ly_HTTP.send()
    var Chuoi_ket_qua=Xu_ly_HTTP.responseText.trim()
    return Chuoi_ket_qua
}
function Doc_Du_lieu_JSON(){
    var Xu_ly_HTTP=new XMLHttpRequest()
    var Tap_tin=`ho_ten.json`
    var Dia_chi_Xu_ly=`${Duong_dan_Du_lieu}/${Tap_tin}`
    Xu_ly_HTTP.open(`GET`,`${Dia_chi_Xu_ly}`,false)
    Xu_ly_HTTP.send()
    var Chuoi_ket_qua=Xu_ly_HTTP.responseText.trim()
    return Chuoi_ket_qua
}

function Doc_Du_lieu_Cua_hang_JSON(){
    var Xu_ly_HTTP=new XMLHttpRequest()
    var Tap_tin=`cua_hang.json`
    var Dia_chi_Xu_ly=`${Duong_dan_Du_lieu}/${Tap_tin}`
    Xu_ly_HTTP.open(`GET`,`${Dia_chi_Xu_ly}`,false)
    Xu_ly_HTTP.send()
    var Chuoi_ket_qua=Xu_ly_HTTP.responseText.trim()
    return JSON.parse(Chuoi_ket_qua) // Đối tượng
}

///////////////////////////////////////////////////////////////

function Doc_Du_lieu_Cua_hang(){
    var Xu_ly_HTTP=new XMLHttpRequest()
    var Tham_so="Ma_so_Xu_ly=Doc_Thong_tin_Cua_hang"
    var Dia_chi_Xu_ly=`${Dia_chi_Dich_vu}/${Tham_so}`
    Xu_ly_HTTP.open(`POST`,`${Dia_chi_Xu_ly}`,false)
    Xu_ly_HTTP.send()
    var Chuoi_ket_qua=Xu_ly_HTTP.responseText.trim()
    return JSON.parse(Chuoi_ket_qua) // Đối tượng
}







