const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.post('/api/test',(req,res,next)=>{
  const test = req.body.test
  console.log(req)
  console.log(req.body);
  console.log(test);
  res.status(200).json({
    message:'okey'
  })
})
app.get('/api/test',(req,res,next)=>{

  res.status(201).json({
    test:'test message',
    message:'okey'
  })
})

app.listen(3000);