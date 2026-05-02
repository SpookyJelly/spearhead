import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className={styles.root}>
      <ScrollToTop />
      <Navbar
        onMenuToggle={() => setSidebarOpen(o => !o)}
        sidebarOpen={sidebarOpen}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className={styles.main} key={location.pathname}>
        <Outlet />
      </main>
    </div>
  )
}
