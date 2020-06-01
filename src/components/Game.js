import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const styles = {
  margin: '20px auto',
  width: '200px'
}

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(history[stepNumber])

  const handleClick = i => {
    const turnHistory = history.slice(0, stepNumber + 1)
    const current = turnHistory[stepNumber]
    const squares = [...current]

    if (winner || squares[i]) return

    squares[i] = xIsNext ? 'X' : 'O'
    setHistory([...turnHistory, squares])
    setStepNumber(turnHistory.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const renderTurns = () =>
    history.map((_step, turn) => {
      const destination = turn ? `Go to move #${turn}` : 'Go to start'

      return (
        <li key={turn}>
          <button onClick={() => jumpTo(turn)}>{destination}</button>
        </li>
      )
    })


  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        {winner ? `Winner is ${winner}` : `Next Player: ${(xIsNext ? 'X' : 'O')}`}
        {renderTurns()}
      </div>
    </>
  )
}

export default Game