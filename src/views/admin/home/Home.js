import React, { useState } from 'react'
import {
    FaFileMedical,
    FaStarHalfAlt,
    FaEdit,
    FaRegTrashAlt,
    FaChartLine,
} from "react-icons/fa";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MdAssignment } from "react-icons/md";
import { useSelector } from "react-redux";
import "./home.css";

const Home = () => {
    const userInfo = useSelector((state) => state.userLoginInfo);
    const userMode = useSelector((state) => state.userInfo.userModeValue);
    const [feedbackData, setFeedbackData] = useState([
        {
            id: "1001",
            name: "John Doe",
            feedbackDate: "12 Dec, 2022",
            emailId: "doe.john@mail.com",
            mobileNumber: "+1 598 845 5698",
            Designation: "Teacher",
            feedback:"Good work"
        },
        {
            id: "1002",
            name: "Reyan Walker",
            feedbackDate: "12 Feb, 2023",
            emailId: "reyan.walker@mail.com",
            mobileNumber: "+96 894 265 9874",
            Designation: "Developer",
            feedback:"Interesting"
        },
        {
            id: "1003",
            name: "Prakash Singh",
            feedbackDate: "05 Nov, 2022",
            emailId: "prakash.singh@mail.com",
            mobileNumber: "+91 894 123 6548",
            Designation: "Govt. officer",
            feedback:"Helpfull"
        },
        {
            id: "1004",
            name: "Prity Yadav",
            feedbackDate: "19 Nov, 2022",
            emailId: "prity.yadav@mail.com",
            mobileNumber: "+91 456 987 4261",
            Designation: "Student",
            feedback:"Awesome"
        },
        {
            id: "1005",
            name: "Piter Parker",
            feedbackDate: "15 Dec, 2022",
            emailId: "piter.parker@mail.com",
            mobileNumber: "+1 945 569 1254",
            Designation: "Professor",
            feedback:"Helpfull"
        },
    ]);

    const classSchedule = [
        {
            days: "Monday",
            subject: "Maths",
            time: "9:30 am",
            class: "IX"
        },
        {
            days: "Tuesday",
            subject: "Maths",
            time: "10:30 am",
            class: "X"
        },
        {
            days: "Wednesday",
            subject: "Science",
            time: "11:30 am",
            class: "IX"
        },
        {
            days: "Thursday",
            subject: "Science",
            time: "12:30 am",
            class: "X"
        },
        {
            days: "Friday",
            subject: "English",
            time: "2:30 am",
            class: "IX"
        },
        {
            days: "Saturday",
            subject: "English",
            time: "3:30 am",
            class: "X"
        },
    ];

    const classTimetable = [
        {
            days: "Monday",
            subject: "Maths",
            time: "9:30 am",
            faculty: "Rakesh Yadav",
        },
        {
            days: "Tuesday",
            subject: "Maths",
            time: "10:30 am",
            faculty: "Prakash Singh",
        },
        {
            days: "Wednesday",
            subject: "Science",
            time: "11:30 am",
            faculty: "Zeeshan Alam",
        },
        {
            days: "Thursday",
            subject: "Science",
            time: "12:30 am",
            faculty: "Prakit Arora",
        },
        {
            days: "Friday",
            subject: "English",
            time: "2:30 am",
            faculty: "Preeti Singh",
        },
        {
            days: "Saturday",
            subject: "English",
            time: "3:30 am",
            faculty: "Pooja Shami",
        },
    ]

    const getActionButtons = () => {
        return (

            <span>
                <FaEdit className="act-btn" style={{ color: "#6777ef" }} />
                &ensp;
                <FaRegTrashAlt className="act-btn col-orange" />
            </span>

        );
    };

    return (
        <div >
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 multi-card parent-class">
                    <div className="chartcard card-statistic-2">
                        <div className="clearfix">
                            <div className="card-icon shadow-primary bg-purple" style={{ backgroundColor: "rgb(255 5 248)" }}>
                                <MdAssignment
                                    size={20}
                                    className="card-icon2"
                                    id="icon-design"
                                />
                            </div>
                            <div className="card-right">
                                <div>
                                    <h6 className="float-end">
                                        Total Blogs
                                    </h6>
                                </div>
                                <div className="m-r-10 m-l-10">
                                    <h4 className="float-end mb-0"> <strong>620</strong> </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-chart">
                            <p className="m-b-0">18% Higher Then Last Month</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 multi-card parent-class">
                    <div className="chartcard card-statistic-2">
                        <div className="clearfix">
                            <div className="card-icon shadow-primary bg-orange" style={{ backgroundColor: "blue" }}>
                                <FaFileMedical size={20} className="card-icon2" id="icon-design" />
                            </div>
                            <div className="card-right">
                                <div>
                                    <h6 className="float-end">
                                        New Blogs
                                    </h6>
                                </div>
                                <div className="m-r-10 m-l-10">
                                    <h4 className="float-end mb-0"> <strong>
                                        35
                                    </strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-chart">
                            <p className="m-b-0">25% Higher Then Last Month</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 multi-card parent-class">
                    <div className="chartcard card-statistic-2">
                        <div className="clearfix">
                            <div className="card-icon shadow-primary bg-green" style={{ backgroundColor: "green" }}>
                                <FaStarHalfAlt size={20} className="card-icon3" id="icon-design" />
                            </div>
                            <div className="card-right">
                                <div>
                                    <h6 className="float-end">
                                        Reviews
                                    </h6>
                                </div>
                                <div className="m-r-10 m-l-10">
                                    <h4 className="float-end mb-0"> <strong>
                                        126
                                    </strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-chart">
                            <p className="m-b-0">18% Higher Then Last Month</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 multi-card parent-class">
                    <div className="chartcard card-statistic-2">
                        <div className="clearfix">
                            <div className="card-icon shadow-primary bg-blue" style={{ backgroundColor: "#005d80" }}>
                                <FaChartLine
                                    size={20}
                                    className="card-icon4"
                                    id="icon-design"
                                />
                            </div>
                            <div className="card-right">
                                <div>
                                    <h6 className="float-end">
                                        Views
                                    </h6>
                                </div>
                                <div className="m-r-10 m-l-10">
                                    <h4 className="float-end mb-0"><strong>
                                        29,125
                                    </strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-chart">
                            <p className="m-b-0">38% Higher Then Last Month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3 rounded dataTable">
                {userMode == 1 ?
                    <div className=" col-sm-12 col-md-12 col-lg-12 rounded dataTable">
                        <div className="cl-card rounded dataTable" style={{ borderRadius: "2rem" }}>
                            <DataTable
                                value={feedbackData}
                                responsiveLayout="scroll"
                                className="p-datatable-customers w-100"
                                showGridlines={false}
                                dataKey="id"
                                filterDisplay="menu"
                                rows={10}
                                paginator
                                rowHover
                                stripedRows
                                header="Feebacks"
                                emptyMessage="No schedules found."
                                globalFilterFields={[
                                    'name',
                                    'emailId',
                                    'mobileNumber',
                                    'feedbackDate',
                                    'Designation',
                                    'feedback'
                                ]}
                            >
                                <Column field="name" header="Name" sortable></Column>
                                <Column
                                    field="emailId"
                                    header="Email"
                                    sortable
                                ></Column>
                                <Column
                                    field="mobileNumber"
                                    header="Mobile No."
                                    sortable
                                ></Column>
                                <Column
                                    field="Designation"
                                    header="Designation"
                                    sortable
                                ></Column>
                                <Column field="feedbackDate" header="Feedback Date" sortable></Column>
                                <Column
                                    field="feedback"
                                    header="Feedback"
                                    sortable
                                ></Column>
                            </DataTable>
                        </div>
                    </div>
                    : ""}
            </div>
        </div>
    )
}

export default Home