import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/header/header';
import Results from './components/results/results';
import Search from './components/search/search';
import { TracksContext } from './providers/tracks.context';

export class App extends Component {

  state = {
    featuredTrack: undefined,
    tracks: [],
    alreadyDiscovered: false,
  }
  
  setAlreadyDiscovered = (boolean) => this.setState({ 
    alreadyDiscovered: boolean 
  });

  setFeaturedTrack = (track) => this.setState({ 
    featuredTrack: track 
  });

  setTracks = (tracksList) => this.setState({ 
    tracks: tracksList 
  });

  render(){
    const { setFeaturedTrack, setTracks, setAlreadyDiscovered, state } = this;

    const context = {
        state,
        setFeaturedTrack,
        setTracks,
        setAlreadyDiscovered
    };

    return (
      <div className="App">
        <TracksContext.Provider value={context}>
        <TracksContext.Consumer>
          {
            ({setFeaturedTrack, setTracks, setAlreadyDiscovered, state}) => (
              <Fragment>
                <Header />
                <Search {...{setFeaturedTrack, setTracks, setAlreadyDiscovered, state}} />
                <Results {...{state}} />
              </Fragment>
            )
          }
          </TracksContext.Consumer>
        </TracksContext.Provider>
      </div>
    );
  }
}

export default App;
 