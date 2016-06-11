// The top component
var QuestionPage = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
	var component = this;
	   $.get("/questions?page=1").success( function( data ) {
	   	  // Separate the num of pages from the questions array
	   	  var numOfPages = data.pop();
	      component.setState({data: data,
	      					  numOfPages: numOfPages
	      					});
	});
  },

  

  render: function() {
    return (
     
      <div className="container">
    	<PageHeader />
    	<ActionTools />
    	<QuestionList data={this.state.data} />   
    	<Pagination data={this.state.numOfPages} />
      </div>
      
    );
  }
});
