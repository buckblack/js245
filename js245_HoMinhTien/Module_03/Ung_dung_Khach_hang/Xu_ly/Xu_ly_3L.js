
//************** Xử lý Lưu trữ ***********
//************** Khai báo đường dẫn Dịch vụ  ***********

var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Media = "http://localhost:1001"

//************** Các Hàm Xử lý Đọc Xuất   ***********

function Khach_hang_Lien_he(noi_dung) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Khach_hang_Lien_he`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_goi = noi_dung
    Xu_ly_HTTP.send(Chuoi_goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//========================================
function Doc_Cua_hang() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Cua_hang`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}


function Xuat_Cua_hang(Cua_hang, Th_Cha) {
    var Chuoi_HTML = `
    <img src="${Dia_chi_Media}/${Cua_hang.Ma_so}.png" class="btn" />
        <div class="text-center btn btn-outline-primary">${Cua_hang.Ten}
            <br>
            <small> ${Cua_hang.Dia_chi}</small>
     </div>
    `
    Th_Cha.innerHTML = Chuoi_HTML

}


function Doc_Danh_sach_Dien_thoai() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}


function Tao_the_hien_Upload(Th_Cha) {
    Th_Cha.innerHTML = ""
    var The_hien = document.createElement("table");
    Th_Cha.appendChild(The_hien);
    The_hien.className = "table table-bordered";
    var noi_dung = "";
    noi_dung += `<tr>`
    noi_dung += `<td>Họ Tên</td><td><input type="text" id="Th_Ten" style="width:20rem" /></td>`
    noi_dung += `</tr>`
    noi_dung += `<tr>`
    noi_dung += `<td>Điện thoại</td><td><input type="text" id="Th_Dien_thoai" /></td>`
    noi_dung += `</tr>`
    noi_dung += `<tr>`
    noi_dung += `<td>Tập tin (pdf)</td><td><input type="file" id="Th_file" /></td>`
    noi_dung += `</tr>`
    noi_dung += `<tr align="center">`
    noi_dung += `<td colspan=2><button class="btn btn-danger" onclick="XL_Upload()">Đồng ý</button> </td>`
    noi_dung += `</tr>`
    The_hien.innerHTML = noi_dung
}

function XL_Upload() {
    var Ngay = Tao_Chuoi_The_hien_Ngay()
    Ngay = Ngay.replace(/[/]/g,"_")
    var Ma_so = `Don_Xin_Ung_tuyen-${Ngay}-${Th_Dien_thoai.value}.pdf`
    var reader = new FileReader();
    var Du_lieu_pdf = "";
    reader.onload = function (e) {
        Du_lieu_pdf = e.target.result;
        console.log(Du_lieu_pdf)
        var Du_lieu = { "Chuoi_nhi_phan": Du_lieu_pdf, "Ten": Ma_so };
        
        var Xu_ly_HTTP = new XMLHttpRequest()
        var Dia_chi_Xu_ly = `${Dia_chi_Media}/Ghi_PDF`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
        var Chuoi_Goi = JSON.stringify(Du_lieu)
        Xu_ly_HTTP.send(Chuoi_Goi)
        var Chuoi_KQ = Xu_ly_HTTP.responseText
        return Chuoi_KQ
        
    }
    Th_Thong_bao.innerHTML="Cửa hàng Chúng tôi đã nhận đơn của bạn.<br>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất"
    reader.readAsDataURL(Th_file.files[0]);
    Th_Close.click()
}

//==============================================

function Xuat_Danh_sach_Dien_thoai(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = ""
    var dsChon=[]
    if (sessionStorage.getItem("Danh_sach_Chon") != undefined) {
         dsChon= JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
    }
    Danh_sach.forEach(Dien_thoai => {
        var The_hien = document.createElement("div")
        The_hien.className = "card"
        if (dsChon.length > 0) {
            var vt = dsChon.indexOf(Dien_thoai.Ma_so)
            if (vt != -1) {
                The_hien.className += " CHON"
            }
        }



        The_hien.style.cssText = "width:18rem;float:left"


        var dt = {
            "Ma_so": Dien_thoai.Ma_so,
            "Ten": Dien_thoai.Ten
        }
        The_hien.setAttribute("data", JSON.stringify(dt))


        var Noi_dung_HTML = `
        <img class="card-img-top" src="${Dia_chi_Media}/${Dien_thoai.Ma_so}.png" alt="">
        <div class="card-body">
            <p class="card-title text-primary">${Dien_thoai.Ten}</p>
            <p class="card-text text-danger">Giá:${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Ban)} đồng </p>
        </div>
        `
        The_hien.innerHTML = Noi_dung_HTML
        Th_Cha.appendChild(The_hien)

        The_hien.onclick = () => {
            //alert(Dien_thoai.Ten)
            The_hien.classList.toggle("CHON")
            /*
            // Luu Session
            // Gán
            //sessionStorage.setItem("gio_hang",Dien_thoai.Ma_so)
            // Lấy
            //console.log(sessionStorage.getItem("gio_hang"))
            // Xóa
            //sessionStorage.removeItem("gio_hang")
            //console.log(sessionStorage.length)
            */

            // Lưu Session HTML5

            var ds = []
            if (sessionStorage.getItem("Danh_sach_Chon") != undefined) {
                ds = JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
            }
            var vt = ds.indexOf(Dien_thoai.Ma_so)
            if (vt == -1) {
                ds.push(Dien_thoai.Ma_so)
            } else {
                ds.splice(vt, 1)
            }

            if (ds.length > 0) {
                sessionStorage.setItem("Danh_sach_Chon", JSON.stringify(ds))
            } else {
                sessionStorage.removeItem("Danh_sach_Chon")
            }

            Th_Gio_hang.innerHTML = `${ds.length} item `


        }
        Th_Thong_bao.innerHTML = `Danh sách Điện thoại: ${Danh_sach.length} `
    })
}

