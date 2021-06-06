import {actionType} from "./actionType"


export const addToMenu = (menuID) => {
  return{
    type: actionType.ADD_TO_MENU,
    payload: {
      id: menuID
    }
  }
}


export const removeFromMenu = (menuID) => {
  return{
    type: actionType.REMOVE_FROM_MENU,
    payload: {
      id: menuID
    }
  }
}


export const adjustMenuQTY = (menuID, value) => {
  return{
    type: actionType.ADJUST_MENU_QTY,
    payload: {
      id: menuID,
      qty: value
    }
  }
}


export const addContentToMenu = (menu) => {
  return{
    type: actionType.ADD_CONTENT,
    payload: menu
  }
}


export const singleMenu = (menu) => {
  return{
    type: actionType.VIEW_SINGLE_CONTENT,
    payload: menu
  }
}