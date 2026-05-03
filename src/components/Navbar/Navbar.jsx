import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { factions } from '../../data/factions'

const FEEDBACK_URL = 'https://forms.gle/YOUR_FORM_ID'

export default function Navbar({ onMenuToggle, sidebarOpen }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const navigate = useNavigate()

  function goToRandomFaction() {
    const randomFaction = factions[Math.floor(Math.random() * factions.length)]
    navigate(`/faction/${randomFaction.id}`)
  }

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

        <button
          onClick={goToRandomFaction}
          className={styles.navBtn}
          aria-label="랜덤 팩션으로 이동"
          title="랜덤 팩션"
        >
          <svg className={styles.navBtnIcon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.3"/>
            <circle cx="5" cy="5" r="1.1" fill="currentColor"/>
            <circle cx="11" cy="5" r="1.1" fill="currentColor"/>
            <circle cx="8" cy="8" r="1.1" fill="currentColor"/>
            <circle cx="5" cy="11" r="1.1" fill="currentColor"/>
            <circle cx="11" cy="11" r="1.1" fill="currentColor"/>
          </svg>
          랜덤
        </button>

        <button
          onClick={() => window.open(FEEDBACK_URL, '_blank', 'noopener,noreferrer')}
          className={styles.navBtn}
        >
          <svg className={styles.navBtnIcon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 12.5A5.5 5.5 0 1 1 8 2.5a5.5 5.5 0 0 1 0 11zm.75-3.25H7.25v1.5h1.5v-1.5zm0-6H7.25v4.5h1.5v-4.5z" fill="currentColor"/>
          </svg>
          버그 제보
        </button>
      </div>
    </nav>
  )
}
