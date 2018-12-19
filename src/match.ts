import * as React from 'react'
import { Props as RouteProps } from './Route'
import { trimTrailingSlash } from './util'

type RouteElement = React.ReactElement<RouteProps>

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

function getRoutedComponent(route: RouteElement | null): React.ComponentType<any> | null {
  if (!route) {
    return null
  }

  return route.props.component
}

export default function match(
  { pathname }: { pathname: string },
  routes: RouteElement[] | RouteElement
): React.ComponentType<any> | null {
  if (!Array.isArray(routes)) {
    const routeComponent = matchPath(routes.props, pathname) ? routes : null
    return getRoutedComponent(routeComponent)
  }

  const routeComponent = routes.find(route => matchPath(route.props, pathname)) || null
  return getRoutedComponent(routeComponent)
}
