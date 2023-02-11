import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <CFooter>
      <div>
        <span classNameName='text-primary'>
         SEGWITZ
        </span>
        <span classNameName="ms-1">&copy; {year} </span>
      </div>
      <div classNameName="ms-auto">
        <span classNameName="me-1">Powered by</span>
        <span classNameName='text-primary'>
        SEGWITZ
        </span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
