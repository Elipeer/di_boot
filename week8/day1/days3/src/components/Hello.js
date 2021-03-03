import React from 'react';

class Hello extends React.Component {
  constructor(props){
    super(props)
  const {info} = props;
  }

componentDidMount(){

}

  render(){

    //const {color} = this.props
  return (
    <form style={{ backgroundColor: 'lightgoldenrodyellow' }} action="http://localhost:3000/login" method="GET" target="_blank"><br></br><br></br>
           <div><input id='fn' name='firstName' type="text" placeholder="First Name" onChange={this.info}></input></div><br></br>
           <div><input id='ln' name='lasttName' type="text" placeholder="Last Name" onChange={this.info}></input></div><br></br>
           <div><input id='age' name='age' type="text" placeholder="Age" onChange={this.info}></input></div><br></br>
           <div><br></br>
       <input id='m' type="radio" name='gen' value='Male' onChange={this.info} />Male
       <input id='f' type="radio" name='gen' value='Female' onChange={this.info} />Female
       </div>
           <div><br></br>
             <h4>Dietary restrictions:</h4><br></br>
       <input id='nu' type="checkbox" name='foodChoice' value='Nuts free' onChange={this.info} />Nuts free
       <input id='la' type="checkbox" name='foodChoice' value='Lactose free' onChange={this.info} />Lactose free
       <input id='ve' type="checkbox" name='foodChoice' value='Vegan' onChange={this.info} />Vegan
       </div>
           <br></br>
           <button type='submit' onClick={this.info}>Submit</button>
     </form>
  );
  }
}
export default Hello;
