import React, { useState } from 'react'
import {
    FaUserPlus,
    FaStarHalfAlt,
    FaEdit,
    FaRegTrashAlt,
    FaChartLine,
} from "react-icons/fa";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MdAssignment } from "react-icons/md";
import { useSelector } from "react-redux";
import "./dashboard.css";
import Chart from 'react-apexcharts'

const Dasshboard = () => {
    const userInfo = useSelector((state)=>state.userLoginInfo);
    const userMode = useSelector((state)=>state.userInfo.userModeValue);
    const [hsurvey, sethsurvey] = useState({
        series: [
            {
                name: "Application Accepted",
                data: [31, 40, 38, 41, 36, 50],
            },
            {
                name: "Application Rejected",
                data: [21, 32, 45, 32, 34, 41],
            },
        ],

        options: {
            colors: ["#247BA0", "#878080"],
            chart: {
                height: 350,
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "string",
                categories: [
                    "10 oct",
                    "12 oct",
                    "18 oct",
                    "24 oct",
                    "26 oct",
                    "28 oct",
                ],
                labels: {
                    style: {
                        color: ["#555"],
                    },
                },
            },
            title: {
                text: "Application Survey",
                align: "left",
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: "17px",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    color: "#5b626b",
                },
            },
            legend: {
                show: true,
                position: "top",
                horizontalAlign: "center",
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        },
    });
    const [applicant, setapplicant] = useState({
        series: [
            {
                name: "Full Time Students",
                data: [44, 55, 41, 67, 22, 43],
            },
            {
                name: "Part Time Students",
                data: [13, 23, 20, 8, 13, 27],
            },
            {
                name: "Online Students",
                data: [11, 17, 15, 15, 21, 14],
            },
            {
                name: "Training",
                data: [21, 7, 25, 13, 22, 8],
            },
            {
                name: "Contract",
                data: [13, 23, 20, 8, 13, 27],
            },
        ],
        options: {
            colors: ["#33c6bb", "#5f6b6d", "#fd817e", "#f4d33f"],
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: true,
                },
                zoom: {
                    enabled: true,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                },
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "01/01/2011 GMT",
                    "01/02/2011 GMT",
                    "01/03/2011 GMT",
                    "01/04/2011 GMT",
                    "01/05/2011 GMT",
                    "01/06/2011 GMT",
                ],
            },
            title: {
                text: "Students Summary by Months",
                align: "left",
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: "17px",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    color: "#5b626b",
                },
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
            plotOptions: {
                bar: {
                    s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: "flat",
                    e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: "flat",
                    borderRadius: 0,
                    columnWidth: "35%",
                },
            },
        },
    });
    const [interviews, setinterviews] = useState([
        {
            id: "1001",
            name: "John Doe",
            appliedDate: "12 Dec, 2022",
            interviewDate: "12 Jan, 2023",
            appliedFor: "Teaching",
        },
        {
            id: "1002",
            name: "Reyan",
            appliedDate: "12 Feb, 2023",
            interviewDate: "Wating",
            appliedFor: "Non-Teaching",
        },
        {
            id: "1003",
            name: "Prakash Singh",
            appliedDate: "05 Nov, 2022",
            interviewDate: "12 Mar, 2022",
            appliedFor: "Teaching",
        },
        {
            id: "1004",
            name: "Prity Yadav",
            appliedDate: "19 Nov, 2022",
            interviewDate: "Waiting",
            appliedFor: "Non-Teaching",
        },
        {
            id: "1005",
            name: "Piter Parker",
            appliedDate: "15 Dec, 2022",
            interviewDate: "Waiting",
            appliedFor: "Teaching",
        },
    ]);

    const classSchedule = [
        {
            days:"Monday",
            subject:"Maths",
            time:"9:30 am",
            class:"IX"
        },
        {
            days:"Tuesday",
            subject:"Maths",
            time:"10:30 am",
            class:"X"
        },
        {
            days:"Wednesday",
            subject:"Science",
            time:"11:30 am",
            class:"IX"
        },
        {
            days:"Thursday",
            subject:"Science",
            time:"12:30 am",
            class:"X"
        },
        {
            days:"Friday",
            subject:"English",
            time:"2:30 am",
            class:"IX"
        },
        {
            days:"Saturday",
            subject:"English",
            time:"3:30 am",
            class:"X"
        },
    ];

    const classTimetable = [
        {
            days:"Monday",
            subject:"Maths",
            time:"9:30 am",
            faculty:"Rakesh Yadav",
        },
        {
            days:"Tuesday",
            subject:"Maths",
            time:"10:30 am",
            faculty:"Prakash Singh",
        },
        {
            days:"Wednesday",
            subject:"Science",
            time:"11:30 am",
            faculty:"Zeeshan Alam",
        },
        {
            days:"Thursday",
            subject:"Science",
            time:"12:30 am",
            faculty:"Prakit Arora",
        },
        {
            days:"Friday",
            subject:"English",
            time:"2:30 am",
            faculty:"Preeti Singh",
        },
        {
            days:"Saturday",
            subject:"English",
            time:"3:30 am",
            faculty:"Pooja Shami",
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
    const renderHeader = () => {
        return (
            <div>
                <h4>
                    {userMode == 1 ? "Interview Schedules" :
                        userMode == 2 ? "Class Schedule" : "Class Schedule"}
                </h4>
            </div>
        )
    }

    const header1 = renderHeader();

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
                                        {userMode == 1 ? "Success Students" :
                                            userMode == 2 ? "Present Students" : "Todays Class"}
                                    </h6>
                                </div>
                                <div className="m-r-10 m-l-10">
                                    <h4 className="float-end mb-0"> <strong>
                                        {userMode == 1 ? "620" :
                                            userMode == 2 ? "300" : "5"}
                                    </strong> </h4>
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
                                <FaUserPlus size={20} className="card-icon2" id="icon-design" />
                            </div>
                            <div className="card-right">
                                <div>
                                    <h6 className="float-end">
                                        {userMode == 1 ? "New Adminssion" :
                                            userMode == 2 ? "Absent Students" : "Off Class"}
                                    </h6>
                                </div>
                                <div className="m-r-10 m-l-10">
                                    <h4 className="float-end mb-0"> <strong>
                                        {userMode == 1 ? "350" :
                                            userMode == 2 ? "35" : "2"}
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
                                        {userMode == 1 ? "Reviews" :
                                            userMode == 2 ? "Feedback" : "Report"}
                                    </h6>
                                </div>
                                <div className="m-r-10 m-l-10">
                                    <h4 className="float-end mb-0"> <strong>
                                        {userMode == 1 ? "126" :
                                            userMode == 2 ? "23" : "9"}
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
                                        {userMode == 1 ? "Views" :
                                            userMode == 2 ? "Views" : "Views"}
                                    </h6>
                                </div>
                                <div className="m-r-10 m-l-10">
                                    <h4 className="float-end mb-0"><strong>
                                        {userMode == 1 ? "29,125" :
                                            userMode == 2 ? "29" : "6"}
                                    </strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-chart">
                            <p className="m-b-0">18% Higher Then Last Month</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ............... second paragraph Performance................... */}
            {userMode == 1 || userMode == 1 ?
                <div className="row chartData">
                    <div className="col-lg-6 bg-white chart-left">
                        <span className="">
                            <Chart
                                options={hsurvey.options}
                                series={hsurvey.series}
                                type="area"
                                height={350}
                            />
                            {/* </div> */}
                        </span>
                    </div>
                    <div className="col-lg-6 bg-white chart-right">
                        <span className="">
                            <Chart
                                options={applicant.options}
                                series={applicant.series}
                                type="bar"
                                height={350}
                            />
                        </span>
                    </div>
                </div> : ""}
            {/* .............Third Paragraph interview table........... */}
            <div className="row my-3 rounded dataTable mx-1">
                {userMode == 1 ? <div className=" col-sm-12 col-md-12 col-lg-12 rounded dataTable">
                    <div className="cl-card rounded dataTable" style={{ borderRadius: "2rem" }}>
                        <DataTable
                            value={interviews}
                            responsiveLayout="scroll"
                            className="p-datatable-customers"
                            showGridlines={false}
                            dataKey="id"
                            filterDisplay="menu"
                            rows={10}
                            rowHover
                            stripedRows
                            header={header1}
                            emptyMessage="No schedules found."
                        >
                            <Column field="name" header="Applicant Name"></Column>
                            <Column field="appliedDate" header="Application date"></Column>
                            <Column
                                field="appliedFor"
                                header="Post Applied"
                            ></Column>
                            <Column
                                field="interviewDate"
                                header="Interview date"
                            ></Column>
                            <Column
                                field=""
                                header="Actions"
                                body={getActionButtons}
                            ></Column>
                        </DataTable>
                    </div>
                </div> : userMode == 2 ?
                    <div className="cl-card rounded dataTable" style={{ borderRadius: "2rem" }}>
                        <DataTable
                            value={classSchedule}
                            responsiveLayout="scroll"
                            className="p-datatable-customers"
                            showGridlines={false}
                            dataKey="id"
                            filterDisplay="menu"
                            rows={10}
                            rowHover
                            stripedRows
                            header={header1}
                            emptyMessage="No schedules found."
                        >
                            <Column
                                field="days"
                                header="Days"
                            ></Column>
                            <Column
                                field="subject"
                                header="Subject"
                            ></Column>
                            <Column
                                field="time"
                                header="Time"
                            ></Column>
                            <Column
                                field="class"
                                header="Class"
                            ></Column>
                        </DataTable>
                    </div>
                    :
                    <div className="cl-card rounded dataTable" style={{ borderRadius: "2rem" }}>
                        <DataTable
                            value={classTimetable}
                            responsiveLayout="scroll"
                            className="p-datatable-customers"
                            showGridlines={false}
                            dataKey="id"
                            filterDisplay="menu"
                            rows={10}
                            rowHover
                            stripedRows
                            header={header1}
                            emptyMessage="No schedules found."
                        >
                            <Column
                                field="days"
                                header="Days"
                            ></Column>
                            <Column
                                field="subject"
                                header="Subject"
                            ></Column>
                            <Column
                                field="time"
                                header="Time"
                            ></Column>
                            <Column
                                field="faculty"
                                header="Faculty"
                            ></Column>
                        </DataTable>
                    </div>
                }
            </div>
        </div>
    )
}

export default Dasshboard