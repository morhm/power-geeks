import React, {PropTypes, Component} from 'react';

export default class MainNav extends Component {
  render() {
  	const styles = {
  		componentStyle: {
  			display: "flex",
  			justifyContent: "flex-end",
  			alignItems: "center",
  			backgroundColor: "white",
  			minWidth: "600px",
  			padding: "0 30px"
  		},
  		aStyle: {
  			textDecoration: "none",
  			color: "#616161",
  			padding: "10px"
  		},
  		titleStyle: {
  			color: "black",
  			marginRight: "auto",
  			padding: "10px"
  		}
  	}

    return (
    	<div className="container">
		  <nav className="navbar navbar-default" style={{backgroundColor: "white", border: "none"}}>
		    <div className="container-fluid">
		      <a className="navbar-brand" href="#"><p style={{fontSize: "xx-large"}}>Power Geeks</p></a>
		      <div className="navbar" className="navbar-collapse collapse">
		        <ul className="nav navbar-nav navbar-right">
		          <li className="active"><a href="#">Home</a></li>
		          <li><a href="#">Read the Comic</a></li>
		          <li><a href="#">About</a></li>
		          <li><a href="#">Meet the Power Geeks</a></li>
		        </ul>
		      </div>
		    </div>
		  </nav>
		</div>
    );
  }
}

MainNav.defaultProps = {
  text: 'My brand new component!'
};

MainNav.propTypes = {
  text: PropTypes.string
};
