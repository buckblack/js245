
var NodeJs_Dich_vu = require("http")

var Luu_tru = require("../Xu_ly/XL_LUU_TRU")


var Port = 1000
var Xu_ly_Tham_so = require('querystring')

var Du_lieu = {}
Du_lieu = Luu_tru.Doc_Du_lieu()


var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
  var Chuoi_Nhan = ""
  var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "")
  Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
  Yeu_cau.on('end', () => {

    var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
    var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
    var Chuoi_Kq = ""

    if (Ma_so_Xu_ly == "DOC_CUA_HANG") {
      Chuoi_Kq=JSON.stringify(Du_lieu.Cua_hang)
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      Dap_ung.end(Chuoi_Kq);
    }else if (Ma_so_Xu_ly == "DOC_CAU_THU") {
      Chuoi_Kq=JSON.stringify(Du_lieu.Cau_thu)
      Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
      Dap_ung.end(Chuoi_Kq);
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