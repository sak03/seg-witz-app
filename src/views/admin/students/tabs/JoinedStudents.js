import React, { useEffect, useState } from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./tab.css";
import axios from "axios";
import { ProgressSpinner } from "primereact/progressspinner";
import { Avatar } from 'primereact/avatar';

const AllStudents = () => {
  const [studentdata, setStudentData] = useState(null);
  const [showspinner, setshowspinner] = useState(false);

  const status = [
    { name: "Offered", code: "ofrd" },
    { name: "Joined", code: "jnd" },
    { name: "Rejected", code: "tjt" },
  ];

  useEffect(() => {
    getAllstudents();
  }, [])

  // get all students data from API Server
  const getAllstudents = async (data) => {
    setshowspinner(true);
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/users`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;",
          },
        }
      )
      .then(
        (res) => {
          const dt = res.data;
          const ndt = dt.filter((item)=>{
            return item.id % 2 != 0
          })
          // console.log("ndt1", ndt);
          setStudentData(ndt);
          setshowspinner(false);
        },
        (err) => {
          console.log(err);
          setshowspinner(false);
        }
      );
  };

  return (
    <div className="">
      <div className="row mb-2">
        {studentdata !== undefined && studentdata !== null ?
          studentdata.map((item) => (
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex mb-2 shadow">
              <div className=" ml-2">
                <Avatar
                  label={item.name.charAt(0).toUpperCase()}
                  className="mr-2"
                  size="xlarge"
                  // style={{width:"225", height:"100"}}
                  shape="circle"
                />
              </div>
              <div className="mx-3 mt-3">
                <p style={{ marginBottom: "0.5rem" }}>
                  <FaUserAlt /> &nbsp; <strong>{item.name}</strong>
                </p>
                <p
                  style={{ marginBottom: "0.5rem" }}
                  className="d-flex align-items-center"
                >
                  <FaPhoneAlt />
                  <span>&nbsp; {item.phone}</span>
                </p>
                <p
                  style={{ marginBottom: "0.5rem" }}
                  className="d-flex align-items-center"
                >
                  <FaEnvelope />
                  <span>&nbsp; {item.email}</span>
                </p>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt />
                  <span>&nbsp; {item.address.city}</span>
                </p>
              </div>
            </div>
          ))
          : <span>Students not found</span>}
        {showspinner && (
          <div className="spinner-div">
            <ProgressSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllStudents;
