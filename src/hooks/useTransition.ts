import { useEffect, useReducer } from 'react'
import { History, Action, Location } from 'history'
import { delay } from '../util'

// TODO: rename transition state for using with popping
type TransitionState = 'before-enter' | 'enter' | 'entered' | 'before-leave' | 'leave' | 'left'

interface State {
  isTransitioning: boolean
  currentLocation: Location
  nextLocation: Location | null
  currentTraisitionState: TransitionState
  nextTransitionState: TransitionState | null
}

// TODO: maybe need action creator? maybenot
function reducer(state: State, action: { type: string; payload: any /* TODO: type. */ }): State {
  switch (action.type) {
    case 'INITIATE':
      return {
        ...state,
        nextLocation: action.payload.nextLocation,
        nextTransitionState: 'before-enter',
        currentTraisitionState: 'before-leave',
        isTransitioning: true,
      }
    case 'TRANSITION_ENTER':
      return {
        ...state,
        nextTransitionState: 'enter',
        currentTraisitionState: 'leave',
      }
    case 'TRANSITION_ENTERED':
      return {
        ...state,
        nextTransitionState: 'entered',
        currentTraisitionState: 'left',
        isTransitioning: false,
        nextLocation: null,
        currentLocation: action.payload.currentLocation,
      }
    case 'FINISH':
      return {
        ...state,
        currentTraisitionState: 'entered',
        nextTransitionState: null,
      }
    default:
      return state
  }
}

const useTransition = (history: History, transitionDuration: number) => {
  const initialState: State = {
    isTransitioning: false,
    currentLocation: history.location,
    nextLocation: null,
    currentTraisitionState: 'entered',
    nextTransitionState: null,
  }
  const [
    { isTransitioning, currentLocation, nextLocation, currentTraisitionState, nextTransitionState },
    dispatch,
  ] = useReducer(reducer, initialState)

  async function handlePush(location: Location) {
    if (location.pathname !== currentLocation.pathname) {
      dispatch({ type: 'INITIATE', payload: { nextLocation: location } })
      await delay(10) // FixMe: better way
      dispatch({ type: 'TRANSITION_ENTER', payload: null })
      await delay(transitionDuration * 1.2)
      dispatch({ type: 'TRANSITION_ENTERED', payload: { currentLocation: location } })
      await delay(10) // FixMe: better way
      dispatch({ type: 'FINISH', payload: null })
    }
  }

  async function handlePop(location: Location) {
    // TODO: implement
  }

  // step1. set isTransitioning to true when location change
  useEffect(() => {
    const unlisten = history.listen(async (location: Location, action: Action) => {
      // path is not changed. other property like search changed
      if (location.pathname === currentLocation.pathname) {
        return
      }

      if (isTransitioning) {
        // TODO: handle click while isTransitioning is true
        return
      }

      if (action === 'PUSH') {
        handlePush(location)
      } else if (action === 'POP') {
        handlePop(location)
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
