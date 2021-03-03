import './App.css';
import React from 'react';
import Hello from './components/Hello'
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      // color: 'red',
      // show: true,
      func:''
    }
    console.log('1')
  }

componentDidMount(){
//   console.log('2')
//   setTimeout(()=>{
//     this.setState({color:'yellow'})
// }, 5000);
}


shouldComponentUpdate(){
  return true
  //return false if you dont want any changes
}


componentDidUpdate(){
  // const {color} = this.state;
  //
  // document.getElementById('new').innerHTML =
  // 'Current Color: ' + color
}


getSnapshotBeforeUpdate(prevProps, prevState){
  // const {color} = this.state;
  // // Displaying the previous value of the state
  //
  //   const news = document.getElementById('prev').innerHTML =
  //      'Previous Color Is: ' + prevState.color;
  //      return news
}

  render(){

  //   const {color} = this.state;
  //
  //   console.log('3')
  //
  // const change = () =>{
  // this.setState({color:'green'})
  // }
const info = () => {

  console.log('func')
}
      const {func} = this.state;
  return (

<Hello func={info}/>
  //exersizes
    // <h1>my fav color is {color}</h1>
    // <button onClick={change}>press me</button>
    // <div id='prev'></div>
    // <div id='new'></div>
    // <h3>{show}

  );
  }
}
export default App;
