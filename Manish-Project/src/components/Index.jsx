import React from "react";
import "../Css/Index.css";
import card from "../assets/card.jpg";
import * as Ic from "lucide-react";


function Index(props) {
  return (
    <>

      {/* <div className="Card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          rem eius aspernatur delectus tempora maiores.
        </p>
        <button>View Profile</button>
      </div> */}

      <div className="card">
          <div className="top-center">
            <div className="top">
            <img src={props.logo} alt="" />
            <button>Save <Ic.Bookmark className="icon"/></button>
          </div>
          <div className="center">
            <h3>{props.company} <span>{props.date}</span></h3>
            <h2>{props.post}</h2>
            <div className="timejob">
              <h4>{props.tag1}</h4> 
              <h4>{props.tag2}</h4>
            </div>
          </div>
          </div>
          <div className="bottom">
              <div>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
              </div>       
            <button>Apply Now </button>
          </div>
      </div>

      </>
      
  );
}
export default Index;
