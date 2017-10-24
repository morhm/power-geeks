import React, {PropTypes, Component} from 'react';

export default class NotifBanner extends Component {
  

  render() {
  	const styles = {
	  	textStyle: {
	  		color: "#616161", 
        marginTop: "0.5em"
	  	},
	  	divStyle: {
	  		display: "flex",
	  		justifyContent: "center",
	  		alignItems: "center",
	  		backgroundColor: "#D8D8D8"
	  	}
	  }

    return (
      <div style={styles.divStyle} className='notifbanner-component'>
        <p style={styles.textStyle} className='nb-text'>
          Power Geeks is currently in development. If you would like to learn more about it, email lindimatlali@gmail.com.
        </p>
      </div>
    );
  }
}

NotifBanner.defaultProps = {
  text: 'My brand new components!'
};

NotifBanner.propTypes = {
  text: PropTypes.string
};
