import React from 'react'
import useLocation from './useLocation'
import FloatingPanel from './utilComponents/FloatingPanel'
import stringify from 'json-stringify-pretty-compact'

export default function Router({ children }) {
  const location = useLocation()
  return (
    <>
      <div>{children}</div>

      <FloatingPanel>{stringify(location)}</FloatingPanel>
    </>
  )
}
