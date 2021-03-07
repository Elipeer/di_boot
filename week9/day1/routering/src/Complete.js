import React from 'react'
import Countries from './Countries'
class Complete extends React.Component {
  constructor(){
    super()
    this.state ={
      countries:[],
      sug:''

    }
  }

componentDidMount(){



}

sug = (event) => {
  const {sug} = this.state;
this.setState({sug:event.target.innerHTML, countries:[]})
}

change = (event) => {
  const {countries} = this.state;
  let val = event.target.value;
  this.setState({countries:Countries.filter((item,i)=>{
    return item.toLowerCase().charAt(0) === val.toLowerCase().charAt(0) && item.toLowerCase().includes(val)
  })})
}

  render(){
    const {countries,sug} = this.state;
    return(
      <>
      Enter Country: <input id="ent" name="input" placeholder="country" onChange={this.change} value={sug}/>
    {countries.map(item=><h3 onClick={this.sug}>{item}</h3>)}
     <div>{countries.length}</div>
      </>
    )
  }
}

export default Complete
