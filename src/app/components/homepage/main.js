import React, {Component} from 'react';
import NotifBanner from './NotifBanner.js';
import MainNav from './MainNav.js';
import Hero from './Hero.js';
import About from './About.js';
import AboutCharacters from './AboutCharacters.js';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <NotifBanner/>
        <MainNav/>
        <Hero/>
        <About/>
        <AboutCharacters/>
      </div>
    );
  }
}
