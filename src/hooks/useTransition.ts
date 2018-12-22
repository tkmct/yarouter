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
    case 'PUSH_INITIATE':
      return {
        ...state,
        nextLocation: action.payload.nextLocation,
        nextTransitionState: 'before-enter',
        currentTraisitionState: 'before-leave',
        isTransitioning: true,
      }
    case 'PUSH_ENTER':
      return {
        ...state,
        nextTransitionState: 'enter',
        currentTraisitionState: 'leave',
      }
    case 'PUSH_ENTERED':
      return {
        ...state,
        nextTransitionState: 'entered',
        currentTraisitionState: 'left',
        isTransitioning: false,
        nextLocation: null,
        currentLocation: action.payload.currentLocation,
      }
    case 'PUSH_FINISH':
      return {
        ...state,
        currentTraisitionState: 'entered',
        nextTransitionState: null,
      }
    case 'POP_INITIATE':
      return {
        ...state,
        nextLocation: action.payload.nextLocation,
        nextTransitionState: 'left',
        currentTraisitionState: 'entered',
        isTransitioning: true,
      }
    case 'POP_ENTER':
      return {
        ...state,
        nextTransitionState: 'before-leave',
        currentTraisitionState: 'before-enter',
      }
    case 'POP_ENTERED':
      return {
        ...state,
        nextTransitionState: 'entered',
        currentTraisitionState: 'left',
        isTransitioning: false,
        nextLocation: null,
        currentLocation: action.payload.currentLocation,
      }
    case 'POP_FINISH':
      return {
        ...state,
        currentTraisitionState: 'entered',
        nextTransitionState: null,
      }
    default:
      return state
  }
}

const useTransition = (history: History, transitionDuration: number, reverseOnPop?: boolean) => {
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
    dispatch({ type: 'PUSH_INITIATE', payload: { nextLocation: location } })
    await delay(10) // FixMe: better way
    dispatch({ type: 'PUSH_ENTER', payload: null })
    await delay(transitionDuration * 1.2)
    dispatch({ type: 'PUSH_ENTERED', payload: { currentLocation: location } })
    await delay(10) // FixMe: better way
    dispatch({ type: 'PUSH_FINISH', payload: null })
  }

  async function handlePop(location: Location) {
    dispatch({ type: 'POP_INITIATE', payload: { nextLocation: location } })
    await delay(10) // FixMe: better way
    dispatch({ type: 'POP_ENTER', payload: null })
    await delay(transitionDuration * 1.2)
    dispatch({ type: 'POP_ENTERED', payload: { currentLocation: location } })
    await delay(10) // FixMe: better way
    dispatch({ type: 'POP_FINISH', payload: null })
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

      if (action === 'POP' && reverseOnPop) {
        handlePop(location)
      } else {
        handlePush(location)
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
