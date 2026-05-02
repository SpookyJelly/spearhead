import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const FEEDBACK_URL = 'https://forms.gle/YOUR_FORM_ID'

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

        <a
          href={FEEDBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.feedbackBtn}
        >
          <svg className={styles.feedbackIcon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 12.5A5.5 5.5 0 1 1 8 2.5a5.5 5.5 0 0 1 0 11zm.75-3.25H7.25v1.5h1.5v-1.5zm0-6H7.25v4.5h1.5v-4.5z" fill="currentColor"/>
          </svg>
          버그 제보
        </a>
      </div>
    </nav>
  )
}
