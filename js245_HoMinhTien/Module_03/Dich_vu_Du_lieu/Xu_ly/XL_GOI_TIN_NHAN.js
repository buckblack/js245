var twilio=require('twilio');
class XL_Goi_tin_nhan{
    Goi_Tin_nhan(sdt,noidung){
        var accountSid='AC07d099c0f53fc359602ceb390b0c5f95';
        var authToken='cb4ddeb120dbacaeba129e65ff6fa928';
        var client=new twilio(accountSid,authToken);
        return client.messages.create({
            body:noidung,
            to:sdt,
            from:'+14752392859'
        })
    }
}
var Goi_Tin_nhan=new XL_Goi_tin_nhan()
module.exports=Goi_Tin_nhan;