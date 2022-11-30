import React from 'react'
import { useGlobalContext } from '../Context'
import './Header.css'
import IpInfoContainer from './IpInfoContainer'
import SearchForm from './SearchForm'
export default function Header() {
  const{requestState}=useGlobalContext()
  return (
    <header className='header'>
      <div className='container'>
      <SearchForm/>
      {requestState.data&&<IpInfoContainer/>}
      </div>
    </header>
  )
}
