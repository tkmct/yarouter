import * as React from 'react'
import { History, Location } from 'history'
import useLocation from './useLocation'
import matchPath from './matchPath'

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

export default function Router({
  history,
  children,
}: {
  history: History
  children: Array<React.ReactElement<any>>
}) {
  if (!history) {
    throw new Error('No history instance is provided.')
  }

  const location = useLocation(history)
  const component = matchPath(location, children)

  return (
    <LocationContext.Provider value={{ location, history }}>{component}</LocationContext.Provider>
  )
}
