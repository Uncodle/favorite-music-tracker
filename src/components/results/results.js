import React from 'react';
import Songs from '../songs/songs';
import FeaturedSong from '../featured-song/featured-song';

export class Results extends React.Component {
    render(){
        return(
            <main>
                <FeaturedSong/>
                <Songs/>
            </main>
        );
    }
}

export default Results;