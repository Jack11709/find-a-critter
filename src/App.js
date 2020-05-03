import React from 'react'
import critters from './data/data.json'

import Header from './components/Header'
import Search from './components/Search'
import CritterList from './components/CritterList'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [bagOpen, setBagOpen] = React.useState(false)
  
  const filterArr = (arr, term) => {
    const re = new RegExp(term, 'i')
    return arr.filter(c => re.test(c.name))
  }

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value)
  }

  const handleOpenBag = () => {
    setBagOpen(!bagOpen)
  }

  return (
    <>
      <Header handleOpenBag={handleOpenBag} bagOpen={bagOpen} />
      {bagOpen ? (
        <div>
          Bag View
        </div>
      ) : (
        <>
          <Search
            handleChange={handleChange}
            searchTerm={searchTerm}
          />
          <CritterList
            critters={filterArr(critters, searchTerm)}
          />
        </>
      )}
    </>
  )
}

export default App
