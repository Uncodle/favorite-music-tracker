import React, { Component } from 'react';
import './search.css';
import getUserPlaylists from '../../services/user-playlists.service';
import getPlaylistTracks from '../../services/playlist-tracks.service';

export class Search extends Component {
    constructor(props){
        super(props);
        const params = this.getHashParams();
        this.token = params.access_token;
        this.tracks = [];
        this.state = { 
            account_id: '22tk6jgofco56wm3rk3ctx6lq' 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
        }
        return hashParams;
    }

    handleChange(event) {
        this.setState({account_id: event.target.value});
    }

    handleTracks() {
        const ocurrences = {};

        this.tracks.forEach( (track) => {
            ocurrences[track.id] = ocurrences[track.id] + 1 || 1; 
        }); 
        
        const higherOcurrence = Object.keys(ocurrences).reduce((a, b) => ocurrences[a] > ocurrences[b] ? a : b, 0);

        return {
            id: higherOcurrence,
            repetitions: ocurrences[higherOcurrence]
        }
    };

    setTrackedMusics() {
        const handledTrack = this.handleTracks();
        const featuredTrack = this.tracks.find((track) => {
            return track.id === handledTrack.id;
        });

        return {
            ...handledTrack,
            ...featuredTrack,
        };
    }

    handleSubmit() {
        const context = this.props;

        if(!context.state.alreadyDiscovered){
            getUserPlaylists(this.state.account_id, this.token).then( (response) => {
                const playlists = response.data.items;
    
                playlists.forEach((playlist) => {
                    const urlTrack = playlist.tracks.href;

                    getPlaylistTracks(urlTrack, this.token).then( (response) => {
                        const items = response.data.items;

                        Object.entries(items).forEach(([key, value]) => {
                            const track = value.track;
                            const trackInfo = {
                                id: track.id,
                                name: track.name,
                                artist: track.artists[0].name,
                                url: track.external_urls.spotify,
                                cover_photo: track.album.images[0].url
                            }

                            this.tracks.push(trackInfo);
                        });
                    });
                });
            });
    
            const trackedMusics = this.setTrackedMusics();
    
            context.setFeaturedTrack(trackedMusics);
            context.setTracks(this.tracks);
            context.setAlreadyDiscovered(true);
        }
    };

    render(){
        return (
            <section className="block search">
                <header className="search__header">
                    <h1 className="header__title">Favorite Music Tracker</h1>
                    <p className="header__description">An web application to discover the music that appears most in your playlists.</p>
                </header>
                <form className="search__form" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" value={this.state.account_id} onChange={this.handleChange} name="search" placeholder="Enter the user id..."/>
                    <div className="form__actions">
                        <a href="http://localhost:8888/login" className="button button--login">Sign in with Spotify</a>
                        <button className="button button--primary">Discover</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default Search;