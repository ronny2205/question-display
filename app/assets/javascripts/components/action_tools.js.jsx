var ActionTools = React.createClass({

  handleRandomQuestion: function() { 
    this.props.onRandom();
  },

  handleFilteringClick: function(type) { 
    this.props.onFilteringClick({filterType: type});
  },

  render: function() {
    return (
    	<div className="row toolbar-row">
    	  <div className="btn-toolbar col-sm-6"> 
		    <button type="button" data-toggle="modal" data-target="#addModal" className="btn btn-primary">Add question</button>
			<button onClick={this.handleRandomQuestion} type="button" data-toggle="modal" data-target="#randomQuestion" className="btn btn-primary">
			  Show random question
			</button>
			  
			<div className="btn-group" role="group">
			  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    {'Filters  '}
			    <span className="caret"></span>
			  </button>
			  <ul className="dropdown-menu">
			    <li><a href="javascript:;" onClick={this.handleFilteringClick.bind(this, 'positive')}>Positive answers</a></li>
			    <li><a href="javascript:;" onClick={this.handleFilteringClick.bind(this, 'negative')}>Negative answers</a></li>
			    <li><a href="javascript:;" onClick={this.handleFilteringClick.bind(this, 'all')}>All questions</a></li>
			  </ul>
			</div>
    	  </div> 
    	</div>  
    );
  }
});
