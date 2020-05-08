import React from 'react'

function useMobile(breakpoint = 480) {
  const isClient = typeof window === 'object'

  const getWidth = React.useCallback(() => {
    return  isClient ? window.innerWidth : undefined
  }, [isClient])

  const [windowWidth, setWindowWidth] = React.useState(getWidth)

  React.useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowWidth(getWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isClient, getWidth]) 

  return windowWidth < breakpoint
}

export default useMobile
