import React from 'react'

import "./profile.css"

const Profile = ({user,age}) => {
  return (
   < >
   <div className="card">
      <img src="https://img.magnific.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      <h2>{user}</h2>
      <p>{age}</p>
      <a href="">View Profile</a>
    </div>
   </>
  )
}

export default Profile
