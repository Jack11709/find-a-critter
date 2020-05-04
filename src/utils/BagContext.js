import React from 'react'
import { initialBagState } from './bagReducer'

const BagContext = React.createContext(initialBagState)

export default BagContext
