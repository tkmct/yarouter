import * as React from 'react'

export interface Props {
  path: string
  component: () => React.ReactElement<any>
  onEnter?: () => any
}

export default function Route({ component, onEnter }: Props) {
  if (onEnter) {
    onEnter()
  }

  return component()
}
