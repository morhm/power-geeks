import React, {PropTypes, Component} from 'react';

export default class Hero extends Component {
  render() {
  	const styles = {
  		heroComponentStyle: {
			padding: 20,
			backgroundColor: "white"
  		},
  		imgStyle: {
		  	padding: 20,
		  	minWidth: "200px",
		  	maxWidth: "320px"
  		},
  		heroJumboStyle: {
  			padding: 20,
			color: "black",
			backgroundColor: "white"
  		}
  	}
    return (
      <div className="container">
	      <div className="row" style={styles.heroComponentStyle}>
	      	<img className="col-xs-4 col-md-3 col-md-offset-1" style={styles.imgStyle} src='/app/images/character1.png' />
	      	<div className="col-xs-12 col-md-7 col-md-offset-1 jumbotron" style={styles.heroJumboStyle} >
			  <p className="display-6" style={{lineHeight: "1.5em", fontSize: "30pt"}}>Learn about technology, coding, and computers with the Power Geeks!</p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			  </p>
			</div>
	      </div>
	  </div>
    );
  }
}

Hero.defaultProps = {
  text: 'My brand new component!'
};

Hero.propTypes = {
  text: PropTypes.string
};
