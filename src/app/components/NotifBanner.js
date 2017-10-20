import React, {PropTypes, Component} from 'react';

export default class NotifBanner extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

NotifBanner.defaultProps = {
  text: 'My brand new component!'
};

NotifBanner.propTypes = {
  text: PropTypes.string
};
