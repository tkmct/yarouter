import { useState, useEffect } from 'react'
import { History, Action, Location } from 'history'
import { delay } from './util'

const useTransition = (history: History, transitionDuration: number) => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [location, setLocation] = useState(history.location) // location object

  // step1. set isTransitioning to true when location change
  useEffect(() => {
    const unlisten = history.listen(async (newLocation: Location, _: Action) => {
      if (newLocation.pathname !== location.pathname) {
        setLocation(newLocation)
        setIsTransitioning(true)
        await delay(transitionDuration)
        setIsTransitioning(false)
      }
    })
    return unlisten
  })

  return { isTransitioning, location }
}

export default useTransition
