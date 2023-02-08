import React from 'react'
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Divider } from 'primereact/divider';
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state)=>state.userLoginInfo);

  return (
    <div>
      <div className='row'>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex mb-2">
          <div className=" ml-2">
            <img
              className="mr-2"
              src='student.jpg'
              width={125}
              shape="circle"
            />
          </div>
          <div className="mx-3 mt-3">
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
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex mb-2">
          </div>
      </div>
      <Divider/>
      <div>
        <div>
        There are so many ways to describe a good student. The most common terms are hardworking, being good in academics, submitting work on time, being regular, participating in-class activities, and achieving high grades.
        Good grades, a positive attitude and hard-working are all qualities of a good student. A good student doesn't always depend on those three qualities though. A good student comes to class and pays attention to the teacher. Self-discipline and the time management are also important factors to being a good student.
        </div>
      </div>
    </div>
  )
}

export default Profile