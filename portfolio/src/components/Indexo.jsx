import React from 'react'
import "./css/Stylo.css"

const Indexo = () => {
  //localStorage.clear() to clear local storage data
  localStorage.setItem("user","Over Squad")

  // const name=localStorage.getItem("user")
  // console.log(user)

  // localStorage.removeItem("user") to remove localstorage item

  // =======================
  const users={
     username:"Leader",
     age:18,
     city:"Abohar"
  }

  localStorage.setItem("user",JSON.stringify(users))

  const usera=JSON.parse(localStorage.getItem('user'))
  console.log(usera)

  // ====================
  // const user =localStorage.getItem('user')
  // console.log(user)
  // console.log(typeof(user))


  return (
    <div>
      <h1>Hello Bro</h1>
    </div>
  )
}

export default Indexo
