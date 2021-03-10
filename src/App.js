import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login"
import { getTokenURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./Player"
import { useDataLayerValue } from './Datalayer';

const spotify =new SpotifyWebApi()

function App() {
  
  const[{user,token},dispatch]=useDataLayerValue()
  useEffect(()=>{
    const hash =getTokenURL()
    window.location.hash=""
    const _token=hash.access_token
    
    if(_token){
        dispatch({type:"SET_TOKEN",
                  token:_token})

      spotify.setAccessToken(_token)

      spotify.getMe().then((user)=>{
       
        dispatch({type:"SET_USER",user:user})
      })
      spotify.getUserPlaylists().then((playlist)=>{
        dispatch({type:"SET_PLAYLIST",
                    playlist:playlist})
      })
    }
        spotify.getPlaylist('37i9dQZEVXcTFcl8et6hbk').then((Response)=>{
          dispatch({
            type:"SET_DISCOVER_WEEKLY",
            discover_weekly:Response
          })
        })   
    
  },[])
  console.log(user);
  console.log(token);
  return (<>
  <div className="app">
      {token? <Player spotify={spotify}/> : <Login/> }
  </div>
      
   </>
  );
}

export default App;

