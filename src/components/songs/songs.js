import React from 'react';
import './songs.css';

export class Songs extends React.Component {
    render(){

        const songs = [];

        for(let i=0; i<5; i++){
          songs.push(
            <article className="song">
                <picture className="song__cover">
                    <img src="http://placekitten.com/150/150" alt="" title=""/>
                </picture>
                <div className="song__details">
                    <h3 className="song__title">Bateu uma onda forte</h3>
                    <p className="song__author">MC Carol</p>
                    <p className="song__repetitions">Aparece em <strong>5 playlists</strong></p>
                </div>
            </article>
          )
        }

        return(
            <section className="block more__songs">
                <div className="container songs">
                    { songs }
                </div>
            </section>
        );
    }
}

export default Songs;