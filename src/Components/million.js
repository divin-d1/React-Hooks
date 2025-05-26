import React from 'react'
import { block } from 'million/react'

const HeavyComponent = ({count}) => {
  return (
    <div>
        <h2>Count: {count}</h2>
        <p>This is a heavy component</p>
    </div>
  )
}

export const BlockedHeavyComponent = block(HeavyComponent);

// import React from 'react'
// import {BlockedHeavyComponent} from './Components/million'

// const App = () => {
//   return (
//     <div>
//             <BlockedHeavyComponent count = {42}/>

//     </div>
//   )
// }

// export default App