function Score(props) {
    if(props.score>=80){
    return (
      <div className="high-score">
        {props.score}
      </div>
    );
  }
  else if(props.score>=50 && props.score<80){
    return (
      <div className="medium-score">
        {props.score}
      </div>
    );
  }
  else if(props.score<50){
    return (
      <div className="low-score">
        {props.score}
      </div>
    );
  }
    // return (
    //   <div>
    //     {props.score}
    //   </div>
    // );
  }
  
  export default Score;
  