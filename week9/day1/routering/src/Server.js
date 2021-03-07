import React from 'react'

class Server extends React.Component {
  constructor() {
    super()
    this.state = {
      info:'',
    }
  }

change = (event) => {
  const {info} = this.state
  this.setState({info:event.target.value})
}

sendPost = (event) => {
const {info} = this.state
  fetch(`http://localhost:9000/getInput?post=${info}`)
  }

  render(){
    return(
      <>
      <h1>Post</h1>
      <form>
      <input type='text' name="post" onChange={this.change}/>
      <input type='submit' onClick={this.sendPost}/>
      </form>
      </>
    )
  }
}



export default Server
