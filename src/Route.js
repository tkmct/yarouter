import * as React from 'react'
import { LocationContext } from './Router'

export default function Route({ path, component }) {
  const location = React.useContext(LocationContext)

  // TODO: extract to util function
  if (path === location.pathname) {
    return component()
  }

  return null
}
