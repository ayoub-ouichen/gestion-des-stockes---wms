import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Reception = React.lazy(() => import('./views/reception/Reception'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/reception', name: 'Reception', element: Reception },
]

export default routes
