// @flow
import { useState, useEffect } from 'react'

function useLocation() {
  const [location, setLocation] = useState(document.location) // location object

  const updater = event => {
    setLocation(document.location)
  }

  useEffect(() => {
    window.addEventListener('popstate', updater)
    return () => {
      window.removeEventLisetener('popstate', updater)
    }
  })

  return location
}

export default useLocation
