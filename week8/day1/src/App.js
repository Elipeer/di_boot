import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import 'tachyons'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      rb:[]
    }
    console.log(1)
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json()).
  then(data=>{

    console.log(data)
   this.setState({rb:data})
  })
  .catch(err =>{
    console.log(err)
  })
  console.log(2)
}

  render(){
    console.log(3)
    const {rb} = this.state;

  return (

    <div className='tc'>
    {
      rb.map(item =>{
        return <Card id={item.id} name={item.name} email={item.email} key={item.id}/>
      })
    }

    </div>

  );
 }
}

export default App;
