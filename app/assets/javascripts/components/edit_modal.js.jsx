var EditModal = React.createClass({

  getInitialState: function() {
    return {questionToEdit: "",
    		    answerToEdit: "",
    		    distractorsToEdit: ""
    		   };
  },

  handleClose: function() {
    this.setState({questionToEdit: "",
                   answerToEdit: "",
                   distractorsToEdit: ""
                  });
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({questionToEdit: nextProps.questionToEdit,
                   answerToEdit: nextProps.answerToEdit,
                   distractorsToEdit: nextProps.distractorsToEdit
                  });
  },

  handleQChange: function(e) {
    this.setState({questionToEdit: e.target.value});
  },

  handleAChange: function(e) {
    this.setState({answerToEdit: e.target.value});
  },

  handleDChange: function(e) {
    this.setState({distractorsToEdit: e.target.value});
  },

  handleSubmitEdit: function(e) {
    e.preventDefault();
    var questionToEdit = this.state.questionToEdit.trim();
    var answerToEdit = this.state.answerToEdit.trim();
    var distractorsToEdit = this.state.distractorsToEdit.trim();
    if (!questionToEdit || !answerToEdit || !distractorsToEdit) {
      return;
    }
    this.props.onEditSubmit({questionToEdit: questionToEdit, 
    				                 answerToEdit: answerToEdit,
    				                 distractorsToEdit: distractorsToEdit 
    				                });
    
    // closing the modal after the user submitted the info
    $('#editModal').modal('hide');
    this.setState({questionToEdit: '', answerToEdit: '', distractorsToEdit: ''});
  },

  render: function() {
    return (

    	<div className="modal fade" id="editModal">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		        <h4 className="modal-title">Edit the question</h4>
		      </div>
		      <div className="modal-body">
		        <form>  
		          <div className="form-group">
		            <label htmlFor="question-content" className="form-control-label">Question:</label>
		            <textarea className="form-control" id="question-content" value={this.state.questionToEdit} onChange={this.handleQChange}></textarea>
		          </div>
		          <div className="form-group">
		            <label htmlFor="answer-content" className="form-control-label">Answer:</label>
		            <input type="text" className="form-control" id="answer-content" value={this.state.answerToEdit} onChange={this.handleAChange}></input>
		          </div>
		          <div className="form-group">
		            <label htmlFor="distractors-content" className="form-control-label">Distractors:</label>
		            <input type="text" className="form-control" id="distractors-content" value={this.state.distractorsToEdit} onChange={this.handleDChange}></input>
		          </div>
		        </form>
		      </div>
		      <div className="modal-footer">
		        <button onClick={this.handleClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button onClick={this.handleSubmitEdit} type="button" className="btn btn-primary">Save changes</button>
		      </div>
		    </div>
		  </div>
		</div>
    );
  }
});
