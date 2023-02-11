import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CNavLink,
  CNavItem,
  CHeaderToggler,
} from '@coreui/react'
import {
  FaUserAlt,
  FaUniversity,
  FaHouseUser,
  FaBlog,
} from "react-icons/fa";
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import logo from "../../src/assets//images/AceScan_logo.png";
import './appHeader.css'

const AppHeader = () => {
  const userInfo1 = localStorage.getItem("userInfo");
  const userInfo = useSelector((state) => state.userLoginInfo);

  return (
    <>
      <CHeader position="sticky" className="mb-2">
        <CContainer fluid>
          <div className="d-flex justify-content-start">
            <CHeaderToggler className="ps-1">
              <img src={logo} className="sidebar-brand-full" />
            </CHeaderToggler>
          </div>
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center mobileMode">
              <CHeaderNav className="d-none d-md-flex me-auto header-nav-body">
                <CNavItem>
                  <CNavLink
                    to="/home"
                    className="mx-3 header-link"
                    component={NavLink}
                  >
                    <span>
                      <FaHouseUser className="header-icon" />
                    </span>
                    <span className="header-text mx-2"> Home</span>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    to="/blogs"
                    className="mx-4 header-link"
                    component={NavLink}
                  >
                    <span>
                      <FaBlog className="header-icon" />
                    </span>
                    <span className="header-text mx-2">Blogs</span>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    to="/about"
                    className="mx-4 header-link"
                    component={NavLink}
                  >
                    <span>
                      <FaUserAlt className="header-icon" />
                    </span>
                    <span className="header-text mx-2">About</span>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    to="/contact"
                    className="mx-3 header-link"
                    component={NavLink}
                  >
                    <span>
                      {" "}
                      <FaUniversity className="header-icon" />
                    </span>
                    <span className="header-text mx-1">Contact</span>
                  </CNavLink>
                </CNavItem>
              </CHeaderNav>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <CHeaderNav className="ms-3">
              <AppHeaderDropdown />
            </CHeaderNav>
          </div>
        </CContainer>
        <CHeaderDivider style={{ marginTop: "0", marginBottom: "2px" }} />
        <CContainer fluid style={{ margin: "-0.5rem 0.5rem" }}>
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
    </>
  )
}

export default AppHeader
