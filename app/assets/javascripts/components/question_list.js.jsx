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
  	var QuestionNodes = this.props.data.map(function(QuestionInfo) {
      return (
        <QuestionBox theQuestion={questionInfo.the_question} answer={questionInfo.answer}
          key={questionInfo.id}>
         </QuestionBox>
      );
    });

    return (

    	<div className="">
    	  {questionNodes}
    	</div>

    );
  }
});
