// The top component
var QuestionPage = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
	$(function() {
	  	var questionArray = []	
		$.get("/questions").success( function( data ) {
		   $.each(data, function(index, question) {
		      questionArray.push(question);
		   });
		});
	 });

    this.setState({data: questionArray});
  },

  

  render: function() {
    return (
      <div className="">
        
    	  <h3>Questions</h3>
    	
    	  <QuestionList data={this.state.data} />
    	  
    	
      </div>

    );
  }
});
