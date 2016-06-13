var AddModal = React.createClass({

  getInitialState: function() {
    return {questionToAdd: "",
    		    answerToAdd: "",	
    		    distractorsToAdd: ""
    		   };
  },

  handleQChange: function(e) {
    this.setState({questionToAdd: e.target.value});
  },

  handleAChange: function(e) {
    this.setState({answerToAdd: e.target.value});
  },

  handleDChange: function(e) {
    this.setState({distractorsToAdd: e.target.value});
  },

  handleClose: function() {
    this.setState({questionToAdd: "",
                   answerToAdd: "",
                   distractorsToAdd: ""
                  });
  },

  handleSubmitAdd: function(e) {
    e.preventDefault();
    var questionToAdd = this.state.questionToAdd.trim();
    var answerToAdd = this.state.answerToAdd.trim();
    var distractorsToAdd = this.state.distractorsToAdd.trim();
    if (!questionToAdd || !answerToAdd || !distractorsToAdd) {
      return;
    }
    this.props.onAddSubmit({questionToAdd: questionToAdd, 
    				                answerToAdd: answerToAdd,
    				                distractorsToAdd: distractorsToAdd 
    				               });
    
    // closing the modal after the user submitted the info
    $('#addModal').modal('hide');
    this.setState({questionToAdd: '', answerToAdd: '', distractorsToAdd: ''});
  },

  render: function() {
    return (

    	<div className="modal fade" id="addModal">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button onClick={this.handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		        <h4 className="modal-title">Add a question</h4>
		      </div>
		      <div className="modal-body">
		        <form>
		          <div className="form-group">
		            <label htmlFor="question-content" className="form-control-label">Question:</label>
		            <textarea className="form-control" id="question-content" value={this.state.questionToAdd} onChange={this.handleQChange}></textarea>
		          </div>
		          <div className="form-group">
		            <label htmlFor="answer-content" className="form-control-label">Answer:</label>
		            <input type="text" className="form-control" id="answer-content" value={this.state.answerToAdd} onChange={this.handleAChange}></input>
		          </div>
		          <div className="form-group">
		            <label htmlFor="distractors-content" className="form-control-label">Distractors:</label>
		            <input type="text" className="form-control" id="distractors-content" value={this.state.distractorsToAdd} onChange={this.handleDChange}></input>
		          </div>
		        </form>
		      </div>
		      <div className="modal-footer">
		        <button onClick={this.handleClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button onClick={this.handleSubmitAdd} type="button" className="btn btn-primary">Save changes</button>
		      </div>
		    </div>
		  </div>
		</div>
    );
  }
});
