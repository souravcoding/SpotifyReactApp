import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './Datalayer'
import SongRow from "./SongRow"
import Header from "./Header"
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
function Body({spotify}) {

    const[{discover_weekly},dispatch]=useDataLayerValue()
    // console.log(discover_weekly?.tracks?.items[0].track.artists)
    return (
        <div className="body">
           <Header spotify={spotify}/>

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body_text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>

            </div>
            <div className="body_songs">
                <div className="body_icon">
                <PlayCircleFilledIcon className="play_icon"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                    
                </div>
               
                {discover_weekly?.tracks.items.map((item)=>{
                   return <SongRow track={item.track}/>
                })}
            </div>
        
        </div>
    )
}

export default Body
