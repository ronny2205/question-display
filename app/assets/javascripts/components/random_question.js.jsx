var RandomQuestion = React.createClass({

  // getInitialState: function() {
  //   return { the_question: this.props.randomQuesInfo.the_question,
		//      answer: this.props.randomQuesInfo.answer,
		//      distractors: this.props.randomQuesInfo.distractors,
		//      id: this.props.randomQuesInfo.id
		      				  
  //   };
  //  },
 
  // setRandQ: function() {
  // 	return this.props.randomQuesInfo.answer;
  // },

  render: function() {
  	//var name = this.props.randomQuesInfo
    return (
      
   	  <div id="randomQuestion" className="modal fade" role="dialog">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		        <h4 className="modal-title" >Here is the random question...</h4>
		      </div>
		      <div className="modal-body">
		        <p>{this.props.the_question}</p>
		        <p>{this.props.answer}</p>
		        <p>{this.props.distractors}</p>
		      </div>
		    </div>
		  </div>
	  </div>


    	
    );
  }
});
