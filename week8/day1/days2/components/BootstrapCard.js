
const BootstrapCard = (props) => {
  const {title,imageUrl,buttonLabel,buttonUrl,description} = props
  return(
    //exersizes
  <div className="card m-5" style={{width: '30rem'}}>
  <img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}.</p>
    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
  </div>
</div>
   )
}

export default BootstrapCard
