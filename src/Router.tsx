import * as React from 'react'
import { History } from 'history'
import { Props as RouteProps } from './Route'
import useLocation from './useLocation'
import matchPath from './matchPath'
import LocationContext from './locationContext'

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

  return (
    <LocationContext.Provider value={{ location, history }}>{component}</LocationContext.Provider>
  )
}
