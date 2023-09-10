import React from 'react'
import CIcon from '@coreui/icons-react'

import { CNavItem } from '@coreui/react'
import { cilSpeedometer, cilSend, cilInput , cilCalculator} from '@coreui/icons'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Réception',
    to: '/reception',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Transfert',
    to: '/transfert',
    icon: <CIcon icon={cilSend} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Inventaire',
    to: '/inventaire',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />
  },
]

export default _nav
