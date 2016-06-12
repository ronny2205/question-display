// The top component
var QuestionPage = React.createClass({

  retrieveData: function(page_num) {
    var component = this;
	$.get("/questions?page=" + page_num).success( function( data ) {
	   	  // Separate the num of pages from the questions array
	   	  var numOfPages = data.pop();
	      // component.setState({data: data,
	      // 					  pagingInfo: {
		     //  					  numOfPages: numOfPages,
		     //  					  curPage: page_num
		     //  				  },
		     component.setState({data: data,
	      					  
		      					  numOfPages: numOfPages,
		      					  curPage: page_num
		      				  
		      				  // randomQ: {
		      				  // 	the_question: "",
		      				  // 	answer: "",
		      				  // 	distractors: "",
		      				  // 	id: ""
		      				  // }	  
	      					});
	});
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
  	this.retrieveData(1);
	//var component = this;
	   
	   //$.get("/questions?page=" + x).success( function( data ) {
	   	  // Separate the num of pages from the questions array
	   	 // var numOfPages = data.pop();
	     // component.setState({data: data,
	      					//  numOfPages: numOfPages
	      		//			});
	//});
  },

  handlePaging: function(page_num) {
    this.retrieveData(page_num.curPage);
  },

  handleRandomQ: function() {
  	$.get("/questions?rand=yes").success( function( data ) {
      //console.log(data);
      //var randomQuesInfo = data;
      // window.x = data.answer;
      // console.log(x);
      // this.setState({randomQ: {
      // 						the_question: data.the_question,
      // 						answer: data.answer,
      // 						distractors: data.distractors,
      // 						id: data.id
      // 					    }
      // 					 });
  	this.setState({
      						the_question: data.the_question,
      						answer: data.answer,
      						distractors: data.distractors,
      						id: data.id
      					    
      					 });
      					    
      					 

  	}.bind(this));

  },

  render: function() {
    return (
     
      <div className="container">
    	<PageHeader />
    	<ActionTools onRandom={this.handleRandomQ} />
    	<QuestionList data={this.state.data} />   
    	
    	<Pagination onPagingClick={this.handlePaging} numOfPages={this.state.numOfPages} curPage={this.state.curPage}/>
    	<RandomQuestion the_question={this.state.the_question} answer={this.state.answer} distractors={this.state.distractors}/>
    	
    	 
      </div>
      
    );
  }
});
