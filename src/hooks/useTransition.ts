import { useState, useEffect } from 'react'
import { History, Action, Location } from 'history'
import { delay } from '../util'

const useTransition = (history: History, transitionDuration: number) => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [location, setLocation] = useState(history.location) // location object
  const [nextLocation, setNextLocation] = useState<Location | null>(null)

  // step1. set isTransitioning to true when location change
  useEffect(() => {
    const unlisten = history.listen(async (nextLocation: Location, _: Action) => {
      if (nextLocation.pathname !== location.pathname) {
        setNextLocation(nextLocation)
        setIsTransitioning(true)
        await delay(transitionDuration)
        setNextLocation(null)
        setLocation(nextLocation)
        setIsTransitioning(false)
      }
    })
    return unlisten
  })

  return { isTransitioning, location, nextLocation }
}

export default useTransition
