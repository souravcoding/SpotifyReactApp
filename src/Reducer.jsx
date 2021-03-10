export const initialstate={
    user:null,
    playlist:[],
    playing:false, 
    item:null, 
    token:""
}

const Reducer=(state,action)=>{
    console.log(action);
     switch(action.type){
         case "SET_USER":
         return {...state,user:action.user}
         case "SET_TOKEN":
             return {...state,token:action.token}
        case "SET_PLAYLIST":
            return {...state,playlist:action.playlist}
        case "SET_DISCOVER_WEEKLY":
            return {...state,discover_weekly:action.discover_weekly}
         default: 
         return state
     }
    
}

export default Reducer 