import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import {
  FaUserAlt,
  FaUniversity,
  FaHouseUser,
  FaBriefcase,
  FaRegAddressCard,
  FaFileInvoice,
} from "react-icons/fa";
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { sidebarSow } from '../redux/action'
import logo from "../../src/assets//images/AceScan_logo.png";
import './appHeader.css'

const AppHeader = () => {
  const loginInfo1 = localStorage.getItem("loginInfo");
  const loginInfo = JSON.parse(loginInfo1);
  const tokeninfo1 = localStorage.getItem("tokeninfo");
  const tokeninfo = JSON.parse(tokeninfo1);
  const dispatch = useDispatch();
  const userInfo1 = localStorage.getItem("userInfo");
  // const userInfo = JSON.parse(userInfo1);
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);
  const userInfo = useSelector((state) => state.userLoginInfo);
  // console.log("userInfo", userInfo)

  return (
    <>
      <CHeader position="sticky" className="mb-2">
        <CContainer fluid>
          <div className="d-flex justify-content-start">
            {/* <CHeaderToggler
              className="ps-1"
              // onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
              // onClick={() => dispatch(setSidebar({ sidebarShow: !sidebarShow }))}
              onClick={() => dispatch(setSidebar(!sidebarShow))}
            >
              {loginInfo.user.role === "Account Manager" ||
                loginInfo.user.role === "Recruiter" ? (
                ""
              ) : (
                <CIcon icon={cilMenu} size="lg" />
              )}
              {loginInfo.user.role === "Account Manager" ||
                loginInfo.user.role === "Recruiter" ? (
                <img
                  src={tenantOnId === null ? "" : tenantOnId.tenantLogo}
                  className="sidebar-brand-full"
                />
              ) : (
                ""
              )}
            </CHeaderToggler> */}
            {/* {loginInfo.user.role === "Platform Admin" ? (
              <div className="align-items-center">
                <Dropdown
                  // id="tenantId"
                  // name="tenantId"
                  options={tenantList}
                  value={tenantMember}
                  onChange={onChangeMembar}
                  optionLabel="name"
                  className=""
                  style={{ zIndex: "9999", borderBottom: "0" }}
                  filter={false}
                  placeholder="Select tenant admin"
                />
              </div>
            ) : (
              ""
            )} */}
          </div>
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center mobileMode">
              <CHeaderNav className="d-none d-md-flex me-auto header-nav-body">
                <CNavItem>
                  <CNavLink
                    to="/dashboard"
                    className="mx-4 header-link"
                    component={NavLink}
                  >
                    <span>
                      <FaHouseUser className="header-icon" />
                    </span>
                    <span className="header-text">Dashboard</span>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    to="/candidates"
                    className="mx-4 header-link"
                    component={NavLink}
                  >
                    <span>
                      <FaUserAlt className="header-icon" />
                    </span>
                    <span className="header-text">Candidates</span>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    to="/customers"
                    className="mx-4 header-link"
                    component={NavLink}
                  >
                    <span>
                      {" "}
                      <FaUniversity className="header-icon" />
                    </span>
                    <span className="header-text">Customers</span>
                  </CNavLink>
                </CNavItem>
                {/* <CNavItem>
                  {loginInfo.user.role === "Account Manager" ||
                    loginInfo.user.role === "Recruiter" ? (
                    <CNavLink
                      to="/jobs"
                      className="mx-4 header-link"
                      component={NavLink}
                    >
                      <span>
                        <FaBriefcase
                          className="header-icon"
                          style={{ width: "1.5rem" }}
                        />
                      </span>
                      <span className="header-text">Jobs</span>
                    </CNavLink>
                  ) : (
                    ""
                  )}
                </CNavItem> */}
                {/* <CNavItem>
                  {loginInfo.user.role === "Account Manager" ||
                    loginInfo.user.role === "Recruiter" ? (
                    <CNavLink
                      to="/reports"
                      className="mx-4 header-link"
                      component={NavLink}
                    >
                      <span>
                        <FaFileInvoice
                          className="header-icon"
                          style={{ width: "2rem" }}
                        />
                      </span>
                      <span className="header-text">Reports</span>
                    </CNavLink>
                  ) : (
                    ""
                  )}
                </CNavItem> */}
              </CHeaderNav>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <CHeaderNav className="ms-3">
              {/* {recruiterStatus == "Alert Month" ? (
                <span
                  className="d-flex align-items-center"
                  style={{ color: "#FFC107" }}
                >
                  <span className="me-1">Alert</span>
                  <span>
                    <GoAlert size={18} />
                  </span>
                </span>
              ) : recruiterStatus == "Speed" ? (
                <span
                  className="d-flex align-items-center"
                  style={{ color: "#198754" }}
                >
                  <span className="me-1">{recruiterStatus}</span>{" "}
                  <span>
                    <HiThumbUp size={18} />
                  </span>
                </span>
              ) : recruiterStatus == "Good" ? (
                <span
                  className="d-flex align-items-center"
                  style={{ color: "#198754" }}
                >
                  <span className="me-1">{recruiterStatus}</span>{" "}
                  <span>
                    <HiThumbUp size={18} />
                  </span>
                </span>
              ) : recruiterStatus == "Smooth" ? (
                <span
                  className="d-flex align-items-center"
                  style={{ color: "#198754" }}
                >
                  <span className="me-1">Smooth</span>{" "}
                  <span>
                    <GiCheckMark size={18} />
                  </span>
                </span>
              ) : recruiterStatus == "Crisis Month" ? (
                <span
                  className="d-flex align-items-center"
                  style={{ color: "#DC3545" }}
                >
                  <span className="me-2">Crisis</span>{" "}
                  <span>
                    <FiTrendingDown size={18} />
                  </span>
                </span>
              ) : (
                ""
              )} */}

              <AppHeaderDropdown />
            </CHeaderNav>
          </div>
        </CContainer>

        <CHeaderDivider style={{ marginTop: "0", marginBottom: "2px" }} />
        <CContainer fluid style={{ margin: "-0.5rem 0.5rem" }}>
          <AppBreadcrumb />
          {/* <div className="d-flex ">
            <small className="me-3 fw-bold" style={{ marginTop: '2px' }}>
              <span className="text-secondary">
                Total:&nbsp;
              </span>
              {allCandidateCount?.totalCount}
            </small> &nbsp;
            <small className="me-3 fw-bold" style={{ marginTop: '2px' }}>
              <span className="text-secondary">
                Pool Count:&nbsp;
              </span>
              <span className="text-danger">{allCandidateCount?.poolCount}</span>
            </small>
            {loginInfo.user.role === "Recruiter" ||
              loginInfo.user.role === "Account Manager"
              ? checkQuarterlyData()
              : ""}

          </div> */}
        </CContainer>
      </CHeader>
    </>
  )
}

export default AppHeader
