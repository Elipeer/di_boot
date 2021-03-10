export const changePropTwo = (value) =>{
  console.log(value)
  return {
    type:'PROP_TWO',
    payload: value,
  }
}

export const addItem = (value) =>{
  console.log(value)
  document.getElementById('hel').value = ''
  return {
    type:'ADD_ITEM',
    payload: value,
  }
}
