
var File = require("fs")
var Thu_muc_Du_lieu = "Du_lieu_Luu_tru"

function Doc_Thong_tin_Dich_vu() {
  var Duong_dan = "index.html"
  var Chuoi_Thong_tin = File.readFileSync(Duong_dan, "UTF-8")// Đọc Đồng bộ
  return Chuoi_Thong_tin
}

function Doc_Thong_tin_Cua_hang() {
  var Duong_dan = Thu_muc_Du_lieu + "/" + "Cua_hang.json"
  var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8")
  return JSON.parse(Chuoi_JSON)
}

function Doc_Thong_tin_Cau_thu() {
  var Duong_dan = Thu_muc_Du_lieu + "/" + "Cau_thu.json"
  var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8")
  return JSON.parse(Chuoi_JSON)
}

function Ghi_Thong_tin_Cau_thu(Cau_thu) {
  var Kq = "OK"
  try {
    var Duong_dan = Thu_muc_Du_lieu + "//" + "Cau_thu.json"
    var Chuoi_JSON = JSON.stringify(Cau_thu, null, "\t")
    File.writeFileSync(Duong_dan, Chuoi_JSON, "UTF-8")
  }
  catch (Loi) {
    Kq = Loi.toString()
  }
  return Kq
}


class XL_LUU_TRU {

  Doc_Du_lieu(){
    var Du_lieu={}
    Du_lieu.Cua_hang=Doc_Thong_tin_Cua_hang()
    Du_lieu.Cau_thu=Doc_Thong_tin_Cau_thu()
    return Du_lieu
  }

  Doc_Thong_tin_Dich_vu() {
    return Doc_Thong_tin_Dich_vu()
  }

  Ghi_Cau_thu(Cau_thu) {
    var Kq = ""
    var Hop_le = Cau_thu
    if (Hop_le) {
      Kq = Ghi_Thong_tin_Cau_thu(Cau_thu)
    }
    return Kq
  }

}



//Public để các file js khác gọi 
var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly




