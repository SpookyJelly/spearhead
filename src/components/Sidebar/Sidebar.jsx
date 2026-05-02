import { NavLink } from 'react-router-dom'
import { factions, GRAND_ALLIANCES } from '../../data/factions'
import styles from './Sidebar.module.css'

const allianceOrder = ['order', 'chaos', 'death', 'destruction']

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>Factions</span>
          <div className={styles.headerLine} />
        </div>

        <nav className={styles.nav}>
          {allianceOrder.map(allianceId => {
            const alliance = Object.values(GRAND_ALLIANCES).find(a => a.id === allianceId)
            const allianceFactions = factions.filter(f => f.alliance === allianceId)
            return (
              <div key={allianceId} className={styles.group} data-alliance={allianceId}>
                <div className={styles.groupLabel}>
                  <span
                    className={styles.groupDot}
                    style={{ background: alliance.color }}
                  />
                  {alliance.label}
                </div>
                <ul className={styles.list}>
                  {allianceFactions.map(faction => (
                    <li key={faction.id}>
                      <NavLink
                        to={`/faction/${faction.id}`}
                        className={({ isActive }) =>
                          `${styles.link} ${isActive ? styles.active : ''}`
                        }
                        onClick={onClose}
                        style={{ '--faction-color': faction.color, '--faction-accent': faction.accentColor }}
                      >
                        <span className={styles.linkDot} />
                        <span className={styles.linkName}>{faction.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </nav>

        <div className={styles.footer}>
          <NavLink to="/" onClick={onClose} className={styles.homeLink}>
            ← 홈으로
          </NavLink>
        </div>
      </aside>
    </>
  )
}
