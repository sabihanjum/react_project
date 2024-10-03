import React from 'react'
import { useState } from 'react'
export const Appfilter1 = () => {
    const[a,setA] = useState(1)      //Declare variable

  return (
    <div>
        {a}
        <button onClick={()=>setA(a+1)}>
            change
        </button>
    </div>
  )
}
export default Appfilter1;
