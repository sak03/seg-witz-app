import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import './layout.css'
import MobileFooter from 'src/components/MobileFooter'


const DefaultLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
      <div className="row mobileDiv" style={{ position: "fixed", bottom: "2px" }}>
        <div className="col-sm-12">
          <MobileFooter />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
