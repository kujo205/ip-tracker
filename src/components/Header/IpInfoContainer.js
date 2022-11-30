import React, { useState,useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useGlobalContext } from '../Context'
import './IpInfoContainer.css'

const DUMMY_INFO=[
    
]
export default function IpInfoContainer() {

  const{requestState}=useGlobalContext();
  const {loading}=requestState;
    const[data,setData]=useState([]);

    useEffect(()=>{
      setData([['ip address',requestState.data.ip],
      ['location',requestState.data.location.city+','+requestState.data.location.region+',\n'+requestState.data.location.geonameId],
      ['timezone','UTC '+requestState.data.location.timezone],
      ['isp',requestState.data.isp]]);

      
    },[requestState.data])


  return (<SkeletonTheme color='#F5F5F5' highlightColor='#ffffff' duration={.6}>
    <div className='info'>
        {data.map((e)=>
        <div className="info__item"
        key={e[0]}
        >
            <div className='title'>{!loading?e[0]: <Skeleton width={200} height={10} count={1} />}</div>
            <div className='value'>{!loading?e[1]: <Skeleton width={200} height={20} count={2} />}</div>
            
        </div>)
        }
        
        </div>
        </SkeletonTheme>)
}
