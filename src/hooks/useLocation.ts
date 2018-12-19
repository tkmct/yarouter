import { useState, useEffect } from 'react'
import { History, Location, Action } from 'history'

function useLocation(history: History) {
  const [location, setLocation] = useState(history.location) // location object

  const updater = (location: Location, _: Action) => {
    setLocation(location)
  }

  useEffect(() => {
    return history.listen(updater)
  })

  return location
}

export default useLocation
