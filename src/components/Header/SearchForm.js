import React,{useEffect, useRef} from 'react'
import './SearchForm.css'
import arrow from './../../imgs/icon-arrow.svg';
import {useGlobalContext} from '../../components/Context'
import useInputParser from '../../utils/useInputParser'

export default function SearchForm() {
  const {requestState,fetchHandler}=useGlobalContext();
  const input=useRef();

  useEffect(()=>{
   input.current.focus();
  },[])

  const useRequestHandler=(e)=>{
    e.preventDefault();
    const value=input.current.value
    const query=useInputParser(value);
    fetchHandler(query)
    
  }

 



  return (
    <form  action="" onSubmit={useRequestHandler}>
        <div className='search-container'>
            <label htmlFor="search">IP Adress Tracker</label>
            <div>
                <input ref={input} placeholder='Search for any IP address or domain' type="text" id='search'/> 
                <button type="submit" className='search-btn'><img src={arrow} alt=""/></button>
            </div>
        </div>

    </form>
  )
}
