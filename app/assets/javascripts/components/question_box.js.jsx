var QuestionBox = React.createClass({

  render: function() {
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>Question: {this.props.theQuestion}</p>
            <p>Answer: {this.props.answer}</p>
            <p>Distractors: {this.props.distractors}</p>
          </div>
        </div>            
      </div>
    );	
  }
});
