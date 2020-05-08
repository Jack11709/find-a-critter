import React from 'react'
import BagContext from './BagContext'

function useBag() {
  const [state, dispatch] = React.useContext(BagContext)

  const handleOpenBag = () => {
    dispatch({ type: 'TOGGLE_BAG' })
  }

  const addToBag = item => {
    dispatch({ type: 'ADD_TO_BAG', payload: item })
  }

  const isInBag = name => {
    return !!state.bagContents.find(item => item.name === name)
  }

  const removeFromBag = name => {
    dispatch({ type: 'REMOVE_FROM_BAG', payload: name })
  }

  const emptyBag = () => {
    dispatch({ type: 'EMPTY_BAG' })
  }

  const increaseQuantity = name => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: name })
  }

  const decreaseQuantity = name => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: name })
  }

  return {
    bagOpen: state.bagOpen,
    handleOpenBag,
    bagContents: state.bagContents,
    addToBag,
    isInBag,
    removeFromBag,
    emptyBag,
    increaseQuantity,
    decreaseQuantity
  }
}

export default useBag
