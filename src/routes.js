import { element } from 'prop-types'
import React from 'react'

// ========= admin ============
const Home = React.lazy(() => import('./views/admin/home/Home'))
const About = React.lazy(() => import('./views/admin/about/About'))
const Contact = React.lazy(() => import('./views/admin/contact/Contact'))
const Blogs = React.lazy(() => import('./views/admin/blogs/Blogs'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Home },

  // ============ admin ==============
  { path: '/home', name: 'Home', element: Home },
  { path: '/blogs', name: 'Blogs', element: Blogs },
  { path: "/about", name: "About", element: About },
  { path: "/contact", name: "Contact", element: Contact },
]

export default routes
