var QuestionBox = React.createClass({

  render: function() {
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <p className="lead">{this.props.theQuestion}</p>
            
            <p><span className="text-muted">Answer:</span> {this.props.answer}</p>
            <p><span className="text-muted">Distractors:</span> {this.props.distractors}</p>

            <EditQuestion/>

          </div>
        </div>            
      </div>
    );	
  }
});
