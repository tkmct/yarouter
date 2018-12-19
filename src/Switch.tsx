import * as React from 'react'
import LocationContext from './locationContext'
import { Props as RouteProps } from './Route'
import matchPath from './matchPath'

interface Props {
  children: Array<React.ReactElement<RouteProps>> | React.ReactElement<RouteProps>
}

export default function Switch({ children }: Props) {
  const { location } = React.useContext(LocationContext)
  const matchedComponent = matchPath(location, children)

  return matchedComponent
}
