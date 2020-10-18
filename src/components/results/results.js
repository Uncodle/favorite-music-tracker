import React, { Fragment } from 'react';
import FeaturedSong from '../featured-song/featured-song';
import { TracksContext } from '../../providers/tracks.context';

export class Results extends React.Component {
    render(){
        const { state } = this;
        console.log(state);
        
        return(
            <TracksContext.Consumer>
          {
            ({state}) => (
            <main>
                <Fragment>
                    <FeaturedSong {...{ state }}/>
                    {/* <Songs {...{ context }}/> */}
                </Fragment>    
            </main>
            )
        }
        </TracksContext.Consumer>
        );
    }
}

export default Results;