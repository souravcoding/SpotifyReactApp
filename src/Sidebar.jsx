import React from "react"
import "./Sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SideBarOption from "./SideBarOption"
import { useDataLayerValue } from "./Datalayer";
const Sidebar=()=>{
    
    const[{playlist},dispatch]=useDataLayerValue()
    return (<>
    <div className="sidebar">
         
         <img className="side_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
           <SideBarOption Icon={HomeIcon} title="Home"/>
           <SideBarOption  Icon={SearchIcon} title="Search"/>
           <SideBarOption  Icon={LibraryMusicIcon} title="Your Library"/>
           <br/>
           <b className='side_title'>PLAYLISTS</b>
           <hr/>
          {playlist?.items?.map((playlist)=>{
            return <SideBarOption title={playlist.name} />
          })}
           
    </div>
                </>)
}

export default Sidebar