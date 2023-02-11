import React from 'react'
import {
    CHeaderNav,
    CNavLink,
    CNavItem,
} from "@coreui/react";
import { NavLink } from "react-router-dom";
import {
    FaUserAlt,
    FaUniversity,
    FaHouseUser,
    FaBlog,
} from "react-icons/fa";
import './appHeader.css'

const MobileFooter = () => {

    return (
        <div>
            <CHeaderNav className=" d-md-flex me-auto header-nav-body py-1 align-items-center justify-content-between mobile-mode-footer" style={{ backgroundColor: "rgb(255 255 255)", width: "100vw", paddingBottom: "2px" }}>
                <CNavItem>
                    <CNavLink
                        to="/home"
                        className="mx-4 header-link"
                        component={NavLink}
                    >
                        <span>
                            <FaHouseUser className="header-icon" />
                        </span>
                        <span className="header-text" style={{ paddingLeft: "8px" }}>Home</span>
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                        to="/blogs"
                        className="mx-2 header-link"
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
                        className="mx-2 header-link"
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
                        className="mx-4 header-link"
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
    )
}

export default MobileFooter
