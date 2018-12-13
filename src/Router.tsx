import * as React from 'react'
import { History, Location } from 'history'
import useLocation from './useLocation'
import FloatingPanel from './utilComponents/FloatingPanel'
// @ts-ignore
import stringify from 'json-stringify-pretty-compact'
import matchPath from './matchPath'

const initialLocation = {
  pathname: '',
  search: '',
  state: {},
  hash: '',
}

export const LocationContext = React.createContext<Location>(initialLocation)

export default function Router({
  history,
  children,
}: {
  history: History
  children: Array<React.ReactElement<any>>
}) {
  const location = useLocation(history)
  const component = matchPath(location, children)

  return (
    <LocationContext.Provider value={location}>
      {component}
      <FloatingPanel>{stringify(location)}</FloatingPanel>
    </LocationContext.Provider>
  )
}
