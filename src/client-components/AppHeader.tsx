'use client';
import React from 'react'
import AppLogo from './AppLogo';


export default function AppHeader() {
    const showMsg = () => {
        alert("Hello Next.js")
    }
  return (
    <div>
        <h1 className='header'>AppHeader</h1>
        <p>{ process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
        <AppLogo/>
        <button style={ {color: 'red'}} onClick={showMsg}>Click Me!!!</button>
    </div>
  )
}
