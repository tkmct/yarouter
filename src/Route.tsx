import * as React from 'react'
import { LocationContext } from './Router'

interface Props {
  path: string
  component: () => React.ReactNode
}

export default function Route({ path, component }: Props) {
  const location = React.useContext(LocationContext)

  // TODO: extract to util function
  if (path === location.pathname) {
    return component()
  }

  return null
}
