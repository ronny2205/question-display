var Pagination = React.createClass({

  render: function() {
    return (

    	<div>
    	    <nav>
			  <ul className="pagination pull-right">
			    <li>
			      <a href="#" aria-label="First">
			        <span aria-hidden="true">&laquo;</span>
			      </a>
			    </li>
			    <li>
			      <a href="#" aria-label="Previous">
			        <span aria-hidden="true">&lsaquo;</span>
			      </a>
			    </li>

			    <li className="active"><a href="#">{this.props.data}</a></li>
			    
			    <li>
			      <a href="#" aria-label="Next">
			        <span aria-hidden="true">&rsaquo;</span>
			      </a>
			    </li>
			    <li>
			      <a href="#" aria-label="Last">
			        <span aria-hidden="true">&raquo;</span>
			      </a>
			    </li>
			  </ul>
			</nav>
    	
    	</div>


    );
  }
});
