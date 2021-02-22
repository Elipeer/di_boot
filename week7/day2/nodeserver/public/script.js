// function sendData() {
//   let username = document.getElementById('username').value;
//   let password = document.getElementById('password').value;

//   let userdata = {
//     username,
//     password
//   }
//   console.log(userdata);

//   fetch('http://localhost:3000/login',{
//     method:'POST',
//     headers:{
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userdata)
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     document.getElementById('root').innerHTML = `${data.message} ${data.user}`
//   })
//   .catch(e => console.log(e))
// }
//exersize 2 p2
  let userdata = {
    obj
  }

  fetch('http://localhost:3000/login')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById('root').innerHTML = `${data.message} ${data.user}`
  })
  .catch(e => console.log(e))
