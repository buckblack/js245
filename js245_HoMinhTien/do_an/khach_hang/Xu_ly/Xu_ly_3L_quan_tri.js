//var Dia_chi_Dich_vu = "https://js245dvdulieu.herokuapp.com/"
var Dia_chi_Dich_vu = "http://localhost:1000/"
//var Dia_chi_Media = "https://js245dvmedia.herokuapp.com"
var Dia_chi_Media = "http://localhost:1001/"
var ma_so_hd;
var ma_so_ban;


function Doc_ds_hoa_don() {
    return new Promise((result, err) => {
        var Du_lieu = {};
        var Xu_ly_HTTP = new XMLHttpRequest();
        var Tham_so = `Ma_so_Xu_ly=danh_sach_hoa_don`;
        var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
        Xu_ly_HTTP.send("");
        var Chuoi_JSON = Xu_ly_HTTP.responseText;
        if (Chuoi_JSON != "")
            Du_lieu = JSON.parse(Chuoi_JSON);
        result(Du_lieu);
    })
};

function Doc_ds_san_pham() {
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

function Thong_tin_san_pham(data) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=thong_tin_mon_an`;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send(JSON.stringify(data));
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
};

function Thong_tin_mon_an(data) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=thong_tin_mon_an`;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send(JSON.stringify(data));
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
};

