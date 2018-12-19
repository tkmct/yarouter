import { useState, useEffect } from 'react'
import { History, Action, Location } from 'history'
import { delay } from '../util'

const useTransition = (history: History, transitionDuration: number) => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(history.location) // location object
  const [nextLocation, setNextLocation] = useState<Location | null>(null)

  // step1. set isTransitioning to true when location change
  useEffect(() => {
    const unlisten = history.listen(async (location: Location, _: Action) => {
      if (isTransitioning) {
        // TODO: handle click while isTransitioning is true
      }

      if (location.pathname !== currentLocation.pathname) {
        setNextLocation(location)
        setIsTransitioning(true)
        // TODO: handle click while isTransitioning is true
        await delay(transitionDuration)
        setNextLocation(null)
        setCurrentLocation(location)
        setIsTransitioning(false)
      }
    })
    return unlisten
  })

  return { isTransitioning, currentLocation, nextLocation }
}

export default useTransition
