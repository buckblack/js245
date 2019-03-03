var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Media = "http://localhost:1001"


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

function Doc_ds_mon_an(tukhoa) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=Doc_ds_mon_an`;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send("");
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
};

//==============================================

function Xuat_ds_mon_an(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = "";
    Danh_sach.forEach(mon_an => {
        Th_Cha.innerHTML += `
            <div class="col-md-4 col-lg-3 my-2 px-1">
                <div class="card text-center">
                    <a href="#" onclick="showdetail('${mon_an.Ma_so}')" data-toggle="modal" data-target="#modelId"><img class="card-img-top img-fluid img-thumbnail" style="height:265px;" src="${Dia_chi_Media}/${mon_an.Ma_so}.PNG"
                            alt=""></a>
                    <div class="card-body">
                        <h5 class="card-title">${mon_an.Ten}</h5>
                        <p class="card-text text-danger">${(mon_an.Don_gia_Ban).toLocaleString('en-GB')} VNĐ</p>
                    </div>
                </div>
            </div>
            `;
    });
    if (Danh_sach.length == 0) {
        TH_thongbao.innerHTML = "Không có sản phẩm nào được tìm thấy"
    }
    else
    {
        TH_thongbao.innerHTML='';
    }
};

function showdetail(id) {
    var mon_an = Doc_ds_mon_an().find(x => x.Ma_so == id);
    model_detail.innerHTML = `
    <div class="text-center">
        <img src="${Dia_chi_Media}/${mon_an.Ma_so}.PNG" class="img-fluid w-100" alt="">
    </div>
    <b>Tên: <span class="h3">${mon_an.Ten}</span></b></br>
    <b>Giá: <span class="h3">${(mon_an.Don_gia_Ban).toLocaleString('en-GB')} VNĐ</span></b></br>
    <b>Loại: <span class="h3">${mon_an.Nhom_Mat_hang.Ten=='Điện thoại'?'Món ăn':'Nước uống'}</span></b></br>
    `
}

function xep_theo_loai(ds_monan, ma_loai) {
    if (ma_loai == 1) {
        ds_monan = ds_monan.filter(x => x.Nhom_Mat_hang.Ma_so == 'MON_AN')
    } else if (ma_loai == 2) {
        ds_monan = ds_monan.filter(x => x.Nhom_Mat_hang.Ma_so == 'CA_PHE')
    } else {}
    return ds_monan;
}

function xep_theo_gia(ds_monan, ma_loai) {
    if (ma_loai == 1) {
        ds_monan = ds_monan.sort((a, b) => {
            return parseInt(a.Don_gia_Ban) - parseInt(b.Don_gia_Ban)
        })
    } else if (ma_loai == 2) {
        ds_monan = ds_monan.sort((a, b) => {
            return parseInt(b.Don_gia_Ban) - parseInt(a.Don_gia_Ban)
        })
    } else {}
    return ds_monan;
}

function tim_kiem(tukhoa) {
    var kq = Doc_ds_mon_an().filter(x => x.Ten.toLowerCase().includes(tukhoa.trim().toLowerCase()));
    console.log(kq);
    return kq;

}

