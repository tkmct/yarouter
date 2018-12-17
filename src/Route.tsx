import * as React from 'react'

export interface Props {
  path: string
  component: any // TODO: fix this type
  exact?: boolean
  onEnter?: () => any
}

export default function Route({ component, onEnter }: Props) {
  if (onEnter) {
    onEnter()
  }

  return component()
}
