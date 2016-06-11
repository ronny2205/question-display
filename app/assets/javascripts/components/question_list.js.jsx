var QuestionList = React.createClass({

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
        <QuestionBox theQuestion={questionInfo.the_question} answer={questionInfo.answer}
          distractors={questionInfo.distractors} key={questionInfo.id}>
         </QuestionBox>
      );
    });

    return (
     
    	<div className="row clr">
    	  {questionNodes}
    	</div>

    );
  }
});
