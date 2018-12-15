import * as React from 'react'

type TransitionType = 'fade'

interface Props {
  enter?: TransitionType
  leave?: TransitionType
  children: React.ReactNode
}

function Transition({ enter, leave, children }: Props) {
  console.log(enter, leave)
  return <div>{children}</div>
}

export default Transition
