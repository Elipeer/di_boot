export const searchText = (value) => {
  return{
    type:'SEARCH_TEXT',
    payload: value
  }
}


export const getData = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type:'DATA',
      payload:data,
    })
  })
  .catch(err =>{
    console.log(err);
  })
}
