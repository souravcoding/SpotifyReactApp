export const authorize="https://accounts.spotify.com/authorize"

const redirectURL="https://reactspotifyclone.web.app/"

const clientID="481fdc76eae54abc992deb3abec91993"

const scope=[
    "user-read-playback-state",
"user-read-recently-played",
"user-top-read",
"user-read-currently-playing",
"user-modify-playback-state"
]

export const getTokenURL=()=>{
    return window.location.hash.substring(1).split('&')
    .reduce((initial,item)=>{
        var parts=item.split('=')
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial
    },{})
}

export const loginURL=`${authorize}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`