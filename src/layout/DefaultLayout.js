import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import './layout.css'
import MobileFooter from 'src/components/MobileFooter'


const DefaultLayout = () => {
  return (
    <div>
      <div classNameName="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div classNameName="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
      <div classNameName="row mobileDiv" style={{ position: "fixed", bottom: "2px" }}>
        <div classNameName="col-sm-12">
          <MobileFooter />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
