//var Dia_chi_Dich_vu = "https://js245dvdulieu.herokuapp.com/"
var Dia_chi_Dich_vu = "http://localhost:1000/"
//var Dia_chi_Media = "https://js245dvmedia.herokuapp.com"
var Dia_chi_Media = "http://localhost:1001/"
var ma_so_hd;
var ma_so_ban;

function Doc_ds_ban() {
    return new Promise((result, err) => {
        var Du_lieu = {};
        var Xu_ly_HTTP = new XMLHttpRequest();
        var Tham_so = `Ma_so_Xu_ly=danh_sach_ban`;
        var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
        Xu_ly_HTTP.send("");
        var Chuoi_JSON = Xu_ly_HTTP.responseText;
        if (Chuoi_JSON != "")
            Du_lieu = JSON.parse(Chuoi_JSON);
        result(Du_lieu);
    })
};

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

function Doc_ds_thuc_don() {
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

function tim_ban(ma_ban) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=tim_ban/thamso=` + ma_ban;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send("");
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

function ma_hoa_don_moi() {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=hoa_don_moi`;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send("");
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
};

function doi_so_luong(data) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=doi_so_luong`;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send(JSON.stringify(data));
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
};

function xoa_chi_tiet(data) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=xoa_chi_tiet`;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send(JSON.stringify(data));
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
};

function xu_ly_thanh_toan(data) {
    return new Promise((res, err) => {
        var Du_lieu = {};
        var Xu_ly_HTTP = new XMLHttpRequest();
        var Tham_so = `Ma_so_Xu_ly=xu_ly_thanh_toan`;
        var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
        Xu_ly_HTTP.send(JSON.stringify(data));
        var Chuoi_JSON = Xu_ly_HTTP.responseText;
        if (Chuoi_JSON != "")
            Du_lieu = JSON.parse(Chuoi_JSON);
        res(Du_lieu);
    })

};

function xu_ly_ngung_phuc_vu(data) {
    return new Promise((res, err) => {
        var Du_lieu = {};
        var Xu_ly_HTTP = new XMLHttpRequest();
        var Tham_so = `Ma_so_Xu_ly=xu_ly_ngung_phuc_vu`;
        var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
        Xu_ly_HTTP.send(JSON.stringify(data));
        var Chuoi_JSON = Xu_ly_HTTP.responseText;
        if (Chuoi_JSON != "")
            Du_lieu = JSON.parse(Chuoi_JSON);
        res(Du_lieu);
    })

};

function chon_mon_an_vao_chi_tiet(data) {
    return new Promise((res, err) => {
        var Du_lieu = {};
        var Xu_ly_HTTP = new XMLHttpRequest();
        var Tham_so = `Ma_so_Xu_ly=chon_mon_an_vao_chi_tiet`;
        var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
        Xu_ly_HTTP.send(JSON.stringify(data));
        var Chuoi_JSON = Xu_ly_HTTP.responseText;
        if (Chuoi_JSON != "")
            Du_lieu = JSON.parse(Chuoi_JSON);
        console.log(Du_lieu);
        res(Du_lieu);
    })
};

function Xuat_ds_thuc_don(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = "";
    Danh_sach.forEach(mon_an => {
        Th_Cha.innerHTML += `
        <div class="card text-center bg-light px-2 m-2" onclick="chon_mon('${mon_an.Ma_so}')">
            <img class="card-img-top px-3" style="width:120px" src="${Dia_chi_Media+'/'+ mon_an.Ma_so}.png" alt="Card image cap">
            <div class="card-body p-0">
                <p class="card-text">${mon_an.Ten}</p>
                <strong class="card-text">${(mon_an.Don_gia_Ban).toLocaleString('en-GB')}</strong>
            </div>
        </div>
            `;
    });
};
async function xuat_chi_tiet(mahd) {
    var hd = await tim_hoa_don(mahd);
    ds_mon.innerHTML = ''
    var dem = 1;
    var tongtien = 0;
    hd.chi_tiet.forEach(row => {
        ds_mon.innerHTML += `
        <tr id="tr_gio_hang_${row.ma_sp}">
            <th class="align-middle">${dem++}</th>                <!--hóa đơn, món, số lượng -->
            <td class="align-middle"><a href="#" onclick="xoa_gio_hang('${mahd}','${row.ma_sp}')"><i class="fa fa-remove text-danger"></i></a></td>
            <td class="align-middle">${row.ten_sp}</td>
            <td class="align-middle"><input class="form-control hoa-don" id="soluong_${row.ma_sp}" type="number" onchange="doi_so_luong_chi_tiet('${hd.ma_hd}','${row.ma_sp}')" type="number" value="${row.so_luong}"></td>
            <td class="align-middle" id='gia_1'>${(row.gia_ban).toLocaleString('en-GB')}</td>
            <td class="align-middle"><strong id='tongtien_1'>${((row.gia_ban)*(row.so_luong)).toLocaleString('en-GB')}</strong></td>
        </tr>
        `;
        tongtien += (row.gia_ban) * (row.so_luong);
    });
    TH_tongtien.innerHTML = tongtien.toLocaleString('en-GB') + ' VNĐ'
}

