import * as React from 'react'

interface Props {
  path: string
  component: () => React.ReactNode
}

export default function Route({ component }: Props) {
  return component()
}
