
var NodeJs_Dich_vu = require("http")
var Luu_tru = require("../Xu_ly/XL_LUU_TRU")
var Port = 1000
var Xu_ly_Tham_so = require('querystring')
var Du_lieu = {}
Du_lieu.Danh_sach_Dien_thoai = Luu_tru.Doc_Du_lieu("Dien_thoai")
Du_lieu.Cua_hang = Luu_tru.Doc_Thong_tin_Cua_hang()

var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
  var Chuoi_Nhan = ""
  var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "")
  Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
  Yeu_cau.on('end', () => {

    var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
    var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
    var Chuoi_Kq = ""
    if (Ma_so_Xu_ly == "Doc_Danh_sach_Dien_thoai") {
      var Doi_tuong_Kq = {}
      Doi_tuong_Kq.Danh_sach_Dien_thoai = Du_lieu.Danh_sach_Dien_thoai
      Doi_tuong_Kq.Cua_hang = Du_lieu.Cua_hang
      Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      Dap_ung.end(Chuoi_Kq);

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

    } else if (Ma_so_Xu_ly == "Ghi_Dien_thoai_Moi") {
      var Kq = ""
      var Dien_thoai = JSON.parse(Chuoi_Nhan)
      Kq = Luu_tru.Ghi_moi_Doi_tuong("Dien_thoai", Dien_thoai)
      if (Kq == "") {
        Du_lieu.Danh_sach_Dien_thoai.push(Dien_thoai)
        Chuoi_Kq = JSON.stringify(Dien_thoai)
      }
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      Dap_ung.end(Chuoi_Kq);
    } else if (Ma_so_Xu_ly == "Cap_nhat_Dien_thoai") {
      var Kq = ""
      var Danh_sach_Cap_nhat = JSON.parse(Chuoi_Nhan)
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')

      Danh_sach_Cap_nhat.forEach(Dien_thoai_Cap_nhat => {
        var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Dien_thoai_Cap_nhat.Ma_so)
        Dien_thoai.Ten = Dien_thoai_Cap_nhat.Ten
        Dien_thoai.Don_gia_Ban = Dien_thoai_Cap_nhat.Don_gia_Ban
        Dien_thoai.Don_gia_Nhap = Dien_thoai_Cap_nhat.Don_gia_Nhap
        Dien_thoai.Nhom_Dien_thoai.Ten = Dien_thoai_Cap_nhat.Nhom_Dien_thoai.Ten
        Dien_thoai.Nhom_Dien_thoai.Ma_so = Dien_thoai_Cap_nhat.Nhom_Dien_thoai.Ma_so
        Kq = Luu_tru.Cap_nhat_Doi_tuong("Dien_thoai", Dien_thoai)
        if (Kq == "") {
          Chuoi_Kq = "OK"
        } else {
          Chuoi_Kq = "Error"
        }
        
        Dap_ung.end(Chuoi_Kq);

      })
    }else if (Ma_so_Xu_ly == "Xoa_Dien_thoai") {
      var Kq = ""
      var Danh_sach_Xoa = JSON.parse(Chuoi_Nhan)
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      Danh_sach_Xoa.forEach(Dien_thoai_Xoa => {
        var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Dien_thoai_Xoa.Ma_so)
        Kq = Luu_tru.Xoa_Doi_tuong("Dien_thoai", Dien_thoai)
        if (Kq == "") {
          Du_lieu.Danh_sach_Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.filter(x => x.Ma_so != Dien_thoai_Xoa.Ma_so)
          Chuoi_Kq = "OK"
        } else {
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