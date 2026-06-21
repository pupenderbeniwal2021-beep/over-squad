import React from "react";
// import Index from "./components/Index";
import "./App.css";
import Project from "./components/Project/Project";
import Section2 from "./components/Project/Section2";


// function App() {
// // const arr = [
// //   {
// //     id: 1,
// //     brandLogo: "https://logo.clearbit.com/google.com",
// //     companyName: "Google",
// //     datePosted: "2 days ago",
// //     post: "Frontend Developer",
// //     tag1: "Full Time",
// //     tag2: "Junior Level",
// //     pay: "$55/hr",
// //     location: "Mumbai, India"
// //   },
// //   {
// //     id: 2,
// //     brandLogo: "https://logo.clearbit.com/meta.com",
// //     companyName: "Meta",
// //     datePosted: "5 days ago",
// //     post: "React Developer",
// //     tag1: "Full Time",
// //     tag2: "Senior Level",
// //     pay: "$80/hr",
// //     location: "Bengaluru, India"
// //   },
// //   {
// //     id: 3,
// //     brandLogo: "https://logo.clearbit.com/amazon.com",
// //     companyName: "Amazon",
// //     datePosted: "1 day ago",
// //     post: "Software Engineer",
// //     tag1: "Full Time",
// //     tag2: "Junior Level",
// //     pay: "$60/hr",
// //     location: "Hyderabad, India"
// //   },
// //   {
// //     id: 4,
// //     brandLogo: "https://logo.clearbit.com/apple.com",
// //     companyName: "Apple",
// //     datePosted: "3 days ago",
// //     post: "IOS Developer",
// //     tag1: "Part Time",
// //     tag2: "Senior Level",
// //     pay: "$95/hr",
// //     location: "Cupertino, USA"
// //   },
// //   {
// //     id: 5,
// //     brandLogo: "https://logo.clearbit.com/netflix.com",
// //     companyName: "Netflix",
// //     datePosted: "4 days ago",
// //     post: "Backend Engineer",
// //     tag1: "Full Time",
// //     tag2: "Senior Level",
// //     pay: "$90/hr",
// //     location: "Los Angeles, USA"
// //   },
// //   {
// //     id: 6,
// //     brandLogo: "https://logo.clearbit.com/microsoft.com",
// //     companyName: "Microsoft",
// //     datePosted: "6 days ago",
// //     post: "Cloud Engineer",
// //     tag1: "Full Time",
// //     tag2: "Junior Level",
// //     pay: "$65/hr",
// //     location: "Noida, India"
// //   },
// //   {
// //     id: 7,
// //     brandLogo: "https://logo.clearbit.com/nvidia.com",
// //     companyName: "NVIDIA",
// //     datePosted: "1 week ago",
// //     post: "AI Engineer",
// //     tag1: "Full Time",
// //     tag2: "Senior Level",
// //     pay: "$110/hr",
// //     location: "Pune, India"
// //   },
// //   {
// //     id: 8,
// //     brandLogo: "https://logo.clearbit.com/openai.com",
// //     companyName: "OpenAI",
// //     datePosted: "2 days ago",
// //     post: "Full Stack Developer",
// //     tag1: "Part Time",
// //     tag2: "Junior Level",
// //     pay: "$85/hr",
// //     location: "San Francisco, USA"
// //   },
// //   {
// //     id: 9,
// //     brandLogo: "https://logo.clearbit.com/uber.com",
// //     companyName: "Uber",
// //     datePosted: "3 days ago",
// //     post: "Mobile App Developer",
// //     tag1: "Full Time",
// //     tag2: "Senior Level",
// //     pay: "$75/hr",
// //     location: "Bengaluru, India"
// //   },
// //   {
// //     id: 10,
// //     brandLogo: "https://logo.clearbit.com/adobe.com",
// //     companyName: "Adobe",
// //     datePosted: "5 days ago",
// //     post: "UI/UX Engineer",
// //     tag1: "Part Time",
// //     tag2: "Junior Level",
// //     pay: "$58/hr",
// //     location: "Noida, India"
// //   }
// // ];

//===========================================================================
        const users=[
          { img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
            intro:"",
            color:"blue",
            tag:"Satisfied"},

          { img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
            intro:"",
             color:"Red",
            tag:"Underserved"},

          { img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
            intro:"",
             color:"black",
            tag:"Underbanked"},

          { img:"https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro:"",
            color:"darkgreen",
            tag:"Satisfied"}
        ]
//===========================================================================

//   return (
//     // <div className="Main">
//     //   {/* <Index img={card} user="Manish"/>
//     //   <Index img={card} user="Ananda"/>
//     //   <Index img={card} user="Pandit"/>
//     //   <Index img={card} user="Chakra"/> */}
//     // </div>
//     // <div className="MainCards">
//     //   {arr.map(
//     //     function(elem,index){
//     //       return <div key={index}>
//     //         <Index company={elem.companyName} 
//     //                     post={elem.post} 
//     //                     date={elem.datePosted} 
//     //                     tag1={elem.tag1} 
//     //                     tag2={elem.tag2}
//     //                     logo={elem.brandLogo}
//     //                     pay={elem.pay}
//     //                     location={elem.location}/>
//     //       </div>
//     //     }
//     //   )}
//     // </div>
    
//   );
// }

function App(){
    return (
  <div>
    <Project users={users}/>
    <Section2 />
  </div>
);
}

export default App;
