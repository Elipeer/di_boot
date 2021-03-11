
import {combineReducers} from 'redux'
import {ASYNC,ADD,SUBTRACT,ODD} from './actions2'

let initNum = {
num:0
}

export const number = (state=initNum, action) => {
  switch (action.type) {
    case ADD:
      return {...state, num:eval(state.num + action.payload)}
      break;
      case SUBTRACT:
        return {...state, num:eval(state.num-action.payload)}
        break;
        case ODD:
        return {...state, num:state.num%2 !== 0 ? eval(state.num+action.payload):state.num}
        case ASYNC:
        return {...state, num:eval(state.num+action.payload)}

          break;

          break;
    default:
      return {...state}
  }
}

export const reducer = combineReducers(
  {
    number,
  }
)
