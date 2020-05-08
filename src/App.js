import React from 'react'

import CritterContext from './utils/CritterContext'
import BagContext from './utils/BagContext'
import bagReducer, { initialBagState } from './utils/bagReducer'
import useStorage from './utils/useStorage'
import useMobile from './utils/useMobile'
import Header from './components/Header'
import Search from './components/Search'
import CritterList from './components/CritterList'
import Bag from './components/Bag'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [state, dispatch] = React.useReducer(bagReducer, initialBagState)
  const storedValue = useStorage('bag', state.bagContents)
  const isMobile = useMobile()

  React.useEffect(() => {
    dispatch({ type: 'SET_BAG_CONTENTS', payload: storedValue })
  }, [storedValue])

  return (
    <>
      <CritterContext.Provider value={[searchTerm, setSearchTerm]}>
        <BagContext.Provider value={[state, dispatch]}> 
          <Header />
          {(state.bagOpen && isMobile)  ? 
            <Bag />
            : 
            <>
              <Search />
              <div className="main-container">
                <CritterList />
                {!isMobile && <Bag />}
              </div>
            </>
          }
        </BagContext.Provider>
      </CritterContext.Provider>  
    </>
  )
}

export default App
