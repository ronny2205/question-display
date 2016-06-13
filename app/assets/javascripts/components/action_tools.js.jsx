var ActionTools = React.createClass({

  handleRandomQuestion: function() { 
    this.props.onRandom();
  },

  handleFilteringClick: function(type) {
   
   // if (type == "positive") {
   //   var newPage = this.props.curPage + 1;
   // } else if (type == "negative") {
   //   var newPage = this.props.curPage - 1;
   // } else if (type == "all") {
   //   var newPage = this.props.numOfPages;
   // } 

  //  this.setState ({pageNum: newPage});
  // //if (newPage == 1) {
  // //  $('prevButton').prop('disabled', true);
  //  // $('prevButton').addClass('disabled');

  //console.log(type);

   
    
    this.props.onFilteringClick({filterType: type});
    //this.setState({page: this.props.pagingInfo.curPage});

  },

  render: function() {
    return (
    	<div className="row toolbar-row">

    	  <div className="btn-toolbar col-sm-6">

               
			  <button type="button" data-toggle="modal" data-target="#addModal" className="btn btn-primary">Add question</button>
			  
			  
			  <button onClick={this.handleRandomQuestion} type="button" data-toggle="modal" data-target="#randomQuestion" className="btn btn-primary">
			    Show random question
			  </button>
			  
			  
			  <div className="btn-group" role="group">
			    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			      Filters
			      <span className="caret"></span>
			    </button>
			    <ul className="dropdown-menu">
			      <li><a href="javascript:;" onClick={this.handleFilteringClick.bind(this, 'positive')}>Positive answers</a></li>
			      <li><a href="javascript:;" onClick={this.handleFilteringClick.bind(this, 'negative')}>Negative answers</a></li>
			      <li><a href="javascript:;" onClick={this.handleFilteringClick.bind(this, 'all')}>All questions</a></li>
			    </ul>
			  </div>
			
    	  </div>
    	  
    	</div>  


    );
  }
});
