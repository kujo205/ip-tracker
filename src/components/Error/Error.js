import React, { useState } from 'react'
import './Error.css'


export default function Error({requestState,dispatchRequest}) {
  

  return (
  
    <div className={`error ${requestState.error?'show':''}`}>
      <span className='message'>
      {requestState.message}
        </span>
          <svg onClick={()=>dispatchRequest({type:'DEFAULT'})}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 x" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

    </div>
  
  
  
  )
}
