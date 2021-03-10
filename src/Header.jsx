import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar'
import { useDataLayerValue } from './Datalayer';
function Header() {
    const [{ user }, dispatch] = useDataLayerValue()
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input type="text" placeholder="search for songs albums and podcasts" />

            </div>
            <div className="header_right">
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header
