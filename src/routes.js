import React from 'react'

const Profile = React.lazy(() => import('./views/profile/Profile'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  
  { path: '/account', name: 'account', element: Profile },
  { path: '/profile', name: 'profile', element: Profile },
]

export default routes
