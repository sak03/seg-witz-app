import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div classNameName="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow classNameName="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard classNameName="mx-4">
              <CCardBody classNameName="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p classNameName="text-medium-emphasis">Create your account</p>
                  <CInputGroup classNameName="mb-3">
                    {/* <CInputGroupText> */}
                      {/* <CIcon icon={cilUser} /> */}
                    {/* </CInputGroupText> */}
                    <CFormInput placeholder="Name" autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup classNameName="mb-3">
                    {/* <CInputGroupText>@</CInputGroupText> */}
                    <CFormInput placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup classNameName="mb-3">
                    {/* <CInputGroupText> */}
                      {/* <CIcon icon={cilLockLocked} /> */}
                    {/* </CInputGroupText> */}
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup classNameName="mb-4">
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div classNameName="d-flex justify-content-between">
                    <CButton color="secondary"><Link to='/login' style={{textDecoration:"none"}} classNameName="text-light">Cancel</Link></CButton>
                    <CButton color="primary">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
