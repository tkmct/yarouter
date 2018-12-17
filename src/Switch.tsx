import * as React from 'react'
import { Props as RouteProps } from './Route'

interface Props {
  children: Array<React.ReactElement<RouteProps>> | React.ReactElement<RouteProps>
}

export default function Switch(props: Props) {
  return <>Switch</>
}
