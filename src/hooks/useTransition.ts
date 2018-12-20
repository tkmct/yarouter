import { useState, useEffect, useReducer } from 'react'
import { History, Action, Location } from 'history'
import { delay } from '../util'

type TransitionState = 'before-enter' | 'enter' | 'entered' | 'before-leave' | 'leave' | 'left'

const useTransition = (history: History, transitionDuration: number) => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(history.location) // location object
  const [nextLocation, setNextLocation] = useState<Location | null>(null)
  const [currentTraisitionState, setCurrentTransitionState] = useState<TransitionState>('entered')
  const [nextTransitionState, setNextTransitionState] = useState<TransitionState | null>(null)

  // step1. set isTransitioning to true when location change
  useEffect(() => {
    const unlisten = history.listen(async (location: Location, _: Action) => {
      if (isTransitioning) {
        // TODO: handle click while isTransitioning is true
      }

      if (location.pathname !== currentLocation.pathname) {
        setNextLocation(location)
        setNextTransitionState('before-enter')
        setCurrentTransitionState('before-leave')
        setIsTransitioning(true)
        await delay(10) // FixMe: better way
        setNextTransitionState('enter')
        setCurrentTransitionState('leave')
        // TODO: handle click while isTransitioning is true
        await delay(transitionDuration * 1.2)
        setNextTransitionState('entered')
        setCurrentTransitionState('left')
        setIsTransitioning(false)
        setNextLocation(null)
        setCurrentLocation(location)
        await delay(10) // FixMe: better way
        setCurrentTransitionState('entered')
        setNextTransitionState(null)
      }
    })
    return unlisten
  })

  return {
    isTransitioning,
    currentLocation,
    nextLocation,
    currentTraisitionState,
    nextTransitionState,
  }
}

export default useTransition
