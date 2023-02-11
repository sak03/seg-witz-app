import React, { useRef } from 'react'
import { Divider } from 'primereact/divider';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from "primereact/utils";
import '../blogs/blog.css'
import { Toast } from "primereact/toast";


const Contact = () => {
  const toast = useRef(null);

  // === === report search formik === ===
  const feedbackFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      designation: "",
      country: "",
      feedback: "",
    },
    validate: (data) => {
      let errors = {};
      if (!data.firstName) {
        errors.firstName = "Please enter first name";
      }
      if (!data.lastName) {
        errors.lastName = "Please enter last name";
      }
      if (!data.email) {
        errors.email = "Please enter email id";
      }
      if (!data.mobileNo) {
        errors.mobileNo = "Please enter mobile number";
      }
      if (!data.designation) {
        errors.designation = "Please enter designation";
      }
      if (!data.country) {
        errors.country = "Please enter country";
      }
      if (!data.feedback) {
        errors.feedback = "Please enter summary.";
      }
      else if (data.feedback.length < 50) {
        errors.feedback = "feedback length must be greater than 50 charater. " + (50 - data.feedback.length) + " charater(s) is left.";
      }
      // console.log("summary>>>", data.summary);
      return errors;
    },
    onSubmit: (data) => {
      showConfirmMsg("success");
      console.log("feedback data>>>", data);
      feedbackFormik.resetForm();
    },
  });
  const isFeedbackFormFieldValid = (name) =>
    !!(feedbackFormik.touched[name] && feedbackFormik.errors[name]);
  const getFeedbackFormErrorMessage = (name) => {
    return (
      isFeedbackFormFieldValid(name) && (
        <small className="p-error">{feedbackFormik.errors[name]}</small>
      )
    );
  };

  // === feedback form === ===
  const feedbackForm = () => {
    return (
      <form onSubmit={feedbackFormik.handleSubmit}>
        <div className='row mx-2'>
          <div class="col-sm-12 col-md-6 col-lg-6 mt-4">
            <span className="p-float-label">
              <InputText
                id="firstName"
                value={feedbackFormik.values.firstName}
                onChange={feedbackFormik.handleChange}
                className={
                  (classNames({
                    "p-invalid": isFeedbackFormFieldValid("firstName"),
                  }),
                    "p-inputtext-sm w-100 borderClass")
                }
              />
              <label htmlFor="firstName">First Name</label>
            </span>
            {getFeedbackFormErrorMessage("firstName")}
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 mt-4">
            <span className="p-float-label">
              <InputText
                id="lastName"
                value={feedbackFormik.values.lastName}
                onChange={feedbackFormik.handleChange}
                className={
                  (classNames({
                    "p-invalid": isFeedbackFormFieldValid("lastName"),
                  }),
                    "p-inputtext-sm w-100 borderClass")
                }
              />
              <label htmlFor="lastName">Last Name</label>
            </span>
            {getFeedbackFormErrorMessage("lastName")}
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 mt-4">
            <span className="p-float-label">
              <InputText
                id="email"
                value={feedbackFormik.values.email}
                onChange={feedbackFormik.handleChange}
                className={
                  (classNames({
                    "p-invalid": isFeedbackFormFieldValid("email"),
                  }),
                    "p-inputtext-sm w-100 borderClass")
                }
              />
              <label htmlFor="email">Email Id</label>
            </span>
            {getFeedbackFormErrorMessage("email")}
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 mt-4">
            <span className="p-float-label">
              <InputText
                id="mobileNo"
                value={feedbackFormik.values.mobileNo}
                onChange={feedbackFormik.handleChange}
                className={
                  (classNames({
                    "p-invalid": isFeedbackFormFieldValid("mobileNo"),
                  }),
                    "p-inputtext-sm w-100 borderClass")
                }
              />
              <label htmlFor="mobileNo">Mobile No.</label>
            </span>
            {getFeedbackFormErrorMessage("mobileNo")}
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 mt-4">
            <span className="p-float-label">
              <InputText
                id="designation"
                value={feedbackFormik.values.designation}
                onChange={feedbackFormik.handleChange}
                className={
                  (classNames({
                    "p-invalid": isFeedbackFormFieldValid("designation"),
                  }),
                    "p-inputtext-sm w-100 borderClass")
                }
              />
              <label htmlFor="designation">Designation</label>
            </span>
            {getFeedbackFormErrorMessage("designation")}
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 mt-4">
            <span className="p-float-label">
              <InputText
                id="country"
                value={feedbackFormik.values.country}
                onChange={feedbackFormik.handleChange}
                className={
                  (classNames({
                    "p-invalid": isFeedbackFormFieldValid("country"),
                  }),
                    "p-inputtext-sm w-100 borderClass")
                }
              />
              <label htmlFor="country">Country</label>
            </span>
            {getFeedbackFormErrorMessage("country")}
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mt-5">
            <span className="p-float-label">
              <InputTextarea
                id="feedback"
                value={feedbackFormik.values.feedback}
                onChange={feedbackFormik.handleChange}
                rows={3}
                cols={30}
                className={
                  (classNames({
                    "p-invalid": isFeedbackFormFieldValid("feedback"),
                  }),
                    "p-inputtext-sm w-100 borderClass")
                }
              />
              <label htmlFor="feedback">Feedback</label>
            </span>
            {getFeedbackFormErrorMessage("feedback")}
          </div>
          <div className=" modal-footer d-flex justify-content-end my-3">
            <Button
              label="Submit"
              type="submit"
              className="bg-primary border-0  p-button-md  btn-color p-button-raised"
            />
            <Button
              label={"Reset"}
              type="reset"
              onClick={() => {
                feedbackFormik.resetForm();
              }}
              style={{ marginLeft: "10px" }}
              className=" bg-secondary border-0 p-button-md p-button-raised"
            />
          </div>
        </div>
      </form>
    )
  }

  // === show confirm msg === ===
  //===== user updated successfully message
  const showConfirmMsg = (siverty) => {
    toast.current.show({
      severity: siverty,
      summary: siverty === "success" ? "Submitted" : "Opps",
      detail:
        siverty === "success"
          ? "Your feedback has been successfully submitted"
          : "Something went wrong.",
      life: 3000,
    });
  };


  return (
    <div className='row mt-4'>
      <Toast ref={toast} />
      <div className="col-sm-1 col-md-1 col-lg-2 mb-2"></div>
      <div className="col-sm-10 col-md-10 col-lg-8 mb-2">
        <p className="card-text lh-base fw-bold">Hi… Hello</p>
        <p className="card-text lh-base">
          If you want to get a <b>product/service/brand</b>  review or
          maybe get your word out or if you are looking for some help or just to say hi.
          Do everything and anything from the email below. We will get back asap.</p>
        <p className="card-text lh-base">
          email: <b>sartaj@segwitzblog.com</b> </p>
        <Divider />
        <p className="card-text lh-base fw-bold">Feedback Form</p>
        {feedbackForm()}
      </div>
      <div className="col-sm-1 col-md-1 col-lg-2 mb-2"></div>
    </div>
  )
}

export default Contact;