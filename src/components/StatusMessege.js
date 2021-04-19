import React from 'react'

const StatusMessege = ({ winner, current }) => {

    const noMovesLeft = current.board.every(el => el !== null);

    return <h2>{winner && `Winner is ${winner}`}
    {!winner && !noMovesLeft &&`Next player is ${current.isNext ? "X" : "O"}`}
    {!winner && noMovesLeft && 'X and O are tied'}</h2>
}

export default StatusMessege
