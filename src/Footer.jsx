import React from 'react'
import "./footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { SkipNext } from '@material-ui/icons';
import {Grid,Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
function Footer() {
    return (
        <div className="footer">
             <div className="footer_left">
                   <img className="album" 
                     src="https://miro.medium.com/max/690/1*9uHPMdcUmmjITcx6NaYAiQ.jpeg" alt=""/>
                   <div className="info">
                        <h4>YEAH!</h4>
                        <p>Rock and Roll</p>
                   </div>
            </div>
            <div className="footer_center">
            <ShuffleIcon className="green"/>
                 <SkipPreviousIcon className="icon"/>
                   <PlayCircleOutlineIcon fontSize="large" className="icon"/>
                   <SkipNext className="icon"/>
                   <RepeatIcon className="green"/>
            </div>

            <div className="footer_right">
            <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon/>
        </Grid>    
        <Grid item>
          <VolumeDownIcon/>
        </Grid>
        <Grid item xs>
          <Slider  />
        </Grid>
        
      </Grid>
            </div>
        </div>
    )
}

export default Footer
