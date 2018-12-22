import * as React from 'react'
import { History } from 'history'
import { Props as RouteProps } from './Route'
import useTransition from './hooks/useTransition'
import match from './match'
import LocationContext from './locationContext'

const TRANSITION_DURATION = 800

interface Props {
  history: History
  transitionDuration?: number
  reverseOnPop?: boolean
  children: Array<React.ReactElement<RouteProps>> | React.ReactElement<RouteProps>
}

export default function TransitionRouter({
  history,
  children,
  transitionDuration = TRANSITION_DURATION,
  reverseOnPop = true,
}: Props) {
  if (!history) {
    throw new Error('No history instance is provided.')
  }

  const {
    isTransitioning,
    currentLocation,
    nextLocation,
    currentTraisitionState,
    nextTransitionState,
  } = useTransition(history, transitionDuration, reverseOnPop)

  let MatchedComponent
  if (isTransitioning && nextLocation) {
    const CurrentComponent = match(currentLocation, children)
    const NextComponent = match(nextLocation, children)
    // TODO: catch if next route is invalid route
    MatchedComponent = (
      <>
        {CurrentComponent && (
          <CurrentComponent key="current" transitionState={currentTraisitionState} />
        )}
        {NextComponent && <NextComponent key="next" transitionState={nextTransitionState} />}
      </>
    )
  } else {
    const CurrentComponent = match(currentLocation, children)
    MatchedComponent = <>{CurrentComponent && <CurrentComponent transitionState={'entered'} />}</>
  }

  return (
    <LocationContext.Provider value={{ location: currentLocation, history }}>
      {MatchedComponent}
    </LocationContext.Provider>
  )
}
