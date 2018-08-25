import React from 'react'

// const Board = ({ match }) => {
//   console.log('making a board')
//   return (
//     <div>match.params.topicId</div>
//   )
// }

const Board = ({ match }) => 
console.log('hello')

(
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Board