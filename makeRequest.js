// const http = require('http')

// const data = JSON.stringify({
//   test: 'Buy the milk'
// })

// const options = {
//   hostname: 'localhost',
//   port: 3000,
//   path: '/api/test',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   },
// }

// const req = http.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     // console.log(d.toString())
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.write(data)
// req.end()
const axios = require('axios');

// axios.post('http://localhost:3000/api/test',{
//   test:'sea'
// }).then(result=>{
//   console.log(result.data);
// })
// axios.get('http://localhost:3000/api/test12').then(result=>{
//   console.log(result);
// })

setInterval(async()=>{
  // const result = await axios.post('http://localhost:3000/api/test',{test:'sea'});
  // console.log(result.data);
  const getResult = await axios.get('http://localhost:3000/api/test')
  
  console.log(getResult.data);
},5000)