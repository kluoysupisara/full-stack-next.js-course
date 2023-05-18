'use client';
import React from 'react'
import AppLogo from './AppLogo';


export default function AppHeader() {
    const showMsg = () => {
        alert("Hello Next.js")
    }
  return (
    <div>
        <h1>AppHeader</h1>
        <AppLogo/>
        <button onClick={showMsg}>Click Me!!!</button>
    </div>
  )
}
