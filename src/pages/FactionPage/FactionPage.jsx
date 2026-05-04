import { useParams, Link, Navigate } from "react-router-dom";
import { getFactionById, GRAND_ALLIANCES } from "../../data/factions";
import { assetUrl } from "../../utils/asset";
import styles from "./FactionPage.module.css";

export default function FactionPage() {
  const { id } = useParams();
  const faction = getFactionById(id);

  if (!faction) return <Navigate to="/" replace />;

  const alliance = Object.values(GRAND_ALLIANCES).find(
    (a) => a.id === faction.alliance,
  );

  return (
    <div className={styles.page} data-alliance={faction.alliance}>
      {/* Banner */}
      <div
        className={styles.banner}
        style={{ "--faction-color": faction.color }}
      >
        <div className={styles.bannerImage}>
          <img
            src={assetUrl(faction.imagePath)}
            alt={faction.name}
            onError={(e) => {
              e.currentTarget.parentElement.classList.add(
                styles.bannerImageFallback,
              );
              e.currentTarget.style.display = "none";
            }}
          />
          <div className={styles.bannerOverlay} />
        </div>
        <div className={styles.bannerContent}>
          <div className={styles.bannerMeta}>
            <span
              className={styles.allianceBadge}
              style={{ background: faction.color }}
            >
              {alliance.label}
            </span>
          </div>
          <h1 className={styles.factionName}>{faction.name}</h1>
          <p className={styles.factionTagline}>{faction.tagline}</p>

          <a
            href={faction.officalLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gwLink}
            style={{ "--btn-accent": faction.accentColor, fontSize: "0.8rem" }}
          >
            모델 전체 살펴보기
          </a>
        </div>
        <div className={styles.bannerBottom} />
      </div>

      <div className={styles.body}>
        {/* Lore */}
        <section className={styles.loreSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>배경 로어</span>
            <div className={styles.sectionLine} />
          </div>
          <div className={styles.loreText}>
            {faction.lore.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* Spearhead links */}
        <section>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>스피어헤드 아미</span>
            <div className={styles.sectionLine} />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {faction.spearheads.map((spearhead) => (
              <div key={spearhead.id} className={styles.spearheadTeaser}>
                <div className={styles.teaserContent}>
                  <p className={styles.teaserEyebrow}>스피어헤드 아미</p>
                  <h2 className={styles.teaserTitle}>{spearhead.name}</h2>
                  <p className={styles.teaserDesc}>{spearhead.description}</p>
                  <Link
                    to={`/faction/${faction.id}/spearhead/${spearhead.id}`}
                    className={styles.teaserBtn}
                    style={{
                      "--btn-color": faction.color,
                      "--btn-accent": faction.accentColor,
                    }}
                  >
                    <span>스피어헤드 아미 보기</span>
                    <span className={styles.teaserArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
                <div className={styles.teaserImage}>
                  <img
                    src={assetUrl(spearhead.imagePath)}
                    alt={spearhead.name}
                    onError={(e) => {
                      e.currentTarget.parentElement.classList.add(
                        styles.teaserImageFallback,
                      );
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link to="/">홈</Link>
        <span>/</span>
        <span>{faction.name}</span>
      </div>
    </div>
  );
}
