
var File = require("fs") 
var Duong_dan_Thu_muc_Du_lieu = "Du_lieu_Luu_tru"

function Doc_Thong_tin_Cua_hang() {
  var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//Cua_hang.json"
  var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8")
  var Cua_hang = JSON.parse(Chuoi_JSON)
  return Cua_hang
}

function Doc_Thong_tin_Hoc_vien() {
  var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//Hoc_vien.json"
  var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8")
  var Hoc_vien = JSON.parse(Chuoi_JSON)
  return Hoc_vien
}




class XL_LUU_TRU {
  Doc_Du_lieu() {
    var Du_lieu = {}
    Du_lieu.Cua_hang = Doc_Thong_tin_Cua_hang()
    Du_lieu.Hoc_vien=Doc_Thong_tin_Hoc_vien()
    return Du_lieu
  }
  
}

var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly




