import * as React from 'react'

const style: React.CSSProperties = {
  backgroundColor: 'white',
  fontFamily: 'sans-serif',
  position: 'fixed',
  bottom: 10,
  right: 10,
  padding: 10,
  border: 'solid 1px lightgrey',
  borderRadius: 4,
  maxWidth: 280,
  minWidth: 200,
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  boxShadow: 'lightgrey 1px 1px 2px 1px',
}

export default function FloatingPanel({ children }: { children: React.ReactNode }) {
  return <div style={style}>{children}</div>
}
