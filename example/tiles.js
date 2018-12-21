import React, { useRef, useCallback, useContext } from 'react'
import { LocationContext } from '../src/index'
import './tiles.css'

const colors = ['#ff6b6b', '#e8f962', '#82ddd1', '#f9d171', '#6cf289']
const tiles = [
  { name: 'Tile1' },
  { name: 'Tile2' },
  { name: 'Tile3' },
  { name: 'Tile4' },
  { name: 'Tile5' },
  { name: 'Tile6' },
  { name: 'Tile7' },
  { name: 'Tile8' },
  { name: 'Tile9' },
  { name: 'Tile10' },
]

export default function Tiles() {
  return (
    <div>
      <h1>Tiles Example</h1>
      <div className="tiles-container">
        {tiles.map((tile, idx) => (
          <Tile tile={tile} color={colors[idx % colors.length]} key={tile.name} />
        ))}
      </div>
    </div>
  )
}

function Tile({ tile, color, transitionState }) {
  const { history } = useContext(LocationContext)
  const containerRef = useRef(null)

  const handleClick = useCallback(
    () => {
      console.log(containerRef.current)
      history.push('/tiles/detail')
    },
    [containerRef]
  )

  return (
    <div
      key={tile.name}
      style={{ backgroundColor: color }}
      className={`tile ${transitionState}`}
      ref={containerRef}
      onClick={handleClick}
    />
  )
}

export function TileDetail({ color, transitionState }) {
  return (
    <div>
      <h2>Tile with color {color}</h2>
    </div>
  )
}
