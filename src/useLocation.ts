import { useState, useEffect } from 'react'

function useLocation() {
  const [location, setLocation] = useState(document.location) // location object

  const updater = (_: Event) => {
    setLocation(document.location)
  }

  useEffect(() => {
    window.addEventListener('popstate', updater)
    return () => {
      window.removeEventListener('popstate', updater)
    }
  })

  return location
}

export default useLocation
