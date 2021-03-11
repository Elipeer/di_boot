import React from 'react';
import './App.css';
import 'tachyons'
import {connect} from 'react-redux';
import {add,subtract,ifOdd,async} from './redux/actions2'

class App2 extends React.Component {
  componentDidMount(){

  }

  render(){
    const {add,subtract,ifOdd,async,num} = this.props
    return(
      <>
      <div>
      Clicked times:
      <p>{num}</p>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={ifOdd}>Increment if odd</button>
      <button onClick={async}>Increment Async</button>

      </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(add(1)),
    subtract: () => dispatch(subtract()),
    ifOdd: () => dispatch(ifOdd()),
    async: () => dispatch(async()),
  }
}

const mapStateToProps = (state) => {
  return{
    num:state.number.num,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App2)
