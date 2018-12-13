import * as React from 'react'

const style: React.CSSProperties = {
  fontFamily: 'sans-serif',
  position: 'fixed',
  bottom: 10,
  right: 10,
  padding: 10,
  border: 'solid 1px lightgrey',
  borderRadius: 4,
  maxWidth: 240,
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  boxShadow: 'lightgrey 1px 1px 2px 1px',
}

export default function FloatingPanel({ children }: { children: React.ReactChildren }) {
  return <div style={style}>{children}</div>
}
