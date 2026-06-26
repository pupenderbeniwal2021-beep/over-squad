import React, { useState } from 'react'

const Index2 = () => {
    const[num2,setNum2]=useState(0)

    const increase=()=>{
        setNum2(newnum=>(newnum+1))
    }
    const decrease=()=>{
        setNum2(newnum=>(newnum-1))
    }

    const[num,setNum]=useState(10)

    const btnClicked=()=>{
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
    }

    const[tittle,setTittle]=useState("")

    const submithandle=(e)=>{
        e.preventDefault()
        console.log('Form Submitted')
        setTittle("")
    }
  return (
    <div className='bg-black text-white'>
        {/* <h1>{num}</h1>
        <button className='px-2 border border-white rounded-sm' onClick={btnClicked}>click</button>
        <hr />
        <h1>Number:{num2}</h1>
        <button className='px-2 border border-white rounded-sm' onClick={increase}>Increase</button><br />
        <button className='px-2 border border-white rounded-sm' onClick={decrease}>Decrease</button> */}
        <form className='p-10' onSubmit={(e)=>{
            submithandle(e)
        }}>
            <input type="text"
             placeholder='Enter A Text' 
             className='border-2 rounded-sm my-2 px-2'
            //  value="" to give value which does not change 
            value={tittle}
             onChange={(e)=>{
                // console.log(e.target)//e.target.value to see value typed
                setTittle(e.target.value)
             }} /><br />
            <input type="submit" value='Submit' className='border-2 rounded-sm my-2 px-2'/>
        </form>
    </div>
  )
}

export default Index2
