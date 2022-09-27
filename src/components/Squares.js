import React from 'react'

// const Square = (props) => {
//   return (
//     <div className="square"></div>
//   )
// }
// export default Square



const Squares = ({squares, index, handleGamePlay}) => {

  const handleClick = () => {
     handleGamePlay(index)
}
  return (
    <>
      <div className="squares" onClick={handleClick}>{squares} </div>
    </>
  )
}
export default Squares