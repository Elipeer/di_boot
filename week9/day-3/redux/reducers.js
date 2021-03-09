import {combineReducers} from 'redux'

let initState = {
  searchText: ''
}

export const reducer1 = (state=initState,action={}) => {
  switch (action.type) {
    case 'SEARCH_TEXT':
    console.log('SEARCH_TEXT');
      return {...state, searchText:action.payload}
      break;
    default:
      return {...state}
  }
}

let initWeather = {
  desc:[],
}

export const weatherDesc = (state=initWeather,action={})=>{
  switch (action.type) {
    case "DATA":
    return {...state, desc:action.payload}

      break;
    default:
    return {...state}

  }

}

export const reducer = combineReducers(
  {
    reducer1,
    weatherDesc,
  }
)
