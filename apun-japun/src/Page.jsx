import React from 'react'
import {Bookmark} from 'lucide-react'
import "./page.css"

const Page = ({
  brandLogo,
  company,
  datePosted,
  post,
  tag1,
  tag2,
  pay,
  location,
}) => {
  return (
    <div className="card-m">
      <div className="card-top">
        <img src={brandLogo} alt={company} />
        <a href="#">
          Save <Bookmark size={16} />
        </a>
      </div>

      <div className="card-mid">
        <div>
          <h2>
            {company} <span>{datePosted}</span>
          </h2>
        </div>

        <h2>{post}</h2>

        <div className="md-ps">
          <p>{tag1}</p>
          <p>{tag2}</p>
        </div>
      </div>

      <div className="card-bottom">
        <div className="card-footer">
          <h3>{pay}</h3>
          <p>{location}</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};
export default Page
