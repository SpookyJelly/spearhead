import { useParams, Link, Navigate } from "react-router-dom";
import {
  getFactionById,
  getSpearheadById,
  GRAND_ALLIANCES,
} from "../../data/factions";
import { assetUrl } from "../../utils/asset";
import RadarChart from "../../components/RadarChart/RadarChart";
import styles from "./SpearheadPage.module.css";

export default function SpearheadPage() {
  const { id, spearheadId } = useParams();
  const faction = getFactionById(id);
  const spearhead = getSpearheadById(id, spearheadId);

  if (!faction || !spearhead) return <Navigate to="/" replace />;

  const alliance = Object.values(GRAND_ALLIANCES).find(
    (a) => a.id === faction.alliance,
  );

  return (
    <div className={styles.page} data-alliance={faction.alliance}>
      {/* ── Header ── */}
      <div
        className={styles.header}
        style={{
          "--faction-color": faction.color,
          "--faction-accent": faction.accentColor,
        }}
      >
        <div className={styles.headerBg} />
        <div className={styles.headerContent}>
          <div className={styles.breadcrumb}>
            <Link to="/">홈</Link>
            <span>/</span>
            <Link to={`/faction/${faction.id}`}>{faction.name}</Link>
            <span>/</span>
            <span>스피어헤드</span>
          </div>
          <span
            className={styles.allianceBadge}
            style={{ background: faction.color }}
          >
            {alliance.label}
          </span>
          <h1 className={styles.title}>
            <span className={styles.titleSub}>{faction.name}</span>
            {spearhead.name}
          </h1>
          <div className={styles.headerLine} />
          <p className={styles.subtitle}>{spearhead.description}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {/* GW 공식 링크 */}
            <a
              href={spearhead.gwUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gwLink}
              style={{ "--btn-accent": faction.accentColor }}
            >
              <span className={styles.gwLinkIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5zm0 11.8A5.3 5.3 0 1 1 13.3 8 5.306 5.306 0 0 1 8 13.3z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 5.5a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2zM8.6 6.8H7.4v4.4h1.2V6.8z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              공식 사이트에서 모델 구경하기
              <span className={styles.gwLinkArrow} aria-hidden="true">
                ↗
              </span>
            </a>
            {spearhead.rarity ? (
              <span className={styles.rarityMark}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    d="M8 1.5L15 14.5H1L8 1.5Z"
                    fill="none"
                    stroke="#FFC107"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <rect x="7.25" y="5" width="1.5" height="5" fill="#FFC107" />
                  <circle cx="8" cy="12" r="1" fill="#FFC107" />
                </svg>
                입수난이도 높음
              </span>
            ) : null}
          </div>
        </div>
        <div className={styles.headerImage}>
          <img
            src={assetUrl(spearhead.imagePath)}
            alt={spearhead.name}
            onError={(e) => {
              e.currentTarget.parentElement.classList.add(
                styles.headerImageFallback,
              );
              e.currentTarget.style.display = "none";
            }}
          />
          <div className={styles.headerImageOverlay} />
        </div>
      </div>

      <div className={styles.body}>
        {/* ── 능력치 차트 ── */}
        <section className={styles.section}>
          <SectionHeader label="능력치" />
          <RadarChart
            initialStats={spearhead.stats}
            color={faction.accentColor}
          />
        </section>

        <div className={styles.divider} />

        {/* ── 유닛 구성 ── */}
        <section className={styles.section}>
          <SectionHeader label="유닛 구성" />
          <div className={styles.unitGrid}>
            {spearhead.units.map((unit, i) => (
              <UnitCard key={i} unit={unit} faction={faction} />
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* ── 추천 / 비추천 ── */}
        <section className={styles.section}>
          <SectionHeader label="이 팩션, 나에게 맞을까?" />
          <div className={styles.recGrid}>
            <div className={styles.recBox}>
              <div className={styles.recHeader}>
                <span className={styles.recIconYes} aria-hidden="true">
                  ✦
                </span>
                <span className={styles.recLabelYes}>이런 분께 추천해요</span>
              </div>
              <ul className={styles.recList}>
                {spearhead.recommended.map((r, i) => (
                  <li key={i} className={styles.recItem}>
                    <span className={styles.recDotYes} aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.recBox}>
              <div className={styles.recHeader}>
                <span className={styles.recIconNo} aria-hidden="true">
                  ✦
                </span>
                <span className={styles.recLabelNo}>이런 분께는 비추천</span>
              </div>
              <ul className={styles.recList}>
                {spearhead.notRecommended.map((r, i) => (
                  <li key={i} className={styles.recItemNo}>
                    <span className={styles.recDotNo} aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* ── 플레이스타일 ── */}
        <section className={styles.section}>
          <SectionHeader label="플레이스타일" />
          <div
            className={styles.playstyleBox}
            style={{ "--faction-color": faction.color }}
          >
            <div className={styles.playstyleIcon} aria-hidden="true">
              ⚔
            </div>
            <p className={styles.playstyleText}>{spearhead.playstyle}</p>
          </div>
        </section>
      </div>

      {/* Back bar */}
      <div className={styles.backBar}>
        <Link
          to={`/faction/${faction.id}`}
          className={styles.backLink}
          style={{ "--faction-accent": faction.accentColor }}
        >
          ← {faction.name} 팩션 페이지로
        </Link>
      </div>
    </div>
  );
}

function SectionHeader({ label }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionLabel}>{label}</span>
      <div className={styles.sectionLine} />
    </div>
  );
}

const ROLE_STYLES = {
  지휘관: {
    bg: "rgba(201,168,76,0.12)",
    border: "rgba(201,168,76,0.4)",
    text: "#c9a84c",
  },
  "기간 보병": {
    bg: "rgba(100,160,220,0.08)",
    border: "rgba(100,160,220,0.3)",
    text: "#64a0dc",
  },
  "정예 전력": {
    bg: "rgba(180,100,220,0.08)",
    border: "rgba(180,100,220,0.3)",
    text: "#b464dc",
  },

  "기병 전력": {
    bg: "rgba(100,220,160,0.08)",
    border: "rgba(100,220,160,0.3)",
    text: "#64dc9a",
  },
  "원거리 전력": {
    bg: "rgba(220,160,100,0.08)",
    border: "rgba(220,160,100,0.3)",
    text: "#dc9a64",
  },
  괴수: {
    bg: "rgba(220,100,100,0.08)",
    border: "rgba(220,100,100,0.3)",
    text: "#dc6464",
  },
  전쟁기계: {
    bg: "rgba(220,100,100,0.08)",
    border: "rgba(220,100,100,0.3)",
    text: "#d6cc3f",
  },

  "지원 전력": {
    bg: "rgba(100,200,220,0.08)",
    border: "rgba(100,200,220,0.3)",
    text: "#64c8dc",
  },

  "정예 기병": {
    bg: "rgba(220,100,140,0.08)",
    border: "rgba(220,100,140,0.3)",
    text: "#dc648c",
  },
};

function UnitCard({ unit, faction }) {
  const rs = ROLE_STYLES[unit.role] || ROLE_STYLES["기간 보병"];
  return (
    <div
      className={styles.unitCard}
      style={{ "--faction-color": faction.color, "--role-text": rs.text }}
    >
      <div className={styles.unitTop}>
        <span className={styles.unitCount} style={{ color: rs.text }}>
          ×{unit.count}
        </span>
        <span
          className={styles.unitRole}
          style={{
            background: rs.bg,
            border: `1px solid ${rs.border}`,
            color: rs.text,
          }}
        >
          {unit.role}
        </span>
      </div>
      <h3 className={styles.unitName}>{unit.name}</h3>
      <p className={styles.unitDesc}>{unit.description}</p>
    </div>
  );
}
