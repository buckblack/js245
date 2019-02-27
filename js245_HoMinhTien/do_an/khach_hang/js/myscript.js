function check_ghichu() {
    var kq = document.querySelectorAll('.table_ghichu')
    var check = document.getElementById('check_ghichu')
    check.onchange = function () {
        if (check.checked == false)
            for (var i = 0; i < kq.length; i++) {
                kq[i].classList.add("d-none");
            }
        else
            for (var i = 0; i < kq.length; i++) {
                kq[i].classList.remove("d-none");
            }
    }
}






function check_ban() {
    var kq = document.querySelectorAll('.table_ban')
    var check = document.getElementById('check_ban')
    check.onchange = () => {

        if (check.checked == false)
            for (var i = 0; i < kq.length; i++) {
                kq[i].classList.add("d-none");
            }
        else
            for (var i = 0; i < kq.length; i++) {
                kq[i].classList.remove("d-none");
            }
    }


};

function check_img() {
    var kq = document.querySelectorAll('.table_hinh')
    var check = document.getElementById('check_img')
    check.onchange = () => {

        if (check.checked == false)
            for (var i = 0; i < kq.length; i++) {
                kq[i].classList.add("d-none");
            }
        else
            for (var i = 0; i < kq.length; i++) {
                kq[i].classList.remove("d-none");
            }
    }
};

function check_status() {
    var kq = document.querySelectorAll('.table_status')
    var check = document.getElementById('check_status')
    check.onchange = () => {

        if (check.checked == false)
            for (var i = 0; i < kq.length; i++) {
                kq[i].classList.add("d-none");
            }
        else
            for (var i = 0; i < kq.length; i++) {
                kq[i].classList.remove("d-none");
            }
    }
};


function cap_nhat_san_pham() {
    $('#btn_capnhat').click(function (e) {
        btn_close_detai.click()
    });

}

function chon_ban(ma_ban) {
    var ban = document.getElementById(`ban_${ma_ban}`)
    var img = ban.getAttribute("src");
    ban.setAttribute("src", "images/chair2.png")
}

function chon_mon(ma_mon) {
    ds_mon.innerHTML += `
    <tr>
        <th class="align-middle">1</th>
        <td class="align-middle"><i class="fa fa-remove text-danger"></i></td>
        <td class="align-middle">Tên món ăn ABC</td>
        <td class="align-middle"><input class="form-control hoa-don" type="number" value="1"></td>
        <td class="align-middle">30,000</td>
        <td class="align-middle"><strong>30,000</strong></td>
    </tr>
    `
}

//thành phần

function tach_chuoi_thanh_phan(chuoi, kytu) {
    var kq = chuoi.split(kytu);
    return kq;
}

function timthanhphan() {
    sl_tp_up.innerHTML = `
    <option value="1">A: (gr)</option>
    <option value="2">B: (gr)</option>
    <option value="3">C: (gr)</option>
    `
}

function uptodown() {
    var up = document.getElementById('sl_tp_up');
    if (up.value != '') {
        var chuoi = tach_chuoi_thanh_phan(up.options[up.selectedIndex].text, ':')
        sl_tp_down.innerHTML += `<option value="${up.value}">${chuoi[0]}: ${tp_soluong.value}${chuoi[1]}</option>`
        $('#sl_tp_up option:selected').remove();
    }

}

function downtoup() {
    var down = document.getElementById('sl_tp_down');

    if (down.value != '') {
        var chuoi = tach_chuoi_thanh_phan(down.options[down.selectedIndex].text, ':')
        var donvi = tach_chuoi_thanh_phan(chuoi[1], '(')
        donvi = donvi[1].split(')')
        sl_tp_up.innerHTML += `<option value="${down.value}">${chuoi[0]}: (${donvi[0]})</option>`
        $('#sl_tp_down option:selected').remove();
    }

}
//kết thúc thành phần

