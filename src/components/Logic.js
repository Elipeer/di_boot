
import {useState, useEffect} from 'react';

const Logic = () => {

  const [code, setCode] = useState('')
  const [split, splitCode] = useState([])


 useEffect(() => {
console.log(split);
},[split]);

 const scanCode = (e) => {
   splitCode(code.split(''))
 }
 let co = 0;
 let cc = 0;
 let minus= [];
 let plus= [];
 var c = [];
 var open = [];
 var close = [];
const mapCode = (e) => {

  split.map((item,i)=>{
switch (item){
      case '{':
      case '(':
      case '[':
      if (split[i-1] == "'" && split[i+1] == "'") {
        document.getElementById(i).setAttribute('class','blue')
        break;
      }
        co=co+1
        c.push(item)
        document.getElementById(i).setAttribute('class','green')
        break;
      case '}':
      case ']':
      case ')':
      if (split[i-1] == "'" && split[i+1] == "'") {
        document.getElementById(i).setAttribute('class','blue')
        break;
      }
        cc=cc+1
        if (c[c.length-1] == '{' || c[c.length-1] == '[' || c[c.length-1] == '(') {
          document.getElementById(i).setAttribute('class','red')
          c.pop()
          break;
        }
        case (c[c.length-1] == ']' || c[c.length-1] == '}' || c[c.length-1] == ')'):
          document.getElementById(i).setAttribute('class','whoa')
          console.log('you started with an open bracket');

        //document.getElementById(i).setAttribute('class','red')
          break;
          break;
      case item!='}'|| item!='{':
        //document.getElementById(i).setAttribute('class','blue')
      break;
      default:
document.getElementById(i).setAttribute('class','blue')  }

  })

  console.log('c',c)
  console.log(c.length==0? 'your code is balanced':'your code is NOT balanced')
  console.log('You have ' + c.length + ' opening bracket that you never closed');
  console.log('opened',co)
  console.log('closed',cc)
}

const join = () =>{
  split.map((item,i)=>{
    return(
      <p className='char' id={i}>{item}</p>
    )
  })
}

  return(
    <>
    <textarea className='area' placeholder='enter code here' onChange={(e)=>setCode(e.target.value)}  />
    <button onClick={scanCode}>click</button>
    <button onClick={mapCode}>map</button>
    <div className='textBox'>
    {
      split.map((item,i)=>{
        return(
          <p className='char' id={i}>{item}</p>
        )
      })
    }
    </div>
    </>
  )
}

export default Logic
