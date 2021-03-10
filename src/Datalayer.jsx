import {useContext, createContext, useReducer} from "react"

export const DataLayerContext=createContext()

export const Datalayer=({initialstate,reducer,children})=>(
        <DataLayerContext.Provider value={useReducer(reducer,initialstate)}>
        {children}
        </DataLayerContext.Provider>
)

export const useDataLayerValue=()=>useContext(DataLayerContext)
