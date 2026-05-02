import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className={styles.root}>
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
