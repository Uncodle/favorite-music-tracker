import React from 'react';
import './songs.css';

export class Songs extends React.Component {
    render(){

        const songs = [];

        for(let i=0; i<5; i++){
          songs.push(
            <article class="song">
                <picture className="song__cover">
                    <img src="http://placekitten.com/180/180" alt="" title=""/>
                </picture>
                <div className="song__details">
                    <h3 className="song__title">Bateu uma onda forte</h3>
                    <p className="song__author">MC Carol</p>
                    <span className="song__repetitions">5</span>
                </div>
            </article>
          )
        }

        return(
            <section class="block more__songs bg-light">
                <div class="container songs">
                    {songs}
                </div>
            </section>
        );
    }
}

export default Songs;