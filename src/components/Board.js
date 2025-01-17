import React from 'react'
import Square from './Square'

const style = {
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  width: '500px',
  height: '500px',
  border: '5px solid darkpurple',
  borderRadius: '10px'
}

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
)

export default Board