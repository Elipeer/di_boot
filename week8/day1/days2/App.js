import logo from './logo.svg';
import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import HelloWorld from './components/HelloWorld'
import BootstrapCard from './components/BootstrapCard'
import Lang from './components/Lang'
class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }

  }

componentDidMount(){

  }


render(){

  return (
//daily challlenge


<>
    <Lang name="java" num={0}/>
    <Lang name='python' num={0}/>
    <Lang name='Js' num={0}/>
    <Lang name='Ruby' num={0}/>

</>
    //exersizes
// <div>
//   <HelloWorld />
//   //for Paul Mccartney
//   <BootstrapCard
//       title='McCartney'
//       imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
//       buttonLabel='Go to Wikipedia'
//       buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
//       description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.' />
//
//   //for Bob Dylan
//   <BootstrapCard       title='Bob'
//         imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
//         buttonLabel='Go to Wikipedia'
//         buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
//         description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.' />
//
// </div>
    );
  }
  }


export default App;
