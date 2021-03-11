export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const ODD = 'ODD'
export const ASYNC = 'ASYNC'

export const add = (value) => {
  console.log('added')
  return{
    type:ADD,
    payload:value,
  }
}

export const subtract = () =>{
  return{
    type:SUBTRACT,
    payload:1,
  }
}

export const ifOdd = () =>{
  return{
    type:ODD,
    payload:1,
  }
}

export const async = () => (dispatch) => {
  setTimeout(() =>{
  dispatch({
    type:ASYNC,
    payload:1,
  })
},2000)
}
