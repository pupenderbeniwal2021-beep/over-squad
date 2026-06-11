
import './App.css'
import Page from './Page'
import Profile from './Profile'

function App() {
 
const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Gurugram, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "12 days ago",
    post: "React Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote",
  },
];

  return (
    <>
     {/* <Profile user='Pupender' age={21}></Profile>
      <Profile user='Diksha' age={22}></Profile>
       <Profile user='Komal' age={21}></Profile>
        <Profile user='Manish' age={19}></Profile> */}

       <div className='parent'>
         {jobOpenings.map(function(elen){
          return(<Page brandLogo={elen.brandLogo} company={elen.company}datePosted={elen.datePosted}
            post={elen.post}tag1={elen.tag1}tag2={elen.tag2}
            pay={elen.pay}location={elen.location}/>)
        })}
       </div>
        
    </>
  )
}

export default App
