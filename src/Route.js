// @flow
import * as React from 'react'
import { LocationContext } from './Router'

type Props = {
  path: string,
  component: () => React.Node,
}

export default function Route({ path, component }: Props): React.Node {
  const location = React.useContext(LocationContext)

  // TODO: extract to util function
  if (path === location.pathname) {
    return component()
  }

  return null
}
