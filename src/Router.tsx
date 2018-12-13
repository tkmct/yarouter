import * as React from 'react'
import useLocation from './useLocation'
import FloatingPanel from './utilComponents/FloatingPanel'
// @ts-ignore
import stringify from 'json-stringify-pretty-compact'

// location object type
export const LocationContext = React.createContext(document.location || {})

export default function Router({
  children,
}: {
  children: React.ReactChildren
}) {
  const location = useLocation()
  return (
    <LocationContext.Provider value={location}>
      {children}
      <FloatingPanel>{stringify(location)}</FloatingPanel>
    </LocationContext.Provider>
  )
}
