
const exp = require('express')
const cors = require('cors');
const app = exp();

app.use(cors())

app.get('/getInput', (req,res) => {
  
  res.send(req.query);

})



app.listen(9000)
console.log('listening')
