import React from 'react';
import './featured-song.css';

class FeaturedSong extends React.Component {
    render(){
        return(
                <section class="block featured__song bg-light">
                    <header clasName="block_header">
                        <h2 className="header__title">Descobertas para Geovana Ribeiro</h2>
                    </header>
                    
                    <article class="song">
                        <picture className="song__cover">
                            <img src="http://placekitten.com/250/250" alt="" title=""/>
                        </picture>
                        <span className="song__repetitions">Aparece em: 5 playlists</span>
                        <h3 className="song__title">Bateu uma onda forte</h3>
                        <span className="song__author">MC Carol</span>
                    </article>
                </section>
        );
    }
}

export default FeaturedSong;