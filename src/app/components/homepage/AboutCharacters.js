import React, {PropTypes, Component} from 'react';
import characterData from '../../../data/characters.js';
const charData = characterData;


export default class AboutCharacters extends Component {
  renderCharacterProfiles() {

  	const styles = {
  		characterProfile: {
  			display: "flex",
  			justifyContent: "center",
  			alignItems: "center",
        margin: "30px 0"
  		},
  		imgStyle: {
  			height: 300
  		},
  		charDescStyle: {
  			marginleft: 100
  		}
  	}

    let characterProfiles = [];
    let characters = charData.map( (character,key) => {
      return (
        <div key={key} className="character-profile row" style={styles.characterProfile}>
          <img className="col-md-3" src={character.img} style={styles.imgStyle}/>
          <div className="character-description col-md-7 col-md-offset-2" style={styles.charDescStyle}>
            <h3>{character.name}</h3>
            <h4>{character.description}</h4>
          </div>
        </div>
  		);
  	});
  	return characters;
  }

  render() {
    return (
      <div className="aboutcharacters-component container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Meet the Characters</h1>
        {this.renderCharacterProfiles()}
      </div>
    );
  }
}

AboutCharacters.defaultProps = {
  text: 'My brand new component!'
};

AboutCharacters.propTypes = {
  text: PropTypes.string
};
