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

  handlePaging: function(info) {
    this.retrieveData(info.curPage);
  },

  handleFiltering: function(info) {
  	$.get("/questions?filter=" + info.filterType).success( function( data ) {
	   	  
		     this.setState({data: data,
	  						});
	}.bind(this));

  },

  handleRandomQ: function() {
  	$.get("/questions?rand=yes").success( function( data ) {
  	this.setState({
      						the_question: data.the_question,
      						answer: data.answer,
      						distractors: data.distractors,
      						id: data.id
      					 });
  	}.bind(this));

  },

  handleEditButton: function(questionInfo) {
    //console.log(questionInfo.answer);
    //var theQuestion = questionInfo.theQuestion;
    this.setState({
      						questionToEdit: questionInfo.theQuestion,
      						answerToEdit: questionInfo.answer,
      						distractorsToEdit: questionInfo.distractors,
      						idToEdit: questionInfo.questionId
      					    
      					 });
    //console.log(theQuestion);
  },

  handleEditedQuestion: function(questionInfo) {
    $.ajax({
      dataType: 'json',
      type: 'PUT',
      url: "/questions/" + this.state.idToEdit,
      data: { question: {
      		  the_question: questionInfo.questionToEdit,
      		  answer: questionInfo.answerToEdit,
      		  distractors: questionInfo.distractorsToEdit
      }},

      success: function(data) {
      	  // refreshing the list of questions
  		  this.retrieveData(this.state.curPage);
  	  }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },

  handleAddedQuestion: function(questionInfo) {
    $.ajax({
      dataType: 'json',
      type: 'POST',
      url: "/questions/",
      data: { question: {
      		  the_question: questionInfo.questionToAdd,
      		  answer: questionInfo.answerToAdd,
      		  distractors: questionInfo.distractorsToAdd
      }},

      success: function(data) {
      	  // refreshing the list of questions
  		  this.retrieveData(this.state.curPage);
  	  }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },

  

  render: function() {
    return (
     
      <div className="container">
    	<PageHeader />
    	<ActionTools onRandom={this.handleRandomQ} onFilteringClick={this.handleFiltering}/>
    	<QuestionList onEditButton={this.handleEditButton} data={this.state.data} />   
    	
    	<Pagination onPagingClick={this.handlePaging} numOfPages={this.state.numOfPages} curPage={this.state.curPage} />
    	<RandomQuestion the_question={this.state.the_question} answer={this.state.answer} distractors={this.state.distractors} />
    	<EditModal onEditSubmit={this.handleEditedQuestion} idToEdit={this.state.IdToEdit} questionToEdit={this.state.questionToEdit} answerToEdit={this.state.answerToEdit} distractorsToEdit={this.state.distractorsToEdit}/>
    	<AddModal onAddSubmit={this.handleAddedQuestion} />
    	 
      </div>
      
    );
  }
});
