import React from 'react'
import { useState,useEffect,useRef } from 'react'
const UseRef = () => {
    const[name,setName] = useState('')

    // const[renderCounter, setRenderCounter] = useState('')
    // useEffect(()=>{
    //     setRenderCounter(renderCounter + 1)
    // },[name])

    const renderCounter = useRef(1)
    useEffect(()=>{
        renderCounter.current = renderCounter.current + 1 
    })
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <div>{name}</div>
        <div>I rendered: {renderCounter.current}</div>
    </div>
  )
}

export default UseRef