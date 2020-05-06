import React from 'react'

function useStorage(key, initialValue) {
  const [storedValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (!item) return initialValue
      return JSON.parse(item)
    } catch (err) {
      return initialValue
    }
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(initialValue))
  }, [initialValue, key])


  return storedValue
}

export default useStorage
