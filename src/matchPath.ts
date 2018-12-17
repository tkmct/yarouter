import * as React from 'react'
import { Props as RouteProps } from './Route'

type RouteChildType = React.ReactElement<RouteProps>

interface MatchProps {
  path: string
  exact?: boolean
}

export function matchExact(path: string, currentPath: string): boolean {
  return path === currentPath
}

export function match({ path, exact }: MatchProps, currentPath: string): boolean {
  if (exact) {
    return matchExact(path, currentPath)
  }
  return currentPath.startsWith(path)
}

export default function matchPath(
  location: { pathname: string },
  routes: RouteChildType[] | RouteChildType
) {
  if (!Array.isArray(routes)) {
    return match(routes.props, location.pathname) ? routes : null
  }

  return routes.find(route => match(route.props, location.pathname)) || null
}
