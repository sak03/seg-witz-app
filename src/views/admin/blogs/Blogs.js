import React, { useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import Food from './tabs/Food';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FileUpload } from 'primereact/fileupload';
import { Editor } from 'primereact/editor';
import { classNames } from "primereact/utils";
import { useFormik } from "formik";
import { Dropdown } from 'primereact/dropdown';
import Fitness from './tabs/Fitness';

const Blogs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [viewMode, setViewMode] = useState(0);
    const blogType = [
        { name: "Food Blog" },
        { name: "Health and fitness blogs" },
        { name: "Fashion and beauty blogs" },
    ]

    // === === report search formik === ===
    const blogFormik = useFormik({
        initialValues: {
            title: "",
            type: "",
            uploadImage: "",
            summary: "",
        },
        validate: (data) => {
            let errors = {};
            if (!data.title) {
                errors.title = "Please enter title of your blog";
            }
            if (!data.type) {
                errors.type = "Please select type of your blog";
            }
            if (!data.summary) {
                errors.summary = "Please enter summary.";
            }
            else if (data.summary.length < 100) {
                errors.summary = "Summary length must be greater than 100 Charater. " + (100 - data.summary.length) + " charater(s) is left.";
            }
            // console.log("summary>>>", data.summary);
            return errors;
        },
        onSubmit: (data) => {
            console.log("form data>>>", data);
        },
    });
    const isBlogFormFieldValid = (name) =>
        !!(blogFormik.touched[name] && blogFormik.errors[name]);
    const getBlogFormErrorMessage = (name) => {
        return (
            isBlogFormFieldValid(name) && (
                <small className="p-error">{blogFormik.errors[name]}</small>
            )
        );
    };

    const addBlogForm = () => {
        return (
            <form onSubmit={blogFormik.handleSubmit}>
                <div className='row mx-2'>
                    <div class="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <span className="p-float-label">
                            <InputText
                                id="title"
                                value={blogFormik.values.title}
                                onChange={blogFormik.handleChange}
                                className={
                                    (classNames({
                                        "p-invalid": isBlogFormFieldValid("title"),
                                    }),
                                        "p-inputtext-sm w-100 borderClass")
                                }
                            />
                            <label htmlFor="title">Title</label>
                        </span>
                        {getBlogFormErrorMessage("title")}
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <span className="p-float-label">
                            <Dropdown
                                id='type'
                                inputId="dropdown"
                                options={blogType}
                                value={blogFormik.values.type}
                                onChange={blogFormik.handleChange}
                                className={
                                    (classNames({
                                        "p-invalid": isBlogFormFieldValid("type"),
                                    }),
                                        "p-inputtext-sm w-100 borderClass")
                                }
                                optionLabel="name"
                            />
                            <label htmlFor="type">Blog Type</label>
                        </span>
                        {getBlogFormErrorMessage("type")}
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 mt-4 my-4">
                        <span className="">
                            <FileUpload
                                id='uploadImage'
                                mode="basic"
                                name="demo[]"
                                url="https://primefaces.org/primereact/showcase/upload.php"
                                accept="image/*"
                                maxFileSize={1000000}
                                onUpload={blogFormik.values.uploadImage}
                            />
                        </span>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <span className="">
                            <Editor
                                id='summary'
                                name='summary'
                                style={{ height: '220px' }}
                                value={blogFormik.values.summary}
                                onTextChange={(e) => {
                                    blogFormik.handleChange(e.htmlValue)
                                }}
                                className={
                                    (classNames({
                                        "p-invalid": isBlogFormFieldValid("summary"),
                                    }),
                                        "p-inputtext-sm w-100 borderClass")
                                }
                                placeholder='Please write about blog in brief'
                            />
                        </span>
                        {getBlogFormErrorMessage("summary")}
                    </div>
                    <div className=" modal-footer d-flex justify-content-end my-3">
                        <Button
                            label="Add"
                            type="submit"
                            className="bg-primary border-0  p-button-md  btn-color p-button-raised"
                        />
                        <Button
                            label={"Cancel"}
                            onClick={() => {
                                setViewMode(0)
                                blogFormik.resetForm();
                            }}
                            style={{ marginLeft: "10px" }}
                            className=" bg-danger border-0 p-button-md p-button-raised"
                        />
                    </div>
                </div>
            </form>
        )
    }

    const renderHeader = () => {
        return (
            <div>
                <Button
                    label="Add new blog"
                    aria-label="Submit"
                    onClick={() => {
                        setViewMode(1);
                    }}
                />
            </div>
        )
    }
    const header = renderHeader();
    return (
        <>
            <div className='row mx-1'>
                <div className='col-lg-12 fs-2 text-center my-2 text-primary'>
                    Join a world-class community of digital workplace leaders
                </div>
                <div className='col-lg-12 text-start lh-base'>
                    The power to change how work gets done is in the hands of digital workplace leaders, and the stakes have never been higher. Organizations must redefine culture, connection, and creativity to thrive in a world of hybrid and flexible work.
                    The future of work requires radical transformation and advancement of your digital employee experience to optimize the impact of your technology and talent.
                    Whether you’re responsible for digital workplace strategy, applications, architecture, infrastructure, or operations, we’ve got you covered. Join us at the Gartner Digital Workplace Summit as you lead the charge to change work.
                </div>
            </div>
            <div className='d-flex align-items-end justify-content-end mx-1'>
                <span>{header}</span>
            </div>
            <div className='mt-3'>
                <TabView
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                >
                    <TabPanel header="Food Blogs">
                        {viewMode !== 0 && activeIndex === 0 ? addBlogForm() :
                            <Food />}
                    </TabPanel>
                    <TabPanel header="Health and fitness blogs">
                        {viewMode !== 0 && activeIndex === 1 ? addBlogForm() :
                            <Fitness />}
                    </TabPanel>
                    {/* <TabPanel header="Fashion and beauty blogs">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </TabPanel> */}

                </TabView>
            </div>
        </>
    )
}

export default Blogs