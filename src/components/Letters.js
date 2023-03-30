import Letter from './Letter';


function Letters(props) {


    return (
      <div>
       <em>your ideal mood when coding.</em><br></br>
       <em>avillabel letters</em><br></br>
       {Object.keys(props.letters).map(l => <Letter letter={l} selected = {props.letters[l]} click={props.action} />)}
       </div>
    );
  }
  
  export default Letters;
  