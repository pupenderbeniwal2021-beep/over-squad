import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react' 

const Effect = () => {

    // console.log("Hello this is side worker use-effect")

    const [num,setNum]=useState(0)
    const [num2,setNum2]=useState(10)

    // First right use on useeffect
    useEffect(function(){
        console.log("UseEffect is running...")
    },[num])  //==> here we use dependency array to control 
    // can pass dependency like num 

  return (
    <div>
      <h1>Use-Effect</h1>
      <hr />
      <h2>{num}</h2>
      <h2>{num2}</h2>
      <button 
      onMouseEnter={()=>{
        setNum(num+1)
      }}
      
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}

      >Click Me Use-Effect</button>

     
    </div>
  )
}

export default Effect
