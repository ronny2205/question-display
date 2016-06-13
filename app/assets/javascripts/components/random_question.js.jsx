var RandomQuestion = React.createClass({

  render: function() {
    return (
   	  <div id="randomQuestion" className="modal fade" role="dialog">
		<div className="modal-dialog" role="document">
		  <div className="modal-content">
		    <div className="modal-header">
		      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		        <span aria-hidden="true">&times;</span>
		      </button>
		      <h4 className="modal-title" >Here is a random question...</h4>
		    </div>
		    <div className="modal-body">
		      <p className="lead">{this.props.the_question}</p>
		      <p><span className="text-muted">Answer: </span>{this.props.answer}</p>
		      <p><span className="text-muted">Distractors: </span>{this.props.distractors}</p>
		    </div>
		  </div>
		</div>
	  </div>
    );
  }
});
