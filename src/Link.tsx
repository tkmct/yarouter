import * as React from 'react'
import LocationContext from './locationContext'

interface Props {
  children: React.ReactChildren
  to: string
}

export default function({ children, to }: Props): JSX.Element {
  const { history } = React.useContext(LocationContext)
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    history.push(to)
  }

  return <a onClick={onClick}>{children}</a>
}
