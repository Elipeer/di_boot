
import 'tachyons';
import React from 'react';

class FormInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      first:'',
      last:'',
      number:'',
      email:'',
      dataRecieved: false,

    }
  }

handleChange = (event) => {
  console.log(event.target.value)
  const value = event.target.type=='checkbox' ? event.target.checked : event.target.value;
  this.setState({[event.target.name]:value})
}

handleSubmit = (event) => {
  const {first,last,number,email,dataRecieved} = this.state;
this.setState({dataRecieved:true})
  event.preventDefault()
const obj = {first,last,number,email,dataRecieved}
  console.log(obj)

}


  render(){
    const {first,last,number,email,dataRecieved} = this.state;
          if (dataRecieved==false) {
    return(

        <div className="tl bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
        <h1>Welcome!</h1>
        <p>Please provide your information below</p>
        <form onSubmit={this.handleSubmit}>
        <input type="text" name='first' placeholder="First Name" onChange={this.handleChange}/>
        <p>{first}</p>
        <input type="text" name='last' placeholder="Last name" onChange={this.handleChange}/>
        <p>{last}</p>
        <input type="text" name='number' placeholder="Phone Number" onChange={this.handleChange}/>
        <p>{number}</p>
        <input type="text" name='email' placeholder="Email" onChange={this.handleChange}/>
        <p>{email}</p>
        <input type="submit" value="Submit"/>
        </form>
        </div>
      )
    }else {
      return(
      <div className="tl bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
      <p>{first}, {last}</p>
      <p>Phone: {number} | Email: {email}</p>
      <button onClick={()=>this.setState({dataRecieved:false})}>Reset</button>
      </div>

    )
  }


  }
}

export default FormInfo
