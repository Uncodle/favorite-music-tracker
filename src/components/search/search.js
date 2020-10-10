import React from 'react';
import './search.css';

export class Search extends React.Component {
    render(){
        return (
            <section className="search">
                <header className="search__header">
                    <h1 className="header__title">Favorite Music Tracker</h1>
                    <p className="header__description">An web application to discover the music that appears most in your playlists.</p>
                </header>
                <form className="search__form">
                    <input className="form__input" type="text" name="search" placeholder="Insert the user's ID: "/>
                    <button>Discover</button>
                </form>
            </section>
        );
    }
}

export default Search;