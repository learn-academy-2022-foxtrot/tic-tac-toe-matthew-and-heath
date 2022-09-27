import React, { useState } from 'react'
import Squares from './components/Squares'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  // const [clickedSquare, setClickedSqaure] = useState
  const [currentPlayer, setCurrentPlayer] = useState("❌")






  const handleGamePlay = (clickedSquare) => {
    let updateSquares = [...squares]

    if (clickedSquare === null) {

      updateSquares[clickedSquare] = "❌"

    } else {
      updateSquares[clickedSquare] = "🅾️"
    }


  }



  //   if(clicked)


  // winning conditions
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ]


  // const handleGamePlay = (clickedSquare) => {
  //   let updateBoard = [...board]
  //   if(clickedSquare === treasureLocation) {
  //     updateBoard[clickedSquare] = "💎"
  //     setBoard(updateBoard)
  //   } else if(clickedSquare === bombLocation) {
  //     updateBoard[clickedSquare] = "💣"
  //     setBoard(updateBoard)
  //   } else {
  //   updateBoard[clickedSquare] = "🌲"
  //   setBoard(updateBoard)
  //   }
  // }




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
        {squares.map((squares, index) => {
          return (
            <Squares
              squares={squares}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          )
        })}
      </div>
      {/* //<button onClick={handleReset}>Resart Game</button> */}
    </>
  )


}

export default App