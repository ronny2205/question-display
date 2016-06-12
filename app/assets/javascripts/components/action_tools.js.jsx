var ActionTools = React.createClass({

  handleRandomQuestion: function() { 
    this.props.onRandom();
  },

  render: function() {
    return (
    	<div className="row toolbar-row">

    	  <div className="btn-toolbar col-sm-6">

          
			  <button type="button" className="btn btn-primary">Add question</button>
			  <button onClick={this.handleRandomQuestion} type="button" data-toggle="modal" data-target="#randomQuestion" className="btn btn-primary">
			    Show random question
			  </button>
			  

			  <div className="btn-group" role="group">
			    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			      Filters
			      <span className="caret"></span>
			    </button>
			    <ul className="dropdown-menu">
			      <li><a href="#">Positive answers</a></li>
			      <li><a href="#">Negative answers</a></li>
			      <li><a href="#">No distractors</a></li>
			    </ul>
			  </div>
			
    	  </div>
    	  
    	</div>  


    );
  }
});
