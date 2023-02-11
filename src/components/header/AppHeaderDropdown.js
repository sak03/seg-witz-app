import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilLockLocked,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Avatar } from 'primereact/avatar';
import { useSelector } from "react-redux";

const AppHeaderDropdown = () => {
  const userMode = useSelector((state)=>state.userInfo.userModeValue);
  const userInfo = useSelector((state)=>state.userLoginInfo);

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" classNameName="py-0" caret={false}>
        <Avatar
          label={userInfo?.name.charAt(0).toUpperCase()}
          classNameName="p-2 my-1"
          size="small"
          shape="circle"
        />
      </CDropdownToggle>
      <CDropdownMenu classNameName="pt-0" placement="bottom-end">
        <CDropdownHeader classNameName="bg-light fw-semibold py-2">{userInfo?.role}</CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilUser} classNameName="me-2" />
          {userInfo?.name}
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem >
          <CIcon icon={cilLockLocked} classNameName="me-2" />
          <a href="#" rel="noopener noreferrer" classNameName='text-dark' style={{textDecoration:"none"}}>
            Log out
          </a>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
