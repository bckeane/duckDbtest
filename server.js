const express = require('express');
const app = express();
var duckdb = require('duckdb');
var db = new duckdb.Database('./data/phsSwim'); 

// sets port 8080 to default or unless otherwise specified in the environment
app.set('port', process.env.PORT || 8081);

app.get("/", async(req, res) => {
    //const top20 = await db.getAllTop20(req.body);
    //res.status(200).json(top20);
    res.send('Hello World!');
})

app.get("/top20", async(req, res) => {
//    const top20 = await db.getAllTop20();
//    res.status(200).json(top20);
db.all('SELECT * from phs_top20_inport', function(err, data) {
    if (err) {
      throw err;
    }
    res.send((data));
  });

})

app.get("/top20/:event", async(req, res) => {
//    console.log("event input", req.params.event)
//    const top20 = await db.getTop20Event(req.params.event);
//    res.status(200).json(top20);
})

app.listen(app.get('port')
    , () => console.log(`Server is running on port ${app.get('port')}`));