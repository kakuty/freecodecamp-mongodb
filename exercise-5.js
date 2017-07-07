var mongo = require('mongodb').MongoClient
var firstName = process.argv[2]
var lastName = process.argv[3]

var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
      if (err) throw err
      var docs = db.collection('docs')
      var doc = {
        firstName: firstName,
        lastName: lastName
      }
      
      docs.insert(doc, function(err, data){
        if(err) throw err
        console.log(JSON.stringify(doc))
        // console.log(JSON.stringify(data))
        db.close()
      })
    })