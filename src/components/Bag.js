import React from 'react'
import useBag from '../utils/useBag'

function Bag() {
  const { bagContents } = useBag()

  return (
    <div className="section">
      {bagContents.map(item => {
        return <p key={item.name}>{item.name} {item.price}</p>
      })}
    </div>
  )
}

export default Bag
