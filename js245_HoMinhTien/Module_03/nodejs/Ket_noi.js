var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log('Không kết nối với CSDL. Error:', err);
  } else {
    console.log('Kết nối thành công', url);
  }
});