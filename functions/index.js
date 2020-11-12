const functions = require('firebase-functions');
const expree = require('express');
const app = expree();

app.get('/time', (req, res)=>{
    res.send(`${Date.now()}`);
})
// cache data 
app.get('/timecache', (req, res)=>{
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.send(`${Date.now()}`);
})

exports.app = functions.https.onRequest(app 
    //=> {
  //functions.logger.info("Hello logs!", {structuredData: true});
  //response.send("Hello from Firebase!");
//}
);
