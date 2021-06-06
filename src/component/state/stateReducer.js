import {actionType} from "./actionType"

const initState = {
  resturantData: [],
  menuData: [],
  justEnter: null
}

export const resturant = (state=initState, {type, payload}) => {
  switch (type) {
    
    case actionType.ADD_CONTENT:
      return{
        ...state,
        resturantData: payload
      }

    case actionType.ADJUST_MENU_QTY:
      return{
        ...state,
        menuData: state.menuData.map(item => item.id === payload.id ? {...item, qty: +payload.qty} : item)
      }

    case actionType.ADD_TO_MENU:
      const item = state.resturantData.find(el => el.id === payload.id)
      const inMenu = state.menuData.find(item => item.id === payload.id ? true : false)
      return{
        ...state,
        menuData: inMenu ? state.menuData.map(item => item.id === payload.id ? {...item, qty: item.qty + 1} : item ) : [...state.menuData, {...item, qty: 1 }]
      }

    case actionType.REMOVE_FROM_MENU:
      return{
        ...state,
        menuData: state.menuData.filter(item => item.id !== payload.id)
      }

    case actionType.VIEW_SINGLE_CONTENT:
      return{
        ...state,
        justEnter: payload
      }
  
    default:
      return state;
  }
} 