import {combineReducers} from 'redux'

let initState = {
contacts:'',
arr:[],

}

export const reducer = (state=initState,action={}) => {

  switch (action.type) {
    case 'PROP_TWO':
      return {...state, contacts:action.payload}
      break;
    case 'ADD_ITEM':
    return {...state, arr: [...state.arr, action.payload]}

    break;

    default:
    return {...state}

  }
}

// export const reducer = combineReducers(
//   {
//     reducer1,
//
//   }
// )
