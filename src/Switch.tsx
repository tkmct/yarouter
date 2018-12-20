import * as React from 'react'
import LocationContext from './locationContext'
import { Props as RouteProps } from './Route'
import match from './match'

interface Props {
  children: Array<React.ReactElement<RouteProps>> | React.ReactElement<RouteProps>
}

export default function Switch({ children }: Props) {
  const { location } = React.useContext(LocationContext)
  const MatchedComponent = match(location, children)

  return MatchedComponent ? <MatchedComponent /> : null
}
