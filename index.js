const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')

})

app.post('/quests', (req, res)=> {
console.log(req.body);
return res.status(200).end();
})


app.listen(4321, () => {
    console.log('We are at port 4321');
})