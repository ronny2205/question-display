var QuestionBox = React.createClass({

  handleEditQuestion: function() {
    this.props.onEditQ({questionId: this.props.questionId,
                        theQuestion: this.props.theQuestion,
                        answer: this.props.answer, 
                        distractors: this.props.distractors
                      });
  },

  render: function() {
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <p className="lead">{this.props.theQuestion}</p>
            <p><span className="text-muted">Answer:</span> {this.props.answer}</p>
            <p><span className="text-muted">Distractors:</span> {this.props.distractors}</p>
            <button onClick={this.handleEditQuestion} type="button" data-toggle="modal" data-target="#editModal" className="btn btn-primary pull-right">
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </div>
        </div>            
      </div>
    );	
  }
});
