// console.log('hello worldjkfksdjkafjkfhk')

// const http = require('http');
// const server = http.createServer((req, res)=>{
// 	res.setHeader('Content-Type', 'text/html')
//   res.end('<h1>hello browser<h1/>')
//   res.end('more data...')
//   })
// server.listen(3000)

//express
// const exp = require('express')
// const bp = require('body-parser')
// const app = exp()

// app.use(bp.urlencoded({ extended: false }))

// // parse application/json
// app.use(bp.json())

// app.use('/',exp.static(__dirname+'/public'))

// app.post('/login', (req,res)=>{
// 	console.log(req.query)
// 	console.log(req.body.u)
// 	const data = {
// 		message: 'ok',
// 		user
// 	}
// 	res.send(data)



	// console.log(req.query)
	// const user = req.query.username;
	// res.send('get data firm you' + user)
// 	const user = {
// 	name: ' eli'
// }
// res.send(user)
// })

// app.listen(3000)













/*
const exp = require('express');
const bp = require('body-parser');

const app = exp();

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))
// parse application/json
app.use(bp.json())

// app.set('port',9000);
// console.log(__dirname);
app.use('/',exp.static(__dirname+'/public'));

app.route('/login')
  .get( (req,res)=> {
    console.log(req.query);
    const user = req.query.username;
    console.log(user);
    const pass = req.query.p;
    const data = {
      message: 'Welcome',
      user
    }
    console.log(data);
    res.send(data)
  })
  .post( (req,res) => {
    console.log(req.body);
    let user = req.body.username;
    let pass = req.body.password;
    const data = {
      message: 'Welcome',
      user,
      pass
    }
    console.log('POST',data);
    res.send(data)
  })

app.get('/user/:ziv',(req,res)=>{
  console.log(req.params);
  res.send('bla bla')
})

app.listen(3000);
// app.listen(app.get('port'), ()=>{
  // console.log('listen on port 9000');
// })

*/

//exersize 1
// const http = require('http');
// const server = http.createServer((req, res)=>{
// 	res.setHeader('Content-Type', 'text/html')
//   	res.end('<h1>This is my first response<h1/><br><h3>This is my second response</h3><br><h4>This is my third response</h4>')
//   })
// server.listen(3000)


//exersize 2
// const http = require('http');
// const server = http.createServer((req, res)=>{
// 	res.setHeader('Content-Type', 'application/json')
// 	let obj = {
// 		name: 'eli'
// 	}
//   	res.end(JSON.stringify(obj))
//   })
// server.listen(3000)

//exersize 3
// const exp = require('express')
// const app = exp()
// app.get('/', (req, res)=>{
// 	let obj = {
// 		name: 'eli'
// 	}
// 	res.send(obj)
// })

// app.listen(8080);

//exersize xp 2
//1

const exp = require('express')
const app = exp()
app.get('/public', (req, res)=>{
	let obj = {
		name: 'eli'
	}
	res.send(obj)
})

app.listen(3000);
