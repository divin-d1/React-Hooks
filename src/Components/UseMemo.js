import './App.css';
import React from 'react'
import {useState, useMemo} from 'react'

function App (){
    const [count,setCount] = useState(0)
    const [dark,setDark] = useState(false)
    // memo comes here
    // let doubleNumber = slowFunction(count)
    let doubleNumber  = useMemo(()=>{
      return slowFunction(count)
    },[count])

    const themeColour = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white': 'black' 
    }
    function slowFunction(num){
        for(let i=0; i<=10000000000; i++){}
        return num*2
    }
  return (
    <div>
        <input type="number" value={count} onChange={(e)=>{setCount(parseInt(e.target.value))}}/>
        <button onClick={()=>{setDark(!dark)}}>Change Theme</button>
        <div style={themeColour}>{doubleNumber}</div>
    </div>
  )
}

export default App