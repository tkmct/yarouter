import * as React from 'react'
import { History, Location } from 'history'

const initialLocation = {
  pathname: '',
  search: '',
  state: {},
  hash: '',
}

export default React.createContext<{ location: Location; history: History }>({
  location: initialLocation,
  history: ({} as any) as History,
})
