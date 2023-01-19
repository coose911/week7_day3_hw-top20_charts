import React, {useState, useEffect} from'react'
import SongList from '../Components/SongList'
import SongItem from '../Components/SongItem'

const Home = () => {
    const [songs, SetSongs] = useState([])


    useEffect(() => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => {
                return res.json()
    })
            .then(songs =>
                SetSongs(songs['feed']['entry'])

            )
    }, [])


    return ( 
        <>
            <div className = 'song-library'>
                {songs && <SongList songsAsProp={songs} />}
            </div>
            
        </>

    );
}

export default Home;

