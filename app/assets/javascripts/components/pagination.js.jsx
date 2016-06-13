var Pagination = React.createClass({

  getInitialState: function() {
    return {pageNum: 1};
  },

  // Updating the state of pageNum
  componentWillReceiveProps: function(nextProps) {
    this.setState ({pageNum: nextProps.curPage});
  },

  handlePagingClick: function(type) {
   
   if (type == "next") {
     var newPage = this.props.curPage + 1;
   } else if (type == "prev") {
     var newPage = this.props.curPage - 1;
   } else if (type == "last") {
     var newPage = this.props.numOfPages;
   } else if (type == "first") {
     var newPage = 1;
   }

   this.setState ({pageNum: newPage});
  //if (newPage == 1) {
  //  $('prevButton').prop('disabled', true);
   // $('prevButton').addClass('disabled');

  

  

    this.props.onPagingClick({curPage: newPage});
    //this.setState({page: this.props.pagingInfo.curPage});

  },

  dynamicClassPrev: function(){
    if (this.state.pageNum == 1) {
     return "btn disabled" 
    }
    else {
      return "btn active"
    }
  },

  dynamicClassNext: function(){
    if (this.state.pageNum == this.props.numOfPages) {
     return "btn disabled" 
    }
    else {
      return "btn active"
    }
  },

  render: function() {
  	
    return (

    	<div>
    	    <nav>
			  <ul className="pagination pull-right">
			    <li>
			      <a href="javascript:;" onClick={this.handlePagingClick.bind(this, 'first')} className={this.dynamicClassPrev()} aria-label="First">
			        <span aria-hidden="true">&laquo;</span>
			      </a>
			    </li>
			    <li>
			      <a href="javascript:;" onClick={this.handlePagingClick.bind(this, 'prev')} className={this.dynamicClassPrev()} aria-label="Previous">
			        <span aria-hidden="true">&lsaquo;</span>
			      </a>
			    </li>

			    <li className="active"><a>{this.props.curPage}</a></li>
			    
			    <li>
			      <a href="javascript:;" onClick={this.handlePagingClick.bind(this, 'next')} className={this.dynamicClassNext()} aria-label="Next">
			        <span aria-hidden="true">&rsaquo;</span>
			      </a>
			    </li>
			    <li>
			      <a href="javascript:;" onClick={this.handlePagingClick.bind(this, 'last')} className={this.dynamicClassNext()} aria-label="Last">
			        <span aria-hidden="true">&raquo;</span>
			      </a>
			    </li>
			  </ul>
			</nav>
    	
    	</div>


    );
  }
});
