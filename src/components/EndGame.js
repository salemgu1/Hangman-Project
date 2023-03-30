import Letter from "./Letter";

function EndGame(props) {
  const letterValues = Object.values(props.letters);
  const checkLetters = () => {
    for (const letter of letterValues) {
      if (letter == false) {
        return false;
      }
    }
    return true;
  };
  const checkSolution = () => {
    for (
      let index = 0;
      index < Array.from(props.solution.word).length;
      index++
    ) {
      if (props.letters[Array.from(props.solution.word)[index]] == false) {
        return false;
      }
    }
    return true;
  };
  if (props.score <= 0 || checkLetters()) {
    return (
      <div>
        gave over!
        <h1>the secret key is {props.solution}</h1>
      </div>
    );
  }
  if (checkSolution() === true) {
    return (
      <div className="congrats">
        <h1>Congratulations!</h1>
        <p>{props.message}</p>
        <div className="balloons">
          <span className="balloon balloon-1"></span>
          <span className="balloon balloon-2"></span>
          <span className="balloon balloon-3"></span>
          <span className="balloon balloon-4"></span>
          <span className="balloon balloon-5"></span>
          <span className="balloon balloon-6"></span>
          <span className="balloon balloon-7"></span>
          <span className="balloon balloon-8"></span>
          <span className="balloon balloon-9"></span>
          <span className="balloon balloon-10"></span>
        </div>
        <div className="confetti"></div>
      </div>
    );
  }
}

export default EndGame;
