import React, { useEffect, useState, useCallback, useRef } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { useFormik } from "formik";
import './staff.css'
import axios from "axios";
import { ProgressSpinner } from "primereact/progressspinner";
import { InputSwitch } from 'primereact/inputswitch';
import { Toast } from 'primereact/toast';
import { TabView, TabPanel } from 'primereact/tabview';

const Staff = () => {
    const [viewMode, setViewMode] = useState(0);
    const [editMode, setEditMode] = useState(0);
    const [tenantLoading, setTenantLoading] = useState(false);
    const [showspinner, setshowspinner] = useState(false);
    const [tenantData1, settenantData1] = useState([]);
    const [tenantData2, settenantData2] = useState([]);
    const [statusSwitch, setStatusSwitch] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const toast = useRef(null);

    useEffect(() => {
        getAllstaffs();
    }, [])

    const tenantFormik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            mobile: "",
        },
        validate: (data) => {
            let errors = {};

            // ===== row first =======
            if (!data.fname) {
                errors.fname = "Please enter first name.";
            }
            if (!data.lname) {
                errors.lname = "Please enter last name.";
            }
            if (!data.email) {
                errors.email = "Please enter email id.";
            }
            if (!data.mobile) {
                errors.mobile = "Please enter mobile no.";
            }

            return errors;
        },
        onSubmit: (data) => {
            // addNewTenant(data);
            tenantFormik.resetForm();
            setViewMode(0);
        },
    });
    const isTenantFormFieldValid = (name) =>
        !!(tenantFormik.touched[name] && tenantFormik.errors[name]);
    const getTenantFormErrorMessage = (name) => {
        return (
            isTenantFormFieldValid(name) && (
                <small className="p-error">{tenantFormik.errors[name]}</small>
            )
        );
    };

    // get all staff data from API Server
    const getAllstaffs = async (data) => {
        setshowspinner(true);
        setTenantLoading(true);
        await axios
            .get(
                `https://dummyjson.com/users`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;",
                    },
                }
            )
            .then(
                (res) => {
                    const dt = res.data.users;
                    const ndt1 = dt.filter((item) => {
                        return item.id % 2 == 0
                    })
                    const ndt2 = dt.filter((item) => {
                        return item.id % 2 != 0
                    })
                    // console.log("ndt1", ndt1);
                    settenantData1(ndt1);
                    settenantData2(ndt2);

                    setshowspinner(false);
                    setTenantLoading(false);
                },
                (err) => {
                    console.log(err);
                    setshowspinner(false);
                    setTenantLoading(false);
                }
            );
    };

    const addTenantForm = () => {
        return (
            <form onSubmit={tenantFormik.handleSubmit}>
                <div className='mx-3 mt-3'>
                    <div className="d-flex justify-content-between mx-4">
                        <p className="text-primary">Basic Information</p>
                        <div className="d-flex mr-1 align-items-center">
                            <p className="para-publish">Status</p>
                            <InputSwitch
                                id="status"
                                name="status"
                                data-size="mini"
                                // checked={tenantFormik.values.status}
                                // onChange={tenantFormik.handleChange}
                                checked={statusSwitch}
                                onChange={(e) => setStatusSwitch(e.value)}
                            />
                        </div>
                    </div>
                    <div className="row mx-3 mt-2">
                        <div className=" col-sm-12 col-md-6 col-lg-6 mt-4">
                            <span className="p-float-label">
                                <InputText
                                    id="fname"
                                    value={tenantFormik.values.fname}
                                    onChange={tenantFormik.handleChange}
                                    className={
                                        (classNames({
                                            "p-invalid": isTenantFormFieldValid("fname"),
                                        }),
                                            "p-inputtext-sm w-100 borderClass")
                                    }
                                />
                                <label htmlFor="fname">First name<span className='text-danger'>*</span></label>
                            </span>
                            {getTenantFormErrorMessage("fname")}
                        </div>
                        <div className=" col-sm-12 col-md-6 col-lg-6 mt-4">
                            <span className="p-float-label">
                                <InputText
                                    id="lname"
                                    value={tenantFormik.values.lname}
                                    onChange={tenantFormik.handleChange}
                                    className={
                                        (classNames({
                                            "p-invalid": isTenantFormFieldValid("lname"),
                                        }),
                                            "p-inputtext-sm w-100 borderClass")
                                    }
                                />
                                <label htmlFor="lname">Last name<span className='text-danger'>*</span></label>
                            </span>
                            {getTenantFormErrorMessage("lname")}
                        </div>
                        <div className=" col-sm-12 col-md-6 col-lg-6 mt-4">
                            <span className="p-float-label">
                                <InputText
                                    id="email"
                                    value={tenantFormik.values.email}
                                    onChange={tenantFormik.handleChange}
                                    className={
                                        (classNames({
                                            "p-invalid": isTenantFormFieldValid("email"),
                                        }),
                                            "p-inputtext-sm w-100 borderClass")
                                    }
                                />
                                <label htmlFor="email">Email Id<span className='text-danger'>*</span></label>
                            </span>
                            {getTenantFormErrorMessage("email")}
                        </div>
                        <div className=" col-sm-12 col-md-6 col-lg-6 mt-4">
                            <span className="p-float-label">
                                <InputText
                                    id="mobile"
                                    value={tenantFormik.values.mobile}
                                    onChange={tenantFormik.handleChange}
                                    className={
                                        (classNames({
                                            "p-invalid": isTenantFormFieldValid("mobile"),
                                        }),
                                            "p-inputtext-sm w-100 borderClass")
                                    }
                                />
                                <label htmlFor="mobile">Mobile No.<span className='text-danger'>*</span></label>
                            </span>
                            {getTenantFormErrorMessage("mobile")}
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end my-3 mx-4">
                        <Button
                            label={editMode === 1 ? "Add" : "Update"}
                            type="submit"
                            className="bg-primary border-0  p-button-md  btn-color p-button-raised"
                        />
                        <Button
                            onClick={() => {
                                setViewMode(0);
                                tenantFormik.resetForm();
                            }}
                            label={"Cancel"}
                            style={{ marginLeft: "10px" }}
                            className="bg-danger border-0 p-button-md p-button-raised"
                        />
                    </div>
                </div>
            </form>
        )
    }

    // ==== row click handler =======
    const rowClickHandler = (rowdata) => {
        const dt = rowdata.data;
        // console.log(dt, "row data");
        setViewMode(1);
        setEditMode(2);
        setSelectedRowData(rowdata.data);
        tenantFormik.setFieldValue("fname", dt.firstName);
        tenantFormik.setFieldValue("lname", dt.lastName);
        tenantFormik.setFieldValue("email", dt.email);
        tenantFormik.setFieldValue("mobile", dt.phone);

    }


    const renderHeader1 = () => {
        return (
            <div className="row d-flex">
                <div className="col-lg-8">
                    <form
                    // onSubmit={searchFormik.handleSubmit}
                    >
                        <div className="row gap-lg-0 mt-lg-0">
                            <div className="col-sm-12 col-lg-4 mb-1">
                                <span className="p-input-icon-left w-100">
                                    <i className="pi pi-search" />
                                    <InputText
                                        // value={globalFilterValue1}
                                        // onChange={onGlobalFilterChange1}
                                        placeholder="Search name"
                                        className="p-inputtext-sm w-100"
                                        optionLabel="name"
                                        optionValue="name"
                                        filter={false}
                                    />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div
                    className="col-sm-12 col-md-12 col-lg-4 d-flex "
                    style={{ justifyContent: "right" }}
                >
                    <Button
                        label="Add Staff"
                        className="p-button-outlined p-button-primary p-button-md"
                        onClick={() => {
                            setEditMode(1);
                            setViewMode(1);
                        }}
                    />
                    <Button
                        style={{
                            marginLeft: "10px",
                        }}
                        role="button"
                        icon="pi pi-filter-slash"
                        label="Clear"
                        className="p-button-outlined p-button-md"
                    />
                </div>
            </div>
        );
    };
    const header1 = renderHeader1();

    return (
        <div className="row mb-2">
            <Toast ref={toast} />
            <TabView>
                <TabPanel header="Teaching Staff">
                    <div className="col-sm-12 rounded">
                        <div className="">
                            {viewMode === 1 ? (addTenantForm()) : (
                                <DataTable
                                    value={tenantData1}
                                    responsiveLayout="scroll"
                                    className="p-datatable-customers"
                                    showGridlines={false}
                                    rows={10}
                                    // stripedRows
                                    dataKey="id"
                                    paginator
                                    // filters={filters1}
                                    loading={tenantLoading}
                                    filterDisplay="menu"
                                    globalFilterFields={[
                                        "email",
                                        "user",
                                        "role",
                                        "city",
                                        "updatedDate",
                                        "status",
                                    ]}
                                    header={header1}
                                    onRowClick={rowClickHandler}
                                    emptyMessage="No tenants found."
                                >
                                    {/* <Column field="sNo" header="S. No." style={{ cursor: "pointer" }} sortable></Column> */}
                                    <Column
                                        header="Name"
                                        field="firstName"
                                        body={(rowdata) => rowdata.firstName + " " + rowdata.lastName}
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                    {/* <Column
                                        field="city"
                                        header="Location"
                                        body={(rd) => {
                                            let city = rd.address.city.charAt(0).toUpperCase() + rd.address.city.slice(1);
                                            return (
                                                <span>{city + ", " + rd.address.state.toUpperCase()}</span>
                                            )
                                        }}
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column> */}
                                    <Column
                                        header="email"
                                        field="email"
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                    <Column
                                        field="phone"
                                        header="Phone"
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                    <Column
                                        field="username"
                                        header="Username"
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                    <Column
                                        field="gender"
                                        header="gender"
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                </DataTable>)}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel header="Non-Teaching Staff">
                    <div className="col-sm-12 rounded">
                        <div className="">
                            {viewMode === 1 ? (addTenantForm()) : (
                                <DataTable
                                    value={tenantData2}
                                    responsiveLayout="scroll"
                                    className="p-datatable-customers"
                                    showGridlines={false}
                                    rows={10}
                                    // stripedRows
                                    dataKey="id"
                                    paginator
                                    // filters={filters1}
                                    loading={tenantLoading}
                                    filterDisplay="menu"
                                    globalFilterFields={[
                                        "email",
                                        "user",
                                        "role",
                                        "city",
                                        "updatedDate",
                                        "status",
                                    ]}
                                    header={header1}
                                    onRowClick={rowClickHandler}
                                    emptyMessage="No tenants found."
                                >
                                    {/* <Column field="sNo" header="S. No." style={{ cursor: "pointer" }} sortable></Column> */}
                                    <Column
                                        header="Name"
                                        field="firstName"
                                        body={(rowdata) => rowdata.firstName + " " + rowdata.lastName}
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                    {/* <Column
                                        field="city"
                                        header="Location"
                                        body={(rd) => {
                                            let city = rd.address.city.charAt(0).toUpperCase() + rd.address.city.slice(1);
                                            return (
                                                <span>{city + ", " + rd.address.state.toUpperCase()}</span>
                                            )
                                        }}
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column> */}
                                    <Column
                                        header="email"
                                        field="email"
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                    <Column
                                        field="phone"
                                        header="Phone"
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                    <Column
                                        field="username"
                                        header="Username"
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                    <Column
                                        field="gender"
                                        header="gender"
                                        style={{ cursor: "pointer" }}
                                        sortable
                                    ></Column>
                                </DataTable>)}
                        </div>
                    </div>
                </TabPanel>
            </TabView>
            {showspinner && (
                <div className="spinner-div">
                    <ProgressSpinner />
                </div>
            )}
        </div>
    )
}

export default Staff