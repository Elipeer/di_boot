import React from 'react';
import './Card.css';
const Card = (props) => {
  const {id,name,email} = props;

  return (
    <>
      <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
         <img src={`https://robohash.org/${id}?size=200x200`}/>
         <h4>{id}</h4>
         <h2>{name}</h2>
         <h4>{email}</h4>
      </div>
    </>
  )
}


export default Card
