import React from 'react'

// const Square = (props) => {
//   return (
//     <div className="square"></div>
//   )
// }
// export default Square



const Squares = ({square, index, handleGamePlay}) => {

  const handleClick = () => {
     handleGamePlay(index)
}
  return (
    <>
      <div className="squares" onClick={handleClick}>{square} </div>
    </>
  )
}
export default Squares