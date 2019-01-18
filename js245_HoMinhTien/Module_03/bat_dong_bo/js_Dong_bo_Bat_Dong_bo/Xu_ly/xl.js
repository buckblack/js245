function Doc_Du_lieu_Dong_bo() {
    var Chuoi = "Bất đồng bộ"
    var Xu_ly_HTTP = new XMLHttpRequest()
    Xu_ly_HTTP.open("GET", "../Du_lieu/Ho_ten.txt", false) // Đồng bộ
    Xu_ly_HTTP.send()
    console.log(Chuoi)
    Chuoi = Xu_ly_HTTP.responseText
    return Chuoi
}


function Doc_Du_lieu_Bat_Dong_bo(Ham_sau_khi_Xu_ly) {
    var Xu_ly_HTTP = new XMLHttpRequest()
    Xu_ly_HTTP.onload = () => {
        var Chuoi = Xu_ly_HTTP.responseText
        Ham_sau_khi_Xu_ly(Chuoi)
    }
    Xu_ly_HTTP.open("GET", "../Du_lieu/Ho_ten.txt")
    Xu_ly_HTTP.send()
}

function Doc_Du_lieu_Promise() {
    return new Promise((Ket_qua, Loi) => {
        var Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            Ket_qua(Doi_tuong_Kq)
        }
        Xu_ly_HTTP.open("GET", "../Du_lieu/Ho_ten.json")
        Xu_ly_HTTP.send()
    })
}

async function Khoi_dong_Du_lieu() {
    var Doi_tuong_json = await new Promise((Ket_qua, Loi) => {
        var Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            Ket_qua(Doi_tuong_Kq)
        }
        Xu_ly_HTTP.open("GET", "../Du_lieu/Ho_ten.json")
        Xu_ly_HTTP.send()
    })

    var Chuoi = await new Promise((Ket_qua, Loi) => {
        var Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var chuoi = Xu_ly_HTTP.responseText
            Ket_qua(chuoi)
        }
        Xu_ly_HTTP.open("GET", "../Du_lieu/Ho_ten.txt")
        Xu_ly_HTTP.send()
    })

    var kq = {
        a: Doi_tuong_json,
        b: Chuoi
    }
    return kq

}


