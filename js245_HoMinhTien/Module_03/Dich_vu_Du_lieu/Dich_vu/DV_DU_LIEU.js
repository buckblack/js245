var NodeJs_Dich_vu = require("http")
var Luu_tru = require("../Xu_ly/XL_LUU_TRU")
var Gui_thu = require("../Xu_ly/XL_GOI_THU_DIEN_TU")
var Gui_SMS = require("../Xu_ly/XL_GOI_TIN_NHAN")
var Port = 1000
var Xu_ly_Tham_so = require('querystring')
var Du_lieu = {}
Du_lieu.Danh_sach_Dien_thoai = Luu_tru.Doc_Du_lieu("Dien_thoai")
Du_lieu.Cua_hang = Luu_tru.Doc_Thong_tin_Cua_hang()

var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
  var Chuoi_Nhan = ""
  var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "")
  Yeu_cau.on('data', (chunk) => {
    Chuoi_Nhan += chunk
  }) //data: nhận dl từ client(như ajax)
  Yeu_cau.on('end', () => { //end: trả kq lại cho client

    var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
    var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
    var Chuoi_Kq = ""
    if (Ma_so_Xu_ly == "Doc_Danh_sach_Dien_thoai") {
      var Doi_tuong_Kq = Du_lieu.Danh_sach_Dien_thoai
      Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      Dap_ung.end(Chuoi_Kq);
    } else if (Ma_so_Xu_ly == "Doc_Cua_hang") {
      var Doi_tuong_Kq = JSON.parse(Du_lieu.Cua_hang)
      Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      Dap_ung.end(Chuoi_Kq);

    } else if (Ma_so_Xu_ly == "SMS") {
      var tin_nhan=JSON.parse(Chuoi_Nhan)
      var sdt=tin_nhan.so_dien_thoai;
      var noi_dung=tin_nhan.noi_dung;
      var kqPromise = Gui_SMS.Goi_Tin_nhan(sdt, noi_dung);
      kqPromise.then(result => {
        console.log(result);
        Chuoi_Kq = "OK"
        Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
        Dap_ung.end(Chuoi_Kq);
      }).catch(err => {
        console.log(err);
        Chuoi_Kq = "Error"
        Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
        Dap_ung.end(Chuoi_Kq);
      })


    } else if (Ma_so_Xu_ly == "Khach_hang_Lien_he") {
      var from = "long4581994@gmail.com"
      var to = "buckblack44@gmail.com"
      var subject = "Khách hàng liên hệ"
      var body = Chuoi_Nhan
      var kqPromise = Gui_thu.Gioi_Thu_Lien_he(from, to, subject, body)
      kqPromise.then(result => {
        console.log(result);
        Chuoi_Kq = "OK";
        Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
        Dap_ung.end(Chuoi_Kq);
      }).catch(err => {
        console.log(err);
        Chuoi_Kq = "Error";
        Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
        Dap_ung.end(Chuoi_Kq);
      })



    } else if (Ma_so_Xu_ly == "Ghi_Phieu_Dat_hang") {
      var Kq = ""
      var DsPhieu_Dat_hang = JSON.parse(Chuoi_Nhan)
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      DsPhieu_Dat_hang.forEach(Phieu => {
        var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Phieu.Dien_thoai.Ma_so)
        var So_Phieu_Dat = 1
        if (Dien_thoai.Danh_sach_Phieu_Dat == undefined) {
          Dien_thoai.Danh_sach_Phieu_Dat = []
        }

        So_Phieu_Dat = Dien_thoai.Danh_sach_Phieu_Dat.length + 1
        Phieu.Phieu_Dat.So_Phieu_Dat = So_Phieu_Dat

        Dien_thoai.Danh_sach_Phieu_Dat.push(Phieu.Phieu_Dat)

        Kq = Luu_tru.Cap_nhat_Doi_tuong("Dien_thoai", Dien_thoai)
        if (Kq == "") {
          Chuoi_Kq = "OK"
        } else {
          Dien_thoai.Danh_sach_Phieu_Dat.pop()
          Chuoi_Kq = "Error"
        }
        Dap_ung.end(Chuoi_Kq);
      })


    } else {
      Chuoi_Kq = Luu_tru.Doc_Thong_tin_Dich_vu()
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      Dap_ung.end(Chuoi_Kq);
    }
  })
})

Dich_vu.listen(Port,
  console.log(`Dịch vụ Dữ liệu đang thực thi tại địa chỉ: http://localhost:${Port}`)
);