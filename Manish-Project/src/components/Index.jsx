import React from "react";
import '../Css/Index.css';
import card from './assets/Card.jpg'
function Index (){
    return(
    <div className="MainCards">
        <div className="Card">
            <img src={card} alt="" />
            <h1>Manish</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rem eius aspernatur delectus tempora maiores.</p>
            <button>View Profile</button>
        </div>
    </div>
    )
}
export default Index