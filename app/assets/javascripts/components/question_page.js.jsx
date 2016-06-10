// The top component
var QuestionPage = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
	var component = this;
	   $.get("/questions").success( function( data ) {
	      component.setState({data: data});
	});
  },

  

  render: function() {
    return (
      <div className="container">
        
    	  <h3>Questions</h3>
    	
    	  <QuestionList data={this.state.data} />
    	  
    	
      </div>

    );
  }
});
