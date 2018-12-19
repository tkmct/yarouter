import * as React from 'react'
import { Props as RouteProps } from './Route'
import { trimTrailingSlash } from './util'

type RouteChildType = React.ReactElement<RouteProps>

interface MatchProps {
  path: string
  exact?: boolean
}

export function matchExactPath(path: string, currentPath: string): boolean {
  return path === currentPath
}

export function matchPath({ path, exact }: MatchProps, currentPath: string): boolean {
  const trimedCurrentPath = currentPath === '/' ? currentPath : trimTrailingSlash(currentPath)

  if (exact) {
    return matchExactPath(path, trimedCurrentPath)
  }
  return trimedCurrentPath.startsWith(path)
}

export default function match(
  { pathname }: { pathname: string },
  routes: RouteChildType[] | RouteChildType
) {
  if (!Array.isArray(routes)) {
    return matchPath(routes.props, pathname) ? routes : null
  }

  return routes.find(route => matchPath(route.props, pathname)) || null
}
