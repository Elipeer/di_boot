
import React from 'react'
import {connect} from 'react-redux'
import {changePropTwo,addItem} from './redux/app2Actions'

class App2 extends React.Component {
  constructor(){
    super()
  }

deleter = (event) => {
  event.target.parentElement.outerHTML=''
}

  render(){
    const {handleChange,handleClick,items} = this.props;
    return(
      <>
      <h3>Add contact form</h3>
      <input id='hel' type='text' onChange={handleChange} name='input' placeholder='add contact' />
      <button onClick={handleClick}>Add</button>
      {

        items.map((item,i) =>
        <h4 key={i}>{item} <button onClick={this.deleter}>Delete</button></h4>)
      }


      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    contacts:state.contacts,
    items:state.arr,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleChange:(event) => dispatch(changePropTwo(event.target.value)),
    handleClick: () => dispatch(addItem(document.getElementById('hel').value)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App2);