function tim_hoa_don(mahd) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=tim_hoa_don/thamso=` + mahd;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send("");
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
};

function sum_tong_tien(Danh_sach) {
    var tong_tien = 0;
    Danh_sach.forEach(row => {
        tong_tien += row.so_luong * row.gia_ban
    });
    return tong_tien.toLocaleString('en-GB');
}

function Xuat_ds_hoa_don(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = "";
    Danh_sach.forEach(row => {
        Th_Cha.innerHTML += `
            <tr onclick="show_chi_tiet_hoa_don('${row.ma_hd}')" data-toggle="modal" data-target="#modal-detai">
                <td>${row.ma_hd}</td>
                <td>${row.ten_nv}</td>
                <td>${row.ngay_lap}</td>
                <td>${sum_tong_tien(row.chi_tiet)} VNĐ</td>
                <td class="table_ban d-none">${row.ma_ban}</td>
                <td class="table_status d-none">${row.trang_thai}</td>
                <td class="table_ghichu d-none"></td>
            </tr>
            `;
    });
}

function Xuat_ds_san_pham(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = "";
    Danh_sach.forEach(row => {
        Th_Cha.innerHTML += `
            <tr data-toggle="modal" data-target="#modal-detai" onclick="thongtinsp('${row.Ma_so}')">
                <td class="table_hinh d-none"><img style="width: 50px;" src="${Dia_chi_Media+'/'+ row.Ma_so}.png" alt=""></td>
                <td>${row.Ma_so}</td>
                <td>${row.Ten}</td>
                <td>${(row.Don_gia_Ban).toLocaleString('en-GB')}</td>
                <td>${row.Nhom_Mat_hang.Ten=='Điện thoại'?'Nước uống':'Món ăn'}</td>
            </tr>
            `;
    });
};

function thongtinsp(masp) {
    var monan = Thong_tin_san_pham({
        'ma_sp': masp
    });
    dia_chi_img.innerHTML=`
        <img src="${Dia_chi_Media+'/'+ monan.Ma_so}.png" class="w-100" alt="">
    `
    modaldetail.innerHTML = `
    <div class="h3 text-primary">Sản phẩm ABC</div>
    <div class="row">
        <div class="col-sm-3">
            <img src="${Dia_chi_Media+'/'+ monan.Ma_so}.png" class="img-fluid w-100" alt="" data-toggle="modal" data-target="#modal-loadhinh" >
        </div>
        <div class="col-sm-4">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Mã hàng hóa:</td>
                        <td><strong>${monan.Ma_so}</strong></td>
                    </tr>
                    <tr>
                        <td>Tên hàng hóa:</td>
                        <td><strong>${monan.Ten}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-5">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Loại hàng:</td>
                        <td><strong>${monan.Nhom_Mat_hang.Ten=='Điện thoại'?'Nước uống':'Món ăn'}</strong></td>
                    </tr>
                    <tr>
                        <td>Giá bán:</td>
                        <td><strong>${(monan.Don_gia_Ban).toLocaleString('en-GB')} VNĐ</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row float-right form-inline">
        <ul class="nav nav-pills nav-fill m-3">
                <li class="nav-item" id="btn_capnhat" onclick="capnhatsp('${monan.Ma_so}')" data-dismiss="modal" data-toggle="modal" data-target="#modal-update">
                    <a class="nav-link btn btn-success btn-lg mx-2 mt-2" href="#" 
                        ><i class="fa fa-check-circle-o"></i> Cập nhật</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn btn-primary btn-lg mx-2 mt-2" href="#"><i class=" fa fa-trash-o"></i> Xóa</a>
                </li>
            </ul>
    </div>
    `
}

function capnhatsp(masp) {
    var monan = Thong_tin_san_pham({
        'ma_sp': masp
    });
    modalupdate.innerHTML = `
    <div class="form-group">
        <label>Tên hàng</label>
        <input type="text" class="form-control" value='${monan.Ten}' placeholder="Nhập tên sản phẩm mới">
    </div>
    <div class="form-group">
        <label>Loại hàng</label>
        <select class="form-control">
            <option value='1' selected>Món ăn</option>
            <option value='2'>Nước uống</option>
        </select>
    </div>
    <div class="form-group">
        <label>Đơn giá</label>
        <input type="number" value='${monan.Don_gia_Ban}' class="form-control" placeholder="Nhập tên sản phẩm mới">
    </div>
    <div class="form-group">
        <label>Hình ảnh</label>
        <input type="file" class="form-control-file">
    </div>
    `
}


async function show_chi_tiet_hoa_don(mahd) {
    var hd = await tim_hoa_don(mahd);
    var ct = ``;
    var tongtien = 0;
    await hd.chi_tiet.forEach(row => {
        tongtien += (row.so_luong) * (row.gia_ban);
        ct += `
            <tr>
                <td>${row.ma_sp}</td>
                <td>${row.ten_sp}</td>
                <td>${row.gia_ban}</td>
                <td>${row.so_luong}</td>
                <td>${((row.so_luong)*(row.gia_ban)).toLocaleString('en-GB')}</td>
            </tr>
        `
    });
    TH_modal_detail.innerHTML = `
        <div class="row w-100">
            <div class="h3 text-primary mr-auto">Hóa đơn ${hd.ma_hd}</div>
            <div class="h3 text-danger">Tổng tiền:${(tongtien).toLocaleString('en-GB')} VNĐ</div>
        </div>
        <div class="row w-100">
            <div class="h6 mr-auto">Người lập: ${hd.ten_nv}</div>
            <div class="h6">Ngày lập: ${hd.ngay_lap}</div>
        </div>
        <div class="row w-100">
            <div class="h6 mr-auto">Khách hàng: Khách lẻ</div>
            <div class="h6">Tình trạng:${hd.trang_thai}</div>
        </div>
        <div class="row">
            <div class="col-sm-12">

            </div>
            <div class="col-sm-12">
                <table class="table table-striped table-hover table-bordered table-responsive d-lg-table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá bán</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${ct}
                    </tbody>
                </table>
            </div>
        </div>
    `
}

function Ghi_Media(Hinh) {
    
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi_Xu_ly = `${Dia_chi_Media}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Hinh)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_KQ = Xu_ly_HTTP.responseText
    return Chuoi_KQ
}
function Ghi_san_pham_moi(Dien_thoai) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=ghi_san_pham_moi`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Dien_thoai)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}
//==============================================