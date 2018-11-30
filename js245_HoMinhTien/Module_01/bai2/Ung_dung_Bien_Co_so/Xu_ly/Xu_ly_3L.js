//************** Xử lý Lưu trữ ***********
var Duong_dan_Du_lieu=`../Du_lieu_Luu_tru`

function Doc_Du_lieu_TXT(){
    var Xu_ly_HTTP=new XMLHttpRequest()
    var Tap_tin=`ho_ten.txt`
    
    var Dia_chi_Xu_ly=`${Duong_dan_Du_lieu}/${Tap_tin}`
    
    Xu_ly_HTTP.open(`GET`,`${Dia_chi_Xu_ly}`,false) // Đồng bộ
    Xu_ly_HTTP.send()
    var Chuoi_ket_qua=Xu_ly_HTTP.responseText.trim()
    return Chuoi_ket_qua
}