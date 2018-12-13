// @flow
import * as React from 'react'
import useLocation from './useLocation'
import FloatingPanel from './utilComponents/FloatingPanel'
import stringify from 'json-stringify-pretty-compact'

type Props = {
  children: Array<React.Node>,
}

// location object type
type Location = {
  pathname: string,
}

export const LocationContext = React.createContext<Location>(
  document.location || {}
)

export default function Router({ children }: Props) {
  const location = useLocation()
  return (
    <LocationContext.Provider value={location}>
      {children}
      <FloatingPanel>{stringify(location)}</FloatingPanel>
    </LocationContext.Provider>
  )
}
