import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Reception = React.lazy(() => import('./views/reception/Reception'))
const Transfert = React.lazy(() => import('./views/transfert/Transfert'))
const Inventaire = React.lazy(() => import('./views/inventaire/Inventaire'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/reception', name: 'Reception', element: Reception },
  { path: '/transfert', name: 'Transfert', element: Transfert },
  { path: '/inventaire', name: 'Inventaire', element: Inventaire },
]

export default routes
