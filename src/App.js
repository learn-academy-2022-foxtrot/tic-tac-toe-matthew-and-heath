import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [playerOne, setPlayerOne] = useState("❌")
  const [playerTwo, setPlayerTwo]  = useState("🅾️")

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    if 
  }



  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    if(clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard)
    } else if(clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
    } else {
    updateBoard[clickedSquare] = "🌲"
    setBoard(updateBoard)
    }
  }




  // const Players = () => {
  //     cpu:  {
  //     sym: "🅾️"
  //     name: "CPU"
  //   }

  //     HUM: {
  //     sym: "❌"
  //     name: "Human"
  //   }
    

  // }
  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board-game">
        {squares.map((square, index) => {
        return (
          <Square 
           square={square} 
           index = {index}
          // handleGamePlay= {handleGamePlay}
          />
        )
      })}
      </div>
      {/* //<button onClick={handleReset}>Resart Game</button> */}
    </>
  )


}

export default App