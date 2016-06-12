var RandomQuestion = React.createClass({
 
  setRandQ: function() {
  	return this.props.randomQuesInfo.ans;
  },

  render: function() {
    return (

   	  <div id="randomQuestion" className="modal fade" role="dialog">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		        <h4 className="modal-title">hiii</h4>
		      </div>
		      <div className="modal-body">
		        <p>One fine body&hellip;</p>
		      </div>
		    </div>
		  </div>
	  </div>
    	
    );
  }
});
