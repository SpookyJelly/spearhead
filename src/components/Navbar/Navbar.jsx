import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({ onMenuToggle, sidebarOpen }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <button
          className={`${styles.hamburger} ${sidebarOpen ? styles.active : ''}`}
          onClick={onMenuToggle}
          aria-label="메뉴 열기/닫기"
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className={styles.brand}>
          <span className={styles.brandSub}>Age of Sigmar</span>
          <span className={styles.brandMain}>Spearhead</span>
        </Link>

        <div className={styles.ornament} aria-hidden="true">
          <span className={styles.ornamentLine} />
          <span className={styles.ornamentDiamond} />
          <span className={styles.ornamentLine} />
        </div>
      </div>
    </nav>
  )
}
