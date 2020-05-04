export const initialBagState = {
  bagOpen: false
}

function bagReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_BAG':
      return {
        ...state,
        bagOpen: !state.bagOpen
      }
    default:
      return state
  }
}

export default bagReducer
