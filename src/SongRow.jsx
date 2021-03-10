import React from 'react'
import "./songrow.css"
function SongRow(props) {
    return (<>
        <div className="songrow">
        <img className="song_album" src={props.track.album.images[0].url} alt=""/>
            <div className="songrow_info">
                <h1>{props.track.name}</h1>
                <p>{props.track.artists.map((artist)=> artist.name).join(", ")}-{""}
                {props.track.album.name}</p>
            </div>
        </div>
        </>
    )
}

export default SongRow
