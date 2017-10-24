import React, {PropTypes, Component} from 'react';

export default class About extends Component {
	render() {
		const styles = {
			aboutJumboStyle: {
				backgroundColor: "white",
				color: "black", 
				padding: "15px 0"
			}, 
			headerStyle: {
				fontSize: "3em"
			}
		}

	  return (
	  	<div className="about-component container">
	      	<div className="jumbotron about-jumbo row" style={styles.aboutJumboStyle}>
			  <h1 className="text-center" style={styles.headerStyle}>What is Power Geeks?</h1>
			  <p className="lead">
			  What happens when you combine an exciting comic book and technology education? Find out in the first issue of Power Geeks, the comic book that will make learning about technology exciting! Illustrated by The Sowetan's Sifiso Yalo, Power Geeks aims to bring the opportunity to learn about coding, computers, and technology to South African students of all ages. 
			  </p>
			</div>
			<div className="jumbotron about-jumbo row" style={styles.aboutJumboStyle}>
			  <h1 className="text-center col-md-12" style={styles.headerStyle}>It's about more than coding!</h1>
			  <p className="lead col-md-12">
			  Tomorrow's leaders, engineers, and entrepreneurs will be working more closely with technology than ever. That's why its important for South African girls and boys to learn about and get excited by technology and coding from a young age. We want to bring this opportunity to all students of any background - that's why we Power Geek's activities are available in online and paper and pencil versions.
			  </p>
			</div>
	   	</div>
	  );
	}
}

About.defaultProps = {
  text: 'My brand new component!'
};

About.propTypes = {
  text: PropTypes.string
};
