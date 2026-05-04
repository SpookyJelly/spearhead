export const GRAND_ALLIANCES = {
  ORDER: {
    id: "order",
    label: "Grand Alliance Order",
    color: "#1a6fce",
    accent: "#c9a84c",
  },
  CHAOS: {
    id: "chaos",
    label: "Grand Alliance Chaos",
    color: "#9b1a1a",
    accent: "#e05a1a",
  },
  DEATH: {
    id: "death",
    label: "Grand Alliance Death",
    color: "#5a1a8f",
    accent: "#2ab8b8",
  },
  DESTRUCTION: {
    id: "destruction",
    label: "Grand Alliance Destruction",
    color: "#2d6e2d",
    accent: "#c8a84c",
  },
};

export const factions = [
  {
    id: "stormcast-eternals",
    name: "Stormcast Eternals",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/stormcast-eternals",
    alliance: "order",
    tagline: "지그마의 번개로 벼려진 불멸의 전사들",
    lore: `신왕 지그마가 직접 단련한 불멸의 전사들. 죽음을 맞이할 때마다 아지르의 하늘 신전으로 소환되어 다시 단련되고 부활한다. 신성한 지그마라이트 갑옷으로 무장한 그들은 재앙의 시대를 거치며 생존한 모든 영역을 수호하기 위해 파견된다.

하늘을 가르는 천둥과 함께 강림하는 스톰캐스트 이터널즈는 죽음 그 자체도 두려워하지 않는다. 하지만 거듭되는 부활 속에서 그들은 인간이었던 자신의 기억과 감정을 조금씩 잃어간다 — 이것이 지그마가 그들에게 지운 진정한 대가다.`,
    color: "#1a6fce",
    accentColor: "#c9a84c",
    imagePath: "/images/factions/stormcast/banner.webp",
    spearheads: [
      {
        id: "Vigilant Brotherhood",
        name: "Vigilant Brotherhood",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/age-of-sigmar-ultimate-starter-set-2024-eng?queryID=5c4d71bdcd587d5b12ec74a4b05b7918",
        description: `비질런트 형제단은 스톰캐스트 이터널즈의 정예 선봉대이다. 리버레이터들이 방패의 벽을 이루는 동안, 날개 달린 프로세큐터들이 급강하하며 적진을 분쇄한다. 천공의 맹세를 지키는 그들의 돌격은 적군에게 공포와 혼란을 안긴다.`,
        stats: { 공격력: 7, 생존력: 8, 기동성: 5, 미션수행: 7, 유틸리티: 7 },
        recommended: [
          "묵직하고 안정적인 전선 전투를 즐기는 분",
          "강인한 생존력으로 차근차근 전장을 장악해나가는 플레이를 선호하는 분",
          "황금빛 지그마라이트 갑옷의 웅장한 미니어처를 페인팅하고 싶은 분",
        ],
        notRecommended: [
          "빠른 기동과 기습으로 현란한 전술을 구사하고 싶은 분",
          "수많은 모델로 압도적인 물량 공세를 즐기는 분",
        ],
        units: [
          {
            name: "Lord-Vigilant on Gryph-Stalker",
            role: "지휘관",
            count: 1,
            description: "선봉 돌격을 이끄는 천둥 군주",
          },
          {
            name: "Liberators",
            role: "기간 보병",
            count: 5,
            description: "지그마라이트 방패와 워해머로 무장한 정예 보병",
          },
          {
            name: "Liberators",
            role: "기간 보병",
            count: 5,
            description: "지그마라이트 방패와 워해머로 무장한 정예 보병",
          },
          {
            name: "Prosecutors",
            role: "기동 전력",
            count: 3,
            description: "하늘을 날며 천둥 창을 투척하는 날개 달린 전사들",
          },
          {
            name: "Lord-Veritant",
            role: "정예 전력",
            count: 1,
            description: "불타는 검과 신앙으로 적을 분쇄하는 장교",
          },
        ],
        playstyle:
          "균형잡힌 라인 전투에 하늘에서의 기동력을 결합한 전형적인 Order 전력. 정면 돌파보다는 우세한 위치를 선점하는 전략을 선호한다.",
        imagePath: "/images/factions/stormcast/vigilant.webp",
      },

      {
        id: "yndrastras-spearhead",
        name: "Yndrastra's Spearhead",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-stormcast-eternals-2024?queryID=5c4d71bdcd587d5b12ec74a4b05b7918",
        description: `천상의 창 인드라스타가 이끄는 정예 처형단. 뱅퀴셔 보병 둘이 전선을 굳건히 틀어막는 동안, 어나힐레이터 분대가 급강하하여 핵심 표적을 분쇄한다. 인드라스트라 자신은 전장에서 가장 위협적인 영웅과 몬스터를 직접 사냥하는 최후의 결전 병기다.`,
        stats: { 공격력: 8, 생존력: 7, 기동성: 5, 미션수행: 6, 유틸리티: 7 },
        recommended: [
          "적의 강력한 영웅·몬스터를 직접 처리하는 극적인 사냥꾼 역할을 즐기는 분",
          "소수 정예 엘리트 유닛으로 간결하고 묵직하게 운용하고 싶은 분",
          "화려한 인드라스타 센터피스 미니어처를 페인팅하고 싶은 분",
        ],
        notRecommended: [
          "빠른 기동으로 넓은 전장 전체를 동시에 장악하고 싶은 분",
          "수적 우위로 여러 목표 지점을 동시에 점령하는 플레이를 원하는 분",
        ],
        units: [
          {
            name: "Yndrasta, the Celestial Spear",
            role: "지휘관",
            count: 1,
            description:
              "몬스터와 영웅을 전문으로 사냥하는 천상의 창 인드라스타",
          },
          {
            name: "Vanquishers",
            role: "기간 보병",
            count: 5,
            description:
              "장검으로 무장한 전열 보병분대. 다수의 적을 상대로 할 때 더욱 강해진다.",
          },
          {
            name: "Vanquishers",
            role: "기간 보병",
            count: 5,
            description:
              "장검으로 무장한 전열 보병분대. 다수의 적을 상대로 할 때 더욱 강해진다.",
          },

          {
            name: "Annihilators",
            role: "정예 전력",
            count: 3,
            description:
              "강화 지그마라이트 갑옷을 두르고 급강하 돌격하는 파괴자들",
          },
          {
            name: "Stormstrike Chariot",
            role: "기동 전력",
            count: 1,
            description: "그리프-차저 두 마리가 끄는 고속 전차",
          },
          {
            name: "Knight-Vexillor",
            role: "지원 전력",
            count: 1,
            description: "아군에게 전투 버프를 부여하는 기수 장교",
          },
        ],
        playstyle:
          "초반은 뱅퀴셔 보병으로 전선을 유지하며 위치를 선점하고, 어나힐레이터는 정밀 강하로 핵심 목표를 제거한다. 인드라스트라는 적의 강력한 영웅이나 몬스터가 출현할 때까지 아껴두다가, 결정적 순간에 투입해 단숨에 처리하는 후반 역전 전략이 핵심이다.",
        imagePath: "/images/factions/stormcast/yndrastra.jpg",
      },
    ],
  },
  {
    id: "daughters-of-khaine",
    name: "Daughters of Khaine",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/daughters-of-khaine",
    alliance: "order",
    tagline: "피와 광기에 취한 학살의 여신도들",
    lore: `케인의 피로 물들인 숭배자들로 이루어진 아엘프 전사 집단. 그들의 신전은 끝없는 제의와 피로 가득하며, 전투는 그 자체로 신성한 행위다. 그들이 섬기는 신 케인은 언제나 더 많은 피를 원한다 — 그리고 그의 딸들은 기꺼이 그 욕망을 채운다.

메두사 하이 가디스트가 이끄는 무희 전사들은 전장 위를 춤추듯 질주하며, 그 우아함 뒤에 숨은 잔혹함으로 적을 도살한다. 전투가 길어질수록 그들은 점점 광기에 가까운 황홀경에 빠져든다.`,
    color: "#8f1a3c",
    accentColor: "#e84c6e",
    imagePath: "/images/factions/daughters-of-khaine/banner.webp",
    spearheads: [
      {
        id: "khainite-shadow-covent",
        name: "khainite shadow covent",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-khainite-shadow-coven-2026?queryID=3f3b2a3b0fcc179a000846daa7f5d477",
        description: `케인의 성스러운 피 가마솥을 중심으로 결집한 수호 전단. 헤카티 크로넨이 선혈의 의식을 집전하는 동안, 위치아엘프 전사들이 사방을 질주하며 적을 쓰러뜨린다. 전투가 고조될수록 케인의 가호가 더욱 강렬해진다.`,
        stats: { 공격력: 9, 생존력: 5, 기동성: 8, 미션수행: 6, 유틸리티: 6 },
        recommended: [
          "전광석화 같은 속도로 적진을 붕괴시키는 공격적인 플레이를 즐기는 분",
          "높은 리스크와 짜릿한 하이 리워드의 긴장감을 원하는 분",
          "역동적이고 화려한 아엘프 전사 미니어처를 페인팅하고 싶은 분",
        ],
        notRecommended: [
          "안정적인 전선을 유지하며 방어적으로 버티는 플레이를 선호하는 분",
          "실수를 만회할 여유가 있는 느긋한 운용 방식을 원하는 분",
        ],
        units: [
          {
            name: "Slaughter Queen on Cauldron of Blood",
            role: "지휘관",
            count: 1,
            description: "피 가마솥을 타고 전장을 지휘하는 마녀 여왕",
          },
          {
            name: "Hag Queen",
            role: "핵심 전력",
            count: 1,
            description: "전장의 열기를 더욱 고조시키는 주술사 마녀",
          },
          {
            name: "BloodWrack Medusa",
            role: "핵심 전력",
            count: 1,
            description: "치명적인 석화의 안광을 발사하는 메두사",
          },
          {
            name: "Sisters of Slaughter",
            role: "기간 보병",
            count: 5,
            description: "두 자루의 칼을 들고 광란의 춤을 추며 싸우는 여전사들",
          },
          {
            name: "Sisters of Slaughter",
            role: "기간 보병",
            count: 5,
            description: "두 자루의 칼을 들고 광란의 춤을 추며 싸우는 여전사들",
          },
          {
            name: "Khinerai Shadowstalkers",
            role: "기동 전력",
            count: 9,
            description:
              "하늘에서 급강하하여 낫으로 적을 베어 쓰러뜨리는 날개 전사",
          },
        ],
        playstyle:
          "극단적인 공격 속도와 다수의 공격 횟수가 특징. 적을 압도적인 기세로 몰아붙이되, 방어력이 낮으므로 선제권 확보가 필수다.",
        imagePath: "/images/factions/daughters-of-khaine/khainite.jpg",
      },
      {
        id: "heartflayer-troupe",
        name: "Heartflayer Troupe",
        rarity: true,
        gwUrl:
          "https://www.boardgamesdallas.com/cdn/shop/files/99120212042_DoKSpearheadStock_1024x1024@2x.jpg?v=1726525586",
        description: `멜루사이 아이언스케일이 이끄는 케인의 사냥꾼 집단. 블러드 스토커의 심장을 꿰뚫는 화살이 원거리에서 적을 솎아내는 동안, 위치 아엘프들이 광란의 춤사위로 전선을 돌파한다. 전투가 격화될수록 블러드 라이츠의 가호가 쌓이며, 케인의 딸들은 걷잡을 수 없는 광기에 사로잡힌다.`,
        stats: { 공격력: 9, 생존력: 4, 기동성: 8, 미션수행: 6, 유틸리티: 6 },
        recommended: [
          "전투가 진행될수록 점점 강해지는 누적 버프의 폭발력을 즐기는 분",
          "근접과 원거리를 동시에 압박하는 다각도 공세를 구사하고 싶은 분",
          "우아하고 잔혹한 멜루사이·위치 아엘프 미니어처를 페인팅하고 싶은 분",
        ],
        notRecommended: [
          "방어선을 구축하고 차분히 버티는 플레이를 선호하는 분",
          "실수를 만회할 여유가 있는 안정적인 운용 방식을 원하는 분",
        ],
        units: [
          {
            name: "Melusai Ironscale",
            role: "지휘관",
            count: 1,
            description: "유닛에 시너지 버프를 부여하는 뱀 인간 전사",
          },
          {
            name: "Witch Aelves",
            role: "기간 보병",
            count: 5,
            description: "두 자루의 칼을 들고 광란의 춤을 추며 싸우는 여전사들",
          },
          {
            name: "Witch Aelves",
            role: "기간 보병",
            count: 5,
            description: "두 자루의 칼을 들고 광란의 춤을 추며 싸우는 여전사들",
          },
          {
            name: "Blood Stalkers",
            role: "원거리 전력",
            count: 5,
            description:
              "18인치 사거리로 심장을 꿰뚫는 하트시커 화살을 쏘는 저격수",
          },
          {
            name: "Doomfire Warlocks",
            role: "기동 전력",
            count: 5,
            description:
              "기마로 빠르게 기동하며 둠파이어 마법을 시전하는 기수 마법사",
          },
        ],
        playstyle:
          "피의 의식은 라운드가 쌓일수록 강화되므로, 공격에 적절한 타이밍을 선정하는것이 중요하다. 블러드 스토커의 원거리 위협과 위치 아엘프의 근접 압박을 동시에 유지하면서 상대의 선택지를 좁히는 것이 핵심이다.",
        imagePath:
          "/images/factions/daughters-of-khaine/heartflayer-troupe.webp",
      },
    ],
  },
  {
    id: "slaves-to-darkness",
    name: "Slaves to Darkness",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-chaos/slaves-to-darkness",
    alliance: "chaos",
    tagline: "어둠의 신들을 섬기는 전사들",
    lore: `카오스의 어둠 신들 — 코른, 젠취, 너글, 슬라네쉬 — 모두를 또는 그 누구도 섬기지 않는 전사들의 연맹. 그들은 오직 정복과 파괴만을 추구하며, 어둠의 힘을 통해 카오스 스폰이나 다에몬 프린스로 거듭나기를 꿈꾼다.

에버초즌 아카온의 군대는 모든 영역을 짓밟으며 지그마의 창조물을 차례차례 무너뜨리고 있다. 그들에게 패배란 없다 — 오직 더 강해지거나, 카오스로 녹아드는 것뿐이다.`,
    color: "#5a1a1a",
    accentColor: "#c84c1a",
    imagePath: "/images/factions/slaves-to-darkness/banner.webp",
    spearheads: [
      {
        id: "bloodwind-legion",
        name: "Bloodwind Legion",
        rarity: true,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-slaves-to-darkness-2024?queryID=ff9f20dae79a9959959807de2b2a531a",
        description: `카오스 로드가 이끄는 어둠 신들의 철권. 카오스 워리어들이 강인한 방어선을 구축하는 동안, 카오스 나이츠는 '두려운 강림(Dreaded Arrival)' 규칙으로 2라운드에 전장에 강림해 적의 허를 찌르는 결정타를 날린다. 전투가 거듭될수록 Eye of the Gods 시스템으로 유닛들이 카오스의 축복을 받아 점점 강해진다.`,
        stats: { 공격력: 8, 생존력: 7, 기동성: 6, 미션수행: 7, 유틸리티: 6 },
        recommended: [
          "강인한 방어선을 유지하며 타이밍을 노려 강력한 기병 돌격을 터뜨리는 전술적 플레이를 즐기는 분",
          "스피어헤드 최상위 티어 아미로 안정적인 승률을 원하는 분",
          "중장갑 카오스 전사와 위압적인 기사 말 미니어처에 매력을 느끼는 분",
        ],
        notRecommended: [
          "1라운드부터 공격적으로 전진하며 주도권을 잡고 싶은 분 — 나이츠 부재로 초반이 다소 소극적",
          "나이츠의 돌격이 막혔을 때 대안이 없어 역전당하는 상황을 버티기 어려운 분",
        ],
        units: [
          {
            name: "Chaos Lord",
            role: "지휘관",
            count: 1,
            description:
              "어둠 신들의 힘을 받은 전쟁 영주. Marks of Chaos로 아미 성향을 선택할 수 있다.",
          },
          {
            name: "Chaos Warriors",
            role: "기간 보병",
            count: 5,
            description:
              "두꺼운 카오스 갑옷의 베테랑 전사 두 분대. 거점을 점령하고 전선을 유지하는 중추 역할.",
          },
          {
            name: "Chaos Warriors",
            role: "기간 보병",
            count: 5,
            description:
              "두꺼운 카오스 갑옷의 베테랑 전사 두 분대. 거점을 점령하고 전선을 유지하는 중추 역할.",
          },
          {
            name: "Chaos Chariot",
            role: "기동 전력",
            count: 1,
            description:
              "빠른 속도로 적 측면을 파고드는 전차. 얇아진 전선을 찢어발기는 돌격 역할.",
          },
          {
            name: "Chaos Knights",
            role: "주력 기병",
            count: 5,
            description:
              "Dreaded Arrival로 2라운드에 등장. Impaling Charge 발동 시 치명적인 타격을 입힌다.",
          },
        ],
        playstyle: `블러드윈드 군단의 핵심은 '기다림과 강타'의 두 박자 전략이다. 1라운드는 카오스 워리어들이 전선을 유지하며 카오스 나이츠를 보드 밖에 숨겨둔다. 상대가 전선에 집중하는 순간, 2라운드에 나이츠가 Dreaded Arrival로 등장해 측면이나 후방으로 돌격한다. Eye of the Gods 시스템 덕분에 전투를 거듭할수록 유닛들이 더욱 강해지기 때문에 게임이 길어질수록 유리해진다. 스피어헤드 포맷 최상위 티어로 꼽히는 아미이지만, 1라운드의 소극적인 운영에 당황하지 않는 침착함이 필요하다.`,
        imagePath: "/images/factions/slaves-to-darkness/bloodwind-legion.jpg",
      },
      {
        id: "darkoath-raiders",
        name: "Darkoath Raiders",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-slaves-to-darkness-darkoath-raiders-2024?queryID=ff9f20dae79a9959959807de2b2a531a",
        description: `다크오스 워퀸이 이끄는 폭풍 같은 야만 약탈대. 펠라이더의 기병 돌격이 적의 측면을 찢어발기는 동안, 세이버저와 마로더들이 모든 방향에서 쏟아져 들어온다. 갑옷도 방어도 없다 — 오직 광기와 속도로 적을 압도하는 고위험 고보상 아미.`,
        stats: { 공격력: 8, 생존력: 4, 기동성: 9, 미션수행: 6, 유틸리티: 5 },
        recommended: [
          "압도적인 이동 속도로 목표물을 선점하고 끊임없는 압박을 가하는 공격적 플레이를 즐기는 분",
          "빠른 템포로 적을 몰아붙이는 고위험 고보상 전략을 원하는 분",
          "투박하고 야성적인 다크오스 야만 전사 미니어처에 매력을 느끼는 분",
        ],
        notRecommended: [
          "안정적인 방어선을 유지하며 장기전을 운영하는 플레이를 선호하는 분",
          "방어력이 낮아 집중 사격에 쉽게 무너지는 상황을 자주 겪기 때문에, 내구력 높은 아미를 원하는 분",
        ],
        units: [
          {
            name: "Darkoath Warqueen",
            role: "지휘관",
            count: 1,
            description:
              "다크오스 야만 전사들을 이끄는 전쟁 여왕. 근처 다크오스 유닛에 버프를 부여하며 직접 전투에서도 강력하다.",
          },
          {
            name: "Darkoath Marauders",
            role: "기간 보병",
            count: 10,
            description:
              "수십 명의 야만인이 몰려드는 압도적인 물량. 전선을 이루고 목표 지점을 점령하는 중추 역할.",
          },
          {
            name: "Darkoath Savagers",
            role: "정예 보병",
            count: 10,
            description:
              "마로더보다 강인한 야만 전사들. 핵심 목표나 취약한 적 유닛을 분쇄하는 역할.",
          },
          {
            name: "Darkoath Fellriders",
            role: "정예 기병",
            count: 5,
            description:
              "빠른 속도의 다크오스 기병. 측면 돌격과 목표 선점을 위해 내달리는 아미의 기동 핵심.",
          },
        ],
        playstyle: `다크오스 레이더즈는 속도와 공격성만이 답인 아미다. 매 라운드 워퀸의 버프를 받은 유닛들이 전진하며 적에게 끊임없는 압박을 가한다. 펠라이더는 빠른 기동력으로 목표 지점을 선점하거나 측면에서 기습을 감행하고, 마로더의 물량이 전선을 뒤덮는다. 단, 방어력이 낮기 때문에 집중 공격을 허용하지 않도록 전선을 넓게 펼쳐 상대의 화력을 분산시켜야 한다. 상대보다 먼저 치고 먼저 끝내는 것이 유일한 생존 전략이다.`,
        imagePath: "/images/factions/slaves-to-darkness/darkoath-raiders.jpg",
      },
    ],
  },
  {
    id: "skaven",
    name: "Skaven",
    alliance: "chaos",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-chaos/skaven",
    tagline: "위대한 뿔난 쥐의 쥐 군단",
    lore: `스케이븐은 언더웨이의 어둠 속에 숨어 영역들의 기반을 무너뜨리는 쥐인간 종족이다. 그들의 신 — 위대한 뿔 달린 쥐 — 는 카오스 신들과 동등한 권능을 자랑하며, 스케이븐은 숫자와 비열한 기술로 어떤 적도 압도한다.

클랜 스커머스와 기타 클랜들은 끊임없이 서로 배신하고 다투지만, 외부의 적이 나타나면 쥐의 물결처럼 밀려들어 모든 것을 갉아먹는다. 기괴한 워프스톤 기술과 쥐오거 등의 돌연변이 괴물이 그들의 무기다.`,
    color: "#2a4a1a",
    accentColor: "#7fc41a",
    imagePath: "/images/factions/skaven/banner.webp",
    spearheads: [
      {
        id: "gnawfest-clawpack",
        name: "Gnawfest Clawpack",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/age-of-sigmar-ultimate-starter-set-2024-eng?queryID=5c4d71bdcd587d5b12ec74a4b05b7918",
        description: `물량과 광기로 적을 집어삼키는 스케이브의 정석. 클랜랫의 끝없는 파도가 전선을 유지하는 동안, 강력한 랫 오거들이 돌격하여 적을 분쇄한다. 'Gnawhole Ambush'를 통해 전장의 구석 어디든 예기치 못한 방향에서 나타나 적의 후방을 교란할 수 있는 기동형 물량 아미.`,
        stats: { 공격력: 7, 생존력: 5, 기동성: 8, 미션수행: 8, 유틸리티: 7 },
        recommended: [
          "압도적인 물량으로 보드를 가득 채우고 적을 소모전으로 끌어들이고 싶은 분",
          "워프 터널을 이용한 기습과 변칙적인 기동 플레이를 선호하는 분",
          "근접전 중심의 강력한 괴수와 보병의 조화를 원하는 분",
        ],
        notRecommended: [
          "개별 모델의 생존력이 낮아 유닛이 한순간에 제거되는 상황을 견디기 힘든 분",
          "사격 화력이 부족하여 장거리에서 적을 견제하는 플레이를 원하는 분",
        ],
        units: [
          {
            name: "Clawlord on Gnaw-beast",
            role: "지휘관",
            count: 1,
            description:
              "전선을 직접 돌파하는 전사형 지휘관. 주변 클랜랫의 부활 능력을 강화한다.",
          },
          {
            name: "Grey Seer",
            role: "지원 전력",
            count: 1,
            description:
              "강력한 마법으로 적에게 광역 피해를 주거나 아군에게 버프를 제공하는 마법사.",
          },
          {
            name: "Warlock Engineer",
            role: "원거리 전력",
            count: 1,
            description:
              "정밀한 사격 무기를 보유하며, 기술적 장치로 아군 사격 유닛을 보조한다.",
          },
          {
            name: "Clanrats",
            role: "기간 보병",
            count: 10,
            description:
              "끊임없이 충원되는 스케이브의 중추. 점령지를 사수하고 고기방패 역할을 수행한다.",
          },
          {
            name: "Clanrats",
            role: "기간 보병",
            count: 10,
            description:
              "끊임없이 충원되는 스케이브의 중추. 점령지를 사수하고 고기방패 역할을 수행한다.",
          },
          {
            name: "Rat Ogors",
            role: "괴수",
            count: 3,
            description:
              "아미의 실질적인 타격수. 근접전에서 폭발적인 대미지를 뿜어내는 돌격 괴수.",
          },
        ],
        playstyle: `그나페스트 클로팩은 '전략적 소모전'이 핵심이다. 기간 보병인 클랜랫을 미끼로 던져 적을 묶어두고, 'Gnawhole Ambush' 규칙으로 보드 가장자리에서 괴수 전력인 랫 오거를 기습 투입해 적의 약점을 찌른다. 지원 전력의 마법과 지휘관의 부활 능력을 활용해 상대가 지칠 때까지 버티는 것이 승리 공식이다.`,
        imagePath: "/images/factions/skaven/gnawfest-clawpack.webp",
      },
      {
        id: "warpspark-clawpack",
        name: "Warpspark Clawpack",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-skaven-2024?queryID=1393d9604daaec3ce90be6bc3255da3e",
        description: `클랜 스크라이어의 미친 과학이 만들어낸 치명적인 화기 군단. 강력한 워프 라이트닝 캐논의 한 방과 중장갑 스톰파인드의 사격으로 적이 다가오기도 전에 잿더미로 만든다. 아군이 피해를 입더라도 적을 더 빨리 파괴하는 고화력 특화 아미.`,
        stats: { 공격력: 9, 생존력: 6, 기동성: 5, 미션수행: 6, 유틸리티: 7 },
        recommended: [
          "강력한 사격 화력으로 적의 핵심 유닛을 원거리에서 제거하는 쾌감을 원하는 분",
          "중장갑을 갖춘 엘리트 유닛을 소수 정예로 운영하고 싶은 분",
          "위험하지만 강력한 워프 과부하 한 방을 노리는 도박적인 플레이를 즐기는 분",
        ],
        notRecommended: [
          "근접전에서 압도적인 위력을 발휘하는 파이터형 아미를 원하는 분",
          "주력 유닛의 이동 속도가 다소 느려 답답함을 느끼는 분",
        ],
        units: [
          {
            name: "Grey Seer",
            role: "지휘관",
            count: 1,
            description:
              "아미를 지휘하며 워프 마법을 사용한다. 스톰파인드와 시너지가 좋은 유틸리티 리더.",
          },
          {
            name: "Stormfiends",
            role: "정예 전력",
            count: 3,
            description:
              "다양한 중화기를 장착한 인간 병기. 사격과 근접 모두에서 압도적인 위용을 자랑한다.",
          },
          {
            name: "Warp Lightning Cannon",
            role: "전쟁기계",
            count: 1,
            description:
              "스피어헤드 최강의 화력을 가진 병기. 운만 좋다면 적의 대형 유닛도 한 방에 증발시킨다.",
          },
          {
            name: "Clanrats",
            role: "기간 보병",
            count: 10,
            description:
              "화기반과 캐논을 적의 돌격으로부터 지키기 위한 방어용 보병 부대.",
          },
          {
            name: "Clanrats",
            role: "기간 보병",
            count: 10,
            description:
              "화기반과 캐논을 적의 돌격으로부터 지키기 위한 방어용 보병 부대.",
          },
        ],
        playstyle: `워프스파크 클로팩은 전형적인 '사격 섬멸' 스타일이다. 기간 보병으로 전선을 막고, 뒤에서 괴수/전쟁기계 항목의 캐논과 정예 전력인 스톰파인드가 사격을 퍼붓는다. 하이 리스크 하이 리턴의 사격 화력을 적절한 타이밍에 집중시켜, 상대가 근접하기 전에 승기를 잡는 것이 중요하다.`,
        imagePath: "/images/factions/skaven/warpspark-clawpack.jpg",
      },
    ],
  },
  {
    id: "nighthaunt",
    name: "Nighthaunt",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-death/nighthaunt",
    alliance: "death",
    tagline: "형벌로 묶인 망령들의 군단",
    lore: `나이트온트는 나이트 신 나이트의 의지에 따라 활동하는 유령 군단이다. 살아있을 때의 죄악으로 저주받아 유령 사슬에 묶인 영혼들이 나이트의 병기로 재탄생한다. 죽음도, 물리적 공격도 그들을 막을 수 없다.

나이트의 군주 올린더 공주가 이끄는 이 군단은 살아있는 모든 것에 공포를 심어준다. 그들이 지나간 자리엔 차가운 안개만 남고, 살아있는 자들은 영혼이 빠져나간 듯한 공포만을 기억한다.`,
    color: "#1a3a5a",
    accentColor: "#4adfcf",
    imagePath: "/images/factions/nighthaunt/banner.webp",
    spearheads: [
      {
        id: "cursed-shacklehorde",
        name: "Cursed Shacklehorde",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-cursed-shacklehorde-2025?queryID=a48e591b853b9f53f3f6e539ca702cc1",
        description: `고통과 속박에 묶인 망령들이 끝없이 몰려드는 나이트헌트 군세. 스피릿 토먼트의 지배 아래, 처형자와 유령 전사들이 적을 추격하며 공포를 퍼뜨린다. 뛰어난 기동성과 끈질긴 복귀 능력으로 전장을 휘젓는, 잡히지 않는 악몽과도 같은 아미.`,
        stats: { 공격력: 4, 생존력: 6, 기동성: 9, 미션수행: 9, 유틸리티: 8 },
        recommended: [
          "비행을 활용해 전장을 자유롭게 누비며 위치 싸움으로 승리하는 플레이를 즐기는 분",
          "유닛을 교환하며 점수 차이를 벌리는 운영형 아미를 선호하는 분",
          "적의 약점을 집요하게 파고드는 기동 중심 플레이를 좋아하는 분",
        ],
        notRecommended: [
          "정면에서 버티며 힘싸움으로 밀어붙이는 스타일을 원하는 분",
          "단단한 방어력이나 확정적인 생존력을 기대하는 분",
        ],

        units: [
          {
            name: "Spirit Torment",
            role: "지휘관",
            count: 1,
            description:
              "고통을 수확하는 처형자. 주변 적이 쓰러질 때 아군을 회복시키며, 아미의 유지력을 책임지는 핵심 지휘관.",
          },
          {
            name: "Chainghasts",
            role: "지원 전력",
            count: 2,
            description:
              "사슬을 휘두르며 스피릿 토먼트를 보좌하는 망령. 근처 유닛의 공격 효율을 끌어올리는 버퍼 역할.",
          },
          {
            name: "Bladegheist Revenants",
            role: "기간 보병",
            count: 5,
            description:
              "돌격 시 폭발적인 공격을 퍼붓는 망령 전사들. 기동력을 활용해 적의 핵심 유닛을 찢어버린다.",
          },
          {
            name: "Bladegheist Revenants",
            role: "기간 보병",
            count: 5,
            description:
              "돌격 시 폭발적인 공격을 퍼붓는 망령 전사들. 기동력을 활용해 적의 핵심 유닛을 찢어버린다.",
          },
          {
            name: "Dreadscythe Harridans",
            role: "기동 전력",
            count: 5,
            description:
              "비명을 지르며 적을 베어넘기는 유령들. 다수의 적을 상대할 때 강력한 성능을 발휘한다.",
          },
          {
            name: "Dreadscythe Harridans",
            role: "기동 전력",
            count: 5,
            description:
              "비명을 지르며 적을 베어넘기는 유령들. 다수의 적을 상대할 때 강력한 성능을 발휘한다.",
          },

          {
            name: "Dreadblade Harrows",
            role: "정예 기병",
            count: 2,
            description:
              "전장을 가로지르는 유령 기사. 순간 이동에 가까운 이동 능력으로 목표를 기습하거나 점수를 노린다.",
          },
        ],

        playstyle: `커스드 섀클호드는 '위치와 타이밍'의 아미다. 모든 유닛이 높은 기동성을 바탕으로 전장을 자유롭게 이동하며, 블레이드가이스트 레버넌트가 핵심 타격을 담당한다. 해리단은 다수 유닛을 정리하며 전선을 흐트러뜨리고, 드레드블레이드 해로우는 기습과 점령에 특화된 움직임으로 상대의 계획을 무너뜨린다. 스피릿 토먼트와 체인고스트의 조합은 전투 중 아군을 지속적으로 회복시키며 유지력을 보완한다. 정면 교전보다는, 유리한 교전만 선택하며 점수를 쌓아가는 것이 핵심이다.`,
        imagePath: "/images/factions/nighthaunt/cursed-shacklehorde.jpg",
      },

      {
        id: "slasher-host",
        name: "Slasher Host",
        rarity: true,
        gwUrl:
          "https://vaultgames.com.au/cdn/shop/files/https___trade.games-workshop.com_assets_2024_06_EB200a-99120207186-70-10-SpearheadNightHaunt.jpg?v=1719563706",
        description: `슬래셔 호스트는 적의 기세를 꺾고 전장을 공포로 마비시키는 망령들의 군세입니다. 적의 관통력(Rend)을 감쇄시키고 공격 효율을 떨어뜨리는 강력한 디버프를 통해, 수치 이상의 끈질긴 생존력을 보여줍니다. 마냥 수동적으로 버티는 것이 아니라, 적의 힘이 빠진 틈을 타 낫과 검을 휘두르며 돌격할 때 터져 나오는 의외의 살상력과 변수 창출 능력이 이 부대의 진정한 무서움입니다.`,
        stats: { 공격력: 5, 생존력: 7, 기동성: 9, 미션수행: 9, 유틸리티: 7 },
        recommended: [
          "상대의 공격 효율을 깎아내리며 끈질기게 소모전을 유도하는 분",
          "비행 능력을 활용해 적의 방어선을 무시하고 전술적 요충지를 선점하고 싶은 분",
          "디버프 뒤에 숨겨진 날카로운 한 방으로 역전의 기회를 노리는 분",
        ],
        notRecommended: [
          "직접적인 부활이나 힐링 수단이 핵심인 아미를 원하는 분",
          "돌격 시너지 없이 순수한 맷집만으로 정면 승부를 보길 원하는 분",
        ],
        units: [
          {
            name: "Knight of Shrouds",
            role: "지휘관",
            count: 1,
            description:
              "전장의 군주. 적의 관통력을 무력화하거나 아군에게 공격 명령을 내려, 수비적인 진형을 순식간에 공세로 전환시킨다.",
          },
          {
            name: "Spirit Hosts",
            role: "지원 전력",
            count: 3,
            description:
              "지휘관을 수호하는 망령들. 지휘관이 받는 피해를 대신 흡수하며 부대의 핵심 시너지가 끊기지 않도록 보호한다.",
          },
          {
            name: "Grimghast Reapers",
            role: "정예 전력",
            count: 5,
            description:
              "영혼을 거두는 전사들. 다수의 보병을 상대로 강력한 살상력을 보여주며, 돌격 시 의외의 폭발적인 대미지를 입힌다.",
          },
          {
            name: "Grimghast Reapers",
            role: "정예 전력",
            count: 5,
            description:
              "영혼을 거두는 전사들. 다수의 보병을 상대로 강력한 살상력을 보여주며, 돌격 시 의외의 폭발적인 대미지를 입힌다.",
          },
          {
            name: "Chainrasps",
            role: "기간 보병",
            count: 10,
            description:
              "기본 보병 무리. 숫자로 밀어붙여 거점을 점령하고, 디버프 지원을 받으며 끈질기게 전선을 유지한다.",
          },
          {
            name: "Chainrasps",
            role: "기간 보병",
            count: 10,
            description:
              "기본 보병 무리. 숫자로 밀어붙여 거점을 점령하고, 디버프 지원을 받으며 끈질기게 전선을 유지한다.",
          },
        ],
        playstyle: `슬래셔 호스트는 '공포를 통한 감쇄'가 핵심입니다. 나이트 오브 슈라우드와 스피릿 호스트를 중심으로 단단한 핵심 진형을 짜고, 적의 관통력을 깎아내며 상대의 공격을 무의미하게 만듭니다. 체인래스프들이 거점을 점령하며 버티는 동안, 분산 배치된 그림가스트 리퍼들이 적의 취약한 지점에 돌격하여 의외의 포텐셜을 터뜨려야 합니다. 마냥 맞기만 하는 것이 아니라, 상대가 디버프에 허우적거릴 때 치명적인 일격을 가하는 유연한 운영이 요구됩니다.`,
        imagePath: "/images/factions/nighthaunt/slasher-host.webp",
      },
    ],
  },
  {
    id: "soulblight-gravelords",
    name: "Soulblight Gravelords",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-death/soulblight-gravelords",
    alliance: "death",
    tagline: "영원한 밤을 지배하는 흡혈귀 군주들",
    lore: `뱀파이어 군주들이 이끄는 불사 군단. 죽음의 신 나이트의 피조물이지만 그의 지배에 도전할 만큼 강력한 흡혈귀들은 스스로의 왕국을 건설한다. 소울블라이트의 저주로 영생을 얻은 대신, 그들은 영원히 생명의 피를 갈망한다.

라두칸 왕조, 아이렌 왕조, 브리오박 왕조 등 다양한 혈통의 흡혈귀들이 각자의 방식으로 왕국을 통치한다. 그 아래엔 좀비, 스켈레톤, 좀비 드래곤으로 이루어진 불사의 군단이 끝없이 보충된다.`,
    color: "#3a1a5a",
    accentColor: "#c84a8f",
    imagePath: "/images/factions/soulblight/banner.webp",
    spearheads: [
      {
        id: "deathrattle-tomb-host",
        name: "Deathrattle Tomb Host",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-soulblight-gravelords-deathrattle-tomb-host-2025?queryID=1cf6c24842eacd896be4e6f4334f93c1",
        description: `고대 무덤에서 깨어난 끝없는 해골 군세입니다. 개별 해골 전사들은 약해 보일 수 있으나, 위대한 네크로맨서의 마법과 쓰러져도 다시 일어서는 불사의 회복력을 보여줍니다. 단단한 방패벽을 형성하여 전선을 유지하고 적을 서서히 압도하는 정석적인 언데드 아미입니다.`,
        stats: { 공격력: 6, 생존력: 9, 기동성: 4, 미션수행: 8, 유틸리티: 7 },
        recommended: [
          "강력한 방어력과 부활 능력을 바탕으로 한 소모전 플레이를 선호하는 분",
          "다수의 보병 모델을 운용하여 전장을 가득 메우는 시각적 만족감을 원하는 분",
          "상대의 공격을 묵묵히 버텨내며 후반 역전극을 노리는 침착한 플레이어",
        ],
        notRecommended: [
          "빠른 기동력으로 전장을 휘젓는 속도감 있는 플레이를 원하는 분",
          "낮은 이동 수치로 인해 초반 주도권을 잡지 못하는 답답함을 견디기 어려운 분",
        ],
        units: [
          {
            name: "Wight King",
            role: "지휘관",
            count: 1,
            description: "해골 군단을 이끄는 고대의 군주",
          },
          {
            name: "Deathrattle Skeletons",
            role: "기간 보병",
            count: 10,
            description:
              "툼 호스트의 핵심. 죽어도 다시 살아나는 규칙 덕분에 점령지 사수 능력이 독보적이다.",
          },
          {
            name: "Deathrattle Skeletons",
            role: "기간 보병",
            count: 10,
            description:
              "툼 호스트의 핵심. 죽어도 다시 살아나는 규칙 덕분에 점령지 사수 능력이 독보적이다.",
          },
          {
            name: "Barrow Knights",
            role: "기병 전력",
            count: 5,
            description:
              "아미의 유일한 기동 타격대. 돌격 시 충격 피해를 입히며 적의 측면을 공략한다. 부활 능력을 활용한 거침없는 플레이가 위협적이다",
          },
          {
            name: "Barrow Guard",
            role: "정예 전력",
            count: 10,
            description:
              "치명적인 저주받은 무기를 휘두르는 정예 전사들. 아미의 실질적인 화력을 담당한다.",
          },
        ],
        playstyle: `데스래틀 툼 호스트는 '움직이지 않는 성벽'처럼 운영해야 합니다. 기간 보병인 해골 전사들을 중앙 거점에 배치하고 지휘관의 부활 지원을 통해 최대한 시간을 법니다. 상대가 해골들과 늪에 빠진 사이, 정예 전력인 그레이브 가드가 결정적인 대미지를 입히고 블랙 나이츠가 빈틈을 찌르는 것이 승리 공식입니다.`,
        imagePath: "/images/factions/soulblight/deathrattle-tomb-host.jpg",
      },
      {
        id: "bloodcrave-hunt",
        name: "Bloodcrave Hunt",
        rarity: true,
        gwUrl:
          "https://games-island.eu/media/image/product/972598/lg/soulblight-gravelords-spearhead-bloodcrave-hunt.jpg",
        description: `피에 굶주린 흡혈귀 귀족들과 그들의 사냥개들이 펼치는 잔혹한 사냥입니다. 해골 군단보다 훨씬 빠르고 공격적이며, 우아하면서도 치명적인 속도로 적의 목을 노리는 아미입니다.`,
        stats: { 공격력: 8, 생존력: 7, 기동성: 8, 미션수행: 6, 유틸리티: 6 },
        recommended: [
          "강력한 영웅 유닛의 무쌍 플레이와 공격적인 돌격을 선호하는 분",
          "적을 공격함과 동시에 자신의 체력을 회복하는 유기적인 메커니즘을 즐기는 분",
          "기동성을 활용해 원하는 타이밍에 교전을 선택하고 싶은 분",
        ],
        notRecommended: [
          "모델 수가 적어 거점 점령 경쟁에서 수적 열세에 처하는 상황을 싫어하는 분",
          "핵심 영웅이 제거되었을 때 아미 전체의 힘이 급격히 빠지는 것을 우려하는 분",
        ],
        units: [
          {
            name: "Vampire Lord",
            role: "지휘관",
            count: 1,
            description:
              "강력한 근접 전투력과 마법 능력을 겸비한 리더. 아군 유닛의 공격 횟수를 늘려주는 능력이 탁월하다.",
          },
          {
            name: "Vargheists",
            role: "정예 전력",
            count: 3,
            description:
              "민첩하게 움직이며 적을 난도질하는 흡혈귀 전사들. 높은 기동성으로 적의 후방을 노린다.",
          },
          {
            name: "Deathrattle Skeletons",
            role: "기간 보병",
            count: 10,
            description: "죽어도 다시 부활하는 머리수로 압도하는 기간보병",
          },
          {
            name: "Deathrattle Skeletons",
            role: "기간 보병",
            count: 10,
            description: "죽어도 다시 부활하는 머리수로 압도하는 기간보병",
          },
          {
            name: "Blood Knights",
            role: "정예기병",
            count: 5,
            description:
              "소울블라이트의 꽃. 압도적인 돌격 위력과 중장갑을 갖춘 최정예 기병 전력이다.",
          },
        ],
        playstyle: `블러드크레이브 헌트는 '먼저 치고 회복하기'가 핵심입니다. 기간보병이 적을 묶어두는 동안, 지휘관인 뱀파이어 로드와 정예기병인 블러드 나이츠가 가장 위협적인 적 유닛에게 돌격합니다. 물량보다는 질로 승부해야 합니다.`,
        imagePath: "/images/factions/soulblight/bloodcrave-hunt.jpg",
      },
    ],
  },
  {
    id: "ironjawz",
    name: "Orruk Warclans — Ironjawz",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-destruction/orruk-warclans",
    alliance: "destruction",
    tagline: "힘이 전부인 난폭한 오크 군단",
    lore: `아이언죠즈는 오룩 중에서도 가장 크고 강력한 자들이다. 주먹으로 직접 두드려 만든 거친 갑옷을 두르고, 파괴와 전쟁 그 자체인 고카-모카 신을 섬긴다. 그들에게 전투는 종교이자 즐거움이다.
메가보스 고드락과 같은 위대한 전쟁군주 아래 뭉친 아이언죠즈는 영역을 가리지 않고 쳐들어가 가장 강한 적을 찾아 싸운다. 그들은 이기기 위해 싸우는 것이 아니라, 싸움 자체를 즐기기 위해 싸운다.`,
    color: "#1a5a1a",
    accentColor: "#c8a84c",
    imagePath: "/images/factions/ironjawz/banner.webp",
    spearheads: [
      {
        id: "ironjawz-bigmob",
        name: "Ironjawz Bigmob",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-orruk-warclans-ironjawz-bigmob-2025?queryID=536aeeec7476e35457d7a6517be817dc",
        description: `순수한 완력과 쇳덩이 갑옷으로 무장한 오룩들의 정예 보병 집단입니다. 복잡한 기교 대신 정면으로 들이받아 적의 방어선을 으깨버리는 전술을 구사합니다. 'Mighty Destroyers' 규칙을 통해 이동과 돌격에서 이득을 보며, 근접전이 시작되는 순간 적에게 탈출 불가능한 폭력을 선사합니다.`,
        stats: { 공격력: 9, 생존력: 8, 기동성: 4, 미션수행: 4, 유틸리티: 4 },
        recommended: [
          "강력한 중장갑 보병 유닛들의 묵직한 한 방을 선호하는 분",
          "높은 세이브 수치와 체력을 바탕으로 거점을 사수하는 플레이를 원하는 분",
          "아이언죠즈 특유의 거대하고 투박한 보병 미니어처에 매력을 느끼는 분",
        ],
        notRecommended: [
          "사격 무기가 전무하여 원거리 대응력을 중시하는 분",
          "기동력이 낮아 넓은 전장에서 상대의 유동적인 기동 플레이에 대처하기 힘든 분",
        ],
        units: [
          {
            name: "Megaboss",
            role: "지휘관",
            count: 1,
            description:
              "아미의 심장부이자 최고의 전사. 단단한 방어력과 강력한 공격력을 동시에 보유한 최고의 전사",
          },
          {
            name: "Ardboys",
            role: "기간 보병",
            count: 5,
            description:
              "아이언죠즈의 방패. 튼튼한 갑옷으로 적의 공격을 버텨내며 중앙 점령지를 사수하는 중추 역할.",
          },
          {
            name: "Ardboys",
            role: "기간 보병",
            count: 5,
            description:
              "아이언죠즈의 방패. 튼튼한 갑옷으로 적의 공격을 버텨내며 중앙 점령지를 사수하는 중추 역할.",
          },

          {
            name: "Brutes",
            role: "정예 전력",
            count: 5,
            description:
              "덩치 큰 적일수록 더 잔혹하게 몰아붙이는 정예 전사들. 적의 정예 유닛이나 괴수를 사냥하는 데 특화되어 있다.",
          },
          {
            name: "Brute Ragerz",
            role: "정예 전력",
            count: 3,
            description:
              "갑옷을 벗어던지고 광기에 휩싸인 전사들. 폭발적인 근접 대미지로 적의 핵심 라인을 분쇄한다.",
          },
        ],
        playstyle: `아이언죠즈 빅몹은 '압박과 분쇄'가 핵심입니다. 초반에는 아드보이즈가 중앙으로 전진하며 버티고, 그 뒤에서 메가보스가 화력을 조율합니다. 적이 전선에 맞붙는 순간 브루트와 레이저즈가 투입되어 적을 섬멸합니다. 사격이 없는 대신 일단 붙기만 하면 누구보다 강력하므로, 돌격 거리 관리가 승패의 핵심입니다.`,
        imagePath: "/images/factions/ironjawz/ironjawz-bigmob.jpg",
      },
    ],
  },
  {
    id: "kruleboyz",
    name: "Orruk Warclans — Kruleboyz",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-destruction/orruk-warclans",
    alliance: "destruction",
    tagline: "비열하고 잔혹한 녹색 군단",
    lore: `크룰보이즈는 오룩 중에서 특히나 더 비열하고 교활한 자들이 모인 세력입니다. 이기기 위해 교활한 술책과 무기에 독을 바르는 등, 일반적인 오룩과는 다르게 싸움법을 선호합니다.
    `,
    color: "#1a5a1a",
    accentColor: "#c8a84c",
    imagePath: "/images/factions/kruleboyz/banner.webp",
    spearheads: [
      {
        id: "swampskulka-gang",
        name: "Swampskulka Gang",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-orruk-warclans-2024?queryID=536aeeec7476e35457d7a6517be817dc",
        description: `늪지대의 안개 속에서 기습을 노리는 교활한 오룩 군단입니다. 정면 승부보다는 비열한 함정과 독 화살로 적을 약화시키는 데 능숙합니다. 'Venom-encrusted Weapons'를 통해 방어력이 높은 적에게도 치명적인 상처를 입히며, 적을 농락하는 전술적 재미가 가득한 아미입니다.`,
        stats: { 공격력: 7, 생존력: 5, 기동성: 7, 미션수행: 8, 유틸리티: 8 },
        recommended: [
          "원거리 사격과 디버프를 조합해 상대를 서서히 무너뜨리는 플레이를 원하는 분",
          "독 대미지를 통해 변수 창출과 전략적 우위를 점하고 싶은 분",
          "다양한 유닛 구성으로 미션 수행에 유연하게 대처하고 싶은 분",
        ],
        notRecommended: [
          "정직한 탱킹력으로 전면에서 버티는 플레이를 선호하는 분",
          "낮은 방어력으로 인해 집중 공격 한 번에 유닛이 무너지는 상황을 견디기 힘든 분",
        ],
        units: [
          {
            name: "Killaboss with Stab-grot",
            role: "지휘관",
            count: 1,
            description:
              "비열한 리더. 아군이 공포에 질려 도망치지 못하게 통제하며 근접전에서도 기회주의적인 공격을 날린다.",
          },
          {
            name: "Murknob with Belcha-banna",
            role: "지원 전력",
            count: 1,
            description:
              "마법 저항 깃발을 든 전사. 적의 마법으로부터 아군을 보호하고 적에게 심리적 위축을 가한다.",
          },
          {
            name: "Gutrippaz",
            role: "기간 보병",
            count: 5,
            description:
              "독 묻은 창을 든 보병대. 무서운 방패 효과로 적의 명중률을 낮추며 끈질기게 버틴다.",
          },
          {
            name: "Gutrippaz",
            role: "기간 보병",
            count: 5,
            description:
              "독 묻은 창을 든 보병대. 무서운 방패 효과로 적의 명중률을 낮추며 끈질기게 버틴다.",
          },
          {
            name: "Man-skewer Boltboyz",
            role: "원거리 전력",
            count: 3,
            description:
              "크룰보이즈의 핵심 화력. 먼 거리에서 치명적인 독 화살을 쏘아 적의 중요 유닛을 저격한다.",
          },
          {
            name: "Beast-skewer Killbow",
            role: "전쟁기계",
            count: 1,
            description: "묵직한 쇠뇌를 원거리에서 쏘는 전쟁병기",
          },
        ],
        playstyle: `스왐프스컬카 갱은 '철저한 거리 유지'가 생명입니다. 홉그롯과 거트리파즈가 전방에서 시간을 버는 동안, 볼트보이즈가 후방에서 적의 고포인트 유닛을 저격해야 합니다. 킬라보스는 패주하는 아군을 강제로 붙잡으며 거점을 유지하고, 적이 독으로 인해 취약해진 순간을 노려 승기를 잡아야 합니다.`,
        imagePath: "/images/factions/kruleboyz/swampskulka-gang.jpg",
      },
    ],
  },
  {
    id: "gloomspite-gitz",
    name: "Gloomspite Gitz",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-destruction/gloomspite-gitz",
    alliance: "destruction",
    tagline: "달빛에 미쳐 날뛰는 고블린 떼",
    lore: `글룸스파이트 기츠는 달의 저주를 받은 그로트, 트로것, 스퀴그로 구성된 혼돈의 군단이다. 나쁜 문 — 차가운 달 — 이 하늘에 떠오를 때, 그들의 광기와 힘은 최고조에 달한다. 그들은 수도 많고 예측불가능하다.

굿협, 샤만, 스퀴그 허더들이 이끄는 이 집단은 전략이라는 것이 거의 없다. 하지만 이 무작위성 자체가 그들의 강점이기도 하다 — 적도, 아군도, 심지어 그들 자신조차 무슨 일이 일어날지 예측할 수 없다.`,
    color: "#1a3a1a",
    accentColor: "#8fc41a",
    imagePath: "/images/factions/gloomspite-gitz/banner.webp",
    spearheads: [
      {
        id: "bad-moon-madmob",
        name: "Bad Moon Madmob",
        rarity: true,
        gwUrl:
          "https://gamesempire.com.au/cdn/shop/files/5011921256938_x700.jpg?v=1759363187",
        description: `배드 문의 빛 아래 광기에 빠진 고블린 군단입니다. 수많은 스태파들이 달려드는 동안, 거대한 트로고스가 적의 방어선을 뭉개버립니다. 'Bad Moon'의 위상에 따라 아미 전체가 무작위적인 버프를 받으며, 예측 불가능하지만 폭발적인 잠재력을 가진 전형적인 깃츠 아미입니다.`,
        stats: { 공격력: 6, 생존력: 7, 기동성: 5, 미션수행: 8, 유틸리티: 8 },
        recommended: [
          "무작위로 발생하는 강력한 버프와 변수를 즐기는 전술가",
          "물량 보병과 강력한 맷집의 괴수를 함께 운용하고 싶은 분",
          "배드 문 테마의 유쾌하고 기괴한 디자인을 선호하는 분",
        ],
        notRecommended: [
          "주사위 결과나 무작위 버프에 따라 전략이 꼬이는 상황을 극도로 싫어하는 분",
          "개별 고블린 유닛의 낮은 생존력으로 인해 유닛이 쉽게 지워지는 것을 견디기 힘든 분",
        ],
        units: [
          {
            name: "Loonboss",
            role: "지휘관",
            count: 1,
            description:
              "광기에 찬 고블린 리더. 주변 보병 유닛의 근접 대미지를 증폭시키는 능력을 보유한다.",
          },
          {
            name: "Moonclan Stabbas",
            role: "기간 보병",
            count: 10,
            description:
              "깃츠의 머릿수를 담당하는 물량 부대. 점령지를 뒤덮어 적의 진격을 늦추고 미션 점수를 챙긴다.",
          },
          {
            name: "Moonclan Stabbas",
            role: "기간 보병",
            count: 10,
            description:
              "깃츠의 머릿수를 담당하는 물량 부대. 점령지를 뒤덮어 적의 진격을 늦추고 미션 점수를 챙긴다.",
          },
          {
            name: "Squig Hoppers",
            role: "정예 전력",
            count: 5,
            description:
              "예측불허로 통통 튀는 기병, 예상치 못한 곳에서 등장하고 깜짝놀랄 데미지를 가한다.",
          },
          {
            name: "Squig Hoppers",
            role: "정예 전력",
            count: 5,
            description:
              "예측불허로 통통 튀는 기병, 예상치 못한 곳에서 등장하고 깜짝놀랄 데미지를 가한다.",
          },
          {
            name: "Rockgut Troggoths",
            role: "괴수",
            count: 3,
            description:
              "매우 단단한 피부와 강력한 재생 능력을 가진 괴수 전력. 아미의 실질적인 탱킹과 딜링을 담당한다.",
          },
        ],
        playstyle: `배드 문 매드몹은 '배드 문의 위치'를 계속 확인하며 싸워야 합니다. 기간 보병인 슈타즈/스타바즈로 전선을 넓게 펼쳐 적을 유인하고, 적이 가까이 오면 숨겨둔 퍼나틱스를 사출해 타격을 입힙니다. 그동안 락것 트로그오스가 중앙에서 버티며 적의 주력을 묶어두는 것이 핵심입니다. 운이 따라준다면 배드 문의 가호 아래 무적의 군단이 될 수 있습니다.`,
        imagePath: "/images/factions/gloomspite-gitz/bad-moon-madmob.webp",
      },
      {
        id: "snarlpack-huntaz",
        name: "Snarlpack Huntaz",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-gloomspite-gitz-snarlpack-huntaz-2025?queryID=f50f534727ec6a14bd70f984c2fd5776",
        description: `태양을 쫓는 늑대 기병들과 기괴한 전차들이 전장을 휩쓰는 고속 약탈대입니다. 늑대의 날렵함과 전차의 파괴력을 결합하여, 적이 전열을 가다듬기도 전에 측면을 찢어발깁니다. 끊임없이 움직이며 적을 교란하고, 가장 취약한 지점에 화력을 집중하는 사냥꾼들의 군단입니다.`,
        stats: { 공격력: 4, 생존력: 3, 기동성: 10, 미션수행: 10, 유틸리티: 6 },
        recommended: [
          "압도적인 기동성으로 전장 전체를 위협하는 플레이를 선호하는 분",
          "전차의 충격 피해와 기병의 유연함을 동시에 활용하고 싶은 분",
          "독특한 늑대 기병과 기괴한 전차 미니어처의 조화를 즐기는 분",
        ],
        notRecommended: [
          "한 지점에 고정되어 튼튼한 방어선을 구축하는 플레이를 원하는 분",
          "유닛들의 방어력이 낮아 컨트롤 실수로 인한 피해를 감수하기 어려운 분",
        ],
        units: [
          {
            name: "SnarlBoss",
            role: "지휘관",
            count: 1,
            description:
              "늑대 기병대를 이끄는 잔혹한 우두머리. 아군 기병과 전차들의 돌격 기세를 조율하며 직접적인 전투력도 상당하다.",
          },
          {
            name: "Wolfgit Retinue",
            role: "지원 전력",
            count: 2,
            description:
              "보스를 보좌하는 수행원들. 지휘관 근처에서 보조적인 역할을 수행하며 적의 시선을 분산시킨다.",
          },
          {
            name: "Snarlpack Cavalry",
            role: "기병 전력",
            count: 3,
            description:
              "두 개의 분대로 나뉘어 운용되는 아미의 주력. 빠른 기동력을 바탕으로 적의 측면을 타격하고 목표물을 선점한다.",
          },
          {
            name: "Snarlpack Cavalry",
            role: "기병 전력",
            count: 3,
            description:
              "두 개의 분대로 나뉘어 운용되는 아미의 주력. 빠른 기동력을 바탕으로 적의 측면을 타격하고 목표물을 선점한다.",
          },
          {
            name: "Sunsteala Wheela",
            role: "전쟁기계",
            count: 1,
            description:
              "전장을 휘젓는 두 대의 전차. 돌격 시 적 보병진을 짓밟아 치명적인 대미지를 입히는 아미의 타격 핵심.",
          },
          {
            name: "Sunsteala Wheela",
            role: "전쟁기계",
            count: 1,
            description:
              "전장을 휘젓는 두 대의 전차. 돌격 시 적 보병진을 짓밟아 치명적인 대미지를 입히는 아미의 타격 핵심.",
          },
        ],
        playstyle: `스나팩 헌타즈의 핵심은 '동시 다발적 돌격'입니다. 기병 전력인 스나팩 카발리가 적의 시선을 끄는 사이, 괴수/전쟁기계 카테고리의 선스틸라 휠라들이 강력한 충격 피해를 주며 적의 중심부를 돌파합니다. 스나보스는 이 혼란을 틈타 핵심 타겟을 제거하며, 기동성을 살려 적이 대응하기 힘든 각도에서 계속해서 교전을 강요하는 것이 승리 공식입니다.`,
        imagePath: "/images/factions/gloomspite-gitz/snarlpack-huntaz.jpg",
      },
    ],
  },

  // ── Grand Alliance Order ─────────────────────────────────────────
  {
    id: "cities-of-sigmar",
    name: "Cities of Sigmar",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/cities-of-sigmar",
    alliance: "order",
    tagline: "필멸자들이 세운 마지막 희망의 도시들",
    lore: `카오스의 침략 속에서도 무너지지 않은 필멸자들의 도시 연맹. 인간, 아엘프, 듀아딘이 함께 모여 성벽을 쌓고, 불과 피로 문명을 지켜낸다.

지그마의 명 아래 세워진 이 도시들은 각기 다른 신념과 이해관계를 지녔지만, 살아남기 위해 하나로 뭉쳤다. 끝없는 전쟁 속에서 그들은 매일을 버텨낸다 — 신의 번개도, 불사의 육체도 없이, 오직 의지와 강철, 그리고 서로에 대한 믿음으로.`,
    color: "#3a5a7a",
    accentColor: "#c9a84c",
    imagePath: "/images/factions/cities-of-sigmar/banner.webp",
    spearheads: [
      {
        id: "castelite-company",
        name: "Castelite Company",
        gwUrl:
          "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F4plzphippkdf1.png",
        rarity: true,
        description: `지그마의 도시를 수호하는 정예 군단입니다. 견고한 보병 방진 뒤에서 강력한 대포가 불을 뿜고, 중갑 기사단이 적의 측면을 분쇄합니다. 규율 잡힌 사격과 근접전의 완벽한 조화를 보여주는 인간 연합군의 정석적인 구성입니다.`,
        stats: { 공격력: 6, 생존력: 5, 기동성: 6, 미션수행: 5, 유틸리티: 5 },
        recommended: [
          "보병, 기병, 포병의 균형 잡힌 연합 작전을 선호하는 분",
          "니가와 전략과 강력한 돌격 한 방을 동시에 갖추고 싶은 분",
          "정통 판타지 군대의 웅장한 디자인을 좋아하는 분",
        ],
        notRecommended: [
          "개별 유닛의 낮은 능력치를 커버하기 위한 복잡한 시너지 관리가 귀찮은 분",
          "속도가 느린 보병대 위주의 전진 압박을 선호하지 않는 분",
        ],
        units: [
          {
            name: "Freeguild Cavalier Marshal",
            role: "지휘관",
            count: 1,
            description:
              "기마 상태의 지휘관. 기사단의 돌격력을 강화하며 신속한 전선 지원을 담당한다.",
          },
          {
            name: "Freeguild Steelhelms",
            role: "기간 보병",
            count: 5,
            description:
              "도시의 강철 방패. 거점을 점령하고 적의 돌격을 몸으로 받아내며 전선을 유지한다.",
          },
          {
            name: "Freeguild Steelhelms",
            role: "기간 보병",
            count: 5,
            description:
              "도시의 강철 방패. 거점을 점령하고 적의 돌격을 몸으로 받아내며 전선을 유지한다.",
          },
          {
            name: "Freeguild Cavaliers",
            role: "기병 전력",
            count: 5,
            description:
              "강력한 돌격력을 가진 중기병대. 적의 약한 지점을 타격하거나 측면을 분쇄하는 충격군 역할.",
          },
          {
            name: "Ironweld Great Cannon",
            role: "전쟁기계",
            count: 1,
            description:
              "도시의 자부심인 거대 대포. 먼 거리에서 적의 괴수나 중장갑 유닛에게 치명적인 화력을 쏟아붓는다.",
          },
        ],
        playstyle: `카스텔라이트 컴퍼니는 '방패와 창'의 원리를 따릅니다. 스틸헬름이 전선에서 버티는 동안 그레이트 캐논이 적의 위협 요소를 제거합니다. 적이 아군 방진에 부딪혀 주춤하는 순간, 카발리어 기사단이 돌격하여 전투를 종결짓는 운영이 핵심입니다.`,
        imagePath: "/images/factions/cities-of-sigmar/castelite-company.webp",
      },
      {
        id: "fusil-platoon",
        name: "Fusil-Platoon",
        rarity: false,
        gwUrl:
          "https://funforge.co.kr/web/product/big/202505/4ffe07de5ab3532e5ebf37a2d081c847.jpg",
        description: `화약 냄새 진동하는 사격 전문 부대입니다. 방패를 든 사수들이 견고한 사격 진형을 구축하고, 끊임없는 화망을 형성하여 접근하는 모든 적을 잿더미로 만듭니다. 수비적인 운용을 통해 적의 접근을 원천 봉쇄하는 데 특화되어 있습니다.`,
        stats: { 공격력: 8, 생존력: 6, 기동성: 4, 미션수행: 6, 유틸리티: 7 },
        recommended: [
          "압도적인 사격 화력으로 적이 다가오기 전에 전멸시키고 싶은 분",
          "수비적인 진형 구축과 화망 운용을 즐기는 전술가",
          "머스킷과 화약병기 테마의 군대를 선호하는 분",
        ],
        notRecommended: [
          "적진 깊숙이 침투하여 휘젓는 기동성 높은 플레이를 선호하는 분",
          "사격 진형이 무너졌을 때 급격히 약해지는 유리대포 스타일을 싫어하는 분",
        ],
        units: [
          {
            name: "Freeguild Fusil-Major on Ogor Warhulk",
            role: "지휘관",
            count: 1,
            description:
              "오고어의 등에 올라탄 사격 지휘관. 높은 위치에서 전장을 관측하며 사수들의 명중률을 높인다.",
          },
          {
            name: "Alchemite Warforger",
            role: "핵심 전력",
            count: 1,
            description: "아군의 무기를 축성해주는 사제형 유닛",
          },
          {
            name: "Freeguild Fusiliers",
            role: "사격 전력",
            count: 5,
            description:
              "방패와 총으로 무장한 사격 보병대. 진형을 유지하며 적에게 지속적인 사격을 퍼붓는다.",
          },
          {
            name: "Freeguild Fusiliers",
            role: "사격 전력",
            count: 5,
            description:
              "두 번째 사격 분대. 다른 사격 각도를 확보하거나 화력을 집중하여 적의 접근을 막는다.",
          },
          {
            name: "Wildercorps Hunters",
            role: "지원 전력",
            count: 11,
            description:
              "사격 진형의 틈을 메우거나 적의 기습을 차단하는 보조 전력.",
          },
        ],
        playstyle: `퓨질 플래툰은 '움직이는 요새'입니다. 오고어 워헐크의 지휘 아래 퓨질리어 분대들이 겹겹이 사격망을 구축합니다. 적이 가까이 오기 전에 전쟁기계와 총기로 최대한 숫자를 줄이는 것이 관건이며, 지형을 활용해 사선(LOS)을 확보하는 능력이 승패를 결정합니다.`,
        imagePath: "/images/factions/cities-of-sigmar/fusil-platoon.webp",
      },
    ],
  },
  {
    id: "fyreslayers",
    name: "Fyreslayers",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/fyreslayers",
    alliance: "order",
    tagline: "복수를 맹세한 광전사 듀아딘들",
    lore: `불의 신 그리므니르의 후예를 자처하는 듀아딘 광전사들. 그들은 신의 힘이 깃들었다고 믿는 ‘우르-골드’를 수집하기 위해, 계약과 보수를 대가로 모든 전장에 뛰어든다.
파이어슬레이어들은 전투를 단순한 생계나 명예가 아닌 신앙으로 여긴다. 그들의 육신에 새겨지는 황금 룬은 그리므니르의 힘을 일시적으로 불러오며, 언젠가 모든 우르-골드를 되찾아 죽은 신을 다시 완전하게 만들기를 꿈꾼다.`,
    color: "#8a3a10",
    accentColor: "#f0a030",
    imagePath: "/images/factions/fyreslayers/banner.webp",
    spearheads: [
      {
        id: "saga-axeband",
        name: "Saga Axeband",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-fyreslayers-2024?queryID=8e0f3fdb5baf310742acbc5849b1203d",
        rarity: false,
        description: `전설적인 영웅들의 서사를 몸소 실천하는 파이어슬레이어즈의 정예 부대입니다. 갑옷 대신 금빛 룬을 피부에 박아 넣은 이들은 죽음을 두려워하지 않고 적진으로 돌격합니다. 전투가 치열해질수록 룬의 마법을 해방하여 신체 한계를 뛰어넘는 위력을 보여줍니다.`,
        stats: { 공격력: 8, 생존력: 9, 기동성: 4, 미션수행: 6, 유틸리티: 7 },
        recommended: [
          "매우 높은 내구도를 바탕으로 정면 승부를 즐기는 분",
          "근접전에서 주사위 결과에 따라 폭발적인 대미지를 뽑아내고 싶은 분",
          "룬 시스템을 통해 매 라운드 유동적인 버프를 선택하는 전략을 선호하는 분",
        ],
        notRecommended: [
          "기동성이 낮아 발이 느린 보병 중심의 운용을 답답해하는 분",
          "사격 유닛의 부재로 인해 원거리 대응력을 중시하는 분",
        ],
        units: [
          {
            name: "Battlesmith",
            role: "지휘관",
            count: 1,
            description:
              "군단의 역사를 기록하는 자. 아군의 세이브를 개선하거나 사기를 진작시켜 방어력을 극대화한다.",
          },
          {
            name: "Vulkite Berzerkers",
            role: "기간 보병",
            count: 5,
            description:
              "전투의 주축. 도끼와 방패를 들고 전방에서 적의 공격을 받아내며 끈질기게 버틴다.",
          },
          {
            name: "Vulkite Berzerkers",
            role: "기간 보병",
            count: 5,
            description:
              "또 다른 베르제르커 분대. 다른 거점을 사수하거나 중앙 힘 싸움에 힘을 보탠다.",
          },
          {
            name: "Hearthguard Berzerkers",
            role: "정예 전력",
            count: 5,
            description:
              "지휘관을 호위하는 강력한 전사들. 거대한 무기를 휘둘러 적의 정예병이나 괴수에게 큰 피해를 입힌다.",
          },
          {
            name: "Hearthguard Berzerkers",
            role: "정예 전력",
            count: 5,
            description:
              "지휘관을 호위하는 강력한 전사들. 거대한 무기를 휘둘러 적의 정예병이나 괴수에게 큰 피해를 입힌다.",
          },
        ],
        playstyle: `사가 액스밴드는 '중앙 점거와 버티기'가 핵심입니다. 배틀스미스의 버프를 받은 베르제르커들이 중앙 거점에서 성벽처럼 버티는 동안, 룬의 힘을 적절한 타이밍에 발동시켜 공격력을 폭증시켜야 합니다. 상대가 아군 방어선을 뚫지 못해 지쳐갈 때, 하스 가드들이 돌격하여 승기를 굳히는 묵직한 운영이 필요합니다.`,
        imagePath: "/images/factions/fyreslayers/saga-axeband.jpg",
      },
    ],
  },
  {
    id: "idoneth-deepkin",
    name: "Idoneth Deepkin",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/idoneth-deepkin",
    alliance: "order",
    tagline: "영혼을 사냥하는 바다의 망령들",
    lore: `바다 깊은 곳에 숨어 사는 저주받은 아엘프들. 영혼이 불완전하게 태어나는 운명을 지닌 그들은, 살아남기 위해 다른 종족의 영혼을 사냥해야만 한다.

아이도네스 딥킨은 해저 왕국에 숨어 세상과 단절된 채 살아가지만, 필요할 때마다 갑작스럽게 수면 위로 나타나 마을과 군대를 휩쓸고 사라진다. 그들의 침공은 파도처럼 조용히 다가와 모든 생명을 앗아가며, 흔적조차 남기지 않는다.`,
    color: "#0d4060",
    accentColor: "#2ab8c8",
    imagePath: "/images/factions/idoneth-deepkin/banner.webp",
    spearheads: [
      {
        id: "akhelian-tide-guard",
        name: "Akhelian Tide Guard",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-idoneth-deepkin-akhelian-tide-guard-2025?queryID=a068dc935467c1b8dfd2ac56c4c3b039",
        description: `바다의 분노를 형상화한 정예 습격대입니다. 강력한 해수 괴수와 날렵한 기병들이 중심이 되어, 적이 대응하기 전에 치명적인 타격을 입히고 물러납니다. 매 라운드 변화하는 바다의 위상에 맞춰 전술을 전개하며, 결정적인 순간에 적을 압살하는 폭발력을 지니고 있습니다.`,
        stats: { 공격력: 7, 생존력: 7, 기동성: 10, 미션수행: 7, 유틸리티: 5 },
        recommended: [
          "소수의 정예 유닛으로 적의 핵심을 정밀 타격하는 스타일을 선호하는 분",
          "높은 기동성과 강력한 괴수의 파괴력을 동시에 느끼고 싶은 분",
          "심해 생물 테마의 화려하고 독특한 모델을 좋아하는 분",
        ],
        notRecommended: [
          "머릿수가 적어 거점 점령 및 유지력 싸움에서 밀리는 것을 싫어하는 분",
          "라운드별로 변화하는 타이드 규칙을 관리하는 것이 복잡하게 느껴지는 분",
        ],
        units: [
          {
            name: "Akhelian King",
            role: "지휘관",
            count: 1,
            description:
              "심해의 군주. 압도적인 근접 전투력과 함께 주변 아켈리안 유닛들의 기동력과 공격력을 강화한다.",
          },
          {
            name: "Akhelian Ishlaen Guard",
            role: "기병 전력",
            count: 3,
            description:
              "전기뱀장어를 탄 기병대. 적의 사격을 튕겨내며 돌격하여 진형을 무너뜨리는 데 특화되어 있다.",
          },
          {
            name: "Akhelian Morrsarr Guard",
            role: "기병 전력",
            count: 3,
            description:
              "공격적인 성향의 기병대. 강력한 전기 충격으로 적에게 막대한 피해를 입히는 타격 전력.",
          },
          {
            name: "Namarti Reavers",
            role: "기간 보병",
            count: 10,
            description:
              "거대한 양손 무기를 휘두르는 보병대. 보병 유닛을 상대할 때 특히 잔혹한 위력을 발휘한다.",
          },
        ],
        playstyle: `아켈리안 타이드 가드는 '히트 앤 런'의 정석입니다. 초반에는 기동성을 살려 적의 사선을 피하고, 3라운드 '하이 타이드' 타이밍에 알로펙스와 킹, 기병대가 동시에 돌격하여 승기를 잡아야 합니다. 유닛 하나하나가 소중하므로 불필요한 소모전을 피하는 것이 핵심입니다.`,
        imagePath: "/images/factions/idoneth-deepkin/akhelian-tide-guard.jpg",
      },
      {
        id: "soulraid-hunt",
        name: "Soulraid Hunt",
        gwUrl:
          "https://www.belloflostsouls.net/wp-content/uploads/2024/06/Idoenth-Deepkin-Soulraid-Hunt.jpg",
        rarity: true,
        description: `영혼을 수확하기 위해 지상으로 올라온 나마르티 부대입니다. 수많은 보병이 화살 비를 퍼붓고 창으로 적을 저지하는 동안, 마법적인 지원 유닛들이 적의 감각을 흐트러뜨립니다. 아켈리안 중심의 부대보다 물량이 많아 거점 점령전에서 우위를 점하기 유리합니다.`,
        stats: { 공격력: 7, 생존력: 5, 기동성: 7, 미션수행: 9, 유틸리티: 8 },
        recommended: [
          "많은 수의 보병을 운용하며 미션 점수를 챙기는 플레이를 선호하는 분",
          "사격과 마법 지원을 통해 전장을 제어하고 싶은 분",
          "나마르티 특유의 창백하고 신비로운 분위기를 좋아하는 분",
        ],
        notRecommended: [
          "개별 모델의 방어력이 낮아 광역 공격이나 집중 포화에 취약한 것을 싫어하는 분",
          "강력한 단일 타격력보다는 누적 대미지에 의존하는 방식을 답답해하는 분",
        ],
        units: [
          {
            name: "Ishann Soulrender",
            role: "지휘관",
            count: 1,
            description:
              "영혼 수확자. 죽은 나마르티 보병을 부활시키며 전선을 유지하는 아미의 핵심 지휘관.",
          },
          {
            name: "Namarti Thralls",
            role: "기간 보병",
            count: 5,
            description:
              "거대한 양손 무기를 휘두르는 보병대. 괴수 유닛을 상대할 때 특히 잔혹한 위력을 발휘한다.",
          },
          {
            name: "Namarti Thralls",
            role: "기간 보병",
            count: 5,
            description:
              "거대한 양손 무기를 휘두르는 보병대. 괴수 유닛을 상대할 때 특히 잔혹한 위력을 발휘한다.",
          },
          {
            name: "Akhelian Morrsarr Guard",
            role: "기병 전력",
            count: 3,
            description:
              "공격적인 성향의 기병대. 강력한 전기 충격으로 적에게 막대한 피해를 입히는 타격 전력.",
          },
          {
            name: "Akhelian Allopex",
            role: "괴수",
            count: 1,
            description:
              "나마르티 부대를 지원하는 강력한 해수 괴수. 보병들이 거점을 점령하는 동안 위협적인 적을 제거한다.",
          },
        ],
        playstyle: `소울레이드 헌트는 '소모전과 부활'을 활용합니다. 증원이 있는 괴수 유닛을 적극적으로 소모하여 적들을 만신창이로 만든 뒤, 후속하는 보병들로 약해진 적들을 유린합니다.`,
        imagePath: "/images/factions/idoneth-deepkin/soulraid-hunt.webp",
      },
    ],
  },
  {
    id: "kharadron-overlords",
    name: "Kharadron Overlords",
    alliance: "order",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/kharadron-overlords",
    tagline: "하늘을 지배하는 탐욕스러운 듀아딘 상인들",
    lore: `하늘을 항해하는 듀아딘 상인 연합. 한때 신을 섬기던 그들은 몰락의 시대 이후 스스로를 지키기 위해 신앙을 버리고, ‘카라드론 코드’라 불리는 철저한 법과 계약의 체계를 세웠다.
부유한 공중 항구를 거점으로 활동하는 그들은 에테르-골드를 채굴하고 거래하며 막대한 부를 축적한다. 카라드론 오버로드에게 전쟁은 신념이 아니라 사업이다 — 계약이 성립되는 순간, 그들의 함대는 어디든 도달한다.`,
    color: "#2a5a7a",
    accentColor: "#c0d0e0",
    imagePath: "/images/factions/kharadron-overlords/banner.webp",
    spearheads: [
      {
        id: "skyhammer-task-force",
        name: "Skyhammer Task Force",
        rarity: true,
        gwUrl:
          "https://assets.kogan.com/images/mightyape/MPE-40712387/1-7aa87e37e1-328580178.jpeg?auto=webp&bg-color=fff&canvas=1200%2C800&dpr=1&enable=upscale&fit=bounds&height=800&quality=90&width=1200",
        description: `하늘을 지배하는 카라드론의 정예 함대입니다. 견고한 비공정을 기반으로 보병들이 신속하게 전개하며, 압도적인 화망을 형성하여 적의 접근을 원천 봉쇄합니다. 공중 기동력과 사격 화력의 완벽한 조화를 통해 전장의 주도권을 쥐는 데 특화되어 있습니다.`,
        stats: { 공격력: 8, 생존력: 6, 기동성: 9, 미션수행: 6, 유틸리티: 7 },
        recommended: [
          "비공정을 활용한 고속 기동과 공중 사격전을 즐기는 분",
          "강력한 원거리 화력으로 적이 붙기 전에 섬멸하고 싶은 분",
          "스팀펑크 스타일의 기계 장치와 비공정 미니어처를 선호하는 분",
        ],
        notRecommended: [
          "직접적인 근접 난타전을 선호하는 분",
          "유닛 숫자가 적어 개별 모델의 손실이 뼈아프게 다가오는 것을 싫어하는 분",
        ],
        units: [
          {
            name: "Arkanaut Admiral",
            role: "지휘관",
            count: 1,
            description:
              "함대의 제독. 비공정의 효율을 극대화하고 아군 유닛들에게 강력한 사격 명령을 하달한다.",
          },
          {
            name: "Arkanaut Company",
            role: "기간 보병",
            count: 5,
            description:
              "카라드론의 주력 보병. 거점을 점령하고 근거리 사격과 투척 무기로 전선을 방어한다.",
          },
          {
            name: "Arkanaut Company",
            role: "기간 보병",
            count: 5,
            description:
              "카라드론의 주력 보병. 거점을 점령하고 근거리 사격과 투척 무기로 전선을 방어한다.",
          },
          {
            name: "Skywardens",
            role: "기병 전력",
            count: 3,
            description:
              "비행 장비를 착용한 공중 보병. 빠른 기동력을 바탕으로 적의 측면을 타격하거나 비공정을 호위한다.",
          },
          {
            name: "Arkanaut Frigate",
            role: "전쟁기계",
            count: 1,
            description:
              "함대의 핵심 전함. 강력한 중포를 발사하며 아군 보병을 수송하고 공중에서 전장을 압박한다.",
          },
        ],
        playstyle: `스카이해머 태스크 포스는 '비공정의 사선 확보'가 핵심입니다. 프리깃함에 보병을 태워 유리한 고지로 신속히 이동시킨 뒤, 내린 보병들이 거점을 점령하는 동안 프리깃과 제독이 강력한 화력 지원을 제공합니다. 스카이워든은 상대의 기습을 차단하거나 취약한 지점을 타격하는 유동적인 운용이 필요합니다.`,
        imagePath:
          "/images/factions/kharadron-overlords/skyhammer-task-force.webp",
      },
      {
        id: "grundstok-trailblazers",
        name: "Grundstok Trailblazers",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-kharadron-overlords-grundstok-trailblazers-2025?queryID=6b738ef351abfeb7e8daccfd04faceef",
        rarity: false,
        description: `전문적인 용병 사수들과 소형 비행정으로 구성된 유격 부대입니다. 대형 전함 대신 날렵한 기동 병기를 활용하여 적을 끊임없이 괴롭히며, 정밀한 사격을 통해 적의 지휘 체계를 무너뜨립니다. 정면 대결보다는 철저한 거리 유격전에 최적화되어 있습니다.`,
        stats: { 공격력: 9, 생존력: 5, 기동성: 10, 미션수행: 7, 유틸리티: 6 },
        recommended: [
          "히트 앤 런 스타일의 극단적인 사격 유격전을 선호하는 분",
          "높은 기동성을 바탕으로 적의 약점만 골라 타격하고 싶은 분",
          "정예 사수 중심의 소수 정예 운영을 즐기는 분",
        ],
        notRecommended: [
          "적의 돌격을 몸으로 받아내며 버텨야 하는 상황을 힘들어하는 분",
          "사격 주사위 운에 따라 전황이 크게 바뀌는 것에 부담을 느끼는 분",
        ],
        units: [
          {
            name: "Aether-Khemist",
            role: "지휘관",
            count: 1,
            description:
              "연금술사 지휘관. 아군의 무기를 강화하거나 가스를 살포하여 적의 능력을 약화시킨다.",
          },
          {
            name: "Grundstok Gunhauler",
            role: "전쟁기계",
            count: 1,
            description:
              "소형 고속 비행정. 뛰어난 기동성으로 적을 교란하며 강력한 보조포를 사격한다.",
          },
          {
            name: "Grundstok Thunderers",
            role: "사격 전력",
            count: 5,
            description:
              "다양한 특수 화기로 무장한 정예 사수들. 거리에 따라 치명적인 화력을 쏟아붓는다.",
          },
          {
            name: "Skywardens",
            role: "기병 전력",
            count: 3,
            description:
              "하늘을 날며 지상의 적을 저격하고 필요 시 신속하게 거점을 점령하는 공중 유격대.",
          },
        ],
        playstyle: `그룬드스톡 트레일블레이저스는 '철저한 거리 조절'이 생명입니다. 건하울러가 선봉에서 적의 시선을 끌고 기동을 방해하는 동안, 썬더러와 케미스트의 시너지로 화력을 극대화해 적을 제거합니다. 기병 전력인 스카이워든은 미션 점수를 챙기거나 적 후방을 흔드는 용도로 사용하여 상대가 아군 사수들에게 접근하지 못하도록 유도해야 합니다.`,
        imagePath:
          "/images/factions/kharadron-overlords/grundstok-trailblazers.jpg",
      },
    ],
  },
  {
    id: "lumineth-realm-lords",
    name: "Lumineth Realm-lords",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/lumineth-realm-lords",
    alliance: "order",
    tagline: "빛과 균형을 수호하는 아엘프들",
    lore: `빛과 지식, 그리고 완전한 균형을 추구하는 아엘프 문명. 과거의 오만으로 세계를 파멸 직전까지 몰아넣은 그들은, 스스로를 엄격히 통제하는 철학과 수련을 통해 같은 실수를 반복하지 않으려 한다.
루미네스 렐름로드는 자연과 정령의 힘, 그리고 정교한 마법을 결합해 전장을 지배한다. 그들의 질서는 완벽에 가까워 보이지만 — 그 집착은 언제든 또 다른 오만으로 변할 위험을 품고 있다.`,
    color: "#8a7a20",
    accentColor: "#f0e080",
    imagePath: "/images/factions/lumineth-realm-lords/banner.webp",
    spearheads: [
      {
        id: "glittering-phalanx",
        name: "Glittering Phalanx",
        gwUrl:
          "https://www.gamemat.eu/media/produkty/1953/99120210062-lrlspearheadstock.jpg",
        rarity: true,
        description: `빛의 마법과 견고한 창술로 무장한 루미네스의 정석적인 군단입니다. 적의 공격을 완벽하게 쳐내는 방패 진형과 원거리에서 쏟아지는 화살 비, 그리고 강력한 마법 지원을 통해 전장을 통제합니다. 질서 정연한 전술의 정수를 보여주는 아미입니다.`,
        stats: { 공격력: 7, 생존력: 8, 기동성: 5, 미션수행: 7, 유틸리티: 9 },
        recommended: [
          "방패 진형을 갖추고 적의 돌격을 받아치는 수비적인 운영을 선호하는 분",
          "마법과 사격을 통해 적을 약화시키고 전황을 조율하고 싶은 분",
          "하이 엘프 스타일의 우아하고 세밀한 미니어처 디자인을 좋아하는 분",
        ],
        notRecommended: [
          "발이 느린 보병 중심의 답답한 기동성을 싫어하는 분",
          "유닛들의 낮은 체력을 극복하기 위한 복잡한 시너지를 관리하기 힘든 분",
        ],
        units: [
          {
            name: "Scinari Cathallar",
            role: "지휘관",
            count: 1,
            description:
              "감정을 조절하는 마법사. 아군의 고통을 흡수해 적에게 투사하며 강력한 디버프 마법을 구사한다.",
          },
          {
            name: "Vanari Auralan Wardens",
            role: "기간 보병",
            count: 10,
            description:
              "루미네스의 상징적인 창병대. 긴 사거리를 가진 창과 방패 진형으로 적의 돌격을 효과적으로 저지한다.",
          },
          {
            name: "Vanari Auralan Sentinels",
            role: "사격 전력",
            count: 5,
            description:
              "곡사 사격이 가능한 궁수대. 시야 밖의 적이나 숨어있는 핵심 유닛을 마법 화살로 저격한다.",
          },
          {
            name: "Vanari Auralan Sentinels",
            role: "사격 전력",
            count: 5,
            description:
              "곡사 사격이 가능한 궁수대. 시야 밖의 적이나 숨어있는 핵심 유닛을 마법 화살로 저격한다.",
          },
          {
            name: "Vanari Bladelords",
            role: "정예 전력",
            count: 5,
            description:
              "검술에 통달한 귀재들. 적의 방어를 무시하는 파괴적인 공격을 구사할 수 있다",
          },
        ],
        playstyle: `글리터링 팔랑크스는 '통제된 전장'을 지향합니다. 워든들이 중앙에서 방진을 짜고 버티는 동안 센티널들이 후방에서 핵심 타겟을 제거합니다. 카탈라의 마법으로 적의 사기를 꺾고, 상대가 방진에 부딪혀 주춤할 때 던라이더 기병이 측면을 마무리하는 유기적인 플레이가 핵심입니다.`,
        imagePath:
          "/images/factions/lumineth-realm-lords/glittering-phalanx.webp",
      },
      {
        id: "hurakan-vanguard",
        name: "Hurakan Vanguard",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-hurakan-vanguard-2026?queryID=70cc56175444087b7cb25932b2e429cd",
        rarity: false,
        description: `바람의 정령들과 함께 전장을 휩쓰는 초고속 습격대입니다. 바람처럼 빠른 속도로 이동하며 사격하고 적이 반격하기 전에 사라집니다. 기존 루미네스와는 달리 고정된 진형보다는 유동적인 움직임으로 상대를 농락하는 데 특화되어 있습니다.`,
        stats: { 공격력: 8, 생존력: 5, 기동성: 10, 미션수행: 6, 유틸리티: 7 },
        recommended: [
          "히트 앤 런 사격과 극단적인 기동성을 활용한 유격전을 선호하는 분",
          "정령 중심의 신비롭고 역동적인 모델 구성을 원하는 분",
          "상대의 이동 경로를 예측하고 농락하는 지능적인 플레이를 즐기는 분",
        ],
        notRecommended: [
          "낮은 방어력으로 인해 정면 승부에서 쉽게 무너지는 상황을 견디기 힘든 분",
          "정밀한 거리 조절 실수가 치명적인 결과로 이어지는 고난도 운영이 부담스러운 분",
        ],
        units: [
          {
            name: "Hurakan Windmage",
            role: "지휘관",
            count: 1,
            description:
              "바람을 다루는 마법사. 아군 유닛들에게 비행 능력을 부여하거나 이동 속도를 비약적으로 높여준다.",
          },
          {
            name: "Hurakan Windchargers",
            role: "기병 전력",
            count: 5,
            description:
              "트렐리스(순록 괴수)를 탄 기병대. 지형을 무시하고 이동하며 정밀한 사격을 가하는 아미의 주력.",
          },
          {
            name: "Hurakan Windchargers",
            role: "기병 전력",
            count: 5,
            description:
              "두 번째 윈드차저 분대. 다른 방향에서 적을 포위하거나 거점을 기습 점령하는 역할을 수행한다.",
          },
          {
            name: "Hurakan Spirit of the Wind",
            role: "괴수",
            count: 1,
            description:
              "바람의 화신인 거대 여우 정령. 전장에서 가장 빠른 유닛 중 하나로, 사격 후 재이동하며 적을 유린한다.",
          },
        ],
        playstyle: `후라칸 뱅가드는 '바람의 속도'를 이용해야 합니다. 윈드메이지의 버프로 기동력을 극대화한 뒤, 두 분대의 윈드차저가 적의 사거리를 피해 다니며 화살을 쏟아붓습니다. 괴수인 스피릿 오브 더 윈드는 적의 가장 약한 고리를 타격하고 유유히 빠져나오며, 상대가 아군을 한 번도 제대로 공격하지 못하게 만드는 것이 승리 공식입니다.`,
        imagePath: "/images/factions/lumineth-realm-lords/hurakan-vanguard.jpg",
      },
    ],
  },
  {
    id: "seraphon",
    name: "Seraphon",
    alliance: "order",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/seraphon",
    tagline: "별에서 내려온 냉혹한 파충류 군세",
    lore: `고대 슬란의 의지로 구현된 별의 군세. 세라폰은 현실에 존재하는 생명체이면서도, 동시에 천상에서 소환된 존재로서 물질과 마법의 경계에 서 있다.
그들은 ‘위대한 계획’이라 불리는 이해할 수 없는 목적을 수행하기 위해 움직이며, 혼돈의 세력을 철저히 말살하는 데 모든 것을 바친다. 감정이나 자비는 없다 — 세라폰에게 전쟁은 선택이 아니라, 이미 정해진 질서를 완성하기 위한 과정일 뿐이다.`,
    color: "#1a5a5a",
    accentColor: "#40c0a0",
    imagePath: "/images/factions/seraphon/banner.webp",
    spearheads: [
      {
        id: "starscale-warhost",
        name: "Starscale Warhost",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-seraphon-2024?queryID=ea7f7605f8e65fddf35dba8c14812dcf",
        rarity: false,
        description: `고대 별의 힘을 이어받은 세라폰의 정예 군단입니다. 튼튼한 사우루스 보병들이 전선을 유지하는 동안, 날렵한 기병과 강력한 괴수가 적의 측면을 들이받습니다. 안정적인 방어력과 폭발적인 반격 능력을 동시에 갖춘 올라운더형 아미입니다.`,
        stats: { 공격력: 7, 생존력: 8, 기동성: 6, 미션수행: 7, 유틸리티: 6 },
        recommended: [
          "보병과 기병, 괴수를 조화롭게 운용하는 정석적인 플레이를 원하는 분",
          "높은 세이브 수치와 튼튼한 맷집으로 전선을 유지하고 싶은 분",
          "공룡과 파충류 전사라는 독보적인 테마를 선호하는 분",
        ],
        notRecommended: [
          "매우 빠른 기동력을 활용한 유격전 위주의 플레이를 선호하는 분",
          "사격 화력이 부족하여 원거리에서 적을 제압하기를 원하는 분",
        ],
        units: [
          {
            name: "Saurus Oldblood",
            role: "지휘관",
            count: 1,
            description:
              "수많은 전투를 겪은 노련한 전사. 거대한 괴수를 부리며 전장을 휘젓는 파괴적인 군주",
          },
          {
            name: "Saurus Warriors",
            role: "기간 보병",
            count: 5,
            description:
              "세라폰의 강철 같은 방패. 높은 생존력을 바탕으로 점령지를 사수하고 적의 공세를 받아낸다.",
          },
          {
            name: "Saurus Warriors",
            role: "기간 보병",
            count: 5,
            description:
              "세라폰의 강철 같은 방패. 높은 생존력을 바탕으로 점령지를 사수하고 적의 공세를 받아낸다.",
          },
          {
            name: "Kroxigor",
            role: "정예 전력",
            count: 3,
            description:
              "거대한 덩치를 자랑하는 수인 전사들. 괴수나 중장갑 유닛을 분쇄하는 압도적인 파괴력을 가졌다.",
          },
        ],
        playstyle: `스타스케일 워호스트는 '망치와 모루' 전술을 사용합니다. 사우루스 워리어들이 중앙에서 모루 역할을 하며 적을 붙잡아두면, 어그라돈 랜서와 크록시거가 망치가 되어 적의 취약한 지점을 타격합니다. 올드블러드의 지휘 아래 유닛 간의 거리를 유지하며 시너지를 받는 것이 중요합니다.`,
        imagePath: "/images/factions/seraphon/starscale-warhost.jpg",
      },
      {
        id: "sunblood-prowlers",
        name: "Sunblood Prowlers",
        rarity: false,
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-seraphon-sunblooded-prowlers-2025?queryID=ea7f7605f8e65fddf35dba8c14812dcf",
        description: `태양의 축복을 받은 사냥꾼들의 무리입니다. 정면 대결보다는 빠른 기동력과 기습을 통해 적의 핵심 요소를 제거하는 데 특화되어 있습니다. 기존 세라폰보다 유연한 움직임을 보여주며, 적이 예상치 못한 타이밍에 치명적인 타격을 입힙니다.`,
        stats: { 공격력: 8, 생존력: 6, 기동성: 8, 미션수행: 8, 유틸리티: 5 },
        recommended: [
          "기동성을 살려 전장의 빈틈을 파고드는 유격전을 선호하는 분",
          "적의 핵심 유닛을 빠르게 제거하는 암살자 스타일을 원하는 분",
          "사우루스 기병과 비행 유닛의 조합을 즐기고 싶은 분",
        ],
        notRecommended: [
          "한 지점에 고정되어 튼튼하게 버티는 수비적인 플레이를 원하는 분",
          "낮은 모델 수로 인해 소모전에서 불리해지는 상황을 싫어하는 분",
        ],
        units: [
          {
            name: "Sunblood Pack with Venomites token",
            role: "지휘관",
            count: 1,
            description: "3인으로 구성된 지휘관. 세 명이 합심해 적을 분쇄한다.",
          },
          {
            name: "Saurus Warriors",
            role: "기간 보병",
            count: 5,
            description:
              "세라폰의 강철 같은 방패. 높은 생존력을 바탕으로 점령지를 사수하고 적의 공세를 받아낸다.",
          },
          {
            name: "Saurus Warriors",
            role: "기간 보병",
            count: 5,
            description:
              "세라폰의 강철 같은 방패. 높은 생존력을 바탕으로 점령지를 사수하고 적의 공세를 받아낸다.",
          },
          {
            name: "Hunters of Huanchi",
            role: "사격 전력",
            count: 5,
            description:
              "바람총을 쏘는 날렵한 사냥꾼들. 예상치 못한 곳에서 등장해 적을 마취시켜 나약하게 만든다.",
          },
          {
            name: "Hunters of Huanchi",
            role: "사격 전력",
            count: 5,
            description:
              "바람총을 쏘는 날렵한 사냥꾼들. 예상치 못한 곳에서 등장해 적을 마취시켜 나약하게 만든다.",
          },
          {
            name: "Terrawings",
            role: "괴수",
            count: 3,
            description:
              "하늘을 누비는 민첩한 괴수들. 적의 취약점을 급습하는데 특화되어있다.",
          },
          {
            name: "Spawn of Chotec",
            role: "괴수",
            count: 1,
            description:
              "화염을 뿜어내는 괴수. 원거리에서 적에게 디버프를 걸거나 불을 내뿜어 사기를 꺾는다.",
          },
        ],
        playstyle: `선블러드 프라울러즈는 '기동 타격'이 핵심입니다. 스카-베테랑과 랜서들이 한 팀이 되어 적의 가장 약한 부분을 집중 공격하며 전진합니다. 그동안 쇼텍의 피조물이 원거리 지원을 통해 적의 방어력을 약화시키고, 워리어들은 점수를 챙기며 판을 짜는 유기적인 플레이가 필요합니다.`,
        imagePath: "/images/factions/seraphon/sunblood-prowlers.jpg",
      },
    ],
  },
  {
    id: "sylvaneth",
    name: "Sylvaneth",
    alliance: "order",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-order/sylvaneth",
    tagline: "자연의 분노로 화한 숲의 정령들",
    lore: `생명과 자연의 화신들이 이루는 군세. 숲과 대지는 그들에게 단순한 터전이 아니라, 곧 자신들의 몸이자 영혼이다.

실바네스는 영역을 침범하고 자연을 훼손하는 모든 존재를 적으로 간주하며, 한 번 분노가 일어나면 숲 전체가 깨어나 침입자를 집어삼킨다. 그들에게 자비는 없다 — 생명의 순환을 지키기 위해서라면, 문명조차 기꺼이 뿌리째 뽑아낼 것이다.`,
    color: "#2a5a1a",
    accentColor: "#80c840",
    imagePath: "/images/factions/sylvaneth/banner.webp",
    spearheads: [
      {
        id: "bitterbark-corpse",
        name: "Bitterbark Corpse",
        gwUrl:
          "https://vaultgames.com.au/cdn/shop/products/99120204033_SYLVanguardStock_800x.jpg?v=1667612163",
        rarity: false,
        description: `숲의 고대 원한을 집행하는 복수자들입니다. 거대한 트리로드의 압도적인 위압감을 중심으로, 끈질긴 트리-포크들이 전선을 형성합니다. 지형을 활용해 적을 옥죄고, 한 번 뿌리내린 곳은 절대 내어주지 않는 견고함을 자랑합니다.`,
        stats: { 공격력: 7, 생존력: 8, 기동성: 6, 미션수행: 7, 유틸리티: 8 },
        recommended: [
          "강력한 괴수와 보병의 시너지를 통해 전선을 장악하고 싶은 분",
          "지형 생성 및 이동 규칙을 활용한 전략적인 플레이를 선호하는 분",
          "거대한 고목 정령 미니어처의 웅장함을 좋아하는 분",
        ],
        notRecommended: [
          "빠른 기동 사격 위주의 유격전을 선호하는 분",
          "개별 유닛의 포인트가 높아 모델 하나하나의 손실에 예민한 분",
        ],
        units: [
          {
            name: "Branchwych",
            role: "지휘관",
            count: 1,
            description:
              "숲의 마법사. 강력한 광역 마법으로 보병 무리를 휩쓸고 아군에게 버프를 제공한다.",
          },
          {
            name: "Tree-Revenants",
            role: "기간 보병",
            count: 5,
            description:
              "순간이동 능력을 가진 정령 보병. 전장의 빈틈을 파고들어 거점을 기습 점령한다.",
          },
          {
            name: "Kurnoth Hunters with Kurnoth Greatswords",
            role: "정예 전력",
            count: 3,
            description:
              "숲의 수호자들. 거대한 활로 적의 정예병들을 분쇄하는 아미의 실질적인 타격대.",
          },
          {
            name: "Treelord",
            role: "괴수",
            count: 1,
            description:
              "아미의 상징인 거대 고목. 압도적인 맷집과 파괴력을 가졌으며 지면을 울려 적의 진격을 방해한다.",
          },
        ],
        playstyle: `비터바크 코프스는 '지배와 기습'이 핵심입니다. 트리로드가 중앙에서 적의 주력을 붙잡아두는 동안, 브랜치위치가 마법으로 지원합니다. 트리-레버넌트들은 순간이동을 통해 적의 후방 거점을 노리고, 커노스 헌터들이 결정적인 순간에 차징하여 적을 섬멸하는 묵직한 운영을 보여줍니다.`,
        imagePath: "/images/factions/sylvaneth/bitterbark-corpse.jpg",
      },
      {
        id: "spitewing-flight",
        name: "Spitewing Flight",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-spitewing-flight-2026?queryID=6fed34d29857b36762859e8084a89248",
        rarity: false,
        description: `바람보다 빠르게 전장을 가로지르는 요정 기병 연대입니다. 날개 달린 벌레 괴수에 올라탄 전사들이 사방에서 적을 유린하며, 대응할 틈도 없이 치명적인 상처를 입히고 사라집니다. 실바네스 중 가장 공격적이고 빠른 속도감을 자랑합니다.`,
        stats: { 공격력: 7, 생존력: 5, 기동성: 8, 미션수행: 7, 유틸리티: 8 },
        recommended: [
          "히트 앤 런 스타일의 고속 기동전을 극한으로 즐기고 싶은 분",
          "공중 유닛 중심의 역동적인 배치를 선호하는 분",
          "적의 후방과 측면을 끊임없이 괴롭히는 플레이를 원하는 분",
        ],
        notRecommended: [
          "낮은 방어력으로 인해 정면 힘 싸움에서 쉽게 무너지는 것을 싫어하는 분",
          "안정적으로 전선을 유지하는 수비적인 플레이를 원하는 분",
        ],
        units: [
          {
            name: "Arch-Revnant",
            role: "지휘관",
            count: 1,
            description:
              "날개 달린 지휘관. 아군 기병들의 근접 전투력을 폭발적으로 강화하며 신속하게 전장을 누빈다.",
          },
          {
            name: "Spiterider Lancers",
            role: "기병 전력",
            count: 3,
            description:
              "돌격 시 적의 반격을 봉쇄하는 능력을 가진 고속 기병. 적의 정예 라인을 타격하고 빠지는 데 특화되어 있다.",
          },
          {
            name: "Revenant Seekers",
            role: "기병 전력",
            count: 3,
            description:
              "죽은 아군 기병을 부활시키는 능력을 가진 지원형 기병. 아미의 유지력을 담당하며 거점을 점령한다.",
          },
          {
            name: "Gossamid Archers",
            role: "사격 전력",
            count: 5,
            description:
              "공중 사격 보병. 적이 접근하면 뒤로 회피하며 사격하는 능력을 통해 적을 농락한다.",
          },
        ],
        playstyle: `스파이트윙 플라이트는 '유격전'의 정점입니다. 고사미드 아처들이 원거리에서 적의 시선을 끄는 사이, 아치-레버넌트의 지휘 아래 두 기병 분대가 적의 취약한 지점에 동시 돌격합니다. 리버넌트 시커를 통해 손실을 복구하며 적이 아군을 제대로 붙잡지 못하게 끊임없이 이동하는 것이 핵심입니다.`,
        imagePath: "/images/factions/sylvaneth/spitewing-flight.jpg",
      },
    ],
  },

  // ── Grand Alliance Chaos ─────────────────────────────────────────
  {
    id: "blades-of-khorne",
    name: "Blades of Khorne",
    alliance: "chaos",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-chaos/blades-of-khorne",
    tagline: "피와 해골을 갈망하는 전쟁의 화신들",
    lore: `피와 전쟁의 신 코른을 섬기는 광신적인 전사들. 그들에게 전투는 수단이 아니라 목적이며, 피를 흘리고 해골을 쌓는 행위 자체가 신에게 바치는 최고의 헌신이다.

블레이즈 오브 코른은 마법과 계략을 경멸하고, 오직 정면에서의 학살과 힘의 충돌만을 추구한다. 분노와 살육에 몸을 맡긴 이들은 멈추지 않는다 — 코른의 이름 아래, 모든 전장은 결국 피로 물들어야 하기 때문이다.`,
    color: "#8a1a1a",
    accentColor: "#c83030",
    imagePath: "/images/factions/blades-of-khorne/banner.webp",
    spearheads: [
      {
        id: "bloodbound-gore-pilgrims",
        name: "Bloodbound Gore Pilgrims",
        gwUrl:
          "https://www.broadswordwargaming.com/cdn/shop/files/https___trade.games-workshop.com_assets_2024_05_TR-99120201197-70-17-SpearheadBladesofKhorne_1200x1239.jpg?v=1716354151",
        rarity: true,
        description: `코른을 향한 광기 어린 신념으로 뭉친 필멸자 군단입니다. 피의 기도를 통해 아군을 강화하고, 적에게는 공포를 선사합니다. 단순히 무력을 휘두르는 것을 넘어, 제단과 기도를 활용한 전략적인 버프 중첩으로 근접전에서 압도적인 폭발력을 보여줍니다.`,
        stats: { 공격력: 9, 생존력: 6, 기동성: 6, 미션수행: 7, 유틸리티: 8 },
        recommended: [
          "보병 위주의 물량과 강력한 버프 시너지를 선호하는 분",
          "근접전에서 적을 완전히 분쇄하는 화끈한 파괴력을 원하는 분",
          "피와 해골로 가득한 광신도 테마를 즐기는 분",
        ],
        notRecommended: [
          "사격 무기가 전무하여 원거리 대응력이 없는 것을 답답해하는 분",
          "버프를 주는 지휘관 유닛이 먼저 제거되었을 때 급격히 약해지는 것을 싫어하는 분",
        ],
        units: [
          {
            name: "Slaughterpriest",
            role: "지휘관",
            count: 1,
            description:
              "피의 기도자. 적에게 직접적인 피해를 주거나 아군에게 강력한 근접전 버프를 부여한다.",
          },

          {
            name: "Blood Warriors",
            role: "기간 보병",
            count: 5,
            description:
              "코른의 정예 보병. 죽어가는 순간에도 반격을 가하는 끈질긴 호전성을 가졌다.",
          },
          {
            name: "Blood Warriors",
            role: "기간 보병",
            count: 5,
            description:
              "코른의 정예 보병. 죽어가는 순간에도 반격을 가하는 끈질긴 호전성을 가졌다.",
          },
          {
            name: "Bloodreavers",
            role: "기간 보병",
            count: 10,
            description:
              "광기에 빠진 돌격병들. 머릿수로 적을 압도하며 거점 점령 및 고기방패 역할을 수행한다.",
          },
          {
            name: "Mighty Skullcrushers",
            role: "정예 기병",
            count: 1,
            description:
              "코른의 최정예 기병. 육중한 돌진으로 마주친 적을 말 그대로 박살내버린다.",
          },
        ],
        playstyle: `고어 필그림스는 '버프의 중첩'이 생명입니다. 슬로터프리스트와 블러드세크레이터가 후방에서 아군을 강화하는 동안, 블러드 워리어와 리버들이 전진합니다. 적과 맞붙는 순간 모든 버프를 쏟아부어 한 차례의 근접전으로 적의 주력을 전멸시키는 것이 핵심입니다.`,
        imagePath:
          "/images/factions/blades-of-khorne/bloodbound-gore-pilgrims.jpg",
      },
      {
        id: "fangs-of-the-blood-god",
        name: "Fangs of the Blood God",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-blades-of-khorne-fangs-of-the-blood-god-2025?queryID=c4586dc44c5d0d4e43278ad2557a6314",
        rarity: false,
        description: `코른의 직접적인 분노가 형상화된 데몬 군단입니다. 붉은 피부의 블러드하운드들이 차원문을 넘어 강림하며, 복잡한 전술 대신 오직 살육만을 위해 움직입니다. 필멸자 부대보다 기동성이 뛰어나며, 적의 방어력을 무시하는 치명적인 일격을 가합니다.`,
        stats: { 공격력: 10, 생존력: 5, 기동성: 8, 미션수행: 6, 유틸리티: 5 },
        recommended: [
          "군더더기 없는 극단적인 근접 타격 위주의 플레이를 원하는 분",
          "적의 세이브를 무시하거나 치명타를 입히는 능력을 선호하는 분",
          "전형적인 악마 군대의 비주얼을 좋아하는 분",
        ],
        notRecommended: [
          "낮은 방어력으로 인해 반격에 취약한 '유리 대포' 스타일을 싫어하는 분",
          "유틸리티나 마법적인 견제 수단이 부족한 것을 답답해하는 분",
        ],
        units: [
          {
            name: "Karanak",
            role: "지휘관",
            count: 1,
            description:
              "머리 셋 달린 코른의 고위 악마. 한번 포착한 사냥감은 놓치지 않는다.",
          },
          {
            name: "Claws of Karanak",
            role: "기병 전력",
            count: 8,
            description:
              "피의 사냥개들. 매우 빠른 속도로 적의 마법사나 후방 유닛을 추격하여 사냥한다.",
          },

          {
            name: "Flesh Hounds",
            role: "기병 전력",
            count: 5,
            description:
              "피의 사냥개들. 매우 빠른 속도로 적의 마법사나 후방 유닛을 추격하여 사냥한다.",
          },
          {
            name: "Flesh Hounds",
            role: "기병 전력",
            count: 5,
            description:
              "피의 사냥개들. 매우 빠른 속도로 적의 마법사나 후방 유닛을 추격하여 사냥한다.",
          },
        ],
        playstyle: `팽스 오브 더 블러드 갓은 '선제 공격'이 모든 것입니다. 플레시 하운드가 선제적으로 기동하여 적의 이동을 방해하고, 그 뒤를 이어 카라낙크의 군세들이 숨통을 끊습니다.방어력이 낮은 점을 보완하기 위해 적이 반격하기 전에 섬멸하는 공격적인 운영이 필수적입니다.`,
        imagePath:
          "/images/factions/blades-of-khorne/fangs-of-the-blood-god.jpg",
      },
    ],
  },
  {
    id: "disciples-of-tzeentch",
    name: "Disciples of Tzeentch",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-chaos/disciples-of-tzeentch",
    alliance: "chaos",
    tagline: "변화와 음모를 속삭이는 마법의 추종자들",
    lore: `변화와 운명의 신 젠취를 섬기는 마도사와 음모가들. 그들은 세상의 흐름을 뒤틀고, 보이지 않는 실로 전쟁과 운명을 조종한다.
디사이플즈 오브 젠취에게 계획은 끝이 없다. 수많은 계략이 겹겹이 쌓여 서로를 덮고, 그 결과조차 또 다른 계획의 일부가 된다. 진실과 거짓의 경계는 이미 무너졌다 — 그들이 따르는 것은 승리가 아니라, 끝없이 이어지는 변화 그 자체다.`,
    color: "#1a2a8a",
    accentColor: "#60a0f0",
    imagePath: "/images/factions/disciples-of-tzeentch/banner.webp",
    spearheads: [
      {
        id: "fluxblade-coven",
        name: "Fluxblade Coven",
        gwUrl:
          "https://www.gamemat.eu/media/produkty/1946/99120201193-dotspearheadstock.jpg",
        rarity: true,
        description: `변화의 군주 젠취의 마법적 정수를 담은 군단입니다. 변화의 불꽃을 내뿜는 플레이머들과 강력한 마법을 구사하는 마기스터가 전장을 뒤덮습니다. 적의 운명을 조작하는 '데스티니 다이스' 시스템을 통해 전장의 불확실성을 아군에게 유리한 필연으로 바꾸는 교활한 아미입니다.`,
        stats: { 공격력: 7, 생존력: 6, 기동성: 5, 미션수행: 7, 유틸리티: 10 },
        recommended: [
          "강력한 마법과 원거리 사격 위주의 전술을 선호하는 분",
          "주사위 결과 자체를 조작하는 독특한 메커니즘을 즐기고 싶은 분",
          "기괴하고 화려한 데몬 미니어처 구성을 좋아하는 분",
        ],
        notRecommended: [
          "강력한 근접 타격 위주의 힘 싸움을 원하는 분",
          "복잡한 마법 시너지와 주사위 관리를 번거로워하는 분",
        ],
        units: [
          {
            name: "Magister",
            role: "지휘관",
            count: 1,
            description:
              "젠취의 필멸자 마법사. 강력한 마법으로 적을 약화시키거나 변이시키며 전장을 조율한다.",
          },
          {
            name: "Kairic Acolytes",
            role: "기간 보병",
            count: 10,
            description:
              "젠취의 필멸자 보병. 죽으면서 잔고어로 승천하여 집요하게 전장에 남아있는다.",
          },
          {
            name: "Tzaangors",
            role: "기간 보병",
            count: 5,
            description:
              "젠취의 축복을 받은 비스트맨들. 적진에 깊숙히 들어가면 근접전 능력이 향상된다.",
          },
          {
            name: "Tzaangors",
            role: "기간 보병",
            count: 5,
            description:
              "젠취의 축복을 받은 비스트맨들. 적진에 깊숙히 들어가면 근접전 능력이 향상된다.",
          },

          {
            name: "Flamers of Tzeentch",
            role: "사격 전력",
            count: 3,
            description:
              "변화의 화염을 뿜어내는 정예 사수들. 중장갑 유닛에게도 치명적인 마법 피해를 입힌다.",
          },
          {
            name: "Screamers of Tzeentch",
            role: "기병 전력",
            count: 3,
            description:
              "하늘을 나는 가오리 형태의 생명체. 매우 빠른 기동력으로 적의 머리 위를 지나가며 피해를 입힌다.",
          },
        ],
        playstyle: `플럭스블레이드 커번은 '거점 유지와 사격'이 핵심입니다. 마기스터의 마법과 데스티니 다이스를 활용해 중요한 순간에 확실한 성공을 보장받아야 합니다. 핑크 호러가 전선을 유지하는 동안 버닝 채리엇과 플레이머가 적을 녹여버리고, 스크리머가 후방을 교란하는 영리한 플레이가 요구됩니다.`,
        imagePath: "/images/factions/disciples-of-tzeentch/fluxblade-coven.jpg",
      },
      {
        id: "tzaangor-warflock",
        name: "Tzaangor Warflock",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-tzaangor-warflock-2026?queryID=293b6eef108334c45916951f7f7d640d",
        rarity: false,
        description: `잔고어(Tzaangor) 무리와 하늘을 나는 공중 기병들이 중심이 된 신속 타격대입니다. 기존 젠취 군단보다 훨씬 공격적이며, 마법보다는 날카로운 발톱과 무기로 적을 직접 유린합니다. 바람처럼 빠른 기동성으로 전장의 빈틈을 파고드는 데 특화되어 있습니다.`,
        stats: { 공격력: 6, 생존력: 5, 기동성: 7, 미션수행: 6, 유틸리티: 9 },
        recommended: [
          "젠취 진형에서도 근접전과 기동성을 중시하는 분",
          "조인(鳥人) 테마인 잔고어 유닛의 역동적인 디자인을 선호하는 분",
          "전장을 넓게 쓰며 거점 기습 점령 플레이를 선호하는 분",
        ],
        notRecommended: [
          "순수 마법 위주의 화력 투사 스타일을 기대하는 분",
          "견고한 방진을 짜서 정면 돌격을 버티고 싶은 분",
        ],
        units: [
          {
            name: "Tzaangor Shaman",
            role: "지휘관",
            count: 1,
            description:
              "원반을 타고 날아다니는 샤만. 아군 잔고어 유닛들을 강화하고 신속한 이동 마법을 지원한다.",
          },
          {
            name: "Tzaangors",
            role: "기간 보병",
            count: 10,
            description:
              "광폭한 조인 전사들. 일반적인 보병보다 뛰어난 이동력과 근접 공격력을 가졌다.",
          },
          {
            name: "Tzaangor Skyfires",
            role: "기병 전력",
            count: 3,
            description:
              "원반을 타고 비행하는 엘리트 기병대. 지형을 무시하고 적의 핵심 유닛에게 돌진하여 치명적인 타격을 입힌다.",
          },
          {
            name: "Tzaangor Enlightened",
            role: "정예 전력",
            count: 3,
            description:
              "도보로 이동하는 정예 전사들. 지휘관 근처에서 보디가드 역할을 하거나 거점 사수를 담당한다.",
          },
        ],
        playstyle: `잔고어 워플록은 '다각도 기습'이 승리 공식입니다. 지상에서는 잔고어들이 전진하고, 공중에서는 샤만과 원반 기병들이 적의 사각지대를 노립니다. 상대가 마법을 경계하는 사이 기동성을 살려 근접전을 강제하고, 미션 점수를 신속하게 챙기며 판을 흔들어야 합니다.`,
        imagePath:
          "/images/factions/disciples-of-tzeentch/tzaangor-warflock.jpg",
      },
    ],
  },
  {
    id: "hedonites-of-slaanesh",
    name: "Hedonites of Slaanesh",
    alliance: "chaos",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-chaos/hedonites-of-slaanesh",
    tagline: "쾌락과 과잉에 중독된 탐닉의 전사들",
    lore: `쾌락과 집착, 과잉의 신 슬라네쉬를 섬기는 추종자들. 그들은 감각과 욕망의 극한을 추구하며, 전투조차 하나의 향락이자 예술로 여긴다.
헤도나이트 오브 슬라네쉬는 결코 만족하지 못한다. 어떤 승리도, 어떤 쾌락도 그들의 갈망을 채우지 못하며, 오히려 더 깊은 탐닉으로 이끈다. 그 끝없는 결핍은 그들을 움직이는 진정한 원동력이다 — 슬라네쉬가 속박된 지금조차도, 그 욕망은 멈추지 않는다.`,
    color: "#6a1a6a",
    accentColor: "#d060c0",
    imagePath: "/images/factions/hedonites-of-slaanesh/banner.webp",
    spearheads: [
      {
        id: "blades-of-the-lurid-dream",
        name: "Blades of the Lurid Dream",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-hedonites-of-slaanesh-2024?queryID=a29d3fb6dcac7b08a3f71bf03fd42fba",
        rarity: false,
        description: `관능적이고 치명적인 쾌락을 쫓는 슬라네쉬의 추종자들입니다. 눈이 따라가기 힘들 정도로 빠른 속도로 전장을 누비며, 적의 가장 취약한 지점을 정확하게 찔러 유린합니다. 적을 유혹하여 실수를 유도하고, 그 틈을 타서 휘몰아치는 공격을 퍼붓는 데 특화되어 있습니다.`,
        stats: { 공격력: 9, 생존력: 3, 기동성: 10, 미션수행: 5, 유틸리티: 3 },
        recommended: [
          "압도적인 기동성으로 전장 전체를 컨트롤하고 싶은 분",
          "적의 방어선을 우회하여 핵심 유닛을 암살하는 정교한 플레이를 선호하는 분",
          "아름답고 기괴하면서도 화려한 모델 디자인을 즐기는 분",
        ],
        notRecommended: [
          "낮은 방어력으로 인해 작은 실수 하나가 유닛 전멸로 이어지는 것을 싫어하는 분",
          "정면에서 묵직하게 버티며 힘 싸움을 하는 스타일을 선호하는 분",
        ],
        units: [
          {
            name: "Shardspeaker of Slaanesh",
            role: "지휘관",
            count: 1,
            description:
              "슬라네쉬의 마법사 지휘관. 적의 방어력을 깎아내리거나 아군에게 버프를 걸어 타격 효율을 극대화한다.",
          },
          {
            name: "Slickblade Seekers",
            role: "기병 전력",
            count: 5,
            description:
              "슬라네쉬 기병대의 정점. 경이로운 속도로 돌격하여 적의 보병 무리를 순식간에 베어 넘긴다.",
          },
          {
            name: "Slaangor Fiendbloods",
            role: "정예 전력",
            count: 3,
            description:
              "짐승 같은 광기에 빠진 정예 전사들. 슬라네쉬 아미 내에서 드물게 묵직한 타격력과 맷집을 동시에 제공한다.",
          },
          {
            name: "Blissbarb Archers",
            role: "사격 전력",
            count: 5,
            description:
              "독 화살을 퍼붓는 궁수대. 빠른 이동 중에도 사격이 가능하며 적을 끊임없이 괴롭힌다.",
          },
          {
            name: "Blissbarb Archers",
            role: "사격 전력",
            count: 5,
            description:
              "독 화살을 퍼붓는 궁수대. 빠른 이동 중에도 사격이 가능하며 적을 끊임없이 괴롭힌다.",
          },
        ],
        playstyle: `블레이즈 오브 더 루리드 드림은 '속도의 우위'를 점해야 승리할 수 있습니다. 블리스바브 아처들이 원거리에서 적의 시선을 끄는 사이, 슬릭블레이드 시커들이 전장의 측면을 빠르게 돌파합니다. 적이 대응하기 위해 진형을 흐트러뜨리는 순간, 샤드스피커의 마법 지원을 받는 슬란고어들이 결정적인 타격을 입히는 유기적인 연계가 핵심입니다.`,
        imagePath:
          "/images/factions/hedonites-of-slaanesh/blades-of-the-lurid-dream.jpg",
      },
    ],
  },
  {
    id: "helsmiths-of-hashut",
    name: "Helsmiths of Hashut",
    alliance: "chaos",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-chaos/helsmiths-of-hashut",
    tagline: "카오스 신 하슈트를 추종하는 사악한 듀아딘들",
    lore: `폭정과 불의 신 하슈트를 섬기는 타락한 듀아딘들. 그들은 끝없는 노동과 희생 위에 세워진 거대한 공업 제국을 건설하고, 노예와 피를 연료 삼아 전쟁 기계를 가동한다.
헬스미스 오브 하슈트는 불꽃과 금속을 다루는 주조장과도 같다. 그들의 대장간에서는 무기뿐만 아니라, 악마와 결합된 병기와 기괴한 창조물들이 끊임없이 탄생한다. 신앙은 곧 권력이며, 권력은 곧 지배다 — 그들의 제국은 불타는 굴뚝과 쇠사슬 위에서 유지된다.`,
    color: "#5a3a10",
    accentColor: "#c07030",
    imagePath: "/images/factions/helsmiths-of-hashut/banner.webp",
    spearheads: [
      {
        id: "helforge-host",
        name: "Helforge Host",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-hellsmiths-of-hashut-helforge-host-2026?queryID=b4e9e8ec77a19c06d4a1f60e9a25a46d",
        rarity: false,
        description: `하슈트의 대장간에서 벼려진 강철과 화염의 군단입니다. 튼튼한 장갑을 두른 전사들이 전선을 형성하고, 그 뒤에서 기괴한 증기 기계들과 대포가 적을 잿더미로 만듭니다. 느리지만 확실하게 적을 짓밟는 파괴적인 전진 압박이 특징입니다.`,
        stats: { 공격력: 9, 생존력: 8, 기동성: 4, 미션수행: 6, 유틸리티: 7 },
        recommended: [
          "압도적인 원거리 화력과 튼튼한 방어력을 동시에 원하는 분",
          "전쟁기계와 중화기를 활용한 파괴적인 전술을 선호하는 분",
          "검은 불꽃과 화산, 금속 장갑이 어우러진 다크 판타지 디자인을 좋아하는 분",
        ],
        notRecommended: [
          "빠른 기동력을 바탕으로 전장 곳곳을 누비는 유격전을 선호하는 분",
          "유닛의 머릿수가 적어 점유율 싸움에서 밀리는 상황을 힘들어하는 분",
        ],
        units: [
          {
            name: "War Despot",
            role: "지휘관",
            count: 1,
            description:
              "대장간의 군주. 마법을 통해 적을 공격하거나 아군 전쟁기계들의 화력을 폭발적으로 강화한다.",
          },
          {
            name: "Infernal Cohort",
            role: "기간 보병",
            count: 5,
            description:
              "하슈트의 기간 보병. 중갑과 방패로 무장하여 전선에서 적의 공격을 완벽히 차단한다.",
          },
          {
            name: "Infernal Cohort",
            role: "기간 보병",
            count: 5,
            description:
              "하슈트의 기간 보병. 중갑과 방패로 무장하여 전선에서 적의 공격을 완벽히 차단한다.",
          },
          {
            name: "Dominator Engine",
            role: "전쟁기계",
            count: 1,
            description:
              "악마들을 연료로 삼아 구동되는 지옥의 전쟁기계. 강력한 사격과 무지막지한 근접능력을 동시에 갖춘 만능 유닛.",
          },

          {
            name: "Tormentor Bombard",
            role: "전쟁기계",
            count: 1,
            description:
              "지옥의 용암을 발사하는 대포. 좁은 지역에 밀집한 적들을 한 번에 녹여버리는 강력한 화력을 제공한다.",
          },
        ],
        playstyle: `헬포지 호스트는 '화력의 집중'이 핵심입니다. 인페르널 가드가 전선을 유지하는 동안 마그마 캐논과 아이언 데몬이 적의 주력을 먼저 제거해야 합니다. 데몬스미스의 버프를 어느 기계에 줄지 결정하는 것이 중요하며, 불 센타우르들은 아군 화력망 안으로 들어오려는 적의 고기동 유닛을 차단하는 역할을 수행합니다.`,
        imagePath: "/images/factions/helsmiths-of-hashut/helforge-host.jpg",
      },
    ],
  },
  {
    id: "maggotkin-of-nurgle",
    name: "Maggotkin of Nurgle",
    alliance: "chaos",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-chaos/maggotkin-of-nurgle",
    tagline: "부패와 생명을 퍼뜨리는 역병의 군세",
    lore: `부패와 재생의 신 너글을 섬기는 군세. 그들은 질병과 썩음을 퍼뜨리지만, 그것을 저주가 아닌 축복으로 여긴다.

마곳킨 오브 너글은 고통과 절망 속에서도 기묘한 평온을 유지한다. 모든 것은 결국 썩어 돌아가고, 그 속에서 새로운 생명이 태어난다고 믿기 때문이다. 그들에게 전쟁은 파괴가 아니라 순환의 일부다 — 세상은 반드시 무너지고, 다시 피어나야 한다.`,
    color: "#4a5a1a",
    accentColor: "#90b030",
    imagePath: "/images/factions/maggotkin-of-nurgle/banner.webp",
    spearheads: [
      {
        id: "bleak-host",
        name: "Bleak Host",
        gwUrl:
          "https://cdn.ecommercedns.uk/files/1/265541/3/45780763/70-01-001.jpg",
        rarity: true,
        description: `부패의 군주를 섬기는 역겨운 군단입니다. 육중한 판금 갑옷을 두른 블라이트킹들은 적의 공격을 웃어넘기며 전진합니다. 너글의 정원에 핀 곰팡이처럼 끈질기게 거점을 점령하고, 서서히 적을 질병으로 갉아먹는 압박 전술을 구사합니다.`,
        stats: { 공격력: 7, 생존력: 10, 기동성: 3, 미션수행: 8, 유틸리티: 6 },
        recommended: [
          "최강의 생존력과 방어력을 바탕으로 버티는 플레이를 선호하는 분",
          "모델 하나하나의 볼륨감이 크고 디테일한 도색을 즐기는 분",
          "서서히 전진하며 적을 압박하는 묵직한 운영을 좋아하는 분",
        ],
        notRecommended: [
          "느린 이동 속도로 인해 답답함을 느끼는 분",
          "순간적인 폭발력이나 빠른 기습 중심의 아미를 원하는 분",
        ],
        units: [
          {
            name: "Spoilpox Scrivener",
            role: "지휘관",
            count: 1,
            description:
              "데몬 군단의 서기. 플레이그베어러들을 독려하여 공격 횟수와 이동력을 높이는 중요한 버프를 제공한다.",
          },
          {
            name: "Plaguebearers",
            role: "기간 보병",
            count: 5,
            description:
              "너글의 기본 데몬 보병. 높은 맷집과 점유 능력을 바탕으로 거점 수비의 핵심이 된다.",
          },
          {
            name: "Plaguebearers",
            role: "기간 보병",
            count: 5,
            description:
              "너글의 기본 데몬 보병. 높은 맷집과 점유 능력을 바탕으로 거점 수비의 핵심이 된다.",
          },
          {
            name: "Putrid Blightkings",
            role: "기간 보병",
            count: 5,
            description:
              "너글의 정예 보병. 경이로운 체력과 재생력을 가졌으며, 주변 적들에게 지속적인 광역 피해를 입힌다.",
          },
          {
            name: "Pusgoyle Blightlords",
            role: "기병 전력",
            count: 1,
            description:
              "파리를 탄 정예 기사. 아미 내에서 귀한 기동력을 담당하며 적의 핵심 보병진을 타격한다.",
          },
          {
            name: "Pusgoyle Blightlords",
            role: "기병 전력",
            count: 1,
            description:
              "파리를 탄 정예 기사. 아미 내에서 귀한 기동력을 담당하며 적의 핵심 보병진을 타격한다.",
          },
        ],
        playstyle: `블리크 호스트는 '무너지지 않는 벽'입니다. 블라이트킹들이 중앙 거점에서 버티는 동안 지휘관과 푸스고일들이 공중에서 적을 견제합니다. 적의 공격을 몸으로 받아내며 '너글의 사이클' 효과를 유도해, 후반부로 갈수록 말라죽어가는 적을 확인하며 승기를 굳히는 전술이 유효합니다.`,
        imagePath: "/images/factions/maggotkin-of-nurgle/bleak-host.webp",
      },
      {
        id: "bubonic-cell",
        name: "Bubonic Cell",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-maggotkin-of-nurgle-bubonic-cell-2026?queryID=0ed468ac95ca4848220c3c626db9c54f",
        rarity: false,
        description: `역병의 정원에서 기어 나온 데몬들의 무리입니다. 너글링들은 낄낄거리며 진군하고, 기괴한 비스트가 적을 덮칩니다. 물리적인 타격보다는 마법적인 오염과 재생 능력을 통해 상대의 전의를 상실케 만드는 부정한 군단입니다.`,
        stats: { 공격력: 6, 생존력: 9, 기동성: 5, 미션수행: 9, 유틸리티: 8 },
        recommended: [
          "데몬 특유의 회복 메커니즘과 마법적인 견제를 선호하는 분",
          "머릿수를 활용하여 전장의 여러 거점을 점령하고 유지하는 플레이를 좋아하는 분",
          "기괴하면서도 유머러스한 너글 데몬 디자인을 선호하는 분",
        ],
        notRecommended: [
          "낮은 공격력으로 인해 적 유닛을 한 번에 제거하지 못하는 상황을 싫어하는 분",
          "엘리트 소수 정예 구성을 선호하는 분",
        ],
        units: [
          {
            name: "Rotbringer Sorcerer",
            role: "지휘관",
            count: 1,
            description:
              "데몬 군단의 마법사. 부정한 마법으로 아군의 무기를 강화해 준다.",
          },
          {
            name: "Nurglings",
            role: "기간 보병",
            count: 3,
            description:
              "너글의 하급 악마. 공격력은 형편없지만 끊임없는 재생으로 적을 악착같이 물고 늘어진다",
          },
          {
            name: "Nurglings",
            role: "기간 보병",
            count: 3,
            description:
              "너글의 하급 악마. 공격력은 형편없지만 끊임없는 재생으로 적을 악착같이 물고 늘어진다",
          },
          {
            name: "Rotmire Creed",
            role: "사격 전력",
            count: 10,
            description:
              "역병 묻은 바람총을 쏘는 종복들. 피해를 받지 않고 후퇴할 수 있어 지속적으로 원거리 사격을 가하는데 뛰어나다",
          },
          {
            name: "Beast of Nurgle",
            role: "괴수",
            count: 1,
            description:
              "친근하지만 치명적인 괴수. 적에게 달려들어 무작위적인 피해를 입히고 사방에 역병을 뿌린다.",
          },
        ],
        playstyle: `부보닉 셀은 '거머리 같은 점령'이 핵심입니다. 스포일폭스 스크리브너의 지휘 아래 플레이그베어러들이 끈질기게 거점을 지킵니다. 비스트 오브 너글은 적의 돌격을 방해하며 전선을 흐트러뜨리고, 플레이그 드론은 유동적으로 움직이며 부족한 화력을 보충하는 역할을 수행합니다.`,
        imagePath: "/images/factions/maggotkin-of-nurgle/bubonic-cell.jpg",
      },
    ],
  },

  // ── Grand Alliance Death ─────────────────────────────────────────
  {
    id: "flesh-eater-courts",
    name: "Flesh Eater Courts",
    alliance: "death",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-death/flesh-eater-courts",
    tagline: "광기와 망상증에 빠진 식인 왕국의 기사들",
    lore: `저주받은 광기에 사로잡힌 식인 괴물들의 왕국. 그들은 스스로를 고귀한 기사와 영주로 믿으며, 무너진 폐허와 시체 더미를 찬란한 성과 연회로 인식한다.

플레시이터 코트는 끔찍한 학살과 식인을 벌이면서도, 그것을 명예로운 전투와 축제로 여긴다. 그들의 눈에 보이는 세계는 현실과 완전히 어긋나 있다 — 그러나 그 광기는 전염되며, 점점 더 많은 이들을 그들의 ‘왕국’으로 끌어들인다.`,
    color: "#5a3a20",
    accentColor: "#c09060",
    imagePath: "/images/factions/flesh-eater-courts/banner.webp",
    spearheads: [
      {
        id: "carrion-retainers",
        name: "Carrion Retainers",
        gwUrl:
          "https://cdn11.bigcommerce.com/s-285hkc2e8r/images/stencil/500x659/products/24019/33417/https___trade.games-workshop.com_assets_2024_03_99120207128_FECSpearhead07__32446.1709929124.jpg?c=2",
        rarity: true,
        description: `고귀한 섭정의 지휘 아래 전장을 누비는 정예 기병대입니다. 스스로를 영광스러운 기사단이라 믿는 이들은 숭고한 사명감(광기)을 바탕으로 적에게 돌격합니다. 강력한 '고귀한 증서' 포인트를 쌓아 아군을 부활시키거나 공격 횟수를 폭발적으로 늘리는 상급자 위주의 플레이가 특징입니다.`,
        stats: { 공격력: 9, 생존력: 3, 기동성: 8, 미션수행: 4, 유틸리티: 4 },
        recommended: [
          "소수 정예 기병대의 강력한 돌격력을 선호하는 분",
          "유닛을 부활시키거나 강화하는 자원 관리형 메커니즘을 즐기는 분",
          "역동적이고 위압감 있는 기사 테마의 모델을 좋아하는 분",
        ],
        notRecommended: [
          "지휘관이 빠르게 제거되었을 때 아미 전체의 시너지가 급격히 무너지는 것을 꺼리는 분",
          "보병 물량을 통한 물량 압박 스타일을 선호하는 분",
        ],
        units: [
          {
            name: "Abhorrant Archregent",
            role: "지휘관",
            count: 1,
            description:
              "군단의 정점에 선 군주. 마법과 증서 포인트를 통해 아군을 부활시키고 전투력을 비약적으로 상승시킨다.",
          },
          {
            name: "Morbheg Knights",
            role: "기병 전력",
            count: 3,
            description:
              "기괴한 야수를 탄 기사들. 지형을 무시하고 돌격하여 적 보병진을 찢어발기는 핵심 타격대.",
          },
          {
            name: "Crypt Guard",
            role: "기간 보병",
            count: 10,
            description:
              "왕실의 근위대. 지휘관 근처에서 적의 공격을 대신 받아내며 전선을 유지하는 정예 보병.",
          },
          {
            name: "Varghulf Courtier",
            role: "괴수",
            count: 1,
            description:
              "피에 굶주린 거대 괴수. 적진 한복판에서 학살을 자행하며 스스로 상처를 치유하는 흉포한 존재.",
          },
        ],
        playstyle: `캐리언 리테이너는 '증서 관리'가 승패를 결정합니다. 아치리전트가 안전하게 포인트를 쌓는 동안 몰벡 나이트와 바굴프가 적의 시선을 끌어야 합니다. 적절한 타이밍에 쌓인 포인트를 소모해 전멸한 유닛을 다시 불러내거나 공격 속도를 높여 한 번에 전황을 뒤집는 정교한 운영이 필요합니다.`,
        imagePath: "/images/factions/flesh-eater-courts/carrion-retainers.webp",
      },
      {
        id: "charnel-watch",
        name: "Charnel Watch",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-charnel-watch-2025?queryID=7bbd8f647972f91b25d75dcbdacfdfd8",
        rarity: false,
        description: `끊임없이 몰려드는 식인종 무리와 그들의 머리 위를 비행하는 감시자들입니다. 압도적인 보병 머릿수를 활용해 거점을 점령하고, 하늘에서 내려오는 기습적인 공격으로 적을 당황하게 만듭니다. '광기 신념'을 퍼뜨려 적을 공포에 빠뜨리는 심리전과 물량전이 결합된 구성입니다.`,
        stats: { 공격력: 7, 생존력: 6, 기동성: 7, 미션수행: 10, 유틸리티: 7 },
        recommended: [
          "거점 점령 능력과 머릿수로 밀어붙이는 물량 아미를 선호하는 분",
          "하늘을 나는 괴수와 보병의 유기적인 협동 플레이를 원하는 분",
          "끊임없이 다시 살아 돌아오는 좀비 같은 끈질긴 생명력을 즐기는 분",
        ],
        notRecommended: [
          "개별 모델의 낮은 방어력으로 인해 유닛이 쉽게 죽어나가는 것을 답답해하는 분",
          "화력 집중보다는 넓은 전장 관리에 신경 써야 하는 운영을 번거로워하는 분",
        ],
        units: [
          {
            name: "Abhorrant Gorewarden",
            role: "지휘관",
            count: 1,
            description:
              "광기 어린 섭정. 비천한 구울들을 선동하여 평소보다 훨씬 빠른 속도로 적에게 달려들게 만든다.",
          },
          {
            name: "Royal Beastflayers",
            role: "기간 보병",
            count: 10,
            description:
              "굶주린 식인종 무리. 개별적으론 약하지만 숫자로 적을 압도하며 거점을 확실하게 점유한다.",
          },
          {
            name: "Crypt Flayers",
            role: "기병 전력",
            count: 3,
            description:
              "비행 능력을 갖춘 기괴한 존재들. 하늘에서 강습하여 적의 취약한 후방 지원 부대를 사냥한다.",
          },
          {
            name: "Crypt Horrors",
            role: "정예 전력",
            count: 3,
            description:
              "비대하게 변이한 괴물들. 전선의 중심에서 맷집 역할을 수행하며 적의 돌격을 저지한다.",
          },
        ],
        playstyle: `샤넬 워치는 '거점 장악과 소모전'에 특화되어 있습니다. 20마리의 구울 무리를 앞세워 주요 거점을 먼저 차지하고, 상대가 구울들을 상대하는 동안 플라이어와 호러가 측면을 공략합니다. 유닛이 줄어들더라도 굴 킹의 능력을 통해 계속해서 전력을 보충하며 상대가 지칠 때까지 몰아붙이는 것이 핵심입니다.`,
        imagePath: "/images/factions/flesh-eater-courts/charnel-watch.jpg",
      },
    ],
  },
  {
    id: "ossiarch-bonereapers",
    name: "Ossiarch Bonereapers",
    alliance: "death",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-death/ossiarch-bonereapers",
    tagline: "뼈로 만든 완벽한 전쟁 기계들",
    lore: `죽음의 신 나가쉬의 의지로 창조된 완벽한 군세. 오시아크 본리퍼는 단순한 언데드가 아니라, 수확된 뼈와 영혼을 정교하게 재구성해 만들어진 전쟁 기계다.

그들은 ‘뼈의 십일조’를 요구하며 도시와 왕국을 압박하고, 거부당할 경우 체계적으로 침공해 모든 것을 자원으로 회수한다. 감정이나 자비는 존재하지 않는다 — 전쟁은 계산이며, 생명은 단지 재료일 뿐이다.`,
    color: "#6a5a20",
    accentColor: "#c8b060",
    imagePath: "/images/factions/ossiarch-bonereapers/banner.webp",
    spearheads: [
      {
        id: "mortisan-elite",
        name: "Mortisan Elite",
        gwUrl:
          "https://www.fantasygames-southbend.com/images/thumbnails/1982/2619/detailed/143/115141091.jpg",
        rarity: false,
        description: `뼈를 재조립하여 만든 거대 괴수들과 마법적 우위를 점하는 엘리트 부대입니다. 머릿수는 적지만 모델 하나하나가 강력한 파괴력을 지녔으며, 적의 공격을 무시하고 전진하는 압도적인 위압감을 선사합니다.`,
        stats: { 공격력: 10, 생존력: 9, 기동성: 5, 미션수행: 5, 유틸리티: 7 },
        recommended: [
          "강력한 괴수 중심의 소수 정예 구성을 선호하는 분",
          "복잡한 보병 관리보다 모델 하나의 강력한 파워를 즐기는 분",
        ],
        notRecommended: [
          "머릿수가 적어 거점 점유 싸움에서 수적으로 밀리는 상황이 싫은 분",
        ],
        units: [
          {
            name: "Mortisan Ossifector",
            role: "지휘관",
            count: 1,
            description:
              "영혼을 다루는 마법사. 아군에게 명중률 버프를 걸거나 적의 마법을 차단하며 전장을 지원한다.",
          },
          {
            name: "Immortis Guard",
            role: "정예 전력",
            count: 3,
            description:
              "나가쉬의 최정예 근위대. 지휘관을 보호할 때 전투력이 더 강력해진다.",
          },
          {
            name: "Necropolis Stalkers",
            role: "정예 전력",
            count: 3,
            description:
              "오시아크의 정예 투사들. 전투의 형상을 변경하여 수비적으로도, 공격적으로도 운용이 가능한 만능 유닛.",
          },
          {
            name: "Morghast Archai",
            role: "괴수",
            count: 2,
            description:
              "하늘을 나는 거대 괴수. 높은 맷집과 파괴적인 공격력으로 마주치는 모든 것을 제거한다.",
          },
        ],
        playstyle: `모티잔 엘리트는 '유지력 기반의 섬멸'이 핵심입니다. 아카이는 엘리트 유닛을 제거하고, 이모트리스 가드가 적의 유닛을 대거 묶어놓아야 합니다. 적의 파상공세를 버텨내며 하나씩 지워나가는 운영이 중요합니다.`,
        imagePath: "/images/factions/ossiarch-bonereapers/mortisan-elite.webp",
      },
      {
        id: "tithe-reaper-echelon",
        name: "Tithe-Reaper Echelon",
        gwUrl:
          "https://www.warhammer.com/en-NZ/shop/spearhead--ossiarch-bonereapers-2024?srsltid=AfmBOoowpg86nxN854zWLpcCkF4aQhZeEHEPd_x4kK0VRB9HkylbkdJB",
        rarity: true,
        description: `본리퍼 군단의 표준이라 할 수 있는 견고한 보병 방진 부대입니다. 철저한 규율 아래 움직이는 모텍 가드들이 적의 공격을 방패로 막아내고, 그 뒤에서 발리스타가 정밀한 사격을 퍼붓습니다.`,
        stats: { 공격력: 7, 생존력: 8, 기동성: 4, 미션수행: 9, 유틸리티: 8 },
        recommended: [
          "단단한 방진을 짜서 정면 승부를 벌이는 정석적인 아미를 좋아하는 분",
          "안정적인 거점 점령과 유지력을 중시하는 분",
        ],
        notRecommended: [
          "느린 이동 속도로 인해 유동적인 대응이 늦어지는 것을 답답해하는 분",
        ],
        units: [
          {
            name: "Mortisan Boneshaper",
            role: "지휘관",
            count: 1,
            description:
              "뼈를 빚는 마법사. 매 턴 파괴된 아군 모델을 다시 조립하여 전선을 유지시킨다.",
          },
          {
            name: "Mortek Guard",
            role: "기간 보병",
            count: 10,
            description:
              "본리퍼의 주력 보병. 방패 벽을 형성하여 적의 공격을 효율적으로 방어한다.",
          },
          {
            name: "Mortek Guard",
            role: "기간 보병",
            count: 10,
            description:
              "본리퍼의 주력 보병. 방패 벽을 형성하여 적의 공격을 효율적으로 방어한다.",
          },
          {
            name: "Kavalos Deathriders",
            role: "기병 전력",
            count: 5,
            description:
              "나가쉬의 기병들. 돌격 시 증가하는 데미지를 사용해 적을 힘껏 부순다.",
          },
          {
            name: "Gothizzar Harvester",
            role: "괴수",
            count: 3,
            description:
              "육중한 파괴력이 발군인 괴수. 적을 부수고 수집한 뼈로 아군을 수리하는 능력을 가지고 있다.",
          },
        ],
        playstyle: `타이드-리퍼 에셜론은 '규율 잡힌 전진'이 목표입니다. 모텍 가드가 중앙에서 버티고 본셰이퍼가 계속해서 충원해 주는 사이, 모텍 크롤러의 화력으로 상대의 위협 요소를 제거하며 거점을 야금야금 점령해야 합니다.`,
        imagePath:
          "/images/factions/ossiarch-bonereapers/tithe-reaper-echelon.jpg",
      },
      {
        id: "kavalos-vanguard",
        name: "Kavalos Vanguard",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-ossiarch-bonereapers-kavalos-vanguard-2026?queryID=9724337b9a82462bf3afc39a0256279b",
        rarity: false,
        description: `본리퍼 군단 중 가장 빠른 기동성을 자랑하는 선봉대입니다. 뼈로 만들어진 군마를 탄 기사들이 전장의 빈틈을 파고들어 파괴적인 돌격을 감행하며, 적이 전열을 가다듬기 전에 붕괴시킵니다.`,
        stats: { 공격력: 8, 생존력: 7, 기동성: 10, 미션수행: 8, 유틸리티: 6 },
        recommended: [
          "본리퍼이면서도 빠른 기동 타격전을 즐기고 싶은 분",
          "충격 기병의 돌격 보너스를 극대화하는 전술을 선호하는 분",
        ],
        notRecommended: ["보병 방진의 묵직한 수비력을 기대하는 분"],
        units: [
          {
            name: "Liege-Kavalos",
            role: "지휘관",
            count: 1,
            description:
              "기마 지휘관. 주변 기병들에게 추가적인 이동력과 돌격 위력을 부여하는 돌격의 기수.",
          },
          {
            name: "Kavalos Deathriders",
            role: "기병 전력",
            count: 5,
            description:
              "본리퍼의 주력 기병. 뛰어난 기동성으로 전장을 장악하며 돌격 시 치명적인 피해를 입힌다.",
          },
          {
            name: "Kavalos Deathriders",
            role: "기병 전력",
            count: 5,
            description:
              "본리퍼의 주력 기병. 뛰어난 기동성으로 전장을 장악하며 돌격 시 치명적인 피해를 입힌다.",
          },
          {
            name: "Teratic Cohort",
            role: "기간 보병",
            count: 8,
            description:
              "켄타로우스의 형상을 띈 병사. 전투 중에도 이동할 수 있는 능력을 살려 능동적으로 교전 대상을 택할 수 있다",
          },
        ],
        playstyle: `카발로스 뱅가드는 '히트 앤 런'이 핵심입니다. 리쥬-카발로스의 버프를 받은 데스라이더들이 적의 가장 약한 지점에 동시 돌격하여 패퇴시킨 후, 다시 빠져나와 다음 타겟을 노리는 속도감이 요구됩니다.`,
        imagePath: "/images/factions/ossiarch-bonereapers/kavalos-vanguard.jpg",
      },
    ],
  },

  // ── Grand Alliance Destruction ───────────────────────────────────
  {
    id: "ogor-mawtribes",
    name: "Ogor Mawtribes",
    alliance: "destruction",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-destruction/ogor-mawtribes",
    tagline: "끝없는 허기에 굶주린 거대한 포식자들",
    lore: `끝없는 굶주림에 사로잡힌 거대한 전사 부족들. 오고르 모우트라이브는 대아귀를 숭배하며, 먹는 행위 자체를 신성한 의식으로 여긴다.

그들에게 전쟁은 사냥이며, 적과 땅, 심지어 전장 자체까지 먹어치울 대상일 뿐이다. 굶주림은 결코 채워지지 않는다 — 오거들은 끝없이 떠돌며, 세상을 조금씩 집어삼키고 있다.`,
    color: "#5a4a20",
    accentColor: "#c09040",
    imagePath: "/images/factions/ogor-mawtribes/banner.webp",
    spearheads: [
      {
        id: "tyrants-bellow",
        name: "Tyrant's Bellow",
        gwUrl:
          "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Ftyrants-bellow-v0-xx371gx0mzcg1.jpeg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D3b96a5f1254c01d9d7a26384b25011131db4fe50",
        rarity: false,
        description: `폭군(Tyrant)의 포효 아래 모인 거구의 전사들입니다. 단순하지만 압도적인 물리력을 앞세워 적을 들이받고, 뼈째로 씹어먹는 파괴적인 돌격 부대입니다. 높은 체력과 충격력을 바탕으로 적의 전선을 정면에서 분쇄하는 데 특화되어 있습니다.`,
        stats: { 공격력: 10, 생존력: 8, 기동성: 6, 미션수행: 6, 유틸리티: 5 },
        recommended: [
          "복잡한 전략보다 압도적인 근접 화력으로 적을 밀어붙이고 싶은 분",
          "모델 하나하나가 묵직하고 강력한 존재감을 뿜어내는 아미를 원하는 분",
        ],
        notRecommended: [
          "정교한 마법이나 복잡한 유틸리티 시너지를 선호하는 분",
          "머릿수가 적어 적의 물량 공세에 거점을 내어주는 상황이 싫은 분",
        ],
        units: [
          {
            name: "Tyrant",
            role: "지휘관",
            count: 1,
            description:
              "아미의 군주. 엄청난 근접 공격력을 가졌으며, 주변 오거들이 겁먹지 않고 싸우도록 통제한다.",
          },
          {
            name: "Mounfang Pack",
            role: "기병 전력",
            count: 2,
            description:
              "모운팽을 단 오거들. 단단한 가죽 덕에 사격에 저항을 가진 점이 특징이다.",
          },
          {
            name: "Ogor Gluttons",
            role: "기간 보병",
            count: 3,
            description:
              "오거의 주력 보병. 거대한 덩치로 적을 들이받으며 돌격할 때 가장 강력한 위력을 발휘한다.",
          },
          {
            name: "Ogor Gluttons",
            role: "기간 보병",
            count: 3,
            description:
              "오거의 주력 보병. 거대한 덩치로 적을 들이받으며 돌격할 때 가장 강력한 위력을 발휘한다.",
          },
          {
            name: "Leadbelchers",
            role: "사격 전력",
            count: 2,
            description:
              "휴대용 대포를 든 오거 전사들. 원거리에서 포탄을 퍼부어 적의 방어선을 약화시킨다.",
          },
          {
            name: "Leadbelchers",
            role: "사격 전력",
            count: 2,
            description:
              "휴대용 대포를 든 오거 전사들. 원거리에서 포탄을 퍼부어 적의 방어선을 약화시킨다.",
          },
          {
            name: "Ironblaster",
            role: "전쟁기계",
            count: 1,
            description:
              "거대한 대포를 장착한 수레. 전장에서 가장 강력한 단발 화력을 투사하여 적의 괴수나 영웅을 저격한다.",
          },
        ],
        playstyle: `타이런츠 벨로우는 '정면 돌파'가 모든 것입니다. 아이언블래스터와 리드벨처로 적의 선봉을 깎아내린 후, 타이런트와 글러튼들이 일제히 돌격하여 근접전에서 승부를 봅니다. 오거 특유의 돌격 보너스를 활용해 적이 반격할 틈도 없이 지워버리는 것이 핵심입니다.`,
        imagePath: "/images/factions/ogor-mawtribes/tyrants-bellow.jpg",
      },
      {
        id: "scrapglutt",
        name: "Scrapglutt",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-ogor-mawtribes-scrapglutt-2025?queryID=2833c9bee09ae6c2781b85e41f3ac06e",
        rarity: false,
        description: `고철과 잡동사니를 숭배하는 변칙적인 부대입니다. 덩치 큰 오거와 영악한 그로트들이 섞여 있으며, 사정거리는 짧지만 치명적인 고철 발사기들을 사용합니다. 적을 혼란에 빠뜨리고 예상치 못한 타이밍에 큰 피해를 입히는 전술을 구사합니다.`,
        stats: { 공격력: 8, 생존력: 7, 기동성: 7, 미션수행: 9, 유틸리티: 8 },
        recommended: [
          "물량과 중화기의 조합을 통한 변칙적인 플레이를 즐기는 분",
          "오거 진형에서도 뛰어난 미션 수행 능력을 원하는 분",
        ],
        notRecommended: ["정직하고 묵직한 정면 힘 싸움만을 선호하는 분"],
        units: [
          {
            name: "Mantrappers",
            role: "지휘관",
            count: 1,
            description:
              "노련한 사냥꾼. 아군 보병을 질책해 점령 점수를 올리는 강력한 유틸리티 능력을 가지고 있다",
          },
          {
            name: "Gnoblars",
            role: "기간 보병",
            count: 12,
            description:
              "오거를 따르는 고블린 무리. 수적 우위를 바탕으로 거점을 점령하고 적의 돌격을 몸으로 막아낸다.",
          },
          {
            name: "Ironguts",
            role: "정예 전력",
            count: 2,
            description:
              "엄청난 체력을 가진 강력한 오거들. 묵직한 곤봉으로 적의 두개골을 산산조각낸다.",
          },
          {
            name: "Ironguts",
            role: "정예 전력",
            count: 2,
            description:
              "엄청난 체력을 가진 강력한 오거들. 묵직한 곤봉으로 적의 두개골을 산산조각낸다.",
          },
          {
            name: "Ironguts",
            role: "정예 전력",
            count: 4,
            description:
              "엄청난 체력을 가진 강력한 오거들. 증원대로 도착하는 든든한 병력들",
          },

          {
            name: "Gnoblar Scraplauncher",
            role: "전쟁기계",
            count: 1,
            description:
              "고철을 투척하는 투석기. 넓은 범위에 파편을 뿌려 적의 보병 무리에게 치명적인 광역 피해를 입힌다.",
          },
        ],
        playstyle: `스크랩글럿은 '심리전과 물량'의 조화입니다. 노블라 무리로 거점을 선점하고 적을 붙잡아두는 사이, 하이테크(?) 고철 병기들과 매복해 있던 고저들이 나타나 적을 각개격파합니다. 상대가 오거의 맷집을 경계할 때 그로트의 머릿수로 판을 짜는 영리함이 필요합니다.`,
        imagePath: "/images/factions/ogor-mawtribes/scrapglutt.jpg",
      },
    ],
  },
  {
    id: "sons-of-behemat",
    name: "Sons of Behemat",
    alliance: "destruction",
    officalLink:
      "https://www.warhammer.com/en-WW/shop/age-of-sigmar/grand-alliance-destruction/sons-of-behemat",
    tagline: "땅을 고르는 거인들의 행진",
    lore: `신 베헤마트의 후예를 자처하는 거대한 거인들. 선즈 오브 베헤마트는 끝없이 떠돌며, 발걸음 하나로 도시를 무너뜨리는 살아있는 재앙이다.

그들에게 전쟁은 특별한 목적이 아니다. 그저 싸우고, 부수고, 더 큰 것을 향해 나아갈 뿐이다. 그들이 지나간 자리에는 아무것도 남지 않는다 — 땅은 짓밟히고, 문명은 산산이 부서진다.`,
    color: "#4a4a3a",
    accentColor: "#a09060",
    imagePath: "/images/factions/sons-of-behemat/banner.webp",
    spearheads: [
      {
        id: "wallsmasher-stomp",
        name: "Wallsmasher Stomp",
        gwUrl:
          "https://www.warhammer.com/en-WW/shop/spearhead-sons-of-behemat-2024?queryID=ecfda49eb42127ea30a27ac67157e17f",
        rarity: false,
        description: `거인들의 발구르기 한 번에 도시가 무너지고 대지가 뒤흔들립니다. 월스매셔 스톰프는 압도적인 체구와 힘을 앞세워 적의 방어선을 글자 그대로 '짓밟아' 버립니다. 머릿수는 매우 적지만, 각 모델이 전장의 지형지물과 적의 대열을 파괴하는 데 특화된 거대 괴수 군단입니다.`,
        stats: { 공격력: 4, 생존력: 10, 기동성: 6, 미션수행: 10, 유틸리티: 4 },
        recommended: [
          "압도적인 크기의 모델이 주는 시각적 위압감을 즐기는 분",
          "복잡한 유닛 관리 대신 강력한 개별 모델의 파워에 집중하고 싶은 분",
          "적의 보병 무리를 장난감처럼 날려버리는 쾌감을 원하는 분",
        ],
        notRecommended: [
          "모델 수가 너무 적어 발생하는 전략적 공백을 불안해하는 분",
          "정교한 마법이나 복잡한 연계 플레이를 선호하는 분",
        ],
        units: [
          {
            name: "Mancrusher Gargant",
            role: "지휘관",
            count: 1,
            description:
              "무리의 우두머리 역할을 수행하는 거인. 가장 거대한 몽둥이를 휘두르며 아군 가르간트들의 사기를 북돋는다.",
          },
          {
            name: "Mancrusher Gargant",
            role: "괴수",
            count: 1,
            description:
              "독립적으로 움직이는 거인. 적의 전열을 들이받고 보병들을 움켜쥐어 던져버린다.",
          },
          {
            name: "Mancrusher Gargant",
            role: "괴수",
            count: 1,
            description:
              "또 다른 가르간트. 거대한 돌덩이를 던지거나 발로 밟아 적의 방어선을 붕괴시킨다.",
          },
        ],
        playstyle: `월스매셔 스톰프는 '단순하지만 확실한 파괴'를 추구합니다. 모든 유닛이 괴수 판정을 받기 때문에 점유율 싸움에서 모델 수 대비 압도적인 점수를 가져갑니다. 적의 화력이 집중되기 전에 빠르게 접근하여 근접전으로 유도하고, 가르간트 특유의 '발로 밟기'와 '집어 던지기' 능력을 활용해 적의 핵심 유닛을 먼저 제거하는 것이 승리의 핵심입니다.`,
        imagePath: "/images/factions/sons-of-behemat/wallsmasher-stomp.jpg",
      },
    ],
  },
];

export function getFactionById(id) {
  return factions.find((f) => f.id === id);
}

export function getFactionsByAlliance(alliance) {
  return factions.filter((f) => f.alliance === alliance);
}

export function getSpearheadById(factionId, spearheadId) {
  const faction = getFactionById(factionId);
  if (!faction) return null;
  return faction.spearheads.find((s) => s.id === spearheadId) ?? null;
}
