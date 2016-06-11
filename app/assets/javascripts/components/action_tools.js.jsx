var ActionTools = React.createClass({

  render: function() {
    return (
    	<div className="btn-toolbar pull-right">

          
			  <button type="button" className="btn btn-primary">Add a question</button>
			  <button type="button" className="btn btn-primary">Show a random question</button>

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


    );
  }
});
