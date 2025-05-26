import React from 'react'

const ResetingComponent = () => {
    const [name,setName] = React.useState('');
  return (
    <div>
        <form>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your names'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ResetingComponent

// import React, { useState } from 'react'
// import ResetingComponent from './Components/ResetingComponent'

// const App = () => {
//     const [changeKey, setChangeKey] = React.useState(0);
//      console.log(changeKey)
//   return (
//     <div>
//         <ResetingComponent key={changeKey}/>
//         <button onClick={()=>{setChangeKey(changeKey +1 )}}>Reset</button>
//     </div>
//   )
// }

// export default App