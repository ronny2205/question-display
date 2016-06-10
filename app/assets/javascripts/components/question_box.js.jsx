var QuestionBox = React.createClass({

  render: function() {
    return (
      <div className="">
        
            <p>{this.props.the_question}</p>
            <p>{this.props.answer}</p>
            // <p>{this.props.distractors}</p>
          
      </div>
    );	
  }
});
