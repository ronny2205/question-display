var QuestionList = React.createClass({

  handleEdit: function(questionInfo) {
    //console.log(questionInfo.theQuestion);
    this.props.onEditButton({questionId: questionInfo.questionId,
                              theQuestion: questionInfo.theQuestion,
                              answer: questionInfo.answer, 
                              distractors: questionInfo.distractors
                            });
  },

  render: function() {

  	
  	// Pulling all the data from the api with an ajax get request
  // 	$(function() {
  // 	   var questionArray = []	
	 //   $.get("/questions").success( function( data ) {
	 //      $.each(data, function(index, question) {
	 //        //console.log(question);
	 //        questionArray.push(question);
	 //       });
	 //   });
 	// });

  	//var questionNodes = questionArray.map(function(questionInfo) {
  	var questionNodes = this.props.data.map(function(questionInfo) {
      return (
        <QuestionBox onEditQ={this.handleEdit} theQuestion={questionInfo.the_question} answer={questionInfo.answer}
          distractors={questionInfo.distractors} key={questionInfo.id} questionId={questionInfo.id} />
      );
    }, this);

    return (
     
    	<div className="row clr">
    	  {questionNodes}
    	</div>

    );
  }
});
