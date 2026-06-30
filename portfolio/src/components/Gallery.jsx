import React from 'react'
import "./css/Stylo.css"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const Gallery = () => {

  //user data
  const [userData, setUserData] = useState([])

  //index buttons
  const[index,setIndex]=useState(1)

  // to get detailed data we make function async
  const getData = async () => {
    // axios.post("https://picsum.photos/v2/list?page=2&limit=100",  for post for send data
    //   {username:'Manish',password:'Oversquad'})

    // patch for data update

    const datao = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    // console.log(datao)

    setUserData(datao.data)
    console.log(datao.data)
  }

  // UseEffect
  useEffect(function(){
    getData()
  },[index])


  //conditions
  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div className='userCard' key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white p-4 '>
      <div className="allUserData flex flex-wrap gap-4 justify-center h-screen">
        {
          printUserData
        }
      </div>
      <div className="dataButtons flex justify-center gap-10 items-center p-4 mt-20">
        <button 
        style={{opacity: index==1?0.5:1}}
        className='bg-amber-400 text-sm text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        >
          Prev
        </button>
        <h4 className='gap-3 flex font-semibold'>Page <b>{index}</b></h4>
        <button 
        className='bg-amber-400 text-sm text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95'
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Gallery
