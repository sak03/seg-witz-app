import React from 'react'
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Divider } from 'primereact/divider';
import { useSelector } from "react-redux";

const About = () => {
  const userInfo = useSelector((state) => state.userLoginInfo);

  return (
    <div>
      <div className='row'>
        <div className="col-sm-1 col-md-1 col-lg-2 mb-2"></div>
        <div className="col-sm-4 col-md-4 col-lg-3 mb-2">
          <div className=" ml-2">
            <img
              className="img-fluid rounded-start rounded" alt="..."
              src='candidate1.jpeg'
              width={200}
            />
          </div>
          {/* <div className="mx-3 mt-3">
            <p style={{ marginBottom: "0.5rem" }}>
              <FaUserAlt /> &nbsp; <strong>{userInfo?.name}</strong>
            </p>
            <p
              style={{ marginBottom: "0.5rem" }}
              className="d-flex align-items-center"
            >
              <FaPhoneAlt />
              <span>&nbsp; +91 854 789 6524 </span>
            </p>
            <p
              style={{ marginBottom: "0.5rem" }}
              className="d-flex align-items-center"
            >
              <FaEnvelope />
              <span>&nbsp; test@testmail.com</span>
            </p>
            <p className="d-flex align-items-center">
              <FaMapMarkerAlt />
              <span>&nbsp; Delhi, IN</span>
            </p>
          </div> */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-5 mb-2">
          <p className="card-text lh-base">
            I'm a professional blogger from Delhi, I was graduated in Mechanical Engineering and started
            his blogging career with his site named "segwitz-blog" where I posts content related to
            technology, travel, health, fashion, sports, entertainment, gadgets, gaming SEO,
            web hosting digital marketing, etc. As I loves to research and learn about software and
            computing, he also posts articles related to the latest technologies, internet tips, and
            software, etc. I'm the one more blogging site, "segwitz-blog," and is CEO of his Company,
            WebSeasoning, where I impart knowledge about digital marketing and offers certified
            courses to boost career growth.
          </p>
        </div>
        <div className="col-sm-1 col-md-1 col-lg-2 mb-2"></div>
      </div>
      <div className='row'>
        <div className="col-sm-1 col-md-1 col-lg-2 mb-2"></div>
        <div className="col-sm-10 col-md-10 col-lg-8 mb-2">
          <p className="card-text lh-base">
            <Divider />
            Segwitz-blog is a blog on topics like Technology, Lifestyle Topics, Entertainment, Sports,
            Health & Fitness, Gaming, Gadgets, Product Reviews, SEO, Content Marketing, Blogging, Digital
            Marketing, WordPress, Web Hosting, How-to, Deals, Best and top lists and much more. Many changes
            have been made to this blog since its launch in Oct 2009. Continuing the efforts to provide the
            best content, we are going to focus on topics that are current and has some definite information.
          </p>
          <p className="card-text lh-base">
            This blog is managed by Jaspal Singh, who is professional blogger from Jaipur,
            India. He is a Mechanical Engineer with some skills of Designing & Coding. His interest in
            computers & the internet has made him a self-proclaimed geek. Most of the time he is found
            with his iMac or his MacBook Pro even when he is sleeping he keeps it close enough to grab a
            look whenever possible.
          </p>
          <p className="card-text lh-base">
            This blog is managed by Jaspal Singh, who is professional blogger from Jaipur,
            India. He is a Mechanical Engineer with some skills of Designing & Coding. His interest in
            computers & the internet has made him a self-proclaimed geek. Most of the time he is found
            with his iMac or his MacBook Pro even when he is sleeping he keeps it close enough to grab a
            look whenever possible.
          </p><p className="card-text lh-base">
            This blog is managed by Jaspal Singh, who is professional blogger from Jaipur,
            India. He is a Mechanical Engineer with some skills of Designing & Coding. His interest in
            computers & the internet has made him a self-proclaimed geek. Most of the time he is found
            with his iMac or his MacBook Pro even when he is sleeping he keeps it close enough to grab a
            look whenever possible.
          </p>
        </div>
        <div className="col-sm-1 col-md-1 col-lg-2 mb-2"></div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default About