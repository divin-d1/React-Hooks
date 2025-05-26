

import React from 'react'
import { useState } from 'react'
const batching = () => {
    function CountName(){
        const[count,setCount] = useState(0)
        const[name,setName] = useState('')

        function counter(){
            setCount(count + 1)
            setName('Clicked')
        }
        return <button onClick={counter}>{count} - {name}</button>
    }
  return (
    <div>
        <CountName/>
    </div>
  )
}

export default batching


// setCount(count + 1);
// setCount(count + 1); // May result in only +1 instead of +2
