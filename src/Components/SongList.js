import React, {useState} from 'react'
import SongItem from './SongItem'

const SongList = ({songsAsProp}) => {

    const songItems = songsAsProp.map((song) => {
        return (
            <SongItem song={song["title"]["label"]} key={song["id"]["attributes"]["im:id"]}/>
        )
    });
    console.log(songItems)


    return (  
        <>
            <ol>
                {songItems}
            </ol>
        </>
    );
}

export default SongList;



// ['entry'][0]['im:name']['label']
