
var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Media = "http://localhost:1001"
//************** Xử lý Lưu trữ ***********

function Doc_Du_lieu_Cau_thu(){
  var Tham_so=`Ma_so_Xu_ly=DOC_CAU_THU`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send()
  
  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if(Chuoi_JSON!="")
    return JSON.parse(Chuoi_JSON) 
}


function Doc_Du_lieu_Cua_hang(){
  var Tham_so=`Ma_so_Xu_ly=DOC_CUA_HANG`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send()
  
  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if(Chuoi_JSON!="")
    return JSON.parse(Chuoi_JSON) 
}



function Ghi_Thong_tin_Cua_hang_Moi(Cua_hang){
  var Kq=""
  var Chuoi_JSON = JSON.stringify(Cua_hang)
  var Tham_so=`Ma_so_Xu_ly=Ghi_Thong_tin_Cua_hang_Moi`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send(Chuoi_JSON)
  var Kq = Xu_ly_HTTP.responseText
  return Kq 
}




function Doc_Du_lieu_Hoa_don(){
  var Tham_so=`Ma_so_Xu_ly=Doc_Hoa_don`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send()

  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if(Chuoi_JSON!="")
    return JSON.parse(Chuoi_JSON) 
}

function Xuat_Hoa_don(Hoa_don,Th_Cha){
  var Chuoi_HTML=`
  <div>${Hoa_don.Ten} : ${Hoa_don.Ma_so}</div>
  <div>Ngày hóa đơn ${Hoa_don.Ngay_Hoa_don} </div>
  <div>Trị giá: ${Hoa_don.Tri_gia}</div>
  <div>Nhân viên nhập: ${Hoa_don.Nhan_vien.Ten} </div>
  `
  Th_Cha.innerHTML=Chuoi_HTML
}


function Doc_Du_lieu_Hoc_vien(){
  var Tham_so=`Ma_so_Xu_ly=Doc_Hoc_vien`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send()

  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if(Chuoi_JSON!="")
    return JSON.parse(Chuoi_JSON) 
}

function Xuat_Thong_tin_Cua_hang(Cua_hang,Th_Cha){
  var Chuoi_HTML=`
  <img src="http://localhost:1001/${Cua_hang.Ma_so}.png" class="btn" />
  <div class="text-center btn btn-outline-primary">${Cua_hang.Ten}
      <br>
      <small> ${Cua_hang.Dia_chi}</small>
  </div>
  `
  Th_Cha.innerHTML=Chuoi_HTML
}

function Xuat_thong_tin_hoc_vien(Hoc_vien,Th_Hoc_vien){
  
  var Chuoi_HTML=`
  <div id="Th_Ho_ten">Họ tên: ${Hoc_vien.Ho_ten}</div>
  <div>Ngày sinh: ${Hoc_vien.Ngay_sinh}</div>
  <div>Địa chỉ: ${Hoc_vien.Dia_chi}</div>
  `
  Th_Hoc_vien.innerHTML=Chuoi_HTML
}



function Ghi_Thong_tin_Dien_thoai_Moi(Dien_thoai){
  var Kq=""
  var Chuoi_JSON = JSON.stringify(Dien_thoai)
  var Tham_so=`Ma_so_Xu_ly=Ghi_Thong_tin_Dien_thoai_Moi`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send(Chuoi_JSON)
  var Kq = Xu_ly_HTTP.responseText
  return Kq 
}

function Doc_Du_lieu_Dien_thoai(){
  var Du_lieu={}
  var Xu_ly_HTTP = new XMLHttpRequest()  
  var Tham_so=`Ma_so_Xu_ly=Doc_Dien_thoai`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send("")
  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if (Chuoi_JSON !="")
    Du_lieu=JSON.parse(Chuoi_JSON)
  return Du_lieu 
}

function Tao_The_hien_Dien_thoai(Dien_thoai,Th_Cha){
  var the_hien=document.createElement("div")
  Th_Cha.appendChild(the_hien)
  var Chuoi_HTML=`<div class="card" style="width:20rem">
  <img class="card-img-top" src="${Dia_chi_Media}/${Dien_thoai.Ma_so}.png" alt="">
  <div class="card-body">
      <h4 class="card-title">${Dien_thoai.Ten}</h4>
      <p class="card-text">Đơn giá Bán: ${Dien_thoai.Don_gia_Ban}</p>
  </div>
</div>`
  the_hien.innerHTML=Chuoi_HTML;
  return the_hien
}

