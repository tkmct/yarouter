import * as React from 'react'
import { Props as RouteProps } from './Route'

type RouteChildType = React.ReactElement<RouteProps>

export default function matchPath(
  location: { pathname: string },
  routes: RouteChildType[] | RouteChildType
): React.ReactNode {
  if (!Array.isArray(routes)) {
    return routes.props.path === location.pathname ? routes : null
  }

  return routes.find(route => route.props.path === location.pathname) || null
}
