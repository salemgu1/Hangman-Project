import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame'
import React,{useState} from 'react'

function App() {
  // const generateLetterStatuses = ()=> {
  //   console.log("asdasdsa");
  //   let letterStatus = {}
  //   for (let i = 65; i < 91; i++) {
  //     letterStatus[String.fromCharCode(i)] = false
  //   }
  //   return letterStatus
  // }

  // const letterStatus
  

  const [letterState,setLetterState] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
    M: false,
    N: false,
    O: false,
    P: false,
    Q: false,
    R: false,
    S: false,
    T: false,
    U: false,
    V: false,
    W: false,
    X: false,
    Y: false,
    Z: false
  })
  const [solution,setSelution] = useState({word:"BYTES",hint:"flase"})
  const [score,setScore] = useState(150)


  const selectLetter = (key) => {
    setLetterState((prevState) => ({
      ...prevState,
      [key]: true
    }));

    updateScore(key)
  };
  const updateScore = (letter) =>{
    const trueChoose = solution.word.includes(letter)
    let newScore=score
    if(trueChoose){
      newScore = newScore +5
    }
    else{
      newScore = newScore -20

    }
    setScore(
      newScore)
  }





  return (
    <div className="App">
      <Score score={score}/>
      <Solution letters={letterState} solution={solution} updateScore={updateScore}/>
      <Letters letters={letterState} action={selectLetter} /> 
      <EndGame solution={solution} score={score} letters = {letterState}/>
    </div>
  );
} 

export default App;