// =============================Giỏ hàng===============================
function Ghi_Phieu_Dat_hang(DsPhieu_dat) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Ghi_Phieu_Dat_hang`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_goi = JSON.stringify(DsPhieu_dat)
    Xu_ly_HTTP.send(Chuoi_goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}



//************** Các Hàm Xử lý Số, Ngày    ***********

//==============================================================================
// Xử lý biến Số nguyên
function Nhap_So_nguyen_duong(Th_So_nguyen) {
    var Kq = {}
    Kq.So_nguyen = parseInt(Th_So_nguyen.value.trim())
    Kq.Hop_le = !isNaN(Kq.So_nguyen) && Kq.So_nguyen > 0
    return Kq
}

function Tao_Chuoi_The_hien_So_nguyen_duong(So_nguyen) {
    var Chuoi_The_hien = ""
    var Chuoi_So_nguyen = So_nguyen.toString()
    var So_Ky_so = Chuoi_So_nguyen.length
    if (So_Ky_so % 3 == 0) {
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    } else if (So_Ky_so % 3 == 1) {
        Chuoi_The_hien = Chuoi_So_nguyen[0]
        if (So_Ky_so > 1)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(1)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."

        }
    } else if (So_Ky_so % 3 == 2) {
        Chuoi_The_hien = Chuoi_So_nguyen[0] + Chuoi_So_nguyen[1]
        if (So_Ky_so > 2)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(2)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    }
    return Chuoi_The_hien
}
// Xử lý Biến Số thực
function Nhap_So_thuc_duong(Th_So_thuc) {
    var Kq = {}
    Kq.So_thuc = parseInt(Th_So_thuc.value.trim())
    Kq.Hop_le = !isNaN(Kq.So_thuc) && Kq.So_thuc > 0
    return Kq
}

function Tao_Chuoi_The_hien_So_thuc_duong(So_thuc, So_so_le) {
    So_thuc = parseFloat(So_thuc)
    var Chuoi_The_hien = ""
    if (!So_so_le)
        So_so_le = 2
    var Thanh_phan_con = So_thuc
        .toFixed(So_so_le)
        .split(".")
    Chuoi_The_hien = Tao_Chuoi_The_hien_So_nguyen_duong(Thanh_phan_con[0])
    if (Thanh_phan_con.length == 2 && parseInt(Thanh_phan_con[1]) != 0 && So_so_le > 0)
        Chuoi_The_hien += "," + Tao_Chuoi_The_hien_So_nguyen_duong(Thanh_phan_con[1])
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Tien(So_tien, n) {
    if (!n)
        n = 0

    var Chuoi_The_hien = Tao_Chuoi_The_hien_So_thuc_duong(So_tien, n)

    return Chuoi_The_hien
}

// Xử lý với Biến Ngày
function La_Ngay_Hien_hanh(Ngay) {
    var Ngay_Hien_hanh = new Date()
    Ngay = new Date(Ngay)
    var Kq = Ngay_Hien_hanh.getDate() == Ngay.getDate() &&
        Ngay_Hien_hanh.getMonth() == Ngay.getMonth() &&
        Ngay_Hien_hanh.getFullYear() == Ngay.getFullYear()

    return Kq
}

function Tao_Chuoi_The_hien_Ngay(Ngay) {
    var Chuoi_The_hien = ""
    if (!Ngay)
        Ngay = new Date()
    Chuoi_The_hien = Ngay.getDate() + "/" + (Ngay.getMonth() + 1) + "/" + Ngay.getFullYear()
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Gio(Ngay) {
    var Chuoi_The_hien = ""
    if (!Ngay)
        Ngay = new Date()
    Chuoi_The_hien = Ngay.getHours() + ":" + Ngay.getMinutes() + ":" + Ngay.getMinutes()
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Ngay_Gio(Ngay) {
    var Chuoi_The_hien = Tao_Chuoi_The_hien_Ngay(Ngay) + " " + Tao_Chuoi_The_hien_Gio(Ngay)
    return Chuoi_The_hien
}

function Kiem_tra_Ngay(Chuoi_ngay) {
    var Thanh_phan_con = Chuoi_ngay.split("/")
    var Hop_le = Thanh_phan_con.length == 3 && !isNaN(Thanh_phan_con[0]) && !isNaN(Thanh_phan_con[1]) && !isNaN(Thanh_phan_con[2])
    if (Hop_le) {
        var Ng = parseInt(Thanh_phan_con[0])
        var Th = parseInt(Thanh_phan_con[1])
        var Nm = parseInt(Thanh_phan_con[2])
        var So_ngay_cua_Th = new Date(Nm, Th, 0).getDate()
        // var So_ngay_cua_Th = new Date(Nm, Th+1 , 0).getDate()
        Hop_le = Ng >= 1 && Ng <= So_ngay_cua_Th && Th >= 1 && Th <= 12 && Nm > 0
    }
    return Hop_le
}

function Nhap_Ngay(Th_Ngay) {
    var Kq = {}
    var Chuoi_Ngay = Th_Ngay
        .value
        .trim()
    Kq.Hop_le = Kiem_tra_Ngay(Chuoi_Ngay)
    if (Kq.Hop_le) {
        var Thanh_phan_con = Chuoi_ngay.split("/")
        Kq.Ngay = new Date(Thanh_phan_con[1] + "-" + Thanh_phan_con[0] + "-" + Thanh_phan_con[2])
    }

    return Kq
}





