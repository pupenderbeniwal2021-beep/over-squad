import "./App.css";
import Page from "./Page";
import Profile from "./Profile";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";

function App() {
  // const user = {
  //   username: "pupender",
  //   class: 21,
  //   city: "ganganagar",
  // };

  // localStorage.setItem("user", JSON.stringify(user));
  // console.log(localStorage.length);
  // console.log(JSON.parse(localStorage.getItem("user")));

  // const jobOpenings = [
  //   {
  //     brandLogo: "https://logo.clearbit.com/google.com",
  //     company: "Google",
  //     datePosted: "5 days ago",
  //     post: "Frontend Developer",
  //     tag1: "Full Time",
  //     tag2: "Junior Level",
  //     pay: "$45/hr",
  //     location: "Mumbai, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/meta.com",
  //     company: "Meta",
  //     datePosted: "2 weeks ago",
  //     post: "React Developer",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$55/hr",
  //     location: "Bangalore, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/amazon.com",
  //     company: "Amazon",
  //     datePosted: "3 days ago",
  //     post: "Software Engineer",
  //     tag1: "Full Time",
  //     tag2: "Junior Level",
  //     pay: "$50/hr",
  //     location: "Hyderabad, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/apple.com",
  //     company: "Apple",
  //     datePosted: "1 week ago",
  //     post: "UI Engineer",
  //     tag1: "Part Time",
  //     tag2: "Senior Level",
  //     pay: "$70/hr",
  //     location: "Pune, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/netflix.com",
  //     company: "Netflix",
  //     datePosted: "10 days ago",
  //     post: "Frontend Engineer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$80/hr",
  //     location: "Delhi, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/microsoft.com",
  //     company: "Microsoft",
  //     datePosted: "4 days ago",
  //     post: "React Native Developer",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$60/hr",
  //     location: "Noida, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/nvidia.com",
  //     company: "NVIDIA",
  //     datePosted: "3 weeks ago",
  //     post: "UI/UX Developer",
  //     tag1: "Part Time",
  //     tag2: "Junior Level",
  //     pay: "$40/hr",
  //     location: "Chennai, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/adobe.com",
  //     company: "Adobe",
  //     datePosted: "6 days ago",
  //     post: "JavaScript Developer",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$58/hr",
  //     location: "Gurugram, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/uber.com",
  //     company: "Uber",
  //     datePosted: "2 days ago",
  //     post: "Frontend Software Engineer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$75/hr",
  //     location: "Mumbai, India",
  //   },
  //   {
  //     brandLogo: "https://logo.clearbit.com/airbnb.com",
  //     company: "Airbnb",
  //     datePosted: "12 days ago",
  //     post: "React Engineer",
  //     tag1: "Part Time",
  //     tag2: "Mid Level",
  //     pay: "$65/hr",
  //     location: "Remote",
  //   },
  // ];
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Frontend Developer passionate about React and UI Design.",
      tag: "React Developer",
      color: "royalblue",
      scolor: "navy",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Full Stack Developer with expertise in MERN Stack.",
      tag: "MERN Developer",
      color: "lightseagreen",
      scolor: "teal",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "UI/UX Designer creating beautiful user experiences.",
      tag: "UI/UX Designer",
      color: "black",
      scolor: "darkorange",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Backend Engineer specializing in Node.js and APIs.",
      tag: "Backend Developer",
      color: "green",
      scolor: "darkgreen",
    },
    {
      img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Mobile App Developer building Android and iOS apps.",
      tag: "React Native Developer",
      color: "orange",
      scolor: "#EA580C",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Software Engineer interested in cloud technologies.",
      tag: "Cloud Engineer",
      color: "purple",
      scolor: "#6D28D9",
    },
  ];

  return (
    <>
      {/* <Profile user='Pupender' age={21}></Profile>
      <Profile user='Diksha' age={22}></Profile>
       <Profile user='Komal' age={21}></Profile>
        <Profile user='Manish' age={19}></Profile> */}

      {/* <div className='parent'>
         {jobOpenings.map(function(elen){
          return(<Page brandLogo={elen.brandLogo} company={elen.company}datePosted={elen.datePosted}
            post={elen.post}tag1={elen.tag1}tag2={elen.tag2}
            pay={elen.pay}location={elen.location}/>)
        })}
       </div> */}

      <Section1 users={users} />
      <Section2 />
    </>
  );
}

export default App;
