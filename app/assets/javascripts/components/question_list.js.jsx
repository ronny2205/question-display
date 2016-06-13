var QuestionList = React.createClass({

  handleEdit: function(questionInfo) {
    this.props.onEditButton({questionId: questionInfo.questionId,
                              theQuestion: questionInfo.theQuestion,
                              answer: questionInfo.answer, 
                              distractors: questionInfo.distractors
                            });
  },

  render: function() {
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
