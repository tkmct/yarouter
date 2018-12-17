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
  const trimedCurrentPath = currentPath === '/' ? currentPath : trimTrailingSlash(currentPath)

  if (exact) {
    return matchExact(path, trimedCurrentPath)
  }
  return trimedCurrentPath.startsWith(path)
}

export default function matchPath(
  { pathname }: { pathname: string },
  routes: RouteChildType[] | RouteChildType
) {
  if (!Array.isArray(routes)) {
    return match(routes.props, pathname) ? routes : null
  }

  return routes.find(route => match(route.props, pathname)) || null
}

export function trimTrailingSlash(str: string): string {
  return str.replace(/\/+$/, '')
}
