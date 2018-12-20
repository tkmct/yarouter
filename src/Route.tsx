import * as React from 'react'

export interface Props {
  path: string
  component: React.ComponentType<any>
  exact?: boolean
  onEnter?: () => any
}

export default function Route({ component: Component, onEnter }: Props) {
  if (onEnter) {
    onEnter()
  }

  return Component
}
