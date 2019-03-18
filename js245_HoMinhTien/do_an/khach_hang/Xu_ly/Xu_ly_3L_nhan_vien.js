//var Dia_chi_Dich_vu = "https://js245dvdulieu.herokuapp.com/"
var Dia_chi_Dich_vu = "http://localhost:1000/"
var Dia_chi_Media = "https://js245dvmedia.herokuapp.com"
var ma_so_hd;
var ma_so_ban;

function Doc_ds_ban() {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=danh_sach_ban`;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    console.log(Dia_chi_Xu_ly);

    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send("");
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
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

function tim_ban(ma_ban) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    var Tham_so = `Ma_so_Xu_ly=tim_ban/thamso=` + ma_ban;
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`;
    console.log(Dia_chi_Xu_ly);
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
    console.log(Dia_chi_Xu_ly);
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
    console.log(Dia_chi_Xu_ly);
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send("");
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
};

function chon_mon_an_vao_chi_tiet(data) {
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

    return Du_lieu;
};

function Xuat_ds_thuc_don(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = "";
    Danh_sach.forEach(mon_an => {
        Th_Cha.innerHTML += `
        <div class="card text-center bg-light px-2 m-2" onclick="chon_mon('${mon_an.Ma_so}')">
            <img class="card-img-top px-3" style="width:120px" src="${Dia_chi_Media+'/'+ mon_an.Ma_so}.png" alt="Card image cap">
            <div class="card-body p-0">
                <p class="card-text">${mon_an.Ten}</p>
                <strong class="card-text">${mon_an.Don_gia_Ban}</strong>
            </div>
        </div>
            `;
    });
};
async function xuat_chi_tiet(mahd) {
    var hd = await tim_hoa_don(mahd);
    var dem = 1;
    var tongtien = 0;
    hd.chi_tiet.forEach(row => {
        ds_mon.innerHTML += `
        <tr id="tr_gio_hang_${row.ma_sp}">
            <th class="align-middle">${dem++}</th>                <!--hóa đơn, món, số lượng -->
            <td class="align-middle"><a href="#" onclick="xoa_gio_hang(${mahd},${row.ma_sp})"><i class="fa fa-remove text-danger"></i></a></td>
            <td class="align-middle">${row.ten_sp}</td>
            <td class="align-middle"><input class="form-control hoa-don" id="soluong_${row.ma_sp}" type="number" onchange="doi_so_luong_gio_hang(${row.ma_sp})" type="number" value="1"></td>
            <td class="align-middle" id='gia_1'>${(row.gia_ban).toLocaleString('en-GB')}</td>
            <td class="align-middle"><strong id='tongtien_1'>${((row.gia_ban)*(row.so_luong)).toLocaleString('en-GB')}</strong></td>
        </tr>
        `;
        tongtien += (row.gia_ban) * (row.so_luong);
    });
    TH_tongtien.innerHTML = tongtien.toLocaleString('en-GB') + ' VNĐ'
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
        //var hd=await tim_hoa_don(ban.hoa_don_phuc_vu);
        xuat_chi_tiet(ban.hoa_don_phuc_vu);
        // var dem=1;
        // var tongtien=0;
        // hd.chi_tiet.forEach(row => {
        //     ds_mon.innerHTML+=`
        //     <tr id="tr_gio_hang_${row.ma_sp}">
        //         <th class="align-middle">${dem++}</th>                <!--hóa đơn, món, số lượng -->
        //         <td class="align-middle"><a href="#" onclick="xoa_gio_hang(${mahd},${row.ma_sp})"><i class="fa fa-remove text-danger"></i></a></td>
        //         <td class="align-middle">${row.ten_sp}</td>
        //         <td class="align-middle"><input class="form-control hoa-don" id="soluong_${row.ma_sp}" type="number" onchange="doi_so_luong_gio_hang(${row.ma_sp})" type="number" value="1"></td>
        //         <td class="align-middle" id='gia_1'>${(row.gia_ban).toLocaleString('en-GB')}</td>
        //         <td class="align-middle"><strong id='tongtien_1'>${((row.gia_ban)*(row.so_luong)).toLocaleString('en-GB')}</strong></td>
        //     </tr>
        //     `;
        //     tongtien+=(row.gia_ban)*(row.so_luong);
        // });
        // TH_tongtien.innerHTML=tongtien.toLocaleString('en-GB')+ ' VNĐ'
    } else {
        mahd = await ma_hoa_don_moi();
        ds_mon.innerHTML = ``;
    }
    ma_so_hd = mahd;
    ma_so_ban = ma_ban;
    TH_mahd.innerHTML = `Hóa đơn ${mahd}`
}

function Xuat_ds_ban(Danh_sach, Th_Cha) {

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

async function chon_mon(mamon) {
    if (ma_so_hd == undefined || ma_so_ban == undefined) {
        alert('Chua chọn bàn');
        return;
    }
    var data = {
        "ma_hd": ma_so_hd,
        "ma_mon": mamon,
        "ma_ban": ma_so_ban,
    }
    var zzz = await chon_mon_an_vao_chi_tiet(data);
    zzz.then(r => {
        TH_ds_ban.innerHTML = "";
        var a = Doc_ds_ban();
        console.log(a);
        Xuat_ds_ban(a, TH_ds_ban);
    })




}
//==============================================