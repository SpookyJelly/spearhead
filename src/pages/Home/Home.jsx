import { Link } from "react-router-dom";
import { factions, GRAND_ALLIANCES } from "../../data/factions";
import { assetUrl } from "../../utils/asset";
import styles from "./Home.module.css";

const allianceOrder = ["order", "chaos", "death", "destruction"];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Age of Sigmar</p>
          <h1 className={styles.heroTitle}>Spearhead</h1>
          <div className={styles.heroDivider}>
            <span />
            <span className={styles.heroDiamond} />
            <span />
          </div>
          <p className={styles.heroDesc}>
            모탈렐름의 전장을 누비는 강력한 세력들을 만나보세요.
            <br />각 세력의 로어와 스피어헤드 아미를 탐험해보세요.
          </p>
        </div>
      </section>

      {/* Alliance sections */}
      <div className={styles.alliances}>
        {allianceOrder.map((allianceId) => {
          const alliance = Object.values(GRAND_ALLIANCES).find(
            (a) => a.id === allianceId,
          );
          const allianceFactions = factions.filter(
            (f) => f.alliance === allianceId,
          );
          return (
            <section
              key={allianceId}
              className={styles.allianceSection}
              data-alliance={allianceId}
            >
              <div className={styles.allianceHeader}>
                <div
                  className={styles.allianceStripe}
                  style={{ background: alliance.color }}
                />
                <div className={styles.allianceInfo}>
                  <h2 className={styles.allianceTitle}>{alliance.label}</h2>
                </div>
              </div>

              <div className={styles.factionGrid}>
                {allianceFactions.map((faction) => (
                  <FactionCard key={faction.id} faction={faction} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer ornament */}
      <footer className={styles.footer}>
        <div className={styles.footerOrnament}>
          <span />
          <span className={styles.footerDiamond} />
          <span />
        </div>
        <p className={styles.footerText}>Age of Sigmar Spearhead — Fansite</p>
      </footer>
    </div>
  );
}

function FactionCard({ faction }) {
  return (
    <Link
      to={`/faction/${faction.id}`}
      className={styles.card}
      style={{
        "--card-color": faction.color,
        "--card-accent": faction.accentColor,
      }}
    >
      <div className={styles.cardImage}>
        <img
          src={assetUrl(faction.imagePath)}
          alt={faction.name}
          onError={(e) => {
            e.currentTarget.parentElement.classList.add(styles.imageFallback);
            e.currentTarget.style.display = "none";
          }}
        />
        <div className={styles.cardImageOverlay} />
        <div
          className={styles.cardAlliance}
          style={{ background: faction.color }}
        />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{faction.name}</h3>
        <p className={styles.cardTagline}>{faction.tagline}</p>
        <span className={styles.cardCta}>
          탐험하기 <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
