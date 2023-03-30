function Letter(props) {

  if (props.selected===true) {
    return (
      <span className="selected">{props.letter}</span>
    );
  }else{
    return (
      <span onClick={()=>props.click(props.letter)}>{props.letter}</span>
    );
  }
  }
  
  export default Letter;
  