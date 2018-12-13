import * as React from 'react'

export default function matchPath(
  location: { pathname: string },
  routes: Array<React.ReactElement<any>>
): React.ReactElement<any> | null {
  return routes.find(route => route.props.path === location.pathname) || null
}
