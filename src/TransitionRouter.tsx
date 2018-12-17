import * as React from 'react'
import { History, Location } from 'history'
import { Props as RouteProps } from './Route'
import useLocation from './useLocation'
import matchPath from './matchPath'

const TRANSITION_DURATION = 1000

const initialLocation = {
  pathname: '',
  search: '',
  state: {},
  hash: '',
}

export const LocationContext = React.createContext<{ location: Location; history: History }>({
  location: initialLocation,
  history: ({} as any) as History,
})

interface Props {
  history: History
  children: Array<React.ReactElement<RouteProps>> | React.ReactElement<RouteProps>
}

export default function Router({ history, children }: Props) {
  if (!history) {
    throw new Error('No history instance is provided.')
  }

  const location = useLocation(history)
  const component = matchPath(location, children)
  // TODO: triger transition on change location
  // use transitioning state
  // get nextComponent
  // set currentComponent's state to leaving set nextComponent's state to entering
  // mount nextComponent
  // after TRANSITION_DURATION, set currentComponent's state to left, set nextComponent's state to entered
  // unmount currentComponent, change currentComponent to nextComponent

  return (
    <LocationContext.Provider value={{ location, history }}>{component}</LocationContext.Provider>
  )
}
