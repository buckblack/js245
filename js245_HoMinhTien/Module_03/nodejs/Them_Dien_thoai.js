var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log('Không kết nối với CSDL. Error:', err);
  } else {
    console.log('Kết nối thành công', url);
    var db = client.db("ban_dien_thoai")

    var Dien_thoai_1 = {
      Ma_so: "IPHONE_18",
      Ten: "IPHONE 18",
      Don_gia_Ban: 3800000,
      Don_gia_Nhap: 3700000,
      Nhom_Dien_thoai: {
        Ten: "iphone",
        Ma_so: "IPHONE"
      },
      Danh_sach_Phieu_Ban: [],
      Danh_sach_Phieu_Dat: [],
      Danh_sach_Phieu_Nhap: []

    }

    var Dien_thoai_2 = {
      Ma_so: "IPHONE_19",
      Ten: "IPHONE 19",
      Don_gia_Ban: 3800000,
      Don_gia_Nhap: 3700000,
      Nhom_Dien_thoai: {
        Ten: "iphone",
        Ma_so: "IPHONE"
      }
    }
    var Dien_thoai_3 = {
      Ma_so: "IPHONE_20",
      Ten: "IPHONE 20",
      Don_gia_Ban: 3800000,
      Don_gia_Nhap: 3700000,
      Nhom_Dien_thoai: {
        Ten: "iphone",
        Ma_so: "IPHONE"
      }
    }

    var Ds = [Dien_thoai_1, Dien_thoai_2, Dien_thoai_3]

    var Bang_Dien_thoai = db.collection("Dien_thoai");
    // Thêm một 
    Bang_Dien_thoai.insert(Dien_thoai_1, function (Loi, Ket_qua) {
      if (Loi) {
        console.log(Loi)
      } else {
        console.log(Ket_qua)
      }
    })

    // Thêm nhiều 
    // Bang_Dien_thoai.insert(Ds, function (Loi, Ket_qua) {
    //   if (Loi) {
    //     console.log(Loi)
    //   } else {
    //     console.log(Ket_qua)
    //   }

    // })
  }
});