import React from 'react'
import useBag from '../utils/useBag'

function Bag() {
  const { bagContents } = useBag()

  return (
    <div>
      {bagContents.map(item => {

      })}
    </div>
  )
}

export default Bag
