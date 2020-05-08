import React from 'react'
import useBag from '../utils/useBag'

function Bag() {
  const { 
    bagContents, 
    emptyBag,
    increaseQuantity,
    decreaseQuantity
  } = useBag()

  const getTotal = React.useMemo(() => {
    return bagContents.reduce((a, c) => a + (Number(c.price) * c.quantity), 0)
  }, [bagContents])

  const getMaxTotal = React.useMemo(() => {
    return bagContents.reduce((a, c) => {
      const price = Number(c.price) * c.quantity 
      return a + (price + (price / 2))
    }, 0)
  }, [bagContents])

  const getTotalItems = React.useMemo(() => {
    return bagContents.reduce((a, c) => {
      return a + c.quantity
    }, 0)
  }, [bagContents])

  return (
    <div className="bag-container">
      <div className="bag-main">
        <div className="bag-table">
          <div className="bag-table-row table-header">
            <p>Name</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          <hr className="row-divider"/>
          {bagContents.map(item => (
            <div className="bag-table-row" key={item.name} >
              <p>{item.name}</p>
              <p className="item-quantity">
                <span onClick={() => increaseQuantity(item.name)}>➕</span>
                <span>{item.quantity}</span>
                <span 
                  onClick={() => {
                    if (item.quantity === 1) return
                    decreaseQuantity(item.name)
                  }}
                >➖</span>
              </p>
              <p>${Number(item.price) * item.quantity}</p>
            </div>
          ))}
          {bagContents.length > 0 && 
          <>
            <hr className="row-divider" />
            <div className="bag-table-row">
              <p>Total</p>
              <p>{getTotalItems}</p>
              <p>${getTotal}</p>
            </div>
            <div className="bag-table-row" >
              <p>Max total from Vendors</p>
              <p>-</p>
              <p>${getMaxTotal}</p>
            </div>
          </>
          }
          <hr className="row-divider" />
          <button onClick={emptyBag} className="bag-button">Clear Bag</button>
        </div>
      </div>
    </div>
  )
}

export default Bag
