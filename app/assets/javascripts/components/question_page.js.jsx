// The top component
var QuestionPage = React.createClass({

  getInitialState: function() {
    return {data: [], filterType: "all"};
  },	

  retrieveData: function(page_num, filterType) {
    var component = this;
	$.get("/questions?page=" + page_num + "&filter=" + filterType).success( function( data ) {
	  // Separate the num of pages from the questions array
	  var numOfPages = data.pop().number_of_pages;
	  component.setState({data: data,
		      			  numOfPages: numOfPages,
		      			  curPage: page_num,
		      			  filterType: filterType  
	      				 });
	});
  },

  componentDidMount: function() {
  	this.retrieveData(1, this.state.filterType);
  },

  handlePaging: function(info) {
    this.retrieveData(info.curPage, this.state.filterType);
  },

  handleFiltering: function(info) {
  	// Get the first page of the filtered questions
  	$.get("/questions?filter=" + info.filterType + "&page=1").success( function( data ) {
        // Separate the num of pages from the questions array
	   	var numOfPages = data.pop().number_of_pages;;
		this.setState({data: data, 
					  filterType: info.filterType,
					  numOfPages: numOfPages,
					  curPage: 1});
	}.bind(this));
  },

  handleRandomQ: function() {
  	$.get("/questions?rand=yes").success( function( data ) {
  	    this.setState({the_question: data.the_question,
      				   answer: data.answer,
      				   distractors: data.distractors,
      				   id: data.id
      				  });
  	}.bind(this));
  },

  handleEditButton: function(questionInfo) {
    this.setState({questionToEdit: questionInfo.theQuestion,
      			   answerToEdit: questionInfo.answer,
      			   distractorsToEdit: questionInfo.distractors,
      			   idToEdit: questionInfo.questionId  
      			  });
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
  		  this.retrieveData(this.state.curPage, this.state.filterType);
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
  		  this.retrieveData(this.state.curPage, this.state.filterType);
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
