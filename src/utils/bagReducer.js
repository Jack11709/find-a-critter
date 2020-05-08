export const initialBagState = {
  bagOpen: false,
  bagContents: []
}

function bagReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_BAG':
      return {
        ...state,
        bagOpen: !state.bagOpen
      }
    case 'ADD_TO_BAG':
      return {
        ...state,
        bagContents: [...state.bagContents, action.payload]
      }
    case 'REMOVE_FROM_BAG':
      return {
        ...state,
        bagContents: state.bagContents.filter(item => item.name !== action.payload)
      }
    case 'SET_BAG_CONTENTS':
      return {
        ...state,
        bagContents: action.payload
      }
    case 'EMPTY_BAG':
      return {
        ...state,
        bagContents: []
      }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        bagContents: state.bagContents.map(item => {
          if (item.name === action.payload) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      }
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        bagContents: state.bagContents.map(item => {
          if (item.name === action.payload) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
      }
    default:
      return state
  }
}

export default bagReducer
