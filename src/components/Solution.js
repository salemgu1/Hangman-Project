import Letter from "./Letter";

function Solution(props) {
  let word = []

  return(
  Array.from(props.solution.word).map((l) =>
   (props.letters[l]===true) ?
      (<Letter letter={l}/> ):
     (<Letter letter={"_"} />)
  )
  )
}

export default Solution;