async function doi_so_luong_chi_tiet(mahd, masp) {
    var sl = document.getElementById('soluong_' + masp)
    if (Number(sl.value) <= 0) {
        alert('Số lượng không hợp lệ');
        return;
    }
    var data = {
        'ma_hd': mahd,
        'ma_sp': masp,
        'so_luong': sl.value
    }
    await doi_so_luong(data);
    xuat_chi_tiet(ma_so_hd);
}

async function xoa_gio_hang(mahd, masp) {
    if (!confirm('xác nhận xóa!')) {
        return;
    }
    var data = {
        'ma_hd': mahd,
        'ma_sp': masp,
    }
    await xoa_chi_tiet(data);
    xuat_chi_tiet(ma_so_hd);
}

async function chon_ban(ma_ban) {
    /*var ban = document.getElementById(`ban_${ma_ban}`)
    var img = ban.getAttribute("src");
    ban.setAttribute("src", "../../images/chair2.png")*/
    var ban = tim_ban(ma_ban);
    TH_soban.innerHTML = ma_ban;
    var mahd;
    if (ban.hoa_don_phuc_vu != '') {
        ds_mon.innerHTML = ``;
        mahd = ban.hoa_don_phuc_vu;
        xuat_chi_tiet(ban.hoa_don_phuc_vu);
    } else {
        mahd = await ma_hoa_don_moi();
        ds_mon.innerHTML = ``;
    }
    ma_so_hd = mahd;
    ma_so_ban = ma_ban;
    TH_mahd.innerHTML = `Hóa đơn ${mahd}`
    document.getElementById('pills-profile-tab').click();
}

function Xuat_ds_ban(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = "";
    Danh_sach.forEach(ban => {
        Th_Cha.innerHTML += `
        <div class="card text-center border-0 bg-light px-4" style="width: 100px;" onclick="chon_ban(${ban.ma_ban})">
            <img class="card-img-top px-3" src="${ban.trang_thai=='trống'?'../../images/chair.png':'../../images/chair2.png'}" ${ban.trang_thai} alt="Card image cap"  id="ban_${ban.ma_ban}">
            <div class="card-body p-0">
                <p class="card-text">Bàn ${ban.ma_ban}</p>
            </div>
        </div>
            `;
    });
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

async function chon_mon(mamon) {
    if (ma_so_hd == undefined || ma_so_ban == undefined) {
        alert('Chua chọn bàn');
        return;
    }
    var monan = Thong_tin_mon_an({
        'ma_sp': mamon
    });
    var data = {
        "ma_hd": ma_so_hd,
        "ma_mon": mamon,
        "ma_ban": ma_so_ban,
        "chi_tiet": {
            'ma_sp': mamon,
            'ten_sp': monan.Ten,
            'gia_ban': monan.Don_gia_Ban,
            'so_luong': 1,
        }
    }
    chon_mon_an_vao_chi_tiet(data).then(r => {
        TH_ds_ban.innerHTML = "";
    })
    Doc_ds_ban().then(r => {
        Xuat_ds_ban(r, TH_ds_ban);
        xuat_chi_tiet(ma_so_hd);
    })
}
async function thanh_toan() {
    if (ma_so_hd == undefined) {
        alert('Chưa chọn bàn');
        return;
    }
    if (!confirm('Xác nhận thanh toán')) {
        return;
    }
    var data = {
        'trang_thai': 'đã thanh toán',
        'ma_hd': ma_so_hd
    }
    xu_ly_thanh_toan(data).then(r => {
        if (r == 'ok')
            alert('Thanh toán thành công')
        else
            alert('Có lỗi khi thanh toán')
    });
}

async function ngung_phuc_vu() {
    if (ma_so_ban == undefined) {
        alert('Chưa chọn bàn!')
        return;
    }
    if (ma_so_hd == undefined) {
        return;
    }
    if (!confirm('Xác nhận ngưng phục vụ?')) {
        return;
    }
    var hd = tim_hoa_don(ma_so_hd)
    if (hd != null) {
        if (hd.trang_thai == 'chưa thanh toán') {
            alert('Hóa đơn này chưa thanh toán!')
            return;
        } else {
            xu_ly_ngung_phuc_vu({
                'ma_ban': ma_so_ban
            }).then(r => {
                if (r == 'ok') {
                    ma_so_hd = undefined;
                    ma_so_ban = undefined;
                    ds_mon.innerHTML = ``;
                    TH_soban.innerHTML = ``;
                    TH_mahd.innerHTML=`Hóa đơn`
                    TH_tongtien.innerHTML = `0 VNĐ`
                    Doc_ds_ban().then(res => {
                        Xuat_ds_ban(res, TH_ds_ban);
                    });
                }
            })
        }
    }

}

//==============================================