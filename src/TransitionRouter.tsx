import * as React from 'react'
import { History } from 'history'
import { Props as RouteProps } from './Route'
import useTransition from './hooks/useTransition'
import matchPath from './matchPath'
import LocationContext from './locationContext'
import FloatingPanel from './utilComponents/FloatingPanel'

const TRANSITION_DURATION = 2000

interface Props {
  history: History
  children: Array<React.ReactElement<RouteProps>> | React.ReactElement<RouteProps>
}

export default function TransitionRouter({ history, children }: Props) {
  if (!history) {
    throw new Error('No history instance is provided.')
  }

  const { isTransitioning, currentLocation, nextLocation } = useTransition(
    history,
    TRANSITION_DURATION
  )
  if (isTransitioning) {
    // TODO: display currentComponent and nextComponent
  } else {
    // TODO: display currentComponent
  }

  const component = matchPath(location, children)
  // TODO: triger transition on change location
  // use transitioning state
  // get nextComponent
  // set currentComponent's state to leaving set nextComponent's state to entering
  // mount nextComponent
  // after TRANSITION_DURATION, set currentComponent's state to left, set nextComponent's state to entered
  // unmount currentComponent, change currentComponent to nextComponent

  // TODO: create TransitionLocationContext to provide transition state
  return (
    <>
      <LocationContext.Provider value={{ location: currentLocation, history }}>
        {component}
      </LocationContext.Provider>
      <FloatingPanel>
        <p>Transitioning: {JSON.stringify(isTransitioning)}</p>
        <p>CurrentLocation: {currentLocation.pathname}</p>
        <p>NextLocation: {nextLocation ? nextLocation.pathname : 'null'}</p>
      </FloatingPanel>
    </>
  )
}
