import React from 'react'
import {Bookmark} from 'lucide-react'
import "./page.css"

const Page = () => {
  return (
    <div>
      <div className="card-m">
        <div className="card-top">
            <img src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />
           <a href="">Save <Bookmark size={16}/></a>
        </div>
        <div className="card-mid">
            <div>
                <h2>Amazon <span>5day ago</span></h2>
            </div>
            <h2>Senior UI/UX Desginer</h2>
            <div className='md-ps'>
                <p>Part-Time</p>
                <p>Senior Level</p>
            </div>
        </div>
        <div className="card-bottom">
            <div className='card-footer'>
                <h3>$120/hr</h3>
                <p>Mumbai,India</p>
            </div>
            <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Page
