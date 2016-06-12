var Pagination = React.createClass({
   
  // getInitialState: function() {
  //   return {page: 1};
  // },
  

  handlePagingClick: function(type) {
   //e.preventDefault();
   // console.log(this.state.page);
   //console.log(type);
   
   if (type == "next") {
     var newPage = this.props.pagingInfo.curPage + 1;
   } else if (type == "prev") {
     var newPage = this.props.pagingInfo.curPage - 1;
   } else if (type == "last") {
     var newPage = this.props.pagingInfo.numOfPages;
   } else if (type == "first") {
     var newPage = 1;
   }


    this.props.onPagingClick({curPage: newPage});
    //this.setState({page: this.props.pagingInfo.curPage});

  },

  render: function() {
  	
    return (

    	<div>
    	    <nav>
			  <ul className="pagination pull-right">
			    <li>
			      <a href="javascript:;" onClick={this.handlePagingClick.bind(this, 'first')} aria-label="First">
			        <span aria-hidden="true">&laquo;</span>
			      </a>
			    </li>
			    <li>
			      <a href="javascript:;" onClick={this.handlePagingClick.bind(this, 'prev')} aria-label="Previous">
			        <span aria-hidden="true">&lsaquo;</span>
			      </a>
			    </li>

			    <li className="active"><a>88</a></li>
			    
			    <li>
			      <a href="javascript:;" onClick={this.handlePagingClick.bind(this, 'next')} aria-label="Next">
			        <span aria-hidden="true">&rsaquo;</span>
			      </a>
			    </li>
			    <li>
			      <a href="javascript:;" onClick={this.handlePagingClick.bind(this, 'last')} aria-label="Last">
			        <span aria-hidden="true">&raquo;</span>
			      </a>
			    </li>
			  </ul>
			</nav>
    	
    	</div>


    );
  }
});
