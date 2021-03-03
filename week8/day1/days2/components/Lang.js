
const Lang = (props) => {
  let {name,num} = props

  const inc = function () {
    console.log('HelloWorld')
    num = num+1
    console.log(num)
    return num;
  }
  return(

  <ul class="list-group list-group-flush">
    <li class="list-group-item"><h1>{inc()} {name}</h1><button class="card-link" onClick={inc}>Click Me</button></li>

  </ul>

  )
}

export default Lang;
