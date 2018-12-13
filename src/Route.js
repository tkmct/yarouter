import { useContext } from 'react'
import { RoutesContext } from './Router'

export default function Route({ path, component }) {
  const location = useContext(RoutesContext)

  // TODO: extract to util function
  if (path === location.pathname) {
    return component()
  }

  return null
}
