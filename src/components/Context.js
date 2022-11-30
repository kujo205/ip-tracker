import React, { createContext, useContext,useRef, useEffect, useReducer,useCallback } from 'react'


const SEND='SEND',RECIEVED='RECIEVED',ERROR='ERROR',DEFAULT='DEFAULT';
const baseUrl=`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_API_KEY}`;

const initialRequestState={
    loading:false,
    error:false,
    message:'',
    data:null,

}


export const IpContext=createContext({
    requestState:{},
    dispatchUrl:()=>{}
});

const requestReducer=(state,action)=>{
    switch (action.type){
        
        case SEND:
        return{
            ...state,
            loading:true,
        }
        case RECIEVED:
            return{
                ...state,
                loading:false,
                data:action.payload.data,
            }
        case ERROR:
            return{
                ...state,
                loading:false,
                error:true,
                message:action.payload.message
        }
        case DEFAULT:
        default:
        return{
            ...initialRequestState,
            data:state.data
        }
    }
}



export default function Context({children}) {
    const[requestState,dispatchRequest]=useReducer(requestReducer,initialRequestState);
    const mounted=useRef(false);
    
    const fetchHandler=useCallback(async(query)=>{
        let response;
        const url=`${baseUrl}${query}`
        try{
            dispatchRequest({type:SEND})
            response=await fetch(url);
            response=await response.json();
            if(response.code>399)throw new Error('no connection')
            else{
            dispatchRequest({type:RECIEVED,payload:{data:response}})}

        }catch(error){
            const message=response.messages;
            dispatchRequest({type:ERROR,payload:{message}})
        }
        if(!mounted.current)mounted.current=true;
    },[])

    useEffect(()=>{
        fetchHandler('');
    },[fetchHandler]);



    return (
        <IpContext.Provider value={{fetchHandler,mounted,dispatchRequest,requestState}}>
            {children}
        </IpContext.Provider>
        )
    }
    
export const useGlobalContext=()=>{
    return useContext(IpContext);
}