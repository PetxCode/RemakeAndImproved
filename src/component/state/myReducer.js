import {combineReducers} from "redux"
import {resturant} from "./stateReducer"


export const reducer = combineReducers({
  rest: resturant
})