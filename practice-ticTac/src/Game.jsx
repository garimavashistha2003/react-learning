import { use, useState } from "react";


//The Square component received that function as its onSquareClick prop from the Board. 

function Square({value , onSquareClick}) {
        return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function board(){

    const [xIsNext , setXisNext] = useState(true);

    const [square, setSquare] = useState(Array(9).fill(null));
    //create an array with 9 elements and set each of them to null
    
    
    function handleClick(i){

        if(square[i] || calculateWinner(square)){
            return;
        }
        const nextSquares = square.slice();

        if(xIsNext){
            nextSquares[i] = 'X';
        }else{
            nextSquares[i] = 'O';
        }

        setSquare(nextSquares);
        setXisNext(!xIsNext); 

    }

    function calculateWinner(square){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i = 0 ; i< lines.length; i++){
            const [a,b,c] = lines[i];
            if(square[a] && square[a] == square[b] && square[a] == square[c] ){
                return square[a]
            }

        }
        return null;
    
    }

    const winner = calculateWinner(square);
    let status;
    if(winner) {
        status = "Winner :" + winner;
    }else{
        status = "Next player:" + (xIsNext ? 'X' : 'O');
    }

    function restartGame() {
        setSquare(Array(9).fill(null)); // clear all squares
        setXisNext(true); // reset to player X
      }



    return(


        <>
        <div className="status">{status}</div>
        <div className="board-row">
            {/* With arrow function → it runs only when clicked  */}
            <Square value = {square[0]} onSquareClick={()=> handleClick(0)}/>
            <Square value = {square[1]} onSquareClick={()=> handleClick(1)}/>
            <Square value = {square[2]} onSquareClick={()=> handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value = {square[3]} onSquareClick={()=> handleClick(3)}/>
            <Square value = {square[4]} onSquareClick={()=> handleClick(4)}/>
            <Square value = {square[5]} onSquareClick={()=> handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value = {square[6]} onSquareClick={()=> handleClick(6)}/>
            <Square value = {square[7]} onSquareClick={()=> handleClick(7)}/>
            <Square value = {square[8]} onSquareClick={()=> handleClick(8)}/>
        </div>

      <button className="restart" onClick={restartGame}>
        Restart Game
      </button>
        
        </>
    );
}

