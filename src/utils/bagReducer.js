export const initialBagState = {
  bagOpen: true,
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
    default:
      return state
  }
}

export default bagReducer
