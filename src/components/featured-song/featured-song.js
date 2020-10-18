import React, { Fragment } from 'react';
import './featured-song.css';

class FeaturedSong extends React.Component {
    
    render(){
        const { state } = this.props;
        console.log(this.props);

        if(state.featuredTrack){
        return ( 
            <section className="block featured__song">
                <header className="block_header">
                    <h2 className="header__title">Mais aparece em suas playlists:</h2>
                </header>
                <article className="song">
                    <picture className="song__cover">
                        <img src={state.featuredTrack.cover_photo} alt="" title=""/>
                    </picture>
                    <p className="song__repetitions">Aparece em <strong>{state.featuredTrack.repetitions} playlists</strong></p>
                    <h3 className="song__title">{state.featuredTrack.name}</h3>
                    <p className="song__author">{state.featuredTrack.artist}</p>
                    <a target="_blank" href={state.featuredTrack.url} className="button button--secondary">Escutar no Spotify</a>
                </article>
            </section>
            )
        } else {
            return (
                <section className="block featured__song bg-light">
                      <header className="block_header">
                        <h2 className="header__title">Logue com o spotify e clique em "Discover".</h2>
                    </header>
                </section>
            )
        }
    }
}

export default FeaturedSong;