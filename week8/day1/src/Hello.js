import React from 'react';

const Hello = (props) => {
  console.log(props);
  const {username} = props;
  return (
    <div>
     Hello, world. {username}
    </div>
  )
}

export default Hello;
