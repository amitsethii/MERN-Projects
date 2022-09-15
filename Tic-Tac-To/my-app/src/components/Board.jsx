import React,{useState} from 'react'
import Square from './Square';
import "../App.css"

function Board() {

const [state,setState] = useState(Array(9).fill(null));
const [isXturn, setIsxturn] =  useState(true);

function calculateWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
      return state[a];
    }
  }
  return false;
}

const isWinner = calculateWinner();

console.log("state",state);

function handleClick(index){
  if(state[index] !== null){
    return;
  }
  const copyState = [...state];
  copyState[index] = isXturn ? "X" : "O";
  setState(copyState)
  setIsxturn(!isXturn);
};

function playAgain(){
  
    setState(Array(9).fill(null));
}


  return (
    <div className='board-container'>
    { isWinner ? <>{isWinner} Won the game  <br /> <br/> <button  onClick={playAgain}>Play again</button></> : <>

    <h4> Playes {isXturn ? 'X' : 'O' }</h4>
    <div className='board-row'>
      <Square aClick={ () => handleClick(0) } value={state[0]} />
      <Square aClick={ () => handleClick(1) } value={state[1]} />
      <Square aClick={ () => handleClick(2) } value={state[2]} />
    </div>
    <div className='board-row'>
    <Square aClick={ () => handleClick(3) } value={state[3]} />
    <Square aClick={ () => handleClick(4) } value={state[4]} />
    <Square aClick={ () => handleClick(5) } value={state[5]} />
    </div>
    <div className='board-row'>
    <Square aClick={ () => handleClick(6) } value={state[6]} />
    <Square aClick={ () => handleClick(7) } value={state[7]} />
    <Square aClick={ () => handleClick(8) } value={state[8]} />
    </div>

    </>
    }
    </div>
    
  );
};

export default Board