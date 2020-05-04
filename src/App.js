import React from 'react'

import CritterContext from './utils/CritterContext'
import BagContext from './utils/BagContext'
import bagReducer, { initialBagState } from './utils/bagReducer'
import Header from './components/Header'
import Search from './components/Search'
import CritterList from './components/CritterList'
import Bag from './components/Bag'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [state, dispatch] = React.useReducer(bagReducer, initialBagState)

  return (
    <>
      <CritterContext.Provider value={[searchTerm, setSearchTerm]}>
        <BagContext.Provider value={[state, dispatch]}> 
          <Header />
          {state.bagOpen ? 
            <Bag />
            : 
            <>
              <Search />
              <CritterList />
            </>
          }
        </BagContext.Provider>
      </CritterContext.Provider>
    </>
  )
}

export default App