function thongtinsp(masp,image) {

    modaldetail.innerHTML = `
    <div class="h3 text-primary">Sản phẩm ABC</div>
    <div class="row">
        <div class="col-sm-3">
            <img src="${image}" class="img-fluid w-100" alt="" onclick="loadhinh('${image}')" data-toggle="modal" data-target="#modal-loadhinh" >
        </div>
        <div class="col-sm-4">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Mã hàng hóa:</td>
                        <td><strong>SP${masp}</strong></td>
                    </tr>
                    <tr>
                        <td>Tên hàng hóa:</td>
                        <td><strong>Sản phẩm ABC</strong></td>
                    </tr>
                    <tr>
                        <td>Loại hàng:</td>
                        <td><strong>Khác</strong></td>
                    </tr>
                    <tr>
                        <td>Số lượng:</td>
                        <td><strong>10</strong></td>
                    </tr>
                    <tr>
                        <td>Giá bán:</td>
                        <td><strong>30,000</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-5">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Tình trạng:</td>
                        <td><strong>Cho phép kinh doanh</strong></td>
                    </tr>
                    <tr>
                        <td>Mô tả:</td>
                        <td>kajfd ak gra grfkjgfkasgf uai giua gfuodf gouadgf </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row float-right form-inline">
        <!--
        <button class="btn btn-success mx-2" data-toggle="modal" data-target="#modal-update"
            id="btn_capnhat" onclick="cap_nhat_san_pham()"><i class="fa fa-check-circle-o"></i>
            Cập nhật</button>
        <button class="btn btn-danger mx-2"><i class="fa fa-lock"></i> Ngừng kinh
            doanh</button>
        <button class="btn btn-danger mx-2"><i class=" fa fa-trash-o"></i> Xóa</button>
        -->
        <ul class="nav nav-pills nav-fill m-3">
                <li class="nav-item" id="btn_capnhat" onclick="capnhatsp()" data-dismiss="modal" data-toggle="modal" data-target="#modal-update">
                    <a class="nav-link btn btn-success btn-lg mx-2 mt-2" href="#" 
                        ><i class="fa fa-check-circle-o"></i> Cập nhật</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn btn-danger btn-lg mx-2 mt-2" href="#"><i class="fa fa-lock"></i> Ngừng kinh doanh</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn btn-primary btn-lg mx-2 mt-2" href="#"><i class=" fa fa-trash-o"></i> Xóa</a>
                </li>
            </ul>
    </div>
    `
}

function capnhatsp(masp) {
    modalupdate.innerHTML = `
    <div class="form-group">
        <label>Tên hàng</label>
        <input type="text" class="form-control" placeholder="Nhập tên sản phẩm mới">
    </div>
    <div class="form-group">
        <label>Loại hàng</label>
        <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div class="form-group">
        <label>Đơn giá</label>
        <input type="number" class="form-control" placeholder="Nhập tên sản phẩm mới">
    </div>
    <div class="form-group">
        <label>Đơn vị tính</label>
        <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div class="form-group">
        <label>Hình ảnh</label>
        <input type="file" class="form-control-file">
    </div>
    <label>Mô tả</label>
    <textarea name="binh_luan" id="binh_luan2" class="ckeditor"></textarea>
    `
    CKEDITOR.replace('binh_luan2', {
        customConfig: 'config_binh_luan.js'
    });
}

function loadhinh(image)
{
    dia_chi_img.innerHTML=`<img src="${image}" class="w-100">`
}

function xoa_gio_hang(mahd,mamon,soluong)
{
    var kq=document.getElementById('tr_gio_hang_'+mahd);
    kq.innerHTML=``;    
}

function doi_so_luong_gio_hang(mahd)
{
    var soluong=document.getElementById('soluong_'+mahd);
    var tien=document.getElementById('tongtien_'+mahd);
    var gia=document.getElementById('gia_'+mahd);
    tien.innerHTML=Number(soluong.value)*Number(gia.innerHTML);
}