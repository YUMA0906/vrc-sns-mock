const vrchatImages = {
  community: "https://images.squarespace-cdn.com/content/5f0770791aaf57311515b23d/42a6aa4e-ca30-4d01-a8f1-01be8dcef940/Tribe.webp?format=1000w",
  creators: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/e9d2fe72-6d63-4d50-a328-308899b90d75/AVM_Hero.png?format=1000w",
  crossPlatform: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1fbaf342-92a5-434d-94af-69585b41c366/image-asset.jpeg?format=1000w",
  plus: "https://images.squarespace-cdn.com/content/5f0770791aaf57311515b23d/1597215746590-Y4QCM6CI34YJQZ7AY4ZG/BG_VRC_P_MarketingPage%2BCharacters.png?format=1000w",
  world: "https://images.squarespace-cdn.com/content/5f0770791aaf57311515b23d/679b57c5-3bc0-4b93-a702-47c04edd470d/Endless_Worlds.webp?format=1000w",
  portrait: "https://images.squarespace-cdn.com/content/5f0770791aaf57311515b23d/84066272-5738-41de-a641-ba5b0bfaf6fe/BeWhoever.webp?format=1000w",
  neon: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/1607020876876-X9ODF2ZXTJNQXINMGSEA/WebBackdrop_Asteroids_v3.jpg?format=1000w",
  studio: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/0ebb9e46-88c9-4320-b3f9-bca28eeaa554/BG_2.png?format=1000w",
  event: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/0c6aa94a-98f0-435d-ab6b-9ae7b5437758/Website_KeyArt_Cat.png?format=1000w",
  city: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/1606790212103-L96WATJZQK8BQ0OWC60Z/LaunchVRChat?format=1000w",
  desk: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/af528ff4-9fde-4983-8812-4b43ec828c2d/VRCPlus_Badge_Rendered_Shadow.png?format=1000w",
  fashion: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/e9d2fe72-6d63-4d50-a328-308899b90d75/AVM_Hero.png?format=1500w",
  pressPlus: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/1606794168599-Z14AUXB45S5W0CW1DDWD/PressPage_VRChatPlus.png?format=1500w",
  pressCross: "https://vrchat.com/public/media/press-kit/PressPage_CrossPlatform.png",
  pressCommunity: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/1594406863121-T5KPYOSL9UTZGYVJRN46/PressPage_Community%5B1%5D.png?format=1500w",
  pressSdk: "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/1594406905608-I5SP4GFV8F51LFD5H542/PressPage_SDK%5B1%5D.png?format=1500w",
  steamWorldA: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438100/ss_1577335ddadd96c338c16a747758290b4214eb85.1920x1080.jpg?t=1762366454",
  steamWorldB: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438100/ss_31f674ab2a2cdf3d72ff7e8155100f4539a65a72.1920x1080.jpg?t=1762366454",
  steamAvatarA: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438100/ss_869211a61f76ff08db693092b43678278c396249.1920x1080.jpg?t=1762366454",
  steamAvatarB: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438100/ss_9f66a537db246bbf8fa0aa9c6681a37f65307ac2.1920x1080.jpg?t=1762366454",
  steamEventA: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438100/ss_b0c252d8f3c07478ec4001c995f4f6c75afb16a1.1920x1080.jpg?t=1762366454",
  steamEventB: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438100/ss_38db30a76b354606cf8583565179e69c1054b23c.1920x1080.jpg?t=1762366454",
  steamStudio: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438100/ss_c52a57f7f15d49d0d3ccd1743858a94c0dcc1ef1.1920x1080.jpg?t=1762366454",
  steamSocial: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438100/ss_d4351d713e0dc6210d5c275060f611c6adb13df2.1920x1080.jpg?t=1762366454",
};

document.addEventListener("error", (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.target.classList.add("is-broken-image");
    event.target.alt = "";
  }
}, true);

const pins = [
  {
    id: 1,
    title: "Neon shrine avatar edit",
    category: "Avatar",
    creator: "Mika Alterworks",
    role: "Avatar editor",
    avatar: "Selestia",
    world: "Yayoi Rain",
    tags: ["#avatar", "#改変", "#booth"],
    request: { open: true, title: "アバター改変依頼", price: "¥12,000〜", capacity: "受付 2 / 5", delivery: "平均 10日" },
    description: "衣装差し替え、表情調整、軽いギミック追加まで含めたVRChat向けアバター改変の作例。",
    image: vrchatImages.steamAvatarA,
  },
  {
    id: 2,
    title: "Moonlit portrait session",
    category: "Photo",
    creator: "Lumi Photo",
    role: "Photographer",
    avatar: "Manuka",
    world: "Silent Harbor",
    tags: ["#撮影", "#portrait", "#world"],
    request: { open: true, title: "VRChat撮影依頼", price: "¥4,000〜", capacity: "受付 1 / 3", delivery: "平均 3日" },
    description: "ワールド選定からポーズ提案まで行う、VRChat内ポートレート撮影プラン。",
    image: vrchatImages.steamSocial,
  },
  {
    id: 3,
    title: "Before / after retouch",
    category: "Retouch",
    creator: "Aoi Retouch",
    role: "Retoucher",
    avatar: "Kikyo",
    world: "Glass Room",
    tags: ["#retouch", "#beforeafter", "#credit"],
    request: { open: true, title: "レタッチ依頼", price: "¥2,500〜", capacity: "受付 4 / 8", delivery: "平均 2日" },
    description: "肌、髪、色味、被写界深度を整えてSNSやポートフォリオに使いやすく仕上げる作例。",
    image: vrchatImages.pressSdk,
  },
  {
    id: 4,
    title: "World teaser reel",
    category: "Video",
    creator: "Frame Drift",
    role: "Video creator",
    avatar: "Various",
    world: "Metro Bloom",
    tags: ["#動画編集", "#youtube", "#teaser"],
    request: { open: false, title: "動画編集依頼", price: "¥18,000〜", capacity: "満枠", delivery: "平均 14日" },
    description: "ワールド紹介やイベント告知向けの短尺映像編集サンプル。",
    image: vrchatImages.steamEventB,
  },
  {
    id: 5,
    title: "Soft club world",
    category: "World",
    creator: "Orbit Build",
    role: "World creator",
    avatar: "World sample",
    world: "Soft Club",
    tags: ["#world", "#lighting", "#vrchat"],
    request: { open: true, title: "ワールド制作依頼", price: "¥60,000〜", capacity: "受付 1 / 2", delivery: "平均 30日" },
    description: "イベント、撮影、展示向けに使える軽量で雰囲気のあるVRChatワールド制作サンプル。",
    image: vrchatImages.steamWorldA,
  },
  {
    id: 6,
    title: "Casual outfit setup",
    category: "Avatar",
    creator: "Mika Alterworks",
    role: "Avatar editor",
    avatar: "Shinra",
    world: "Morning Room",
    tags: ["#衣装", "#改変代行", "#booth"],
    request: { open: true, title: "衣装導入依頼", price: "¥5,000〜", capacity: "受付 3 / 6", delivery: "平均 5日" },
    description: "BOOTH衣装の導入、干渉調整、色替えまでをまとめたカジュアル改変の作例。",
    image: vrchatImages.steamAvatarB,
  },
  {
    id: 7,
    title: "Commission card layout",
    category: "Commission",
    creator: "Rin Works",
    role: "Commission designer",
    avatar: "Creator profile",
    world: "Portfolio",
    tags: ["#依頼受付", "#実績", "#納期"],
    request: { open: true, title: "サムネ制作依頼", price: "¥3,500〜", capacity: "受付 5 / 10", delivery: "平均 4日" },
    description: "価格、納期、残り枠、サンプル画像を一画面で確認できる依頼受付投稿のサンプル。",
    image: vrchatImages.pressCommunity,
  },
  {
    id: 8,
    title: "Event poster retouch",
    category: "Retouch",
    creator: "Aoi Retouch",
    role: "Retoucher",
    avatar: "Group shot",
    world: "Night Hall",
    tags: ["#イベント", "#ポスター", "#共有"],
    request: { open: false, title: "イベント画像制作", price: "¥8,000〜", capacity: "満枠", delivery: "平均 7日" },
    description: "Discord共有を想定した、VRChatイベント向けの告知ビジュアル制作。",
    image: vrchatImages.steamEventA,
  },
  { id: 9, title: "World photo walk", category: "Photo", creator: "Lumi Photo", role: "Photographer", avatar: "Moe", world: "Amber Station", tags: ["#worldphoto", "#写真", "#portfolio"], request: { open: true, title: "ワールド同行撮影", price: "¥3,000〜", capacity: "受付 2 / 4", delivery: "平均 2日" }, description: "お気に入りのワールドでプロフィール用写真をまとめて撮影するプラン。", image: vrchatImages.steamWorldA },
  { id: 10, title: "Weekend avatar snapshot", category: "Photo", creator: "Yoru Snap", role: "Casual poster", avatar: "Rurune", world: "Blue Hour Street", tags: ["#日常投稿", "#写真", "#bluehour"], request: null, description: "依頼受付ではない通常の写真投稿。お気に入りワールドで撮った週末ログ。", image: vrchatImages.steamSocial },
  { id: 11, title: "Asset credit board", category: "Avatar", creator: "Mika Alterworks", role: "Avatar editor", avatar: "Selestia", world: "Portfolio", tags: ["#credit", "#使用アセット", "#booth"], request: null, description: "使用アバター、衣装、アクセサリーのクレジットをまとめた通常投稿。", image: vrchatImages.pressSdk },
  { id: 12, title: "Night market memories", category: "Photo", creator: "Lumi Photo", role: "Photographer", avatar: "Manuka", world: "Night Market", tags: ["#worldphoto", "#friends", "#album"], request: null, description: "フレンドと回ったワールドの写真アルバム。閲覧、保存、プロフィール遷移を主目的にした投稿。", image: vrchatImages.steamEventA },
  { id: 13, title: "Retouch study 04", category: "Retouch", creator: "Aoi Retouch", role: "Retoucher", avatar: "Kikyo", world: "White Studio", tags: ["#study", "#colorgrade", "#比較"], request: null, description: "レタッチ練習の記録。改善前後や色味の研究をポートフォリオに残す想定。", image: vrchatImages.steamStudio },
  { id: 14, title: "Dance event recap", category: "Video", creator: "Frame Drift", role: "Video creator", avatar: "Various", world: "Club Prism", tags: ["#イベント", "#recap", "#動画"], request: null, description: "イベント後の通常投稿。YouTube埋め込みや短尺動画サムネイルが入る想定。", image: vrchatImages.steamEventB },
  { id: 15, title: "Creator room WIP", category: "World", creator: "Orbit Build", role: "World creator", avatar: "World sample", world: "Creator Room", tags: ["#wip", "#world", "#lighting"], request: null, description: "制作途中のワールド進捗投稿。依頼ではなく、フォロワー向けの制作ログ。", image: vrchatImages.steamWorldB },
  { id: 16, title: "Spring outfit lookbook", category: "Avatar", creator: "Nagi Closet", role: "Outfit stylist", avatar: "Shinra", world: "Soft Garden", tags: ["#lookbook", "#衣装", "#春コーデ"], request: null, description: "衣装コーデの通常投稿。Boothリンクや使用アセット表示を載せる想定。", image: vrchatImages.steamAvatarA },
  { id: 17, title: "Thumbnail commission sample", category: "Commission", creator: "Rin Works", role: "Commission designer", avatar: "Creator profile", world: "Portfolio", tags: ["#依頼受付", "#サムネ", "#sample"], request: { open: true, title: "サムネ制作依頼", price: "¥4,500〜", capacity: "受付 3 / 8", delivery: "平均 5日" }, description: "コミッション受付投稿のサムネイル例。依頼受付投稿でも画像サンプルをしっかり見せる想定。", image: vrchatImages.pressCommunity },
  { id: 18, title: "World launch announcement", category: "World", creator: "Orbit Build", role: "World creator", avatar: "World sample", world: "Metro Bloom", tags: ["#公開告知", "#world", "#イベント"], request: null, description: "新ワールド公開の告知投稿。広告ではなくフィードに自然に混ざるイベント告知のイメージ。", image: vrchatImages.world },
  { id: 19, title: "Avatar PV editing", category: "Video", creator: "Frame Drift", role: "Video creator", avatar: "Lapwing", world: "Black Stage", tags: ["#PV", "#ギミック紹介", "#youtube"], request: { open: true, title: "短尺PV編集依頼", price: "¥20,000〜", capacity: "受付 1 / 4", delivery: "平均 12日" }, description: "アバターの魅力やギミックを短尺動画で伝えるPV編集サンプル。", image: vrchatImages.steamAvatarB },
  { id: 20, title: "Shader test notes", category: "Avatar", creator: "Yoru Snap", role: "Casual poster", avatar: "Rurune", world: "Test Room", tags: ["#shader", "#memo", "#avatar"], request: null, description: "シェーダー設定や色味の比較メモ。自分用の記録としても使える通常投稿。", image: vrchatImages.pressSdk },
  { id: 21, title: "Photo walk route notes", category: "Photo", creator: "Lumi Photo", role: "Circle host", avatar: "Manuka", world: "Amber Station", tags: ["#circle", "#worldphoto", "#ロケハン"], request: null, description: "VRC写真散歩同好会の参加者向けに、次回フォトウォーク候補のワールド導線と撮影ポイントを共有する限定投稿。", image: vrchatImages.steamWorldA, circleId: "photo-walkers" },
  { id: 22, title: "Prototype lighting kit", category: "World", creator: "Orbit Build", role: "Circle host", avatar: "World sample", world: "Creator Room", tags: ["#circle", "#world", "#lighting"], request: null, description: "ワールド制作ラボの参加者だけに共有される、軽量ライト配置と検証用ギミックのメモ。", image: vrchatImages.steamWorldB, circleId: "world-lab" },
  { id: 23, title: "Selestia expression study", category: "Avatar", creator: "Mika Alterworks", role: "Avatar editor", avatar: "Selestia", world: "Private Studio", tags: ["#circle", "#avatar", "#表情差分"], request: null, description: "アバター改変研究会の参加者だけが見られる、表情差分と衣装合わせの途中検証ログ。", image: vrchatImages.steamAvatarA, circleId: "avatar-lab" },
  { id: 24, title: "Subscriber memo: booth fitting notes", category: "Avatar", creator: "Mika Alterworks", role: "Avatar editor", avatar: "Selestia", world: "Atelier room", tags: ["#subscriber", "#booth", "#fitting"], request: null, description: "メンバーシップ加入者だけが見られる衣装合わせメモ。購入前の比較や、どの衣装が相性良いかの途中記録をまとめています。", image: vrchatImages.steamAvatarB, visibility: "SubscriberOnly" },
  { id: 25, title: "Members album: hidden cuts", category: "Photo", creator: "Lumi Photo", role: "Photographer", avatar: "Manuka", world: "Moonlit Harbor", tags: ["#subscriber", "#album", "#portrait"], request: null, description: "メンバーシップ向けの未公開カット集。通常投稿には出していない構図やレタッチ前後の比較も載せる想定です。", image: vrchatImages.steamSocial, visibility: "SubscriberOnly" },
  { id: 26, title: "Devlog: optimization breakdown", category: "World", creator: "Orbit Build", role: "World creator", avatar: "World sample", world: "Soft Club", tags: ["#subscriber", "#optimization", "#devlog"], request: null, description: "支援者限定の制作ログ。容量削減やライティング調整の判断理由を詳しく共有する想定です。", image: vrchatImages.steamWorldB, visibility: "SubscriberOnly" },
  { id: 101, title: "Draft avatar board", category: "Avatar", creator: "You", role: "VRChat creator", avatar: "Rurune", world: "Creator Room", tags: ["#draft", "#avatar", "#memo"], request: null, description: "自分用の下書きアバターボード。", image: vrchatImages.steamAvatarA },
  { id: 102, title: "Saved outfit ideas", category: "Avatar", creator: "You", role: "VRChat creator", avatar: "Shinra", world: "Soft Garden", tags: ["#saved", "#outfit", "#booth"], request: null, description: "保存した衣装アイデアをまとめたマイページ用投稿。", image: vrchatImages.steamAvatarB },
  { id: 103, title: "World walk archive", category: "World", creator: "You", role: "VRChat creator", avatar: "Rurune", world: "Silent Harbor", tags: ["#world", "#archive", "#photo"], request: null, description: "お気に入りワールドの散歩ログ。", image: vrchatImages.steamWorldA },
  { id: 104, title: "Subscriber-only setup memo", category: "Avatar", creator: "You", role: "VRChat creator", avatar: "Rurune", world: "Creator Room", tags: ["#subscriber", "#memo", "#setup"], request: null, description: "支援者だけに共有する導入手順や細かな設定メモの想定投稿。", image: vrchatImages.pressSdk, visibility: "SubscriberOnly" },
  { id: 105, title: "Backstage WIP notes", category: "Photo", creator: "You", role: "VRChat creator", avatar: "Shinra", world: "Soft Garden", tags: ["#subscriber", "#wip", "#photo"], request: null, description: "支援プラン向けの制作途中メモや未公開カットのまとめ。", image: vrchatImages.steamStudio, visibility: "SubscriberOnly" },
];

const myPosts = pins.filter((pin) => pin.creator === "You");

const circleGroups = [
  {
    id: "photo-walkers",
    name: "VRC写真散歩同好会",
    owner: "Lumi Photo",
    cover: vrchatImages.community,
    description: "ワールド巡り、ポートレート撮影、ロケハンメモを共有する写真好き向けサークル。参加者限定で撮影ルートや作例レビューを投稿できます。",
    tags: ["#写真", "#worldphoto", "#ロケハン"],
    members: 128,
    visibility: "自由参加OK",
    eventRule: "フォトリレー系イベントの参加条件に設定可能",
  },
  {
    id: "avatar-lab",
    name: "アバター改変研究会",
    owner: "Mika Alterworks",
    cover: vrchatImages.fashion,
    description: "アバター改変、衣装合わせ、表情差分、使用アセットの検証ログを共有する研究会。未完成の作例も安全に共有できる想定です。",
    tags: ["#avatar", "#改変", "#booth"],
    members: 84,
    visibility: "承認制",
    eventRule: "アバター特集イベントの参加条件に利用中",
  },
  {
    id: "world-lab",
    name: "ワールド制作ラボ",
    owner: "Orbit Build",
    cover: vrchatImages.world,
    description: "ライティング、軽量化、ギミック検証を共有するワールド制作者向けサークル。制作途中の投稿をメンバー限定で残せます。",
    tags: ["#world", "#lighting", "#gimmick"],
    members: 63,
    visibility: "自由参加OK",
    eventRule: "ジャムや勉強会の参加条件に設定可能",
  },
  {
    id: "booth-outfit-club",
    name: "BOOTH衣装合わせ部",
    owner: "Rin Works",
    cover: vrchatImages.fashion,
    description: "新作衣装、色替え、干渉チェック、着回し例を共有する衣装好き向けサークル。発売記念イベントや試着会の導線にも使える想定です。",
    tags: ["#booth", "#衣装", "#lookbook"],
    members: 146,
    visibility: "自由参加OK",
    eventRule: "衣装合わせ会や新作試着イベントの参加条件に設定可能",
  },
  {
    id: "portrait-lighting-room",
    name: "ポートレート照明室",
    owner: "Aoi Retouch",
    cover: vrchatImages.portrait,
    description: "VRChat内ポートレートの光づくり、構図、現像前提の撮影メモを共有する少人数制サークル。",
    tags: ["#portrait", "#lighting", "#撮影"],
    members: 72,
    visibility: "承認制",
    eventRule: "撮影講評会やポートレート特集の参加条件に設定可能",
  },
  {
    id: "retouch-feedback-cafe",
    name: "レタッチ添削カフェ",
    owner: "Aoi Retouch",
    cover: vrchatImages.studio,
    description: "Before / After、色味調整、SNS掲載前の軽い添削を持ち寄るレタッチ練習サークル。",
    tags: ["#retouch", "#colorgrade", "#beforeafter"],
    members: 91,
    visibility: "自由参加OK",
    eventRule: "添削会やレタッチ練習イベントの参加条件に設定可能",
  },
  {
    id: "gimmick-sandbox",
    name: "ギミック検証サンドボックス",
    owner: "Orbit Build",
    cover: vrchatImages.desk,
    description: "メニュー導線、Contact、簡易ギミック、ライブ向け演出の検証ログを共有する制作サークル。",
    tags: ["#gimmick", "#unity", "#avatar"],
    members: 58,
    visibility: "承認制",
    eventRule: "技術検証会やギミック勉強会の参加条件に利用中",
  },
  {
    id: "avatar-pv-circle",
    name: "アバターPV研究部",
    owner: "Frame Drift",
    cover: vrchatImages.event,
    description: "短尺PV、商品紹介動画、告知リールの構成や編集サンプルを共有する映像系サークル。",
    tags: ["#PV", "#動画編集", "#youtube"],
    members: 67,
    visibility: "自由参加OK",
    eventRule: "アバターPV投稿企画や発売記念特集の参加条件に設定可能",
  },
  {
    id: "world-optimization-guild",
    name: "軽量化ワールドギルド",
    owner: "Orbit Build",
    cover: vrchatImages.crossPlatform,
    description: "Quest対応、ライトベイク、容量削減、負荷検証を共有するワールド制作寄りの実務サークル。",
    tags: ["#optimization", "#quest", "#world"],
    members: 103,
    visibility: "承認制",
    eventRule: "ワールド制作ジャムや技術共有会の参加条件に設定可能",
  },
  {
    id: "event-host-lounge",
    name: "イベント主催ラウンジ",
    owner: "Veacon運営",
    cover: vrchatImages.event,
    description: "イベント告知、参加条件、進行メモ、協力クリエイター募集を整理する主催者向けサークル。",
    tags: ["#event", "#告知", "#運営"],
    members: 214,
    visibility: "自由参加OK",
    eventRule: "ユーザー発案イベントの共同主催条件に設定可能",
  },
  {
    id: "quest-friendly-lab",
    name: "Quest対応研究所",
    owner: "Orbit Build",
    cover: vrchatImages.crossPlatform,
    description: "Quest対応アバターやワールドの見え方、容量、描画負荷を検証して共有するサークル。",
    tags: ["#quest", "#crossplatform", "#軽量化"],
    members: 119,
    visibility: "自由参加OK",
    eventRule: "Quest対応作品特集やクロスプラットフォーム企画の参加条件に設定可能",
  },
  {
    id: "shader-notes-club",
    name: "シェーダーメモ部",
    owner: "Yoru Snap",
    cover: vrchatImages.neon,
    description: "lilToon設定、発光表現、肌や髪の色味調整など、見た目づくりのメモを貯めるサークル。",
    tags: ["#shader", "#liltoon", "#avatar"],
    members: 77,
    visibility: "自由参加OK",
    eventRule: "シェーダー設定共有会の参加条件に設定可能",
  },
  {
    id: "thumbnail-design-studio",
    name: "サムネデザイン工房",
    owner: "Rin Works",
    cover: vrchatImages.creators,
    description: "依頼受付投稿、イベント告知、BOOTH商品画像のサムネイルを研究するデザインサークル。",
    tags: ["#thumbnail", "#design", "#依頼受付"],
    members: 88,
    visibility: "自由参加OK",
    eventRule: "サムネ制作チャレンジや告知画像特集の参加条件に利用中",
  },
  {
    id: "vrchat-dance-squad",
    name: "VRCダンス記録隊",
    owner: "Frame Drift",
    cover: vrchatImages.city,
    description: "ダンスイベントの写真、リキャップ動画、ステージ演出の記録を共有するイベント好き向けサークル。",
    tags: ["#dance", "#event", "#recap"],
    members: 132,
    visibility: "自由参加OK",
    eventRule: "ダンスイベントの参加者限定投稿やアフタームービー共有に利用中",
  },
  {
    id: "photo-retreat",
    name: "週末フォトリトリート",
    owner: "Lumi Photo",
    cover: vrchatImages.community,
    description: "週末にゆっくりワールドを巡って写真を撮る、初心者歓迎のフォトウォークサークル。",
    tags: ["#写真", "#週末", "#worldphoto"],
    members: 176,
    visibility: "自由参加OK",
    eventRule: "フォトウォークや撮影会イベントの参加条件に設定可能",
  },
  {
    id: "avatar-expression-club",
    name: "表情差分クラブ",
    owner: "Mika Alterworks",
    cover: vrchatImages.portrait,
    description: "表情差分、ハンドサイン、顔まわりの演出を研究するアバター改変サークル。",
    tags: ["#表情差分", "#avatar", "#改変"],
    members: 95,
    visibility: "承認制",
    eventRule: "表情差分コンテストやアバター特集の参加条件に設定可能",
  },
  {
    id: "creator-trade-room",
    name: "クリエイター相談室",
    owner: "Veacon運営",
    cover: vrchatImages.creators,
    description: "依頼文、見積もり、納期調整、公開プロフィールの作り方を相談するクリエイター向けサークル。",
    tags: ["#creator", "#相談", "#commission"],
    members: 201,
    visibility: "自由参加OK",
    eventRule: "クリエイター向け勉強会や相談会の参加条件に設定可能",
  },
  {
    id: "newcomer-creator-circle",
    name: "はじめての創作サークル",
    owner: "Veacon運営",
    cover: vrchatImages.plus,
    description: "投稿、プロフィール、初めての依頼受付、作品の見せ方をゆっくり試す初心者向けサークル。",
    tags: ["#初心者", "#creator", "#はじめて"],
    members: 248,
    visibility: "自由参加OK",
    eventRule: "初心者向けイベントや投稿練習企画の参加条件に設定可能",
  },
  {
    id: "world-tour-planners",
    name: "ワールド巡り企画室",
    owner: "Lumi Photo",
    cover: vrchatImages.world,
    description: "テーマ別ワールド巡り、撮影ルート、イベント導線を企画するワールド好き向けサークル。",
    tags: ["#world", "#tour", "#event"],
    members: 154,
    visibility: "自由参加OK",
    eventRule: "ワールドツアーイベントの参加条件に設定可能",
  },
  {
    id: "commission-template-lab",
    name: "依頼テンプレ研究所",
    owner: "Rin Works",
    cover: vrchatImages.desk,
    description: "依頼受付文、納品条件、リテイク可否、料金表の見せ方を研究するコミッション設計サークル。",
    tags: ["#依頼受付", "#template", "#見積もり"],
    members: 112,
    visibility: "承認制",
    eventRule: "依頼受付改善ワークショップの参加条件に設定可能",
  },
  {
    id: "live-gimmick-crew",
    name: "ライブ演出ギミック班",
    owner: "Mika Alterworks",
    cover: vrchatImages.neon,
    description: "ライブ、DJ、ステージ演出向けのアバターギミックや小物演出を共有するサークル。",
    tags: ["#live", "#gimmick", "#stage"],
    members: 69,
    visibility: "承認制",
    eventRule: "ライブ系イベントの出演者・制作協力条件に設定可能",
  },
  {
    id: "album-making-club",
    name: "アルバム制作部",
    owner: "Lumi Photo",
    cover: vrchatImages.studio,
    description: "撮影した写真をアルバム、ポートフォリオ、イベント記録としてまとめる編集サークル。",
    tags: ["#album", "#portfolio", "#写真"],
    members: 83,
    visibility: "自由参加OK",
    eventRule: "フォトアルバム投稿企画や展示イベントの参加条件に設定可能",
  },
  {
    id: "avatar-release-watch",
    name: "アバター発売ウォッチ",
    owner: "Nagi Closet",
    cover: vrchatImages.fashion,
    description: "新作アバター、衣装、対応アイテムの発売記念投稿や使用例を集めるウォッチサークル。",
    tags: ["#発売記念", "#avatar", "#booth"],
    members: 187,
    visibility: "自由参加OK",
    eventRule: "アバター特集や発売記念キャンペーンの参加条件に設定可能",
  },
  {
    id: "private-world-gallery",
    name: "小さな展示室同好会",
    owner: "Orbit Build",
    cover: vrchatImages.world,
    description: "個人展示、写真ギャラリー、ポートフォリオ展示ワールドの設計例を共有するサークル。",
    tags: ["#gallery", "#world", "#portfolio"],
    members: 64,
    visibility: "自由参加OK",
    eventRule: "展示会イベントやギャラリー巡回企画の参加条件に設定可能",
  },
  {
    id: "social-posing-club",
    name: "ポーズ研究サークル",
    owner: "Yoru Snap",
    cover: vrchatImages.portrait,
    description: "一人撮影、ペア撮影、集合写真で自然に見えるポーズや表情の作例を共有するサークル。",
    tags: ["#pose", "#portrait", "#写真"],
    members: 139,
    visibility: "自由参加OK",
    eventRule: "ポージング講座や撮影会の参加条件に設定可能",
  },
  {
    id: "booth-credit-keepers",
    name: "クレジット表記を守る会",
    owner: "Veacon運営",
    cover: vrchatImages.desk,
    description: "BOOTHアセット、利用規約、クレジット表記、依頼時の確認事項を整理する安心運用サークル。",
    tags: ["#credit", "#booth", "#規約確認"],
    members: 226,
    visibility: "自由参加OK",
    eventRule: "権利確認セミナーや安心依頼キャンペーンの参加条件に設定可能",
  },
  {
    id: "night-shooters",
    name: "夜景撮影部",
    owner: "Lumi Photo",
    cover: vrchatImages.neon,
    description: "ネオン、雨、暗所、発光衣装を使った夜景撮影の作例とワールド情報を共有するサークル。",
    tags: ["#nightphoto", "#neon", "#worldphoto"],
    members: 121,
    visibility: "自由参加OK",
    eventRule: "夜景フォトコンテストや限定撮影会の参加条件に設定可能",
  },
];

circleGroups.forEach((circle, index) => {
  if (!circle.postAudience) {
    if ([2, 6, 10, 13, 18, 22, 26].includes(index)) {
      circle.postAudience = "Both";
    } else {
      circle.postAudience = [0, 3, 5, 8, 11, 14, 17, 21, 24].includes(index) ? "Public" : "CircleOnly";
    }
  }
  if (!circle.supportPayout) {
    circle.supportPayout = [0, 2, 5, 8, 13, 21].includes(index) ? "split" : "owner";
  }
});

const circleManagementData = {
  "photo-walkers": {
    owner: "You",
    managedByYou: true,
    members: [
      { id: "you", name: "You", role: "Owner", joined: "作成者", status: "管理者", avatar: "Y" },
      { id: "lumi", name: "Lumi Photo", role: "Manager", joined: "2026-05-28", status: "イベント作成可", avatar: "L" },
      { id: "yoru", name: "Yoru Snap", role: "Member", joined: "2026-06-01", status: "投稿可", avatar: "Y" },
      { id: "nagi", name: "Nagi Closet", role: "Member", joined: "2026-06-03", status: "投稿可", avatar: "N" }
    ],
    requests: [
      { id: "req-photo-1", name: "Kohaku Lens", note: "ポートレート作例とVRChatリンクあり。次回フォトウォーク参加希望。", requested: "今日" },
      { id: "req-photo-2", name: "Mizuki Route", note: "ワールド巡りイベントを共同開催したい。過去投稿 12件。", requested: "昨日" }
    ]
  },
  "world-lab": {
    owner: "You",
    managedByYou: true,
    members: [
      { id: "you", name: "You", role: "Owner", joined: "作成者", status: "管理者", avatar: "Y" },
      { id: "orbit", name: "Orbit Build", role: "Manager", joined: "2026-05-18", status: "投稿管理可", avatar: "O" },
      { id: "frame", name: "Frame Drift", role: "Member", joined: "2026-06-02", status: "投稿可", avatar: "F" }
    ],
    requests: [
      { id: "req-world-1", name: "Mori Studio", note: "軽量化メモを共有したい。Quest対応ワールドの投稿あり。", requested: "2日前" }
    ]
  },
  "event-host-lounge": {
    owner: "Veacon運営",
    managedByYou: true,
    members: [
      { id: "you", name: "You", role: "Manager", joined: "2026-05-12", status: "イベント運営補助", avatar: "Y" },
      { id: "vrcsns", name: "Veacon運営", role: "Owner", joined: "作成者", status: "管理者", avatar: "V" },
      { id: "rin", name: "Rin Works", role: "Member", joined: "2026-06-04", status: "投稿可", avatar: "R" }
    ],
    requests: [
      { id: "req-event-1", name: "DJ Nemu", note: "イベント告知の相談をしたい。開催実績リンクあり。", requested: "今日" },
      { id: "req-event-2", name: "Kite Atelier", note: "展示会イベントの共同主催者を探している。", requested: "3日前" }
    ]
  }
};

const trustProfiles = {
  You: { summary: "通常投稿、下書き、保存したアイデアをまとめる自分用の信用ページ。", style: "VRChat内の自然な空気感、日常ログ、ワールド散歩の記録を中心に整理しています。", scope: ["VRChat photo", "Avatar notes", "World archive", "Portfolio"], links: ["https://vrchat.com/home/user/example", "https://x.com/YUMA0906", "https://yuma0906.booth.pm/"], completed: 0, likes: 128, saves: 18, repeat: 0 },
  "Mika Alterworks": { summary: "衣装導入、表情調整、軽いギミック追加まで相談しやすいアバター改変クリエイター。", style: "ネオン、和風、柔らかい日常系まで、BOOTH衣装を自然に馴染ませる作風。", scope: ["Avatar edit", "Outfit setup", "Expression", "Booth assets"], links: ["https://vrchat.com/home/user/mika-alterworks", "https://x.com/mika_alterworks", "https://mika-alterworks.booth.pm/"], completed: 42, likes: 980, saves: 246, repeat: 18 },
  "Lumi Photo": { summary: "ワールド選定からポーズ提案まで任せられるVRChatフォトグラファー。", style: "夜景、ポートレート、フレンドとの記念撮影をしっとり見せる写真表現。", scope: ["Portrait photo", "World photo", "Lighting", "Album"], links: ["https://vrchat.com/home/user/lumi-photo", "https://x.com/lumi_vrcphoto"], completed: 31, likes: 720, saves: 184, repeat: 12 },
  "Aoi Retouch": { summary: "肌、髪、色味、集合写真の仕上げを中心に対応するレタッチ担当。", style: "素材感を残しながら、SNSで見栄えする明るさと奥行きを整える作風。", scope: ["Retouch", "Color grading", "Group photo", "Before after"], links: ["https://x.com/aoi_retouch", "https://aoi-retouch.booth.pm/"], completed: 58, likes: 840, saves: 210, repeat: 25 },
  "Frame Drift": { summary: "ワールド紹介、イベント告知、アバターPVの短尺編集を相談できる映像クリエイター。", style: "テンポ感のあるカット、読みやすいテロップ、SNSで流しやすい短尺動画が得意。", scope: ["Video edit", "Avatar PV", "Event recap", "YouTube"], links: ["https://x.com/framedrift_vrc"], completed: 22, likes: 650, saves: 132, repeat: 7 },
  "Orbit Build": { summary: "撮影、展示、イベント用途の軽量ワールド制作を相談できるワールドクリエイター。", style: "光と余白を大事にした、写真を撮りたくなるコンパクトな空間設計。", scope: ["World build", "Lighting", "Event space", "Optimization"], links: ["https://vrchat.com/home/world/orbit-build"], completed: 16, likes: 540, saves: 176, repeat: 6 },
  "Rin Works": { summary: "依頼受付投稿、サムネイル、料金表カードの見せ方を整えるデザイナー。", style: "価格、納期、残り枠がぱっと読める、依頼前提の情報設計が得意。", scope: ["Commission card", "Thumbnail", "Menu design", "Portfolio"], links: ["https://x.com/rinworks_vrc", "https://rinworks.booth.pm/"], completed: 36, likes: 610, saves: 198, repeat: 14 },
};

const notifications = [
  { id: 1, type: "request", unread: true, title: "Mika Alterworksが依頼受付を更新しました", body: "アバター改変依頼の受付枠と納期が更新されています。", time: "5分前", target: { kind: "request", creator: "Mika Alterworks", postId: 1 } },
  { id: 2, type: "save", unread: true, title: "あなたの投稿が保存されました", body: "World walk archive が新しく保存されました。", time: "18分前", target: { kind: "post", postId: 103 } },
  { id: 3, type: "follow", unread: false, title: "Lumi Photoがあなたをフォローしました", body: "プロフィールと過去投稿を確認できます。", time: "1時間前", target: { kind: "profile", creator: "Lumi Photo" } },
  { id: 4, type: "message", unread: false, title: "依頼前相談に返信があります", body: "料金、納期、必要素材について返信が届いています。", time: "昨日", target: { kind: "request", creator: "Rin Works", postId: 7 } },
  { id: 5, type: "important", unread: true, title: "イベント申請が承認待ちです", body: "夏のフォトリレー特集の開催許可申請を運営が確認中です。", time: "今日", target: { kind: "events" } },
  { id: 6, type: "request", unread: false, title: "納品確認の期限が近づいています", body: "受け取り評価待ちの依頼があります。内容確認をお願いします。", time: "2日前", target: { kind: "manager", itemId: 7 } },
  { id: 7, type: "request", unread: true, title: "見積もり確認が必要です", body: "Mika Alterworksから見積もりが届いています。支払い前に内容を確認してください。", time: "10分前", target: { kind: "my-request", itemId: 101 } },
];

const postComments = {
  1: [
    { id: "c-1-1", author: "Lumi Photo", time: "12分前", body: "衣装の色味とワールドの光がかなり合ってます。" },
    { id: "c-1-2", author: "Rin Works", time: "5分前", body: "依頼前に確認したい作例として見やすいです。" },
  ],
  5: [
    { id: "c-5-1", author: "Mika Alterworks", time: "1時間前", body: "Quest対応の負荷感も見たいです。" },
  ],
  13: [
    { id: "c-13-1", author: "Yoru Snap", time: "28分前", body: "肌の明るさが自然で使いやすそう。" },
    { id: "c-13-2", author: "Aoi Retouch", time: "18分前", body: "次は夜景寄りの比較も載せます。" },
  ],
  24: [
    { id: "c-24-1", author: "You Creator", time: "昨日", body: "加入者向けのメモなので、細かい導入差分も残しておきます。" },
  ],
};

const adminQueues = {
  events: [
    {
      id: "event-01",
      title: "夏のフォトリレー特集",
      owner: "Lumi Photo",
      contact: "lumi@example.com",
      status: "審査待ち",
      type: "写真特集",
      submittedAt: "2026-06-05",
      detail: "写真投稿を集めるユーザー発案イベント。バナー画像あり、サークル参加条件なし。",
      summary: "夏のワールド写真を集める2週間の投稿企画。#SummerVRCPhoto を付けた投稿をイベントページに集約し、参加者同士が撮影ワールドを探しやすくする想定。",
      support: "トップバナー掲載とイベントページ内のピックアップ枠があると助かります。",
      banner: vrchatImages.event,
      tags: ["#SummerVRCPhoto", "#world", "#photo"],
      action: "確認する"
    },
    {
      id: "event-02",
      title: "ワールド制作ミニジャム",
      owner: "Orbit Build",
      contact: "orbit@example.com",
      status: "確認中",
      type: "制作イベント",
      submittedAt: "2026-06-04",
      detail: "ワールド制作ラボ参加者向け。開催期間は承認後に主催者が設定予定。",
      summary: "小規模なワールド制作テーマを出し、参加者が1週間でプロトタイプを投稿する企画。参加条件はワールド制作ラボのサークル参加者。",
      support: "注意事項の文面確認と、イベント公開時の告知導線を相談したいです。",
      banner: vrchatImages.world,
      tags: ["#world", "#jam", "#circle"],
      action: "確認する"
    },
  ],
  reports: [
    { id: "report-01", title: "アバターデータ要求の疑い", owner: "Aoi Kisaragi", status: "高優先", detail: "依頼チャットで販売アセットの同梱を求めた可能性。添付ZIP警告ログあり。", action: "対応記録を開く" },
    { id: "report-02", title: "不当なレビュー", owner: "Noa Frame", status: "確認中", detail: "納品後レビューが取引内容と矛盾しているという通報。チャット履歴と納品物を確認。", action: "レビューを保留" },
  ],
};

const backendSpecCards = [
  { title: "User / Profile", body: "表示名、アイコン、バナー、自己紹介、外部リンク、公開範囲、トラストレベル、通知/ミュート/ブロック状態。", fields: ["users", "profiles", "profile_links", "trust_scores"] },
  { title: "Post / Feed", body: "通常投稿、依頼受付投稿、サークル限定投稿。画像複数枚、カテゴリ、タグ、Avatar/Worldメタ、保存/いいね/共有数。", fields: ["posts", "post_images", "post_tags", "reactions"] },
  { title: "Request", body: "依頼受付ページ、依頼申請、見積もり、支払い前確認、チャット方針、リテイク可否、納品、評価。", fields: ["commission_posts", "requests", "deliveries", "reviews"] },
  { title: "Chat / Attachment", body: "初回申請と納品完了時の必須連絡、通常チャットの利用可否、画像/ZIP添付、ZIP権利確認ログ。", fields: ["request_messages", "attachments", "zip_confirmations"] },
  { title: "Event / Circle", body: "公式/ユーザー発案イベント、開催許可、イベント参加条件、サークル参加状態、承認制、限定投稿。", fields: ["events", "event_applications", "circles", "circle_members"] },
  { title: "Notification / Admin", body: "未読、重要、依頼関連の通知分類。運営側のイベント承認と通報対応キュー。サークル作成は承認なしで即時作成、参加申請はサークル主が管理。", fields: ["notifications", "admin_reviews", "reports"] },
];

const requestManagerItems = [
  { id: 1, title: "Selestia spring look 改変", client: "Aoi Kisaragi", summary: "衣装差し替え、表情3種、ポーズ撮影用の軽微な調整。", status: "pending", deadline: "2026-06-06", budget: "¥12,000", thumbnail: vrchatImages.fashion, requestedAt: "2026-06-03 22:15", scope: ["衣装導入", "表情3種", "PhysBone確認", "納品ZIP"], messages: [{ from: "client", time: "6/3 22:15", text: "春っぽい衣装に差し替えて、表情も少し追加したいです。" }, { from: "you", time: "6/3 22:40", text: "内容確認しました。使用アセットのリンクも送ってください。" }] },
  { id: 2, title: "Club Prism 告知サムネ", client: "DJ Nemu", summary: "イベント告知用の横長サムネイルとSNS投稿用画像の制作依頼。", status: "pending", deadline: "2026-06-08", budget: "¥7,500", thumbnail: vrchatImages.event, requestedAt: "2026-06-04 09:30", scope: ["横長サムネ", "SNS正方形", "テキスト調整", "2案提出"], messages: [{ from: "client", time: "6/4 09:30", text: "今週末のイベント告知画像をお願いしたいです。" }] },
  { id: 3, title: "BOOTH商品ページ用PV編集", client: "Lumi Photo", summary: "30秒尺、字幕入れ、色味調整まで承諾済み。", status: "accepted", deadline: "2026-06-10", budget: "¥28,000", thumbnail: vrchatImages.creators, requestedAt: "2026-06-01 13:20", scope: ["30秒PV", "字幕入れ", "色味調整", "BOOTH掲載向け"], messages: [{ from: "client", time: "6/1 13:21", text: "テンポ少し速めで、商品カットを多めにしたいです。" }, { from: "you", time: "6/1 13:40", text: "承諾しました。絵コンテを明日までに送ります。" }] },
  { id: 4, title: "Yayoi Rain ポートレート補正", client: "Rin Works", summary: "肌補正、ライティング調整、SNS掲載用のトリミング。", status: "accepted", deadline: "2026-06-12", budget: "¥9,000", thumbnail: vrchatImages.portrait, requestedAt: "2026-06-02 20:10", scope: ["肌補正", "ライティング調整", "SNS比率3種", "文字なし版"], messages: [{ from: "client", time: "6/2 20:14", text: "ポスターにも使いたいので少しだけシャープ寄りでお願いします。" }] },
  { id: 5, title: "ライブ用ギミック導入", client: "Mika Alterworks", summary: "作業開始済み。メニュー導線とアイコン差し替えの最終調整。", status: "in_progress", deadline: "2026-06-07", budget: "¥22,000", thumbnail: vrchatImages.neon, requestedAt: "2026-05-31 19:45", scope: ["メニュー導線", "アイコン差し替え", "動作確認", "prefab納品"], messages: [{ from: "you", time: "6/3 10:03", text: "作業を開始しました。メニュー導線の感触を確認してほしいです。" }, { from: "client", time: "6/3 10:22", text: "かなり良いです。この方向でお願いします。" }] },
  { id: 6, title: "展示会ブース用メインビジュアル", client: "Kite Atelier", summary: "進行中。構図FIX済みで仕上げ段階。", status: "in_progress", deadline: "2026-06-09", budget: "¥35,000", thumbnail: vrchatImages.community, requestedAt: "2026-05-30 16:05", scope: ["メインビジュアル", "展示用2種", "サムネ最適化", "PSD同梱"], messages: [{ from: "client", time: "6/2 14:50", text: "構図FIXでお願いします。キャッチコピーは後から送ります。" }] },
  { id: 7, title: "3周年記念アバター撮影セット", client: "Haru Works", summary: "納品完了。相手からの確認と評価を待っている状態。", status: "awaiting_review", deadline: "2026-05-31", budget: "¥16,000", thumbnail: vrchatImages.crossPlatform, requestedAt: "2026-05-24 22:18", scope: ["撮影セット12枚", "告知画像", "サムネ3種", "納品データ整理"], messages: [{ from: "you", time: "5/31 18:05", text: "納品完了しました。Google Driveのフォルダも共有済みです。" }] },
  { id: 8, title: "ポスター用レタッチ一式", client: "Noa Frame", summary: "相手から評価済み。こちらから相手を評価するターン。", status: "awaiting_your_review", deadline: "2026-05-28", budget: "¥14,000", thumbnail: vrchatImages.studio, requestedAt: "2026-05-22 11:02", scope: ["印刷用レタッチ", "SNS比率版", "色校正", "書き出し2種"], messages: [{ from: "client", time: "5/28 15:01", text: "受け取りました。完成度高かったので評価も入れておきました。" }] },
  { id: 9, title: "衣装導入ミニ依頼", client: "Sora Closet", summary: "相互評価まで完了してクローズした依頼。", status: "completed", deadline: "2026-05-20", budget: "¥5,000", thumbnail: vrchatImages.plus, requestedAt: "2026-05-18 12:40", scope: ["衣装導入", "軽微な干渉修正", "Unitypackage確認", "完了済み"], messages: [{ from: "you", time: "5/20 19:12", text: "こちらも評価しました。ご依頼ありがとうございました。" }] },
];

requestManagerItems.forEach((item) => {
  if (!Array.isArray(item.deliveries)) {
    item.deliveries = item.status === "awaiting_review" || item.status === "awaiting_your_review" || item.status === "completed"
      ? [{
          name: "初回納品",
          files: item.status === "completed" ? "Unitypackage / ZIP / Readme" : "PNG 12枚 / ZIP 1件 / Drive link",
          note: item.status === "completed" ? "最終納品まで完了。必要なデータをまとめて共有済みです。" : "納品データをまとめて共有済みです。受け取り確認をお願いします。",
          time: item.requestedAt.split(" ")[0]
        }]
      : [];
  }
  if (!item.rating) item.rating = `${(4.4 + (item.id % 5) * 0.1).toFixed(1)} / 5.0`;
});

const myRequestItems = [
  {
    id: 101,
    title: "Selestia衣装導入と表情調整",
    creator: "Mika Alterworks",
    service: "アバター改変依頼",
    status: "estimate",
    requestedAt: "2026-06-07 21:10",
    desiredDue: "2026-06-20",
    plannedDue: "2026-06-18",
    amount: "¥14,000",
    thumbnail: vrchatImages.steamAvatarA,
    summary: "衣装導入、干渉調整、表情2種追加の見積もりが届いています。支払い前に内容確認が必要です。",
    scope: ["衣装導入", "PhysBone確認", "表情2種", "納品ZIP", "リテイク1回まで"],
    next: "見積もり内容、納期、リテイク可否を確認して、問題なければ支払い前確認へ進みます。",
    messages: [
      { from: "you", time: "6/7 21:10", text: "Selestiaに新しい衣装を導入して、表情を2つ追加したいです。" },
      { from: "creator", time: "6/8 09:32", text: "内容確認しました。衣装導入と表情追加で ¥14,000、納期は10日前後で対応できます。" },
    ],
  },
  {
    id: 102,
    title: "イベント告知サムネイル制作",
    creator: "Rin Works",
    service: "サムネ制作依頼",
    status: "sent",
    requestedAt: "2026-06-08 12:40",
    desiredDue: "2026-06-13",
    plannedDue: "相手返信待ち",
    amount: "未確定",
    thumbnail: vrchatImages.pressCommunity,
    summary: "イベントタイトル、開催日時、ロゴ素材を送信済み。クリエイターからの初回返信待ちです。",
    scope: ["横長サムネ", "SNS正方形", "テキスト調整", "ロゴ配置"],
    next: "クリエイターの返信を待っています。追加素材があればチャットに送れます。",
    messages: [
      { from: "you", time: "6/8 12:40", text: "今週末のVRChatイベント告知画像をお願いしたいです。素材はDriveにまとめています。" },
    ],
  },
  {
    id: 103,
    title: "ワールド軽量化の承認前相談",
    creator: "Orbit Build",
    service: "ワールド制作相談",
    status: "consulting",
    requestedAt: "2026-06-06 17:25",
    desiredDue: "2026-06-24",
    plannedDue: "相談中",
    amount: "¥18,000目安",
    thumbnail: vrchatImages.steamWorldB,
    summary: "正式依頼前に、Quest対応の作業範囲と素材共有方法を相談しています。",
    scope: ["負荷確認", "Quest対応相談", "作業範囲整理", "見積もり前相談"],
    next: "相手からの確認事項に返信して、正式な見積もりへ進めます。",
    messages: [
      { from: "creator", time: "6/7 10:20", text: "現在の容量と重い箇所が分かるスクリーンショットを共有できますか？" },
    ],
  },
  {
    id: 104,
    title: "Moonlit Harborポートレート撮影",
    creator: "Lumi Photo",
    service: "VRChat撮影依頼",
    status: "in_progress",
    requestedAt: "2026-06-04 20:20",
    desiredDue: "2026-06-12",
    plannedDue: "2026-06-11",
    amount: "¥4,000",
    thumbnail: vrchatImages.steamSocial,
    summary: "撮影日程は確定済み。クリエイターが撮影準備とワールド確認を進めています。",
    scope: ["ポートレート8枚", "ワールド選定", "軽い色補正", "SNS比率書き出し"],
    next: "撮影当日までに使用アバター、衣装、希望カットをチャットで補足できます。",
    messages: [
      { from: "you", time: "6/4 20:20", text: "プロフィール用の写真をお願いしたいです。" },
      { from: "creator", time: "6/5 08:12", text: "承諾しました。Moonlit Harborで撮る方向で準備します。" },
      { from: "you", time: "6/5 09:01", text: "衣装は白系で行きます。少し落ち着いた雰囲気が希望です。" },
    ],
  },
  {
    id: 105,
    title: "ポスター用レタッチ",
    creator: "Aoi Retouch",
    service: "レタッチ依頼",
    status: "review",
    requestedAt: "2026-06-02 18:05",
    desiredDue: "2026-06-10",
    plannedDue: "2026-06-09",
    amount: "¥8,000",
    thumbnail: vrchatImages.steamStudio,
    summary: "納品データが届いています。内容確認後、受け取り評価を行う必要があります。",
    scope: ["肌補正", "色味調整", "SNS比率2種", "ポスター用書き出し"],
    next: "納品物を確認して、問題なければ評価します。リテイクが必要なら制作中へ戻します。",
    deliveries: [{ name: "初回納品", files: "PNG 6枚 / ZIP 1件", note: "ポスター用とSNS用を書き出しました。", time: "6/9 17:30" }],
    messages: [
      { from: "you", time: "6/2 18:05", text: "イベントポスター用にレタッチをお願いします。" },
      { from: "creator", time: "6/9 17:30", text: "納品しました。色味とトリミング違いも同梱しています。" },
    ],
  },
  {
    id: 106,
    title: "衣装導入ミニ依頼",
    creator: "Nagi Closet",
    service: "衣装導入依頼",
    status: "creator_review",
    requestedAt: "2026-05-30 14:00",
    desiredDue: "2026-06-05",
    plannedDue: "2026-06-04",
    amount: "¥5,000",
    thumbnail: vrchatImages.steamAvatarB,
    summary: "こちらの受け取り評価は完了済み。制作者からの評価を待っています。",
    scope: ["衣装導入", "軽微な干渉修正", "Unitypackage確認"],
    next: "制作者からの評価を待っています。追加操作は不要です。",
    deliveries: [{ name: "最終納品", files: "Unitypackage / Readme", note: "衣装導入済みデータを共有済み。", time: "6/4 19:10" }],
    messages: [
      { from: "you", time: "6/4 20:00", text: "確認しました。評価も入れておきました。" },
    ],
  },
  {
    id: 107,
    title: "ワールド紹介PV編集",
    creator: "Frame Drift",
    service: "短尺PV編集依頼",
    status: "completed",
    requestedAt: "2026-05-20 11:25",
    desiredDue: "2026-05-31",
    plannedDue: "2026-05-31",
    amount: "¥22,000",
    thumbnail: vrchatImages.steamEventB,
    summary: "納品確認と相互評価まで完了した依頼です。過去の依頼実績として確認できます。",
    scope: ["30秒PV", "字幕入れ", "BGM尺調整", "BOOTH掲載用書き出し"],
    next: "完了済みです。必要があれば同じクリエイターの依頼受付ページから再依頼できます。",
    deliveries: [{ name: "最終納品", files: "MP4 2本 / サムネPNG", note: "BOOTH掲載用とSNS投稿用を納品済み。", time: "5/31 19:00" }],
    messages: [
      { from: "creator", time: "5/31 19:00", text: "最終版を納品しました。" },
      { from: "you", time: "5/31 20:15", text: "確認しました。ありがとうございました。" },
    ],
  },
  {
    id: 108,
    title: "Quest対応ワールド軽量化相談",
    creator: "Orbit Build",
    service: "ワールド制作相談",
    status: "draft",
    requestedAt: "下書き",
    desiredDue: "未設定",
    plannedDue: "未設定",
    amount: "未確定",
    thumbnail: vrchatImages.world,
    summary: "依頼内容を書きかけの下書きです。送信前に目的、現状の負荷、希望納期を整理します。",
    scope: ["現状ヒアリング", "軽量化相談", "Quest対応確認"],
    next: "依頼内容を完成させて送信します。まだクリエイターには届いていません。",
    messages: [],
  },
  {
    id: 109,
    title: "ライブ用ギミック導入",
    creator: "Mika Alterworks",
    service: "ギミック導入相談",
    status: "closed",
    requestedAt: "2026-05-18 10:10",
    desiredDue: "2026-05-25",
    plannedDue: "キャンセル済み",
    amount: "¥12,000",
    thumbnail: vrchatImages.neon,
    summary: "素材条件が合わず、正式依頼前にキャンセルした依頼です。",
    scope: ["ギミック導入相談", "素材条件確認", "キャンセル済み"],
    next: "クローズ済みです。必要なら新しい依頼として再送信します。",
    messages: [
      { from: "creator", time: "5/18 15:44", text: "今回の素材条件だと対応が難しそうです。" },
      { from: "you", time: "5/18 16:02", text: "了解です。今回はキャンセルでお願いします。" },
    ],
  },
];
const board = document.querySelector("#board");
const profileBoard = document.querySelector("#profileBoard");
const profilePostSearch = document.querySelector("#profilePostSearch");
const profilePostSortButtons = [...document.querySelectorAll("[data-profile-sort]")];
const profileArchiveTabs = [...document.querySelectorAll("[data-profile-archive-tab]")];
const profilePostEmpty = document.querySelector("#profilePostEmpty");
const feedView = document.querySelector("#feedView");
const eventCarouselTrack = document.querySelector("#eventCarouselTrack");
const eventCarouselDots = document.querySelector("#eventCarouselDots");
const eventPrev = document.querySelector("#eventPrev");
const eventNext = document.querySelector("#eventNext");
const openEventProposalButton = document.querySelector("#openEventProposalButton");
const profileView = document.querySelector("#profileView");
const requestView = document.querySelector("#requestView");
const notificationsView = document.querySelector("#notificationsView");
const requestManagerView = document.querySelector("#requestManagerView");
const requestManagerDetailView = document.querySelector("#requestManagerDetailView");
const myRequestsView = document.querySelector("#myRequestsView");
const myRequestDetailView = document.querySelector("#myRequestDetailView");
const settingsView = document.querySelector("#settingsView");
const serviceView = document.querySelector("#serviceView");
const adminView = document.querySelector("#adminView");
const backendSpecView = document.querySelector("#backendSpecView");
const subscriptionsView = document.querySelector("#subscriptionsView");
const eventDetailView = document.querySelector("#eventDetailView");
const eventsView = document.querySelector("#eventsView");
const circleView = document.querySelector("#circleView");
const missionView = document.querySelector("#missionView");
const searchInput = document.querySelector("#searchInput");
const searchShell = document.querySelector(".search-shell");
const eventBanner = document.querySelector(".event-banner");
const pageTitle = document.querySelector("#pageTitle");
const chips = [...document.querySelectorAll(".chip")];
const navPills = [...document.querySelectorAll(".nav-pill[data-view]")];
const savedSearchTabs = document.querySelector("#savedSearchTabs");
const addSavedSearchTabButton = document.querySelector("#addSavedSearchTab");
const savedSearchDialog = document.querySelector("#savedSearchDialog");
const savedSearchLabelInput = document.querySelector("#savedSearchLabelInput");
const savedSearchLabelError = document.querySelector("#savedSearchLabelError");
const savedSearchQueryInput = document.querySelector("#savedSearchQueryInput");
const savedSearchDelete = document.querySelector("#savedSearchDelete");
const savedSearchCancel = document.querySelector("#savedSearchCancel");
const savedSearchSave = document.querySelector("#savedSearchSave");
const savedSearchContextMenu = document.querySelector("#savedSearchContextMenu");
const savedSearchContextEdit = document.querySelector("#savedSearchContextEdit");
const savedSearchContextDelete = document.querySelector("#savedSearchContextDelete");
const emptyState = document.querySelector("#emptyState");
const shuffleButton = document.querySelector("#shuffleButton");
const createButton = document.querySelector("#createButton");
const createRequestButton = document.querySelector("#createRequestButton");
const floatingPostDock = document.querySelector("#floatingPostDock");
const floatingPostHint = document.querySelector("#floatingPostHint");
const floatingPostActions = document.querySelector("#floatingPostActions");
const floatingDraftsButton = document.querySelector("#floatingDraftsButton");
const floatingNewPostButton = document.querySelector("#floatingNewPostButton");
const floatingPost = document.querySelector("#floatingPost");
const composeDraftListDialog = document.querySelector("#composeDraftListDialog");
const composeDraftListTitle = document.querySelector("#composeDraftListTitle");
const composeDraftListBody = document.querySelector("#composeDraftListBody");
const composeDraftListClose = document.querySelector("#composeDraftListClose");
const dropHint = document.querySelector("#dropHint");
const themeToggle = document.querySelector("#themeToggle");
const likedPostsButton = document.querySelector("#likedPostsButton");
const bookmarkFoldersButton = document.querySelector("#bookmarkFoldersButton");
const circlePageButton = document.querySelector("#circlePageButton");
const eventPageButton = document.querySelector("#eventPageButton");
const missionButton = document.querySelector("#missionButton");
const missionCardButton = document.querySelector("#missionCardButton");
const requestManagerButton = document.querySelector("#requestManagerButton");
const myRequestsButton = document.querySelector("#myRequestsButton");
const requestManagerCreatePost = document.querySelector("#requestManagerCreatePost");
const notificationButton = document.querySelector("#notificationButton");
const notificationBadge = document.querySelector("#notificationBadge");
const mobileNotificationBadge = document.querySelector("#mobileNotificationBadge");
const avatarButton = document.querySelector("#avatarButton");
const accountMenu = document.querySelector("#accountMenu");
const accountSwitcherCurrent = document.querySelector("#accountSwitcherCurrent");
const accountSwitcherList = document.querySelector("#accountSwitcherList");
const accountAddButton = document.querySelector("#accountAddButton");
const accountMenuProfile = document.querySelector("#accountMenuProfile");
const accountMenuSubscriptions = document.querySelector("#accountMenuSubscriptions");
const accountMenuMyRequests = document.querySelector("#accountMenuMyRequests");
const accountMenuService = document.querySelector("#accountMenuService");
const accountMenuAdmin = document.querySelector("#accountMenuAdmin");
const accountMenuSpecs = document.querySelector("#accountMenuSpecs");
const accountMenuSettings = document.querySelector("#accountMenuSettings");
const accountMenuTheme = document.querySelector("#accountMenuTheme");
const accountMenuLogout = document.querySelector("#accountMenuLogout");
const backToFeed = document.querySelector("#backToFeed");
const backFromRequest = document.querySelector("#backFromRequest");
const backFromNotifications = document.querySelector("#backFromNotifications");
const backFromSettings = document.querySelector("#backFromSettings");
const backFromAdmin = document.querySelector("#backFromAdmin");
const backFromSpecs = document.querySelector("#backFromSpecs");
const backFromRequestManager = document.querySelector("#backFromRequestManager");
const backFromRequestDetail = document.querySelector("#backFromRequestDetail");
const backFromMyRequests = document.querySelector("#backFromMyRequests");
const backFromMyRequestDetail = document.querySelector("#backFromMyRequestDetail");
const backFromService = document.querySelector("#backFromService");
const backFromEventDetail = document.querySelector("#backFromEventDetail");
const backFromEvents = document.querySelector("#backFromEvents");
const backFromCircles = document.querySelector("#backFromCircles");
const backFromMission = document.querySelector("#backFromMission");
const backFromSubscriptions = document.querySelector("#backFromSubscriptions");
const subscriptionsCreatePlanButton = document.querySelector("#subscriptionsCreatePlanButton");
const subscriptionsJoinedList = document.querySelector("#subscriptionsJoinedList");
const subscriptionsSearchInput = document.querySelector("#subscriptionsSearchInput");
const subscriptionsPlanResults = document.querySelector("#subscriptionsPlanResults");
const subscriptionsCreatorPlans = document.querySelector("#subscriptionsCreatorPlans");
const profileBanner = document.querySelector("#profileBanner");
const profileAvatar = document.querySelector("#profileAvatar");
const profileName = document.querySelector("#profileName");
const profileLevelBadge = document.querySelector("#profileLevelBadge");
const profileRole = document.querySelector("#profileRole");
const profileBio = document.querySelector("#profileBio");
const profilePosts = document.querySelector("#profilePosts");
const profileRequest = document.querySelector("#profileRequest");
const profileRating = document.querySelector("#profileRating");
const profileFollow = document.querySelector("#profileFollow");
const profileEditButton = document.querySelector("#profileEditButton");
const profileNotifyButton = document.querySelector("#profileNotifyButton");
const profileMuteButton = document.querySelector("#profileMuteButton");
const profileBlockButton = document.querySelector("#profileBlockButton");
const profileRequestButton = document.querySelector("#profileRequestButton");
const profileFollowingButton = document.querySelector("#profileFollowingButton");
const profileShareButton = document.querySelector("#profileShareButton");
const trustSummaryText = document.querySelector("#trustSummaryText");
const trustStatus = document.querySelector("#trustStatus");
const trustMetrics = document.querySelector("#trustMetrics");
const trustScopeTags = document.querySelector("#trustScopeTags");
const trustStyleNote = document.querySelector("#trustStyleNote");
const trustFeaturedWorks = document.querySelector("#trustFeaturedWorks");
const trustTimelineLabel = document.querySelector("#trustTimelineLabel");
const profileReviews = document.querySelector("#profileReviews");
const savedPostsSection = document.querySelector("#savedPostsSection");
const savedPostsBoard = document.querySelector("#savedPostsBoard");
const bookmarkFoldersBoard = document.querySelector("#bookmarkFoldersBoard");
const requestPageImage = document.querySelector("#requestPageImage");
const requestPageCreator = document.querySelector("#requestPageCreator");
const requestPageTitle = document.querySelector("#requestPageTitle");
const requestPageDescription = document.querySelector("#requestPageDescription");
const requestPageTags = document.querySelector("#requestPageTags");
const requestRequestMeta = document.querySelector("#requestRequestMeta");
const requestServiceList = document.querySelector("#requestServiceList");
const requestSampleGallery = document.querySelector("#requestSampleGallery");
const requestPaymentTitle = document.querySelector("#requestPaymentTitle");
const requestPaymentNote = document.querySelector("#requestPaymentNote");
const requestPaymentButton = document.querySelector("#requestPaymentButton");
const requestAuthSignedIn = document.querySelector("#requestAuthSignedIn");
const requestAuthGuest = document.querySelector("#requestAuthGuest");
const requestAuthenticatedPanel = document.querySelector("#requestAuthenticatedPanel");
const requestGuestPanel = document.querySelector("#requestGuestPanel");
const requestGuestSignUp = document.querySelector("#requestGuestSignUp");
const requestGuestSignIn = document.querySelector("#requestGuestSignIn");
const requestPaymentMethod = document.querySelector("#requestPaymentMethod");
const requestAmountInput = document.querySelector("#requestAmountInput");
const requestAmountHelp = document.querySelector("#requestAmountHelp");
const requestAmountError = document.querySelector("#requestAmountError");
const requestChatPreference = document.querySelector("#requestChatPreference");
const requestDesiredDate = document.querySelector("#requestDesiredDate");
const requestBriefInput = document.querySelector("#requestBriefInput");
const requestReferenceInput = document.querySelector("#requestReferenceInput");
const requestAgreement = document.querySelector("#requestAgreement");
const requestConfirmButton = document.querySelector("#requestConfirmButton");
const requestCreatorProfileButton = document.querySelector("#requestCreatorProfileButton");
const requestPageReportButton = document.querySelector("#requestPageReportButton");
const requestMoreSection = document.querySelector("#requestMoreSection");
const requestMoreGrid = document.querySelector("#requestMoreGrid");
const notificationsList = document.querySelector("#notificationsList");
const markNotificationsRead = document.querySelector("#markNotificationsRead");
const deleteReadNotifications = document.querySelector("#deleteReadNotifications");
const notificationFilterTabs = document.querySelector(".notification-filter-tabs");
const adminQueueList = document.querySelector("#adminQueueList");
const adminEventCount = document.querySelector("#adminEventCount");
const adminReportCount = document.querySelector("#adminReportCount");
const adminEventReviewDialog = document.querySelector("#adminEventReviewDialog");
const adminEventReviewClose = document.querySelector("#adminEventReviewClose");
const adminEventReviewTitle = document.querySelector("#adminEventReviewTitle");
const adminEventReviewBody = document.querySelector("#adminEventReviewBody");
const adminEventApprove = document.querySelector("#adminEventApprove");
const adminEventReject = document.querySelector("#adminEventReject");
const backendSpecGrid = document.querySelector("#backendSpecGrid");
const onboardingDialog = document.querySelector("#onboardingDialog");
const onboardingStartButton = document.querySelector("#onboardingStartButton");
const onboardingServiceButton = document.querySelector("#onboardingServiceButton");
const settingsLanguage = document.querySelector("#settingsLanguage");
const settingsThemeMode = document.querySelector("#settingsThemeMode");
const settingsReducedMotion = document.querySelector("#settingsReducedMotion");
const settingsSaveStatus = document.querySelector("#settingsSaveStatus");
settingsSaveStatus?.remove();
const requestManagerList = document.querySelector("#requestManagerList");
const requestManagerEmpty = document.querySelector("#requestManagerEmpty");
const requestStateTabs = [...document.querySelectorAll(".request-state-tab")];
const pendingSortControls = document.querySelector("#pendingSortControls");
const pendingSortButtons = [...document.querySelectorAll(".pending-sort-button")];
const myRequestsList = document.querySelector("#myRequestsList");
const myRequestsEmpty = document.querySelector("#myRequestsEmpty");
const myRequestsTabsScroller = document.querySelector(".my-requests-tabs");
const myRequestsTabsTrack = document.querySelector(".my-requests-tabs-track");
const myRequestStateTabs = [...document.querySelectorAll("[data-my-request-state]")];
const myRequestDetailState = document.querySelector("#myRequestDetailState");
const myRequestDetailTurn = document.querySelector("#myRequestDetailTurn");
const myRequestDetailTitle = document.querySelector("#myRequestDetailTitle");
const myRequestDetailCreator = document.querySelector("#myRequestDetailCreator");
const myRequestDetailSummary = document.querySelector("#myRequestDetailSummary");
const myRequestDetailMeta = document.querySelector("#myRequestDetailMeta");
const myRequestProgressSteps = document.querySelector("#myRequestProgressSteps");
const myRequestNextBody = document.querySelector("#myRequestNextBody");
const myRequestNextActions = document.querySelector("#myRequestNextActions");
const myRequestBriefList = document.querySelector("#myRequestBriefList");
const myRequestDeliveryList = document.querySelector("#myRequestDeliveryList");
const myRequestChatTimeline = document.querySelector("#myRequestChatTimeline");
const myRequestChatStatus = document.querySelector("#myRequestChatStatus");
const myRequestChatForm = document.querySelector("#myRequestChatForm");
const myRequestChatInput = document.querySelector("#myRequestChatInput");
const myRequestReportButton = document.querySelector("#myRequestReportButton");
const requestDetailShell = document.querySelector(".request-detail-shell");
const requestDetailState = document.querySelector("#requestDetailState");
const requestDetailDeadline = document.querySelector("#requestDetailDeadline");
const requestDetailTitle = document.querySelector("#requestDetailTitle");
const requestDetailClient = document.querySelector("#requestDetailClient");
const requestDetailSummary = document.querySelector("#requestDetailSummary");
const requestDetailMeta = document.querySelector("#requestDetailMeta");
const requestProgressSteps = document.querySelector("#requestProgressSteps");
const requestDetailClientName = document.querySelector("#requestDetailClientName");
const requestDetailClientRating = document.querySelector("#requestDetailClientRating");
const requestDetailClientProfileButton = document.querySelector("#requestDetailClientProfileButton");
const requestReportButton = document.querySelector("#requestReportButton");
const requestDecisionActions = document.querySelector("#requestDecisionActions");
const requestDetailDecisionNote = document.querySelector("#requestDetailDecisionNote");
const requestDetailBrief = document.querySelector("#requestDetailBrief");
const requestDeliveryList = document.querySelector("#requestDeliveryList");
const requestChatTimeline = document.querySelector("#requestChatTimeline");
const requestChatPanel = document.querySelector(".request-chat-panel");
const requestChatStatus = document.querySelector(".request-chat-status");
const requestChatCompose = document.querySelector(".request-chat-compose");
const requestChatInput = document.querySelector("#requestChatInput");
const requestChatDropHint = document.querySelector("#requestChatDropHint");
const requestAttachButton = document.querySelector("#requestAttachButton");
const requestAttachInput = document.querySelector("#requestAttachInput");
const zipSafetyDialog = document.querySelector("#zipSafetyDialog");
const zipSafetyCheckbox = document.querySelector("#zipSafetyCheckbox");
const zipSafetyConfirm = document.querySelector("#zipSafetyConfirm");
const zipSafetyCancel = document.querySelector("#zipSafetyCancel");
const requestCheckoutDialog = document.querySelector("#requestCheckoutDialog");
const requestCheckoutSummary = document.querySelector("#requestCheckoutSummary");
const requestCheckoutAgreement = document.querySelector("#requestCheckoutAgreement");
const requestCheckoutCancel = document.querySelector("#requestCheckoutCancel");
const requestCheckoutSubmit = document.querySelector("#requestCheckoutSubmit");
const requestApprovalDialog = document.querySelector("#requestApprovalDialog");
const requestApprovalMessage = document.querySelector("#requestApprovalMessage");
const requestApprovalCancel = document.querySelector("#requestApprovalCancel");
const requestApprovalConfirm = document.querySelector("#requestApprovalConfirm");
const requestReviewDialog = document.querySelector("#requestReviewDialog");
const requestReviewEyebrow = document.querySelector("#requestReviewEyebrow");
const requestReviewTitle = document.querySelector("#requestReviewTitle");
const requestReviewLead = document.querySelector("#requestReviewLead");
const requestReviewImage = document.querySelector("#requestReviewImage");
const requestReviewItemTitle = document.querySelector("#requestReviewItemTitle");
const requestReviewTargetName = document.querySelector("#requestReviewTargetName");
const requestReviewTags = document.querySelector("#requestReviewTags");
const requestReviewComment = document.querySelector("#requestReviewComment");
const requestReviewCancel = document.querySelector("#requestReviewCancel");
const requestReviewSubmit = document.querySelector("#requestReviewSubmit");
const accountEmailButton = document.querySelector("#accountEmailButton");
const accountPasswordButton = document.querySelector("#accountPasswordButton");
const accountLogoutButton = document.querySelector("#accountLogoutButton");
const accountActionDialog = document.querySelector("#accountActionDialog");
const accountActionEyebrow = document.querySelector("#accountActionEyebrow");
const accountActionTitle = document.querySelector("#accountActionTitle");
const accountActionBody = document.querySelector("#accountActionBody");
const accountActionFields = document.querySelector("#accountActionFields");
const accountActionError = document.querySelector("#accountActionError");
const accountActionCancel = document.querySelector("#accountActionCancel");
const accountActionConfirm = document.querySelector("#accountActionConfirm");
const accountDeleteButton = document.querySelector("#accountDeleteButton");
const accountDeleteDialog = document.querySelector("#accountDeleteDialog");
const accountDeleteCancel = document.querySelector("#accountDeleteCancel");
const accountDeleteConfirm = document.querySelector("#accountDeleteConfirm");
const accountDeletePassword = document.querySelector("#accountDeletePassword");
const accountDeleteError = document.querySelector("#accountDeleteError");
const accountDeleteBlocker = document.querySelector("#accountDeleteBlocker");
const requestAcceptPopup = document.querySelector("#requestAcceptPopup");
const requestAcceptPopupTitle = document.querySelector("#requestAcceptPopup strong");
const requestAcceptPopupBody = document.querySelector("#requestAcceptPopup span:last-of-type");
const requestRejectDialog = document.querySelector("#requestRejectDialog");
const requestRejectMessage = document.querySelector("#requestRejectMessage");
const requestRejectCancel = document.querySelector("#requestRejectCancel");
const requestRejectConfirm = document.querySelector("#requestRejectConfirm");
const requestReportDialog = document.querySelector("#requestReportDialog");
const requestReportTarget = document.querySelector("#requestReportTarget");
const requestReportMessage = document.querySelector("#requestReportMessage");
const requestReportCancel = document.querySelector("#requestReportCancel");
const requestReportConfirm = document.querySelector("#requestReportConfirm");
const requestDeliveryDialog = document.querySelector("#requestDeliveryDialog");
const requestDeliveryName = document.querySelector("#requestDeliveryName");
const requestDeliveryFiles = document.querySelector("#requestDeliveryFiles");
const requestDeliveryMessage = document.querySelector("#requestDeliveryMessage");
const requestDeliveryCancel = document.querySelector("#requestDeliveryCancel");
const requestDeliverySubmit = document.querySelector("#requestDeliverySubmit");
const requestReportResultDialog = document.querySelector("#requestReportResultDialog");
const requestReportMute = document.querySelector("#requestReportMute");
const requestReportBlock = document.querySelector("#requestReportBlock");
const requestReportResultClose = document.querySelector("#requestReportResultClose");
const profileCopyToast = document.querySelector("#profileCopyToast");
const serviceMissionLink = document.querySelector("#serviceMissionLink");
const eventDetailHero = document.querySelector("#eventDetailHero");
const eventDetailTitle = document.querySelector("#eventDetailTitle");
const eventDetailLead = document.querySelector("#eventDetailLead");
const eventDetailBody = document.querySelector("#eventDetailBody");
const eventDetailDate = document.querySelector("#eventDetailDate");
const eventDetailStatus = document.querySelector("#eventDetailStatus");
const eventDetailOrganizer = document.querySelector("#eventDetailOrganizer");
const eventDetailHighlights = document.querySelector("#eventDetailHighlights");
const eventDetailStats = document.querySelector("#eventDetailStats");
const eventCircleRequirement = document.querySelector("#eventCircleRequirement");
const eventCircleRequirementBody = document.querySelector("#eventCircleRequirementBody");
const eventCircleRequirementButton = document.querySelector("#eventCircleRequirementButton");
const eventRelatedList = document.querySelector("#eventRelatedList");
const openEventProposalFromDetail = document.querySelector("#openEventProposalFromDetail");
const eventProposalFlow = document.querySelector("#eventProposalFlow");
const eventProposalList = document.querySelector("#eventProposalList");
const eventProposalDialog = document.querySelector("#eventProposalDialog");
const eventProposalForm = document.querySelector("#eventProposalForm");
const eventProposalTitleInput = document.querySelector("#eventProposalTitleInput");
const eventProposalImageInput = document.querySelector("#eventProposalImageInput");
const eventProposalImagePreview = document.querySelector("#eventProposalImagePreview");
const eventProposalImagePreviewImg = document.querySelector("#eventProposalImagePreviewImg");
const eventProposalTypeInput = document.querySelector("#eventProposalTypeInput");
const eventProposalTypeButton = document.querySelector("#eventProposalTypeButton");
const eventProposalTypeButtonText = document.querySelector("#eventProposalTypeButtonText");
const eventProposalTypeMenu = document.querySelector("#eventProposalTypeMenu");
const eventProposalOtherTypeField = document.querySelector("#eventProposalOtherTypeField");
const eventProposalOtherTypeInput = document.querySelector("#eventProposalOtherTypeInput");
const eventProposalOrganizerInput = document.querySelector("#eventProposalOrganizerInput");
const eventProposalContactInput = document.querySelector("#eventProposalContactInput");
const eventProposalSummaryInput = document.querySelector("#eventProposalSummaryInput");
const eventProposalSupportInput = document.querySelector("#eventProposalSupportInput");
const eventProposalCancel = document.querySelector("#eventProposalCancel");
const eventsCreateButton = document.querySelector("#eventsCreateButton");
const eventsSearchInput = document.querySelector("#eventsSearchInput");
const eventsQuickFilters = document.querySelector("#eventsQuickFilters");
const eventsGrid = document.querySelector("#eventsGrid");
const eventsEmpty = document.querySelector("#eventsEmpty");
const circleDetailPanel = document.querySelector("#circleDetailPanel");
const circleDetailCover = document.querySelector("#circleDetailCover");
const circleDetailName = document.querySelector("#circleDetailName");
const circleDetailDescription = document.querySelector("#circleDetailDescription");
const circleDetailMeta = document.querySelector("#circleDetailMeta");
const circleDetailTags = document.querySelector("#circleDetailTags");
const circleJoinButton = document.querySelector("#circleJoinButton");
const circleSupportButton = document.querySelector("#circleSupportButton");
const circlePostsBoard = document.querySelector("#circlePostsBoard");
const circlePostsNote = document.querySelector("#circlePostsNote");
const circleGrid = document.querySelector("#circleGrid");
const circleViewTabs = document.querySelector("#circleViewTabs");
const circleSearchInput = document.querySelector("#circleSearchInput");
const circleSearchShell = document.querySelector(".circle-search");
const circleFilterControls = document.querySelector("#circleFilterControls");
const circleFilterInputs = [...document.querySelectorAll("[data-circle-filter]")];
const circlePostsSection = document.querySelector(".circle-posts-section");
const circleListSection = document.querySelector(".circle-list-section");
const circleManagerSection = document.querySelector(".circle-manager-section");
const circleManagerList = document.querySelector("#circleManagerList");
const circleManagerSummary = document.querySelector("#circleManagerSummary");
const circleManagerMembers = document.querySelector("#circleManagerMembers");
const circleManagerRequests = document.querySelector("#circleManagerRequests");
const circleManagerRoles = document.querySelector("#circleManagerRoles");
const circleManagerInviteButton = document.querySelector("#circleManagerInviteButton");
const circleCreateTopButton = document.querySelector("#circleCreateTopButton");
const circleCreateManagerButton = document.querySelector("#circleCreateManagerButton");
const circleCreateDialog = document.querySelector("#circleCreateDialog");
const circleCreateForm = document.querySelector("#circleCreateForm");
const circleCreateNameInput = document.querySelector("#circleCreateNameInput");
const circleCreateDescriptionInput = document.querySelector("#circleCreateDescriptionInput");
const circleCreateVisibilityInput = document.querySelector("#circleCreateVisibilityInput");
const circleCreatePostAudienceInput = document.querySelector("#circleCreatePostAudienceInput");
const circleCreateSupportPayoutInput = document.querySelector("#circleCreateSupportPayoutInput");
const circleCreateTagsInput = document.querySelector("#circleCreateTagsInput");
const circleCreateCoverInput = document.querySelector("#circleCreateCoverInput");
const circleCreateNameError = document.querySelector("#circleCreateNameError");
const circleCreateTitle = document.querySelector("#circleCreateTitle");
const circleCreateLead = document.querySelector("#circleCreateLead");
const circleCreateCoverHelp = document.querySelector("#circleCreateCoverHelp");
const circlePromoteDialog = document.querySelector("#circlePromoteDialog");
const circlePromoteCopy = document.querySelector("#circlePromoteCopy");
const circlePromoteConfirm = document.querySelector("#circlePromoteConfirm");
const circleTransferDialog = document.querySelector("#circleTransferDialog");
const circleTransferCopy = document.querySelector("#circleTransferCopy");
const circleTransferCircleInput = document.querySelector("#circleTransferCircleInput");
const circleTransferMemberInput = document.querySelector("#circleTransferMemberInput");
const circleTransferCircleGhost = document.querySelector("#circleTransferCircleGhost");
const circleTransferMemberGhost = document.querySelector("#circleTransferMemberGhost");
const circleTransferConfirm = document.querySelector("#circleTransferConfirm");
const circleRejectDialog = document.querySelector("#circleRejectDialog");
const circleRejectCopy = document.querySelector("#circleRejectCopy");
const circleRejectCancel = document.querySelector("#circleRejectCancel");
const circleRejectConfirm = document.querySelector("#circleRejectConfirm");
const circleKickDialog = document.querySelector("#circleKickDialog");
const circleKickCopy = document.querySelector("#circleKickCopy");
const circleKickCancel = document.querySelector("#circleKickCancel");
const circleKickConfirm = document.querySelector("#circleKickConfirm");
const circleLeaveDialog = document.querySelector("#circleLeaveDialog");
const circleLeaveCopy = document.querySelector("#circleLeaveCopy");
const circleLeaveCancel = document.querySelector("#circleLeaveCancel");
const circleLeaveConfirm = document.querySelector("#circleLeaveConfirm");
const bookmarkFolderDialog = document.querySelector("#bookmarkFolderDialog");
const followingListDialog = document.querySelector("#followingListDialog");
const followingListBody = document.querySelector("#followingListBody");
const followingListCount = document.querySelector("#followingListCount");
const bookmarkFolderCreateDialog = document.querySelector("#bookmarkFolderCreateDialog");
const bookmarkFolderOptions = document.querySelector("#bookmarkFolderOptions");
const bookmarkFolderName = document.querySelector("#bookmarkFolderName");
const bookmarkFolderNameError = document.querySelector("#bookmarkFolderNameError");
const bookmarkFolderCancel = document.querySelector("#bookmarkFolderCancel");
const bookmarkFolderCreate = document.querySelector("#bookmarkFolderCreate");
const bookmarkFolderSave = document.querySelector("#bookmarkFolderSave");
const dialog = document.querySelector("#pinDialog");
const closeDialog = document.querySelector("#closeDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogCategory = document.querySelector("#dialogCategory");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogDescription = document.querySelector("#dialogDescription");
const dialogCreator = document.querySelector("#dialogCreator");
const dialogAvatar = document.querySelector("#dialogAvatar");
const dialogWorld = document.querySelector("#dialogWorld");
const dialogTags = document.querySelector("#dialogTags");
const dialogRequest = document.querySelector("#dialogRequest");
const dialogSave = document.querySelector("#dialogSave");
const dialogFollow = document.querySelector("#dialogFollow");
const dialogCopyLink = document.querySelector("#dialogCopyLink");
const dialogShareX = document.querySelector("#dialogShareX");
const dialogComments = document.querySelector("#dialogComments");
const dialogCommentsTitle = document.querySelector("#dialogCommentsTitle");
const dialogCommentsState = document.querySelector("#dialogCommentsState");
const dialogCommentsList = document.querySelector("#dialogCommentsList");
const dialogCommentForm = document.querySelector("#dialogCommentForm");
const dialogCommentInput = document.querySelector("#dialogCommentInput");
const dialogCommentSubmit = document.querySelector("#dialogCommentSubmit");
const trustInfoDialog = document.querySelector("#trustInfoDialog");
const closeTrustInfo = document.querySelector("#closeTrustInfo");
const composeDialog = document.querySelector("#composeDialog");
const composeForm = document.querySelector("#composeForm");
const closeCompose = document.querySelector("#closeCompose");
const composeCloseConfirmDialog = document.querySelector("#composeCloseConfirmDialog");
const composeCloseCancel = document.querySelector("#composeCloseCancel");
const composeCloseDiscard = document.querySelector("#composeCloseDiscard");
const composeCloseSave = document.querySelector("#composeCloseSave");
const composeImage = document.querySelector("#composeImage");
const composePreviewImage = document.querySelector("#composePreviewImage");
const removeComposeImage = document.querySelector("#removeComposeImage");
const composeImageControls = document.querySelector("#composeImageControls");
const prevComposeImage = document.querySelector("#prevComposeImage");
const nextComposeImage = document.querySelector("#nextComposeImage");
const composeImageCounter = document.querySelector("#composeImageCounter");
const composePreviewCard = document.querySelector("#composePreviewCard");
const composePostTitle = document.querySelector("#composePostTitle");
const composeCategory = document.querySelector("#composeCategory");
const composeVisibility = document.querySelector("#composeVisibility");
const composeCircleToggle = document.querySelector("#composeCircleToggle");
const composeR18Toggle = document.querySelector("#composeR18Toggle");
const composeGoreToggle = document.querySelector("#composeGoreToggle");
const composeRepliesToggle = document.querySelector("#composeRepliesToggle");
const composeCircleField = document.querySelector("#composeCircleField");
const composeCircle = document.querySelector("#composeCircle");
const composeAvatar = document.querySelector("#composeAvatar");
const composeWorld = document.querySelector("#composeWorld");
const composeTags = document.querySelector("#composeTags");
const composeDescription = document.querySelector("#composeDescription");
const composeNotice = document.querySelector("#composeNotice");
const composeSubmit = document.querySelector("#composeSubmit");
const saveDraftButton = document.querySelector("#saveDraftButton");
const requestComposeDialog = document.querySelector("#requestComposeDialog");
const requestComposeForm = document.querySelector("#requestComposeForm");
const closeRequestCompose = document.querySelector("#closeRequestCompose");
const requestComposeImage = document.querySelector("#requestComposeImage");
const requestComposePreviewImage = document.querySelector("#requestComposePreviewImage");
const requestComposePreviewCard = document.querySelector("#requestComposePreviewCard");
const requestComposePageTitle = document.querySelector("#requestComposePageTitle");
const requestComposePageDescription = document.querySelector("#requestComposePageDescription");
const requestComposePageMeta = document.querySelector("#requestComposePageMeta");
const requestPostTitle = document.querySelector("#requestPostTitle");
const requestPostCategory = document.querySelector("#requestPostCategory");
const requestPostVisibility = document.querySelector("#requestPostVisibility");
const requestPostPrice = document.querySelector("#requestPostPrice");
const requestPostDelivery = document.querySelector("#requestPostDelivery");
const requestPostAverageDeliveryHint = document.querySelector("#requestPostAverageDeliveryHint");
const requestPostCapacity = document.querySelector("#requestPostCapacity");
const requestPostRetake = document.querySelector("#requestPostRetake");
const requestPostChat = document.querySelector("#requestPostChat");
const requestPostAvatar = document.querySelector("#requestPostAvatar");
const requestPostWorld = document.querySelector("#requestPostWorld");
const requestPostTags = document.querySelector("#requestPostTags");
const requestPostDescription = document.querySelector("#requestPostDescription");
const requestPostRequirements = document.querySelector("#requestPostRequirements");
const requestComposeNotice = document.querySelector("#requestComposeNotice");
const requestComposeSubmit = document.querySelector("#requestComposeSubmit");
const saveRequestDraftButton = document.querySelector("#saveRequestDraftButton");
const requestTemplateButtons = [...document.querySelectorAll("[data-request-template]")];
const editProfileDialog = document.querySelector("#editProfileDialog");
const editProfileForm = document.querySelector("#editProfileForm");
const closeEditProfile = document.querySelector("#closeEditProfile");
const cancelEditProfile = document.querySelector("#cancelEditProfile");
const editBannerPreview = document.querySelector("#editBannerPreview");
const openBannerEditorButton = document.querySelector("#openBannerEditor");
const editAvatarPreview = document.querySelector("#editAvatarPreview");
const openAvatarEditorButton = document.querySelector("#openAvatarEditor");
const editAvatarInput = document.querySelector("#editAvatarInput");
const avatarEditorDialog = document.querySelector("#avatarEditorDialog");
const closeAvatarEditor = document.querySelector("#closeAvatarEditor");
const avatarChooseImage = document.querySelector("#avatarChooseImage");
const avatarEditorDone = document.querySelector("#avatarEditorDone");
const avatarCropPanel = document.querySelector("#avatarEditorPanel");
const avatarCropFrame = document.querySelector("#avatarEditorFrame");
const avatarCropImage = document.querySelector("#avatarEditorImage");
const avatarZoom = document.querySelector("#avatarEditorZoom");
const avatarOffsetX = document.querySelector("#avatarEditorOffsetX");
const avatarOffsetY = document.querySelector("#avatarEditorOffsetY");
const avatarEditorEyebrow = document.querySelector("#avatarEditorEyebrow") || document.querySelector(".avatar-editor-copy .eyebrow");
const editPreviewName = document.querySelector("#editPreviewName");
const editPreviewBio = document.querySelector("#editPreviewBio");
const avatarEditorTitle = document.querySelector("#avatarEditorTitle");
const editDisplayName = document.querySelector("#editDisplayName");
const editRole = document.querySelector("#editRole");
const editBio = document.querySelector("#editBio");
const editLink = document.querySelector("#editLink");
const editVisibility = document.querySelector("#editVisibility");
const editProfileNotice = document.querySelector("#editProfileNotice");
const editUserHandle = document.querySelector("#editUserHandle");
const editUserHandleError = document.querySelector("#editUserHandleError");
const editProfileSubmit = document.querySelector("#editProfileSubmit");
const circleCreateSubmit = document.querySelector("#circleCreateSubmit");
const profileSupportBadges = document.querySelector("#profileSupportBadges");
const profileSubscriptionSection = document.querySelector("#profileSubscriptionSection");
const profileSubscriptionEyebrow = document.querySelector("#profileSubscriptionEyebrow");
const profileSubscriptionLead = document.querySelector("#profileSubscriptionLead");
const profileSubscriptionPlans = document.querySelector("#profileSubscriptionPlans");
const profileSupportCards = document.querySelector("#profileSupportCards");
const subscriptionPlanManageButton = document.querySelector("#subscriptionPlanManageButton");
const subscriptionPlanDialog = document.querySelector("#subscriptionPlanDialog");
const subscriptionPlanForm = document.querySelector("#subscriptionPlanForm");
const subscriptionPlanTitle = document.querySelector("#subscriptionPlanTitle");
const subscriptionPlanLead = document.querySelector("#subscriptionPlanLead");
const subscriptionPlanName = document.querySelector("#subscriptionPlanName");
const subscriptionPlanPrice = document.querySelector("#subscriptionPlanPrice");
const subscriptionPlanSummary = document.querySelector("#subscriptionPlanSummary");
const subscriptionPlanImage = document.querySelector("#subscriptionPlanImage");
const subscriptionPlanImagePreview = document.querySelector("#subscriptionPlanImagePreview");
const subscriptionPlanImagePreviewImg = document.querySelector("#subscriptionPlanImagePreviewImg");
const subscriptionPlanPerks = document.querySelector("#subscriptionPlanPerks");
const subscriptionPlanSubmit = document.querySelector("#subscriptionPlanSubmit");
const subscriptionPlanDetailDialog = document.querySelector("#subscriptionPlanDetailDialog");
const subscriptionPlanDetailVisual = document.querySelector("#subscriptionPlanDetailVisual");
const subscriptionPlanDetailEyebrow = document.querySelector("#subscriptionPlanDetailEyebrow");
const subscriptionPlanDetailTitle = document.querySelector("#subscriptionPlanDetailTitle");
const subscriptionPlanDetailSummary = document.querySelector("#subscriptionPlanDetailSummary");
const subscriptionPlanDetailPrice = document.querySelector("#subscriptionPlanDetailPrice");
const subscriptionPlanDetailPerks = document.querySelector("#subscriptionPlanDetailPerks");
const subscriptionPlanDetailNote = document.querySelector("#subscriptionPlanDetailNote");
const subscriptionPlanDetailJoin = document.querySelector("#subscriptionPlanDetailJoin");
const subscriptionPlanDetailLeave = document.querySelector("#subscriptionPlanDetailLeave");

let activeCategory = "All";
let activeView = "discover";
let activeSavedSearchTabId = null;
let editingSavedSearchTabId = null;
let contextSavedSearchTabId = null;
let savedSearchHoldTimer = 0;
let savedSearchHoldTriggered = false;
let savedSearchHoldPointerId = null;
let savedSearchHoldStart = null;
let savedSearchHoldTargetId = null;
let savedPins = new Set([3, 7]);
let likedPins = new Set([1, 5, 12, 18]);
let followedCreators = new Set(["Lumi Photo"]);
let joinedCircleIds = new Set(["photo-walkers", "world-lab"]);
let activeCircleTab = "browse";
let activeCirclePageId = null;
let activeManagedCircleId = "photo-walkers";
let pendingCircleRoleAction = { action: "", circleId: "", memberId: "" };
let pendingCircleRejectRequest = { circleId: "", requestId: "" };
let pendingCircleKickMember = { circleId: "", memberId: "" };
let pendingCircleLeave = { circleId: "" };
let editingCircleId = "";
let editingSubscriptionPlanId = "";
let pendingSubscriptionPlanImage = "";
let pendingSubscriptionPlanDetail = { creator: "", planId: "" };
let notificationEnabledCreators = new Set(["Lumi Photo"]);
let mutedCreators = new Set();
let blockedCreators = new Set();
let currentPin = null;
let activeProfile = null;
let activeProfilePosts = [];
let profilePostSortMode = "recent";
let profilePostQuery = "";
let activeProfileArchiveTab = "posts";
let activeBookmarkFolderId = null;
let pendingBookmarkPinId = null;
let pendingBookmarkFolderSelectionId = "";
let notificationReturnHash = "";
let settingsReturnHash = "";
let requestManagerReturnHash = "";
let myRequestsReturnHash = "";
let serviceReturnHash = "";
let adminReturnHash = "";
let specsReturnHash = "";
let profileReturnHash = "";
let requestPageReturnHash = "";
let subscriptionsReturnHash = "";
let subscriptionsQuery = "";
let activeRequestManagerItemId = null;
let activeMyRequestItemId = null;
let missionReturnHash = "";
let eventDetailReturnHash = "";
let eventsReturnHash = "";
let activeRequestManagerState = "pending";
let activeMyRequestState = "todo";
let pendingRequestSort = "deadline";
let activeEventsFilter = "all";
let activeNotificationFilter = "all";
let activeAdminTab = "events";
let activeAdminEventId = null;
let pendingEventProposalImage = "";
let activeRequestReportContext = { mode: "manager", target: null };
let activeRequestReviewContext = { mode: "client", itemId: null };
let requestViewerAuthenticated = localStorage.getItem("vrc-sns-auth-state") !== "guest";
let currentLanguage = localStorage.getItem("vrc-sns-language") || "ja";
let settingsSaveTimer = 0;
let activeEventIndex = 0;
let eventAutoplayTimer = 0;
let eventDragState = null;
let eventVisualIndex = 0;
let eventLoopResetIndex = null;
let eventDragFrame = 0;
let ignoreEventSlideClick = false;
let eventCarouselLastInteractionAt = Date.now();
const eventAutoplayIdleDelay = 9000;
const eventCarouselMotion = {
  duration: 980,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
};
const demoAccountPassword = "password";
let approveHoldTimer = 0;
let approveHoldCompleted = false;
let approveHoldButton = null;
let floatingPostHoldTimer = 0;
let floatingPostHoldTriggered = false;
let accountDeleteHoldTimer = 0;
let accountDeleteHoldCompleted = false;
let acceptPopupTimer = 0;
let profileCopyToastTimer = 0;
let pendingZipAttachments = [];
let requestChatAttachments = new Map();
let lockedScrollY = 0;
let composeImages = [];
let composeImageIndex = 0;
let composePreviousVisibility = "Public";
let requestComposeImageData = "";
let bookmarkFolders = [
  { id: "folder-photo", name: "撮影参考", pinIds: [3, 12] },
  { id: "folder-avatar", name: "改変メモ", pinIds: [7] },
  { id: "folder-world", name: "World ideas", pinIds: [18] }
];
savedPins = new Set(bookmarkFolders.flatMap((folder) => folder.pinIds || []));
let profileArchivePinnedHeight = 0;
const composeDraftStorageKey = "vrc-sns-compose-draft";
const composeRepliesDefaultStorageKey = "vrc-sns-compose-replies-default";
const requestComposeDraftStorageKey = "vrc-sns-request-compose-draft";
const onboardingStorageKey = "vrc-sns-onboarding-seen";
const savedSearchTabsStorageKey = "vrc-sns-saved-search-tabs";
let savedSearchTabItems = loadSavedSearchTabItems();
const sheetCancelButtonIds = [
  "zipSafetyCancel",
  "requestCheckoutCancel",
  "requestApprovalCancel",
  "requestReviewCancel",
  "accountActionCancel",
  "accountDeleteCancel",
  "requestRejectCancel",
  "requestReportCancel",
  "requestDeliveryCancel",
  "bookmarkFolderCancel",
  "savedSearchCancel",
  "eventProposalCancel",
  "composeCloseCancel",
  "cancelEditProfile",
  "composeDraftListClose"
];
let myProfile = {
  displayName: "You",
  role: "VRChat creator",
  bio: "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。通常投稿の作成、プロフィール編集、過去投稿の見返しをここから行う想定です。",
  link: "https://vrchat.com/home/user/example",
  email: "you@example.com",
  visibility: "Public",
  avatar: "",
  banner: "",
  joinedAt: "2024-08-21",
  premiumSince: "2024-09-03",
  earlyPremiumSupporter: true,
};
let activeAccountId = "main";
let userAccounts = [
  {
    id: "main",
    handle: "@you",
    unread: 3,
    profile: { ...myProfile }
  },
  {
    id: "creator",
    handle: "@you_creator",
    unread: 1,
    profile: {
      displayName: "You Creator",
      role: "Avatar editor",
      bio: "アバター改変、衣装導入、撮影向けセットアップを中心に公開するクリエイターアカウント。",
      link: "https://x.com/YUMA0906",
      links: ["https://x.com/YUMA0906", "https://yuma0906.booth.pm/"],
      email: "creator@example.com",
      visibility: "Public",
      avatar: "",
      banner: vrchatImages.portrait,
      joinedAt: "2023-11-18",
      premiumSince: "2024-01-12",
      earlyPremiumSupporter: true,
    }
  },
  {
    id: "client",
    handle: "@you_request",
    unread: 0,
    profile: {
      displayName: "You Request",
      role: "VRChat client",
      bio: "依頼相談、保存、ブックマーク整理を中心に使う依頼者用アカウント。",
      link: "https://vrchat.com/home/user/example",
      links: ["https://vrchat.com/home/user/example"],
      email: "request@example.com",
      visibility: "Private",
      avatar: "",
      banner: vrchatImages.community,
      joinedAt: "2025-02-04",
      premiumSince: "",
      earlyPremiumSupporter: false,
    }
  }
];
const creatorProfileMeta = {
  "Mika Alterworks": { joinedAt: "2022-05-09", premiumSince: "2024-06-01", earlyPremiumSupporter: true },
  "Lumi Photo": { joinedAt: "2023-01-20", premiumSince: "2024-07-03", earlyPremiumSupporter: true },
  "Aoi Retouch": { joinedAt: "2023-09-14", premiumSince: "", earlyPremiumSupporter: false },
  "Frame Drift": { joinedAt: "2022-11-03", premiumSince: "2024-10-07", earlyPremiumSupporter: false },
  "Orbit Build": { joinedAt: "2021-12-26", premiumSince: "2024-06-12", earlyPremiumSupporter: true },
  "Rin Works": { joinedAt: "2024-02-16", premiumSince: "", earlyPremiumSupporter: false },
  "Yoru Snap": { joinedAt: "2025-01-28", premiumSince: "", earlyPremiumSupporter: false },
  "Nagi Closet": { joinedAt: "2024-05-05", premiumSince: "2025-01-09", earlyPremiumSupporter: false },
  "Veacon運営": { joinedAt: "2026-06-01", premiumSince: "2026-06-01", earlyPremiumSupporter: false }
};
const creatorSubscriptionPrograms = {
  "You": [
    { id: "you-free", name: "Free follow", price: 0, summary: "無料で更新通知と一部の限定投稿を受け取れる入口プラン", perks: ["無料限定投稿", "更新通知", "支援カード"], cardImage: vrchatImages.pressPlus },
    { id: "you-supporter", name: "Supporter", price: 700, summary: "限定投稿と支援カードの基本プラン", perks: ["限定投稿", "支援カード", "イベント先行案内"], cardImage: vrchatImages.steamSocial },
    { id: "you-backstage", name: "Backstage", price: 1500, summary: "制作ログやWIPも見られる上位プラン", perks: ["Supporterの全特典", "制作ログ", "WIP先行公開"], cardImage: vrchatImages.steamStudio }
  ],
  "Mika Alterworks": [
    { id: "mika-free", name: "Free note", price: 0, summary: "無料で告知と一部の制作メモを見られるお試しプラン", perks: ["無料限定投稿", "受付告知", "支援カード"], cardImage: vrchatImages.steamAvatarA },
    { id: "mika-supporter", name: "Atelier", price: 900, summary: "改変メモと限定進捗", perks: ["限定投稿", "改変メモ", "月1の進捗まとめ"], cardImage: vrchatImages.steamAvatarB },
    { id: "mika-vip", name: "Backstage", price: 1800, summary: "制作途中の比較画像やイベント先行案内", perks: ["Atelierの全特典", "WIP比較", "先行案内"], cardImage: vrchatImages.creators }
  ],
  "Lumi Photo": [
    { id: "lumi-photo-club", name: "Photo Club", price: 800, summary: "限定アルバムと撮影ルート共有", perks: ["限定投稿", "撮影ルート", "未公開カット"], cardImage: vrchatImages.steamSocial },
    { id: "lumi-location-note", name: "Location Notes", price: 1400, summary: "ロケハンメモ込みの上位プラン", perks: ["Photo Clubの全特典", "ロケハンメモ", "イベント先行募集"], cardImage: vrchatImages.steamWorldA }
  ],
  "Orbit Build": [
    { id: "orbit-devlog", name: "Devlog", price: 1000, summary: "ワールド制作の進捗共有", perks: ["限定投稿", "制作ログ", "最適化メモ"], cardImage: vrchatImages.steamWorldB }
  ]
};
let creatorSubscriptions = [
  { accountId: "main", creator: "Mika Alterworks", planId: "mika-supporter", startedAt: "2025-10-02", visibleOnProfile: true, earlySupporter: true },
  { accountId: "main", creator: "Lumi Photo", planId: "lumi-photo-club", startedAt: "2026-01-18", visibleOnProfile: true, earlySupporter: false },
  { accountId: "main", creator: "circle:photo-walkers", planId: "photo-walkers-supporter", startedAt: "2026-05-12", visibleOnProfile: true, earlySupporter: false },
  { accountId: "creator", creator: "Orbit Build", planId: "orbit-devlog", startedAt: "2026-02-14", visibleOnProfile: true, earlySupporter: false }
];
let pendingAvatarSource = "";
let pendingBannerSource = "";
let avatarDragState = null;
let avatarBaseSize = { width: 260, height: 260, frame: 260 };
let mediaEditMode = "avatar";

const requestTemplatePresets = {
  avatar: {
    title: "アバター改変依頼",
    category: "Avatar",
    price: "¥12,000〜",
    delivery: "10日以内",
    capacity: "受付 2 / 5",
    retake: "yes",
    chat: "enabled",
    tags: "#依頼受付 #avatar #booth",
    description: "衣装導入、表情調整、軽いギミック追加、撮影向けの見た目調整まで対応する依頼受付です。",
    requirements: "使用アセットの購入状況、アバター名、改変イメージ、希望納期、参考画像を依頼時に共有してください。"
  },
  photo: {
    title: "VRChat撮影依頼",
    category: "Photo",
    price: "¥4,000〜",
    delivery: "3日以内",
    capacity: "受付 3 / 6",
    retake: "yes",
    chat: "enabled",
    tags: "#依頼受付 #photo #world",
    description: "ワールド提案、ポーズ相談、SNS用トリミングまで含めた撮影依頼を受け付けます。",
    requirements: "希望ワールド、人数、使いたい用途、参考写真、納期を依頼時に共有してください。"
  },
  world: {
    title: "ワールド制作依頼",
    category: "World",
    price: "¥60,000〜",
    delivery: "30日以内",
    capacity: "受付 1 / 2",
    retake: "yes",
    chat: "limited",
    tags: "#依頼受付 #world #event",
    description: "撮影、展示、イベント用途の軽量ワールド制作を受け付けます。用途に応じて導線と最適化も調整します。",
    requirements: "用途、想定人数、必要な機能、納期、参考イメージ、既存アセットの有無を依頼時に共有してください。"
  }
};

const publicReviewsByCreator = {
  "Mika Alterworks": [
    { score: "good", author: "Haru Works", body: "説明が分かりやすく、改変の方向性も丁寧に擦り合わせてもらえました。", tags: ["連絡が丁寧", "また依頼したい"] },
    { score: "good", author: "Sora Closet", body: "BOOTH衣装の導入が早く、干渉も少なく仕上がって安心でした。", tags: ["仕上がりが良い", "納期が安心"] }
  ],
  "Lumi Photo": [
    { score: "good", author: "Moe", body: "ワールド提案からポーズまで全部スムーズで、プロフィール写真に使いやすかったです。", tags: ["要望が明確", "納期が安心"] }
  ],
  "You": [
    { score: "good", author: "Noa Frame", body: "やり取りがスムーズで、必要な情報もまとまっていて依頼しやすかったです。", tags: ["返信が早い", "素材共有が丁寧"] }
  ]
};

const eventCampaigns = {
  ja: [
    {
      badge: "Now live",
      date: "6/5 - 6/19",
      title: "リリース記念 手数料無料キャンペーン",
      image: vrchatImages.event,
      body: "イベント期間中に依頼承諾が完了した依頼は、成約時のプラットフォーム手数料を無料化。最初の実績づくりと受注フローのテストを後押しする想定です。",
      highlights: ["初回掲載向け", "手数料 0%", "限定 14日間"],
      stats: [
        { value: "0%", label: "掲載手数料" },
        { value: "14 days", label: "開催期間" },
        { value: "Open now", label: "受付状況" }
      ]
    },
    {
      badge: "Featured",
      date: "This week",
      title: "写真・改変クリエイター特集ウィーク",
      image: vrchatImages.portrait,
      body: "トップ表示と特集導線で、撮影・レタッチ・アバター改変の投稿を優先表示。公開プロフィールと依頼受付の両方を見てもらいやすくする想定です。",
      highlights: ["トップ特集", "写真 / 改変", "導線強化"],
      stats: [
        { value: "3 slots", label: "注目カテゴリ" },
        { value: "Top feed", label: "掲載面" },
        { value: "Boosted", label: "表示強化" }
      ]
    },
    {
      badge: "Avatar focus",
      date: "6/20 - 6/27",
      title: "アバター特集 セレスティア改変ピックアップ",
      image: vrchatImages.fashion,
      circleRequirement: "avatar-lab",
      body: "人気アバターや衣装改変、表情差分、ギミック紹介の投稿をまとめて見られる特集。アバター名や作風からクリエイターを探しやすくする想定です。",
      highlights: ["アバター特集", "改変作例", "BOOTH導線"],
      stats: [
        { value: "Avatar", label: "注目ジャンル" },
        { value: "7 days", label: "開催期間" },
        { value: "Featured", label: "掲載枠" }
      ]
    },
    {
      badge: "New release",
      date: "Release week",
      title: "新作発売記念 ルックブック投稿祭",
      image: vrchatImages.creators,
      body: "新作アバター、衣装、ワールド、ギミックの発売タイミングに合わせて、購入者の着用例や制作サンプルを集める発売記念イベントです。",
      highlights: ["発売記念", "新作紹介", "着用例"],
      stats: [
        { value: "New", label: "対象作品" },
        { value: "Lookbook", label: "投稿テーマ" },
        { value: "Creator led", label: "開催形式" }
      ]
    },
    {
      badge: "Coming up",
      date: "Next drop",
      title: "依頼レビュー公開アップデート予告",
      image: vrchatImages.neon,
      body: "完了実績の見え方をより強くするため、評価コメントの公開面を拡張予定。依頼前に安心材料を確認しやすいUXへつなげる計画です。",
      highlights: ["レビュー強化", "信用ページ更新", "近日反映"],
      stats: [
        { value: "Profiles", label: "反映先" },
        { value: "Reviews", label: "追加要素" },
        { value: "Soon", label: "公開予定" }
      ]
    }
  ],
  en: [
    {
      badge: "Now live",
      date: "Jun 5 - Jun 19",
      title: "Launch campaign with zero platform fees",
      image: vrchatImages.event,
      body: "Any request that reaches accepted status during the event period is treated as fee-free at deal completion, giving early creators a low-friction way to test the flow and collect first proof.",
      highlights: ["Early creators", "0% fee", "14-day campaign"],
      stats: [
        { value: "0%", label: "Platform fee" },
        { value: "14 days", label: "Campaign length" },
        { value: "Open now", label: "Status" }
      ]
    },
    {
      badge: "Featured",
      date: "This week",
      title: "Photo and avatar edit spotlight week",
      image: vrchatImages.portrait,
      body: "Top placement and curated discovery paths highlight photo, retouch, and avatar edit posts so public profiles and request pages get seen together more naturally.",
      highlights: ["Top placement", "Photo / edit", "Discovery boost"],
      stats: [
        { value: "3 lanes", label: "Focus areas" },
        { value: "Top feed", label: "Placement" },
        { value: "Boosted", label: "Visibility" }
      ]
    },
    {
      badge: "Avatar focus",
      date: "Jun 20 - Jun 27",
      title: "Avatar spotlight: Selestia edit picks",
      image: vrchatImages.fashion,
      circleRequirement: "avatar-lab",
      body: "A focused lane for popular avatars, outfit edits, expression variants, and gimmick showcases, making it easier to find creators by avatar name and style.",
      highlights: ["Avatar feature", "Edit samples", "BOOTH path"],
      stats: [
        { value: "Avatar", label: "Focus" },
        { value: "7 days", label: "Run time" },
        { value: "Featured", label: "Placement" }
      ]
    },
    {
      badge: "New release",
      date: "Release week",
      title: "New release lookbook event",
      image: vrchatImages.creators,
      body: "A launch-week event for new avatars, outfits, worlds, and gimmicks, collecting outfit examples, creator samples, and buyer posts around a fresh release.",
      highlights: ["Launch event", "New works", "Lookbook"],
      stats: [
        { value: "New", label: "Target" },
        { value: "Lookbook", label: "Theme" },
        { value: "Creator led", label: "Format" }
      ]
    },
    {
      badge: "Coming up",
      date: "Next drop",
      title: "Public review update preview",
      image: vrchatImages.neon,
      body: "A coming profile update expands how completed-request reviews appear, making it easier to judge trust before sending a commission request.",
      highlights: ["Review boost", "Trust profile", "Coming soon"],
      stats: [
        { value: "Profiles", label: "Surfaces" },
        { value: "Reviews", label: "New layer" },
        { value: "Soon", label: "Release" }
      ]
    }
  ],
  ko: [
    {
      badge: "Now live",
      date: "6/5 - 6/19",
      title: "출시 기념 수수료 무료 캠페인",
      image: vrchatImages.event,
      body: "이벤트 기간 중 의뢰 승낙이 완료된 건은 성사 시 플랫폼 수수료가 없는 상태로 처리됩니다. 첫 실적을 만들고 수주 흐름을 시험하기 좋은 시작점입니다.",
      highlights: ["초기 크리에이터", "수수료 0%", "14일 한정"],
      stats: [
        { value: "0%", label: "플랫폼 수수료" },
        { value: "14 days", label: "진행 기간" },
        { value: "Open now", label: "상태" }
      ]
    },
    {
      badge: "Featured",
      date: "This week",
      title: "사진·아바타 개변 크리에이터 특집 주간",
      image: vrchatImages.portrait,
      body: "상단 노출과 큐레이션 동선을 통해 사진, 보정, 아바타 개변 게시물을 더 잘 보이게 하여 프로필과 의뢰 페이지를 함께 확인하기 쉽게 합니다.",
      highlights: ["상단 특집", "사진 / 개변", "발견 강화"],
      stats: [
        { value: "3 lanes", label: "집중 카테고리" },
        { value: "Top feed", label: "노출 위치" },
        { value: "Boosted", label: "가시성" }
      ]
    },
    {
      badge: "Avatar focus",
      date: "6/20 - 6/27",
      title: "아바타 특집: Selestia 개변 픽업",
      image: vrchatImages.fashion,
      circleRequirement: "avatar-lab",
      body: "인기 아바타, 의상 개변, 표정 차분, 기믹 소개 게시물을 모아 아바타명과 스타일로 크리에이터를 찾기 쉽게 하는 특집입니다.",
      highlights: ["아바타 특집", "개변 예시", "BOOTH 동선"],
      stats: [
        { value: "Avatar", label: "주목 장르" },
        { value: "7 days", label: "진행 기간" },
        { value: "Featured", label: "노출 위치" }
      ]
    },
    {
      badge: "New release",
      date: "Release week",
      title: "신작 출시 기념 룩북 이벤트",
      image: vrchatImages.creators,
      body: "신작 아바타, 의상, 월드, 기믹 출시 타이밍에 맞춰 착용 예시와 제작 샘플, 구매자 게시물을 모으는 출시 기념 이벤트입니다.",
      highlights: ["출시 기념", "신작 소개", "착용 예시"],
      stats: [
        { value: "New", label: "대상 작품" },
        { value: "Lookbook", label: "게시 테마" },
        { value: "Creator led", label: "진행 방식" }
      ]
    },
    {
      badge: "Coming up",
      date: "Next drop",
      title: "공개 리뷰 업데이트 예고",
      image: vrchatImages.neon,
      body: "완료 실적이 더 잘 보이도록 평가 댓글 공개 영역을 확장할 예정입니다. 의뢰 전 신뢰 판단이 쉬워지는 방향의 업데이트입니다.",
      highlights: ["리뷰 강화", "신뢰 프로필", "곧 반영"],
      stats: [
        { value: "Profiles", label: "반영 영역" },
        { value: "Reviews", label: "추가 요소" },
        { value: "Soon", label: "공개 예정" }
      ]
    }
  ]
};

const EVENT_AUTO_FEATURE_THRESHOLD = 100;

let communityEventProposals = [
  {
    id: 1,
    title: {
      ja: "夏のフォトリレー特集",
      en: "Summer photo relay spotlight",
      ko: "여름 포토 릴레이 특집"
    },
    type: "showcase",
    organizer: "Lumi Photo",
    window: {
      ja: "7月前半 / 7日間",
      en: "Early July / 7 days",
      ko: "7월 초 / 7일"
    },
    summary: {
      ja: "写真投稿を集中的に集めて、ワールド撮影やポートレート作品を特集導線で見せたい申請。",
      en: "An application to gather photo posts and surface world photography and portrait work through a featured lane.",
      ko: "사진 게시물을 모아 월드 촬영과 포트레이트 작업을 특집 동선으로 보여주려는 신청입니다."
    },
    status: "approved",
    participants: 168,
    image: vrchatImages.community,
    circleRequirement: "photo-walkers",
    submittedAt: "2026-06-02",
    mailTo: "events@vrc-sns.mock"
  },
  {
    id: 2,
    title: {
      ja: "ワールド制作ミニジャム",
      en: "Mini world-building jam",
      ko: "월드 제작 미니 잼"
    },
    type: "workshop",
    organizer: "Orbit Build",
    window: {
      ja: "承認後に主催者が設定",
      en: "Set by organizer after approval",
      ko: "승인 후 주최자가 설정"
    },
    summary: {
      ja: "小規模の共同制作イベントとして、制作ログ投稿と途中経過の共有を集めたい申請。",
      en: "A small collaboration event application focused on work logs and progress-sharing posts from creators.",
      ko: "작업 로그와 중간 진행 공유 게시물을 모으는 소규모 공동 제작 이벤트 신청입니다."
    },
    status: "pending",
    participants: 46,
    image: vrchatImages.world,
    submittedAt: "2026-06-04",
    mailTo: "events@vrc-sns.mock"
  },
  {
    id: 3,
    title: {
      ja: "改変ビフォーアフター週間",
      en: "Avatar before-and-after week",
      ko: "개변 전후 주간"
    },
    type: "support",
    organizer: "Mika Alterworks",
    window: {
      ja: "8月上旬 / 10日間",
      en: "Early August / 10 days",
      ko: "8월 초 / 10일"
    },
    summary: {
      ja: "依頼前に比較しやすい実績投稿を増やすため、改変前後の作品を集めるキャンペーン申請。",
      en: "A campaign application focused on before-and-after posts so clients can compare work quality before requesting.",
      ko: "의뢰 전에 결과물을 비교하기 쉽도록 개변 전후 게시물을 모으는 캠페인 신청입니다."
    },
    status: "scheduled",
    participants: 214,
    image: vrchatImages.portrait,
    submittedAt: "2026-05-28",
    mailTo: "events@vrc-sns.mock"
  }
];

const translations = {
  ja: {
    searchPlaceholder: "作品、アバター、依頼を探す",
    myPage: "マイページ",
    appSettings: "アプリ設定",
    logout: "ログアウト",
    mission: "Our Mission",
    toggleTheme: "ライト / ダーク切替",
    likedPostsShortcut: "いいねした投稿",
    bookmarkFoldersShortcut: "ブックマークフォルダ",
    requestManager: "依頼管理",
    events: "イベント",
    notifications: "通知",
    unreadNotifications: "未読通知",
    postUrlCopy: "投稿URLをコピー",
    eventProposalTrigger: "イベント開催を申請",
    circles: "サークル",
    circlesLead: "同好会や制作チームのような小さなサークル。参加者限定投稿や、イベント参加条件として使える想定です。",
    circlePostsTitle: "サークル限定投稿",
    circlePostsNote: "参加中のサークルでは、メンバーだけが見られる投稿が表示されます。",
    circleListTitle: "サークル一覧",
    circleBrowseTab: "サークル一覧",
    circlePostsTab: "限定投稿",
    circleSearchPlaceholder: "サークル名、主催者、#タグで検索",
    circleFilterLabel: "表示",
    circleFilterJoined: "参加中",
    circleFilterApproval: "承認制",
    circleFilterOpen: "自由参加OK",
    circleEmptyTitle: "サークルが見つかりませんでした",
    circleEmptyBody: "検索語句を変えてもう一度探してみてください。",
    eventProposalSectionTitle: "ユーザー発案イベントの開催許可を申請する",
    eventProposalSectionLead: "申請が承認されるとイベント開催許可が付与され、主催者が好きなタイミングと期間で告知・投稿できる想定です。",
    eventProposalStatusTitle: "イベント申請の審査状況",
    eventProposalDialogTitle: "イベント開催を申請",
    eventProposalDialogLead: "運営による承認後、主催者が好きなタイミング・期間でイベント告知や投稿を行える想定です。",
    eventProposalSubmit: "申請を送信",
    eventProposalSuccess: "運営へイベント申請を送信しました",
    eventOrganizer: "主催者",
    officialOrganizer: "Veacon運営",
    eventTimingNegotiable: "承認後に主催者が設定",
    eventsLead: "開催中のイベントを探したり、ユーザー発案イベントの開催許可を運営へ申請できます。",
    eventsSearchPlaceholder: "イベント名、主催者、#タグで検索",
    eventsEmptyTitle: "イベントが見つかりませんでした",
    eventsEmptyBody: "検索語句やフィルタを変えてもう一度探してみてください。",
    heroTitle: "作品を見つける、繋がる、依頼する。",
    portfolioDesc: "改変・撮影・レタッチ・動画・ワールド制作を投稿",
    commissionDesc: "投稿やプロフィールから依頼受付へ接続",
    communityDesc: "閲覧・検索・プロフィール確認はログイン不要で快適に",
    explore: "おすすめ",
    followingFeed: "フォロー中",
    requests: "依頼受付中",
    shuffle: "シャッフル",
    request: "Request",
    post: "Post",
    addTab: "タブ追加",
    editTab: "タブを編集",
    updateTab: "更新",
    deleteTab: "削除",
    edit: "編集",
    savedTabDialogTitle: "保存タブを追加",
    savedTabEditTitle: "保存タブを編集",
    savedTabDialogLead: "ホームに表示する名前と、内部で使う検索文言をそれぞれ設定できます。",
    savedTabEditLead: "表示名や検索文言を更新したり、このタブ自体を削除できます。",
    savedTabLabel: "タブのタイトル",
    savedTabQuery: "検索文言",
    savedTabHint: "AND / OR を使って検索条件を保存できます。",
    savedTabLabelPlaceholder: "例: Booth衣装 / お気に入り改変",
    savedTabQueryPlaceholder: "例: booth AND #衣装 OR Selestia",
    savedTabEmpty: "検索語句を入力してください",
    savedTabLabelEmpty: "タブのタイトルを入力してください",
    savedTabAdded: "タブを追加しました",
    savedTabExists: "同じタブを開きました",
    savedTabUpdated: "タブを更新しました",
    savedTabDeleted: "タブを削除しました",
    noResultsTitle: "見つかりませんでした",
    noResultsBody: "検索語句やカテゴリを変えてもう一度探してみてください。",
    back: "Back",
    markAllRead: "すべて既読",
    deleteReadNotifications: "既読を削除",
    settingsLead: "通知、表示、言語、プライバシー、アカウントの基本設定をまとめて管理します。",
    autoSavedToast: "設定を自動保存しました",
    settingsNotificationsTitle: "通知設定",
    requestNotifications: "依頼通知",
    requestNotificationsHelp: "新規依頼、承諾、納品、評価待ちを通知",
    chatNotifications: "チャット通知",
    chatNotificationsHelp: "依頼チャットの返信や添付を通知",
    workReactions: "作品リアクション",
    workReactionsHelp: "いいね、保存、フォローを通知",
    settingsDisplayTitle: "表示と言語",
    language: "言語",
    theme: "表示テーマ",
    systemTheme: "端末設定に合わせる",
    light: "ライト",
    dark: "ダーク",
    reducedMotion: "省モーション",
    reducedMotionHelp: "画面遷移やポップアップの動きを控えめにします",
    highContrast: "高コントラスト",
    highContrastHelp: "文字とボタンの視認性を優先します",
    settingsPrivacyTitle: "プライバシー",
    profileVisibility: "プロフィール公開範囲",
    externalLinkWarning: "外部リンク警告",
    externalLinkWarningHelp: "VRChat / BOOTH / X 以外のリンクを開く前に確認",
    onlineStatus: "オンライン状態を表示",
    onlineStatusHelp: "依頼チャットで対応可能かを表示",
    settingsContentTitle: "コンテンツ表示",
    showR18Content: "R18コンテンツを表示",
    showR18ContentHelp: "年齢制限のある投稿や依頼を表示対象に含めます",
    showGoreContent: "グロコンテンツを表示",
    showGoreContentHelp: "流血、損傷表現など強い表現の投稿を表示対象に含めます",
    sensitiveReveal: "センシティブ投稿の初期表示",
    sensitiveBlur: "ぼかして「見る」ボタンを表示",
    sensitiveVisible: "最初から表示",
    muteBlockManage: "ミュート・ブロック管理",
    stripePlanned: "Stripe 連携予定",
    stripeConnect: "Stripe連携",
    unset: "未設定",
    account: "アカウント",
    changeEmail: "メールアドレス変更",
    changePassword: "パスワード変更",
    deleteAccount: "アカウント削除",
    accountActionCancel: "キャンセル",
    accountActionDone: "完了",
    accountLogoutConfirm: "ログアウト",
    accountEmailTitle: "メールアドレスを変更",
    accountEmailBody: "新しいメールアドレスを入力して確認します。実装時は認証メールを送る想定です。",
    accountEmailField: "新しいメールアドレス",
    accountPasswordTitle: "パスワードを変更",
    accountPasswordBody: "現在のパスワードと新しいパスワードを入力して変更します。デモでは見た目だけの確認です。",
    accountPasswordCurrent: "現在のパスワード",
    accountPasswordNew: "新しいパスワード",
    accountPasswordConfirm: "新しいパスワードを再入力",
    accountPasswordMismatch: "新しいパスワードが一致していません",
    accountLogoutTitle: "ログアウトしますか？",
    accountLogoutBody: "ログアウトすると、依頼送信やプロフィール編集には再ログインが必要になります。",
    accountUpdatedToast: "アカウント設定を更新しました",
    commissionPosts: "Commission posts",
    requestPublishingTitle: "依頼受付",
    requestPublishingLead: "価格、納期、受付枠、サンプル画像つきの依頼受付ページを作成して、プロフィールや投稿から依頼導線へつなげます。",
    publishRequestPage: "依頼受付ページを公開",
    publishRequestPageHelp: "価格、納期、受付枠、サンプル画像つきの依頼受付投稿を作成できます。",
    createRequestPost: "依頼受付を作成",
    requestManagerTitle: "依頼管理",
    requestManagerLead: "受けた依頼をステータスごとに確認します。",
    pendingSort: "未承諾の並び替え",
    sortDeadline: "締切順",
    sortBudget: "金額順",
    emptyRequestsTitle: "該当する依頼はありません",
    emptyRequestsBody: "このステータスに入っている依頼はまだありません。",
    pending: "未承諾",
    accepted: "承諾済",
    inProgress: "進行中",
    awaitingReview: "評価待ち",
    awaitingYourReview: "レビュー返し",
    completed: "完了",
    pendingDescription: "依頼内容を確認中。まだ受けるかどうかを確定していない状態です。",
    acceptedDescription: "依頼を受諾済み。これから作業を開始する予定が確定している状態です。",
    inProgressDescription: "作業開始の連絡まで完了済み。現在進行形で対応している依頼です。",
    awaitingReviewDescription: "納品は完了済み。クライアントからの確認や評価を待っている状態です。",
    awaitingYourReviewDescription: "相手からの評価は到着済み。こちらから相手を評価するターンの依頼です。",
    completedDescription: "お互いの評価や確認まで完了し、依頼が正式にクローズした状態です。",
    deadlineSuffix: "締切",
    myTurn: "自分のターン",
    clientTurn: "相手のターン",
    firstReply: "初回返信待ち",
    waitingReply: "返信待ち",
    needsReply: "要返信",
    report: "通報",
    clientProfile: "依頼者情報",
    viewProfile: "プロフィールを見る",
    requestBrief: "依頼内容",
    chat: "チャット",
    messagePlaceholder: "メッセージを入力",
    attach: "添付",
    send: "送信",
    approveAndChat: "承認してチャットへ",
    chooseRejectReason: "拒否理由を選ぶ",
    markDelivered: "納品完了にする",
    waitReceive: "受け取り確認・評価",
    backToRetake: "リテイク対応へ戻す",
    reviewClient: "相手を評価する",
    openChat: "チャットを開く",
    viewLog: "詳細ログを見る",
    saved: "Saved",
    save: "Save",
    follow: "Follow",
    following: "Following",
    normalPost: "通常投稿",
    requestOpen: "依頼受付中",
    requestCtaBody: "このクリエイターの依頼受付ページへ進みます。",
    profileUrlCopy: "プロフィールURLをコピー",
    copied: "コピー済み",
    copySuccess: "リンクをコピーしました",
    copyFailed: "コピーできませんでした",
    languageChanged: "言語を変更しました",
    loginToast: "ログアウトしました",
    now: "いま",
    attached: "添付済み",
    rating: "評価",
    posts: "投稿",
    completedMetric: "完了実績",
    repeat: "リピート",
    saves: "保存",
    trustLevel: "Trusted level",
    trustScore: "Trust score",
    topLiked: "Top liked",
    profileArchive: "過去の投稿",
    profilePostSearch: "この人の投稿を検索",
    sortRecent: "投稿順",
    sortLikes: "いいね順",
    profilePostEmptyTitle: "該当する投稿はありません",
    profilePostEmptyBody: "検索語句を変えてもう一度探してみてください。",
  },
  en: {
    searchPlaceholder: "Search works, avatars, requests",
    myPage: "My page",
    appSettings: "App settings",
    logout: "Log out",
    mission: "Our Mission",
    toggleTheme: "Toggle light / dark",
    likedPostsShortcut: "Liked posts",
    bookmarkFoldersShortcut: "Bookmark folders",
    requestManager: "Request manager",
    events: "Events",
    notifications: "Notifications",
    unreadNotifications: "Unread notifications",
    postUrlCopy: "Copy post URL",
    eventProposalTrigger: "Apply to host event",
    circles: "Circles",
    circlesLead: "Small groups like clubs or teams. They can host member-only posts and act as event participation requirements.",
    circlePostsTitle: "Circle-only posts",
    circlePostsNote: "Joined circles can show posts only members are allowed to see.",
    circleListTitle: "Circle list",
    circleBrowseTab: "Circle list",
    circlePostsTab: "Member posts",
    circleSearchPlaceholder: "Search circles, organizers, or #tags",
    circleFilterLabel: "Show",
    circleFilterJoined: "Joined",
    circleFilterApproval: "Approval required",
    circleFilterOpen: "Open join",
    circleEmptyTitle: "No circles found",
    circleEmptyBody: "Try another keyword.",
    eventProposalSectionTitle: "Apply for community event hosting permission",
    eventProposalSectionLead: "Once approved, the organizer receives event hosting permission and can choose the timing, duration, announcements, and posts.",
    eventProposalStatusTitle: "Application review status",
    eventProposalDialogTitle: "Apply to host event",
    eventProposalDialogLead: "After operations approval, the organizer can run event announcements and posts at their preferred timing and duration.",
    eventProposalSubmit: "Send application",
    eventProposalSuccess: "Your event application was sent to operations",
    eventOrganizer: "Organizer",
    officialOrganizer: "Veacon Ops",
    eventTimingNegotiable: "Set by organizer after approval",
    eventsLead: "Search active events or apply for permission to host a community-led event.",
    eventsSearchPlaceholder: "Search by event, organizer, or #tag",
    eventsEmptyTitle: "No events found",
    eventsEmptyBody: "Try another keyword or filter.",
    heroTitle: "Discover works, connect, and commission.",
    portfolioDesc: "Post avatar edits, photos, retouching, video, and worlds",
    commissionDesc: "Connect from posts and profiles to commission pages",
    communityDesc: "Browse, search, and view profiles comfortably without login",
    explore: "Explore",
    followingFeed: "Following",
    requests: "Open requests",
    shuffle: "Shuffle",
    request: "Request",
    post: "Post",
    addTab: "Add tab",
    editTab: "Edit tab",
    updateTab: "Update",
    deleteTab: "Delete",
    edit: "Edit",
    savedTabDialogTitle: "Add a saved tab",
    savedTabEditTitle: "Edit saved tab",
    savedTabDialogLead: "Set the title shown on the home screen and the internal search query separately.",
    savedTabEditLead: "Update the visible title or search query, or remove this tab completely.",
    savedTabLabel: "Tab title",
    savedTabQuery: "Search query",
    savedTabHint: "You can save searches with AND / OR conditions.",
    savedTabLabelPlaceholder: "Example: BOOTH outfits / Favorite edits",
    savedTabQueryPlaceholder: "Example: booth AND #outfit OR Selestia",
    savedTabEmpty: "Enter a search phrase first",
    savedTabLabelEmpty: "Enter a tab title first",
    savedTabAdded: "Tab added",
    savedTabExists: "Opened the existing tab",
    savedTabUpdated: "Tab updated",
    savedTabDeleted: "Tab deleted",
    noResultsTitle: "No results found",
    noResultsBody: "Try another keyword or category.",
    back: "Back",
    markAllRead: "Mark all read",
    deleteReadNotifications: "Delete read",
    settingsLead: "Manage notifications, display, language, privacy, and account basics.",
    autoSavedToast: "Settings auto-saved",
    settingsNotificationsTitle: "Notifications",
    requestNotifications: "Request notifications",
    requestNotificationsHelp: "Notify new requests, approvals, deliveries, and review waits",
    chatNotifications: "Chat notifications",
    chatNotificationsHelp: "Notify request chat replies and attachments",
    workReactions: "Work reactions",
    workReactionsHelp: "Notify likes, saves, and follows",
    settingsDisplayTitle: "Display and language",
    language: "Language",
    theme: "Theme",
    systemTheme: "Use device setting",
    light: "Light",
    dark: "Dark",
    reducedMotion: "Reduced motion",
    reducedMotionHelp: "Make transitions and popups calmer",
    highContrast: "High contrast",
    highContrastHelp: "Prioritize readable text and buttons",
    settingsPrivacyTitle: "Privacy",
    profileVisibility: "Profile visibility",
    externalLinkWarning: "External link warning",
    externalLinkWarningHelp: "Confirm before opening links other than VRChat / BOOTH / X",
    onlineStatus: "Show online status",
    onlineStatusHelp: "Show availability in request chat",
    settingsContentTitle: "Content display",
    showR18Content: "Show R18 content",
    showR18ContentHelp: "Include age-restricted posts and requests in discovery",
    showGoreContent: "Show gore content",
    showGoreContentHelp: "Include posts with blood, injury, or intense visual expression",
    sensitiveReveal: "Initial sensitive post display",
    sensitiveBlur: "Blur with a View button",
    sensitiveVisible: "Show immediately",
    muteBlockManage: "Manage mute / block",
    stripePlanned: "Stripe integration planned",
    stripeConnect: "Stripe connection",
    unset: "Not set",
    account: "Account",
    changeEmail: "Change email",
    changePassword: "Change password",
    deleteAccount: "Delete account",
    accountActionCancel: "Cancel",
    accountActionDone: "Done",
    accountLogoutConfirm: "Log out",
    accountEmailTitle: "Change email",
    accountEmailBody: "Enter a new email address. In the real app, this would send a verification email.",
    accountEmailField: "New email address",
    accountPasswordTitle: "Change password",
    accountPasswordBody: "Enter your current password and a new password. This mock only shows the flow.",
    accountPasswordCurrent: "Current password",
    accountPasswordNew: "New password",
    accountPasswordConfirm: "Confirm new password",
    accountPasswordMismatch: "New passwords do not match",
    accountLogoutTitle: "Log out?",
    accountLogoutBody: "After logging out, requests and profile editing will require signing in again.",
    accountUpdatedToast: "Account settings updated",
    commissionPosts: "Commission posts",
    requestPublishingTitle: "Commission posts",
    requestPublishingLead: "Create commission pages with price, delivery, slots, and sample thumbnails, then connect profiles and posts to requests.",
    publishRequestPage: "Publish commission page",
    publishRequestPageHelp: "Create a commission post with price, delivery, slots, and sample images.",
    createRequestPost: "Create commission",
    requestManagerTitle: "Request manager",
    requestManagerLead: "Check received requests by status.",
    pendingSort: "Sort pending requests",
    sortDeadline: "Deadline",
    sortBudget: "Budget",
    emptyRequestsTitle: "No requests here",
    emptyRequestsBody: "There are no requests in this status yet.",
    pending: "Pending",
    accepted: "Accepted",
    inProgress: "In progress",
    awaitingReview: "Awaiting review",
    awaitingYourReview: "Review back",
    completed: "Completed",
    pendingDescription: "Reviewing the brief. You have not decided whether to accept it yet.",
    acceptedDescription: "Request accepted. Work is scheduled to start.",
    inProgressDescription: "Start notice has been sent. This request is actively in progress.",
    awaitingReviewDescription: "Delivery is complete. Waiting for client confirmation and review.",
    awaitingYourReviewDescription: "The client review arrived. It is your turn to review the client.",
    completedDescription: "Both reviews and confirmations are complete. The request is closed.",
    deadlineSuffix: "due",
    myTurn: "Your turn",
    clientTurn: "Client turn",
    firstReply: "First reply needed",
    waitingReply: "Waiting reply",
    needsReply: "Needs reply",
    report: "Report",
    clientProfile: "Client profile",
    viewProfile: "View profile",
    requestBrief: "Request brief",
    chat: "Chat",
    messagePlaceholder: "Write a message",
    attach: "Attach",
    send: "Send",
    approveAndChat: "Approve and chat",
    chooseRejectReason: "Choose reject reason",
    markDelivered: "Mark delivered",
    waitReceive: "Confirm and review",
    backToRetake: "Return to retake",
    reviewClient: "Review client",
    openChat: "Open chat",
    viewLog: "View log",
    saved: "Saved",
    save: "Save",
    follow: "Follow",
    following: "Following",
    normalPost: "Normal post",
    requestOpen: "Accepting requests",
    requestCtaBody: "Open this creator's commission page.",
    profileUrlCopy: "Copy profile URL",
    copied: "Copied",
    copySuccess: "Link copied",
    copyFailed: "Could not copy",
    languageChanged: "Language changed",
    loginToast: "Logged out",
    now: "now",
    attached: "attached",
    rating: "Rating",
    posts: "posts",
    completedMetric: "completed",
    repeat: "repeat",
    saves: "saves",
    trustLevel: "Trusted level",
    trustScore: "Trust score",
    topLiked: "Top liked",
    profileArchive: "Past posts",
    profilePostSearch: "Search this creator's posts",
    sortRecent: "Recent",
    sortLikes: "Most liked",
    profilePostEmptyTitle: "No posts found",
    profilePostEmptyBody: "Try another keyword.",
  },
  ko: {
    searchPlaceholder: "작품, 아바타, 의뢰 검색",
    myPage: "마이페이지",
    appSettings: "앱 설정",
    logout: "로그아웃",
    mission: "Our Mission",
    toggleTheme: "라이트 / 다크 전환",
    likedPostsShortcut: "좋아요한 게시물",
    bookmarkFoldersShortcut: "북마크 폴더",
    requestManager: "의뢰 관리",
    events: "이벤트",
    notifications: "알림",
    unreadNotifications: "읽지 않은 알림",
    postUrlCopy: "게시물 URL 복사",
    eventProposalTrigger: "이벤트 개최 신청",
    circles: "서클",
    circlesLead: "동호회나 제작팀 같은 작은 서클입니다. 참여자 전용 게시물과 이벤트 참여 조건으로 사용할 수 있습니다.",
    circlePostsTitle: "서클 한정 게시물",
    circlePostsNote: "참여 중인 서클에서는 멤버만 볼 수 있는 게시물이 표시됩니다.",
    circleListTitle: "서클 목록",
    circleBrowseTab: "서클 목록",
    circlePostsTab: "한정 게시물",
    circleSearchPlaceholder: "서클명, 주최자, #태그 검색",
    circleFilterLabel: "표시",
    circleFilterJoined: "참여 중",
    circleFilterApproval: "승인제",
    circleFilterOpen: "자유 참여 OK",
    circleEmptyTitle: "서클을 찾을 수 없습니다",
    circleEmptyBody: "검색어를 바꿔 다시 찾아보세요.",
    eventProposalSectionTitle: "사용자 발안 이벤트 개최 권한 신청",
    eventProposalSectionLead: "승인되면 이벤트 개최 권한이 부여되고, 주최자가 원하는 시기와 기간에 공지와 게시를 진행할 수 있습니다.",
    eventProposalStatusTitle: "이벤트 신청 심사 현황",
    eventProposalDialogTitle: "이벤트 개최 신청",
    eventProposalDialogLead: "운영 승인 후 주최자가 원하는 시기와 기간에 이벤트 공지와 게시를 진행할 수 있습니다.",
    eventProposalSubmit: "신청 보내기",
    eventProposalSuccess: "운영에 이벤트 신청을 보냈습니다",
    eventOrganizer: "주최자",
    officialOrganizer: "Veacon 운영",
    eventTimingNegotiable: "승인 후 주최자가 설정",
    eventsLead: "진행 중인 이벤트를 검색하거나 사용자 발안 이벤트 개최 권한을 운영에 신청할 수 있습니다.",
    eventsSearchPlaceholder: "이벤트명, 주최자, #태그로 검색",
    eventsEmptyTitle: "이벤트를 찾을 수 없습니다",
    eventsEmptyBody: "검색어나 필터를 바꿔 다시 찾아보세요.",
    heroTitle: "작품을 찾고, 연결하고, 의뢰하세요.",
    portfolioDesc: "아바타 수정, 사진, 보정, 영상, 월드 작업을 게시",
    commissionDesc: "게시물과 프로필에서 의뢰 페이지로 연결",
    communityDesc: "로그인 없이도 검색과 프로필 확인을 편하게",
    explore: "탐색",
    followingFeed: "팔로잉",
    requests: "의뢰 접수중",
    shuffle: "셔플",
    request: "Request",
    post: "Post",
    addTab: "탭 추가",
    editTab: "탭 편집",
    updateTab: "업데이트",
    deleteTab: "삭제",
    edit: "편집",
    savedTabDialogTitle: "저장 탭 추가",
    savedTabEditTitle: "저장 탭 편집",
    savedTabDialogLead: "홈에 보일 이름과 내부 검색어를 각각 설정할 수 있습니다.",
    savedTabEditLead: "표시 이름과 검색어를 바꾸거나, 이 탭 자체를 삭제할 수 있습니다.",
    savedTabLabel: "탭 제목",
    savedTabQuery: "검색어",
    savedTabHint: "AND / OR 조건으로 검색 탭을 저장할 수 있습니다.",
    savedTabLabelPlaceholder: "예: Booth 의상 / 즐겨찾는 개변",
    savedTabQueryPlaceholder: "예: booth AND #의상 OR Selestia",
    savedTabEmpty: "검색어를 먼저 입력하세요",
    savedTabLabelEmpty: "탭 제목을 먼저 입력하세요",
    savedTabAdded: "탭을 추가했습니다",
    savedTabExists: "같은 탭을 열었습니다",
    savedTabUpdated: "탭을 업데이트했습니다",
    savedTabDeleted: "탭을 삭제했습니다",
    noResultsTitle: "검색 결과가 없습니다",
    noResultsBody: "검색어나 카테고리를 바꿔 다시 찾아보세요.",
    back: "Back",
    markAllRead: "모두 읽음",
    deleteReadNotifications: "읽은 알림 삭제",
    settingsLead: "알림, 표시, 언어, 개인정보, 계정 기본 설정을 관리합니다.",
    autoSavedToast: "설정을 자동 저장했습니다",
    settingsNotificationsTitle: "알림 설정",
    requestNotifications: "의뢰 알림",
    requestNotificationsHelp: "새 의뢰, 승인, 납품, 리뷰 대기 알림",
    chatNotifications: "채팅 알림",
    chatNotificationsHelp: "의뢰 채팅 답장과 첨부 알림",
    workReactions: "작품 반응",
    workReactionsHelp: "좋아요, 저장, 팔로우 알림",
    settingsDisplayTitle: "표시와 언어",
    language: "언어",
    theme: "표시 테마",
    systemTheme: "기기 설정 사용",
    light: "라이트",
    dark: "다크",
    reducedMotion: "모션 줄이기",
    reducedMotionHelp: "화면 전환과 팝업 움직임을 줄입니다",
    highContrast: "고대비",
    highContrastHelp: "문자와 버튼 가독성을 우선합니다",
    settingsPrivacyTitle: "개인정보",
    profileVisibility: "프로필 공개 범위",
    externalLinkWarning: "외부 링크 경고",
    externalLinkWarningHelp: "VRChat / BOOTH / X 외 링크를 열기 전에 확인",
    onlineStatus: "온라인 상태 표시",
    onlineStatusHelp: "의뢰 채팅에서 대응 가능 여부 표시",
    settingsContentTitle: "콘텐츠 표시",
    showR18Content: "R18 콘텐츠 표시",
    showR18ContentHelp: "연령 제한 게시물과 의뢰를 표시 대상에 포함합니다",
    showGoreContent: "고어 콘텐츠 표시",
    showGoreContentHelp: "유혈, 손상 표현 등 강한 표현의 게시물을 표시 대상에 포함합니다",
    sensitiveReveal: "민감한 게시물 초기 표시",
    sensitiveBlur: "흐림 처리 후 보기 버튼 표시",
    sensitiveVisible: "처음부터 표시",
    muteBlockManage: "뮤트 / 차단 관리",
    stripePlanned: "Stripe 연동 예정",
    stripeConnect: "Stripe 연동",
    unset: "미설정",
    account: "계정",
    changeEmail: "메일 주소 변경",
    changePassword: "비밀번호 변경",
    deleteAccount: "계정 삭제",
    accountActionCancel: "취소",
    accountActionDone: "완료",
    accountLogoutConfirm: "로그아웃",
    accountEmailTitle: "메일 주소 변경",
    accountEmailBody: "새 메일 주소를 입력합니다. 실제 앱에서는 인증 메일을 보내는 흐름입니다.",
    accountEmailField: "새 메일 주소",
    accountPasswordTitle: "비밀번호 변경",
    accountPasswordBody: "현재 비밀번호와 새 비밀번호를 입력합니다. 이 목업에서는 화면 흐름만 보여줍니다.",
    accountPasswordCurrent: "현재 비밀번호",
    accountPasswordNew: "새 비밀번호",
    accountPasswordConfirm: "새 비밀번호 확인",
    accountPasswordMismatch: "새 비밀번호가 일치하지 않습니다",
    accountLogoutTitle: "로그아웃할까요?",
    accountLogoutBody: "로그아웃하면 의뢰 전송과 프로필 편집에는 다시 로그인이 필요합니다.",
    accountUpdatedToast: "계정 설정을 업데이트했습니다",
    commissionPosts: "Commission posts",
    requestPublishingTitle: "의뢰 접수",
    requestPublishingLead: "가격, 납기, 접수 슬롯, 샘플 이미지가 있는 의뢰 페이지를 만들고 프로필과 게시물에서 연결합니다.",
    publishRequestPage: "의뢰 페이지 공개",
    publishRequestPageHelp: "가격, 납기, 접수 슬롯, 샘플 이미지가 있는 의뢰 게시물을 만들 수 있습니다.",
    createRequestPost: "의뢰 접수 만들기",
    requestManagerTitle: "의뢰 관리",
    requestManagerLead: "받은 의뢰를 상태별로 확인합니다.",
    pendingSort: "미승낙 정렬",
    sortDeadline: "마감순",
    sortBudget: "금액순",
    emptyRequestsTitle: "해당 의뢰가 없습니다",
    emptyRequestsBody: "이 상태에 들어간 의뢰가 아직 없습니다.",
    pending: "미승낙",
    accepted: "승낙됨",
    inProgress: "진행 중",
    awaitingReview: "평가 대기",
    awaitingYourReview: "리뷰 답례",
    completed: "완료",
    pendingDescription: "의뢰 내용을 확인 중입니다. 아직 수락 여부가 확정되지 않았습니다.",
    acceptedDescription: "의뢰 수락 완료. 작업 시작 예정이 확정된 상태입니다.",
    inProgressDescription: "작업 시작 알림까지 완료되어 현재 진행 중인 의뢰입니다.",
    awaitingReviewDescription: "납품 완료. 클라이언트 확인과 평가를 기다리는 상태입니다.",
    awaitingYourReviewDescription: "상대 평가가 도착했습니다. 이제 클라이언트를 평가할 차례입니다.",
    completedDescription: "양쪽 평가와 확인이 완료되어 의뢰가 종료되었습니다.",
    deadlineSuffix: "마감",
    myTurn: "내 차례",
    clientTurn: "상대 차례",
    firstReply: "첫 답장 대기",
    waitingReply: "답장 대기",
    needsReply: "답장 필요",
    report: "신고",
    clientProfile: "의뢰자 정보",
    viewProfile: "프로필 보기",
    requestBrief: "의뢰 내용",
    chat: "채팅",
    messagePlaceholder: "메시지 입력",
    attach: "첨부",
    send: "보내기",
    approveAndChat: "승인하고 채팅으로",
    chooseRejectReason: "거절 이유 선택",
    markDelivered: "납품 완료로 변경",
    waitReceive: "수령 확인・평가",
    backToRetake: "수정 대응으로 돌아가기",
    reviewClient: "상대를 평가하기",
    openChat: "채팅 열기",
    viewLog: "상세 로그 보기",
    saved: "Saved",
    save: "Save",
    follow: "Follow",
    following: "Following",
    normalPost: "일반 게시물",
    requestOpen: "의뢰 접수 중",
    requestCtaBody: "이 크리에이터의 의뢰 페이지로 이동합니다.",
    profileUrlCopy: "프로필 URL 복사",
    copied: "복사됨",
    copySuccess: "링크를 복사했습니다",
    copyFailed: "복사하지 못했습니다",
    languageChanged: "언어가 변경되었습니다",
    loginToast: "로그아웃했습니다",
    now: "지금",
    attached: "첨부됨",
    rating: "평가",
    posts: "게시물",
    completedMetric: "완료 실적",
    repeat: "반복 의뢰",
    saves: "저장",
    trustLevel: "Trusted level",
    trustScore: "Trust score",
    topLiked: "Top liked",
    profileArchive: "과거 게시물",
    profilePostSearch: "이 사람의 게시물 검색",
    sortRecent: "게시순",
    sortLikes: "좋아요순",
    profilePostEmptyTitle: "해당 게시물이 없습니다",
    profilePostEmptyBody: "검색어를 바꿔 다시 찾아보세요.",
  },
};

function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.ja[key] ?? key;
}

function setText(target, key) {
  const node = typeof target === "string" ? document.querySelector(target) : target;
  if (node) node.textContent = t(key);
}

const heroTitleWords = ["Discover", "Connect", "Commission"];
let heroTitleWordIndex = 0;
let heroTitleTimer = null;
let heroTitleSwapTimer = null;

function renderHeroTitleWord(animate = true) {
  if (!pageTitle) return;
  const word = heroTitleWords[heroTitleWordIndex % heroTitleWords.length];
  const current = pageTitle.querySelector(".hero-word");
  if (!current || !animate || document.documentElement.dataset.reducedMotion === "true") {
    pageTitle.innerHTML = "";
    const stable = document.createElement("span");
    stable.className = "hero-word is-visible";
    stable.textContent = word;
    pageTitle.append(stable);
    return;
  }
  if (current.textContent === word) return;
  if (heroTitleSwapTimer) window.clearTimeout(heroTitleSwapTimer);
  current.classList.add("is-transitioning");
  current.classList.remove("is-visible");
  heroTitleSwapTimer = window.setTimeout(() => {
    current.textContent = word;
    current.classList.remove("is-transitioning");
    current.classList.add("is-visible");
    heroTitleSwapTimer = null;
  }, 300);
}

function resetHeroTitleRotation() {
  if (heroTitleTimer) {
    window.clearInterval(heroTitleTimer);
    heroTitleTimer = null;
  }
  if (heroTitleSwapTimer) {
    window.clearTimeout(heroTitleSwapTimer);
    heroTitleSwapTimer = null;
  }
  heroTitleWordIndex = 0;
  renderHeroTitleWord(false);
}

function startHeroTitleRotation() {
  if (!pageTitle || heroTitleTimer) return;
  resetHeroTitleRotation();
  heroTitleTimer = window.setInterval(() => {
    heroTitleWordIndex = (heroTitleWordIndex + 1) % heroTitleWords.length;
    renderHeroTitleWord(true);
  }, 6400);
}

function setAttr(target, attr, key) {
  const node = typeof target === "string" ? document.querySelector(target) : target;
  if (node) node.setAttribute(attr, t(key));
}

function setTooltip(target, keyOrText, { raw = false } = {}) {
  const node = typeof target === "string" ? document.querySelector(target) : target;
  if (!node) return;
  node.setAttribute("data-tooltip", raw ? keyOrText : t(keyOrText));
  node.removeAttribute("title");
}

function setSelectOptionTexts(select, keys) {
  if (!select) return;
  [...select.options].forEach((option, index) => {
    if (keys[index]) option.textContent = t(keys[index]);
  });
}

function categoryDisplayName(category) {
  const labels = {
    ja: {
      All: "すべて",
      Avatar: "アバター",
      Photo: "写真",
      Retouch: "レタッチ",
      Video: "動画",
      World: "ワールド",
      Commission: "依頼受付",
    },
    en: {
      All: "All",
      Avatar: "Avatar",
      Photo: "Photo",
      Retouch: "Retouch",
      Video: "Video",
      World: "World",
      Commission: "Commission",
    },
    ko: {
      All: "전체",
      Avatar: "아바타",
      Photo: "사진",
      Retouch: "리터치",
      Video: "영상",
      World: "월드",
      Commission: "의뢰",
    }
  };
  return labels[currentLanguage]?.[category] || labels.ja[category] || category;
}

function loadSavedSearchTabItems() {
  try {
    const raw = localStorage.getItem(savedSearchTabsStorageKey);
    const parsed = JSON.parse(raw || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item.id === "string" && typeof item.query === "string")
      .map((item) => ({
        id: item.id,
        query: item.query.trim(),
        label: typeof item.label === "string" && item.label.trim() ? item.label.trim() : item.query.trim(),
      }))
      .filter((item) => item.query && item.label);
  } catch {
    return [];
  }
}

function persistSavedSearchTabItems() {
  localStorage.setItem(savedSearchTabsStorageKey, JSON.stringify(savedSearchTabItems));
}

function savedSearchTabLabel(label) {
  const value = label.trim();
  return value.length > 16 ? `${value.slice(0, 16)}...` : value;
}

function normalizedSavedSearchLabel(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLocaleLowerCase();
}

function savedSearchLabelExists(label, ignoreId = null) {
  const normalized = normalizedSavedSearchLabel(label);
  if (!normalized) return false;
  return savedSearchTabItems.some((item) => item.id !== ignoreId && normalizedSavedSearchLabel(item.label) === normalized);
}

function savedSearchLabelErrorMessage(type) {
  if (type === "duplicate") {
    if (currentLanguage === "en") return "A tab with this name already exists.";
    if (currentLanguage === "ko") return "같은 이름의 탭이 이미 있습니다.";
    return "同じ名前のタブがあります。";
  }
  if (currentLanguage === "en") return "Enter a tab title.";
  if (currentLanguage === "ko") return "탭 제목을 입력해 주세요.";
  return "タブのタイトルを入力してください。";
}

function showSavedSearchLabelError(type) {
  savedSearchLabelInput?.classList.add("is-invalid");
  if (!savedSearchLabelError) return;
  savedSearchLabelError.textContent = savedSearchLabelErrorMessage(type);
  savedSearchLabelError.hidden = false;
}

function clearSavedSearchLabelError() {
  savedSearchLabelInput?.classList.remove("is-invalid");
  if (!savedSearchLabelError) return;
  savedSearchLabelError.hidden = true;
  savedSearchLabelError.textContent = "";
}

function renderSavedSearchTabs() {
  if (!savedSearchTabs) return;
  savedSearchTabs.innerHTML = savedSearchTabItems.map((item) => `
    <button class="nav-pill saved-search-pill${activeSavedSearchTabId === item.id ? " is-active" : ""}" type="button" data-saved-search-id="${item.id}" title="${item.label} | ${item.query}">
      ${savedSearchTabLabel(item.label)}
    </button>
  `).join("");
}

function updateViewTabActiveStates() {
  navPills.forEach((pill) => {
    pill.classList.toggle("is-active", !activeSavedSearchTabId && pill.dataset.view === activeView);
  });
  savedSearchTabs?.querySelectorAll("[data-saved-search-id]").forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.savedSearchId === activeSavedSearchTabId);
  });
}

function activateSavedSearchTab(id) {
  const item = savedSearchTabItems.find((entry) => entry.id === id);
  if (!item) return;
  activeSavedSearchTabId = item.id;
  setView("discover", { preserveSavedSearch: true });
}

function updateSavedSearchSaveButtonState() {
  if (!savedSearchSave) return;
  const label = savedSearchLabelInput?.value.trim() || "";
  const hasQuery = Boolean(savedSearchQueryInput?.value.trim());
  const duplicate = savedSearchLabelExists(label, editingSavedSearchTabId);
  if (duplicate) {
    showSavedSearchLabelError("duplicate");
  } else {
    clearSavedSearchLabelError();
  }
  savedSearchSave.disabled = !(label && hasQuery && !duplicate);
}

function syncSavedSearchDialogMode() {
  const isEditing = Boolean(editingSavedSearchTabId);
  setText("#savedSearchDialogTitle", isEditing ? "savedTabEditTitle" : "savedTabDialogTitle");
  setText("#savedSearchDialogLead", isEditing ? "savedTabEditLead" : "savedTabDialogLead");
  setText("#savedSearchSave", isEditing ? "updateTab" : "addTab");
  if (savedSearchDelete) savedSearchDelete.hidden = !isEditing;
}

function openSavedSearchDialog(tabId = null) {
  if (!savedSearchDialog) return;
  closeSavedSearchContextMenu();
  editingSavedSearchTabId = tabId;
  const editingItem = tabId ? savedSearchTabItems.find((item) => item.id === tabId) : null;
  const seed = searchInput?.value.trim() || "";
  if (savedSearchLabelInput) savedSearchLabelInput.value = editingItem?.label || seed;
  if (savedSearchQueryInput) savedSearchQueryInput.value = editingItem?.query || seed;
  syncSavedSearchDialogMode();
  updateSavedSearchSaveButtonState();
  showModalElement(savedSearchDialog);
  requestAnimationFrame(() => savedSearchLabelInput?.focus());
}

function closeSavedSearchDialog() {
  if (!savedSearchDialog) return;
  editingSavedSearchTabId = null;
  clearSavedSearchLabelError();
  syncSavedSearchDialogMode();
  closeModalElement(savedSearchDialog);
}

function closeSavedSearchContextMenu() {
  contextSavedSearchTabId = null;
  savedSearchHoldTriggered = false;
  if (savedSearchContextMenu) {
    savedSearchContextMenu.hidden = true;
  }
}

function openSavedSearchContextMenu(tabId, x, y) {
  if (!savedSearchContextMenu) return;
  contextSavedSearchTabId = tabId;
  savedSearchContextMenu.hidden = false;
  const width = 190;
  const height = 56;
  const left = Math.min(x, window.innerWidth - width - 12);
  const top = Math.min(y, window.innerHeight - height - 12);
  savedSearchContextMenu.style.left = `${Math.max(12, left)}px`;
  savedSearchContextMenu.style.top = `${Math.max(12, top)}px`;
}

function clearSavedSearchHold() {
  if (savedSearchHoldTimer) {
    window.clearTimeout(savedSearchHoldTimer);
    savedSearchHoldTimer = 0;
  }
  savedSearchHoldPointerId = null;
  savedSearchHoldStart = null;
  savedSearchHoldTargetId = null;
}

function handleSavedSearchPointerDown(event) {
  const button = event.target.closest("[data-saved-search-id]");
  if (!button || event.pointerType !== "touch") return;
  clearSavedSearchHold();
  savedSearchHoldTriggered = false;
  closeSavedSearchContextMenu();
  savedSearchHoldPointerId = event.pointerId;
  savedSearchHoldStart = { x: event.clientX, y: event.clientY };
  savedSearchHoldTargetId = button.dataset.savedSearchId;
  savedSearchHoldTimer = window.setTimeout(() => {
    savedSearchHoldTriggered = true;
    openSavedSearchContextMenu(
      savedSearchHoldTargetId,
      event.clientX,
      event.clientY
    );
    window.setTimeout(() => {
      savedSearchHoldTriggered = false;
    }, 700);
    clearSavedSearchHold();
  }, 420);
}

function handleSavedSearchPointerMove(event) {
  if (!savedSearchHoldStart || savedSearchHoldPointerId !== event.pointerId) return;
  const deltaX = Math.abs(event.clientX - savedSearchHoldStart.x);
  const deltaY = Math.abs(event.clientY - savedSearchHoldStart.y);
  if (deltaX > 10 || deltaY > 10) {
    clearSavedSearchHold();
  }
}

function handleSavedSearchPointerEnd(event) {
  if (savedSearchHoldPointerId !== null && savedSearchHoldPointerId === event.pointerId) {
    clearSavedSearchHold();
  }
}

function saveSavedSearchTab() {
  const label = savedSearchLabelInput?.value.trim() || "";
  const query = savedSearchQueryInput?.value.trim() || "";
  if (!label) {
    showProfileCopyToast(t("savedTabLabelEmpty"), false);
    showSavedSearchLabelError("empty");
    savedSearchLabelInput?.focus();
    return;
  }
  if (savedSearchLabelExists(label, editingSavedSearchTabId)) {
    showSavedSearchLabelError("duplicate");
    if (savedSearchSave) savedSearchSave.disabled = true;
    savedSearchLabelInput?.focus();
    return;
  }
  if (!query) {
    showProfileCopyToast(t("savedTabEmpty"), false);
    savedSearchQueryInput?.focus();
    return;
  }
  if (editingSavedSearchTabId) {
    const target = savedSearchTabItems.find((item) => item.id === editingSavedSearchTabId);
    if (!target) {
      closeSavedSearchDialog();
      return;
    }
    const duplicate = savedSearchTabItems.find((item) => item.id !== editingSavedSearchTabId && item.query.toLowerCase() === query.toLowerCase());
    if (duplicate) {
      showProfileCopyToast(t("savedTabExists"));
      closeSavedSearchDialog();
      activateSavedSearchTab(duplicate.id);
      return;
    }
    target.label = label;
    target.query = query;
    persistSavedSearchTabItems();
    renderSavedSearchTabs();
    showProfileCopyToast(t("savedTabUpdated"));
    activateSavedSearchTab(target.id);
    closeSavedSearchDialog();
    return;
  }
  const existing = savedSearchTabItems.find((item) => item.query.toLowerCase() === query.toLowerCase());
  if (existing) {
    existing.label = label;
    persistSavedSearchTabItems();
    renderSavedSearchTabs();
    showProfileCopyToast(t("savedTabExists"));
    activateSavedSearchTab(existing.id);
    closeSavedSearchDialog();
    return;
  }
  const id = `saved-${Date.now().toString(36)}`;
  savedSearchTabItems.unshift({ id, label, query });
  persistSavedSearchTabItems();
  renderSavedSearchTabs();
  showProfileCopyToast(t("savedTabAdded"));
  activateSavedSearchTab(id);
  closeSavedSearchDialog();
}

function deleteSavedSearchTab() {
  const targetId = editingSavedSearchTabId || contextSavedSearchTabId;
  if (!targetId) return;
  savedSearchTabItems = savedSearchTabItems.filter((item) => item.id !== targetId);
  if (activeSavedSearchTabId === targetId) {
    activeSavedSearchTabId = null;
  }
  persistSavedSearchTabItems();
  renderSavedSearchTabs();
  showProfileCopyToast(t("savedTabDeleted"));
  closeSavedSearchContextMenu();
  closeSavedSearchDialog();
  renderPins();
}

function parseBooleanSearchQuery(query) {
  const normalized = query.trim().replace(/\s+/g, " ");
  if (!normalized) return { hasBoolean: false, groups: [] };
  const hasBoolean = /\b(?:AND|OR)\b/i.test(normalized);
  if (!hasBoolean) {
    return { hasBoolean: false, groups: [[normalized.toLowerCase()]] };
  }
  const groups = normalized
    .split(/\s+\bOR\b\s+/i)
    .map((group) => group
      .split(/\s+\bAND\b\s+/i)
      .map((term) => term.trim().toLowerCase())
      .filter(Boolean))
    .filter((group) => group.length);
  return { hasBoolean, groups };
}

function matchesSearchQuery(haystack, query) {
  const parsed = parseBooleanSearchQuery(query);
  if (!parsed.groups.length) return true;
  if (!parsed.hasBoolean) {
    return haystack.includes(parsed.groups[0][0]);
  }
  return parsed.groups.some((group) => group.every((term) => haystack.includes(term)));
}

function getEventCampaignList() {
  const baseCampaigns = (eventCampaigns[currentLanguage] || eventCampaigns.ja).filter((event) => !isEventNotice(event));
  return [...getAutoFeaturedEventProposals(), ...baseCampaigns];
}

function isEventNotice(event) {
  return String(event?.badge || "").toLowerCase() === "coming up";
}

function getOfficialEventCampaignList() {
  return (eventCampaigns[currentLanguage] || eventCampaigns.ja).filter((event) => !isEventNotice(event)).map((event, index) => ({
    ...event,
    eventKey: `official-${index}`,
    eventKind: "official",
    organizer: event.organizer || t("officialOrganizer"),
    tags: [
      ...(event.highlights || []).map(eventHashTag),
      eventHashTag(event.badge),
      "#公式イベント"
    ].filter(Boolean)
  }));
}

function getCommunityEventCampaignList() {
  const proposals = communityEventProposals
    .sort((a, b) => Number(b.participants || 0) - Number(a.participants || 0));
  return proposals.map((proposal) => {
    const status = eventProposalStatusMeta(proposal.status);
    const participantText = participantLabel(proposal.participants);
    const typeLabel = eventProposalTypeLabel(proposal.type, proposal.customType);
    const autoFeatured = ["approved", "scheduled"].includes(proposal.status) && Number(proposal.participants || 0) >= EVENT_AUTO_FEATURE_THRESHOLD;
    return {
      badge: status.label,
      date: localizedValue(proposal.window),
      title: localizedValue(proposal.title),
      image: proposal.image || vrchatImages.event,
      body: localizedValue(proposal.summary),
      organizer: proposal.organizer,
      circleRequirement: proposal.circleRequirement || null,
      highlights: [
        participantText,
        typeLabel,
        proposal.organizer,
      ],
      tags: [
        ...eventProposalTags(proposal.tags),
        eventHashTag(typeLabel),
        eventHashTag(proposal.organizer),
        "#ユーザー発案",
        autoFeatured ? "#トップ掲載" : ""
      ].filter(Boolean),
      stats: [
        { value: participantText, label: currentLanguage === "en" ? "Participation" : currentLanguage === "ko" ? "참가 규모" : "参加規模" },
        { value: status.label, label: currentLanguage === "en" ? "Review state" : currentLanguage === "ko" ? "심사 상태" : "審査状態" },
        { value: autoFeatured ? (currentLanguage === "en" ? "Auto banner" : currentLanguage === "ko" ? "자동 게재" : "自動掲載") : (currentLanguage === "en" ? "Review queue" : currentLanguage === "ko" ? "심사 대기" : "審査キュー"), label: currentLanguage === "en" ? "Placement" : currentLanguage === "ko" ? "노출" : "掲載面" }
      ],
      proposalId: proposal.id,
      eventKey: `community-${proposal.id}`,
      autoFeatured,
      eventKind: "community"
    };
  });
}

function getEventsPageCampaignList() {
  if (activeEventsFilter === "official") return getOfficialEventCampaignList();
  if (activeEventsFilter === "community") return getCommunityEventCampaignList();
  return [...getOfficialEventCampaignList(), ...getCommunityEventCampaignList()];
}

function eventProposalTags(value) {
  if (Array.isArray(value)) return value.map(eventHashTag).filter(Boolean);
  return String(value || "")
    .split(/[\s,、]+/)
    .map(eventHashTag)
    .filter(Boolean);
}

function localizedValue(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLanguage] || value.ja || Object.values(value)[0] || "";
  }
  return value || "";
}

function eventHashTag(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return `#${text.replace(/^#/, "").replace(/\s+/g, "")}`;
}

function eventSearchVariants(value) {
  const text = String(value || "").trim();
  const tag = eventHashTag(text);
  return [text, text.replace(/^#/, ""), tag].filter(Boolean);
}

function participantLabel(count) {
  const formatted = Number(count || 0).toLocaleString(currentLanguage === "ja" ? "ja-JP" : currentLanguage === "ko" ? "ko-KR" : "en-US");
  if (currentLanguage === "en") return `${formatted} participants`;
  if (currentLanguage === "ko") return `${formatted}명 참가`;
  return `参加 ${formatted}人`;
}

function getAutoFeaturedEventProposals() {
  return communityEventProposals
    .filter((proposal) => ["approved", "scheduled"].includes(proposal.status))
    .filter((proposal) => Number(proposal.participants || 0) >= EVENT_AUTO_FEATURE_THRESHOLD)
    .sort((a, b) => Number(b.participants || 0) - Number(a.participants || 0))
    .map((proposal) => {
      const status = eventProposalStatusMeta(proposal.status);
      const participantText = participantLabel(proposal.participants);
      return {
        badge: currentLanguage === "en" ? "Community hot" : currentLanguage === "ko" ? "인기 이벤트" : "人気イベント",
        date: localizedValue(proposal.window),
        title: localizedValue(proposal.title),
        image: proposal.image || vrchatImages.event,
        circleRequirement: proposal.circleRequirement || null,
        body: currentLanguage === "en"
          ? `${localizedValue(proposal.summary)} This user-proposed event was automatically promoted because participation passed ${EVENT_AUTO_FEATURE_THRESHOLD}.`
          : currentLanguage === "ko"
            ? `${localizedValue(proposal.summary)} 참가자가 ${EVENT_AUTO_FEATURE_THRESHOLD}명을 넘어서 톱 배너에 자동 게재되었습니다.`
            : `${localizedValue(proposal.summary)} 参加人数が${EVENT_AUTO_FEATURE_THRESHOLD}人を超えたためトップバナーに自動掲載されています。`,
        highlights: [
          participantText,
          eventProposalTypeLabel(proposal.type),
          status.label
        ],
        stats: [
          { value: participantText, label: currentLanguage === "en" ? "Participation" : currentLanguage === "ko" ? "참가 규모" : "参加規模" },
          { value: status.label, label: currentLanguage === "en" ? "Review state" : currentLanguage === "ko" ? "심사 상태" : "審査状態" },
          { value: currentLanguage === "en" ? "Auto banner" : currentLanguage === "ko" ? "자동 게재" : "自動掲載", label: currentLanguage === "en" ? "Placement" : currentLanguage === "ko" ? "노출" : "掲載面" }
        ],
        proposalId: proposal.id,
        autoFeatured: true
      };
    });
}

function eventProposalTypeLabel(type, customType = "") {
  if (typeof type === "object" && type) {
    return eventProposalTypeLabel(type.type, type.customType);
  }
  const customLabel = String(customType || "").trim();
  if (type === "other" && customLabel) return customLabel;
  const labels = {
    showcase: { ja: "作品特集", en: "Showcase", ko: "작품 특집" },
    contest: { ja: "コンテスト", en: "Contest", ko: "콘테스트" },
    workshop: { ja: "ワークショップ", en: "Workshop", ko: "워크숍" },
    support: { ja: "依頼促進", en: "Support campaign", ko: "의뢰 촉진" },
    other: { ja: "その他", en: "Other", ko: "기타" }
  };
  return localizedValue(labels[type] || labels.showcase);
}

function eventProposalStatusMeta(status) {
  const map = {
    pending: {
      label: { ja: "審査待ち", en: "Waiting review", ko: "심사 대기" },
      note: { ja: "イベント開催許可の申請を運営が確認中", en: "Operations is reviewing the hosting permission application", ko: "운영이 이벤트 개최 권한 신청을 확인 중" },
      className: "is-pending"
    },
    approved: {
      label: { ja: "開催許可あり", en: "Permission granted", ko: "개최 권한 부여" },
      note: { ja: "主催者がタイミング・期間・告知を設定可能", en: "Organizer can set timing, duration, and announcements", ko: "주최자가 시기, 기간, 공지를 설정 가능" },
      className: "is-approved"
    },
    scheduled: {
      label: { ja: "開催設定済み", en: "Run configured", ko: "개최 설정 완료" },
      note: { ja: "主催者が告知・投稿を開始可能", en: "Organizer can start announcements and posts", ko: "주최자가 공지와 게시를 시작 가능" },
      className: "is-scheduled"
    }
  };
  const item = map[status] || map.pending;
  return {
    label: localizedValue(item.label),
    note: localizedValue(item.note),
    className: item.className
  };
}

function renderEventProposalFlow() {
  if (!eventProposalFlow) return;
  const steps = [
    {
      title: currentLanguage === "en" ? "Apply for permission" : currentLanguage === "ko" ? "개최 권한 신청" : "開催許可を申請",
      body: currentLanguage === "en" ? "The form sends the event title, banner, organizer, contact, and overview to the operations event inbox. The requested timing is not fixed at this stage." : currentLanguage === "ko" ? "이벤트명, 배너, 주최자, 연락처, 개요가 운영 이벤트 메일함으로 전달됩니다. 이 단계에서는 희망 시기를 고정하지 않습니다." : "イベント名、バナー、主催者、連絡先、概要を運営イベント窓口へ送ります。この時点では開催時期を固定しません。"
    },
    {
      title: currentLanguage === "en" ? "Operations review" : currentLanguage === "ko" ? "운영 검토" : "運営が内容を確認",
      body: currentLanguage === "en" ? "The team checks whether the theme fits the service, whether safety notes are needed, and whether ops support is possible." : currentLanguage === "ko" ? "서비스와의 적합성, 안전 안내 필요 여부, 운영 지원 가능 여부를 검토합니다." : "サービスとの相性、必要な注意事項、運営サポート可否を確認します。"
    },
    {
      title: currentLanguage === "en" ? "Permission granted" : currentLanguage === "ko" ? "개최 권한 부여" : "開催許可が付与",
      body: currentLanguage === "en" ? "After approval, the organizer can choose when to run it, how long it lasts, and when to announce or post." : currentLanguage === "ko" ? "승인 후 주최자는 개최 시기, 기간, 공지와 게시 타이밍을 직접 정할 수 있습니다." : "承認後は主催者が開催タイミング、期間、告知や投稿のタイミングを自由に設定できます。"
    }
  ];
  eventProposalFlow.innerHTML = steps.map((step, index) => `
    <article class="event-proposal-step">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${step.title}</strong>
      <p>${step.body}</p>
    </article>
  `).join("");
}

function renderEventProposalList() {
  if (!eventProposalList) return;
  eventProposalList.innerHTML = communityEventProposals.map((proposal) => {
    const status = eventProposalStatusMeta(proposal.status);
    const timingLabel = currentLanguage === "en" ? "Run setting" : currentLanguage === "ko" ? "개최 설정" : "開催設定";
    return `
      <article class="event-proposal-item">
        <div class="event-proposal-item-top">
          <span class="event-proposal-type">${eventProposalTypeLabel(proposal.type, proposal.customType)}</span>
          <span class="event-proposal-status ${status.className}">${status.label}</span>
        </div>
        <strong>${localizedValue(proposal.title)}</strong>
        <p>${localizedValue(proposal.summary)}</p>
        <div class="event-proposal-meta">
          ${proposal.image ? `<span>${currentLanguage === "en" ? "Banner image attached" : currentLanguage === "ko" ? "배너 이미지 첨부됨" : "バナー画像あり"}</span>` : ""}
          <span>${currentLanguage === "en" ? "Organizer" : currentLanguage === "ko" ? "주최자" : "主催者"}: ${proposal.organizer}</span>
          <span>${timingLabel}: ${localizedValue(proposal.window)}</span>
          <span>${participantLabel(proposal.participants || 0)}</span>
          <span>${status.note}</span>
          ${Number(proposal.participants || 0) >= EVENT_AUTO_FEATURE_THRESHOLD && ["approved", "scheduled"].includes(proposal.status)
            ? `<span class="event-proposal-auto">${currentLanguage === "en" ? "Auto-featured in top banner" : currentLanguage === "ko" ? "톱 배너 자동 게재" : "トップバナー自動掲載"}</span>`
            : ""}
          <span>${currentLanguage === "en" ? "Ops mailbox" : currentLanguage === "ko" ? "운영 메일함" : "運営メール"}: ${proposal.mailTo}</span>
        </div>
      </article>
    `;
  }).join("");
}

function closeEventProposalTypeMenu() {
  if (!eventProposalTypeMenu || !eventProposalTypeButton) return;
  eventProposalTypeMenu.hidden = true;
  eventProposalTypeButton.setAttribute("aria-expanded", "false");
}

function updateEventProposalTypeCustomControl() {
  if (!eventProposalTypeInput) return;
  const value = eventProposalTypeInput.value || "showcase";
  if (eventProposalTypeButtonText) eventProposalTypeButtonText.textContent = eventProposalTypeLabel(value);
  eventProposalTypeMenu?.querySelectorAll("[data-event-type-option]").forEach((button) => {
    const selected = button.dataset.eventTypeOption === value;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-selected", String(selected));
    button.textContent = eventProposalTypeLabel(button.dataset.eventTypeOption);
  });
}

function setEventProposalType(value, { focusOther = true } = {}) {
  if (!eventProposalTypeInput) return;
  eventProposalTypeInput.value = value || "showcase";
  updateEventProposalTypeCustomControl();
  syncEventProposalOtherTypeField();
  updateEventProposalSubmitState();
  if (focusOther && eventProposalTypeInput.value === "other") {
    window.setTimeout(() => eventProposalOtherTypeInput?.focus(), 180);
  }
}

function customSelectTargets() {
  return [...document.querySelectorAll("select")]
    .filter((select) => select.id !== "eventProposalTypeInput")
    .filter((select) => !select.multiple);
}

function optionLabel(option) {
  return option?.textContent?.trim() || option?.value || "";
}

function customSelectControlFor(select) {
  return select?.nextElementSibling?.matches?.("[data-custom-select-control]")
    ? select.nextElementSibling
    : null;
}

function selectForCustomControl(control) {
  const previous = control?.previousElementSibling;
  if (previous?.matches?.("select")) return previous;
  return control?.closest(".field, .settings-row, .settings-panel")?.querySelector("select") || null;
}

function closeCustomSelect(select) {
  const control = customSelectControlFor(select);
  const button = control?.querySelector("[data-custom-select-button]");
  const menu = control?.querySelector("[data-custom-select-menu]");
  if (!control || !button || !menu) return;
  menu.hidden = true;
  button.setAttribute("aria-expanded", "false");
}

function openCustomSelect(select) {
  const control = customSelectControlFor(select);
  const button = control?.querySelector("[data-custom-select-button]");
  const menu = control?.querySelector("[data-custom-select-menu]");
  if (!control || !button || !menu) return;
  if (select.disabled) return;
  closeAllCustomSelects(control);
  refreshCustomSelect(select);
  menu.hidden = false;
  button.setAttribute("aria-expanded", "true");
}

function closeAllCustomSelects(exceptControl = null) {
  customSelectTargets().forEach((select) => {
    const control = customSelectControlFor(select);
    if (control && control !== exceptControl) closeCustomSelect(select);
  });
}

function refreshCustomSelect(select) {
  const control = customSelectControlFor(select);
  if (!select || !control) return;
  const selectedOption = select.selectedOptions?.[0] || select.options?.[0];
  const text = control.querySelector("[data-custom-select-text]");
  const menu = control.querySelector("[data-custom-select-menu]");
  control.classList.toggle("is-disabled", select.disabled);
  const button = control.querySelector("[data-custom-select-button]");
  if (button) button.disabled = select.disabled;
  if (text) text.textContent = select.disabled && select.dataset.disabledLabel ? select.dataset.disabledLabel : optionLabel(selectedOption);
  if (!menu) return;
  menu.innerHTML = [...select.options].map((option) => `
    <button class="${option.selected ? "is-selected" : ""}" type="button" role="option" aria-selected="${String(option.selected)}" data-custom-select-option="${escapeHtml(option.value)}">
      ${escapeHtml(optionLabel(option))}
    </button>
  `).join("");
}

function enhanceCustomSelect(select) {
  if (!select || customSelectControlFor(select)) return;
  select.classList.add("event-type-native-select");
  const control = document.createElement("div");
  control.className = "event-type-select custom-compose-select";
  control.dataset.customSelectControl = select.id || "select";
  control.innerHTML = `
    <button class="event-type-select-button" type="button" aria-haspopup="listbox" aria-expanded="false" data-custom-select-button>
      <span data-custom-select-text></span>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m7 10 5 5 5-5" />
      </svg>
    </button>
    <div class="event-type-select-menu" role="listbox" hidden data-custom-select-menu></div>
  `;
  select.insertAdjacentElement("afterend", control);
  control.addEventListener("pointerdown", (event) => {
    const option = event.target.closest("[data-custom-select-option]");
    if (!option) return;
    if (chooseCustomSelectOption(option)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
  control.addEventListener("click", (event) => {
    const option = event.target.closest("[data-custom-select-option]");
    if (!option) return;
    if (chooseCustomSelectOption(option)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
  refreshCustomSelect(select);
}

function chooseCustomSelectOption(option) {
  const control = option?.closest("[data-custom-select-control]");
  const select = selectForCustomControl(control);
  if (!select || select.disabled) return false;
  select.value = option.dataset.customSelectOption || "";
  refreshCustomSelect(select);
  closeCustomSelect(select);
  select.dispatchEvent(new Event("change", { bubbles: true }));
  control.querySelector("[data-custom-select-button]")?.focus();
  return true;
}

function refreshPostComposeCustomSelects() {
  customSelectTargets().forEach(refreshCustomSelect);
}

function enhancePostComposeCustomSelects() {
  customSelectTargets().forEach(enhanceCustomSelect);
  refreshPostComposeCustomSelects();
}

function eventSearchText(event) {
  const requirementCircle = circleById(event.circleRequirement);
  return [
    event.title,
    event.organizer,
    requirementCircle?.name || "",
    event.body,
    event.badge,
    event.date,
    ...(event.highlights || []).flatMap(eventSearchVariants),
    ...(event.tags || []).flatMap(eventSearchVariants),
    ...(event.stats || []).flatMap((stat) => [stat.value, stat.label]),
  ].join(" ").toLowerCase();
}

function renderEventsList() {
  if (!eventsGrid || !eventsEmpty) return;
  const query = (eventsSearchInput?.value || "").trim().toLowerCase();
  const campaigns = getEventsPageCampaignList()
    .map((event, index) => ({ ...event, sourceIndex: event.eventKey || index }))
    .filter((event) => !query || eventSearchText(event).includes(query));

  eventsEmpty.hidden = campaigns.length > 0;
  eventsGrid.innerHTML = campaigns.map((event) => `
    <button class="events-card" type="button" data-event-open="${event.sourceIndex}">
      <span class="events-card-image">
        <img src="${event.image || vrchatImages.event}" alt="${event.title}" loading="lazy" />
      </span>
      <span class="events-card-copy">
        <span class="events-card-meta">
          <span>${event.badge}</span>
          <span>${event.date}</span>
          ${event.autoFeatured ? `<span class="events-card-auto">${currentLanguage === "en" ? "Auto-featured" : currentLanguage === "ko" ? "자동 게재" : "自動掲載"}</span>` : ""}
        </span>
        <strong>${event.title}</strong>
        <span class="events-card-body">${event.body}</span>
        <span class="events-card-tags">
          ${(event.tags?.length ? event.tags : (event.highlights || []).map(eventHashTag)).map((item) => `<small>${item}</small>`).join("")}
        </span>
      </span>
    </button>
  `).join("");
}

function renderEventsPage() {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  eventsView.hidden = false;
  renderEventsList();
  scrollPageTop();
}

function buildEventSlides(campaigns) {
  if (campaigns.length <= 1) return campaigns;
  return [
    { ...campaigns[campaigns.length - 1], sourceIndex: campaigns.length - 1 },
    ...campaigns.map((event, index) => ({ ...event, sourceIndex: index })),
    { ...campaigns[0], sourceIndex: 0 }
  ];
}

function handleInlineEventOpen(event, eventIndex) {
  markEventCarouselInteraction();
  if (ignoreEventSlideClick) {
    ignoreEventSlideClick = false;
    event?.preventDefault?.();
    return;
  }
  event?.preventDefault?.();
  openEventDetailPage(Number(eventIndex));
}

window.handleInlineEventOpen = handleInlineEventOpen;

function renderEventCarousel() {
  if (!eventCarouselTrack || !eventCarouselDots) return;
  const campaigns = getEventCampaignList();
  activeEventIndex = Math.min(activeEventIndex, Math.max(campaigns.length - 1, 0));
  const slides = buildEventSlides(campaigns);
  eventVisualIndex = campaigns.length > 1 ? activeEventIndex + 1 : activeEventIndex;
  eventLoopResetIndex = null;

  eventCarouselTrack.innerHTML = slides.map((event) => `
    <article class="event-slide" data-event-index="${event.sourceIndex ?? 0}" aria-roledescription="slide" aria-label="${event.title}">
      <a class="event-slide-card" href="#event/${event.sourceIndex ?? 0}" draggable="false" onclick="handleInlineEventOpen(event, ${event.sourceIndex ?? 0})">
        <div class="event-slide-copy">
          <div class="event-slide-meta">
            <span class="event-pill">${event.badge}</span>
            <span class="event-date">${event.date}</span>
          </div>
          <div>
            <h3>${event.title}</h3>
            <p>${event.body}</p>
          </div>
          <div class="event-slide-highlights">
            ${event.highlights.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </div>
        <div class="event-slide-side">
          ${event.image ? `
            <div class="event-slide-image-panel">
              <img src="${event.image}" alt="${event.title}" draggable="false" loading="lazy" />
            </div>
          ` : `
            <div class="event-slide-image-panel is-empty">
              <strong>${currentLanguage === "en" ? "Image slot" : currentLanguage === "ko" ? "이미지 영역" : "画像エリア"}</strong>
              <span>${currentLanguage === "en" ? "Add a campaign thumbnail here." : currentLanguage === "ko" ? "캠페인 썸네일을 배치하는 영역입니다." : "キャンペーンサムネイルを配置できます。"}</span>
            </div>
          `}
        </div>
      </a>
    </article>
  `).join("");

  eventCarouselDots.innerHTML = campaigns.map((event, index) => `
    <button class="event-dot${index === activeEventIndex ? " is-active" : ""}" type="button" data-event-dot="${index}" aria-label="${event.title}"></button>
  `).join("");

  updateEventCarouselPosition(0, eventVisualIndex, { immediate: true });
}

function updateEventCarouselPosition(offsetPx = 0, visualIndex = eventVisualIndex, options = {}) {
  if (!eventCarouselTrack || !eventCarouselDots) return;
  eventVisualIndex = visualIndex;
  if (options.immediate) {
    eventCarouselTrack.style.transition = "none";
  }
  eventCarouselTrack.style.transform = `translate3d(calc(-${visualIndex * 100}% + ${offsetPx}px), 0, 0)`;
  if (options.immediate) {
    void eventCarouselTrack.offsetWidth;
    eventCarouselTrack.style.transition = "";
  }
  if (options.skipDots) return;
  [...eventCarouselDots.querySelectorAll(".event-dot")].forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeEventIndex);
  });
}

function setEventCarouselMotion(duration = eventCarouselMotion.duration, easing = eventCarouselMotion.easing) {
  if (!eventCarouselTrack) return;
  eventCarouselTrack.style.setProperty("--event-carousel-duration", `${duration}ms`);
  eventCarouselTrack.style.setProperty("--event-carousel-easing", easing);
}

function cancelEventDragFrame() {
  if (!eventDragFrame) return;
  window.cancelAnimationFrame(eventDragFrame);
  eventDragFrame = 0;
}

function scheduleEventDragPosition() {
  if (!eventDragState || eventDragFrame) return;
  eventDragFrame = window.requestAnimationFrame(() => {
    eventDragFrame = 0;
    if (!eventDragState) return;
    const easedDeltaX = eventDragState.deltaX * 0.94;
    updateEventCarouselPosition(easedDeltaX, eventVisualIndex, { skipDots: true });
  });
}

function stopEventAutoplay() {
  if (!eventAutoplayTimer) return;
  window.clearTimeout(eventAutoplayTimer);
  eventAutoplayTimer = 0;
}

function markEventCarouselInteraction() {
  eventCarouselLastInteractionAt = Date.now();
  scheduleEventAutoplay();
}

function scheduleEventAutoplay() {
  stopEventAutoplay();
  const campaigns = getEventCampaignList();
  if (campaigns.length <= 1) return;
  const idleFor = Date.now() - eventCarouselLastInteractionAt;
  const delay = Math.max(eventAutoplayIdleDelay - idleFor, 0);
  eventAutoplayTimer = window.setTimeout(() => {
    if (eventDragState) {
      scheduleEventAutoplay();
      return;
    }
    const latestIdleFor = Date.now() - eventCarouselLastInteractionAt;
    if (latestIdleFor < eventAutoplayIdleDelay) {
      scheduleEventAutoplay();
      return;
    }
    eventCarouselLastInteractionAt = Date.now();
    goToEventSlide(activeEventIndex + 1, { reason: "autoplay" });
  }, delay);
}

function goToEventSlide(index, options = {}) {
  const campaigns = getEventCampaignList();
  if (!campaigns.length) return;
  const reason = options.reason || "button";
  const previousIndex = activeEventIndex;
  const normalizedIndex = (index + campaigns.length) % campaigns.length;
  activeEventIndex = normalizedIndex;
  eventLoopResetIndex = null;
  const motionDuration = document.documentElement.dataset.reducedMotion === "true"
    ? 420
    : reason === "autoplay"
      ? 1220
      : reason === "drag"
        ? 860
        : reason === "snap"
          ? 760
          : 980;
  setEventCarouselMotion(motionDuration);

  if (campaigns.length > 1 && previousIndex === 0 && index < 0) {
    eventLoopResetIndex = normalizedIndex;
    updateEventCarouselPosition(0, 0);
  } else if (campaigns.length > 1 && previousIndex === campaigns.length - 1 && index >= campaigns.length) {
    eventLoopResetIndex = normalizedIndex;
    updateEventCarouselPosition(0, campaigns.length + 1);
  } else {
    updateEventCarouselPosition(0, campaigns.length > 1 ? normalizedIndex + 1 : normalizedIndex);
  }
  scheduleEventAutoplay();
}

function startEventDrag(event) {
  const startLink = event.target.closest(".event-slide-card[href^='#event/']");
  if (!eventCarouselTrack || !startLink) return;
  if (event.pointerType === "mouse" && event.button !== 0) return;
  eventCarouselLastInteractionAt = Date.now();
  if (location.hash && !location.hash.startsWith("#event/")) {
    eventDetailReturnHash = location.hash;
  } else if (!location.hash) {
    eventDetailReturnHash = "";
  }
  stopEventAutoplay();
  eventDragState = {
    pointerId: event.pointerId,
    pointerType: event.pointerType,
    startX: event.clientX,
    startY: event.clientY,
    deltaX: 0,
    deltaY: 0,
    moved: false,
    width: eventCarouselTrack.parentElement?.clientWidth || 1,
    linkHref: startLink.getAttribute("href") || "",
    sourceIndex: Number(startLink.closest(".event-slide")?.dataset.eventIndex || activeEventIndex)
  };
  eventCarouselTrack.classList.add("is-dragging");
  eventCarouselTrack.setPointerCapture?.(event.pointerId);
}

function moveEventDrag(event) {
  if (!eventDragState || event.pointerId !== eventDragState.pointerId) return;
  eventDragState.deltaX = event.clientX - eventDragState.startX;
  eventDragState.deltaY = event.clientY - eventDragState.startY;
  const absX = Math.abs(eventDragState.deltaX);
  const absY = Math.abs(eventDragState.deltaY);
  if (absX > boardTapMoveTolerance || absY > boardTapMoveTolerance) {
    eventDragState.moved = true;
  }
  if (absY > boardTapMoveTolerance && absY > absX) return;
  scheduleEventDragPosition();
}

function endEventDrag(event) {
  if (!eventDragState || (event && event.pointerId !== eventDragState.pointerId)) return;
  const { deltaX, deltaY, moved, width, linkHref, sourceIndex } = eventDragState;
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  const threshold = Math.min(120, width * 0.18);
  const isTap = !moved && absX <= boardTapMoveTolerance && absY <= boardTapMoveTolerance;
  const isVerticalScroll = absY > boardTapMoveTolerance && absY >= absX;
  const isCanceled = event?.type === "pointercancel";
  const tappedElement = isTap && event
    ? document.elementFromPoint(event.clientX, event.clientY)?.closest?.('.event-slide-card[href^="#event/"]')
    : null;
  eventCarouselTrack?.classList.remove("is-dragging");
  cancelEventDragFrame();
  ignoreEventSlideClick = !isTap;
  if (isCanceled || isVerticalScroll) {
    eventDragState = null;
    setEventCarouselMotion(document.documentElement.dataset.reducedMotion === "true" ? 320 : 760);
    updateEventCarouselPosition(0, eventVisualIndex);
    markEventCarouselInteraction();
    return;
  }
  if (isTap) {
    eventDragState = null;
    markEventCarouselInteraction();
    const matchedIndex = tappedElement?.getAttribute("href")?.match(/#event\/(\d+)$/)?.[1] || linkHref.match(/#event\/(\d+)$/)?.[1];
    openEventDetailPage(Number(matchedIndex || sourceIndex || activeEventIndex));
    return;
  }
  const targetIndex = absX > threshold ? activeEventIndex + (deltaX < 0 ? 1 : -1) : activeEventIndex;
  eventDragState = null;
  markEventCarouselInteraction();
  goToEventSlide(targetIndex, { reason: absX > threshold ? "drag" : "snap" });
}

function handleEventTrackTransitionEnd(event) {
  if (!eventCarouselTrack || event.target !== eventCarouselTrack || event.propertyName !== "transform") return;
  if (eventLoopResetIndex == null) return;
  const resetIndex = eventLoopResetIndex;
  eventLoopResetIndex = null;
  eventCarouselTrack.classList.add("is-dragging");
  updateEventCarouselPosition(0, resetIndex + 1);
  void eventCarouselTrack.offsetWidth;
  eventCarouselTrack.classList.remove("is-dragging");
}

function eventByIndex(index) {
  const key = String(index || "");
  if (key.startsWith("official-")) {
    return getOfficialEventCampaignList()[Number(key.replace("official-", ""))] || null;
  }
  if (key.startsWith("community-")) {
    const proposalId = Number(key.replace("community-", ""));
    return getCommunityEventCampaignList().find((event) => Number(event.proposalId) === proposalId) || null;
  }
  return getEventCampaignList()[index] || null;
}

function renderEventDetailOrganizer(organizerName) {
  if (!eventDetailOrganizer) return;
  eventDetailOrganizer.innerHTML = "";
  const safeName = organizerName || t("officialOrganizer");
  const slug = slugify(safeName);
  if (profileNameBySlug(slug)) {
    const button = document.createElement("button");
    button.className = "event-organizer-link";
    button.type = "button";
    button.dataset.profile = slug;
    button.textContent = safeName;
    eventDetailOrganizer.append(button);
    return;
  }
  eventDetailOrganizer.textContent = safeName;
}

function renderEventCircleRequirement(event) {
  if (!eventCircleRequirement || !eventCircleRequirementBody || !eventCircleRequirementButton) return;
  const circle = circleById(event.circleRequirement);
  if (!circle) {
    eventCircleRequirement.hidden = true;
    eventCircleRequirementButton.removeAttribute("data-circle-open");
    return;
  }
  const joined = joinedCircleIds.has(circle.id);
  eventCircleRequirement.hidden = false;
  eventCircleRequirementBody.textContent = joined
    ? `${circle.name}に参加中なので、このイベントの参加条件を満たしています。`
    : `このイベントは ${circle.name} への参加が条件です。参加すると限定投稿やイベント告知も見られます。`;
  eventCircleRequirementButton.textContent = joined ? "サークル詳細を見る" : "サークルに参加する";
  eventCircleRequirementButton.dataset.circleOpen = circle.id;
}

function renderEventRelatedList(event) {
  if (!eventRelatedList) return;
  const organizer = event.organizer || t("officialOrganizer");
  const currentKey = event.eventKey || (event.proposalId ? `community-${event.proposalId}` : "");
  const allEvents = [...getOfficialEventCampaignList(), ...getCommunityEventCampaignList()];
  const relatedByOrganizer = allEvents.filter((candidate) => {
    const candidateKey = candidate.eventKey || (candidate.proposalId ? `community-${candidate.proposalId}` : "");
    if (currentKey && candidateKey === currentKey) return false;
    if (!currentKey && candidate.title === event.title && candidate.date === event.date) return false;
    return (candidate.organizer || t("officialOrganizer")) === organizer;
  });
  const fallback = allEvents.filter((candidate) => {
    const candidateKey = candidate.eventKey || (candidate.proposalId ? `community-${candidate.proposalId}` : "");
    if (currentKey && candidateKey === currentKey) return false;
    if (!currentKey && candidate.title === event.title && candidate.date === event.date) return false;
    if (relatedByOrganizer.includes(candidate)) return false;
    return candidate.eventKind === event.eventKind || candidate.eventKind === "community";
  });
  const cards = [...relatedByOrganizer, ...fallback].slice(0, 3);
  if (!cards.length) {
    eventRelatedList.innerHTML = `
      <article class="event-related-empty">
        <strong>${currentLanguage === "en" ? "No other events yet" : currentLanguage === "ko" ? "다른 이벤트는 아직 없습니다" : "他のイベントはまだありません"}</strong>
        <p>${currentLanguage === "en" ? "When this organizer opens another event, it will appear here." : currentLanguage === "ko" ? "같은 주최자의 다른 이벤트가 열리면 여기에 표시됩니다." : "同じ主催者の別イベントが増えたらここに表示されます。"}</p>
      </article>
    `;
    return;
  }
  eventRelatedList.innerHTML = cards.map((candidate) => {
    const key = candidate.eventKey || (candidate.proposalId ? `community-${candidate.proposalId}` : "");
    const href = key ? `#event/${key}` : "#events";
    return `
      <a class="event-related-card" href="${escapeHtml(href)}" data-event-related="${escapeHtml(key)}">
        <span class="event-related-thumb">
          <img src="${escapeHtml(candidate.image || vrchatImages.event)}" alt="" draggable="false" />
        </span>
        <span class="event-related-copy">
          <small>${escapeHtml(candidate.badge || "Event")}</small>
          <strong>${escapeHtml(candidate.title)}</strong>
          <em>${escapeHtml(candidate.date)} / ${escapeHtml(candidate.organizer || t("officialOrganizer"))}</em>
        </span>
      </a>
    `;
  }).join("");
}

function renderEventDetailPage(index) {
  const event = eventByIndex(index);
  if (!event || !eventDetailView) {
    showFeed();
    return;
  }
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  eventDetailView.hidden = false;
  if (eventDetailHero) {
    eventDetailHero.classList.toggle("is-glass", !event.image);
    if (event.image) eventDetailHero.style.setProperty("--event-detail-bg", `url('${event.image}')`);
    else eventDetailHero.style.removeProperty("--event-detail-bg");
  }
  if (eventDetailTitle) eventDetailTitle.textContent = event.title;
  if (eventDetailLead) eventDetailLead.textContent = event.body;
  if (eventDetailBody) eventDetailBody.textContent = event.body;
  if (eventDetailDate) eventDetailDate.textContent = event.date;
  if (eventDetailStatus) eventDetailStatus.textContent = event.badge;
  renderEventDetailOrganizer(event.organizer || t("officialOrganizer"));
  renderEventCircleRequirement(event);
  if (eventDetailHighlights) eventDetailHighlights.innerHTML = event.highlights.map((item) => `<span>${item}</span>`).join("");
  if (eventDetailStats) {
    eventDetailStats.innerHTML = event.stats.map((stat) => `
      <article>
        <strong>${stat.value}</strong>
        <p>${stat.label}</p>
      </article>
    `).join("");
  }
  renderEventRelatedList(event);
  scrollPageTop();
}

function openEventDetailPage(index) {
  if (location.hash && !location.hash.startsWith("#event/")) {
    eventDetailReturnHash = location.hash;
  } else if (!location.hash) {
    eventDetailReturnHash = "";
  }
  location.hash = `event/${index}`;
  renderEventDetailPage(index);
}

function returnFromEventDetail() {
  const targetHash = eventDetailReturnHash;
  eventDetailReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function openEventsPage() {
  closeAccountMenu();
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#events") {
    eventsReturnHash = location.hash;
  } else if (!location.hash) {
    eventsReturnHash = "";
  }
  location.hash = "events";
  renderEventsPage();
}

function returnFromEvents() {
  const targetHash = eventsReturnHash;
  eventsReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function openEventProposalDialog() {
  if (!eventProposalDialog || !eventProposalForm) return;
  closeAccountMenu();
  eventProposalForm.reset();
  pendingEventProposalImage = "";
  if (eventProposalImagePreview) eventProposalImagePreview.hidden = true;
  if (eventProposalImagePreviewImg) eventProposalImagePreviewImg.removeAttribute("src");
  if (eventProposalTypeInput) eventProposalTypeInput.value = "showcase";
  setEventProposalType("showcase", { focusOther: false });
  syncEventProposalOrganizer();
  syncEventProposalContact();
  updateEventProposalSubmitState();
  showModalElement(eventProposalDialog);
  window.setTimeout(() => eventProposalTitleInput?.focus(), 140);
}

function closeEventProposalDialog() {
  if (!eventProposalDialog) return;
  closeEventProposalTypeMenu();
  closeModalElement(eventProposalDialog);
}

function updateEventProposalImagePreview(source) {
  pendingEventProposalImage = source || "";
  if (!eventProposalImagePreview || !eventProposalImagePreviewImg) return;
  eventProposalImagePreview.hidden = !pendingEventProposalImage;
  if (pendingEventProposalImage) {
    eventProposalImagePreviewImg.src = pendingEventProposalImage;
  } else {
    eventProposalImagePreviewImg.removeAttribute("src");
  }
}

async function loadEventProposalImage(file) {
  if (!file || !file.type.startsWith("image/")) {
    updateEventProposalImagePreview("");
    updateEventProposalSubmitState();
    return;
  }
  const image = await readImageFile(file);
  if (image) {
    updateEventProposalImagePreview(image.src);
    updateEventProposalSubmitState();
  }
}

function syncEventProposalOtherTypeField() {
  const isOther = eventProposalTypeInput?.value === "other";
  if (eventProposalOtherTypeField) eventProposalOtherTypeField.hidden = !isOther;
  eventProposalOtherTypeField?.classList.toggle("is-required", Boolean(isOther));
  if (eventProposalOtherTypeInput) {
    eventProposalOtherTypeInput.required = isOther;
    eventProposalOtherTypeInput.disabled = !isOther;
    if (!isOther) {
      eventProposalOtherTypeInput.value = "";
      eventProposalOtherTypeInput.setCustomValidity("");
      eventProposalOtherTypeInput.closest(".field")?.classList.remove("is-trim-invalid");
    }
  }
}

function isTrimRequiredField(field) {
  if (!field?.matches?.("input[required], textarea[required]")) return false;
  if (field.matches("input[type='file'], input[type='checkbox'], input[type='radio']")) return false;
  return true;
}

function syncTrimRequiredField(field) {
  if (!isTrimRequiredField(field)) return true;
  const isWhitespaceOnly = field.value.length > 0 && !field.value.trim();
  field.setCustomValidity(isWhitespaceOnly ? "空白だけでは入力できません。" : "");
  field.closest(".field")?.classList.toggle("is-trim-invalid", isWhitespaceOnly);
  return !isWhitespaceOnly;
}

function syncTrimRequiredFields(root = document) {
  root.querySelectorAll?.("input[required], textarea[required]").forEach(syncTrimRequiredField);
  return !root.querySelector?.("input:invalid, textarea:invalid, select:invalid");
}

function setupTrimRequiredValidation(root = document) {
  root.querySelectorAll?.("input[required], textarea[required]").forEach((field) => {
    field.addEventListener("input", () => syncTrimRequiredField(field));
    field.addEventListener("change", () => syncTrimRequiredField(field));
    syncTrimRequiredField(field);
  });
}

function currentUserDisplayName() {
  return myProfile?.displayName?.trim() || "You";
}

function currentUserEmail() {
  return myProfile?.email?.trim() || "you@example.com";
}

function normalizeUserHandle(value = "") {
  const body = String(value).trim().replace(/^@+/, "").toLowerCase().replace(/[^a-z0-9._-]/g, "");
  return body ? `@${body.slice(0, 31)}` : "";
}

function enforceUserHandlePrefix() {
  if (!editUserHandle) return "";
  const normalized = normalizeUserHandle(editUserHandle.value);
  editUserHandle.value = normalized || "@";
  if (editUserHandle.selectionStart === 0) {
    editUserHandle.setSelectionRange(1, 1);
  }
  return editUserHandle.value;
}

function currentUserHandle() {
  return currentAccountRecord()?.handle || "@you";
}

function userHandleExists(handle, ignoreAccountId = activeAccountId) {
  const normalized = normalizeUserHandle(handle);
  if (!normalized) return false;
  return userAccounts.some((account) => account.id !== ignoreAccountId && normalizeUserHandle(account.handle) === normalized);
}

function updateProfileHandleState() {
  if (!editUserHandle || !editProfileSubmit) return;
  const normalized = enforceUserHandlePrefix();
  const invalid = !normalized || normalized.length < 3;
  const duplicate = !invalid && userHandleExists(normalized);
  editUserHandle.classList.toggle("is-invalid", invalid || duplicate);
  if (editUserHandleError) {
    editUserHandleError.hidden = !(invalid || duplicate);
    editUserHandleError.textContent = invalid
      ? "@の後ろにユーザーIDを入力してください。"
      : duplicate
        ? "このユーザーIDは既に使われています。"
        : "";
  }
  editProfileSubmit.disabled = invalid || duplicate;
}

function syncEventProposalOrganizer() {
  if (!eventProposalOrganizerInput) return;
  eventProposalOrganizerInput.value = currentUserDisplayName();
  syncTrimRequiredField(eventProposalOrganizerInput);
}

function syncEventProposalContact() {
  if (!eventProposalContactInput) return;
  eventProposalContactInput.value = currentUserEmail();
  syncTrimRequiredField(eventProposalContactInput);
}

function updateEventProposalSubmitState() {
  if (!eventProposalForm || !eventProposalSubmit) return;
  syncEventProposalOtherTypeField();
  syncEventProposalOrganizer();
  syncEventProposalContact();
  syncTrimRequiredFields(eventProposalForm);
  eventProposalSubmit.disabled = !eventProposalForm.checkValidity();
}

function submitEventProposal(event) {
  event.preventDefault();
  syncTrimRequiredFields(eventProposalForm);
  if (!eventProposalForm?.reportValidity()) {
    updateEventProposalSubmitState();
    return;
  }
  const proposalTitle = eventProposalTitleInput?.value?.trim();
  if (!proposalTitle) return;
  communityEventProposals = [
    {
      id: Date.now(),
      title: proposalTitle,
      type: eventProposalTypeInput?.value || "showcase",
      customType: eventProposalTypeInput?.value === "other" ? eventProposalOtherTypeInput?.value?.trim() || "" : "",
      organizer: eventProposalOrganizerInput?.value?.trim() || myProfile?.displayName || "You",
      window: t("eventTimingNegotiable"),
      summary: eventProposalSummaryInput?.value?.trim() || "",
      status: "pending",
      participants: 0,
      image: pendingEventProposalImage || vrchatImages.event,
      submittedAt: new Date().toISOString().slice(0, 10),
      mailTo: "events@vrc-sns.mock",
      support: eventProposalSupportInput?.value?.trim() || ""
    },
    ...communityEventProposals
  ];
  renderEventProposalList();
  closeEventProposalDialog();
  showProfileCopyToast(t("eventProposalSuccess"));
}

function updateSettingsPanelLanguage() {
  setText(".settings-heading h1", "appSettings");
  setText(".settings-heading p:not(.eyebrow)", "settingsLead");

  const notificationPanel = settingsView.querySelector("[aria-labelledby='settingsNotificationsTitle']");
  if (notificationPanel) {
    setText(notificationPanel.querySelector("h2"), "settingsNotificationsTitle");
    const rows = [...notificationPanel.querySelectorAll(".settings-row")];
    [[rows[0], "requestNotifications", "requestNotificationsHelp"], [rows[1], "chatNotifications", "chatNotificationsHelp"], [rows[2], "workReactions", "workReactionsHelp"]].forEach(([row, title, help]) => {
      setText(row?.querySelector("strong"), title);
      setText(row?.querySelector("small"), help);
    });
  }

  const displayPanel = settingsView.querySelector("[aria-labelledby='settingsDisplayTitle']");
  if (displayPanel) {
    setText(displayPanel.querySelector("h2"), "settingsDisplayTitle");
    const fields = [...displayPanel.querySelectorAll(".settings-field")];
    setText(fields[0]?.querySelector("span"), "language");
    setText(fields[1]?.querySelector("span"), "theme");
    setSelectOptionTexts(fields[1]?.querySelector("select"), ["systemTheme", "light", "dark"]);
    const rows = [...displayPanel.querySelectorAll(".settings-row")];
    [[rows[0], "reducedMotion", "reducedMotionHelp"], [rows[1], "highContrast", "highContrastHelp"]].forEach(([row, title, help]) => {
      setText(row?.querySelector("strong"), title);
      setText(row?.querySelector("small"), help);
    });
  }

  const privacyPanel = settingsView.querySelector("[aria-labelledby='settingsPrivacyTitle']");
  if (privacyPanel) {
    setText(privacyPanel.querySelector("h2"), "settingsPrivacyTitle");
    setText(privacyPanel.querySelector(".settings-field span"), "profileVisibility");
    const rows = [...privacyPanel.querySelectorAll(".settings-row")];
    [[rows[0], "externalLinkWarning", "externalLinkWarningHelp"], [rows[1], "onlineStatus", "onlineStatusHelp"]].forEach(([row, title, help]) => {
      setText(row?.querySelector("strong"), title);
      setText(row?.querySelector("small"), help);
    });
    setText(privacyPanel.querySelector(".settings-wide-button"), "muteBlockManage");
  }

  const contentPanel = settingsView.querySelector("[aria-labelledby='settingsContentTitle']");
  if (contentPanel) {
    setText(contentPanel.querySelector("h2"), "settingsContentTitle");
    const rows = [...contentPanel.querySelectorAll(".settings-row")];
    [[rows[0], "showR18Content", "showR18ContentHelp"], [rows[1], "showGoreContent", "showGoreContentHelp"]].forEach(([row, title, help]) => {
      setText(row?.querySelector("strong"), title);
      setText(row?.querySelector("small"), help);
    });
    const field = contentPanel.querySelector(".settings-field");
    setText(field?.querySelector("span"), "sensitiveReveal");
    setSelectOptionTexts(field?.querySelector("select"), ["sensitiveBlur", "sensitiveVisible"]);
  }

  const accountPanel = settingsView.querySelector("[aria-labelledby='settingsAccountTitle']");
  if (accountPanel) {
    setText(accountPanel.querySelector("h2"), "account");
    const stripeField = accountPanel.querySelector(".settings-field");
    setText(stripeField?.querySelector("span"), "stripeConnect");
    setSelectOptionTexts(stripeField?.querySelector("select"), ["stripePlanned", "unset"]);
    const buttons = [...accountPanel.querySelectorAll(".settings-account-actions button")];
    ["changeEmail", "changePassword", "logout", "deleteAccount"].forEach((key, index) => setText(buttons[index], key));
  }
}

function applyLanguage({ rerender = false } = {}) {
  if (!translations[currentLanguage]) currentLanguage = "ja";
  document.documentElement.lang = currentLanguage;
  localStorage.setItem("vrc-sns-language", currentLanguage);
  if (settingsLanguage) settingsLanguage.value = currentLanguage;
  renderAccountSwitcher();

  setAttr(searchInput, "placeholder", "searchPlaceholder");
  if (missionButton) missionButton.textContent = currentLanguage === "en" ? "Service" : currentLanguage === "ko" ? "서비스 설명" : "サービス説明";
  setAttr(themeToggle, "aria-label", "toggleTheme");
  setTooltip(themeToggle, "toggleTheme");
  setAttr(likedPostsButton, "aria-label", "likedPostsShortcut");
  setTooltip(likedPostsButton, "likedPostsShortcut");
  setAttr(bookmarkFoldersButton, "aria-label", "bookmarkFoldersShortcut");
  setTooltip(bookmarkFoldersButton, "bookmarkFoldersShortcut");
  setText("#bookmarkFolderTitle", currentLanguage === "en" ? "Choose a folder" : currentLanguage === "ko" ? "저장할 폴더 선택" : "保存先フォルダを選ぶ");
  setText("#bookmarkFolderSave", currentLanguage === "en" ? "Add to this folder" : currentLanguage === "ko" ? "이 폴더에 추가" : "このフォルダに追加");
  setText("#bookmarkFolderCreateTitle", currentLanguage === "en" ? "Create new folder" : currentLanguage === "ko" ? "새 폴더 만들기" : "新しいフォルダを作成");
  setText(".bookmark-folder-create-lead", currentLanguage === "en" ? "Enter the folder name to add it to the destination list." : currentLanguage === "ko" ? "저장 위치 목록에 추가할 폴더 이름을 입력해 주세요." : "保存先一覧に追加するフォルダ名を入力してください。");
  setText("#bookmarkFolderCreateDialog .field span", currentLanguage === "en" ? "Folder name" : currentLanguage === "ko" ? "폴더명" : "フォルダ名");
  setText("#bookmarkFolderCreate", currentLanguage === "en" ? "Create" : currentLanguage === "ko" ? "만들기" : "作成する");
  if (bookmarkFolderName) {
    bookmarkFolderName.placeholder = currentLanguage === "en" ? "Example: Photo refs / Avatar notes" : currentLanguage === "ko" ? "예: 촬영 참고 / 개변 메모" : "例: 撮影参考 / 改変メモ";
  }
  setAttr(circlePageButton, "aria-label", "circles");
  setTooltip(circlePageButton, "circles");
  if (eventPageButton) {
    eventPageButton.setAttribute("aria-label", t("events"));
    setTooltip(eventPageButton, t("events"), { raw: true });
  }
  setAttr(requestManagerButton, "aria-label", "requestManager");
  setTooltip(requestManagerButton, "requestManager");
  if (myRequestsButton) {
    const label = currentLanguage === "en" ? "My requests" : currentLanguage === "ko" ? "내 의뢰" : "マイリクエスト";
    myRequestsButton.setAttribute("aria-label", label);
    setTooltip(myRequestsButton, label, { raw: true });
  }
  setAttr(notificationButton, "aria-label", "notifications");
  setTooltip(notificationButton, "notifications");
  setAttr(notificationBadge, "aria-label", "unreadNotifications");
  setAttr(avatarButton, "aria-label", "account");
  setTooltip(avatarButton, "account");
  setText("#accountMenuProfile span", "myPage");
  if (accountMenuSubscriptions) accountMenuSubscriptions.querySelector("span").textContent = currentLanguage === "en" ? "Memberships" : currentLanguage === "ko" ? "멤버십" : "メンバーシップ";
  if (accountMenuMyRequests) accountMenuMyRequests.querySelector("span").textContent = currentLanguage === "en" ? "My requests" : currentLanguage === "ko" ? "내 의뢰" : "マイリクエスト";
  if (accountMenuService) accountMenuService.querySelector("span").textContent = currentLanguage === "en" ? "Service guide" : currentLanguage === "ko" ? "서비스 설명" : "サービス説明";
  if (accountMenuAdmin) accountMenuAdmin.querySelector("span").textContent = currentLanguage === "en" ? "Operations" : currentLanguage === "ko" ? "운영 관리" : "運営管理";
  if (accountMenuSpecs) accountMenuSpecs.querySelector("span").textContent = currentLanguage === "en" ? "Screen specs" : currentLanguage === "ko" ? "화면 사양" : "画面仕様";
  setText("#accountMenuSettings span", "appSettings");
  if (accountMenuTheme) accountMenuTheme.querySelector("span").textContent = currentLanguage === "en" ? "Toggle light / dark" : currentLanguage === "ko" ? "라이트 / 다크 전환" : "ライト / ダーク切替";
  setText("#accountMenuLogout span", "logout");
  const mobileMenuLabels = {
    home: currentLanguage === "en" ? "Home" : currentLanguage === "ko" ? "홈" : "ホーム",
    theme: currentLanguage === "en" ? "Night mode" : currentLanguage === "ko" ? "나이트 모드" : "ナイトモード",
    likes: currentLanguage === "en" ? "Liked posts" : currentLanguage === "ko" ? "좋아요" : "いいね",
    bookmarks: currentLanguage === "en" ? "Bookmarks" : currentLanguage === "ko" ? "북마크" : "ブックマーク",
    subscriptions: currentLanguage === "en" ? "Memberships" : currentLanguage === "ko" ? "멤버십" : "メンバーシップ",
    circles: t("circles"),
    requests: currentLanguage === "en" ? "Requests" : currentLanguage === "ko" ? "의뢰 확인" : "依頼確認",
    "my-requests": currentLanguage === "en" ? "My requests" : currentLanguage === "ko" ? "내 의뢰" : "マイリクエスト",
    events: t("events"),
    notifications: currentLanguage === "en" ? "Notifications" : currentLanguage === "ko" ? "알림" : "通知",
  };
  Object.entries(mobileMenuLabels).forEach(([action, label]) => {
    const target = accountMenu?.querySelector(`[data-mobile-menu-action="${action}"] span`);
    if (target) target.textContent = label;
  });
  if (floatingPostHint) floatingPostHint.textContent = currentLanguage === "en" ? "Hold for drafts" : currentLanguage === "ko" ? "길게 눌러 초안 보기" : "長押しで下書き";
  const floatingDraftsLabel = document.querySelector("#floatingDraftsButton span");
  const floatingNewPostLabel = document.querySelector("#floatingNewPostButton span");
  if (floatingDraftsLabel) floatingDraftsLabel.textContent = currentLanguage === "en" ? "Drafts" : currentLanguage === "ko" ? "초안" : "下書き";
  if (floatingNewPostLabel) floatingNewPostLabel.textContent = currentLanguage === "en" ? "New post" : currentLanguage === "ko" ? "새 게시물" : "新規投稿";
  if (composeDraftListTitle) composeDraftListTitle.textContent = currentLanguage === "en" ? "Draft list" : currentLanguage === "ko" ? "초안 목록" : "下書きリスト";
  if (composeDraftListClose) composeDraftListClose.textContent = currentLanguage === "en" ? "Close" : currentLanguage === "ko" ? "닫기" : "閉じる";
  setText("#eventBannerEyebrow", currentLanguage === "en" ? "Now live" : currentLanguage === "ko" ? "지금 진행 중" : "Now live");
  setText("#eventBannerHeading", "Featured Events");
  if (eventPrev) eventPrev.setAttribute("aria-label", currentLanguage === "en" ? "Previous event" : currentLanguage === "ko" ? "이전 이벤트" : "前のイベント");
  if (eventNext) eventNext.setAttribute("aria-label", currentLanguage === "en" ? "Next event" : currentLanguage === "ko" ? "다음 이벤트" : "次のイベント");
  if (missionCardButton) {
    missionCardButton.querySelector("strong").textContent = currentLanguage === "en" ? "Service guide" : currentLanguage === "ko" ? "서비스 설명" : "サービス説明";
    missionCardButton.querySelector("span").textContent = currentLanguage === "en" ? "See what this service does before opening Our Mission." : currentLanguage === "ko" ? "Our Mission으로 가기 전에 이 서비스가 무엇을 하는지 먼저 봅니다." : "Our Mission に進む前に、このサービスで何ができるかを見る";
  }
  renderEventCarousel();
  scheduleEventAutoplay();
  setText("#serviceEyebrow", currentLanguage === "en" ? "Service Guide" : currentLanguage === "ko" ? "서비스 설명" : "サービス説明");
  setText("#serviceHeroTitle", currentLanguage === "en" ? "The shortest route for testing without getting lost." : currentLanguage === "ko" ? "테스트할 때 헤매지 않는 최단 루트." : "テストで迷わないための最短ルート。");
  setText("#serviceHeroLead", currentLanguage === "en" ? "First-time testers only need to try three flows: viewer, client, and creator. This guide shows what to press and what to check on each screen." : currentLanguage === "ko" ? "처음 쓰는 사람은 보는 사람, 의뢰하는 사람, 크리에이터의 세 흐름만 먼저 확인하면 전체상이 잡힙니다. 각 화면에서 무엇을 누르고 무엇을 보면 되는지 정리했습니다." : "初めて触る人は、まず「見る人」「依頼する人」「クリエイター」の3つの流れだけ試せば全体像がつかめます。各画面で押す場所と確認するポイントをまとめました。");
  setText("#servicePanelStep1", currentLanguage === "en" ? "For viewers" : currentLanguage === "ko" ? "보는 사람" : "For viewers");
  setText("#servicePanelStep2", currentLanguage === "en" ? "For clients" : currentLanguage === "ko" ? "의뢰자" : "For clients");
  setText("#servicePanelStep3", currentLanguage === "en" ? "For creators" : currentLanguage === "ko" ? "크리에이터" : "For creators");
  setText("#servicePanelTitle1", currentLanguage === "en" ? "Find and save works" : currentLanguage === "ko" ? "작품 찾고 저장" : "作品を見つけて保存");
  setText("#servicePanelTitle2", currentLanguage === "en" ? "Send a request" : currentLanguage === "ko" ? "의뢰 내용 보내기" : "依頼内容を送信");
  setText("#servicePanelTitle3", currentLanguage === "en" ? "Accept and manage work" : currentLanguage === "ko" ? "의뢰 수락과 진행 관리" : "依頼を受けて進行管理");
  setText("#servicePillarLabel1", currentLanguage === "en" ? "Route 1" : currentLanguage === "ko" ? "루트 1" : "Route 1");
  setText("#servicePillarLabel2", currentLanguage === "en" ? "Route 2" : currentLanguage === "ko" ? "루트 2" : "Route 2");
  setText("#servicePillarLabel3", currentLanguage === "en" ? "Route 3" : currentLanguage === "ko" ? "루트 3" : "Route 3");
  setText("#servicePillarTitle1", currentLanguage === "en" ? "Open one post first" : currentLanguage === "ko" ? "먼저 게시물 하나 열기" : "まず投稿を1つ開く");
  setText("#servicePillarBody1", currentLanguage === "en" ? "Open a thumbnail on home and check save, follow, share, tag search, and profile navigation." : currentLanguage === "ko" ? "홈에서 썸네일을 눌러 저장, 팔로우, 공유, 태그 검색, 프로필 이동을 확인합니다." : "ホームでサムネイルを押して、保存、フォロー、共有、タグ検索、プロフィール遷移ができるか確認します。");
  setText("#servicePillarTitle2", currentLanguage === "en" ? "Fill in a request page" : currentLanguage === "ko" ? "의뢰 페이지 입력하기" : "依頼ページで内容を入れる");
  setText("#servicePillarBody2", currentLanguage === "en" ? "Move from an open commission card to the request page, then try amount, desired date, brief, and pre-payment review." : currentLanguage === "ko" ? "의뢰 접수 카드에서 의뢰 페이지로 이동해 금액, 희망 납기, 의뢰 내용, 결제 전 확인을 테스트합니다." : "依頼受付中のカードから依頼ページへ進み、金額、希望納期、依頼内容、支払い前確認まで試します。");
  setText("#servicePillarTitle3", currentLanguage === "en" ? "Advance request status" : currentLanguage === "ko" ? "의뢰 상태 진행하기" : "依頼管理で状態を進める");
  setText("#servicePillarBody3", currentLanguage === "en" ? "Open request manager and check pending, accepted, in progress, review waiting, and completed states." : currentLanguage === "ko" ? "의뢰 관리에서 미승낙, 승낙, 진행 중, 평가 대기, 완료 상태를 확인합니다." : "依頼管理を開いて、未承諾、承諾済、進行中、評価待ち、完了までの見え方を確認します。");
  setText("#serviceTestRouteEyebrow", currentLanguage === "en" ? "Test routes" : currentLanguage === "ko" ? "테스트 루트" : "Test routes");
  setText("#serviceTestRouteTitle", currentLanguage === "en" ? "Try it in this order" : currentLanguage === "ko" ? "이 순서로 만져보면 이해하기 쉽습니다" : "この順番で触ると分かりやすい");
  setText("#serviceRouteTitle1", currentLanguage === "en" ? "Test as a viewer" : currentLanguage === "ko" ? "보는 사람으로 테스트" : "見る人として試す");
  setText("#serviceRouteStep1A", currentLanguage === "en" ? "Check the picked event banner on home" : currentLanguage === "ko" ? "홈에서 픽업 이벤트를 확인" : "ホームでピックアップイベントを見る");
  setText("#serviceRouteStep1B", currentLanguage === "en" ? "Open a post and try save, like, and share" : currentLanguage === "ko" ? "게시물을 열어 저장, 좋아요, 공유를 테스트" : "投稿を開いて保存、いいね、共有を試す");
  setText("#serviceRouteStep1C", currentLanguage === "en" ? "Move through tags and profile links" : currentLanguage === "ko" ? "태그와 프로필에서 다른 화면으로 이동" : "タグやプロフィールから別画面へ移動する");
  setText("#serviceRouteTitle2", currentLanguage === "en" ? "Test as a client" : currentLanguage === "ko" ? "의뢰자로 테스트" : "依頼者として試す");
  setText("#serviceRouteStep2A", currentLanguage === "en" ? "Open a request page from an open commission post" : currentLanguage === "ko" ? "의뢰 접수 게시물에서 의뢰 페이지로 이동" : "依頼受付中の投稿から依頼ページへ進む");
  setText("#serviceRouteStep2B", currentLanguage === "en" ? "Enter amount, desired date, brief, and references" : currentLanguage === "ko" ? "금액, 희망 납기, 의뢰 내용, 참고 자료 입력" : "金額、希望納期、依頼内容、参考資料を入れる");
  setText("#serviceRouteStep2C", currentLanguage === "en" ? "Confirm that the pre-payment review summarizes it" : currentLanguage === "ko" ? "결제 전 확인 화면에 내용이 정리되는지 확인" : "支払い前確認で内容がまとまるか見る");
  setText("#serviceRouteTitle3", currentLanguage === "en" ? "Test as a creator" : currentLanguage === "ko" ? "크리에이터로 테스트" : "クリエイターとして試す");
  setText("#serviceRouteStep3A", currentLanguage === "en" ? "Open a pending request in request manager" : currentLanguage === "ko" ? "의뢰 관리에서 미승낙 의뢰를 열기" : "依頼管理で未承諾の依頼を開く");
  setText("#serviceRouteStep3B", currentLanguage === "en" ? "Check hold-to-accept, start work, delivery, and review" : currentLanguage === "ko" ? "길게 눌러 승인, 작업 시작, 납품, 평가 흐름 확인" : "長押し承認、作業開始、納品、評価の流れを見る");
  setText("#serviceRouteStep3C", currentLanguage === "en" ? "Also test chat attachments, ZIP warning, and report flow" : currentLanguage === "ko" ? "채팅 첨부, ZIP 경고, 신고 동선도 확인" : "チャット添付、ZIP警告、通報導線も確認する");
  setText("#onboardingTitle", currentLanguage === "en" ? "Spend three minutes here first" : currentLanguage === "ko" ? "먼저 3분만 이 순서로 만져보세요" : "まずは3分だけ、この順番で触ってください");
  setText("#onboardingLead", currentLanguage === "en" ? "Before checking every feature, try the basic viewer, client, and creator flows. It makes the mock much easier to understand." : currentLanguage === "ko" ? "세부 기능을 보기 전에 보는 사람, 의뢰자, 크리에이터의 기본 동선만 확인하면 이해하기 쉽습니다." : "細かい機能を見る前に、見る人、依頼する人、クリエイターの基本導線だけ確認すると迷いにくいです。");
  setText("#onboardingStepTitle1", currentLanguage === "en" ? "Open a post" : currentLanguage === "ko" ? "게시물 열기" : "投稿を開く");
  setText("#onboardingStepBody1", currentLanguage === "en" ? "Tap an image on home and try save, follow, share, and tag search." : currentLanguage === "ko" ? "홈의 이미지를 눌러 저장, 팔로우, 공유, 태그 검색을 테스트합니다." : "ホームの画像を押して、保存、フォロー、共有、タグ検索を試します。");
  setText("#onboardingStepTitle2", currentLanguage === "en" ? "Check trust" : currentLanguage === "ko" ? "신뢰 확인" : "信用を見る");
  setText("#onboardingStepBody2", currentLanguage === "en" ? "Open the creator profile and check featured work, proof, reviews, and links." : currentLanguage === "ko" ? "작성자 프로필에서 대표작, 실적, 리뷰, 외부 링크를 확인합니다." : "投稿主のプロフィールで代表作、実績、レビュー、外部リンクを見ます。");
  setText("#onboardingStepTitle3", currentLanguage === "en" ? "Send a request" : currentLanguage === "ko" ? "의뢰하기" : "依頼する");
  setText("#onboardingStepBody3", currentLanguage === "en" ? "Move from an open commission card to the request page and enter amount and brief." : currentLanguage === "ko" ? "의뢰 접수 카드에서 의뢰 페이지로 이동해 금액과 내용을 입력합니다." : "依頼受付中カードから依頼ページへ進み、金額と依頼内容を入力します。");
  setText("#onboardingStepTitle4", currentLanguage === "en" ? "Track progress" : currentLanguage === "ko" ? "진행 확인" : "進行を追う");
  setText("#onboardingStepBody4", currentLanguage === "en" ? "Use request manager to check acceptance, start work, delivery, and review states." : currentLanguage === "ko" ? "의뢰 관리에서 승인, 작업 시작, 납품, 평가 상태를 확인합니다." : "依頼管理で承認、作業開始、納品、評価までの状態を確認します。");
  setText("#onboardingStepTitle5", currentLanguage === "en" ? "Explore more" : currentLanguage === "ko" ? "확장 기능 보기" : "広げる");
  setText("#onboardingStepBody5", currentLanguage === "en" ? "Check events, circles, notifications, and settings to imagine real operation." : currentLanguage === "ko" ? "이벤트, 서클, 알림, 설정을 보고 운영 이미지를 확인합니다." : "イベント、サークル、通知、設定を見て運用イメージを確認します。");
  setText("#onboardingServiceButton", currentLanguage === "en" ? "See detailed routes" : currentLanguage === "ko" ? "자세한 테스트 루트 보기" : "詳しい試用ルートを見る");
  setText("#onboardingStartButton", currentLanguage === "en" ? "Start from home" : currentLanguage === "ko" ? "홈에서 시작" : "ホームから試す");
  setText("#serviceWhatEyebrow", currentLanguage === "en" ? "Page guide" : currentLanguage === "ko" ? "화면 안내" : "Page guide");
  setText("#serviceWhatTitle", currentLanguage === "en" ? "What each screen is for" : currentLanguage === "ko" ? "어디에 무엇이 있는지" : "どこに何があるか");
  setText("#serviceWhatBody1", currentLanguage === "en" ? "Home: browse posts, search, switch categories, and check live event banners." : currentLanguage === "ko" ? "홈: 게시물 목록, 검색, 카테고리, 진행 중 이벤트를 확인합니다." : "ホーム: 投稿一覧、検索、カテゴリ、開催中イベントの確認。");
  setText("#serviceWhatBody2", currentLanguage === "en" ? "Post modal: view details, tags, save, follow, share, and jump toward a request page." : currentLanguage === "ko" ? "게시물 모달: 상세, 태그, 저장, 팔로우, 공유, 의뢰 페이지 이동." : "投稿モーダル: 作品詳細、タグ、保存、フォロー、共有、依頼導線。");
  setText("#serviceWhatBody3", currentLanguage === "en" ? "Profile: a trust page with featured work, proof, reviews, links, and open request status." : currentLanguage === "ko" ? "프로필: 대표작, 실적, 리뷰, 링크, 의뢰 상태를 보여주는 신뢰 페이지입니다." : "プロフィール: 信用ページとして、実績・代表作・レビュー・外部リンクを表示。");
  setText("#serviceWhatBody4", currentLanguage === "en" ? "Request manager: manage statuses from pending to complete, plus chat, delivery, and reviews." : currentLanguage === "ko" ? "의뢰 관리: 미승낙부터 완료까지 상태, 채팅, 납품, 평가를 관리합니다." : "依頼管理: 未承諾から完了までの依頼進行、チャット、納品、評価を管理。");
  setText("#serviceFaqEyebrow", currentLanguage === "en" ? "FAQ" : currentLanguage === "ko" ? "자주 묻는 질문" : "FAQ");
  setText("#serviceFaqTitle", currentLanguage === "en" ? "Common questions" : currentLanguage === "ko" ? "자주 나올 질문" : "よくある想定質問");
  setText("#serviceFaqQ1", currentLanguage === "en" ? "What is the difference between a normal post and a commission post?" : currentLanguage === "ko" ? "일반 게시물과 의뢰 접수 게시물의 차이는?" : "普通の投稿と依頼受付投稿は何が違う？");
  setText("#serviceFaqA1", currentLanguage === "en" ? "Normal posts are for showing work. Commission posts include price, delivery, and slots, and lead into a request page." : currentLanguage === "ko" ? "일반 게시물은 작품 공개용이고, 의뢰 게시물은 가격·납기·접수 슬롯이 있어 의뢰 페이지로 이어집니다." : "通常投稿は作品の公開用、依頼受付投稿は価格・納期・受付枠つきで依頼ページへつなぐための投稿です。");
  setText("#serviceFaqQ2", currentLanguage === "en" ? "What should I check before sending a request?" : currentLanguage === "ko" ? "의뢰 전에 무엇을 봐야 하나요?" : "依頼前に何を見ればいい？");
  setText("#serviceFaqA2", currentLanguage === "en" ? "Check featured work, completed jobs, reviews, external links, and whether requests are open on the profile." : currentLanguage === "ko" ? "프로필의 대표작, 완료 실적, 리뷰, 외부 링크, 현재 접수 상태를 확인하는 흐름입니다." : "プロフィールの代表作、完了実績、レビュー、外部リンク、現在の依頼受付状況を見る想定です。");
  setText("#serviceFaqQ3", currentLanguage === "en" ? "Where do I follow progress after requesting?" : currentLanguage === "ko" ? "의뢰 후 진행 상황은 어디서 보나요?" : "依頼した後はどこで進捗を見る？");
  setText("#serviceFaqA3", currentLanguage === "en" ? "Open the request manager to see the status list, then move into a request detail view for chat, attachments, delivery, and review." : currentLanguage === "ko" ? "의뢰 관리에서 상태를 보고, 상세 화면에서 채팅, 첨부, 납품, 평가로 이어집니다." : "依頼管理でステータス一覧を見て、個別詳細でチャット、添付、納品、評価へ進みます。");
  setText("#serviceFaqQ4", currentLanguage === "en" ? "Where can I read the philosophy behind the service?" : currentLanguage === "ko" ? "서비스의 방향성과 배경은 어디서 보나요?" : "思想や背景はどこで確認できる？");
  setText("#serviceFaqA4", currentLanguage === "en" ? "Open Our Mission when you want to read the purpose of the service and what it aims to improve for VRChat creative culture." : currentLanguage === "ko" ? "Our Mission에는 이 서비스의 목적과 VRChat 창작 문화에서 무엇을 개선하고 싶은지가 정리되어 있습니다." : "サービスの目的やVRChat創作文化に対する考え方は Our Mission にまとめています。");
  setText("#serviceMissionEyebrow", currentLanguage === "en" ? "Mission" : currentLanguage === "ko" ? "미션" : "Mission");
  setText("#serviceMissionLinkTitle", currentLanguage === "en" ? "See the background and direction" : currentLanguage === "ko" ? "서비스의 배경과 방향 보기" : "サービスの背景や目指す方向を見る");
  setText("#serviceMissionBody", currentLanguage === "en" ? "Use Our Mission for the why behind the product rather than the how-to guide." : currentLanguage === "ko" ? "사용법이 아니라 왜 이 서비스를 만드는지 궁금할 때 Our Mission을 보면 됩니다." : "使い方ではなく、なぜこのサービスを作るのか、何を良くしたいのかを知りたい時は Our Mission を見てください。");
  setText("#serviceMissionLink", currentLanguage === "en" ? "Open Our Mission" : currentLanguage === "ko" ? "Our Mission 보기" : "Our Missionを見る");
  setText("#openEventProposalButton", currentLanguage === "en" ? "Open events" : currentLanguage === "ko" ? "이벤트 보기" : "イベントページへ");
  setText("#eventRelatedEyebrow", currentLanguage === "en" ? "More from organizer" : currentLanguage === "ko" ? "같은 주최자" : "More from organizer");
  setText("#eventRelatedTitle", currentLanguage === "en" ? "Other events from this organizer" : currentLanguage === "ko" ? "같은 주최자의 다른 이벤트" : "同じ主催者のイベント");
  setText("#eventCommunityCtaEyebrow", currentLanguage === "en" ? "Community event" : currentLanguage === "ko" ? "커뮤니티 이벤트" : "ユーザーイベント");
  setText("#eventCommunityCtaTitle", currentLanguage === "en" ? "Want to host your own event?" : currentLanguage === "ko" ? "직접 이벤트를 열어볼까요?" : "あなたもイベントを開催してみませんか？");
  setText("#eventCommunityCtaLead", currentLanguage === "en" ? "Submit a compact proposal for showcases, release events, circle-only projects, and other VRChat creation ideas." : currentLanguage === "ko" ? "작품 특집, 출시 기념, 서클 한정 기획 등 VRChat 창작에 맞는 이벤트를 제안할 수 있습니다." : "作品特集、発売記念、サークル限定企画など、VRChat創作に合うイベントを運営へ申請できます。");
  setText("#openEventProposalFromDetail", "eventProposalTrigger");
  setText("#eventProposalDialogEyebrow", currentLanguage === "en" ? "Community event" : currentLanguage === "ko" ? "커뮤니티 이벤트" : "ユーザーイベント");
  setText("#eventProposalDialogTitle", "eventProposalDialogTitle");
  setText("#eventProposalDialogLead", "eventProposalDialogLead");
  setText("#eventProposalTitleLabel", currentLanguage === "en" ? "Event title" : currentLanguage === "ko" ? "이벤트명" : "イベント名");
  setText("#eventProposalImageLabel", currentLanguage === "en" ? "Event banner image" : currentLanguage === "ko" ? "이벤트 배너 이미지" : "イベントバナー画像");
  setText("#eventProposalImageHelp", currentLanguage === "en" ? "Operations uses this to judge the event mood and how it would look in the top banner." : currentLanguage === "ko" ? "운영이 이벤트 분위기와 톱 배너 게재 시 보이는 모습을 판단하는 데 사용합니다." : "トップバナー掲載時の見え方やイベントの雰囲気を運営が確認するために使います。");
  setText("#eventProposalImagePreviewLabel", currentLanguage === "en" ? "Banner image preview" : currentLanguage === "ko" ? "배너 이미지 미리보기" : "バナー画像プレビュー");
  setText("#eventProposalTypeLabel", currentLanguage === "en" ? "Event type" : currentLanguage === "ko" ? "이벤트 종류" : "イベント種別");
  setText("#eventProposalOtherTypeLabel", currentLanguage === "en" ? "Other event type" : currentLanguage === "ko" ? "기타 이벤트 종류" : "その他の種別");
  setText("#eventProposalOtherTypeHelp", currentLanguage === "en" ? "Use a short label that helps operations understand the proposal." : currentLanguage === "ko" ? "운영이 기획 내용을 판단하기 쉬운 짧은 이름을 입력해 주세요." : "運営が企画内容を判断しやすい短い名前を入力してください。");
  setText("#eventProposalOrganizerLabel", currentLanguage === "en" ? "Organizer name" : currentLanguage === "ko" ? "주최자명" : "主催者名");
  setText("#eventProposalContactLabel", currentLanguage === "en" ? "Contact email" : currentLanguage === "ko" ? "연락처 이메일" : "連絡先メール");
  setText("#eventProposalSummaryLabel", currentLanguage === "en" ? "Overview" : currentLanguage === "ko" ? "개최 개요" : "開催概要");
  setText("#eventProposalSupportLabel", currentLanguage === "en" ? "Requested support from ops (*Support is not guaranteed.)" : currentLanguage === "ko" ? "운영에 기대하는 지원(*지원이 보장되는 것은 아닙니다.)" : "運営に期待すること(※サポートを確約するものではありません)");
  setText("#eventProposalCancel", currentLanguage === "en" ? "Cancel" : currentLanguage === "ko" ? "취소" : "キャンセル");
  setText("#eventProposalSubmit", "eventProposalSubmit");
  setText("#eventsEyebrow", currentLanguage === "en" ? "Events" : currentLanguage === "ko" ? "이벤트" : "Events");
  setText("#eventsTitle", "events");
  setText("#eventsLead", "eventsLead");
  setText("#eventsCreateButton", "eventProposalTrigger");
  setText("#circleEyebrow", currentLanguage === "en" ? "Circles" : currentLanguage === "ko" ? "서클" : "Circles");
  setText("#circleTitle", "circles");
  setText("#circleLead", "circlesLead");
  setText("#circlePostsEyebrow", currentLanguage === "en" ? "Members only" : currentLanguage === "ko" ? "멤버 한정" : "Members only");
  setText("#circlePostsTitle", "circlePostsTitle");
  setText("#circlePostsNote", "circlePostsNote");
  setText("#circleListEyebrow", currentLanguage === "en" ? "Browse" : currentLanguage === "ko" ? "목록" : "Browse");
  setText("#circleListTitle", "circleListTitle");
  setText("[data-circle-tab='browse']", "circleBrowseTab");
  setText("[data-circle-tab='posts']", "circlePostsTab");
  setText("[data-circle-tab='manage']", currentLanguage === "en" ? "Manage circles" : currentLanguage === "ko" ? "서클 관리" : "サークルを管理する");
  setText("#circleManagerEyebrow", currentLanguage === "en" ? "Manager" : currentLanguage === "ko" ? "관리" : "Manager");
  setText("#circleManagerTitle", currentLanguage === "en" ? "Circle management" : currentLanguage === "ko" ? "서클 관리" : "サークル管理");
  setText("#circleManagerNote", currentLanguage === "en" ? "Check members, review join requests, and grant or transfer circle management permissions." : currentLanguage === "ko" ? "멤버, 참가 신청, 서클 관리 권한 부여와 이전을 확인합니다." : "作成したサークルのメンバー確認、参加申請、管理権限の付与や移譲を行う想定です。");
  setText("#circleManagerMembersTitle", currentLanguage === "en" ? "Members" : currentLanguage === "ko" ? "멤버" : "メンバー");
  setText("#circleManagerRequestsTitle", currentLanguage === "en" ? "Join requests" : currentLanguage === "ko" ? "참가 신청" : "参加申請");
  setText("#circleManagerInviteButton", currentLanguage === "en" ? "Copy invite link" : currentLanguage === "ko" ? "초대 링크 복사" : "招待リンクをコピー");
  setText("#circleManagerRoleTitle", currentLanguage === "en" ? "Management permissions" : currentLanguage === "ko" ? "관리 권한" : "管理権限");
  setText("#circleManagerRoleLead", currentLanguage === "en" ? "Add co-managers, transfer ownership, or grant post moderation permissions." : currentLanguage === "ko" ? "공동 관리자 추가, 오너 권한 이전, 게시 관리 권한 부여를 설정합니다." : "共同管理者の追加、オーナー権限の移譲、投稿管理権限の付与をここで行う想定です。");
  setAttr(circleSearchInput, "placeholder", "circleSearchPlaceholder");
  setText("#circleFilterLabel", "circleFilterLabel");
  setText("#circleFilterJoined", "circleFilterJoined");
  setText("#circleFilterApproval", "circleFilterApproval");
  setText("#circleFilterOpen", "circleFilterOpen");
  setText("#eventCircleRequirementEyebrow", currentLanguage === "en" ? "Circle requirement" : currentLanguage === "ko" ? "서클 조건" : "Circle requirement");
  setText("#eventCircleRequirementTitle", currentLanguage === "en" ? "Participation requirement" : currentLanguage === "ko" ? "참여 조건" : "参加条件");
  setAttr(eventsSearchInput, "placeholder", "eventsSearchPlaceholder");
  setText("[data-event-filter='all']", "All");
  setText("[data-event-filter='official']", currentLanguage === "en" ? "Official events" : currentLanguage === "ko" ? "공식 이벤트" : "公式イベント");
  setText("[data-event-filter='community']", currentLanguage === "en" ? "Community" : currentLanguage === "ko" ? "사용자 발안" : "ユーザー発案");
  setText("#eventDetailDateLabel", currentLanguage === "en" ? "Date" : currentLanguage === "ko" ? "일정" : "開催期間");
  setText("#eventDetailStatusLabel", currentLanguage === "en" ? "Status" : currentLanguage === "ko" ? "상태" : "ステータス");
  setText("#eventDetailOrganizerLabel", "eventOrganizer");
  setText("#eventDetailGuideLabel", currentLanguage === "en" ? "Guide" : currentLanguage === "ko" ? "안내" : "案内");
  setText("#eventDetailGuide", currentLanguage === "en" ? "Details below" : currentLanguage === "ko" ? "아래에서 확인" : "詳細は下に表示");
  setText("#eventsEmpty p", "eventsEmptyTitle");
  setText("#eventsEmpty span", "eventsEmptyBody");
  if (eventProposalTypeInput) {
    [...eventProposalTypeInput.options].forEach((option) => {
      option.textContent = eventProposalTypeLabel(option.value);
    });
    updateEventProposalTypeCustomControl();
  }
  if (eventProposalTitleInput) eventProposalTitleInput.placeholder = currentLanguage === "en" ? "Example: Avatar styling showcase week" : currentLanguage === "ko" ? "예: Avatar styling showcase week" : "例: Avatar styling showcase week";
  if (eventProposalOtherTypeInput) eventProposalOtherTypeInput.placeholder = currentLanguage === "en" ? "Example: Avatar release / Club event" : currentLanguage === "ko" ? "예: 아바타 출시 / 동호회 기획" : "例: アバター発売記念 / 同好会企画";
  if (eventProposalOrganizerInput) eventProposalOrganizerInput.placeholder = currentLanguage === "en" ? "Your display name" : currentLanguage === "ko" ? "표시 이름" : "表示名";
  if (eventProposalContactInput) eventProposalContactInput.placeholder = "organizer@example.com";
  if (eventProposalSummaryInput) eventProposalSummaryInput.placeholder = currentLanguage === "en" ? "What you want to run, who it is for, and what kind of posts or requests you want to collect." : currentLanguage === "ko" ? "무엇을 열고 싶은지, 누구를 위한 이벤트인지, 어떤 게시물을 모으고 싶은지 적어주세요." : "何を開催したいか、誰に見てほしいか、どんな投稿や依頼を集めたいかを書いてください。";
  if (eventProposalSupportInput) eventProposalSupportInput.placeholder = currentLanguage === "en" ? "Feature placement, banner exposure, signup flow, moderation notes, and so on." : currentLanguage === "ko" ? "특집 노출, 배너 게재, 모집 동선, 운영 안내 등 기대하는 지원을 적어주세요." : "特集掲載、バナー露出、募集導線、運営案内など期待する支援を書いてください。";
  renderEventProposalFlow();
  renderEventProposalList();
  renderHeroTitleWord(false);
  const summary = [...document.querySelectorAll(".summary-strip:not([hidden]) > div span")];
  ["portfolioDesc", "commissionDesc", "communityDesc"].forEach((key, index) => setText(summary[index], key));
  setText("[data-view='discover']", "explore");
  setText("[data-view='following']", "followingFeed");
  setText("[data-view='requests']", "requests");
  if (addSavedSearchTabButton) {
    addSavedSearchTabButton.setAttribute("aria-label", t("addTab"));
    addSavedSearchTabButton.title = t("addTab");
  }
  setText("#savedSearchDialogEyebrow", currentLanguage === "en" ? "Custom tab" : currentLanguage === "ko" ? "사용자 탭" : "カスタムタブ");
  setText("#savedSearchLabelText", "savedTabLabel");
  setText("#savedSearchQueryText", "savedTabQuery");
  setText("#savedSearchDialogHint", "savedTabHint");
  setText("#savedSearchContextEdit", "edit");
  setText("#savedSearchContextDelete", "deleteTab");
  setText("#savedSearchDelete", "deleteTab");
  setText("#savedSearchCancel", "cancel");
  setAttr(savedSearchLabelInput, "placeholder", "savedTabLabelPlaceholder");
  setAttr(savedSearchQueryInput, "placeholder", "savedTabQueryPlaceholder");
  syncSavedSearchDialogMode();
  chips.forEach((chip) => {
    chip.textContent = categoryDisplayName(chip.dataset.category || "");
  });
  renderSavedSearchTabs();
  if (shuffleButton) {
    shuffleButton.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M16 3h5v5" />
        <path d="M4 20 21 3" />
        <path d="M21 16v5h-5" />
        <path d="M15 15 21 21" />
        <path d="M4 4l5 5" />
      </svg>
      ${t("shuffle")}
    `;
  }
  setText("#createRequestButton", "request");
  setText("#createButton", "post");
  setText("#emptyState p", "noResultsTitle");
  setText("#emptyState span", "noResultsBody");
  document.querySelectorAll("#backToFeed, #backFromRequest, #backFromNotifications, #backFromSettings, #backFromRequestManager, #backFromRequestDetail, #backFromEventDetail, #backFromEvents, #backFromMission, #backFromAdmin, #backFromSpecs").forEach((button) => {
    const svg = button.querySelector("svg")?.outerHTML || "";
    button.innerHTML = `${svg}${t("back")}`;
  });
  setText(".notifications-heading h1", "notifications");
  setText("#markNotificationsRead", "markAllRead");
  setText("#deleteReadNotifications", "deleteReadNotifications");
  setText("[data-notification-filter='all']", "All");
  setText("[data-notification-filter='unread']", currentLanguage === "en" ? "Unread" : currentLanguage === "ko" ? "읽지 않음" : "未読");
  setText("[data-notification-filter='request']", currentLanguage === "en" ? "Requests" : currentLanguage === "ko" ? "의뢰" : "依頼");
  setText("[data-notification-filter='important']", currentLanguage === "en" ? "Important" : currentLanguage === "ko" ? "중요" : "重要");
  updateSettingsPanelLanguage();
  normalizeProfileEditorText();

  setText("#requestPublishingTitle", "requestPublishingTitle");
  setText(".request-publishing-panel > div:first-child p:not(.eyebrow)", "requestPublishingLead");
  setText(".request-manager-create span", "publishRequestPage");
  setText(".request-manager-create strong", "publishRequestPageHelp");
  setText("#requestManagerCreatePost", "createRequestPost");
  setText("#requestManagerTitle", "requestManagerTitle");
  setText(".request-manager-heading p:not(.eyebrow)", "requestManagerLead");
  setText("#pendingSortControls > span", "pendingSort");
  setText("[data-pending-sort='deadline']", "sortDeadline");
  setText("[data-pending-sort='budget']", "sortBudget");
  setText("#requestManagerEmpty p", "emptyRequestsTitle");
  setText("#requestManagerEmpty span", "emptyRequestsBody");
  requestStateTabs.forEach((tab) => setText(tab.querySelector("span"), requestStateLabel(tab.dataset.requestState)));

  setText("#requestReportButton", "report");
  setText("#requestClientCardTitle", "clientProfile");
  setText("#requestDetailClientProfileButton", "viewProfile");
  setText("#requestBriefTitle", "requestBrief");
  setText("#requestChatTitle", "chat");
  setAttr(requestChatInput, "placeholder", "messagePlaceholder");
  setText("#requestAttachButton", "attach");
  setText(".request-chat-compose .primary-button", "send");
  setText("#requestMediaTitle", currentLanguage === "en" ? "Samples" : currentLanguage === "ko" ? "샘플" : "サンプル");
  setText(".stripe-placeholder strong", currentLanguage === "en" ? "Embed planned" : currentLanguage === "ko" ? "임베드 예정" : "埋め込み予定");
  const purchaseFields = [...document.querySelectorAll("#requestAuthenticatedPanel .field > span")];
  if (purchaseFields[0]) purchaseFields[0].textContent = currentLanguage === "en" ? "Payment method" : currentLanguage === "ko" ? "결제 방법" : "支払い方法";
  if (purchaseFields[1]) purchaseFields[1].textContent = currentLanguage === "en" ? "Amount" : currentLanguage === "ko" ? "금액" : "金額";
  updateRequestAmountState();
  setText("#requestAuthenticatedPanel .request-agreement span", currentLanguage === "en" ? "I confirmed the request and agreement" : currentLanguage === "ko" ? "의뢰 내용과 동의 사항을 확인했습니다" : "依頼内容と同意事項を確認しました");
  setText("#requestConfirmButton", currentLanguage === "en" ? "Confirm request" : currentLanguage === "ko" ? "의뢰 확정" : "依頼を確定する");
  setText("#requestGuestPanel p", currentLanguage === "en" ? "To send a request, create an account first. Your request details, payment, chat, and delivery status are managed safely there." : currentLanguage === "ko" ? "의뢰하려면 먼저 계정 등록이 필요합니다. 의뢰 내용, 결제, 채팅, 납품 상태를 안전하게 관리할 수 있습니다." : "依頼するにはアカウント登録が必要です。登録すると依頼内容、支払い、チャット、納品状況を安全に管理できます。");
  setText("#requestGuestSignUp", currentLanguage === "en" ? "Create account" : currentLanguage === "ko" ? "계정 등록" : "アカウント登録");
  setText("#requestGuestSignIn", currentLanguage === "en" ? "Log in" : currentLanguage === "ko" ? "로그인" : "ログイン");
  setText("#requestPaymentButton", currentLanguage === "en" ? "Review request" : currentLanguage === "ko" ? "의뢰 내용 확인" : "依頼内容を確認する");
  setText("#requestCreatorProfileButton", "viewProfile");
  setText("#requestPageReportButton", "report");
  setAttr(dialogCopyLink, "aria-label", "postUrlCopy");
  setAttr(dialogCopyLink, "title", "postUrlCopy");
  setText("#requestMoreSection h2", currentLanguage === "en" ? "Other commissions" : currentLanguage === "ko" ? "다른 의뢰 접수" : "他の依頼受付");
  setText("#profilePostsTitle", "profileArchive");
  setAttr(profilePostSearch, "placeholder", "profilePostSearch");
  setText("[data-profile-sort='recent']", "sortRecent");
  setText("[data-profile-sort='likes']", "sortLikes");
  setText("#profilePostEmpty p", "profilePostEmptyTitle");
  setText("#profilePostEmpty span", "profilePostEmptyBody");

  setText("#requestCheckoutDialog h2", currentLanguage === "en" ? "Review request" : currentLanguage === "ko" ? "의뢰 내용 확인" : "依頼内容の確認");
  setText("#requestCheckoutDialog .request-agreement span", currentLanguage === "en" ? "I confirmed the title, amount, payment method, and agreement" : currentLanguage === "ko" ? "제목, 금액, 결제 방법, 동의 사항을 확인했습니다" : "タイトル、金額、支払い方法、同意事項を確認しました");
  setText("#requestCheckoutCancel", "back");
  setText("#requestCheckoutSubmit", currentLanguage === "en" ? "Continue to payment" : currentLanguage === "ko" ? "결제로 진행" : "支払いへ進む");
  setText("#requestApprovalDialog h2", currentLanguage === "en" ? "Accept this request?" : currentLanguage === "ko" ? "이 의뢰를 수락할까요?" : "この依頼を受諾しますか？");
  setText("#requestApprovalCopy", currentLanguage === "en" ? "After accepting, you move to request chat and send the first message." : currentLanguage === "ko" ? "수락하면 의뢰 채팅으로 이동해 첫 메시지를 보냅니다." : "受諾すると、依頼チャットへ移動して初回メッセージを送る想定です。");
  setText("#requestApprovalCancel", currentLanguage === "en" ? "Cancel" : currentLanguage === "ko" ? "취소" : "キャンセル");
  const approvalSpan = requestApprovalConfirm?.querySelector("span");
  const approvalSmall = requestApprovalConfirm?.querySelector("small");
  if (approvalSpan) approvalSpan.textContent = currentLanguage === "en" ? "Hold 1 sec to approve and chat" : currentLanguage === "ko" ? "1초 길게 눌러 승인하고 채팅" : "1秒長押しで承認してチャットへ";
  if (approvalSmall) approvalSmall.textContent = currentLanguage === "en" ? "Hold to approve" : currentLanguage === "ko" ? "길게 눌러 승인" : "Hold to approve";
  setText("#requestRejectDialog h2", currentLanguage === "en" ? "Choose a reject reason" : currentLanguage === "ko" ? "거절 이유 선택" : "お断り理由を選択");
  setText("#requestRejectCancel", currentLanguage === "en" ? "Cancel" : currentLanguage === "ko" ? "취소" : "キャンセル");
  setText("#requestRejectConfirm", currentLanguage === "en" ? "Confirm reason" : currentLanguage === "ko" ? "이유 확정" : "理由を確定");
  setText("#requestReportDialog h2", currentLanguage === "en" ? "Report this request?" : currentLanguage === "ko" ? "이 의뢰를 신고할까요?" : "この依頼を通報しますか？");
  setText("#requestReportCancel", currentLanguage === "en" ? "Cancel" : currentLanguage === "ko" ? "취소" : "キャンセル");
  setText("#requestReportConfirm", currentLanguage === "en" ? "Send report" : currentLanguage === "ko" ? "신고 보내기" : "通報を送信");
  setText("#accountDeleteTitle", currentLanguage === "en" ? "Delete account?" : currentLanguage === "ko" ? "계정을 삭제할까요?" : "アカウントを削除しますか？");
  setText("#accountDeleteCancel", currentLanguage === "en" ? "Cancel" : currentLanguage === "ko" ? "취소" : "キャンセル");
  const deleteSpan = accountDeleteConfirm?.querySelector("span");
  const deleteSmall = accountDeleteConfirm?.querySelector("small");
  if (deleteSpan) deleteSpan.textContent = currentLanguage === "en" ? "Hold 3 sec to delete permanently" : currentLanguage === "ko" ? "3초 길게 눌러 완전히 삭제" : "3秒長押しで完全に削除";
  if (deleteSmall) deleteSmall.textContent = currentLanguage === "en" ? "Hold to delete" : currentLanguage === "ko" ? "길게 눌러 삭제" : "Hold to delete";
  updateRequestAuthView();

  if (rerender) {
    updateNotificationBadge();
    if (!feedView.hidden) renderPins();
    if (!notificationsView.hidden) renderNotificationsPage();
    if (!settingsView.hidden) renderSettingsPage();
    if (!requestManagerView.hidden) renderRequestManagerList();
    if (!requestManagerDetailView.hidden && activeRequestManagerItemId) renderRequestManagerDetailPage(activeRequestManagerItemId);
    if (!profileView.hidden && activeProfile) renderProfile(activeProfile);
    if (!circleView.hidden) {
      const circleMatch = location.hash.match(/^#circle\/([^/]+)$/);
      renderCirclesPage(circleMatch?.[1] || null);
    }
    if (!eventsView.hidden) renderEventsPage();
    if (!eventDetailView.hidden) {
      const eventMatch = location.hash.match(/^#event\/([^/]+)$/);
      renderEventDetailPage(eventMatch?.[1] || activeEventIndex || 0);
    }
    if (currentPin && modalIsOpen(dialog)) openPin(currentPin.id);
  }
}

function settingsControlKey(control, index) {
  if (control.id) return control.id;
  const panel = control.closest(".settings-panel");
  const panelId = panel?.getAttribute("aria-labelledby") || "settings";
  const label = control.closest(".settings-row, .settings-field")?.querySelector("strong, span")?.textContent?.trim() || control.tagName.toLowerCase();
  return `${panelId}:${index}:${label}`;
}

function legacySettingsControlKeys(control) {
  if (control?.id === "settingsR18Content") return ["settingsR19Content"];
  return [];
}

function settingPayload(control) {
  if (control.type === "checkbox") return { type: "checkbox", checked: control.checked };
  if (control.tagName === "SELECT") return { type: "select", selectedIndex: control.selectedIndex };
  return { type: control.type || "value", value: control.value };
}

function applySettingPayload(control, payload) {
  if (!payload) return;
  if (control.type === "checkbox" && typeof payload.checked === "boolean") {
    control.checked = payload.checked;
    return;
  }
  if (control.tagName === "SELECT" && Number.isInteger(payload.selectedIndex) && payload.selectedIndex >= 0 && payload.selectedIndex < control.options.length) {
    control.selectedIndex = payload.selectedIndex;
    return;
  }
  if ("value" in payload) control.value = payload.value;
}

function settingsControls() {
  return [...settingsView.querySelectorAll("input, select, textarea")]
    .filter((control) => control.type !== "file" && control.type !== "hidden");
}

function loadSavedSettings() {
  settingsControls().forEach((control, index) => {
    if (control === settingsLanguage) return;
    const key = control.dataset.settingKey || settingsControlKey(control, index);
    control.dataset.settingKey = key;
    try {
      const stored = localStorage.getItem(`vrc-sns-setting:${key}`)
        || legacySettingsControlKeys(control).map((legacyKey) => localStorage.getItem(`vrc-sns-setting:${legacyKey}`)).find(Boolean);
      applySettingPayload(control, JSON.parse(stored));
    } catch {
      localStorage.removeItem(`vrc-sns-setting:${key}`);
    }
  });
}

function applyReducedMotionSetting() {
  const enabled = Boolean(settingsReducedMotion?.checked);
  document.documentElement.dataset.reducedMotion = enabled ? "true" : "false";
}

function defaultReducedMotionOff() {
  if (!settingsReducedMotion) return;
  settingsReducedMotion.checked = false;
  const key = settingsReducedMotion.dataset.settingKey || "settingsReducedMotion";
  localStorage.setItem(`vrc-sns-setting:${key}`, JSON.stringify(settingPayload(settingsReducedMotion)));
}

function applyContentDisplaySettings() {
  const r18Enabled = Boolean(document.querySelector("#settingsR18Content")?.checked);
  const goreEnabled = Boolean(document.querySelector("#settingsGoreContent")?.checked);
  const revealMode = document.querySelector("#settingsSensitiveReveal")?.value || "blur";
  document.documentElement.dataset.showR18Content = r18Enabled ? "true" : "false";
  document.documentElement.dataset.showGoreContent = goreEnabled ? "true" : "false";
  document.documentElement.dataset.sensitiveReveal = revealMode;
}

function saveSetting(control) {
  if (!control || control === settingsLanguage) return;
  const key = control.dataset.settingKey || settingsControlKey(control, settingsControls().indexOf(control));
  control.dataset.settingKey = key;
  localStorage.setItem(`vrc-sns-setting:${key}`, JSON.stringify(settingPayload(control)));
}

function markSettingsAutoSaved(showToast = true) {
  if (settingsSaveTimer) {
    window.clearTimeout(settingsSaveTimer);
    settingsSaveTimer = 0;
  }
  if (showToast) showProfileCopyToast(t("autoSavedToast"));
}

function handleSettingsAutoSave(event) {
  const control = event.target.closest("input, select, textarea");
  if (!control || !settingsView.contains(control)) return;
  saveSetting(control);
  if (control === settingsThemeMode) applyThemeMode(control.value);
  if (control === settingsReducedMotion) applyReducedMotionSetting();
  if (control?.id === "settingsR18Content" || control?.id === "settingsGoreContent" || control?.id === "settingsSensitiveReveal") {
    applyContentDisplaySettings();
  }
  markSettingsAutoSaved(control !== settingsLanguage);
}

function modalIsOpen(modal) {
  return modal.open || modal.hasAttribute("open");
}

function showModalElement(modal) {
  lockPageScroll();
  if (typeof modal.showModal === "function") {
    try {
      modal.showModal();
      return;
    } catch {
      modal.setAttribute("open", "");
      modal.classList.add("is-fallback-open");
      return;
    }
  }
  modal.setAttribute("open", "");
  modal.classList.add("is-fallback-open");
}

function closeModalElement(modal) {
  if (typeof modal.close === "function") {
    modal.close();
    unlockPageScrollIfIdle();
    return;
  }
  modal.removeAttribute("open");
  modal.classList.remove("is-fallback-open");
  unlockPageScrollIfIdle();
}

function closeSheetDialog(modal) {
  if (!modal) return;
  if (modal === composeCloseConfirmDialog) {
    closeComposeCloseConfirmDialog();
    return;
  }
  if (modal === bookmarkFolderDialog) {
    closeBookmarkFolderDialog();
    return;
  }
  if (modal === bookmarkFolderCreateDialog) {
    closeBookmarkFolderCreateDialog();
    return;
  }
  if (modal === savedSearchDialog) {
    closeSavedSearchDialog();
    return;
  }
  if (modal === eventProposalDialog) {
    closeEventProposalDialog();
    return;
  }
  if (modal === requestReviewDialog) {
    closeRequestReviewDialog();
    return;
  }
  if (modal === requestReportDialog) {
    closeRequestReportDialog();
    return;
  }
  if (modal === requestDeliveryDialog) {
    closeRequestDeliveryDialog();
    return;
  }
  if (modal === accountActionDialog) {
    closeAccountActionDialog();
    return;
  }
  if (modal === accountDeleteDialog) {
    closeAccountDeleteDialog();
    return;
  }
  if (modal === editProfileDialog) {
    closeEditProfileDialog();
    return;
  }
  if (modal === zipSafetyDialog) {
    cancelZipAttachments();
    return;
  }
  closeModalElement(modal);
}

function enhanceSheetCloseButtons() {
  sheetCancelButtonIds.forEach((id) => {
    document.querySelector(`#${id}`)?.classList.add("sheet-cancel-button");
  });
  document.querySelectorAll("dialog").forEach((modal) => {
    const card = modal.querySelector(".request-sheet-card, .zip-safety-card");
    if (!card || card.querySelector("[data-sheet-close]")) return;
    const button = document.createElement("button");
    button.className = "close-button sheet-close-button";
    button.type = "button";
    button.dataset.sheetClose = "true";
    button.setAttribute("aria-label", "Close");
    button.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    `;
    button.addEventListener("click", () => closeSheetDialog(modal));
    card.prepend(button);
  });
}

function lockPageScroll() {
  if (document.body.classList.contains("modal-scroll-locked")) return;
  lockedScrollY = window.scrollY;
  document.body.style.setProperty("--locked-scroll-y", `-${lockedScrollY}px`);
  document.body.classList.add("modal-scroll-locked");
}

function unlockPageScroll() {
  if (!document.body.classList.contains("modal-scroll-locked")) return;
  document.body.classList.remove("modal-scroll-locked");
  document.body.style.removeProperty("--locked-scroll-y");
  window.scrollTo(0, lockedScrollY);
}

function unlockPageScrollIfIdle() {
  window.setTimeout(() => {
    const hasOpenModal = [...document.querySelectorAll("dialog")].some((item) => (
      modalIsOpen(item) || item.classList.contains("is-fallback-open") || item.classList.contains("is-closing")
    ));
    if (hasOpenModal) return;
    unlockPageScroll();
  }, 0);
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function creatorBySlug(slug) {
  return pins.find((pin) => slugify(pin.creator) === slug)
    || requestManagerItems.find((item) => slugify(item.client) === slug)
    || null;
}

function profileNameFromEntry(entry) {
  return entry?.creator || entry?.client || entry?.organizer || null;
}

function eventOrganizerBySlug(slug) {
  const names = [
    ...Object.values(translations).map((language) => language.officialOrganizer),
    ...Object.values(eventCampaigns).flat().map((event) => event.organizer),
    ...communityEventProposals.map((proposal) => proposal.organizer),
  ].filter(Boolean);
  return names.find((name) => slugify(name) === slug) || null;
}

function profileNameBySlug(slug) {
  return profileNameFromEntry(creatorBySlug(slug)) || eventOrganizerBySlug(slug);
}

function officialProfileNames() {
  return [
    "Veacon運営",
    "Veacon Ops",
    "Veacon 운영",
    ...Object.values(translations).map((language) => language.officialOrganizer),
  ].filter(Boolean);
}

function isOfficialProfileName(name) {
  if (!name) return false;
  const target = slugify(name);
  return officialProfileNames().some((officialName) => slugify(officialName) === target);
}

function currentAccountRecord() {
  return userAccounts.find((account) => account.id === activeAccountId) || userAccounts[0] || null;
}

function profileMetaFor(name) {
  if (name === "You") return currentAccountRecord()?.profile || myProfile;
  return creatorProfileMeta[name] || {};
}

function monthsBetween(startDate, endDate = new Date()) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

function membershipYearLabel(startDate) {
  const months = monthsBetween(startDate);
  const years = Math.max(1, Math.floor(months / 12) + 1);
  return `${years}年目`;
}

function currentCreatorSubscriptions() {
  return creatorSubscriptions.filter((entry) => entry.accountId === activeAccountId);
}

function circleSubscriptionKey(circleId) {
  return `circle:${circleId}`;
}

function circleIdFromSubscriptionKey(key = "") {
  return key.startsWith("circle:") ? key.slice(7) : "";
}

function isCircleSubscriptionKey(key = "") {
  return Boolean(circleIdFromSubscriptionKey(key));
}

function subscriptionTargetLabel(target = "") {
  const circle = circleById(circleIdFromSubscriptionKey(target));
  return circle ? circle.name : target;
}

function circleSupportPayoutLabel(circle) {
  return circle?.supportPayout === "split" ? "メンバーで分配" : "オーナーが受け取る";
}

function circleSubscriptionPlans(circle) {
  if (!circle) return [];
  return [
    {
      id: `${circle.id}-free`,
      name: "Circle follow",
      price: 0,
      summary: `${circle.name}の更新通知と一部の支援者向け投稿を受け取れる無料プラン。`,
      perks: ["更新通知", "一部の支援者向け投稿", circleSupportPayoutLabel(circle)],
      cardImage: circle.cover,
      circleId: circle.id
    },
    {
      id: `${circle.id}-supporter`,
      name: "Circle supporter",
      price: 500,
      summary: `${circle.name}の活動、イベント準備、限定投稿を支援する月額プラン。`,
      perks: ["支援者限定投稿", "イベント準備ログ", circleSupportPayoutLabel(circle)],
      cardImage: circle.cover,
      circleId: circle.id
    }
  ];
}

function subscriptionProgramFor(creator) {
  const circleId = circleIdFromSubscriptionKey(creator);
  if (circleId) return circleSubscriptionPlans(circleById(circleId));
  return creatorSubscriptionPrograms[creator] || [];
}

function subscriptionPlanById(creator, planId) {
  return subscriptionProgramFor(creator).find((plan) => plan.id === planId) || null;
}

function currentSubscriptionFor(creator) {
  return currentCreatorSubscriptions().find((entry) => entry.creator === creator) || null;
}

function isSubscribedToCreator(creator) {
  return Boolean(currentSubscriptionFor(creator));
}

function canViewPin(pin) {
  if (!pin) return false;
  if (pin.circleId && !joinedCircleIds.has(pin.circleId)) return false;
  if (pin.visibility === "SubscriberOnly" && pin.creator !== "You" && !isSubscribedToCreator(pin.creator)) return false;
  return true;
}

function creatorPosts(creator) {
  return pins.filter((pin) => pin.creator === creator && canViewPin(pin));
}

function requestItemsByClient(client) {
  return requestManagerItems.filter((item) => item.client === client);
}

function syntheticClientPosts(client) {
  return requestItemsByClient(client).map((item, index) => ({
    id: 5000 + item.id,
    title: item.title,
    category: "Commission",
    creator: client,
    role: "Client",
    avatar: "Client",
    world: "Request board",
    tags: ["#request", "#client", `#${requestStateLabel(item.status)}`],
    request: null,
    description: item.summary,
    image: item.thumbnail,
    likes: 40 + index * 12,
  }));
}

function syntheticEventOrganizerPosts(organizer) {
  return [...getOfficialEventCampaignList(), ...getCommunityEventCampaignList()]
    .filter((event) => event.organizer === organizer)
    .map((event, index) => ({
      id: 7000 + index,
      title: event.title,
      category: "Event",
      creator: organizer,
      role: currentLanguage === "en" ? "Event organizer" : currentLanguage === "ko" ? "이벤트 주최자" : "イベント主催者",
      avatar: "Event",
      world: "Event hub",
      tags: event.tags?.length ? event.tags : (event.highlights || []).map(eventHashTag),
      request: null,
      description: event.body,
      image: event.image || vrchatImages.event,
      likes: 80 + index * 18,
    }));
}

function findPostById(id) {
  return [...pins, ...myPosts].find((pin) => pin.id === id);
}

function creatorHasOpenRequest(creator) {
  return creatorPosts(creator).some((pin) => pin.request?.open);
}

function primaryOpenRequestForCreator(creator) {
  return creatorPosts(creator).find((pin) => pin.request?.open)?.request || null;
}

function primaryOpenRequestPostForCreator(creator) {
  return creatorPosts(creator).find((pin) => pin.request?.open) || null;
}

function postAllowsComments(pin) {
  return pin?.allowReplies !== false;
}

function commentsForPost(pinId) {
  if (!postComments[pinId]) postComments[pinId] = [];
  return postComments[pinId];
}

function renderDialogComments() {
  if (!currentPin || !dialogComments || !dialogCommentsList) return;
  const allowed = postAllowsComments(currentPin);
  const comments = commentsForPost(currentPin.id);
  if (dialogCommentsTitle) dialogCommentsTitle.textContent = `コメント ${comments.length}`;
  if (dialogCommentsState) {
    dialogCommentsState.textContent = allowed ? "許可中" : "オフ";
    dialogCommentsState.classList.toggle("is-closed", !allowed);
  }
  dialogCommentsList.innerHTML = comments.length
    ? comments.map((comment) => `
      <article class="post-comment">
        <span class="post-comment-avatar">${escapeHtml(comment.author.slice(0, 1).toUpperCase())}</span>
        <div>
          <header>
            <strong>${escapeHtml(comment.author)}</strong>
            <small>${escapeHtml(comment.time)}</small>
          </header>
          <p>${escapeHtml(comment.body)}</p>
        </div>
      </article>
    `).join("")
    : `<div class="post-comments-empty">${allowed ? "まだコメントはありません。" : "この投稿ではコメントがオフになっています。"}</div>`;
  if (dialogCommentForm) dialogCommentForm.hidden = !allowed;
  if (dialogCommentInput) {
    dialogCommentInput.disabled = !allowed;
    dialogCommentInput.value = "";
  }
  if (dialogCommentSubmit) dialogCommentSubmit.disabled = true;
}

function submitDialogComment() {
  if (!currentPin || !postAllowsComments(currentPin) || !dialogCommentInput) return;
  const body = dialogCommentInput.value.trim();
  if (!body) return;
  commentsForPost(currentPin.id).push({
    id: `c-${currentPin.id}-${Date.now()}`,
    author: currentUserDisplayName(),
    time: "いま",
    body
  });
  renderDialogComments();
  dialogCommentInput.focus();
}

function openRequestPostsForCreator(creator) {
  return creatorPosts(creator).filter((pin) => pin.request?.open);
}

function circleById(id) {
  return circleGroups.find((circle) => circle.id === id) || null;
}

function circlePosts(circleId) {
  return pins.filter((pin) => pin.circleId === circleId);
}

function circleJoinLabel(circleId) {
  if (joinedCircleIds.has(circleId)) {
    return currentLanguage === "en" ? "Joined" : currentLanguage === "ko" ? "참여 중" : "参加中";
  }
  return currentLanguage === "en" ? "Join circle" : currentLanguage === "ko" ? "서클 참여" : "サークルに参加";
}

function circleMeta(circle) {
  const memberText = currentLanguage === "en"
    ? `${circle.members.toLocaleString()} members`
    : currentLanguage === "ko"
      ? `${circle.members.toLocaleString()}명`
      : `${circle.members.toLocaleString()}人`;
  const joinedText = joinedCircleIds.has(circle.id)
    ? (currentLanguage === "en" ? "Joined" : currentLanguage === "ko" ? "참여 중" : "参加中")
    : (currentLanguage === "en" ? "Not joined" : currentLanguage === "ko" ? "미참여" : "未参加");
  return [memberText, circle.visibility, joinedText, circleSupportPayoutLabel(circle)];
}

function circleSearchQuery() {
  return (circleSearchInput?.value || "").trim().toLowerCase();
}

function circleMatchesSearch(circle, query = circleSearchQuery()) {
  if (!query) return true;
  const terms = query.split(/\s+/).filter(Boolean);
  const haystack = [
    circle.name,
    circle.owner,
    circle.description,
    circle.visibility,
    circle.eventRule,
    ...(circle.tags || []),
  ].join(" ").toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

function circleFilterState() {
  return circleFilterInputs.reduce((state, input) => {
    state[input.dataset.circleFilter] = input.checked;
    return state;
  }, { joined: true, approval: true, open: true });
}

function circleRequiresApproval(circle) {
  return circle.visibility === "承認制";
}

function circleMatchesVisibilityFilters(circle) {
  const filters = circleFilterState();
  if (joinedCircleIds.has(circle.id) && !filters.joined) return false;
  if (circleRequiresApproval(circle) && !filters.approval) return false;
  if (!circleRequiresApproval(circle) && !filters.open) return false;
  return true;
}

function normalizeCircleName(name) {
  return name.trim().replace(/\s+/g, " ").toLowerCase();
}

function circleNameExists(name, ignoreId = "") {
  const normalized = normalizeCircleName(name);
  if (!normalized) return false;
  return circleGroups.some((circle) => circle.id !== ignoreId && normalizeCircleName(circle.name) === normalized);
}

function uniqueCircleId(name) {
  const base = slugify(name) || `circle-${Date.now()}`;
  let candidate = base;
  let index = 2;
  while (circleById(candidate)) {
    candidate = `${base}-${index}`;
    index += 1;
  }
  return candidate;
}

function parseCircleTags(value) {
  return value
    .split(/[,\s]+/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .map((tag) => tag.startsWith("#") ? tag : `#${tag}`)
    .slice(0, 5);
}

function readCircleCoverFile() {
  const file = circleCreateCoverInput?.files?.[0];
  if (!file) return Promise.resolve("");
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(typeof reader.result === "string" ? reader.result : ""));
    reader.addEventListener("error", () => resolve(""));
    reader.readAsDataURL(file);
  });
}

function resetCircleCreateForm() {
  editingCircleId = "";
  circleCreateForm?.reset();
  if (circleCreateNameError) {
    circleCreateNameError.hidden = true;
    circleCreateNameError.textContent = "";
  }
  circleCreateNameInput?.classList.remove("is-invalid");
  if (circleCreateTitle) circleCreateTitle.textContent = "サークルを作る";
  if (circleCreateLead) circleCreateLead.textContent = "サークル名と参加条件を設定すると、作成後すぐにサークル一覧と管理画面に追加されます。";
  if (circleCreateCoverHelp) circleCreateCoverHelp.textContent = "未選択の場合はサンプル画像を使用します。";
  if (circleCreateSubmit) circleCreateSubmit.textContent = "作成する";
  syncTrimRequiredFields(circleCreateForm);
  updateCircleCreateState();
}

function updateCircleCreateState() {
  syncTrimRequiredFields(circleCreateForm);
  const name = circleCreateNameInput?.value || "";
  const duplicate = circleNameExists(name, editingCircleId);
  if (circleCreateNameError) {
    circleCreateNameError.hidden = !duplicate;
    circleCreateNameError.textContent = duplicate ? "同じ名前のサークルは作成できません。" : "";
  }
  circleCreateNameInput?.classList.toggle("is-invalid", duplicate);
  if (circleCreateSubmit) {
    circleCreateSubmit.disabled = !(Boolean(circleCreateForm?.checkValidity()) && !duplicate);
  }
}

function openCircleCreateDialog() {
  resetCircleCreateForm();
  showModalElement(circleCreateDialog);
  window.setTimeout(() => circleCreateNameInput?.focus(), 100);
}

function openCircleEditDialog(circleId = activeManagedCircleId) {
  const circle = circleById(circleId);
  if (!circle || !circleCreateForm) return;
  resetCircleCreateForm();
  editingCircleId = circle.id;
  if (circleCreateTitle) circleCreateTitle.textContent = "サークル設定を編集";
  if (circleCreateLead) circleCreateLead.textContent = "サークル作成時に設定した項目をここで更新できます。保存すると一覧、管理画面、投稿先の表示に反映されます。";
  if (circleCreateCoverHelp) circleCreateCoverHelp.textContent = "新しい画像を選んだときだけ更新します。未選択なら現在のカバー画像を維持します。";
  if (circleCreateSubmit) circleCreateSubmit.textContent = "更新する";
  if (circleCreateNameInput) circleCreateNameInput.value = circle.name || "";
  if (circleCreateDescriptionInput) circleCreateDescriptionInput.value = circle.description || "";
  if (circleCreateVisibilityInput) circleCreateVisibilityInput.value = circle.visibility || "自由参加OK";
  if (circleCreatePostAudienceInput) circleCreatePostAudienceInput.value = ["Public", "CircleOnly", "Both"].includes(circle.postAudience) ? circle.postAudience : "CircleOnly";
  if (circleCreateSupportPayoutInput) circleCreateSupportPayoutInput.value = circle.supportPayout === "split" ? "split" : "owner";
  if (circleCreateTagsInput) circleCreateTagsInput.value = (circle.tags || []).join(" ");
  if (circleCreateCoverInput) circleCreateCoverInput.value = "";
  syncTrimRequiredFields(circleCreateForm);
  updateCircleCreateState();
  showModalElement(circleCreateDialog);
  window.setTimeout(() => circleCreateNameInput?.focus(), 100);
}

function closeCircleCreateDialog() {
  closeModalElement(circleCreateDialog);
}

async function createCircleFromForm(event) {
  event.preventDefault();
  if (!circleCreateNameInput || !circleCreateDescriptionInput || !circleCreateVisibilityInput) return;
  syncTrimRequiredFields(circleCreateForm);
  if (!circleCreateForm?.reportValidity()) return;
  const name = circleCreateNameInput.value.trim().replace(/\s+/g, " ");
  const description = circleCreateDescriptionInput.value.trim();
  if (!name || !description) return;
  if (circleNameExists(name, editingCircleId)) {
    updateCircleCreateState();
    return;
  }

  const tags = parseCircleTags(circleCreateTagsInput?.value || "");
  const cover = await readCircleCoverFile();
  const postAudience = ["Public", "CircleOnly", "Both"].includes(circleCreatePostAudienceInput?.value)
    ? circleCreatePostAudienceInput.value
    : "CircleOnly";
  const supportPayout = circleCreateSupportPayoutInput?.value === "split" ? "split" : "owner";
  if (editingCircleId) {
    const circle = circleById(editingCircleId);
    if (!circle) return;
    circle.name = name;
    circle.description = description;
    circle.tags = tags.length ? tags : ["#circle"];
    circle.visibility = circleCreateVisibilityInput.value;
    circle.postAudience = postAudience;
    circle.supportPayout = supportPayout;
    if (cover) circle.cover = cover;
    const data = circleManagementFor(circle.id);
    if (data) data.owner = data.owner || circle.owner;
    closeCircleCreateDialog();
    renderCirclesPage(null, { scroll: false });
    showProfileCopyToast(`${circle.name}の設定を更新しました`);
    return;
  }

  const id = uniqueCircleId(name);
  const circle = {
    id,
    name,
    owner: "You",
    cover: cover || vrchatImages.community,
    description,
    tags: tags.length ? tags : ["#circle"],
    members: 1,
    visibility: circleCreateVisibilityInput.value,
    postAudience,
    supportPayout,
    eventRule: "イベント参加条件として設定可能",
  };
  circleGroups.unshift(circle);
  circleManagementData[id] = {
    owner: "You",
    managedByYou: true,
    members: [
      { id: "you", name: "You", role: "Owner", joined: "作成者", status: "管理者", avatar: "Y" }
    ],
    requests: []
  };
  joinedCircleIds.add(id);
  activeCirclePageId = id;
  activeManagedCircleId = id;
  activeCircleTab = "manage";
  closeCircleCreateDialog();
  history.pushState("", document.title, `${location.pathname}${location.search}#circle-manager/${id}`);
  renderCirclesPage(null, { scroll: false });
  showRequestAcceptPopup("サークルを作成しました", `${name}の管理画面へ移動しました`);
}

function resetSubscriptionPlanForm() {
  editingSubscriptionPlanId = "";
  pendingSubscriptionPlanImage = "";
  subscriptionPlanForm?.reset();
  renderSubscriptionPlanImagePreview("");
  if (subscriptionPlanTitle) subscriptionPlanTitle.textContent = "メンバーシッププランを作成";
  if (subscriptionPlanLead) subscriptionPlanLead.textContent = "公式承認なしで、自分のプロフィール上に複数の支援プランを作成できます。";
  syncTrimRequiredFields(subscriptionPlanForm);
  updateSubscriptionPlanState();
}

function renderSubscriptionPlanImagePreview(src = pendingSubscriptionPlanImage) {
  if (!subscriptionPlanImagePreview || !subscriptionPlanImagePreviewImg) return;
  subscriptionPlanImagePreview.hidden = !src;
  if (src) {
    subscriptionPlanImagePreviewImg.src = src;
  } else {
    subscriptionPlanImagePreviewImg.removeAttribute("src");
  }
}

function updateSubscriptionPlanState() {
  if (!subscriptionPlanForm || !subscriptionPlanSubmit) return;
  syncTrimRequiredFields(subscriptionPlanForm);
  subscriptionPlanSubmit.disabled = !subscriptionPlanForm.checkValidity();
}

function openSubscriptionPlanDialog(planId = "") {
  resetSubscriptionPlanForm();
  const plans = creatorSubscriptionPrograms.You || [];
  const plan = planId ? plans.find((item) => item.id === planId) : null;
  if (plan) {
    editingSubscriptionPlanId = plan.id;
    pendingSubscriptionPlanImage = plan.cardImage || "";
    if (subscriptionPlanTitle) subscriptionPlanTitle.textContent = "メンバーシッププランを編集";
    if (subscriptionPlanLead) subscriptionPlanLead.textContent = "価格、概要、特典内容を更新するとプロフィールの支援導線に即時反映されます。";
    if (subscriptionPlanName) subscriptionPlanName.value = plan.name || "";
    if (subscriptionPlanPrice) subscriptionPlanPrice.value = String(plan.price || "");
    if (subscriptionPlanSummary) subscriptionPlanSummary.value = plan.summary || "";
    if (subscriptionPlanPerks) subscriptionPlanPerks.value = (plan.perks || []).join("\n");
    renderSubscriptionPlanImagePreview();
  }
  updateSubscriptionPlanState();
  showModalElement(subscriptionPlanDialog);
  window.setTimeout(() => subscriptionPlanName?.focus(), 100);
}

function closeSubscriptionPlanDialog() {
  closeModalElement(subscriptionPlanDialog);
}

function saveSubscriptionPlan(event) {
  event.preventDefault();
  syncTrimRequiredFields(subscriptionPlanForm);
  if (!subscriptionPlanForm?.reportValidity()) return;
  const plan = {
    id: editingSubscriptionPlanId || `you-plan-${Date.now()}`,
    name: subscriptionPlanName?.value.trim() || "Supporter",
    price: Number(subscriptionPlanPrice?.value || 0),
    summary: subscriptionPlanSummary?.value.trim() || "",
    cardImage: pendingSubscriptionPlanImage || "",
    perks: String(subscriptionPlanPerks?.value || "")
      .split(/\n+/)
      .map((item) => item.trim())
      .filter(Boolean)
  };
  const plans = creatorSubscriptionPrograms.You || [];
  if (editingSubscriptionPlanId) {
    const index = plans.findIndex((item) => item.id === editingSubscriptionPlanId);
    if (index >= 0) plans.splice(index, 1, plan);
  } else {
    plans.push(plan);
  }
  creatorSubscriptionPrograms.You = plans;
  closeSubscriptionPlanDialog();
  if (activeProfile === "You") renderProfile("You");
  if (subscriptionsView && !subscriptionsView.hidden) renderSubscriptionsPage();
  showProfileCopyToast("メンバーシッププランを更新しました");
}

function subscribeToCreatorPlan(creator, planId) {
  const existingIndex = creatorSubscriptions.findIndex((entry) => entry.accountId === activeAccountId && entry.creator === creator);
  const earlySupporter = !creatorSubscriptions.some((entry) => entry.creator === creator);
  const label = subscriptionTargetLabel(creator);
  const entry = {
    accountId: activeAccountId,
    creator,
    planId,
    startedAt: new Date().toISOString().slice(0, 10),
    visibleOnProfile: true,
    earlySupporter
  };
  if (existingIndex >= 0) creatorSubscriptions.splice(existingIndex, 1, entry);
  else creatorSubscriptions.push(entry);
  if (activeProfile) renderProfile(activeProfile);
  if (subscriptionsView && !subscriptionsView.hidden) renderSubscriptionsPage();
  renderPins();
  showProfileCopyToast(`${label}を支援中にしました`);
}

function unsubscribeFromCreatorPlan(creator, planId) {
  const existingIndex = creatorSubscriptions.findIndex((entry) =>
    entry.accountId === activeAccountId && entry.creator === creator && entry.planId === planId
  );
  if (existingIndex < 0) return;
  creatorSubscriptions.splice(existingIndex, 1);
  if (activeProfile) renderProfile(activeProfile);
  if (subscriptionsView && !subscriptionsView.hidden) renderSubscriptionsPage({ scroll: false });
  renderPins();
  showProfileCopyToast(`${subscriptionTargetLabel(creator)}のプランを退会しました`);
}

function openSubscriptionPlanDetailDialog(creator, planId) {
  const plan = subscriptionPlanById(creator, planId);
  if (!plan || !subscriptionPlanDetailDialog) return;
  const joined = currentSubscriptionFor(creator)?.planId === plan.id;
  const label = subscriptionTargetLabel(creator);
  const circle = circleById(circleIdFromSubscriptionKey(creator));
  pendingSubscriptionPlanDetail = { creator, planId };
  const priceText = formatSubscriptionPrice(plan.price);
  const image = subscriptionPlanCardImage(plan, creator);

  if (subscriptionPlanDetailVisual) {
    subscriptionPlanDetailVisual.innerHTML = `
      <img src="${escapeHtml(image)}" alt="${escapeHtml(plan.name)} plan image" />
      <span>${Number(plan.price || 0) <= 0 ? "Free plan" : "Membership"}</span>
    `;
  }
  if (subscriptionPlanDetailEyebrow) subscriptionPlanDetailEyebrow.textContent = `${label} / ${circle ? "Circle support" : "Membership"}`;
  if (subscriptionPlanDetailTitle) subscriptionPlanDetailTitle.textContent = plan.name;
  if (subscriptionPlanDetailSummary) subscriptionPlanDetailSummary.textContent = plan.summary || (circle ? "サークルの活動や限定投稿を支援するプランです。" : "限定投稿や制作ログを閲覧できる支援プランです。");
  if (subscriptionPlanDetailPrice) {
    subscriptionPlanDetailPrice.innerHTML = `
      <strong>${priceText}</strong>
      <small>${Number(plan.price || 0) <= 0 ? "無料プラン。支払いなしで加入できます。" : "月額課金としてStripe等へ接続する想定です。"}</small>
    `;
  }
  if (subscriptionPlanDetailPerks) {
    subscriptionPlanDetailPerks.innerHTML = (plan.perks || []).map((perk) => `<span>${escapeHtml(perk)}</span>`).join("");
  }
  if (subscriptionPlanDetailNote) {
    subscriptionPlanDetailNote.textContent = circle
      ? `加入後はサークル支援カードをプロフィールに掲載できます。支援金は「${circleSupportPayoutLabel(circle)}」設定です。`
      : "加入後はメンバーシップ限定投稿を閲覧でき、支援履歴カードを自分のプロフィールに掲載できます。";
  }
  if (subscriptionPlanDetailJoin) {
    subscriptionPlanDetailJoin.hidden = joined;
    subscriptionPlanDetailJoin.disabled = joined;
    subscriptionPlanDetailJoin.textContent = `${priceText}で加入する`;
  }
  if (subscriptionPlanDetailLeave) {
    subscriptionPlanDetailLeave.hidden = !joined;
  }
  showModalElement(subscriptionPlanDetailDialog);
}

function closeSubscriptionPlanDetailDialog() {
  pendingSubscriptionPlanDetail = { creator: "", planId: "" };
  if (subscriptionPlanDetailJoin) subscriptionPlanDetailJoin.hidden = false;
  if (subscriptionPlanDetailLeave) subscriptionPlanDetailLeave.hidden = true;
  closeModalElement(subscriptionPlanDetailDialog);
}

function allSubscriptionPlans() {
  const creatorPlans = Object.entries(creatorSubscriptionPrograms).flatMap(([creator, plans]) =>
    (plans || []).map((plan) => ({ creator, plan }))
  );
  const circlePlans = circleGroups.flatMap((circle) =>
    circleSubscriptionPlans(circle).map((plan) => ({ creator: circleSubscriptionKey(circle.id), plan }))
  );
  return [...creatorPlans, ...circlePlans];
}

function currentJoinedSubscriptionCards() {
  return currentCreatorSubscriptions()
    .map((entry) => ({
      ...entry,
      plan: subscriptionPlanById(entry.creator, entry.planId)
    }))
    .filter((entry) => entry.plan);
}

function subscriptionPlanSearchMatches(item, query) {
  if (!query) return true;
  const circle = circleById(circleIdFromSubscriptionKey(item.creator));
  const text = [
    subscriptionTargetLabel(item.creator),
    circle?.owner || "",
    circle?.visibility || "",
    item.plan.name,
    item.plan.summary,
    ...(item.plan.perks || [])
  ].join(" ").toLowerCase();
  return query.split(/\s+/).filter(Boolean).every((word) => text.includes(word.toLowerCase()));
}

function renderSubscriptionsPage({ scroll = true } = {}) {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = false;
  updateTopbarSearchVisibility();
  if (subscriptionsSearchInput && subscriptionsSearchInput.value !== subscriptionsQuery) {
    subscriptionsSearchInput.value = subscriptionsQuery;
  }

  const joined = currentJoinedSubscriptionCards();
  if (subscriptionsJoinedList) {
    subscriptionsJoinedList.innerHTML = joined.length
      ? joined.map((entry) => `
        <article class="subscriptions-summary-card support-history-card">
          ${subscriptionPlanVisualMarkup(entry.plan, entry.creator, entry.earlySupporter ? "Early supporter" : "Joined")}
          <span class="support-history-badge">${entry.earlySupporter ? "Early supporter" : "Joined plan"}</span>
          <strong>${escapeHtml(subscriptionTargetLabel(entry.creator))}</strong>
          <p>${escapeHtml(entry.plan.name)} / ${formatSubscriptionPrice(entry.plan.price)}</p>
          <small>${subscriptionDurationLabel(entry.startedAt)} / ${entry.startedAt}</small>
          <button class="soft-button" type="button" data-plan-detail="${escapeHtml(entry.plan.id)}" data-plan-creator="${escapeHtml(entry.creator)}">プラン詳細を見る</button>
        </article>
      `).join("")
      : `<article class="subscriptions-empty-card"><strong>加入中のプランはありません</strong><p>気になるクリエイターのプランを探して、限定投稿や支援カードを試せます。</p></article>`;
  }

  const query = subscriptionsQuery.trim();
  const plans = allSubscriptionPlans().filter((item) => subscriptionPlanSearchMatches(item, query));
  if (subscriptionsPlanResults) {
    subscriptionsPlanResults.innerHTML = plans.length
      ? plans.map(({ creator, plan }) => {
        const joinedPlan = currentSubscriptionFor(creator)?.planId === plan.id;
        const circle = circleById(circleIdFromSubscriptionKey(creator));
        const targetLabel = subscriptionTargetLabel(creator);
        return `
          <article class="subscription-plan-card-item ${joinedPlan ? "is-active" : ""} ${Number(plan.price || 0) <= 0 ? "is-free" : ""}">
            ${subscriptionPlanVisualMarkup(plan, creator, joinedPlan ? "Joined" : circle ? "Circle support" : "Membership")}
            <div>
              <strong>${escapeHtml(plan.name)}</strong>
              <span>${formatSubscriptionPrice(plan.price)}</span>
            </div>
            <small>${escapeHtml(targetLabel)}${circle ? ` / ${escapeHtml(circleSupportPayoutLabel(circle))}` : ""}</small>
            <p>${escapeHtml(plan.summary || "限定投稿や制作ログを閲覧できる支援プランです。")}</p>
            <small>${escapeHtml((plan.perks || []).join(" / "))}</small>
            <div class="subscriptions-plan-actions">
              <button class="${joinedPlan ? "soft-button" : "primary-button"}" type="button" data-plan-detail="${escapeHtml(plan.id)}" data-plan-creator="${escapeHtml(creator)}">${joinedPlan ? "加入中 / 詳細を見る" : "プラン詳細を見る"}</button>
              ${circle
                ? `<button class="soft-button" type="button" data-circle-open="${escapeHtml(circle.id)}">サークル</button>`
                : `<button class="soft-button" type="button" data-profile-open="${escapeHtml(slugify(creator))}">プロフィール</button>`}
            </div>
          </article>
        `;
      }).join("")
      : `<article class="subscriptions-empty-card"><strong>一致するプランはありません</strong><p>クリエイター名、プラン名、特典内容で検索できます。</p></article>`;
  }

  const myPlans = creatorSubscriptionPrograms.You || [];
  if (subscriptionsCreatorPlans) {
    subscriptionsCreatorPlans.innerHTML = myPlans.length
      ? myPlans.map((plan) => `
        <article class="subscription-plan-card-item ${Number(plan.price || 0) <= 0 ? "is-free" : ""}">
          ${subscriptionPlanVisualMarkup(plan, "You", "Creator plan")}
          <div>
            <strong>${escapeHtml(plan.name)}</strong>
            <span>${formatSubscriptionPrice(plan.price)}</span>
          </div>
          <p>${escapeHtml(plan.summary || "限定投稿や支援カード用のプランです。")}</p>
          <small>${escapeHtml((plan.perks || []).join(" / "))}</small>
          <button class="soft-button" type="button" data-plan-edit="${escapeHtml(plan.id)}">編集</button>
        </article>
      `).join("")
      : `<article class="subscriptions-empty-card"><strong>まだプランがありません</strong><p>無料プランや月額プランを作って、プロフィールに支援導線を追加できます。</p></article>`;
  }
  if (scroll) scrollPageTop();
}

function openSubscriptionsPage() {
  closeAccountMenu();
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#subscriptions") {
    subscriptionsReturnHash = location.hash;
  } else if (!location.hash) {
    subscriptionsReturnHash = "";
  }
  location.hash = "subscriptions";
  renderSubscriptionsPage();
}

function returnFromSubscriptionsPage() {
  const targetHash = subscriptionsReturnHash;
  subscriptionsReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

async function loadSubscriptionPlanImage(file) {
  const image = await readImageFile(file);
  if (!image) return;
  pendingSubscriptionPlanImage = image.src;
  renderSubscriptionPlanImagePreview();
}

function circleCard(circle) {
  const joined = joinedCircleIds.has(circle.id);
  const postCount = circlePosts(circle.id).length;
  return `
    <button class="circle-card ${joined ? "is-joined" : ""}" type="button" data-circle-open="${circle.id}">
      <span class="circle-card-cover">
        <img src="${circle.cover}" alt="${circle.name}" loading="lazy" />
      </span>
      <span class="circle-card-copy">
        <span class="circle-card-kicker">${joined ? circleJoinLabel(circle.id) : circle.visibility}</span>
        <strong>${circle.name}</strong>
        <span>${circle.description}</span>
        <span class="circle-card-meta">
          <small>${circle.members.toLocaleString()} members</small>
          <small>${postCount} posts</small>
          <small>${circlePostAudienceValue(circle)}</small>
          <small>${circle.owner}</small>
        </span>
      </span>
    </button>
  `;
}

function renderCircleCards(activeCircleId = null) {
  if (!circleGrid) return;
  const circles = circleGroups
    .filter((circle) => circle.id !== activeCircleId)
    .filter((circle) => circleMatchesVisibilityFilters(circle))
    .filter((circle) => circleMatchesSearch(circle));
  circleGrid.innerHTML = circles.length
    ? circles.map(circleCard).join("")
    : `
      <article class="circle-locked-card circle-empty-card">
        <span>Empty</span>
        <strong>${t("circleEmptyTitle")}</strong>
        <p>${t("circleEmptyBody")}</p>
      </article>
    `;
}

function managedCircleIds() {
  return Object.entries(circleManagementData)
    .filter(([, data]) => data.managedByYou)
    .map(([id]) => id)
    .filter((id) => circleById(id));
}

function managedCircles() {
  return managedCircleIds().map((id) => circleById(id)).filter(Boolean);
}

function circleManagementFor(id) {
  return circleManagementData[id] || null;
}

function roleLabel(role) {
  const labels = {
    Owner: "オーナー",
    Manager: "共同管理者",
    Member: "メンバー"
  };
  return labels[role] || role;
}

function currentCircleManagerRole(data) {
  return data?.members?.find((member) => member.id === "you" || member.name === "You")?.role || "Member";
}

function currentCircleManagerIsOwner(data) {
  return currentCircleManagerRole(data) === "Owner";
}

function ensureActiveManagedCircle() {
  const ids = managedCircleIds();
  if (!ids.length) return null;
  if (!ids.includes(activeManagedCircleId)) activeManagedCircleId = ids[0];
  return circleById(activeManagedCircleId);
}

function renderCircleManager() {
  if (!circleManagerList || !circleManagerSummary || !circleManagerMembers || !circleManagerRequests || !circleManagerRoles) return;
  const circles = managedCircles();
  const activeCircle = ensureActiveManagedCircle();
  if (!circles.length || !activeCircle) {
    circleManagerList.innerHTML = "";
    circleManagerSummary.innerHTML = `
      <article class="circle-manager-empty">
        <strong>管理中のサークルはありません</strong>
        <p>自分で作成したサークルや、管理権限を付与されたサークルがここに表示されます。</p>
      </article>
    `;
    circleManagerMembers.innerHTML = "";
    circleManagerRequests.innerHTML = "";
    circleManagerRoles.innerHTML = "";
    return;
  }
  circleManagerList.innerHTML = circles.map((circle) => {
    const data = circleManagementFor(circle.id);
    const requestCount = data?.requests?.length || 0;
    return `
      <button class="circle-manager-group${circle.id === activeCircle.id ? " is-active" : ""}" type="button" data-managed-circle="${escapeHtml(circle.id)}">
        <img src="${escapeHtml(circle.cover)}" alt="" loading="lazy" />
        <span>
          <strong>${escapeHtml(circle.name)}</strong>
          <small>${escapeHtml(roleLabel(data?.members?.[0]?.role || "Owner"))} / 申請 ${requestCount}件</small>
        </span>
      </button>
    `;
  }).join("");

  const data = circleManagementFor(activeCircle.id);
  const canTransferOwner = currentCircleManagerIsOwner(data);
  const currentRole = currentCircleManagerRole(data);
  const managerCount = data.members.filter((member) => member.role !== "Member").length;
  circleManagerSummary.innerHTML = `
    <article class="circle-manager-hero">
      <span class="circle-manager-hero-cover"><img src="${escapeHtml(activeCircle.cover)}" alt="" /></span>
      <span class="circle-manager-hero-copy">
        <small>${escapeHtml(activeCircle.visibility)} / ${escapeHtml(circlePostAudienceValue(activeCircle))}</small>
        <strong>${escapeHtml(activeCircle.name)}</strong>
        <em>${escapeHtml(activeCircle.description)}</em>
        <small>支援金: ${escapeHtml(circleSupportPayoutLabel(activeCircle))}</small>
        ${!canTransferOwner ? `<small>現在の権限: ${escapeHtml(roleLabel(currentRole))}</small>` : ""}
      </span>
      <span class="circle-manager-stats">
        <span><strong>${activeCircle.members.toLocaleString()}</strong><small>members</small></span>
        <span><strong>${managerCount}</strong><small>managers</small></span>
        <span><strong>${data.requests.length}</strong><small>requests</small></span>
      </span>
      <span class="circle-manager-hero-actions">
        <button class="icon-button circle-manager-edit-button" type="button" data-circle-role-action="edit-settings" aria-label="サークル設定を編集" title="サークル設定を編集">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
        </button>
      </span>
    </article>
  `;

  circleManagerMembers.innerHTML = data.members.map((member) => `
    <article class="circle-member-row">
      <span class="circle-member-avatar">${escapeHtml(member.avatar || member.name.slice(0, 1))}</span>
      <span class="circle-member-main">
        <strong>${escapeHtml(member.name)}</strong>
        <small>${escapeHtml(member.status)} / ${escapeHtml(member.joined)}</small>
      </span>
      <span class="circle-member-role is-${escapeHtml(member.role.toLowerCase())}">${escapeHtml(roleLabel(member.role))}</span>
      <span class="circle-member-actions">
        ${member.role === "Member" ? `<button class="soft-button" type="button" data-circle-role-action="promote" data-member="${escapeHtml(member.id)}">管理者にする</button>` : ""}
        ${member.role === "Manager" ? `<button class="soft-button" type="button" data-circle-role-action="demote" data-member="${escapeHtml(member.id)}">権限を外す</button>` : ""}
        ${canTransferOwner && member.role !== "Owner" ? `<button class="soft-button" type="button" data-circle-role-action="transfer" data-member="${escapeHtml(member.id)}">オーナー移譲</button>` : ""}
        ${member.role !== "Owner" && member.id !== "you" ? `<button class="soft-button request-report-button" type="button" data-circle-role-action="kick" data-member="${escapeHtml(member.id)}">サークルから外す</button>` : ""}
      </span>
    </article>
  `).join("");

  circleManagerRequests.innerHTML = data.requests.length
    ? data.requests.map((request) => `
      <article class="circle-request-row">
        <span>
          <strong>${escapeHtml(request.name)}</strong>
          <small>${escapeHtml(request.requested)}</small>
        </span>
        <p>${escapeHtml(request.note)}</p>
        <span class="circle-request-actions">
          <button class="primary-button" type="button" data-circle-request-action="approve" data-request="${escapeHtml(request.id)}">承認</button>
          <button class="soft-button" type="button" data-circle-request-action="reject" data-request="${escapeHtml(request.id)}">却下</button>
        </span>
      </article>
    `).join("")
    : `<article class="circle-manager-empty"><strong>参加申請はありません</strong><p>承認制サークルへの申請が届くとここで確認できます。</p></article>`;

  const transferableMembers = data.members.filter((member) => member.role !== "Owner");
  circleManagerRoles.innerHTML = `
    <button class="primary-button" type="button" data-circle-role-action="invite-manager">共同管理者を招待</button>
    <button class="soft-button" type="button" data-circle-role-action="bulk-permission">投稿管理権限を一括設定</button>
    ${canTransferOwner && transferableMembers[0] ? `<button class="soft-button" type="button" data-circle-role-action="transfer" data-member="${escapeHtml(transferableMembers[0].id)}">${escapeHtml(transferableMembers[0].name)}へオーナー移譲</button>` : ""}
    ${!canTransferOwner ? `<button class="soft-button request-report-button" type="button" data-circle-role-action="leave">サークルを退会</button>` : ""}
  `;
}

function renderCircleTabs() {
  const tabButtons = circleViewTabs ? [...circleViewTabs.querySelectorAll("[data-circle-tab]")] : [];
  tabButtons.forEach((button) => {
    const active = button.dataset.circleTab === activeCircleTab;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
  });
  if (circleListSection) circleListSection.hidden = activeCircleTab !== "browse";
  if (circlePostsSection) circlePostsSection.hidden = activeCircleTab !== "posts";
  if (circleManagerSection) circleManagerSection.hidden = activeCircleTab !== "manage";
  if (circleFilterControls) circleFilterControls.hidden = activeCircleTab !== "browse";
  if (circleSearchShell) circleSearchShell.hidden = activeCircleTab === "manage";
  if (activeCircleTab === "manage") renderCircleManager();
}

function renderCircleDetail(circle) {
  if (!circleDetailPanel || !circle) return;
  circleDetailPanel.hidden = false;
  circleDetailPanel.dataset.circleId = circle.id;
  if (circleDetailCover) {
    circleDetailCover.style.backgroundImage = `linear-gradient(180deg, rgba(16,16,16,0.08), rgba(16,16,16,0.34)), url("${circle.cover}")`;
  }
  if (circleDetailName) circleDetailName.textContent = circle.name;
  if (circleDetailDescription) circleDetailDescription.textContent = circle.description;
  if (circleDetailMeta) {
    circleDetailMeta.innerHTML = circleMeta(circle).map((item) => `<span>${item}</span>`).join("");
  }
  if (circleDetailTags) {
    circleDetailTags.innerHTML = circle.tags.map((tag) => `<span>${tag}</span>`).join("");
  }
  if (circleJoinButton) {
    circleJoinButton.textContent = circleJoinLabel(circle.id);
    circleJoinButton.dataset.circleJoin = circle.id;
    circleJoinButton.classList.toggle("is-joined", joinedCircleIds.has(circle.id));
  }
  if (circleSupportButton) {
    const circleKey = circleSubscriptionKey(circle.id);
    const joined = Boolean(currentSubscriptionFor(circleKey));
    circleSupportButton.textContent = joined ? "支援中 / 詳細" : "サークルを支援";
    circleSupportButton.dataset.circleSupport = circle.id;
    circleSupportButton.classList.toggle("is-active", joined);
  }
}

function renderCirclePosts(circle) {
  if (!circlePostsBoard || !circlePostsNote) return;
  const posts = circle ? circlePosts(circle.id) : pins.filter((pin) => pin.circleId && joinedCircleIds.has(pin.circleId));
  const joined = circle ? joinedCircleIds.has(circle.id) : true;
  if (circle && !joined) {
    circlePostsNote.textContent = `${circle.name}に参加すると、メンバー限定投稿を閲覧できます。`;
    circlePostsBoard.innerHTML = `
      <article class="circle-locked-card">
        <span>Locked</span>
        <strong>参加者限定投稿</strong>
        <p>このサークルの投稿は参加者だけが見られる想定です。イベント参加条件にも使えます。</p>
      </article>
    `;
    return;
  }
  circlePostsNote.textContent = circle
    ? `${circle.name}の参加者限定投稿です。`
    : "参加中のサークルの限定投稿をまとめて表示しています。";
  circlePostsBoard.innerHTML = posts.length
    ? posts.map(pinCard).join("")
    : `<article class="circle-locked-card"><span>Empty</span><strong>限定投稿はまだありません</strong><p>参加者だけが見られる投稿が作成されるとここに表示されます。</p></article>`;
  bindPinCards(circlePostsBoard);
}

function renderCirclesPage(circleId = null, options = {}) {
  const circle = circleId ? circleById(circleId) : null;
  activeCirclePageId = circle?.id || null;
  if (!circle && !["browse", "posts", "manage"].includes(activeCircleTab)) activeCircleTab = "browse";
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  circleView.hidden = false;
  if (circleDetailPanel) {
    circleDetailPanel.hidden = !circle;
    if (!circle) delete circleDetailPanel.dataset.circleId;
  }
  if (circle) renderCircleDetail(circle);
  renderCirclePosts(circle);
  renderCircleCards(circle?.id || null);
  renderCircleTabs();
  if (options.scroll !== false) scrollPageTop();
}

function openCirclesPage(circleId = null) {
  closeAccountMenu();
  if (modalIsOpen(dialog)) closePinDialog();
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  activeCircleTab = circleId ? "posts" : "browse";
  location.hash = circleId ? `circle/${circleId}` : "circles";
  renderCirclesPage(circleId);
}

function openCircleManagerPage(circleId = null) {
  closeAccountMenu();
  activeCircleTab = "manage";
  if (circleId && circleManagementFor(circleId)) activeManagedCircleId = circleId;
  location.hash = activeManagedCircleId ? `circle-manager/${activeManagedCircleId}` : "circle-manager";
  renderCirclesPage(null);
}

function returnFromCircles() {
  showFeed();
}

function circleRoleContext(circleId = activeManagedCircleId, memberId = "") {
  const circle = circleById(circleId);
  const data = circle ? circleManagementFor(circle.id) : null;
  const member = data?.members?.find((item) => item.id === memberId) || null;
  return { circle, data, member };
}

function promoteCircleMember(circleId, memberId) {
  const { circle, data, member } = circleRoleContext(circleId, memberId);
  if (!circle || !data || !member || member.role !== "Member") return false;
  member.role = "Manager";
  member.status = "投稿管理可";
  showProfileCopyToast(`${member.name}に管理権限を付与しました`);
  renderCircleManager();
  return true;
}

function transferCircleOwner(circleId, memberId) {
  const { circle, data, member: nextOwner } = circleRoleContext(circleId, memberId);
  if (!circle || !data || !nextOwner || nextOwner.role === "Owner") return false;
  if (!currentCircleManagerIsOwner(data)) {
    showProfileCopyToast("オーナー移譲はオーナーだけが実行できます");
    return false;
  }
  const currentOwner = data.members.find((item) => item.role === "Owner");
  if (currentOwner) {
    currentOwner.role = "Manager";
    currentOwner.status = "共同管理者";
  }
  nextOwner.role = "Owner";
  nextOwner.status = "管理者";
  data.owner = nextOwner.name;
  showProfileCopyToast(`${nextOwner.name}へオーナー権限を移譲しました`);
  renderCircleManager();
  return true;
}

function resetCircleRoleDialogState() {
  pendingCircleRoleAction = { action: "", circleId: "", memberId: "" };
  clearApproveHoldState(circlePromoteConfirm);
  if (circleTransferCircleInput) circleTransferCircleInput.value = "";
  if (circleTransferMemberInput) circleTransferMemberInput.value = "";
  if (circleTransferConfirm) circleTransferConfirm.disabled = true;
}

function openCirclePromoteDialog(memberId) {
  const { circle, member } = circleRoleContext(activeManagedCircleId, memberId);
  if (!circle || !member) return;
  pendingCircleRoleAction = { action: "promote", circleId: circle.id, memberId: member.id };
  if (circlePromoteCopy) {
    circlePromoteCopy.textContent = `${circle.name}の管理者権限を${member.name}に付与してよろしいですか？`;
  }
  clearApproveHoldState(circlePromoteConfirm);
  showModalElement(circlePromoteDialog);
}

function updateCircleTransferConfirmState() {
  const { circle, member } = circleRoleContext(pendingCircleRoleAction.circleId, pendingCircleRoleAction.memberId);
  const circleMatches = (circleTransferCircleInput?.value.trim() || "") === (circle?.name || "");
  const memberMatches = (circleTransferMemberInput?.value.trim() || "") === (member?.name || "");
  if (circleTransferConfirm) circleTransferConfirm.disabled = !(circleMatches && memberMatches);
}

function openCircleTransferDialog(memberId) {
  const { circle, member } = circleRoleContext(activeManagedCircleId, memberId);
  if (!circle || !member) return;
  const data = circleManagementFor(circle.id);
  if (!currentCircleManagerIsOwner(data)) {
    showProfileCopyToast("オーナー移譲はオーナーだけが実行できます");
    return;
  }
  pendingCircleRoleAction = { action: "transfer", circleId: circle.id, memberId: member.id };
  if (circleTransferCopy) {
    circleTransferCopy.textContent = `${circle.name}のオーナーを${member.name}に移譲してよろしいですか？`;
  }
  if (circleTransferCircleInput) {
    circleTransferCircleInput.value = "";
    circleTransferCircleInput.placeholder = "";
  }
  if (circleTransferCircleGhost) circleTransferCircleGhost.textContent = circle.name;
  if (circleTransferMemberInput) {
    circleTransferMemberInput.value = "";
    circleTransferMemberInput.placeholder = "";
  }
  if (circleTransferMemberGhost) circleTransferMemberGhost.textContent = member.name;
  updateCircleTransferConfirmState();
  showModalElement(circleTransferDialog);
  window.setTimeout(() => circleTransferCircleInput?.focus(), 80);
}

function confirmCirclePromoteHold() {
  const { action, circleId, memberId } = pendingCircleRoleAction;
  if (action !== "promote") return;
  if (promoteCircleMember(circleId, memberId)) {
    closeModalElement(circlePromoteDialog);
    showRequestAcceptPopup("管理者にしました", "サークル管理権限を付与しました");
  }
  resetCircleRoleDialogState();
}

function confirmCircleTransfer() {
  const { action, circleId, memberId } = pendingCircleRoleAction;
  if (action !== "transfer" || circleTransferConfirm?.disabled) return;
  if (transferCircleOwner(circleId, memberId)) {
    closeModalElement(circleTransferDialog);
    showRequestAcceptPopup("オーナーを移譲しました", "サークルの所有者を更新しました");
  }
  resetCircleRoleDialogState();
}

function resetCircleRejectDialogState() {
  pendingCircleRejectRequest = { circleId: "", requestId: "" };
}

function circleRequestContext(circleId = activeManagedCircleId, requestId = "") {
  const circle = circleById(circleId);
  const data = circle ? circleManagementFor(circle.id) : null;
  const request = data?.requests?.find((item) => item.id === requestId) || null;
  return { circle, data, request };
}

function openCircleRejectDialog(requestId) {
  const { circle, request } = circleRequestContext(activeManagedCircleId, requestId);
  if (!circle || !request) return;
  pendingCircleRejectRequest = { circleId: circle.id, requestId: request.id };
  if (circleRejectCopy) {
    circleRejectCopy.textContent = `${circle.name}への${request.name}の参加申請を却下してよろしいですか？`;
  }
  showModalElement(circleRejectDialog);
}

function confirmCircleReject() {
  const { circleId, requestId } = pendingCircleRejectRequest;
  const { circle, data, request } = circleRequestContext(circleId, requestId);
  if (!circle || !data || !request) return;
  data.requests = data.requests.filter((item) => item.id !== requestId);
  closeModalElement(circleRejectDialog);
  showProfileCopyToast(`${request.name}の参加申請を却下しました`);
  resetCircleRejectDialogState();
  renderCircleManager();
}

function resetCircleKickDialogState() {
  pendingCircleKickMember = { circleId: "", memberId: "" };
}

function openCircleKickDialog(memberId) {
  const { circle, member } = circleRoleContext(activeManagedCircleId, memberId);
  if (!circle || !member || member.role === "Owner" || member.id === "you") return;
  pendingCircleKickMember = { circleId: circle.id, memberId: member.id };
  if (circleKickCopy) {
    circleKickCopy.textContent = `${circle.name}から${member.name}を外してよろしいですか？`;
  }
  showModalElement(circleKickDialog);
}

function confirmCircleKick() {
  const { circleId, memberId } = pendingCircleKickMember;
  const { circle, data, member } = circleRoleContext(circleId, memberId);
  if (!circle || !data || !member || member.role === "Owner" || member.id === "you") return;
  data.members = data.members.filter((item) => item.id !== memberId);
  closeModalElement(circleKickDialog);
  showProfileCopyToast(`${member.name}を${circle.name}から外しました`);
  resetCircleKickDialogState();
  renderCircleManager();
}

function resetCircleLeaveDialogState() {
  pendingCircleLeave = { circleId: "" };
}

function openCircleLeaveDialog() {
  const circle = ensureActiveManagedCircle();
  const data = circle ? circleManagementFor(circle.id) : null;
  if (!circle || !data || currentCircleManagerIsOwner(data)) return;
  pendingCircleLeave = { circleId: circle.id };
  if (circleLeaveCopy) {
    circleLeaveCopy.textContent = `${circle.name}を退会すると、このサークルの管理画面には戻れなくなります。退会してよろしいですか？`;
  }
  showModalElement(circleLeaveDialog);
}

function confirmCircleLeave() {
  const circleId = pendingCircleLeave.circleId;
  const circle = circleById(circleId);
  const data = circle ? circleManagementFor(circle.id) : null;
  if (!circle || !data || currentCircleManagerIsOwner(data)) return;
  data.members = data.members.filter((member) => member.id !== "you" && member.name !== "You");
  data.managedByYou = false;
  joinedCircleIds.delete(circle.id);
  closeModalElement(circleLeaveDialog);
  resetCircleLeaveDialogState();
  showProfileCopyToast(`${circle.name}を退会しました`);
  const remainingManaged = managedCircleIds();
  if (remainingManaged.length) {
    if (!remainingManaged.includes(activeManagedCircleId)) activeManagedCircleId = remainingManaged[0];
    renderCircleManager();
    return;
  }
  activeManagedCircleId = "";
  activeCircleTab = "browse";
  history.pushState("", document.title, `${location.pathname}${location.search}#circles`);
  renderCirclesPage(null, { scroll: false });
}

function handleCircleManagerAction(action, detailId) {
  const circle = ensureActiveManagedCircle();
  const data = circle ? circleManagementFor(circle.id) : null;
  if (!circle || !data) return;
  if (action === "approve") {
    const request = data.requests.find((item) => item.id === detailId);
    if (!request) return;
    data.requests = data.requests.filter((item) => item.id !== detailId);
    data.members.push({ id: detailId, name: request.name, role: "Member", joined: "今日", status: "投稿可", avatar: request.name.slice(0, 1).toUpperCase() });
    showProfileCopyToast(`${request.name}を${circle.name}に承認しました`);
  } else if (action === "reject") {
    openCircleRejectDialog(detailId);
    return;
  } else if (action === "promote") {
    openCirclePromoteDialog(detailId);
    return;
  } else if (action === "demote") {
    const member = data.members.find((item) => item.id === detailId);
    if (member && member.role === "Manager") {
      member.role = "Member";
      member.status = "投稿可";
      showProfileCopyToast(`${member.name}の管理権限を外しました`);
    }
  } else if (action === "transfer") {
    openCircleTransferDialog(detailId);
    return;
  } else if (action === "kick") {
    openCircleKickDialog(detailId);
    return;
  } else if (action === "leave") {
    openCircleLeaveDialog();
    return;
  } else if (action === "edit-settings") {
    openCircleEditDialog(circle.id);
    return;
  } else if (action === "invite-manager") {
    showProfileCopyToast("共同管理者の招待リンクをコピーしました");
  } else if (action === "bulk-permission") {
    showProfileCopyToast("投稿管理権限の一括設定モックです");
  }
  renderCircleManager();
}

function toggleCircleJoin(circleId) {
  const circle = circleById(circleId);
  if (!circle) return;
  if (joinedCircleIds.has(circleId)) {
    joinedCircleIds.delete(circleId);
    showProfileCopyToast(`${circle.name}から退出しました`);
  } else {
    joinedCircleIds.add(circleId);
    showProfileCopyToast(`${circle.name}に参加しました`);
  }
  renderCirclesPage(circleId);
  renderPins();
}

function iconBookmark() {
  return `<svg class="bookmark-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M19 21 12 17 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" /></svg>`;
}

function iconFollow(following = false) {
  return `
    <svg class="follow-icon" aria-hidden="true" viewBox="0 0 24 24">
      <path class="follow-person" d="M16 20v-1.6a4.4 4.4 0 0 0-4.4-4.4H6.4A4.4 4.4 0 0 0 2 18.4V20" />
      <circle class="follow-head" cx="9" cy="7" r="4" />
      <path class="follow-mark" d="${following ? "m17.2 12.2 1.7 1.7 3.1-3.5" : "M19 9v6M16 12h6"}" />
    </svg>
  `;
}

function iconProfileAction(type, active = false) {
  const icons = {
    notify: active
      ? `<svg aria-hidden="true" viewBox="0 0 24 24"><path class="icon-fill-soft" d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2Z" /><path d="M9.8 20a2.4 2.4 0 0 0 4.4 0" /><path d="M18.5 4.5 21 2" /></svg>`
      : `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2Z" /><path d="M9.8 20a2.4 2.4 0 0 0 4.4 0" /><path d="m3 3 18 18" /></svg>`,
    mute: active
      ? `<svg aria-hidden="true" viewBox="0 0 24 24"><path class="icon-fill-soft" d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="m18 9-4 6" /><path d="m14 9 4 6" /></svg>`
      : `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="M16 9.5a4 4 0 0 1 0 5" /><path d="M18.5 7a7 7 0 0 1 0 10" /></svg>`,
    block: active
      ? `<svg aria-hidden="true" viewBox="0 0 24 24"><circle class="icon-fill-soft" cx="12" cy="12" r="8" /><path d="m7.8 7.8 8.4 8.4" /></svg>`
      : `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="m7.8 7.8 8.4 8.4" /></svg>`,
  };
  return icons[type] || "";
}

function filteredPins() {
  const query = searchInput.value.trim();
  const savedSearchQuery = savedSearchTabItems.find((item) => item.id === activeSavedSearchTabId)?.query || "";
  return pins.filter((pin) => {
    if (!canViewPin(pin)) return false;
    const matchesView = activeView === "discover"
      || (activeView === "following" && followedCreators.has(pin.creator))
      || (activeView === "requests" && pin.request?.open);
    const matchesCategory = activeCategory === "All" || pin.category === activeCategory;
    const circle = pin.circleId ? circleById(pin.circleId) : null;
    const haystack = [
      pin.title,
      pin.category,
      pin.creator,
      circle?.name || "",
      pin.avatar,
      pin.world,
      pin.description,
      pin.request?.title || "",
      ...pin.tags,
    ].join(" ").toLowerCase();
    const matchesSavedSearch = !savedSearchQuery || matchesSearchQuery(haystack, savedSearchQuery);
    const matchesVisibleSearch = !query || matchesSearchQuery(haystack, query);
    return matchesView && matchesCategory && matchesSavedSearch && matchesVisibleSearch;
  });
}

function requestLabel(pin) {
  if (!pin.request) return "";
  if (!pin.request.open) return "受付終了";
  return `${pin.request.price} / ${pin.request.delivery}`;
}

function tagLinks(tags) {
  return tags
    .map((tag) => `<button class="tag-link" type="button" data-tag="${tag}">${tag}</button>`)
    .join(" ");
}

function tagText(tags) {
  return tags.join(" ");
}

function categoryLink(category) {
  return `<button class="category-link" type="button" data-category-link="${category}">${category}</button>`;
}

function metaSearchLink(label, value, category) {
  return `<button class="meta-search-link" type="button" data-meta-category="${category}" data-meta-query="${value}">${label}: ${value}</button>`;
}

function handleInlinePinOpen(event, pinId, card) {
  if (shouldIgnorePinOpenTarget(event.target)) return;
  openPinFromCard(card || event.currentTarget, event);
}

window.handleInlinePinOpen = handleInlinePinOpen;

function pinCard(pin) {
  const saved = savedPins.has(pin.id);
  const circle = pin.circleId ? circleById(pin.circleId) : null;
  const status = requestLabel(pin) || (pin.visibility === "SubscriberOnly" ? "メンバーシップ限定" : (circle ? "サークル限定" : ""));
  return `
    <article class="pin-card" role="button" tabindex="0" data-id="${pin.id}" aria-label="${pin.title}" onclick="handleInlinePinOpen(event, ${pin.id}, this)">
      <div class="pin-media">
        <img src="${pin.image}" alt="${pin.title}" loading="lazy" />
        <a class="pin-open-link" href="#post/${pin.id}" aria-label="Open ${pin.title}"></a>
        <div class="pin-overlay">
          ${status ? `<span class="status-chip">${status}</span>` : "<span></span>"}
          <button class="save-dot ${saved ? "is-saved" : ""}" type="button" data-save="${pin.id}" aria-label="${saved ? "Unsave" : "Save"} ${pin.title}">
            ${iconBookmark()}
          </button>
        </div>
        <div class="pin-image-meta">
          <span>${pin.category} / <span class="creator-link-onimage">${pin.creator}</span></span>
          <span>${tagText(pin.tags)}</span>
        </div>
      </div>
      <div class="pin-copy">
        <strong>${pin.title}</strong>
        ${circle ? `<small class="pin-circle-label">${circle.name}</small>` : ""}
      </div>
    </article>
  `;
}

function renderPins(items = filteredPins()) {
  updateHomeEventBannerVisibility();
  board.innerHTML = items.map(pinCard).join("");
  emptyState.hidden = items.length !== 0;
  updateViewTabActiveStates();
  bindPinCards(board);
}

function updateHomeEventBannerVisibility() {
  if (!eventBanner) return;
  eventBanner.hidden = false;
}

function bindPinCards(container) {
  container.querySelectorAll(".pin-card").forEach((card) => {
    card.onclick = (event) => {
      if (shouldIgnorePinOpenTarget(event.target)) return;
      openPinFromCard(card, event);
    };
  });
}

function setCategory(category) {
  activeCategory = category;
  chips.forEach((chip) => chip.classList.toggle("is-active", chip.dataset.category === category));
  renderPins();
}

function setView(view, options = {}) {
  activeView = view;
  if (!options.preserveSavedSearch) {
    activeSavedSearchTabId = null;
  }
  updateViewTabActiveStates();
  renderPins();
}

function toggleSave(pinId) {
  if (savedPins.has(pinId)) {
    removePinFromAllBookmarkFolders(pinId);
    syncSaveButtons(pinId);
    if (currentPin?.id === pinId) updateDialogSave();
    if (activeProfile === "You") renderSavedPostsSection();
    showProfileCopyToast(currentLanguage === "en" ? "Removed from bookmarks" : currentLanguage === "ko" ? "북마크에서 제거했습니다" : "ブックマークから外しました");
    return;
  }
  openBookmarkFolderDialog(pinId);
}

function refreshSavedPinsFromFolders() {
  savedPins = new Set(bookmarkFolders.flatMap((folder) => folder.pinIds || []));
}

function removePinFromAllBookmarkFolders(pinId) {
  bookmarkFolders = bookmarkFolders.map((folder) => ({
    ...folder,
    pinIds: (folder.pinIds || []).filter((id) => id !== pinId)
  }));
  refreshSavedPinsFromFolders();
}

function syncSaveButtons(pinId) {
  const saved = savedPins.has(pinId);
  document.querySelectorAll(`[data-save="${pinId}"]`).forEach((button) => {
    const pin = findPostById(pinId);
    button.classList.toggle("is-saved", saved);
    if (pin) {
      button.setAttribute("aria-label", `${saved ? "Unsave" : t("save")} ${pin.title}`);
    }
  });
}

function updateDialogSave() {
  const saved = savedPins.has(currentPin.id);
  dialogSave.classList.toggle("is-saved", saved);
  dialogSave.setAttribute("aria-label", saved ? "Unsave" : t("save"));
  dialogSave.innerHTML = `${iconBookmark()} ${saved ? t("saved") : t("save")}`;
}

function updateFollowButton(button, creator) {
  const following = followedCreators.has(creator);
  button.innerHTML = iconFollow(following);
  button.setAttribute("aria-label", following ? `Unfollow ${creator}` : `${t("follow")} ${creator}`);
  button.classList.toggle("is-saved", following);
  button.classList.add("follow-action-button");
  button.title = following ? t("following") : t("follow");
}

function updateProfileSocialButtons(creator, isMine = false) {
  const buttons = [profileNotifyButton, profileMuteButton, profileBlockButton];
  buttons.forEach((button) => {
    if (!button) return;
    button.hidden = isMine;
  });
  if (isMine || !creator) return;

  const notifyOn = notificationEnabledCreators.has(creator);
  const muted = mutedCreators.has(creator);
  const blocked = blockedCreators.has(creator);

  if (profileNotifyButton) {
    profileNotifyButton.innerHTML = iconProfileAction("notify", notifyOn);
    profileNotifyButton.classList.add("is-notify-action");
    profileNotifyButton.classList.toggle("is-active", notifyOn);
    profileNotifyButton.setAttribute("aria-label", notifyOn ? `${creator}の通知をオフにする` : `${creator}の通知をオンにする`);
    profileNotifyButton.title = notifyOn ? "通知オン" : "通知オフ";
  }
  if (profileMuteButton) {
    profileMuteButton.innerHTML = iconProfileAction("mute", muted);
    profileMuteButton.classList.add("is-mute-action");
    profileMuteButton.classList.toggle("is-active", muted);
    profileMuteButton.setAttribute("aria-label", muted ? `${creator}のミュートを解除` : `${creator}をミュート`);
    profileMuteButton.title = muted ? "ミュート中" : "ミュート";
  }
  if (profileBlockButton) {
    profileBlockButton.innerHTML = iconProfileAction("block", blocked);
    profileBlockButton.classList.add("is-block-action");
    profileBlockButton.classList.toggle("is-active", blocked);
    profileBlockButton.setAttribute("aria-label", blocked ? `${creator}のブロックを解除` : `${creator}をブロック`);
    profileBlockButton.title = blocked ? "ブロック中" : "ブロック";
  }
}

function followedCreatorCards() {
  return [...followedCreators]
    .map((creator) => {
      const posts = creatorPosts(creator);
      const first = posts[0];
      if (!first) return null;
      const trust = getTrustProfile(creator, posts, false);
      const score = trustScore(posts, trust, creator);
      const level = trustedLevel(score, creator);
      return {
        creator,
        role: first.role,
        image: first.image,
        slug: slugify(creator),
        posts: posts.length,
        level: level.label,
        openRequest: posts.some((pin) => pin.request?.open),
        saves: trust.saves,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.creator.localeCompare(b.creator));
}

function renderFollowingList() {
  if (!followingListBody) return;
  const creators = followedCreatorCards();
  if (followingListCount) followingListCount.textContent = `${creators.length} users`;
  if (!creators.length) {
    followingListBody.innerHTML = `
      <div class="following-list-empty">
        <strong>まだフォローしているユーザーはいません</strong>
        <span>気になる投稿主のプロフィールからフォローすると、ここに一覧で表示されます。</span>
      </div>
    `;
    return;
  }
  followingListBody.innerHTML = creators.map((item) => `
    <button class="following-list-item" type="button" data-following-profile="${escapeHtml(item.slug)}">
      <span class="following-list-avatar" style="background-image: url('${escapeHtml(item.image)}')"></span>
      <span class="following-list-copy">
        <strong>${escapeHtml(item.creator)}</strong>
        <small>${escapeHtml(item.role)} / ${escapeHtml(item.level)} / ${item.posts} posts</small>
        <em>${item.openRequest ? "依頼受付中" : "通常投稿中心"} / ${item.saves} saved</em>
      </span>
      <span class="following-list-open">プロフィール</span>
    </button>
  `).join("");
}

function openFollowingListDialog() {
  renderFollowingList();
  showModalElement(followingListDialog);
}

function closeFollowingListDialog() {
  closeModalElement(followingListDialog);
}

function setDialogOrigin(sourceElement) {
  if (!sourceElement) {
    dialog.style.setProperty("--origin-x", "50%");
    dialog.style.setProperty("--origin-y", "50%");
    return;
  }

  const rect = sourceElement.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  dialog.style.setProperty("--origin-x", `${Math.round((x / window.innerWidth) * 100)}%`);
  dialog.style.setProperty("--origin-y", `${Math.round((y / window.innerHeight) * 100)}%`);
}

function openPin(pinId, sourceElement = null) {
  currentPin = findPostById(pinId);
  if (!currentPin) return;
  if (!canViewPin(currentPin)) {
    showProfileCopyToast("この投稿は現在の閲覧条件では表示できません", false);
    return;
  }

  setDialogOrigin(sourceElement);
  dialogImage.src = currentPin.image;
  dialogImage.alt = currentPin.title;
  const currentCircle = currentPin.circleId ? circleById(currentPin.circleId) : null;
  const visibilityLabel = currentPin.circleId ? "サークル限定" : currentPin.visibility === "SubscriberOnly" ? "メンバーシップ限定" : t("normalPost");
  const circleTrail = currentCircle
    ? ` / <button class="category-link" type="button" data-circle-open="${currentCircle.id}">${currentCircle.name}</button>`
    : "";
  dialogCategory.innerHTML = currentPin.request
    ? `${categoryLink(currentPin.category)} / ${currentPin.request.title}${circleTrail}`
    : `${categoryLink(currentPin.category)} / ${visibilityLabel}${circleTrail}`;
  dialogTitle.textContent = currentPin.title;
  dialogDescription.textContent = currentPin.description;
  dialogCreator.innerHTML = `<button class="creator-link" type="button" data-profile="${slugify(currentPin.creator)}">${currentPin.creator}</button>`;
  dialogAvatar.innerHTML = metaSearchLink("Avatar", currentPin.avatar, "Avatar");
  dialogWorld.innerHTML = metaSearchLink("World", currentPin.world, "World");
  dialogTags.innerHTML = tagLinks(currentPin.tags);
  const creatorOpenRequest = primaryOpenRequestForCreator(currentPin.creator);
  const creatorPlans = subscriptionProgramFor(currentPin.creator);
  dialogRequest.innerHTML = creatorOpenRequest
    ? `
      <strong>${t("requestOpen")}</strong>
      <span>${creatorOpenRequest.title} / ${creatorOpenRequest.price}</span>
      <span>${creatorOpenRequest.capacity} / ${creatorOpenRequest.delivery}</span>
      <span>${t("requestCtaBody")}</span>
    `
    : creatorPlans.length
      ? `
        <strong>メンバーシップ受付中</strong>
        <span>${creatorPlans.length} プラン / 最安 ${formatSubscriptionPrice(Math.min(...creatorPlans.map((plan) => plan.price || 0)))}</span>
        <span>${currentPin.visibility === "SubscriberOnly" ? "この投稿は支援者限定です。" : "限定投稿や支援カードを公開できるクリエイター支援プランがあります。"}</span>
        <span>プロフィールからプラン詳細を確認できます。</span>
      `
    : `
      <strong>${t("normalPost")}</strong>
      <span>閲覧、検索、保存、プロフィール遷移を中心にした投稿です。</span>
      <span>このクリエイターは現在、依頼受付を公開していません。</span>
    `;
  dialogRequest.hidden = !(creatorOpenRequest || creatorPlans.length);
  dialogRequest.disabled = !(creatorOpenRequest || creatorPlans.length);
  dialogRequest.classList.toggle("is-action", Boolean(creatorOpenRequest || creatorPlans.length));
  updateDialogSave();
  updateFollowButton(dialogFollow, currentPin.creator);
  renderDialogComments();
  showModalElement(dialog);
}

function closePinDialog() {
  if (!modalIsOpen(dialog) || dialog.classList.contains("is-closing")) return;
  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    dialog.classList.remove("is-closing");
    closeModalElement(dialog);
    if (location.hash.startsWith("#post/")) {
      history.pushState("", document.title, `${location.pathname}${location.search}#`);
    }
  }, 180);
}

function openTrustInfo(event) {
  event?.preventDefault();
  event?.stopPropagation();
  if (modalIsOpen(trustInfoDialog)) return;
  showModalElement(trustInfoDialog);
}

function closeTrustInfoDialog() {
  if (!modalIsOpen(trustInfoDialog) || trustInfoDialog.classList.contains("is-closing")) return;
  trustInfoDialog.classList.add("is-closing");
  window.setTimeout(() => {
    trustInfoDialog.classList.remove("is-closing");
    closeModalElement(trustInfoDialog);
  }, 180);
}

function scrollPageTop() {
  const reset = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  reset();
  window.requestAnimationFrame(() => {
    reset();
    window.requestAnimationFrame(reset);
  });
}

function updateTopbarSearchVisibility() {
  const isHome = Boolean(feedView && !feedView.hidden);
  document.body.classList.toggle("is-home-view", isHome);
  if (searchShell) searchShell.setAttribute("aria-hidden", String(!isHome));
}

function hideMyRequestViews() {
  if (myRequestsView) myRequestsView.hidden = true;
  if (myRequestDetailView) myRequestDetailView.hidden = true;
}

function showFeed() {
  activeProfile = null;
  hideMyRequestViews();
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = true;
  profileView.hidden = true;
  profileView.classList.remove("is-mine");
  feedView.hidden = false;
  updateTopbarSearchVisibility();
  if (location.hash.startsWith("#profile/") || location.hash.startsWith("#request/") || location.hash.startsWith("#request-manager/") || location.hash.startsWith("#my-requests") || location.hash.startsWith("#event/") || location.hash.startsWith("#circle/") || location.hash.startsWith("#circle-manager") || location.hash === "#circles" || location.hash === "#events" || location.hash === "#notifications" || location.hash === "#settings" || location.hash === "#request-manager" || location.hash === "#subscriptions" || location.hash === "#service" || location.hash === "#mission" || location.hash === "#admin" || location.hash === "#backend-spec" || location.hash === "#me") {
    history.pushState("", document.title, location.pathname + location.search);
  }
  renderPins();
  scrollPageTop();
}

function routeFromHash() {
  closeAccountMenu();
  closeSavedSearchContextMenu();
  hideFloatingPostActions();
  if (subscriptionsView) subscriptionsView.hidden = true;
  const postMatch = location.hash.match(/^#post\/(\d+)$/);
  if (postMatch) {
    showFeed();
    openPin(Number(postMatch[1]));
    return;
  }
  const eventMatch = location.hash.match(/^#event\/([^/]+)$/);
  if (eventMatch) {
    renderEventDetailPage(eventMatch[1]);
    return;
  }
  const circleMatch = location.hash.match(/^#circle\/([^/]+)$/);
  if (circleMatch) {
    activeCircleTab = "posts";
    renderCirclesPage(circleMatch[1]);
    return;
  }
  if (location.hash === "#circles") {
    activeCircleTab = "browse";
    renderCirclesPage();
    return;
  }
  const circleManagerMatch = location.hash.match(/^#circle-manager(?:\/([^/]+))?$/);
  if (circleManagerMatch) {
    activeCircleTab = "manage";
    if (circleManagerMatch[1] && circleManagementFor(circleManagerMatch[1])) activeManagedCircleId = circleManagerMatch[1];
    renderCirclesPage(null);
    return;
  }
  const requestDetailMatch = location.hash.match(/^#request-manager\/(\d+)$/);
  if (requestDetailMatch) {
    renderRequestManagerDetailPage(Number(requestDetailMatch[1]));
    return;
  }
  if (location.hash === "#request-manager") {
    renderRequestManagerPage();
    return;
  }
  const myRequestDetailMatch = location.hash.match(/^#my-requests\/(\d+)$/);
  if (myRequestDetailMatch) {
    renderMyRequestDetailPage(Number(myRequestDetailMatch[1]));
    return;
  }
  if (location.hash === "#my-requests") {
    renderMyRequestsPage();
    return;
  }
  if (location.hash === "#service") {
    renderServicePage();
    return;
  }
  if (location.hash === "#events") {
    renderEventsPage();
    return;
  }
  if (location.hash === "#mission") {
    renderMissionPage();
    return;
  }
  if (location.hash === "#admin") {
    renderAdminPage();
    return;
  }
  if (location.hash === "#backend-spec") {
    renderBackendSpecPage();
    return;
  }
  if (location.hash === "#notifications") {
    renderNotificationsPage();
    return;
  }
  if (location.hash === "#settings") {
    renderSettingsPage();
    return;
  }
  if (location.hash === "#subscriptions") {
    renderSubscriptionsPage();
    return;
  }
  if (location.hash === "#me") {
    renderProfile("You");
    return;
  }
  const requestMatch = location.hash.match(/^#request\/([^/]+)(?:\/(\d+))?$/);
  if (requestMatch) {
    const pin = creatorBySlug(requestMatch[1]);
    if (pin) {
      renderRequestPage(pin.creator, requestMatch[2] ? Number(requestMatch[2]) : null);
      return;
    }
  }
  const match = location.hash.match(/^#profile\/(.+)$/);
  if (!match) {
    showFeed();
    return;
  }
  const pin = creatorBySlug(match[1]);
  const profileName = profileNameFromEntry(pin) || eventOrganizerBySlug(match[1]);
  if (profileName) renderProfile(profileName);
}

function openProfile(slug) {
  const profileName = profileNameBySlug(slug);
  if (!profileName) return;
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && !location.hash.startsWith("#profile/") && location.hash !== "#me") {
    profileReturnHash = location.hash;
  } else if (!location.hash) {
    profileReturnHash = "";
  }
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = true;
  location.hash = `profile/${slug}`;
  renderProfile(profileName);
}

function returnFromProfile() {
  const targetHash = profileReturnHash;
  profileReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function openMyProfile() {
  closeAccountMenu();
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = true;
  location.hash = "me";
  renderProfile("You");
}

function scrollProfileArchiveIntoView() {
  const target = document.querySelector(".profile-posts-toolbar") || savedPostsSection || profileBoard;
  if (!target) return;
  const run = () => target.scrollIntoView({ block: "start", behavior: "auto" });
  window.setTimeout(() => {
    window.requestAnimationFrame(() => {
      run();
      window.requestAnimationFrame(run);
    });
  }, 120);
}

function currentProfileArchiveHeight() {
  const candidates = [profileBoard, savedPostsSection, savedPostsBoard, bookmarkFoldersBoard]
    .filter((node) => node && !node.hidden)
    .map((node) => Math.ceil(node.getBoundingClientRect().height || node.offsetHeight || 0));
  return candidates.length ? Math.max(...candidates) : 0;
}

function applyProfileArchivePinnedHeight() {
  const minHeight = profileArchivePinnedHeight > 0 ? `${profileArchivePinnedHeight}px` : "";
  if (profileBoard) profileBoard.style.minHeight = activeProfileArchiveTab === "folders" ? "" : minHeight;
  if (savedPostsSection) savedPostsSection.style.minHeight = activeProfileArchiveTab === "folders" ? minHeight : "";
  if (bookmarkFoldersBoard) bookmarkFoldersBoard.style.minHeight = "";
  if (savedPostsBoard) savedPostsBoard.style.minHeight = "";
}

function prepareProfileArchiveTab(tabName) {
  const previousHeight = currentProfileArchiveHeight();
  profileArchivePinnedHeight = tabName === "folders"
    ? Math.max(previousHeight, Math.ceil(window.innerHeight * 0.9), 520)
    : 0;
  activeProfileArchiveTab = tabName;
  activeBookmarkFolderId = null;
}

function openMyProfileArchive(tabName) {
  prepareProfileArchiveTab(tabName);
  profilePostQuery = "";
  if (profilePostSearch) profilePostSearch.value = "";
  closeAccountMenu();
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  history.pushState("", document.title, `${location.pathname}${location.search}#me`);
  renderProfile("You");
  scrollProfileArchiveIntoView();
}

function closeAccountMenu() {
  if (!accountMenu) return;
  accountMenu.hidden = true;
  accountMenu.classList.remove("is-open");
  avatarButton?.setAttribute("aria-expanded", "false");
}

function toggleAccountMenu() {
  if (!accountMenu) return;
  const willOpen = accountMenu.hidden;
  if (willOpen) renderAccountSwitcher();
  accountMenu.hidden = !willOpen;
  accountMenu.classList.toggle("is-open", willOpen);
  avatarButton?.setAttribute("aria-expanded", willOpen ? "true" : "false");
}

function openRequestPage(creator, postId = null) {
  const post = postId ? findPostById(postId) : primaryOpenRequestPostForCreator(creator);
  if (!post) return;
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && !location.hash.startsWith("#request/")) {
    requestPageReturnHash = location.hash;
  } else if (!location.hash) {
    requestPageReturnHash = "";
  }
  location.hash = `request/${slugify(creator)}/${post.id}`;
  renderRequestPage(creator, post.id);
}

function returnFromRequestPage() {
  const targetHash = requestPageReturnHash;
  requestPageReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function formatYen(amount) {
  return `¥${Number(amount || 0).toLocaleString("ja-JP")}`;
}

function requestMinimumAmount(post) {
  return Number(String(post?.request?.price || "").replace(/[^\d]/g, "")) || 3000;
}

function requestAmountTooLowMessage(minAmount) {
  if (currentLanguage === "en") return `Enter at least ${formatYen(minAmount)}.`;
  if (currentLanguage === "ko") return `최소 ${formatYen(minAmount)} 이상 입력해 주세요.`;
  return `最低金額 ${formatYen(minAmount)} 以上で入力してください。`;
}

function updateRequestAmountState({ clamp = false } = {}) {
  if (!requestAmountInput) return true;
  const minAmount = Number(requestAmountInput.min || 0);
  const amount = Number(requestAmountInput.value || 0);
  const isValid = amount >= minAmount;
  if (clamp && !isValid) {
    requestAmountInput.value = String(minAmount);
  }
  const finalValid = Number(requestAmountInput.value || 0) >= minAmount;
  requestAmountInput.classList.toggle("is-invalid", !finalValid);
  if (requestAmountError) {
    requestAmountError.hidden = finalValid;
    requestAmountError.textContent = finalValid ? "" : requestAmountTooLowMessage(minAmount);
  }
  if (requestAmountHelp) {
    requestAmountHelp.textContent = currentLanguage === "en"
      ? `Minimum set by the creator: ${formatYen(minAmount)}. You can pay more freely.`
      : currentLanguage === "ko"
        ? `크리에이터 설정 최소 금액: ${formatYen(minAmount)}. 그 이상은 자유롭게 입력할 수 있습니다.`
        : `クリエイター設定の最低金額: ${formatYen(minAmount)}。それ以上は自由に入力できます。`;
  }
  return finalValid;
}

function renderRequestPage(creator, postId = null) {
  const requestPosts = openRequestPostsForCreator(creator);
  const post = (postId ? requestPosts.find((item) => item.id === postId) : null) || requestPosts[0];
  if (!post?.request) {
    showFeed();
    return;
  }

  activeProfile = creator;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  requestView.hidden = false;

  requestPageImage.src = post.image;
  requestPageImage.alt = post.title;
  requestPageCreator.textContent = `${post.creator} / ${post.role}`;
  requestPageTitle.textContent = post.request.title;
  requestPageDescription.textContent = currentLanguage === "en"
    ? `${post.description} This page lets visitors check thumbnails, past works, and availability before sending a request.`
    : currentLanguage === "ko"
      ? `${post.description} 썸네일, 과거 작품, 접수 상태를 보며 의뢰 내용을 확인하는 페이지입니다.`
      : `${post.description} サムネイル、過去作品、受付状況を見ながら依頼内容を確認できるページ想定です。`;
  requestPageTags.innerHTML = [
    `<span>${post.category}</span>`,
    `<span>Avatar: ${post.avatar}</span>`,
    `<span>World: ${post.world}</span>`,
    ...post.tags.map((tag) => `<span>${tag}</span>`),
  ].join("");
  const capacityMatch = String(post.request?.capacity || "").match(/(\d+)\s*\/\s*(\d+)/);
  const currentCount = Number(capacityMatch?.[1] || 2);
  const maxCount = Number(capacityMatch?.[2] || 5);
  const minAmount = requestMinimumAmount(post);
  requestRequestMeta.innerHTML = [
    `<div><strong>${currentLanguage === "en" ? "Requested delivery" : currentLanguage === "ko" ? "희망 납기" : "希望納期"}</strong><span>${requestDesiredDeliveryLabel(post)}</span></div>`,
    `<div><strong>${currentLanguage === "en" ? "Average delivery" : currentLanguage === "ko" ? "평균 납기" : "平均納期"}</strong><span>${post.request?.delivery || averageRequestDeliveryLabel()}</span></div>`,
    `<div><strong>${currentLanguage === "en" ? "Max slots" : currentLanguage === "ko" ? "접수 한도" : "受付上限"}</strong><span>${maxCount}${currentLanguage === "en" ? "" : "件"}</span></div>`,
    `<div><strong>${currentLanguage === "en" ? "Open slots" : currentLanguage === "ko" ? "현재 접수" : "現在受付中"}</strong><span>${currentCount}${currentLanguage === "en" ? "" : "件"}</span></div>`,
    `<div><strong>${currentLanguage === "en" ? "Retake" : currentLanguage === "ko" ? "리테이크" : "リテイク"}</strong><span>${requestRetakeLabel(post)}</span></div>`,
    `<div><strong>${currentLanguage === "en" ? "Chat" : currentLanguage === "ko" ? "채팅" : "通常チャット"}</strong><span>${requestChatLabel(post)}</span></div>`,
  ].join("");
  requestServiceList.innerHTML = requestServiceLines(post).map((line) => `<span>${line}</span>`).join("");
  requestSampleGallery.innerHTML = sampleMediaForRequest(post, requestPosts).map((item) => `
    <article class="request-sample-card">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <strong>${item.title}</strong>
    </article>
  `).join("");

  requestPaymentButton.textContent = currentLanguage === "en" ? "Review request" : currentLanguage === "ko" ? "의뢰 내용 확인" : "依頼内容を確認する";
  requestCreatorProfileButton.textContent = t("viewProfile");
  if (requestPageReportButton) requestPageReportButton.textContent = t("report");
  requestCreatorProfileButton.dataset.profile = slugify(post.creator);
  requestAmountInput.value = String(minAmount);
  requestAmountInput.min = String(minAmount);
  requestAmountInput.placeholder = formatYen(minAmount);
  if (requestDesiredDate) requestDesiredDate.value = "";
  if (requestBriefInput) requestBriefInput.value = "";
  if (requestReferenceInput) requestReferenceInput.value = "";
  requestAgreement.checked = false;
  if (requestChatPreference) requestChatPreference.value = requestChatMode(post) === "limited" ? "minimal" : "use";
  updateRequestAmountState();
  updateRequestAuthView();
  renderOtherRequestCards(post.creator, post.id);
  scrollPageTop();
}

function currentOpenRequestPost() {
  const match = location.hash.match(/^#request\/([^/]+)\/(\d+)$/);
  if (!match) return null;
  const creator = pins.find((pin) => slugify(pin.creator) === match[1])?.creator;
  const postId = Number(match[2]);
  if (!creator) return null;
  return openRequestPostsForCreator(creator).find((item) => item.id === postId) || null;
}

function openRequestCheckoutDialog() {
  const post = currentOpenRequestPost();
  if (!post?.request) return;
  if (!requestViewerAuthenticated) {
    updateRequestAuthView();
    return;
  }
  if (!updateRequestAmountState()) {
    requestAmountInput?.focus();
    return;
  }
  const amount = Number(requestAmountInput.value || 0);
  const minAmount = Number(requestAmountInput.min || 0);
  const finalAmount = amount >= minAmount ? amount : minAmount;
  const desiredDate = requestDesiredDate?.value || "未指定";
  const requestBrief = requestBriefInput?.value.trim() || "依頼時に具体的な内容を入力する想定";
  const requestReference = requestReferenceInput?.value.trim() || "未指定";
  requestCheckoutSummary.innerHTML = [
    `<div><strong>依頼タイトル</strong><span>${post.request.title}</span></div>`,
    `<div><strong>投稿名</strong><span>${post.title}</span></div>`,
    `<div><strong>支払い方法</strong><span>${requestPaymentMethod.value}</span></div>`,
    `<div><strong>金額</strong><span>${formatYen(finalAmount)}</span></div>`,
    `<div><strong>希望納期</strong><span>${escapeHtml(desiredDate)}</span></div>`,
    `<div><strong>依頼内容</strong><span>${escapeHtml(requestBrief)}</span></div>`,
    `<div><strong>参考資料</strong><span>${escapeHtml(requestReference)}</span></div>`,
    `<div><strong>通常チャット</strong><span>${requestChatLabel(post)} / ${requesterChatPreferenceLabel(requestChatPreference?.value || "use")}</span></div>`,
    `<div><strong>必須連絡</strong><span>初回申請時と納品完了時</span></div>`,
  ].join("");
  requestCheckoutAgreement.checked = false;
  requestCheckoutSubmit.disabled = true;
  showModalElement(requestCheckoutDialog);
}

function notificationIcon(type) {
  const labels = {
    request: "依",
    save: "保",
    follow: "繋",
    message: "返",
  };
  return labels[type] || "通";
}

function unreadNotificationLabel() {
  if (currentLanguage === "en") return "Unread";
  if (currentLanguage === "ko") return "읽지 않음";
  return "未読";
}

function unreadNotificationCount() {
  return notifications.filter((item) => item.unread).length;
}

function readNotificationCount() {
  return notifications.filter((item) => !item.unread).length;
}

function updateNotificationBadge() {
  const count = unreadNotificationCount();
  if (!notificationBadge) return;
  notificationBadge.hidden = count === 0;
  notificationBadge.textContent = count > 99 ? "99+" : String(count);
  if (mobileNotificationBadge) {
    mobileNotificationBadge.hidden = count === 0;
    mobileNotificationBadge.textContent = count > 99 ? "99+" : String(count);
  }
  notificationButton?.setAttribute("aria-label", count ? `${t("notifications")}, ${count} ${t("unreadNotifications")}` : t("notifications"));
}

function updateNotificationActions() {
  if (markNotificationsRead) markNotificationsRead.disabled = unreadNotificationCount() === 0;
  if (deleteReadNotifications) deleteReadNotifications.disabled = readNotificationCount() === 0;
}

function localizedNotification(item) {
  const copy = {
    ja: {
      1: ["Mika Alterworksが依頼受付を更新しました", "アバター改変依頼の受付枠と納期が更新されています。", "5分前"],
      2: ["あなたの投稿が保存されました", "World walk archive が新しく保存されました。", "18分前"],
      3: ["Lumi Photoがあなたをフォローしました", "プロフィールと過去投稿を確認できます。", "1時間前"],
      4: ["依頼前相談に返信があります", "料金、納期、必要素材について返信が届いています。", "昨日"],
      5: ["イベント申請が承認待ちです", "夏のフォトリレー特集の開催許可申請を運営が確認中です。", "今日"],
      6: ["納品確認の期限が近づいています", "受け取り評価待ちの依頼があります。内容確認をお願いします。", "2日前"],
    },
    en: {
      1: ["Mika Alterworks updated commissions", "Slots and delivery time for avatar edit requests were updated.", "5 min ago"],
      2: ["Your post was saved", "World walk archive was saved by someone.", "18 min ago"],
      3: ["Lumi Photo followed you", "You can check their profile and past posts.", "1 hour ago"],
      4: ["You have a reply on a pre-request chat", "A reply about price, delivery, and required assets arrived.", "Yesterday"],
      5: ["Event application is pending", "Operations is reviewing the Summer Photo Relay event permission request.", "Today"],
      6: ["Delivery confirmation is due soon", "A request is waiting for receipt confirmation and review.", "2 days ago"],
    },
    ko: {
      1: ["Mika Alterworks가 의뢰 접수를 업데이트했습니다", "아바타 수정 의뢰의 접수 슬롯과 납기가 업데이트되었습니다.", "5분 전"],
      2: ["내 게시물이 저장되었습니다", "World walk archive가 새로 저장되었습니다.", "18분 전"],
      3: ["Lumi Photo가 나를 팔로우했습니다", "프로필과 과거 게시물을 확인할 수 있습니다.", "1시간 전"],
      4: ["의뢰 전 상담에 답장이 있습니다", "금액, 납기, 필요한 소재에 대한 답장이 도착했습니다.", "어제"],
      5: ["이벤트 신청이 승인 대기 중입니다", "운영이 여름 포토 릴레이 특집 개최 허가 신청을 확인 중입니다.", "오늘"],
      6: ["납품 확인 기한이 가까워졌습니다", "수령 확인과 평가를 기다리는 의뢰가 있습니다.", "2일 전"],
    },
  };
  const translated = copy[currentLanguage]?.[item.id] || copy.ja[item.id];
  return translated ? { ...item, title: translated[0], body: translated[1], time: translated[2] } : item;
}

function notificationMatchesFilter(item) {
  if (activeNotificationFilter === "unread") return item.unread;
  if (activeNotificationFilter === "request") return item.type === "request" || item.type === "message";
  if (activeNotificationFilter === "important") return item.type === "important";
  return true;
}

function renderNotificationsPage() {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = true;
  notificationsView.hidden = false;
  notificationFilterTabs?.querySelectorAll("[data-notification-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.notificationFilter === activeNotificationFilter);
  });
  const filteredNotifications = notifications.filter(notificationMatchesFilter);
  notificationsList.innerHTML = filteredNotifications.length ? filteredNotifications.map((source) => {
    const item = localizedNotification(source);
    return `
    <button class="notification-item ${item.unread ? "is-unread" : ""}" type="button" data-notification-id="${item.id}">
      <span class="notification-mark">${notificationIcon(item.type)}</span>
      <span class="notification-copy">
        <strong><span>${item.title}</span>${item.unread ? `<span class="notification-unread-badge">${unreadNotificationLabel()}</span>` : ""}</strong>
        <span>${item.body}</span>
      </span>
      <time>${item.time}</time>
    </button>
  `;
  }).join("") : `<div class="notification-empty"><strong>通知はありません</strong><span>条件に合う通知はまだありません。</span></div>`;
  updateNotificationBadge();
  updateNotificationActions();
  scrollPageTop();
}

function renderSettingsPage() {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = true;
  settingsView.hidden = false;
  serviceView.hidden = true;
  scrollPageTop();
}

function openSettingsPage() {
  closeAccountMenu();
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#settings") {
    settingsReturnHash = location.hash;
  } else if (!location.hash) {
    settingsReturnHash = "";
  }
  location.hash = "settings";
  renderSettingsPage();
}

function adminActionTone(tabName) {
  if (tabName === "reports") return "danger";
  return "event";
}

function renderAdminPage() {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = true;
  adminView.hidden = false;

  if (!adminQueues[activeAdminTab]) activeAdminTab = "events";
  if (adminEventCount) adminEventCount.textContent = String(adminQueues.events.length);
  if (adminReportCount) adminReportCount.textContent = String(adminQueues.reports.length);
  document.querySelectorAll("[data-admin-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.adminTab === activeAdminTab);
  });

  const items = adminQueues[activeAdminTab] || [];
  adminQueueList.innerHTML = items.map((item) => `
    <article class="admin-queue-card is-${adminActionTone(activeAdminTab)}">
      <div class="admin-queue-main">
        <span>${escapeHtml(item.status)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      <div class="admin-queue-side">
        <small>${escapeHtml(item.owner)}</small>
        <button class="${activeAdminTab === "reports" ? "danger-solid-button" : "primary-button"}" type="button" data-admin-action="${escapeHtml(item.id)}">${escapeHtml(item.action)}</button>
      </div>
    </article>
  `).join("");
  scrollPageTop();
}

function adminEventById(eventId) {
  return adminQueues.events.find((item) => item.id === eventId) || null;
}

function closeAdminEventReviewDialog() {
  closeModalElement(adminEventReviewDialog);
  activeAdminEventId = null;
}

function openAdminEventReview(eventId) {
  const item = adminEventById(eventId);
  if (!item || !adminEventReviewDialog || !adminEventReviewBody) return;
  activeAdminEventId = item.id;
  if (adminEventReviewTitle) adminEventReviewTitle.textContent = item.title;
  adminEventReviewBody.innerHTML = `
    <article class="admin-event-review-hero">
      <img src="${escapeHtml(item.banner || vrchatImages.event)}" alt="${escapeHtml(item.title)}" loading="lazy" />
      <div>
        <span>${escapeHtml(item.status)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    </article>
    <dl class="admin-event-review-grid">
      <div><dt>主催者</dt><dd>${escapeHtml(item.owner)}</dd></div>
      <div><dt>連絡先</dt><dd>${escapeHtml(item.contact || "未設定")}</dd></div>
      <div><dt>イベント種別</dt><dd>${escapeHtml(item.type || "その他")}</dd></div>
      <div><dt>申請日</dt><dd>${escapeHtml(item.submittedAt || "未設定")}</dd></div>
    </dl>
    <section class="admin-event-review-section">
      <h3>開催概要</h3>
      <p>${escapeHtml(item.summary || item.detail)}</p>
    </section>
    <section class="admin-event-review-section">
      <h3>運営に期待すること</h3>
      <p>${escapeHtml(item.support || "特になし")}</p>
    </section>
    <section class="admin-event-review-section">
      <h3>タグ</h3>
      <div class="admin-event-review-tags">
        ${(item.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("") || "<span>タグなし</span>"}
      </div>
    </section>
  `;
  showModalElement(adminEventReviewDialog);
}

function decideAdminEvent(decision) {
  const item = adminEventById(activeAdminEventId);
  if (!item) return;
  if (decision === "approve") {
    item.status = "承認済み";
    item.detail = `${item.title} の開催許可を付与しました。主催者が好きなタイミングと期間で告知・投稿できます。`;
    showRequestAcceptPopup("イベントを承認しました", `${item.owner}へ開催許可を付与しました`);
  } else {
    item.status = "拒否済み";
    item.detail = `${item.title} は内容確認の結果、今回は開催許可を付与しない判断です。`;
    showProfileCopyToast("イベント申請を拒否しました");
  }
  closeAdminEventReviewDialog();
  renderAdminPage();
}

function openAdminPage() {
  closeAccountMenu();
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#admin") {
    adminReturnHash = location.hash;
  } else if (!location.hash) {
    adminReturnHash = "";
  }
  location.hash = "admin";
  renderAdminPage();
}

function returnFromAdmin() {
  const targetHash = adminReturnHash;
  adminReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function renderBackendSpecPage() {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = false;

  backendSpecGrid.innerHTML = backendSpecCards.map((card) => `
    <article class="backend-spec-card">
      <div>
        <p class="eyebrow">${escapeHtml(card.fields[0] || "schema")}</p>
        <h2>${escapeHtml(card.title)}</h2>
        <p>${escapeHtml(card.body)}</p>
      </div>
      <div class="backend-spec-fields">
        ${card.fields.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}
      </div>
    </article>
  `).join("");
  scrollPageTop();
}

function openBackendSpecPage() {
  closeAccountMenu();
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#backend-spec") {
    specsReturnHash = location.hash;
  } else if (!location.hash) {
    specsReturnHash = "";
  }
  location.hash = "backend-spec";
  renderBackendSpecPage();
}

function returnFromSpecs() {
  const targetHash = specsReturnHash;
  specsReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function formatDeadlineLabel(deadline) {
  const date = new Date(`${deadline}T00:00:00+09:00`);
  return `${date.getMonth() + 1}/${date.getDate()} ${t("deadlineSuffix")}`;
}

function isDeadlineSoon(deadline) {
  const today = new Date();
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const target = new Date(`${deadline}T00:00:00+09:00`);
  const diffDays = Math.ceil((target.getTime() - current.getTime()) / 86400000);
  return diffDays <= 3;
}

function requestStateLabel(state) {
  const labels = {
    pending: t("pending"),
    accepted: t("accepted"),
    in_progress: t("inProgress"),
    awaiting_review: t("awaitingReview"),
    awaiting_your_review: t("awaitingYourReview"),
    completed: t("completed"),
  };
  return labels[state] || state;
}

function requestStateDescription(state) {
  const descriptions = {
    pending: t("pendingDescription"),
    accepted: t("acceptedDescription"),
    in_progress: t("inProgressDescription"),
    awaiting_review: t("awaitingReviewDescription"),
    awaiting_your_review: t("awaitingYourReviewDescription"),
    completed: t("completedDescription"),
  };
  return descriptions[state] || "";
}

function requestProgressItems(item) {
  const steps = [
    { key: "pending", label: t("pending"), detail: "依頼内容を確認" },
    { key: "accepted", label: t("accepted"), detail: "作業予定を確定" },
    { key: "in_progress", label: t("inProgress"), detail: "制作・やり取り中" },
    { key: "awaiting_review", label: t("awaitingReview"), detail: "納品確認待ち" },
    { key: "awaiting_your_review", label: t("awaitingYourReview"), detail: "相互評価へ" },
    { key: "completed", label: t("completed"), detail: "取引完了" },
  ];
  const activeIndex = Math.max(0, steps.findIndex((step) => step.key === item?.status));
  return steps.map((step, index) => ({
    ...step,
    state: index < activeIndex ? "complete" : index === activeIndex ? "current" : "upcoming",
  }));
}

function renderRequestProgress(item) {
  if (!requestProgressSteps) return;
  requestProgressSteps.innerHTML = requestProgressItems(item).map((step, index) => `
    <span class="request-progress-step is-${step.state}" aria-current="${step.state === "current" ? "step" : "false"}">
      <i>${index + 1}</i>
      <strong>${escapeHtml(step.label)}</strong>
      <small>${escapeHtml(step.detail)}</small>
    </span>
  `).join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function requestTurnInfo(item) {
  const messages = item?.messages || [];
  const lastMessage = messages[messages.length - 1];
  if (!lastMessage) {
    return { label: t("myTurn"), key: "mine", detail: t("firstReply") };
  }
  if (lastMessage.from === "you") {
    return { label: t("clientTurn"), key: "client", detail: t("waitingReply") };
  }
  return { label: t("myTurn"), key: "mine", detail: t("needsReply") };
}

function requestTurnPill(item, compact = false) {
  const turn = requestTurnInfo(item);
  const detail = compact ? "" : `<small>${turn.detail}</small>`;
  return `<span class="request-turn-pill is-${turn.key}">${turn.label}${detail}</span>`;
}

function sampleMediaForRequest(post, requestPosts) {
  const extras = requestPosts.filter((item) => item.id !== post.id).slice(0, 2);
  return [post, ...extras].map((item) => ({ image: item.image, title: item.title }));
}

function requestAllowsRetake(postOrRequest) {
  const request = postOrRequest?.request || postOrRequest;
  return request?.retake !== false;
}

function requestRetakeLabel(postOrRequest) {
  return requestAllowsRetake(postOrRequest)
    ? (currentLanguage === "en" ? "Retake supported" : currentLanguage === "ko" ? "리테이크 대응" : "リテイク対応あり")
    : (currentLanguage === "en" ? "No retakes" : currentLanguage === "ko" ? "리테이크 미대응" : "リテイク対応なし");
}

function requestChatMode(postOrRequest) {
  const request = postOrRequest?.request || postOrRequest;
  return request?.chat || "enabled";
}

function requestChatLabel(postOrRequest) {
  return requestChatMode(postOrRequest) === "limited"
    ? (currentLanguage === "en" ? "Minimal chat" : currentLanguage === "ko" ? "최소 채팅" : "通常チャットは必要最低限")
    : (currentLanguage === "en" ? "Chat supported" : currentLanguage === "ko" ? "채팅 대응" : "通常チャット対応あり");
}

function requesterChatPreferenceLabel(value) {
  return value === "minimal"
    ? (currentLanguage === "en" ? "Prefer minimal chat" : currentLanguage === "ko" ? "채팅은 최소화 희망" : "通常チャットはできれば使わない")
    : (currentLanguage === "en" ? "Chat when needed" : currentLanguage === "ko" ? "필요 시 채팅" : "必要に応じて通常チャットを使う");
}

function requestServiceLines(post) {
  const base = [
    `サービス内容: ${post.request?.title || post.category}`,
    `希望納期: ${requestDesiredDeliveryLabel(post)}`,
    `平均納期: ${post.request?.delivery || averageRequestDeliveryLabel()}`,
    `受付枠: ${post.request?.capacity || "受付中"}`,
    requestAllowsRetake(post)
      ? "リテイク: 事前合意した範囲で対応"
      : "リテイク: 対応なし",
    requestChatMode(post) === "limited"
      ? "通常チャット: 必要最低限のみ"
      : "通常チャット: 必要に応じて対応",
    "必須連絡: 初回申請時と納品完了時",
  ];
  if (post.category === "Photo") {
    base.push("納品形式: JPG / PNG");
    base.push(requestChatMode(post) === "limited" ? "参考画像と要望は申請時にまとめて共有" : "依頼後はチャットで参考画像と要望を共有");
  } else if (post.category === "Avatar") {
    base.push("データ受け渡し: ZIP / 画像添付対応");
    base.push("承認時に初回案内を自動送信する想定");
  } else {
    base.push(requestChatMode(post) === "limited" ? "進行中の確認は節目ごとの連絡中心" : "やり取りは依頼チャットで継続");
    if (requestAllowsRetake(post)) base.push("必要に応じて納品後リテイク対応");
  }
  return base;
}

function updateRequestAuthView() {
  requestAuthSignedIn?.classList.toggle("is-active", requestViewerAuthenticated);
  requestAuthGuest?.classList.toggle("is-active", !requestViewerAuthenticated);
  if (requestAuthenticatedPanel) requestAuthenticatedPanel.hidden = !requestViewerAuthenticated;
  if (requestGuestPanel) requestGuestPanel.hidden = requestViewerAuthenticated;
  document.querySelector(".stripe-placeholder")?.toggleAttribute("hidden", !requestViewerAuthenticated);
  if (requestPaymentButton) requestPaymentButton.hidden = !requestViewerAuthenticated;
  if (requestPaymentTitle) {
    requestPaymentTitle.textContent = requestViewerAuthenticated
      ? (currentLanguage === "en" ? "Payment area" : currentLanguage === "ko" ? "결제 영역" : "支払い受付")
      : (currentLanguage === "en" ? "Create account" : currentLanguage === "ko" ? "계정 등록" : "アカウント登録");
  }
  if (requestPaymentNote) {
    requestPaymentNote.textContent = requestViewerAuthenticated
      ? (currentLanguage === "en" ? "Signed-in users review payment method, amount, and agreement before confirming the request." : currentLanguage === "ko" ? "로그인 사용자는 결제 방법, 금액, 동의 사항을 확인한 뒤 의뢰를 확정합니다." : "認証済みユーザーは支払い方法、金額、同意事項を確認して依頼を確定できる想定です。")
      : (currentLanguage === "en" ? "Requests require an account." : currentLanguage === "ko" ? "의뢰하려면 계정 등록이 필요합니다." : "依頼するにはアカウント登録が必要です。");
  }
}

function decisionActionsForRequest(item) {
  if (!item) return "";
  if (item.status === "pending") {
    return `<button class="primary-button approve-entry-button" type="button" data-request-action="approve">${t("approveAndChat")}</button><button class="soft-button" type="button" data-request-action="reject">${t("chooseRejectReason")}</button>`;
  }
  if (item.status === "accepted") {
    return `<button class="primary-button hold-to-approve-button" type="button" data-request-action="start-progress"><span>${currentLanguage === "en" ? "Hold 1 sec to start work" : currentLanguage === "ko" ? "1초 길게 눌러 작업 시작" : "1秒長押しで作業を開始"}</span><small>${currentLanguage === "en" ? "Hold to start" : currentLanguage === "ko" ? "길게 눌러 시작" : "Hold to start"}</small></button><button class="soft-button" type="button" data-request-action="open-chat">${t("openChat")}</button>`;
  }
  if (item.status === "in_progress") {
    return `<button class="primary-button" type="button" data-request-action="deliver">${t("markDelivered")}</button><button class="soft-button" type="button" data-request-action="open-chat">${t("openChat")}</button>`;
  }
  if (item.status === "awaiting_review") {
    return "";
  }
  if (item.status === "awaiting_your_review") {
    return `<button class="primary-button" type="button" data-request-action="review-client">${t("reviewClient")}</button><button class="soft-button" type="button" data-request-action="open-chat">${t("openChat")}</button>`;
  }
  return `<button class="soft-button" type="button" data-request-action="log">${t("viewLog")}</button>`;
}

function requestDecisionNote(item) {
  if (!item) return "";
  if (item.status === "pending") {
    return "承認時は確認モーダルを経由して、自動メッセージ付きでチャットへ移動する想定です。却下時は理由選択と補足メッセージを残せます。";
  }
  if (item.status === "accepted") {
    return "依頼受諾は完了済み。次は着手連絡を送り、進行中へ移すフローを想定しています。";
  }
  if (item.status === "in_progress") {
    return "依頼チャットでデータ共有、質問対応、納品連絡まで続ける想定です。";
  }
  if (item.status === "awaiting_review") {
    return "納品済みです。クリエイター側の操作はなく、相手からの受け取り確認と評価を待っている段階です。";
  }
  if (item.status === "awaiting_your_review") {
    return "相手の評価が返ってきたので、こちらからもレビューを返して完了へ進みます。";
  }
  return "依頼の履歴とやり取りをあとから見返せる状態です。";
}

function myRequestStateLabel(state) {
  const labels = {
    draft: "依頼下書き",
    sent: "送信済み",
    consulting: "承認前相談中",
    estimate: "見積もり確認",
    in_progress: "制作中",
    review: "納品確認&評価ターン",
    creator_review: "制作者からの評価待ち",
    completed: "完了済依頼",
    closed: "キャンセル / 拒否 / 通報済",
  };
  return labels[state] || state;
}

function myRequestTabItems(state = activeMyRequestState) {
  if (state === "todo") {
    return myRequestItems.filter((item) => ["estimate", "consulting", "review"].includes(item.status));
  }
  return myRequestItems.filter((item) => item.status === state);
}

function myRequestTurnInfo(item) {
  if (item.status === "draft") return { label: "未送信", key: "client", detail: "依頼者側で作成中" };
  if (["estimate", "consulting", "review"].includes(item.status)) return { label: "自分のターン", key: "mine", detail: "確認または返信が必要" };
  if (["sent", "creator_review"].includes(item.status)) return { label: "相手待ち", key: "client", detail: "クリエイターの対応待ち" };
  const messages = item.messages || [];
  const last = messages[messages.length - 1];
  if (!last) return { label: "自分のターン", key: "mine", detail: "初回内容を確認" };
  return last.from === "creator"
    ? { label: "自分のターン", key: "mine", detail: "返信が必要" }
    : { label: "相手待ち", key: "client", detail: "返信待ち" };
}

function myRequestTurnPill(item, compact = false) {
  const turn = myRequestTurnInfo(item);
  return `<span class="request-turn-pill is-${turn.key}">${turn.label}${compact ? "" : `<small>${turn.detail}</small>`}</span>`;
}

function myRequestProgressItems(item) {
  const steps = [
    { key: "draft", label: "下書き", detail: "送信前" },
    { key: "sent", label: "送信", detail: "相手確認" },
    { key: "consulting", label: "相談", detail: "承認前" },
    { key: "in_progress", label: "制作", detail: "作業中" },
    { key: "review", label: "納品確認", detail: "評価へ" },
    { key: "creator_review", label: "制作者評価", detail: "相手待ち" },
    { key: "completed", label: "完了", detail: "履歴化" },
  ];
  const statusToIndex = {
    draft: 0,
    sent: 1,
    consulting: 2,
    estimate: 2,
    in_progress: 3,
    review: 4,
    creator_review: 5,
    completed: 6,
    closed: 6,
  };
  const activeIndex = statusToIndex[item?.status] ?? 0;
  return steps.map((step, index) => ({
    ...step,
    state: item?.status === "closed" && index === activeIndex ? "current" : index < activeIndex ? "complete" : index === activeIndex ? "current" : "upcoming",
  }));
}

function renderMyRequestProgress(item) {
  if (!myRequestProgressSteps) return;
  myRequestProgressSteps.innerHTML = myRequestProgressItems(item).map((step, index) => `
    <span class="request-progress-step is-${step.state}" aria-current="${step.state === "current" ? "step" : "false"}">
      <i>${index + 1}</i>
      <strong>${escapeHtml(step.label)}</strong>
      <small>${escapeHtml(step.detail)}</small>
    </span>
  `).join("");
}

function myRequestActionButtons(item) {
  if (!item) return "";
  if (item.status === "draft") return `<button class="primary-button" type="button" data-my-request-action="edit-draft">下書きを編集</button><button class="soft-button" type="button" data-my-request-action="delete-draft">下書きを破棄</button>`;
  if (item.status === "estimate") return `<button class="primary-button" type="button" data-my-request-action="confirm-estimate">見積もりを確認</button><button class="soft-button" type="button" data-my-request-action="ask">質問する</button>`;
  if (item.status === "consulting") return `<button class="primary-button" type="button" data-my-request-action="reply">相談に返信</button><button class="soft-button" type="button" data-my-request-action="cancel">相談を閉じる</button>`;
  if (item.status === "review") return `<button class="primary-button" type="button" data-my-request-action="review-delivery">納品を確認して評価</button><button class="soft-button" type="button" data-my-request-action="retake">リテイクを相談</button>`;
  if (item.status === "completed") return `<button class="soft-button" type="button" data-my-request-action="request-again">同じクリエイターに再依頼</button>`;
  if (item.status === "closed") return `<button class="soft-button" type="button" data-my-request-action="request-again">新しい依頼として再送信</button>`;
  return `<button class="soft-button" type="button" data-my-request-action="open-chat">チャットを確認</button>`;
}

function renderMyRequestsList() {
  const items = myRequestTabItems();
  myRequestStateTabs.forEach((button) => {
    const state = button.dataset.myRequestState;
    const count = state === "todo" ? myRequestTabItems("todo").length : myRequestItems.filter((item) => item.status === state).length;
    const countLabel = button.querySelector("small");
    if (countLabel) countLabel.textContent = String(count);
    button.classList.toggle("is-active", state === activeMyRequestState);
    if (state === activeMyRequestState) ensureMyRequestTabVisible(button);
  });
  if (myRequestsEmpty) myRequestsEmpty.hidden = items.length !== 0;
  if (!myRequestsList) return;
  myRequestsList.innerHTML = items.map((item) => `
    <article class="my-request-card" data-my-request-item="${item.id}">
      <div class="my-request-card-copy">
        <div class="request-manager-card-topline">
          <span class="request-manager-state">${escapeHtml(myRequestStateLabel(item.status))}</span>
          ${myRequestTurnPill(item, true)}
          <time>${escapeHtml(item.plannedDue)}</time>
        </div>
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.summary)}</p>
        <div class="request-manager-card-meta">
          <span>${escapeHtml(item.next)}</span>
          <span>${escapeHtml(item.creator)}</span>
          <span>${escapeHtml(item.amount)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderMyRequestsPage() {
  activeProfile = null;
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = true;
  if (myRequestDetailView) myRequestDetailView.hidden = true;
  if (myRequestsView) myRequestsView.hidden = false;
  renderMyRequestsList();
  updateTopbarSearchVisibility();
  scrollPageTop();
}

function myRequestItemById(id) {
  return myRequestItems.find((item) => item.id === id) || null;
}

function renderMyRequestDeliveryList(item) {
  if (!myRequestDeliveryList) return;
  const deliveries = item.deliveries || [];
  myRequestDeliveryList.innerHTML = deliveries.length ? deliveries.map((delivery) => `
    <article class="request-delivery-entry">
      <strong>${escapeHtml(delivery.name)}</strong>
      <span>${escapeHtml(delivery.files)}</span>
      <p>${escapeHtml(delivery.note)}</p>
      <small>${escapeHtml(delivery.time)}</small>
    </article>
  `).join("") : `
    <article class="request-delivery-entry is-empty">
      <strong>まだ納品物はありません</strong>
      <span>納品されるとここにファイル、補足、確認状況が表示されます。</span>
    </article>
  `;
}

function renderMyRequestChatTimeline(item) {
  if (!myRequestChatTimeline) return;
  myRequestChatTimeline.innerHTML = (item.messages || []).length ? item.messages.map((message) => `
    <article class="request-chat-bubble ${message.from === "you" ? "is-self" : ""}">
      <span>${message.from === "you" ? "You" : escapeHtml(item.creator)} · ${escapeHtml(message.time)}</span>
      <p>${escapeHtml(message.text)}</p>
    </article>
  `).join("") : `
    <article class="request-chat-bubble">
      <span>System</span>
      <p>まだメッセージはありません。正式送信後、初回申請と納品完了時の連絡は必須です。</p>
    </article>
  `;
  myRequestChatTimeline.scrollTop = myRequestChatTimeline.scrollHeight;
}

function renderMyRequestDetailPage(itemId) {
  const item = myRequestItemById(itemId);
  if (!item) {
    renderMyRequestsPage();
    return;
  }
  activeMyRequestItemId = item.id;
  activeProfile = null;
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  if (subscriptionsView) subscriptionsView.hidden = true;
  if (myRequestsView) myRequestsView.hidden = true;
  if (myRequestDetailView) myRequestDetailView.hidden = false;

  if (myRequestDetailState) myRequestDetailState.textContent = myRequestStateLabel(item.status);
  const turn = myRequestTurnInfo(item);
  if (myRequestDetailTurn) {
    myRequestDetailTurn.className = `request-turn-pill is-${turn.key}`;
    myRequestDetailTurn.innerHTML = `${turn.label}<small>${turn.detail}</small>`;
  }
  if (myRequestDetailTitle) myRequestDetailTitle.textContent = item.title;
  if (myRequestDetailCreator) myRequestDetailCreator.textContent = `${item.creator} / ${item.service}`;
  if (myRequestDetailSummary) myRequestDetailSummary.textContent = item.summary;
  if (myRequestDetailMeta) {
    myRequestDetailMeta.innerHTML = [
      `<span>${escapeHtml(item.amount)}</span>`,
      `<span>希望納期: ${escapeHtml(item.desiredDue)}</span>`,
      `<span>予定納期: ${escapeHtml(item.plannedDue)}</span>`,
      `<span>${escapeHtml(item.requestedAt)}</span>`,
    ].join("");
  }
  renderMyRequestProgress(item);
  if (myRequestNextBody) myRequestNextBody.textContent = item.next;
  if (myRequestNextActions) myRequestNextActions.innerHTML = myRequestActionButtons(item);
  if (myRequestBriefList) myRequestBriefList.innerHTML = item.scope.map((entry) => `<span>${escapeHtml(entry)}</span>`).join("");
  renderMyRequestDeliveryList(item);
  if (myRequestChatStatus) {
    myRequestChatStatus.textContent = turn.label;
    myRequestChatStatus.classList.toggle("is-mine", turn.key === "mine");
    myRequestChatStatus.classList.toggle("is-client", turn.key === "client");
  }
  renderMyRequestChatTimeline(item);
  updateTopbarSearchVisibility();
  scrollPageTop();
}

function openMyRequestsPage() {
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#my-requests") {
    myRequestsReturnHash = location.hash;
  } else if (!location.hash) {
    myRequestsReturnHash = "";
  }
  location.hash = "my-requests";
  renderMyRequestsPage();
}

function openMyRequestDetail(itemId) {
  const item = myRequestItemById(itemId);
  if (!item) return;
  location.hash = `my-requests/${item.id}`;
  renderMyRequestDetailPage(item.id);
}

function returnFromMyRequests() {
  const targetHash = myRequestsReturnHash;
  myRequestsReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function returnFromMyRequestDetail() {
  history.pushState("", document.title, `${location.pathname}${location.search}#my-requests`);
  renderMyRequestsPage();
}

function renderRequestDeliveryList(item) {
  if (!requestDeliveryList) return;
  const deliveries = item?.deliveries || [];
  if (!deliveries.length) {
    requestDeliveryList.innerHTML = `
      <article class="request-delivery-entry is-empty">
        <strong>まだ納品履歴はありません</strong>
        <span>進行中になったあと、納品ごとに履歴を残せる想定です。</span>
      </article>
    `;
    return;
  }
  requestDeliveryList.innerHTML = deliveries.map((delivery) => `
    <article class="request-delivery-entry">
      <div class="request-delivery-topline">
        <strong>${escapeHtml(delivery.name)}</strong>
        <span>${escapeHtml(delivery.time || t("now"))}</span>
      </div>
      <small>${escapeHtml(delivery.files || "添付情報なし")}</small>
      <p>${escapeHtml(delivery.note || "")}</p>
    </article>
  `).join("");
}

function publicReviewsForProfile(creator) {
  const direct = publicReviewsByCreator[creator] || [];
  if (direct.length) return direct;
  const clientRequests = requestItemsByClient(creator);
  if (clientRequests.length) {
    return clientRequests.slice(0, 2).map((item) => ({
      score: item.status === "completed" ? "good" : "normal",
      author: creator,
      body: item.summary,
      tags: item.scope.slice(0, 2)
    }));
  }
  return [];
}

function reviewToneLabel(score) {
  return score === "bad" ? "残念だった" : score === "normal" ? "普通" : "良かった";
}

function renderProfileReviews(creator) {
  if (!profileReviews) return;
  const reviews = publicReviewsForProfile(creator);
  if (!reviews.length) {
    profileReviews.innerHTML = `
      <article class="profile-review-card is-empty">
        <strong>まだ公開レビューはありません</strong>
        <p>納品後の評価が集まると、ここに取引レビューが表示される想定です。</p>
      </article>
    `;
    return;
  }
  profileReviews.innerHTML = reviews.map((review) => `
    <article class="profile-review-card is-${review.score}">
      <div class="profile-review-topline">
        <strong>${escapeHtml(review.author)}</strong>
        <span>${reviewToneLabel(review.score)}</span>
      </div>
      <p>${escapeHtml(review.body)}</p>
      <div class="profile-review-tags">${(review.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderProfileSupportBadges(creator) {
  if (!profileSupportBadges) return;
  const meta = profileMetaFor(creator);
  const badges = [];
  if (meta?.joinedAt) badges.push(`<span>${membershipYearLabel(meta.joinedAt)}</span>`);
  if (meta?.earlyPremiumSupporter) badges.push(`<span>早期プレミアム</span>`);
  if (currentSubscriptionFor(creator)) badges.push(`<span>支援中</span>`);
  profileSupportBadges.hidden = badges.length === 0;
  profileSupportBadges.innerHTML = badges.join("");
}

function formatSubscriptionPrice(value) {
  if (Number(value || 0) <= 0) return "無料";
  return `¥${Number(value || 0).toLocaleString("ja-JP")} / 月`;
}

function subscriptionDurationLabel(startedAt) {
  const months = monthsBetween(startedAt);
  if (months < 1) return "今月から支援";
  if (months < 12) return `${months}か月継続`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return rest ? `${years}年${rest}か月継続` : `${years}年継続`;
}

function currentSupportCards() {
  return currentCreatorSubscriptions()
    .filter((entry) => entry.visibleOnProfile)
    .map((entry) => ({
      ...entry,
      plan: subscriptionPlanById(entry.creator, entry.planId)
    }))
    .filter((entry) => entry.plan);
}

function subscriptionPlanCardImage(plan, creator = "") {
  if (plan?.cardImage) return plan.cardImage;
  const circle = circleById(circleIdFromSubscriptionKey(creator));
  if (circle?.cover) return circle.cover;
  const firstPost = creatorPosts(creator)[0] || pins.find((pin) => pin.creator === creator);
  return firstPost?.image || vrchatImages.community;
}

function subscriptionPlanVisualMarkup(plan, creator, label = "Membership") {
  const image = subscriptionPlanCardImage(plan, creator);
  return `
    <span class="subscription-plan-visual">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(plan.name)} card image" loading="lazy" />
      <span class="subscription-plan-shine" aria-hidden="true"></span>
      <span class="subscription-plan-visual-label">${escapeHtml(label)}</span>
    </span>
  `;
}

function renderProfileSubscriptionSection(creator, posts, isMine) {
  if (!profileSubscriptionSection || !profileSubscriptionPlans || !profileSupportCards || !profileSubscriptionLead) return;
  const plans = subscriptionProgramFor(creator);
  const currentSubscription = currentSubscriptionFor(creator);
  const supportCards = currentSupportCards();
  const subscriberOnlyPosts = posts.filter((post) => post.visibility === "SubscriberOnly");

  if (isMine) {
    profileSubscriptionSection.hidden = false;
    if (profileSubscriptionEyebrow) profileSubscriptionEyebrow.textContent = "Membership / Support";
    profileSubscriptionLead.textContent = "公式承認なしで支援プランを作成できます。支援中の履歴カードはプロフィールに掲載され、限定投稿の導線にもなります。";
    subscriptionPlanManageButton.hidden = false;
    profileSubscriptionPlans.innerHTML = plans.length
      ? plans.map((plan) => `
        <article class="subscription-plan-card-item ${Number(plan.price || 0) <= 0 ? "is-free" : ""}">
          ${subscriptionPlanVisualMarkup(plan, "You", "Creator plan")}
          <div>
            <strong>${escapeHtml(plan.name)}</strong>
            <span>${formatSubscriptionPrice(plan.price)}</span>
          </div>
          <p>${escapeHtml(plan.summary || "限定投稿や更新を提供する月額プランです。")}</p>
          <small>${escapeHtml((plan.perks || []).join(" / "))}</small>
          <button class="soft-button" type="button" data-plan-edit="${escapeHtml(plan.id)}">編集</button>
        </article>
      `).join("")
      : `<article class="subscription-plan-card-item is-empty"><strong>まだプランがありません</strong><p>限定投稿や支援カードを使いたい場合は、まず1つプランを作成してください。</p></article>`;
    profileSupportCards.innerHTML = supportCards.length
      ? supportCards.map((entry) => `
        <article class="support-history-card">
          ${subscriptionPlanVisualMarkup(entry.plan, entry.creator, entry.earlySupporter ? "Early supporter" : "Supporter card")}
          <span class="support-history-badge">${entry.earlySupporter ? "Early supporter" : "Supporter card"}</span>
          <strong>${escapeHtml(subscriptionTargetLabel(entry.creator))}</strong>
          <p>${escapeHtml(entry.plan.name)} / ${formatSubscriptionPrice(entry.plan.price)}</p>
          <small>${subscriptionDurationLabel(entry.startedAt)} / ${entry.startedAt}</small>
        </article>
      `).join("")
      : `<article class="support-history-card is-empty"><strong>支援カードはまだありません</strong><p>他のクリエイターのプランに加入すると、ここに継続履歴カードを掲載できます。</p></article>`;
    return;
  }

  subscriptionPlanManageButton.hidden = true;
  const hasContent = plans.length || subscriberOnlyPosts.length;
  profileSubscriptionSection.hidden = !hasContent;
  if (profileSubscriptionSection.hidden) return;
  if (profileSubscriptionEyebrow) profileSubscriptionEyebrow.textContent = "Fan membership";
  profileSubscriptionLead.textContent = subscriberOnlyPosts.length
    ? `限定投稿 ${subscriberOnlyPosts.length} 件を含む、クリエイター支援プランです。`
    : "限定投稿や制作ログ向けのクリエイター支援プランです。";
  profileSubscriptionPlans.innerHTML = plans.length
    ? plans.map((plan) => {
      const joined = currentSubscription?.planId === plan.id;
      return `
        <article class="subscription-plan-card-item ${joined ? "is-active" : ""} ${Number(plan.price || 0) <= 0 ? "is-free" : ""}">
          ${subscriptionPlanVisualMarkup(plan, creator, joined ? "Joined" : "Membership")}
          <div>
            <strong>${escapeHtml(plan.name)}</strong>
            <span>${formatSubscriptionPrice(plan.price)}</span>
          </div>
          <p>${escapeHtml(plan.summary || "限定投稿や更新を提供する月額プランです。")}</p>
          <small>${escapeHtml((plan.perks || []).join(" / "))}</small>
          <button class="${joined ? "soft-button" : "primary-button"}" type="button" data-plan-detail="${escapeHtml(plan.id)}" data-plan-creator="${escapeHtml(creator)}">${joined ? "加入中 / 詳細を見る" : "プラン詳細を見る"}</button>
        </article>
      `;
    }).join("")
    : "";
  profileSupportCards.innerHTML = subscriberOnlyPosts.length
    ? `<article class="support-history-card is-note"><strong>限定投稿</strong><p>加入すると、通常投稿とは別に支援者限定の作品・WIP・制作メモを閲覧できます。</p></article>`
    : "";
}

function renderSavedPostsSection() {
  if (!savedPostsSection || !savedPostsBoard || !bookmarkFoldersBoard) return;
  savedPostsSection.hidden = activeProfile !== "You" || activeProfileArchiveTab !== "folders";
  if (activeProfile !== "You" || activeProfileArchiveTab !== "folders") return;

  const folders = bookmarkFolders;
  bookmarkFoldersBoard.hidden = false;
  if (activeBookmarkFolderId) {
    const folder = bookmarkFolders.find((entry) => entry.id === activeBookmarkFolderId);
    const posts = pins.filter((post) => folder?.pinIds?.includes(post.id) && canViewPin(post));
    bookmarkFoldersBoard.innerHTML = `
      <button class="soft-button bookmark-folder-back" type="button" data-folder-back="true">${currentLanguage === "en" ? "Back to folders" : currentLanguage === "ko" ? "폴더 목록으로" : "フォルダ一覧に戻る"}</button>
      <div class="bookmark-folder-header">
        <strong>${folder?.name || "Folder"}</strong>
        <span>${posts.length} items</span>
      </div>
    `;
    savedPostsBoard.hidden = false;
    savedPostsBoard.innerHTML = posts.map(pinCard).join("");
    bindPinCards(savedPostsBoard);
    return;
  }

  savedPostsBoard.hidden = true;
  if (!folders.length) {
    bookmarkFoldersBoard.innerHTML = `
      <article class="bookmark-folder-card is-empty">
        <strong>ブックマークフォルダはまだありません</strong>
        <span>投稿を保存するときにフォルダを作ってまとめられます。</span>
      </article>
    `;
    return;
  }
  bookmarkFoldersBoard.innerHTML = folders.map((folder) => {
    return `
      <button class="bookmark-folder-card" type="button" data-folder-id="${folder.id}">
        ${bookmarkFolderCoversMarkup(folder)}
        <strong>${folder.name}</strong>
        <span>${folder.pinIds.length} posts</span>
      </button>
    `;
  }).join("");
}

function bookmarkFolderCoversMarkup(folder) {
  const covers = pins.filter((post) => folder.pinIds?.includes(post.id) && canViewPin(post)).slice(0, 3);
  const placeholders = Array.from({ length: Math.max(0, 3 - covers.length) }, (_, index) => (
    `<span class="bookmark-folder-cover-placeholder" aria-hidden="true">${index === 0 && !covers.length ? "+" : ""}</span>`
  )).join("");
  return `
    <span class="bookmark-folder-covers">
      ${covers.map((post) => `<img src="${post.image}" alt="${post.title}" loading="lazy" />`).join("")}
      ${placeholders}
    </span>
  `;
}

function updateBookmarkFolderOptionSelection() {
  if (!bookmarkFolderDialog) return;
  bookmarkFolderDialog.querySelectorAll(".bookmark-folder-option-card").forEach((option) => {
    const input = option.querySelector('input[name="bookmarkFolderSelect"]');
    option.classList.toggle("is-selected", Boolean(input?.checked));
  });
}

function bookmarkFolderCreateCardMarkup() {
  const title = currentLanguage === "en" ? "New folder" : currentLanguage === "ko" ? "새 폴더" : "新しいフォルダ";
  const body = currentLanguage === "en"
    ? "Create a new destination folder."
    : currentLanguage === "ko"
      ? "새 저장 폴더를 만듭니다."
      : "新しい保存先フォルダを作成します。";
  return `
    <button class="bookmark-folder-create-card" type="button" data-bookmark-folder-create-card="true">
      <span class="bookmark-folder-create-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </span>
      <strong>${title}</strong>
      <small>${body}</small>
    </button>
  `;
}

function renderBookmarkFolderOptions(selectedId = bookmarkFolders[0]?.id || "") {
  if (!bookmarkFolderOptions) return;
  const options = bookmarkFolders.map((folder, index) => `
    <label class="bookmark-folder-option-card${folder.id === selectedId ? " is-selected" : ""}">
      <input class="visually-hidden" type="radio" name="bookmarkFolderSelect" value="${folder.id}" ${folder.id === selectedId ? "checked" : ""} />
      <span class="bookmark-folder-card bookmark-folder-select-card">
        ${bookmarkFolderCoversMarkup(folder)}
        <strong>${folder.name}</strong>
        <span>${folder.pinIds.length} posts</span>
        <small>${currentLanguage === "en" ? "Select folder" : currentLanguage === "ko" ? "폴더 선택" : "保存先に選択"}</small>
      </span>
    </label>
  `).join("");
  bookmarkFolderOptions.innerHTML = `${options}${bookmarkFolderCreateCardMarkup()}`;
}

function openBookmarkFolderDialog(pinId) {
  pendingBookmarkPinId = pinId;
  if (!bookmarkFolderDialog || !bookmarkFolderOptions) return;
  renderBookmarkFolderOptions();
  showModalElement(bookmarkFolderDialog);
}

function closeBookmarkFolderDialog() {
  if (bookmarkFolderCreateDialog && modalIsOpen(bookmarkFolderCreateDialog)) closeModalElement(bookmarkFolderCreateDialog);
  closeModalElement(bookmarkFolderDialog);
  pendingBookmarkPinId = null;
  pendingBookmarkFolderSelectionId = "";
}

function selectedBookmarkFolderId() {
  return bookmarkFolderDialog?.querySelector('input[name="bookmarkFolderSelect"]:checked')?.value || bookmarkFolders[0]?.id || null;
}

function openBookmarkFolderCreateDialog() {
  if (!bookmarkFolderCreateDialog || !bookmarkFolderName) return;
  pendingBookmarkFolderSelectionId = selectedBookmarkFolderId() || pendingBookmarkFolderSelectionId || "";
  if (bookmarkFolderDialog && modalIsOpen(bookmarkFolderDialog)) {
    closeModalElement(bookmarkFolderDialog);
  }
  bookmarkFolderName.value = "";
  clearBookmarkFolderNameError();
  updateBookmarkFolderCreateState();
  showModalElement(bookmarkFolderCreateDialog);
  window.setTimeout(() => bookmarkFolderName?.focus(), 80);
}

function closeBookmarkFolderCreateDialog({ restoreFolderPicker = true } = {}) {
  if (bookmarkFolderCreateDialog && modalIsOpen(bookmarkFolderCreateDialog)) {
    closeModalElement(bookmarkFolderCreateDialog);
  }
  clearBookmarkFolderNameError();
  if (!restoreFolderPicker || !pendingBookmarkPinId || !bookmarkFolderDialog) return;
  renderBookmarkFolderOptions(pendingBookmarkFolderSelectionId || bookmarkFolders[0]?.id || "");
  showModalElement(bookmarkFolderDialog);
}

function normalizedBookmarkFolderName(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLocaleLowerCase();
}

function bookmarkFolderNameExists(name) {
  const normalized = normalizedBookmarkFolderName(name);
  return bookmarkFolders.some((folder) => normalizedBookmarkFolderName(folder.name) === normalized);
}

function bookmarkFolderNameErrorMessage(type) {
  if (type === "duplicate") {
    if (currentLanguage === "en") return "A folder with this name already exists.";
    if (currentLanguage === "ko") return "같은 이름의 폴더가 이미 있습니다.";
    return "同じ名前のフォルダがあります。";
  }
  if (currentLanguage === "en") return "Enter a folder name.";
  if (currentLanguage === "ko") return "폴더명을 입력해 주세요.";
  return "フォルダ名を入力してください。";
}

function showBookmarkFolderNameError(type) {
  bookmarkFolderName?.classList.add("is-invalid");
  if (!bookmarkFolderNameError) return;
  bookmarkFolderNameError.textContent = bookmarkFolderNameErrorMessage(type);
  bookmarkFolderNameError.hidden = false;
}

function clearBookmarkFolderNameError() {
  bookmarkFolderName?.classList.remove("is-invalid");
  if (!bookmarkFolderNameError) return;
  bookmarkFolderNameError.hidden = true;
  bookmarkFolderNameError.textContent = "";
}

function bookmarkFolderCreateValidation({ showDuplicate = false } = {}) {
  const name = bookmarkFolderName?.value.trim() || "";
  if (!name) return { valid: false, type: "empty" };
  if (bookmarkFolderNameExists(name)) {
    if (showDuplicate) showBookmarkFolderNameError("duplicate");
    return { valid: false, type: "duplicate" };
  }
  return { valid: true, type: "" };
}

function updateBookmarkFolderCreateState() {
  const validation = bookmarkFolderCreateValidation({ showDuplicate: true });
  if (validation.valid || validation.type === "empty") clearBookmarkFolderNameError();
  if (bookmarkFolderCreate) bookmarkFolderCreate.disabled = !validation.valid;
  return validation.valid;
}

function createBookmarkFolder() {
  const name = bookmarkFolderName?.value.trim();
  if (!name) {
    bookmarkFolderName?.focus();
    showBookmarkFolderNameError("empty");
    return null;
  }
  if (bookmarkFolderNameExists(name)) {
    bookmarkFolderName?.focus();
    showBookmarkFolderNameError("duplicate");
    if (bookmarkFolderCreate) bookmarkFolderCreate.disabled = true;
    return null;
  }
  const id = `folder-${Date.now()}`;
  clearBookmarkFolderNameError();
  bookmarkFolders.push({ id, name, pinIds: [] });
  pendingBookmarkFolderSelectionId = id;
  closeBookmarkFolderCreateDialog({ restoreFolderPicker: false });
  renderBookmarkFolderOptions(id);
  const radio = bookmarkFolderDialog?.querySelector(`input[value="${id}"]`);
  if (radio) radio.checked = true;
  updateBookmarkFolderOptionSelection();
  bookmarkFolderName.value = "";
  if (bookmarkFolderDialog && !modalIsOpen(bookmarkFolderDialog)) {
    showModalElement(bookmarkFolderDialog);
  }
  return id;
}

function savePinToSelectedBookmarkFolder() {
  if (!pendingBookmarkPinId) return;
  let folderId = selectedBookmarkFolderId();
  if (!folderId) {
    openBookmarkFolderCreateDialog();
    return;
  }
  bookmarkFolders = bookmarkFolders.map((folder) => {
    if (folder.id !== folderId) return folder;
    return {
      ...folder,
      pinIds: [...new Set([...(folder.pinIds || []), pendingBookmarkPinId])]
    };
  });
  refreshSavedPinsFromFolders();
  syncSaveButtons(pendingBookmarkPinId);
  if (currentPin?.id === pendingBookmarkPinId) updateDialogSave();
  if (activeProfile === "You") renderSavedPostsSection();
  closeBookmarkFolderDialog();
  showProfileCopyToast(currentLanguage === "en" ? "Saved to folder" : currentLanguage === "ko" ? "폴더에 저장했습니다" : "フォルダに保存しました");
}

function persistComposeDraft() {
  const payload = {
    title: composePostTitle.value,
    category: composeCategory.value,
    visibility: composeVisibility?.value || "Public",
    circlePost: Boolean(composeCircleToggle?.checked),
    r18: Boolean(composeR18Toggle?.checked),
    gore: Boolean(composeGoreToggle?.checked),
    allowReplies: Boolean(composeRepliesToggle?.checked),
    circleId: composeCircle?.value || "",
    avatar: composeAvatar.value,
    world: composeWorld.value,
    tags: composeTags.value,
    description: composeDescription.value,
    images: composeImages,
    savedAt: Date.now()
  };
  localStorage.setItem(composeDraftStorageKey, JSON.stringify(payload));
}

function normalizeComposeVisibility(value) {
  if (value === "FollowerOnly" || value === "FriendOnly" || value === "Followers") return "FollowerOnly";
  if (value === "SubscriberOnly") return "SubscriberOnly";
  return "Public";
}

function normalizeCircleAudience(value) {
  return value === "Public" ? "Public" : "CircleOnly";
}

function circlePostAudienceValue(circle) {
  if (circle?.postAudience === "Both") return "Public / CircleOnly";
  return circle?.postAudience === "Public" ? "Public" : "CircleOnly";
}

function circleAllowsAudienceChoice(circle) {
  return circle?.postAudience === "Both";
}

function setComposeVisibilityOptions(options, selectedValue) {
  if (!composeVisibility) return;
  const current = composeVisibility.value;
  composeVisibility.innerHTML = options
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("");
  composeVisibility.value = options.includes(selectedValue) ? selectedValue : (options.includes(current) ? current : options[0]);
  refreshCustomSelect(composeVisibility);
}

function composeCircleAudienceLabel() {
  const circle = circleById(composeCircle?.value);
  if (!circle) return "CircleOnly";
  if (circleAllowsAudienceChoice(circle)) return normalizeCircleAudience(composeVisibility?.value);
  return circlePostAudienceValue(circle);
}

function updateComposeSubmitState() {
  if (!composeForm || !composeSubmit) return;
  syncTrimRequiredFields(composeForm);
  const hasValidCircleSelection = !isComposeCirclePost() || Boolean(circleById(composeCircle?.value));
  composeSubmit.disabled = !(composeForm.checkValidity() && hasValidCircleSelection);
}

function setComposeAudienceMode(circleOnly) {
  if (!composeVisibility) return;
  const field = composeVisibility.closest(".field");
  const note = field?.querySelector(".compose-audience-note");
  const currentVisibility = normalizeComposeVisibility(composeVisibility.value);
  field?.classList.toggle("is-circle-audience", circleOnly);
  if (circleOnly) {
    const circle = circleById(composeCircle?.value);
    composePreviousVisibility = currentVisibility;
    setComposeVisibilityOptions(["Public", "CircleOnly"], normalizeCircleAudience(composeVisibility.value));
    if (circleAllowsAudienceChoice(circle)) {
      composeVisibility.disabled = false;
      delete composeVisibility.dataset.disabledLabel;
    } else {
      const fixedAudience = normalizeCircleAudience(circle?.postAudience);
      composeVisibility.value = fixedAudience;
      composeVisibility.dataset.disabledLabel = fixedAudience;
      composeVisibility.disabled = true;
      closeCustomSelect(composeVisibility);
    }
  } else {
    setComposeVisibilityOptions(["Public", "FollowerOnly", "SubscriberOnly"], normalizeComposeVisibility(composeVisibility.value));
    composeVisibility.disabled = false;
    if (!["Public", "FollowerOnly", "SubscriberOnly"].includes(composeVisibility.value)) {
      composeVisibility.value = normalizeComposeVisibility(composePreviousVisibility);
    }
    composePreviousVisibility = normalizeComposeVisibility(composeVisibility.value);
    delete composeVisibility.dataset.disabledLabel;
  }
  if (note) note.hidden = !circleOnly;
  refreshCustomSelect(composeVisibility);
}

function unlockComposeVisibilityWhenCircleOff() {
  if (!composeVisibility || isComposeCirclePost()) return;
  const field = composeVisibility.closest(".field");
  const note = field?.querySelector(".compose-audience-note");
  setComposeVisibilityOptions(["Public", "FollowerOnly", "SubscriberOnly"], normalizeComposeVisibility(composeVisibility.value));
  composeVisibility.disabled = false;
  if (!["Public", "FollowerOnly", "SubscriberOnly"].includes(composeVisibility.value)) {
    composeVisibility.value = normalizeComposeVisibility(composePreviousVisibility);
  }
  composePreviousVisibility = normalizeComposeVisibility(composeVisibility.value);
  delete composeVisibility.dataset.disabledLabel;
  field?.classList.remove("is-circle-audience");
  if (note) note.hidden = true;
  refreshCustomSelect(composeVisibility);
}

function restoreComposeDraft() {
  const raw = localStorage.getItem(composeDraftStorageKey);
  if (!raw) return;
  try {
    const draft = JSON.parse(raw);
    composePostTitle.value = draft.title || "";
    composeCategory.value = draft.category || "Photo";
    const draftCirclePost = Boolean(draft.circlePost || draft.visibility === "Circle only");
    if (composeVisibility) {
      composePreviousVisibility = normalizeComposeVisibility(draft.visibility);
      composeVisibility.value = composePreviousVisibility;
    }
    if (composeCircleToggle) composeCircleToggle.checked = draftCirclePost;
    if (composeR18Toggle) composeR18Toggle.checked = Boolean(draft.r18);
    if (composeGoreToggle) composeGoreToggle.checked = Boolean(draft.gore);
    if (composeRepliesToggle) composeRepliesToggle.checked = draft.allowReplies !== false;
    if (composeCircle) composeCircle.value = draft.circleId || joinedCircleIds.values().next().value || "";
    composeAvatar.value = draft.avatar || "";
    composeWorld.value = draft.world || "";
    composeTags.value = draft.tags || "";
    composeDescription.value = draft.description || "";
    composeImages = Array.isArray(draft.images) ? draft.images : [];
    composeImageIndex = 0;
    renderComposeImage();
    updateComposeCircleVisibility();
    refreshPostComposeCustomSelects();
    updateComposeSubmitState();
  } catch {}
}

function clearComposeDraft() {
  localStorage.removeItem(composeDraftStorageKey);
}

function composeRepliesDefaultEnabled() {
  return localStorage.getItem(composeRepliesDefaultStorageKey) !== "off";
}

function saveComposeRepliesDefault(enabled) {
  localStorage.setItem(composeRepliesDefaultStorageKey, enabled ? "on" : "off");
}

function resetComposeFormState() {
  composePostTitle.value = "";
  composeCategory.value = "Photo";
  if (composeVisibility) composeVisibility.value = "Public";
  composePreviousVisibility = "Public";
  if (composeCircleToggle) composeCircleToggle.checked = false;
  if (composeR18Toggle) composeR18Toggle.checked = false;
  if (composeGoreToggle) composeGoreToggle.checked = false;
  if (composeRepliesToggle) composeRepliesToggle.checked = composeRepliesDefaultEnabled();
  if (composeCircle) composeCircle.value = joinedCircleIds.values().next().value || "";
  composeAvatar.value = "";
  composeWorld.value = "";
  composeTags.value = "";
  composeDescription.value = "";
  composeImages = [];
  composeImageIndex = 0;
  renderComposeImage();
  updateComposeCircleVisibility();
  refreshPostComposeCustomSelects();
  syncTrimRequiredFields(composeForm);
  updateComposeSubmitState();
}

function composeHasDraftableInput() {
  return Boolean(
    composePostTitle.value.trim() ||
    composeAvatar.value.trim() ||
    composeWorld.value.trim() ||
    composeTags.value.trim() ||
    composeDescription.value.trim() ||
    composeImages.length ||
    composeCategory.value !== "Photo" ||
    (composeVisibility?.value || "Public") !== "Public" ||
    composeR18Toggle?.checked ||
    composeGoreToggle?.checked ||
    composeRepliesToggle?.checked === false ||
    composeCircleToggle?.checked
  );
}

function readComposeDraftSummary() {
  const raw = localStorage.getItem(composeDraftStorageKey);
  if (!raw) return null;
  try {
    const draft = JSON.parse(raw);
    return {
      title: draft.title?.trim() || "無題の下書き",
      category: draft.category || "Photo",
      description: draft.description?.trim() || "",
      imageCount: Array.isArray(draft.images) ? draft.images.length : 0,
      savedAt: draft.savedAt || null
    };
  } catch {
    return null;
  }
}

function hideFloatingPostActions() {
  if (!floatingPostActions) return;
  floatingPostActions.hidden = true;
  floatingPostActions.classList.remove("is-visible");
  floatingPostActions.setAttribute("aria-hidden", "true");
  floatingPostActions.inert = true;
  floatingPostDock?.classList.remove("is-menu-open");
}

function showFloatingPostActions() {
  if (!floatingPostActions) return;
  floatingPostActions.hidden = false;
  floatingPostActions.removeAttribute("aria-hidden");
  floatingPostActions.inert = false;
  floatingPostDock?.classList.add("is-menu-open");
  window.requestAnimationFrame(() => {
    if (floatingPostActions.hidden) return;
    floatingPostActions.classList.add("is-visible");
  });
}

function openComposeDraftListDialog() {
  const draft = readComposeDraftSummary();
  if (!composeDraftListDialog || !composeDraftListBody) return;
  hideFloatingPostActions();
  if (!draft) {
    composeDraftListBody.innerHTML = `<div class="compose-draft-empty">${currentLanguage === "en" ? "No drafts yet" : currentLanguage === "ko" ? "저장된 초안이 아직 없습니다" : "保存されている下書きはまだありません"}</div>`;
  } else {
    const savedLabel = draft.savedAt
      ? new Date(draft.savedAt).toLocaleString(currentLanguage === "en" ? "en-US" : currentLanguage === "ko" ? "ko-KR" : "ja-JP", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" })
      : (currentLanguage === "en" ? "Saved" : currentLanguage === "ko" ? "저장됨" : "保存済み");
    const imageLabel = currentLanguage === "en"
      ? `${draft.imageCount} images`
      : currentLanguage === "ko"
        ? `이미지 ${draft.imageCount}장`
        : `画像 ${draft.imageCount}枚`;
    composeDraftListBody.innerHTML = `
      <article class="compose-draft-card">
        <div>
          <strong>${draft.title}</strong>
          <p>${draft.category} / ${savedLabel}</p>
        </div>
        <small>${draft.description || (currentLanguage === "en" ? "No description yet" : currentLanguage === "ko" ? "설명이 아직 없습니다" : "説明はまだありません")}</small>
        <small>${imageLabel}</small>
        <footer>
          <button class="primary-button" type="button" data-compose-draft-action="resume">${currentLanguage === "en" ? "Open draft" : currentLanguage === "ko" ? "초안 열기" : "下書きを開く"}</button>
          <button class="soft-button" type="button" data-compose-draft-action="delete">${currentLanguage === "en" ? "Delete draft" : currentLanguage === "ko" ? "초안 삭제" : "下書きを削除"}</button>
        </footer>
      </article>
    `;
  }
  showModalElement(composeDraftListDialog);
}

function persistRequestComposeDraft() {
  const payload = {
    title: requestPostTitle.value,
    category: requestPostCategory.value,
    visibility: requestPostVisibility.value,
    price: requestPostPrice.value,
    delivery: requestPostDelivery.value,
    capacity: requestPostCapacity.value,
    retake: requestPostRetake?.value || "yes",
    chat: requestPostChat?.value || "enabled",
    avatar: requestPostAvatar.value,
    world: requestPostWorld.value,
    tags: requestPostTags.value,
    description: requestPostDescription.value,
    requirements: requestPostRequirements.value,
    image: requestComposeImageData
  };
  localStorage.setItem(requestComposeDraftStorageKey, JSON.stringify(payload));
}

function restoreRequestComposeDraft() {
  const raw = localStorage.getItem(requestComposeDraftStorageKey);
  if (!raw) return;
  try {
    const draft = JSON.parse(raw);
    requestPostTitle.value = draft.title || "";
    requestPostCategory.value = draft.category || "Avatar";
    requestPostVisibility.value = draft.visibility || "Public";
    requestPostPrice.value = draft.price || "";
    requestPostDelivery.value = draft.delivery || "";
    requestPostCapacity.value = draft.capacity || "";
    if (requestPostRetake) requestPostRetake.value = draft.retake || "yes";
    if (requestPostChat) requestPostChat.value = draft.chat || "enabled";
    requestPostAvatar.value = draft.avatar || "";
    requestPostWorld.value = draft.world || "";
    requestPostTags.value = draft.tags || "";
    requestPostDescription.value = draft.description || "";
    requestPostRequirements.value = draft.requirements || "";
    requestComposeImageData = draft.image || "";
    if (requestComposeImageData) {
      requestComposePreviewImage.src = requestComposeImageData;
      requestComposePreviewImage.hidden = false;
      requestComposePreviewImage.closest(".upload-drop")?.classList.add("has-image");
    }
    refreshPostComposeCustomSelects();
    updateRequestComposeSubmitState();
  } catch {}
}

function clearRequestComposeDraft() {
  localStorage.removeItem(requestComposeDraftStorageKey);
}

function applyRequestTemplate(kind) {
  const preset = requestTemplatePresets[kind];
  if (!preset) return;
  requestPostTitle.value = preset.title;
  requestPostCategory.value = preset.category;
  requestPostPrice.value = preset.price;
  requestPostDelivery.value = preset.delivery;
  requestPostCapacity.value = preset.capacity;
  if (requestPostRetake) requestPostRetake.value = preset.retake || "yes";
  if (requestPostChat) requestPostChat.value = preset.chat || "enabled";
  requestPostTags.value = preset.tags;
  requestPostDescription.value = preset.description;
  requestPostRequirements.value = preset.requirements;
  refreshPostComposeCustomSelects();
  updateRequestComposePreview();
  updateRequestComposeSubmitState();
  persistRequestComposeDraft();
}

function clientRatingLabel(item) {
  return item?.rating || "4.8 / 5.0";
}

function clearApproveHoldState(button = approveHoldButton) {
  if (approveHoldTimer) {
    window.clearTimeout(approveHoldTimer);
    approveHoldTimer = 0;
  }
  if (!button) return;
  button.classList.remove("is-holding", "is-hold-complete");
  button.style.removeProperty("--hold-progress");
  approveHoldButton = null;
  approveHoldCompleted = false;
}

function showRequestAcceptPopup(title = null, body = null) {
  if (!requestAcceptPopup) return;
  if (acceptPopupTimer) {
    window.clearTimeout(acceptPopupTimer);
    acceptPopupTimer = 0;
  }
  if (requestAcceptPopupTitle && title) requestAcceptPopupTitle.textContent = title;
  if (requestAcceptPopupBody && body) requestAcceptPopupBody.textContent = body;
  requestAcceptPopup.hidden = false;
  requestAcceptPopup.classList.remove("is-visible", "is-hiding");
  void requestAcceptPopup.offsetWidth;
  requestAcceptPopup.classList.add("is-visible");
  acceptPopupTimer = window.setTimeout(() => {
    requestAcceptPopup.classList.add("is-hiding");
    requestAcceptPopup.classList.remove("is-visible");
    acceptPopupTimer = window.setTimeout(() => {
      requestAcceptPopup.hidden = true;
      requestAcceptPopup.classList.remove("is-hiding");
      acceptPopupTimer = 0;
    }, 260);
  }, 1050);
}

function completeApproveRequest() {
  if (!activeRequestManagerItemId) return;
  const item = requestManagerItemById(activeRequestManagerItemId);
  if (!item) return;
  item.status = "accepted";
  if (requestApprovalMessage.value.trim()) {
    item.messages.push({ from: "you", time: t("now"), text: requestApprovalMessage.value.trim() });
  }
  closeModalElement(requestApprovalDialog);
  renderRequestManagerDetailPage(item.id);
  showRequestAcceptPopup(
    currentLanguage === "en" ? "Accepted!" : currentLanguage === "ko" ? "수락했어요!" : "受諾しました！！",
    currentLanguage === "en" ? "Moved to request chat" : currentLanguage === "ko" ? "의뢰 채팅으로 이동했습니다" : "依頼チャットへ移動しました"
  );
}

function completeStartProgressRequest() {
  if (!activeRequestManagerItemId) return;
  const item = requestManagerItemById(activeRequestManagerItemId);
  if (!item) return;
  item.status = "in_progress";
  item.messages.push({ from: "you", time: "いま", text: "作業を開始しました。進捗や確認事項はこのチャットで共有します。" });
  renderRequestManagerDetailPage(item.id);
  showRequestAcceptPopup(
    currentLanguage === "en" ? "Work started!" : currentLanguage === "ko" ? "작업을 시작했어요!" : "作業を開始しました！",
    currentLanguage === "en" ? "The request is now in progress" : currentLanguage === "ko" ? "의뢰가 진행 중 상태로 이동했습니다" : "依頼が進行中ステータスに移動しました"
  );
}

function startApproveHold(button, onComplete = null) {
  clearApproveHoldState();
  approveHoldButton = button;
  approveHoldCompleted = false;
  button.classList.add("is-holding");
  button.style.setProperty("--hold-progress", "100%");
  approveHoldTimer = window.setTimeout(() => {
    approveHoldCompleted = true;
    approveHoldTimer = 0;
    button.classList.add("is-hold-complete");
    button.classList.remove("is-holding");
    window.setTimeout(() => {
      onComplete?.();
      clearApproveHoldState(button);
    }, 120);
  }, 1000);
}

function clearAccountDeleteHoldState() {
  if (accountDeleteHoldTimer) {
    window.clearTimeout(accountDeleteHoldTimer);
    accountDeleteHoldTimer = 0;
  }
  accountDeleteConfirm?.classList.remove("is-holding", "is-hold-complete");
  accountDeleteConfirm?.style.removeProperty("--hold-progress");
  accountDeleteHoldCompleted = false;
}

function inProgressRequestsForDeletion() {
  return requestManagerItems.filter((item) => item.status === "in_progress");
}

function updateAccountDeleteAvailability() {
  const blockers = inProgressRequestsForDeletion();
  const blocked = blockers.length > 0;
  const passwordField = accountDeletePassword?.closest(".account-delete-password-field");
  if (accountDeleteBlocker) {
    accountDeleteBlocker.hidden = !blocked;
    accountDeleteBlocker.textContent = blocked
      ? `進行中の依頼が${blockers.length}件あるため、アカウント削除はできません。依頼管理で完了またはキャンセルしてから削除してください。`
      : "";
  }
  if (accountDeletePassword) {
    accountDeletePassword.disabled = blocked;
    accountDeletePassword.value = blocked ? "" : accountDeletePassword.value;
    accountDeletePassword.placeholder = blocked ? "進行中の依頼があるため入力できません" : "パスワードを入力";
    accountDeletePassword.title = blocked ? "進行中の依頼があるため入力できません" : "";
  }
  passwordField?.classList.toggle("is-disabled-by-request", blocked);
  if (accountDeleteConfirm) {
    accountDeleteConfirm.disabled = blocked;
    accountDeleteConfirm.classList.toggle("is-disabled-by-request", blocked);
    accountDeleteConfirm.title = blocked ? "進行中の依頼があるため削除できません" : "";
  }
  return !blocked;
}

function openAccountDeleteDialog() {
  clearAccountDeleteHoldState();
  if (accountDeletePassword) accountDeletePassword.value = "";
  if (accountDeleteError) accountDeleteError.hidden = true;
  const canDelete = updateAccountDeleteAvailability();
  showModalElement(accountDeleteDialog);
  if (canDelete) window.setTimeout(() => accountDeletePassword?.focus(), 80);
}

function closeAccountDeleteDialog() {
  clearAccountDeleteHoldState();
  if (accountDeleteError) accountDeleteError.hidden = true;
  closeModalElement(accountDeleteDialog);
}

function closeAccountActionDialog() {
  if (accountActionError) {
    accountActionError.hidden = true;
    accountActionError.textContent = "";
  }
  closeModalElement(accountActionDialog);
}

function performLogout() {
  requestViewerAuthenticated = false;
  localStorage.setItem("vrc-sns-auth-state", "guest");
  showProfileCopyToast(t("loginToast"));
  routeFromHash();
}

function openAccountActionDialog(type) {
  if (!accountActionDialog) return;
  const configs = {
    email: {
      eyebrow: "Account",
      title: t("accountEmailTitle"),
      body: t("accountEmailBody"),
      confirm: t("accountActionDone"),
      fields: `
        <label class="field">
          <span>${t("accountEmailField")}</span>
          <input type="email" placeholder="creator@example.com" autocomplete="email" />
        </label>
      `
    },
    password: {
      eyebrow: "Security",
      title: t("accountPasswordTitle"),
      body: t("accountPasswordBody"),
      confirm: t("accountActionDone"),
      fields: `
        <label class="field">
          <span>${t("accountPasswordCurrent")}</span>
          <input type="password" autocomplete="current-password" data-account-password="current" />
        </label>
        <label class="field">
          <span>${t("accountPasswordNew")}</span>
          <input type="password" autocomplete="new-password" data-account-password="new" />
        </label>
        <label class="field">
          <span>${t("accountPasswordConfirm")}</span>
          <input type="password" autocomplete="new-password" data-account-password="confirm" />
        </label>
      `
    },
    logout: {
      eyebrow: "Session",
      title: t("accountLogoutTitle"),
      body: t("accountLogoutBody"),
      confirm: t("accountLogoutConfirm"),
      fields: ""
    }
  };
  const config = configs[type] || configs.email;
  accountActionDialog.dataset.actionType = type;
  if (accountActionEyebrow) accountActionEyebrow.textContent = config.eyebrow;
  if (accountActionTitle) accountActionTitle.textContent = config.title;
  if (accountActionBody) accountActionBody.textContent = config.body;
  if (accountActionCancel) accountActionCancel.textContent = t("accountActionCancel");
  if (accountActionConfirm) {
    accountActionConfirm.textContent = config.confirm;
    accountActionConfirm.classList.toggle("danger-solid-button", type === "logout");
  }
  if (accountActionFields) {
    accountActionFields.innerHTML = config.fields;
    accountActionFields.hidden = !config.fields;
  }
  if (accountActionError) {
    accountActionError.hidden = true;
    accountActionError.textContent = "";
  }
  showModalElement(accountActionDialog);
  window.setTimeout(() => accountActionFields?.querySelector("input")?.focus(), 80);
}

function completeAccountDelete() {
  if (!updateAccountDeleteAvailability()) {
    clearAccountDeleteHoldState();
    showProfileCopyToast("進行中の依頼があるため削除できません", false);
    return;
  }
  if (accountDeletePassword?.value !== demoAccountPassword) {
    clearAccountDeleteHoldState();
    if (accountDeleteError) accountDeleteError.hidden = false;
    accountDeletePassword?.focus();
    showProfileCopyToast("パスワードが一致しません", false);
    return;
  }
  accountDeleteHoldCompleted = true;
  accountDeleteConfirm?.classList.add("is-hold-complete");
  accountDeleteConfirm?.classList.remove("is-holding");
  window.setTimeout(() => {
    closeAccountDeleteDialog();
    showProfileCopyToast("アカウントを削除しました");
    showFeed();
  }, 240);
}

function startAccountDeleteHold() {
  if (!accountDeleteConfirm) return;
  if (!updateAccountDeleteAvailability()) {
    showProfileCopyToast("進行中の依頼があるため削除できません", false);
    return;
  }
  clearAccountDeleteHoldState();
  accountDeleteConfirm.classList.add("is-holding");
  accountDeleteConfirm.style.setProperty("--hold-progress", "100%");
  accountDeleteHoldTimer = window.setTimeout(() => {
    accountDeleteHoldTimer = 0;
    completeAccountDelete();
  }, 3000);
}
function budgetValue(item) {
  return Number(String(item?.budget || "").replace(/[^\d]/g, "")) || 0;
}

function sortedRequestManagerItems(state = activeRequestManagerState) {
  const items = requestManagerItems.filter((item) => item.status === state);
  if (state === "pending" && pendingRequestSort === "budget") {
    return items.sort((a, b) => budgetValue(b) - budgetValue(a) || a.deadline.localeCompare(b.deadline));
  }
  return items.sort((a, b) => a.deadline.localeCompare(b.deadline));
}

function renderRequestManagerList() {
  const items = sortedRequestManagerItems();
  if (pendingSortControls) pendingSortControls.hidden = activeRequestManagerState !== "pending";
  pendingSortButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.pendingSort === pendingRequestSort);
  });
  requestStateTabs.forEach((tab) => {
    const count = requestManagerItems.filter((item) => item.status === tab.dataset.requestState).length;
    const countLabel = tab.querySelector("small");
    if (countLabel) countLabel.textContent = String(count);
    tab.classList.toggle("is-active", tab.dataset.requestState === activeRequestManagerState);
  });
  requestManagerEmpty.hidden = items.length !== 0;
  requestManagerList.innerHTML = items.map((item) => `
    <article class="request-manager-card" data-request-item="${item.id}">
      <div class="request-manager-card-copy">
        <div class="request-manager-card-topline">
          <span class="request-manager-state">${requestStateLabel(item.status)}</span>
          ${requestTurnPill(item, true)}
          <time class="${!["awaiting_review", "awaiting_your_review", "completed"].includes(item.status) && isDeadlineSoon(item.deadline) ? "is-urgent" : ""}" datetime="${item.deadline}">${formatDeadlineLabel(item.deadline)}</time>
        </div>
        <h2>${item.title}</h2>
        <p>${item.summary}</p>
        <div class="request-manager-card-meta">
          <span>${requestStateDescription(item.status)}</span>
          <span>${item.client}</span>
          <span>${item.budget}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderRequestManagerPage() {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  requestManagerView.hidden = false;
  renderRequestManagerList();
  scrollPageTop();
}

function requestManagerItemById(id) {
  return requestManagerItems.find((item) => item.id === id) || null;
}

function fileLooksLikeZip(file) {
  return file.name.toLowerCase().endsWith(".zip") || file.type === "application/zip" || file.type === "application/x-zip-compressed";
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function attachmentFromFile(file) {
  const isImage = file.type.startsWith("image/");
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: file.name,
    size: formatFileSize(file.size),
    type: fileLooksLikeZip(file) ? "zip" : isImage ? "image" : "file",
    url: isImage ? URL.createObjectURL(file) : "",
  };
}

function attachmentsForActiveRequest() {
  if (!activeRequestManagerItemId) return [];
  if (!requestChatAttachments.has(activeRequestManagerItemId)) {
    requestChatAttachments.set(activeRequestManagerItemId, []);
  }
  return requestChatAttachments.get(activeRequestManagerItemId);
}

function renderRequestChatTimeline(item) {
  const messageHtml = (item.messages || []).map((message) => `
    <article class="request-chat-bubble ${message.from === "you" ? "is-self" : ""}">
      <span>${message.from === "you" ? "You" : escapeHtml(item.client)} · ${escapeHtml(message.time)}</span>
      <p>${escapeHtml(message.text)}</p>
    </article>
  `).join("");
  const attachments = requestChatAttachments.get(item.id) || [];
  const attachmentHtml = attachments.map((attachment) => `
    <article class="request-chat-bubble is-self has-attachment">
      ${attachment.type === "image" ? `<img class="request-chat-attachment-preview" src="${attachment.url}" alt="${attachment.name}" />` : ""}
      <div class="request-chat-attachment">
        <strong>${attachment.type === "zip" ? "ZIP" : attachment.type === "image" ? "Image" : "File"}</strong>
        <span>${attachment.name}</span>
        <small>${attachment.size}</small>
      </div>
      <span>You · ${t("attached")}</span>
    </article>
  `).join("");
  requestChatTimeline.innerHTML = `${messageHtml}${attachmentHtml}`;
  requestChatTimeline.scrollTop = requestChatTimeline.scrollHeight;
}

function sendRequestChatMessage() {
  const item = requestManagerItemById(activeRequestManagerItemId);
  if (!item || !requestChatInput) return;
  const text = requestChatInput.value.trim();
  if (!text) return;
  item.messages.push({ from: "you", time: t("now"), text });
  requestChatInput.value = "";
  renderRequestManagerDetailPage(item.id);
}

function addRequestAttachments(files) {
  if (!activeRequestManagerItemId) return;
  const fileList = [...files].filter(Boolean);
  if (!fileList.length) return;
  const attachments = attachmentsForActiveRequest();
  const zipFiles = [];
  fileList.forEach((file) => {
    if (fileLooksLikeZip(file)) {
      zipFiles.push(file);
      return;
    }
    attachments.push(attachmentFromFile(file));
  });
  const item = requestManagerItemById(activeRequestManagerItemId);
  if (item) renderRequestChatTimeline(item);
  if (!zipFiles.length) return;
  pendingZipAttachments = zipFiles.map(attachmentFromFile);
  zipSafetyCheckbox.checked = false;
  zipSafetyConfirm.disabled = true;
  zipSafetyConfirm.classList.add("is-disabled");
  showModalElement(zipSafetyDialog);
}

function confirmZipAttachments() {
  if (!activeRequestManagerItemId || !pendingZipAttachments.length) return;
  attachmentsForActiveRequest().push(...pendingZipAttachments);
  pendingZipAttachments = [];
  closeModalElement(zipSafetyDialog);
  const item = requestManagerItemById(activeRequestManagerItemId);
  if (item) renderRequestChatTimeline(item);
}

function cancelZipAttachments() {
  pendingZipAttachments = [];
  closeModalElement(zipSafetyDialog);
}

function requestReportReasonsForMode(mode) {
  if (mode === "client") {
    return [
      ["納品物や対応内容が依頼ページの説明と大きく違う", "説明と違う内容で対応された"],
      ["連絡が長期間なく、進行状況が確認できない", "連絡が取れない、進行状況が不明"],
      ["追加料金や外部決済、直接取引へ強く誘導している", "外部決済や直接取引へ誘導された"],
      ["納品物に第三者素材、販売物、権利不明のデータが含まれる可能性がある", "権利や利用許諾が不安"],
      ["威圧的、攻撃的、差別的な発言がある", "威圧的、攻撃的な発言がある"],
      ["事実と異なる不当なレビュー、報復評価、評価の強要がある", "不当なレビュー、報復評価がある"],
      ["other", "その他"],
    ];
  }
  return [
    ["アバター、衣装、販売データなどの共有を要求している", "アバターや販売データを要求してくる"],
    ["威圧的、脅迫的、攻撃的な発言がある", "威圧的、脅迫的、攻撃的な発言がある"],
    ["外部決済や直接取引へ誘導している", "外部決済や直接取引へ誘導している"],
    ["著作権、規約、利用許諾に違反する可能性がある", "権利や利用許諾に違反する可能性がある"],
    ["事実と異なる不当なレビュー、報復評価、評価の強要がある", "不当なレビュー、報復評価がある"],
    ["スパム、虚偽内容、なりすましの可能性がある", "スパム、虚偽内容、なりすましの可能性がある"],
    ["other", "その他"],
  ];
}

function renderRequestReportReasons(mode) {
  const container = requestReportDialog?.querySelector(".request-report-reasons");
  if (!container) return;
  container.innerHTML = requestReportReasonsForMode(mode).map(([value, label], index) => `
    <label><input type="radio" name="requestReportReason" value="${escapeHtml(value)}" ${index === 0 ? "checked" : ""} /> <span>${escapeHtml(label)}</span></label>
  `).join("");
}

function openRequestReportDialog(mode = "manager") {
  const isClient = mode === "client";
  const isSent = mode === "sent";
  const target = isSent ? myRequestItemById(activeMyRequestItemId) : isClient ? currentOpenRequestPost() : requestManagerItemById(activeRequestManagerItemId);
  if (!target) return;
  activeRequestReportContext = { mode, target };
  renderRequestReportReasons(isSent ? "client" : mode);
  if (requestReportTarget) {
    requestReportTarget.textContent = isSent
      ? `${target.title} / ${target.creator}`
      : isClient
      ? `${target.request?.title || target.title} / ${target.creator}`
      : `${target.title} / ${target.client}`;
  }
  if (requestReportMessage) requestReportMessage.value = "";
  showModalElement(requestReportDialog);
}

function closeRequestReportDialog() {
  closeModalElement(requestReportDialog);
}

function submitRequestReport() {
  const { mode, target } = activeRequestReportContext || {};
  if (!target) return;
  const selected = document.querySelector('input[name="requestReportReason"]:checked');
  const baseReason = selected?.value === "other" ? "その他" : selected?.value;
  const comment = requestReportMessage?.value.trim() || "";
  const message = `通報を送信しました: ${baseReason || "理由未設定"}${comment ? ` / ${comment}` : ""}。実装時は運営確認キューへ送信する想定です。`;
  if (mode === "client" || mode === "sent") {
    if (requestPaymentNote) requestPaymentNote.textContent = "通報を送信しました。運営確認キューへ送る想定です。";
    showProfileCopyToast("通報を送信しました");
  } else if (requestDetailDecisionNote) {
    requestDetailDecisionNote.textContent = message;
  }
  closeRequestReportDialog();
  showModalElement(requestReportResultDialog);
}

function closeRequestDeliveryDialog() {
  closeModalElement(requestDeliveryDialog);
}

function openRequestDeliveryDialog() {
  if (!activeRequestManagerItemId) return;
  requestDeliveryName.value = "初回納品";
  requestDeliveryFiles.value = "";
  requestDeliveryMessage.value = "";
  showModalElement(requestDeliveryDialog);
}

function submitRequestDelivery() {
  const item = requestManagerItemById(activeRequestManagerItemId);
  if (!item) return;
  item.deliveries.unshift({
    name: requestDeliveryName.value.trim() || "納品データ",
    files: requestDeliveryFiles.value.trim() || "ZIP 1件 / 共有リンク",
    note: requestDeliveryMessage.value.trim() || "納品データを共有しました。内容をご確認ください。",
    time: t("now")
  });
  item.messages.push({ from: "you", time: t("now"), text: `納品を登録しました: ${item.deliveries[0].name}` });
  item.status = "awaiting_review";
  closeRequestDeliveryDialog();
  renderRequestManagerDetailPage(item.id);
  showProfileCopyToast(currentLanguage === "en" ? "Delivery submitted" : currentLanguage === "ko" ? "납품을 등록했습니다" : "納品を登録しました");
}

function reviewTagOptionsForMode(mode) {
  if (mode === "creator") {
    return ["要望が明確", "返信が早い", "素材共有が丁寧", "また取引したい"];
  }
  return ["連絡が丁寧", "納期が安心", "仕上がりが良い", "また依頼したい"];
}

function closeRequestReviewDialog() {
  closeModalElement(requestReviewDialog);
}

function openRequestReviewDialog(mode, item) {
  if (!item || !requestReviewDialog) return;
  activeRequestReviewContext = { mode, itemId: item.id };
  const reviewingCreator = mode === "client";
  const isSentRequest = Boolean(myRequestItemById(item.id));
  const targetName = reviewingCreator ? "クリエイターを評価" : "依頼者を評価";
  if (requestReviewEyebrow) requestReviewEyebrow.textContent = reviewingCreator ? "Delivery review" : "Client review";
  if (requestReviewTitle) requestReviewTitle.textContent = reviewingCreator ? "納品を確認して評価" : "依頼者を評価";
  if (requestReviewLead) {
    requestReviewLead.textContent = reviewingCreator
      ? "納品物、連絡、スケジュール感を確認して、今回の取引を評価します。"
      : "依頼内容の分かりやすさ、連絡、素材共有のしやすさを評価します。";
  }
  if (requestReviewImage) {
    requestReviewImage.src = item.thumbnail;
    requestReviewImage.alt = item.title;
  }
  if (requestReviewItemTitle) requestReviewItemTitle.textContent = item.title;
  if (requestReviewTargetName) requestReviewTargetName.textContent = `${targetName}: ${reviewingCreator ? (isSentRequest ? item.creator : "You") : item.client}`;
  if (requestReviewTags) {
    requestReviewTags.innerHTML = reviewTagOptionsForMode(mode).map((label, index) => `
      <label><input type="checkbox" value="${escapeHtml(label)}" ${index === 0 ? "checked" : ""} /> <span>${escapeHtml(label)}</span></label>
    `).join("");
  }
  const firstScore = requestReviewDialog.querySelector('input[name="requestReviewScore"][value="good"]');
  if (firstScore) firstScore.checked = true;
  if (requestReviewComment) {
    requestReviewComment.value = reviewingCreator
      ? "納品物を確認しました。丁寧に対応いただきありがとうございました。"
      : "やり取りがスムーズで、必要な情報も分かりやすく共有いただけました。";
  }
  showModalElement(requestReviewDialog);
}

function submitRequestReview() {
  const item = requestManagerItemById(activeRequestReviewContext.itemId) || myRequestItemById(activeRequestReviewContext.itemId);
  if (!item) return;
  const score = requestReviewDialog?.querySelector('input[name="requestReviewScore"]:checked')?.value || "good";
  const labels = { good: "良かった", normal: "普通", bad: "残念だった" };
  const tags = [...(requestReviewTags?.querySelectorAll("input:checked") || [])].map((input) => input.value);
  const comment = requestReviewComment?.value.trim() || "";
  const isSentRequest = Boolean(myRequestItemById(item.id));
  const targetCreator = activeRequestReviewContext.mode === "client" ? (isSentRequest ? item.creator : "You") : item.client;
  if (!publicReviewsByCreator[targetCreator]) publicReviewsByCreator[targetCreator] = [];
  publicReviewsByCreator[targetCreator].unshift({
    score,
    author: activeRequestReviewContext.mode === "client" ? item.client : "You",
    body: comment || `${labels[score]}。`,
    tags
  });
  if (activeRequestReviewContext.mode === "client") {
    item.status = myRequestItemById(item.id) ? "creator_review" : "awaiting_your_review";
    item.messages.push({ from: myRequestItemById(item.id) ? "you" : "client", time: "いま", text: `受け取り確認と評価が完了しました。評価: ${labels[score]}${tags.length ? ` / ${tags.join("・")}` : ""}` });
  } else {
    item.status = "completed";
    item.messages.push({ from: "you", time: "いま", text: `こちらからの評価も完了しました。評価: ${labels[score]}${comment ? ` / ${comment}` : ""}` });
  }
  closeRequestReviewDialog();
  if (myRequestItemById(item.id)) {
    renderMyRequestDetailPage(item.id);
  } else {
    renderRequestManagerDetailPage(item.id);
  }
  if (activeProfile) renderProfile(activeProfile);
  showProfileCopyToast("評価を投稿しました");
}

function renderRequestManagerDetailPage(itemId) {
  const item = requestManagerItemById(itemId);
  if (!item) {
    renderRequestManagerPage();
    return;
  }
  activeRequestManagerItemId = item.id;
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  requestManagerDetailView.hidden = false;

  requestDetailState.textContent = requestStateLabel(item.status);
  requestDetailDeadline.textContent = formatDeadlineLabel(item.deadline);
  requestDetailDeadline.dateTime = item.deadline;
  requestDetailDeadline.classList.toggle("is-urgent", !["awaiting_review", "awaiting_your_review", "completed"].includes(item.status) && isDeadlineSoon(item.deadline));
  requestDetailTitle.textContent = item.title;
  requestDetailClient.textContent = `${item.client} / ${item.requestedAt}`;
  requestDetailSummary.textContent = `${item.summary} ${requestStateDescription(item.status)}`;
  requestDetailMeta.innerHTML = [
    `<span>${item.budget}</span>`,
    `<span>${requestStateLabel(item.status)}</span>`,
    requestTurnPill(item),
    `<span>${item.deadline}</span>`,
  ].join("");
  renderRequestProgress(item);
  requestDetailClientName.textContent = item.client;
  requestDetailClientRating.textContent = `${t("rating")} ${clientRatingLabel(item)}`;
  requestDetailClientProfileButton.dataset.profile = slugify(item.client);
  const decisionActions = decisionActionsForRequest(item);
  requestDecisionActions.innerHTML = decisionActions;
  requestDecisionActions.hidden = !decisionActions.trim();
  requestDetailDecisionNote.textContent = requestDecisionNote(item);
  requestDetailBrief.innerHTML = item.scope.map((entry) => `<span>${entry}</span>`).join("");
  renderRequestDeliveryList(item);
  const shouldShowChat = item.status !== "pending";
  requestChatPanel.hidden = !shouldShowChat;
  requestDetailShell?.classList.toggle("is-single-column", !shouldShowChat);
  if (shouldShowChat) {
    const turn = requestTurnInfo(item);
    if (requestChatStatus) {
      requestChatStatus.textContent = turn.label;
      requestChatStatus.classList.toggle("is-mine", turn.key === "mine");
      requestChatStatus.classList.toggle("is-client", turn.key === "client");
    }
    renderRequestChatTimeline(item);
  }
  scrollPageTop();
}

function openRequestManagerPage() {
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#request-manager") {
    requestManagerReturnHash = location.hash;
  } else if (!location.hash) {
    requestManagerReturnHash = "";
  }
  location.hash = "request-manager";
  renderRequestManagerPage();
}

function openRequestManagerDetail(itemId) {
  const item = requestManagerItemById(itemId);
  if (!item) return;
  location.hash = `request-manager/${item.id}`;
  renderRequestManagerDetailPage(item.id);
}

function returnFromRequestManager() {
  const targetHash = requestManagerReturnHash;
  requestManagerReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function returnFromRequestManagerDetail() {
  history.pushState("", document.title, `${location.pathname}${location.search}#request-manager`);
  renderRequestManagerPage();
}

function openNotificationsPage() {
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#notifications") {
    notificationReturnHash = location.hash;
  } else if (!location.hash) {
    notificationReturnHash = "";
  }
  location.hash = "notifications";
  renderNotificationsPage();
}

function renderServicePage() {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  serviceView.hidden = false;
  scrollPageTop();
}

function openServicePage() {
  closeAccountMenu();
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#service") {
    serviceReturnHash = location.hash;
  } else if (!location.hash) {
    serviceReturnHash = "";
  }
  location.hash = "service";
  renderServicePage();
}

function returnFromService() {
  const targetHash = serviceReturnHash;
  serviceReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function renderMissionPage() {
  activeProfile = null;
  hideMyRequestViews();
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = false;
  scrollPageTop();
}

function openMissionPage() {
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  if (modalIsOpen(requestComposeDialog)) closeRequestComposeDialog();
  if (location.hash && location.hash !== "#mission") {
    missionReturnHash = location.hash;
  } else if (!location.hash) {
    missionReturnHash = "";
  }
  location.hash = "mission";
  renderMissionPage();
}

function returnFromMission() {
  const targetHash = missionReturnHash;
  missionReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function returnFromNotifications() {
  const targetHash = notificationReturnHash;
  notificationReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function returnFromSettings() {
  const targetHash = settingsReturnHash;
  settingsReturnHash = "";
  if (!targetHash) {
    showFeed();
    return;
  }
  history.pushState("", document.title, `${location.pathname}${location.search}${targetHash}`);
  routeFromHash();
}

function openNotificationTarget(item) {
  if (!item?.target) return;
  if (item.target.kind === "request") {
    openRequestPage(item.target.creator, item.target.postId);
    return;
  }
  if (item.target.kind === "profile") {
    openProfile(slugify(item.target.creator));
    return;
  }
  if (item.target.kind === "post") {
    showFeed();
    openPin(item.target.postId);
    return;
  }
  if (item.target.kind === "events") {
    openEventsPage();
    return;
  }
  if (item.target.kind === "manager") {
    openRequestManagerDetail(Number(item.target.itemId));
    return;
  }
  if (item.target.kind === "my-request") {
    openMyRequestDetail(Number(item.target.itemId));
  }
}

function markOnboardingSeen() {
  try {
    localStorage.setItem(onboardingStorageKey, "1");
  } catch {
    // Ignore storage failures in the static mock.
  }
}

function maybeShowOnboarding() {
  if (!onboardingDialog) return;
  try {
    if (localStorage.getItem(onboardingStorageKey)) return;
  } catch {
    return;
  }
  window.setTimeout(() => {
    if (document.body.classList.contains("is-dragging")) return;
    if (modalIsOpen(dialog) || modalIsOpen(composeDialog) || modalIsOpen(requestComposeDialog)) return;
    showModalElement(onboardingDialog);
  }, 720);
}

function renderOtherRequestCards(creator, activePostId) {
  const others = openRequestPostsForCreator(creator).filter((post) => post.id !== activePostId);
  requestMoreSection.hidden = others.length === 0;
  requestMoreGrid.innerHTML = others.map((post) => `
    <button class="request-more-card" type="button" data-request-id="${post.id}">
      <img src="${post.image}" alt="${post.request.title}" loading="lazy" />
      <span>${post.category}</span>
      <strong>${post.request.title}</strong>
      <small>${post.request.price} / ${post.request.delivery}</small>
    </button>
  `).join("");
}


function openAvatarEditor() {
  if (!pendingAvatarSource && myProfile.avatar) {
    pendingAvatarSource = myProfile.avatar;
  }
  if (avatarEditorTitle) avatarEditorTitle.textContent = "アイコンを調整";
  avatarCropPanel.hidden = !pendingAvatarSource;
  avatarCropImage.src = pendingAvatarSource || "";
  refreshAvatarImageLayout();
  updateAvatarCropTransform();
  showModalElement(avatarEditorDialog);
}

function applyMyAvatarToChrome() {
  if (myProfile.avatar) {
    avatarButton.style.backgroundImage = `url("${myProfile.avatar}")`;
    avatarButton.classList.add("has-image");
    avatarButton.textContent = "";
  } else {
    avatarButton.style.backgroundImage = "";
    avatarButton.classList.remove("has-image");
    avatarButton.textContent = (myProfile.displayName || "Y").slice(0, 1).toUpperCase();
  }
  renderAccountSwitcher();
}

function accountInitial(profile) {
  return (profile?.displayName || "Y").slice(0, 1).toUpperCase();
}

function accountAvatarMarkup(account) {
  const profile = account.profile || {};
  const style = profile.avatar ? ` style="background-image:url('${profile.avatar}')"` : "";
  const imageClass = profile.avatar ? " has-image" : "";
  return `<span class="account-switcher-avatar${imageClass}"${style}>${profile.avatar ? "" : accountInitial(profile)}</span>`;
}

function persistActiveAccountProfile() {
  userAccounts = userAccounts.map((account) => (
    account.id === activeAccountId ? { ...account, profile: { ...myProfile } } : account
  ));
}

function renderAccountSwitcher() {
  if (!accountSwitcherCurrent || !accountSwitcherList) return;
  const activeAccount = userAccounts.find((account) => account.id === activeAccountId) || userAccounts[0];
  if (!activeAccount) return;
  accountSwitcherCurrent.textContent = "";
  accountSwitcherList.innerHTML = userAccounts
    .map((account) => `
      <button class="account-switcher-option${account.id === activeAccountId ? " is-active" : ""}" type="button" role="menuitem" data-account-switch="${account.id}" aria-label="${account.profile.displayName} ${account.id === activeAccountId ? "current" : "switch"}" title="${account.profile.displayName}">
        ${accountAvatarMarkup(account)}
        ${account.unread ? `<span class="account-switcher-badge">${account.unread}</span>` : ""}
      </button>
    `).join("");
  if (accountAddButton) {
    accountAddButton.querySelector("span").textContent = currentLanguage === "en" ? "Add account" : currentLanguage === "ko" ? "계정 추가" : "アカウントを追加";
    accountAddButton.setAttribute("aria-label", accountAddButton.querySelector("span").textContent);
    accountAddButton.setAttribute("title", accountAddButton.querySelector("span").textContent);
  }
}

function switchAccount(accountId) {
  const nextAccount = userAccounts.find((account) => account.id === accountId);
  if (!nextAccount || nextAccount.id === activeAccountId) return;
  persistActiveAccountProfile();
  activeAccountId = nextAccount.id;
  myProfile = { ...nextAccount.profile };
  pendingAvatarSource = myProfile.avatar || "";
  pendingBannerSource = myProfile.banner || "";
  applyMyAvatarToChrome();
  closeAccountMenu();
  showProfileCopyToast(`${myProfile.displayName} に切り替えました`);
  if (location.hash === "#me" || !profileView.hidden && profileView.classList.contains("is-mine")) {
    renderProfile("You");
  }
}

function addMockAccount() {
  persistActiveAccountProfile();
  const count = userAccounts.length + 1;
  const newAccount = {
    id: `account-${Date.now()}`,
    handle: `@you_sub${count}`,
    unread: 0,
    profile: {
      displayName: `You Sub ${count}`,
      role: "VRChat creator",
      bio: "新しく追加したサブアカウント。用途に応じてプロフィール編集から内容を変更できます。",
      link: "",
      links: [],
      email: `sub${count}@example.com`,
      visibility: "Public",
      avatar: "",
      banner: vrchatImages.neon,
    }
  };
  userAccounts = [newAccount, ...userAccounts];
  activeAccountId = newAccount.id;
  myProfile = { ...newAccount.profile };
  pendingAvatarSource = "";
  pendingBannerSource = myProfile.banner || "";
  applyMyAvatarToChrome();
  closeAccountMenu();
  showProfileCopyToast("新しいアカウントを追加しました");
  if (location.hash === "#me" || !profileView.hidden && profileView.classList.contains("is-mine")) {
    renderProfile("You");
  }
}

function closeEditProfileDialog() {
  if (modalIsOpen(avatarEditorDialog)) closeModalElement(avatarEditorDialog);
  if (!modalIsOpen(editProfileDialog) || editProfileDialog.classList.contains("is-closing")) return;
  editProfileDialog.classList.add("is-closing");
  window.setTimeout(() => {
    editProfileDialog.classList.remove("is-closing");
    closeModalElement(editProfileDialog);
  }, 180);
}

function closeAvatarEditorDialog() {
  if (!modalIsOpen(avatarEditorDialog) || avatarEditorDialog.classList.contains("is-closing")) return;
  avatarEditorDialog.classList.add("is-closing");
  window.setTimeout(() => {
    avatarEditorDialog.classList.remove("is-closing");
    closeModalElement(avatarEditorDialog);
  }, 180);
}


function beginAvatarDrag(event) {
  if (avatarCropPanel.hidden || !pendingAvatarSource) return;
  avatarDragState = {
    x: event.clientX,
    y: event.clientY,
    startOffsetX: Number(avatarOffsetX.value || 0),
    startOffsetY: Number(avatarOffsetY.value || 0),
  };
  avatarCropFrame.classList.add("is-dragging");
}

function moveAvatarDrag(event) {
  if (!avatarDragState) return;
  const nextX = avatarDragState.startOffsetX + (event.clientX - avatarDragState.x);
  const nextY = avatarDragState.startOffsetY + (event.clientY - avatarDragState.y);
  avatarOffsetX.value = String(nextX);
  avatarOffsetY.value = String(nextY);
  clampAvatarOffsets();
  updateAvatarCropTransform();
}

function endAvatarDrag() {
  if (!avatarDragState) return;
  avatarDragState = null;
  avatarCropFrame.classList.remove("is-dragging");
}

function handleAvatarWheel(event) {
  if (avatarCropPanel.hidden || !pendingAvatarSource) return;
  event.preventDefault();
  const currentZoom = Number(avatarZoom.value || 1);
  const delta = event.deltaY < 0 ? 0.08 : -0.08;
  const nextZoom = Math.max(1, Math.min(2.8, currentZoom + delta));
  avatarZoom.value = nextZoom.toFixed(2);
  clampAvatarOffsets();
  updateAvatarCropTransform();
}


function searchByTag(tag) {
  if (modalIsOpen(dialog)) closePinDialog();
  activeProfile = null;
  profileView.hidden = true;
  feedView.hidden = false;
  searchInput.value = tag;
  setView("discover", { keepSearch: true });
  setCategory("All");
  renderPins();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterByCategory(category) {
  if (modalIsOpen(dialog)) closePinDialog();
  activeProfile = null;
  profileView.hidden = true;
  feedView.hidden = false;
  searchInput.value = "";
  if (category === "Commission") {
    setCategory("All");
    setView("requests");
  } else {
    setView("discover");
    setCategory(category);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function searchByMeta(category, query) {
  if (modalIsOpen(dialog)) closePinDialog();
  activeProfile = null;
  profileView.hidden = true;
  feedView.hidden = false;
  searchInput.value = query;
  setView("discover", { keepSearch: true });
  setCategory(category);
  renderPins();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shufflePins() {
  const items = [...filteredPins()].sort(() => Math.random() - 0.5);
  renderPins(items);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("vrc-sns-theme", theme);
}

function applyThemeMode(mode = settingsThemeMode?.value || "system") {
  const nextMode = mode || "system";
  localStorage.setItem("vrc-sns-theme-mode", nextMode);
  if (settingsThemeMode) settingsThemeMode.value = nextMode;
  if (nextMode === "system") {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    setTheme(prefersDark ? "dark" : "light");
    return;
  }
  setTheme(nextMode === "dark" ? "dark" : "light");
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || "light";
  const nextTheme = current === "dark" ? "light" : "dark";
  if (settingsThemeMode) settingsThemeMode.value = nextTheme;
  localStorage.setItem("vrc-sns-theme-mode", nextTheme);
  setTheme(nextTheme);
}

function clearFloatingPostHold() {
  if (floatingPostHoldTimer) {
    window.clearTimeout(floatingPostHoldTimer);
    floatingPostHoldTimer = 0;
  }
  floatingPost?.classList.remove("is-holding");
}

function handleFloatingPostPointerDown(event) {
  if (event.button !== undefined && event.button !== 0) return;
  clearFloatingPostHold();
  floatingPostHoldTriggered = false;
  floatingPost?.classList.add("is-holding");
  floatingPostHoldTimer = window.setTimeout(() => {
    floatingPostHoldTriggered = true;
    showFloatingPostActions();
    floatingPost?.classList.remove("is-holding");
    floatingPostHoldTimer = 0;
  }, 420);
}

function handleFloatingPostPointerUp() {
  clearFloatingPostHold();
}

function handleFloatingPostPointerLeave() {
  clearFloatingPostHold();
}

function handleFloatingPostClick(event) {
  if (floatingPostHoldTriggered) {
    event.preventDefault();
    event.stopPropagation();
    floatingPostHoldTriggered = false;
    return;
  }
  hideFloatingPostActions();
  openComposeHint();
}

function openComposeHint({ restoreDraft = false } = {}) {
  if (modalIsOpen(dialog)) closePinDialog();
  document.body.classList.remove("is-dragging");
  dropHint.hidden = true;
  composeNotice.hidden = true;
  resetComposeFormState();
  if (restoreDraft) restoreComposeDraft();
  updateComposeCircleVisibility();
  unlockComposeVisibilityWhenCircleOff();
  syncTrimRequiredFields(composeForm);
  updateComposeSubmitState();
  updateComposePreview();
  showModalElement(composeDialog);
  window.requestAnimationFrame(unlockComposeVisibilityWhenCircleOff);
  window.setTimeout(() => composePostTitle.focus(), 140);
}

function closeComposeDialog() {
  if (!modalIsOpen(composeDialog) || composeDialog.classList.contains("is-closing")) return;
  composeDialog.classList.add("is-closing");
  window.setTimeout(() => {
    composeDialog.classList.remove("is-closing");
    closeModalElement(composeDialog);
  }, 180);
}

function openComposeCloseConfirmDialog() {
  if (!modalIsOpen(composeDialog)) return;
  if (!composeHasDraftableInput()) {
    clearComposeDraft();
    closeComposeDialog();
    return;
  }
  showModalElement(composeCloseConfirmDialog);
}

function closeComposeCloseConfirmDialog() {
  closeModalElement(composeCloseConfirmDialog);
}

function closeComposeWithDraftSave() {
  persistComposeDraft();
  closeComposeCloseConfirmDialog();
  closeComposeDialog();
  showProfileCopyToast(currentLanguage === "en" ? "Draft saved" : currentLanguage === "ko" ? "초안을 저장했습니다" : "下書きを保存しました");
}

function closeComposeWithoutDraftSave() {
  clearComposeDraft();
  closeComposeCloseConfirmDialog();
  closeComposeDialog();
}

function openRequestComposeDialog() {
  if (modalIsOpen(dialog)) closePinDialog();
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  document.body.classList.remove("is-dragging");
  dropHint.hidden = true;
  requestComposeNotice.hidden = true;
  restoreRequestComposeDraft();
  syncTrimRequiredFields(requestComposeForm);
  updateRequestComposeSubmitState();
  updateRequestComposePreview();
  showModalElement(requestComposeDialog);
  window.setTimeout(() => requestPostTitle.focus(), 140);
}

function closeRequestComposeDialog() {
  if (!modalIsOpen(requestComposeDialog) || requestComposeDialog.classList.contains("is-closing")) return;
  requestComposeDialog.classList.add("is-closing");
  window.setTimeout(() => {
    requestComposeDialog.classList.remove("is-closing");
    closeModalElement(requestComposeDialog);
  }, 180);
}

function populateComposeCircleOptions() {
  if (!composeCircle) return;
  const selected = composeCircle.value;
  const options = circleGroups
    .filter((circle) => joinedCircleIds.has(circle.id))
    .map((circle) => `<option value="${circle.id}">${circle.name}</option>`)
    .join("");
  composeCircle.innerHTML = options || `<option value="">参加中のサークルなし</option>`;
  if (selected && [...composeCircle.options].some((option) => option.value === selected)) {
    composeCircle.value = selected;
  }
  refreshCustomSelect(composeCircle);
}

function isComposeCirclePost() {
  return Boolean(composeCircleToggle?.checked);
}

function updateComposeCircleVisibility() {
  populateComposeCircleOptions();
  const circleOnly = isComposeCirclePost();
  setComposeAudienceMode(circleOnly);
  if (composeCircleField) {
    composeCircleField.classList.toggle("is-reserved-hidden", !circleOnly);
    composeCircleField.setAttribute("aria-hidden", String(!circleOnly));
  }
  if (circleOnly && composeCircle && !composeCircle.value) {
    composeCircle.value = joinedCircleIds.values().next().value || "";
  }
  if (!circleOnly) closeCustomSelect(composeCircle);
  refreshPostComposeCustomSelects();
  updateComposeSubmitState();
}

function handleComposeCircleToggleChange({ openMenu = false } = {}) {
  updateComposeCircleVisibility();
  updateComposePreview();
  persistComposeDraft();
  if (isComposeCirclePost()) {
    window.requestAnimationFrame(() => {
      refreshCustomSelect(composeCircle);
      if (openMenu) openCustomSelect(composeCircle);
    });
  } else {
    closeCustomSelect(composeCircle);
  }
}

function updateComposePreview() {
  const category = composeCategory.value || "Avatar";
  const title = composePostTitle.value.trim() || "新しい投稿タイトル";
  const tags = composeTags.value.trim() || "#vrchat #portfolio";
  const creator = "You";
  const circle = isComposeCirclePost() ? circleById(composeCircle?.value) : null;
  const contentFlags = [
    composeR18Toggle?.checked ? "R18" : "",
    composeGoreToggle?.checked ? "Gore" : "",
    composeRepliesToggle?.checked === false ? "Comments off" : ""
  ].filter(Boolean).join(" / ");

  composePreviewCard.innerHTML = `
    <span>${category} / ${circle ? circle.name : creator}</span>
    <strong>${title}</strong>
    <small>${circle ? `${composeCircleAudienceLabel()} / ` : `${normalizeComposeVisibility(composeVisibility?.value)} / `}${contentFlags ? `${contentFlags} / ` : ""}${tags}</small>
  `;
}

function requestCompletedItems() {
  return requestManagerItems.filter((item) => ["awaiting_review", "awaiting_your_review", "completed"].includes(item.status));
}

function requestCycleDays(item) {
  const requestedAtRaw = item?.requestedAt ? String(item.requestedAt).split(" ")[0] : "";
  const deadlineRaw = item?.deadline || "";
  if (!requestedAtRaw || !deadlineRaw) return null;
  const requestedAt = new Date(`${requestedAtRaw}T00:00:00+09:00`);
  const deadline = new Date(`${deadlineRaw}T00:00:00+09:00`);
  if (Number.isNaN(requestedAt.getTime()) || Number.isNaN(deadline.getTime())) return null;
  const diff = Math.round((deadline.getTime() - requestedAt.getTime()) / 86400000);
  return diff >= 1 ? diff : null;
}

function averageRequestDeliveryDays() {
  const values = requestCompletedItems().map(requestCycleDays).filter((value) => Number.isFinite(value));
  if (!values.length) return null;
  return Math.max(1, Math.round(values.reduce((sum, value) => sum + value, 0) / values.length));
}

function averageRequestDeliveryLabel() {
  const days = averageRequestDeliveryDays();
  return days ? `平均 ${days}日` : "平均 7日";
}

function requestDesiredDeliveryLabel(postOrRequest) {
  return postOrRequest?.request?.desiredDelivery || postOrRequest?.desiredDelivery || postOrRequest?.request?.delivery || postOrRequest?.delivery || "7日以内";
}

function requestComposeValues() {
  const title = requestPostTitle.value.trim() || "依頼受付タイトル";
  const category = requestPostCategory.value || "Avatar";
  const price = requestPostPrice.value.trim() || "¥12,000〜";
  const desiredDelivery = requestPostDelivery.value.trim() || "7日以内";
  const averageDelivery = averageRequestDeliveryLabel();
  const capacity = requestPostCapacity.value.trim() || "受付 2 / 5";
  const retake = requestPostRetake?.value !== "no";
  const chat = requestPostChat?.value || "enabled";
  const tags = requestPostTags.value.trim() || "#依頼受付 #vrchat #portfolio";
  const description = requestPostDescription.value.trim() || "説明を入力すると、依頼受付ページの導入文として表示されます。";
  const requirements = requestPostRequirements.value.trim() || "参考画像、使用アセット、希望納期を依頼時に確認する想定です。";
  return { title, category, price, desiredDelivery, averageDelivery, capacity, retake, chat, tags, description, requirements };
}

function updateRequestComposePreview() {
  const values = requestComposeValues();
  if (requestPostAverageDeliveryHint) {
    requestPostAverageDeliveryHint.textContent = `現在の平均納期: ${values.averageDelivery}`;
  }
  requestComposePreviewCard.innerHTML = `
    <span>${values.category} / Commission · You</span>
    <strong>${values.title}</strong>
    <small>${values.price} / 希望 ${values.desiredDelivery} / ${values.averageDelivery} / ${requestRetakeLabel(values)} / ${requestChatLabel(values)}</small>
  `;
  requestComposePageTitle.textContent = values.title;
  requestComposePageDescription.textContent = values.description;
  requestComposePageMeta.innerHTML = `
    <span>${values.price}</span>
    <span>${values.capacity}</span>
    <span>希望 ${values.desiredDelivery}</span>
    <span>${values.averageDelivery}</span>
    <span>${requestRetakeLabel(values)}</span>
    <span>${requestChatLabel(values)}</span>
  `;
}

function updateRequestComposeSubmitState() {
  if (!requestComposeForm || !requestComposeSubmit) return;
  syncTrimRequiredFields(requestComposeForm);
  requestComposeSubmit.disabled = !requestComposeForm.checkValidity();
}

const uploadImageLimits = {
  landscape: { width: 1920, height: 1080 },
  portrait: { width: 1080, height: 1920 },
  square: { width: 1080, height: 1080 }
};

function uploadImageLimitFor(width, height) {
  if (width === height) return uploadImageLimits.square;
  return width > height ? uploadImageLimits.landscape : uploadImageLimits.portrait;
}

function canvasToDataUrl(canvas, type = "image/jpeg", quality = 0.88) {
  return new Promise((resolve) => {
    if (!canvas.toBlob) {
      resolve(canvas.toDataURL(type, quality));
      return;
    }
    canvas.toBlob((blob) => {
      if (!blob) {
        resolve(canvas.toDataURL(type, quality));
        return;
      }
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(String(reader.result || "")));
      reader.readAsDataURL(blob);
    }, type, quality);
  });
}

async function normalizeUploadImage(file, options = {}) {
  if (!file || !file.type.startsWith("image/")) return null;
  const source = URL.createObjectURL(file);
  const image = new Image();
  image.decoding = "async";
  image.src = source;

  try {
    await (image.decode ? image.decode() : new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    }));

    const sourceWidth = image.naturalWidth || image.width;
    const sourceHeight = image.naturalHeight || image.height;
    if (!sourceWidth || !sourceHeight) return null;

    const maxSize = options.maxSize || uploadImageLimitFor(sourceWidth, sourceHeight);
    const scale = Math.min(1, maxSize.width / sourceWidth, maxSize.height / sourceHeight);
    const width = Math.max(1, Math.round(sourceWidth * scale));
    const height = Math.max(1, Math.round(sourceHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { colorSpace: "srgb", alpha: false }) || canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(image, 0, 0, width, height);

    const src = await canvasToDataUrl(canvas, options.type || "image/jpeg", options.quality ?? 0.88);
    return {
      src,
      name: file.name,
      width,
      height,
      originalWidth: sourceWidth,
      originalHeight: sourceHeight,
      normalized: true,
      resized: width !== sourceWidth || height !== sourceHeight
    };
  } catch (error) {
    return null;
  } finally {
    URL.revokeObjectURL(source);
  }
}

async function readImageFile(file, options = {}) {
  return normalizeUploadImage(file, options);
}

async function loadComposeImages(files, append = true) {
  const images = (await Promise.all([...files].map(readImageFile))).filter(Boolean);
  if (!images.length) return;

  composeImages = append ? [...composeImages, ...images] : images;
  composeImageIndex = append ? composeImages.length - images.length : 0;
  composeImage.value = "";
  renderComposeImage();
}

async function loadRequestComposeImage(file) {
  const image = await readImageFile(file);
  if (!image) return;
  requestComposeImageData = image.src;
  requestComposePreviewImage.src = image.src;
  requestComposePreviewImage.alt = image.name || "Request thumbnail";
  requestComposePreviewImage.hidden = false;
  requestComposePreviewImage.closest(".upload-drop")?.classList.add("has-image");
}

function renderComposeImage() {
  const image = composeImages[composeImageIndex];
  const uploadDrop = composePreviewImage.closest(".upload-drop");
  const hasMultiple = composeImages.length > 1;

  if (!image) {
    composePreviewImage.hidden = true;
    composePreviewImage.removeAttribute("src");
    uploadDrop?.classList.remove("has-image");
    uploadDrop?.style.removeProperty("--preview-ratio");
    composeImageControls.hidden = true;
    removeComposeImage.hidden = true;
    composeImage.value = "";
    return;
  }

  composePreviewImage.src = image.src;
  composePreviewImage.alt = image.name || "Selected post image";
  composePreviewImage.hidden = false;
  uploadDrop?.classList.add("has-image");
  removeComposeImage.hidden = false;
  composeImageControls.hidden = !hasMultiple;
  composeImageCounter.textContent = `${composeImageIndex + 1} / ${composeImages.length}`;
}

function moveComposeImage(direction) {
  if (composeImages.length < 2) return;
  composeImageIndex = (composeImageIndex + direction + composeImages.length) % composeImages.length;
  renderComposeImage();
}

function removeCurrentComposeImage() {
  if (!composeImages.length) return;
  composeImages.splice(composeImageIndex, 1);
  if (composeImageIndex >= composeImages.length) {
    composeImageIndex = Math.max(0, composeImages.length - 1);
  }
  renderComposeImage();
}

function handleMockSubmit(event) {
  event.preventDefault();
  syncTrimRequiredFields(composeForm);
  if (!composeForm?.reportValidity()) return;
  if (!composePostTitle.value.trim()) {
    composePostTitle.focus();
    return;
  }
  const circleOnly = isComposeCirclePost();
  const circleId = circleOnly ? composeCircle?.value : "";
  const circle = circleId ? circleById(circleId) : null;
  if (circleOnly && !circle) {
    composeNotice.hidden = false;
    composeNotice.textContent = "サークル限定投稿を作成するには、参加中のサークルを選択してください。";
    return;
  }
  const tags = composeTags.value.trim()
    ? composeTags.value.trim().split(/\s+/)
    : (circle ? ["#circle", ...circle.tags.slice(0, 2)] : ["#vrchat", "#portfolio"]);
  const newPin = {
    id: Date.now(),
    title: composePostTitle.value.trim() || "新しい投稿",
    category: composeCategory.value || "Photo",
    visibility: circle ? composeCircleAudienceLabel() : normalizeComposeVisibility(composeVisibility?.value),
    circleVisibility: circle?.visibility || null,
    circlePostAudience: circle ? circle.postAudience : null,
    creator: "You",
    role: "VRChat creator",
    avatar: composeAvatar.value.trim() || "Rurune",
    world: composeWorld.value.trim() || "Creator Room",
    tags,
    request: null,
    description: composeDescription.value.trim() || (circle ? `${circle.name}の参加者向け限定投稿です。` : "通常投稿のモックです。"),
    image: composeImages[0]?.src || vrchatImages.portrait,
    circleId: circle?.id || null,
    allowReplies: Boolean(composeRepliesToggle?.checked),
    sensitive: {
      r18: Boolean(composeR18Toggle?.checked),
      gore: Boolean(composeGoreToggle?.checked)
    },
  };
  saveComposeRepliesDefault(newPin.allowReplies);
  pins.unshift(newPin);
  myPosts.unshift(newPin);
  composeNotice.hidden = false;
  composeNotice.textContent = circle
    ? `${circle.name}への限定投稿を作成しました。参加者だけが見られる想定です。`
    : "通常投稿のモックを作成しました。フィード先頭とマイページに追加されています。";
  clearComposeDraft();
  composePostTitle.value = "";
  composeAvatar.value = "";
  composeWorld.value = "";
  composeTags.value = "";
  composeDescription.value = "";
  if (composeR18Toggle) composeR18Toggle.checked = false;
  if (composeGoreToggle) composeGoreToggle.checked = false;
  if (composeRepliesToggle) composeRepliesToggle.checked = composeRepliesDefaultEnabled();
  composeImages = [];
  composeImageIndex = 0;
  renderComposeImage();
  updateComposePreview();
  renderPins();
  if (activeProfile === "You") renderProfile("You");
}

function handleRequestComposeSubmit(event) {
  event.preventDefault();
  syncTrimRequiredFields(requestComposeForm);
  if (!requestComposeForm?.reportValidity()) return;
  if (!requestPostTitle.value.trim()) {
    requestComposeNotice.hidden = false;
    requestComposeNotice.textContent = "依頼受付タイトルは必須です。";
    requestPostTitle.focus();
    return;
  }

  const values = requestComposeValues();
  const tags = values.tags.split(/\s+/).filter(Boolean);
  const newPin = {
    id: Date.now(),
    title: values.title,
    category: "Commission",
    creator: "You",
    role: "VRChat creator",
    avatar: requestPostAvatar.value.trim() || "Sample avatar",
    world: requestPostWorld.value.trim() || "Request board",
    tags,
    request: {
      open: true,
      title: values.title,
      price: values.price,
      capacity: values.capacity,
      delivery: values.averageDelivery,
      desiredDelivery: values.desiredDelivery,
      retake: values.retake,
      chat: values.chat,
    },
    description: `${values.description} ${values.requirements}`,
    image: requestComposeImageData || vrchatImages.creators,
  };

  pins.unshift(newPin);
  myPosts.unshift(newPin);
  requestComposeNotice.hidden = false;
  requestComposeNotice.textContent = "依頼受付投稿のモックを作成しました。フィード先頭とマイページに追加されています。";
  clearRequestComposeDraft();
  setView("discover");
  setCategory("All");
  renderPins();
}

let ignoreNextBoardClick = false;
let boardTouchStart = null;
const boardTapMoveTolerance = 12;
let pinPointerStart = null;

function shouldIgnorePinOpenTarget(target) {
  return Boolean(target.closest("[data-save], [data-tag], [data-profile], button, a, input, textarea, select"));
}

function openPinFromCard(card, event = null) {
  if (!card) return;
  event?.preventDefault?.();
  event?.stopPropagation?.();
  openPin(Number(card.dataset.id), card);
}

function handleBoardClick(event) {
  if (ignoreNextBoardClick) {
    ignoreNextBoardClick = false;
    return;
  }

  if (event.target.closest(".pin-open-link")) {
    return;
  }

  const tagButton = event.target.closest("[data-tag]");
  if (tagButton) {
    event.stopPropagation();
    searchByTag(tagButton.dataset.tag);
    return;
  }

  const profileButton = event.target.closest("[data-profile]");
  if (profileButton) {
    event.stopPropagation();
    openProfile(profileButton.dataset.profile);
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    event.stopPropagation();
    toggleSave(Number(saveButton.dataset.save));
    return;
  }

  const card = event.target.closest(".pin-card");
  if (card) openPinFromCard(card, event);
}

function handleBoardTouchStart(event) {
  if (event.touches.length !== 1) {
    boardTouchStart = null;
    return;
  }
  if (shouldIgnorePinOpenTarget(event.target)) {
    boardTouchStart = null;
    return;
  }

  const card = event.target.closest(".pin-card");
  if (!card) {
    boardTouchStart = null;
    return;
  }

  const touch = event.touches[0];
  boardTouchStart = {
    card,
    x: touch.clientX,
    y: touch.clientY,
    moved: false,
  };
}

function handleBoardTouchMove(event) {
  if (!boardTouchStart || event.touches.length !== 1) return;

  const touch = event.touches[0];
  const deltaX = Math.abs(touch.clientX - boardTouchStart.x);
  const deltaY = Math.abs(touch.clientY - boardTouchStart.y);
  if (deltaX > boardTapMoveTolerance || deltaY > boardTapMoveTolerance) {
    boardTouchStart.moved = true;
  }
}

function handleBoardTouchEnd(event) {
  const touchStart = boardTouchStart;
  boardTouchStart = null;

  if (!touchStart || touchStart.moved) return;
  if (shouldIgnorePinOpenTarget(event.target)) return;

  const touch = event.changedTouches?.[0];
  if (!touch) return;

  const deltaX = Math.abs(touch.clientX - touchStart.x);
  const deltaY = Math.abs(touch.clientY - touchStart.y);
  if (deltaX > boardTapMoveTolerance || deltaY > boardTapMoveTolerance) return;

  const card = event.target.closest(".pin-card");
  if (!card || card !== touchStart.card) return;

  openPinFromCard(card, event);
}

let myRequestsTabOffset = 0;

function clampMyRequestsTabOffset() {
  if (!myRequestsTabsScroller || !myRequestsTabsTrack) return 0;
  const maxOffset = Math.max(0, myRequestsTabsTrack.scrollWidth - myRequestsTabsScroller.clientWidth + 8);
  myRequestsTabOffset = Math.max(0, Math.min(myRequestsTabOffset, maxOffset));
  myRequestsTabsTrack.style.transform = `translate3d(${-myRequestsTabOffset}px, 0, 0)`;
  return maxOffset;
}

function ensureMyRequestTabVisible(button) {
  if (!button || !myRequestsTabsScroller || !myRequestsTabsTrack) return;
  const viewportWidth = myRequestsTabsScroller.clientWidth;
  const left = button.offsetLeft;
  const right = left + button.offsetWidth;
  if (left < myRequestsTabOffset) {
    myRequestsTabOffset = left;
  } else if (right > myRequestsTabOffset + viewportWidth) {
    myRequestsTabOffset = right - viewportWidth + 8;
  }
  clampMyRequestsTabOffset();
}

function enableHorizontalDragScroll(scroller, track) {
  if (!scroller || !track) return;
  let dragState = null;
  let suppressClick = false;

  const begin = (event, clientX, clientY) => {
    const maxOffset = clampMyRequestsTabOffset();
    if (!maxOffset) return;
    dragState = {
      x: clientX,
      y: clientY,
      left: myRequestsTabOffset,
      moved: false,
    };
    scroller.classList.add("is-drag-scroll-ready");
  };

  const move = (event, clientX, clientY) => {
    if (!dragState) return;
    const deltaX = clientX - dragState.x;
    const deltaY = clientY - dragState.y;
    if (!dragState.moved) {
      if (Math.abs(deltaX) < 6 && Math.abs(deltaY) < 6) return;
      if (Math.abs(deltaX) <= Math.abs(deltaY)) return;
    }
    dragState.moved = true;
    suppressClick = true;
    scroller.classList.add("is-drag-scrolling");
    myRequestsTabOffset = dragState.left - deltaX;
    clampMyRequestsTabOffset();
    event.preventDefault();
  };

  const end = () => {
    if (!dragState) return;
    dragState = null;
    scroller.classList.remove("is-drag-scroll-ready", "is-drag-scrolling");
    if (suppressClick) {
      window.setTimeout(() => {
        suppressClick = false;
      }, 0);
    }
  };

  scroller.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;
    begin(event, event.clientX, event.clientY);
  });
  document.addEventListener("mousemove", (event) => {
    move(event, event.clientX, event.clientY);
  });
  document.addEventListener("mouseup", end);
  scroller.addEventListener("mouseleave", () => {
    if (!dragState?.moved) end();
  });
  scroller.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return;
    const touch = event.touches[0];
    begin(event, touch.clientX, touch.clientY);
  }, { passive: true });
  scroller.addEventListener("touchmove", (event) => {
    if (event.touches.length !== 1) return;
    const touch = event.touches[0];
    move(event, touch.clientX, touch.clientY);
  }, { passive: false });
  scroller.addEventListener("touchend", end);
  scroller.addEventListener("touchcancel", end);
  scroller.addEventListener("click", (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }, true);

  scroller.addEventListener("wheel", (event) => {
    if (!clampMyRequestsTabOffset()) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (!delta) return;
    myRequestsTabOffset += delta;
    clampMyRequestsTabOffset();
    event.preventDefault();
  }, { passive: false });
}

document.addEventListener("pointerdown", (event) => {
  if (shouldIgnorePinOpenTarget(event.target)) {
    pinPointerStart = null;
    return;
  }
  const card = event.target.closest(".pin-card");
  if (!card) {
    pinPointerStart = null;
    return;
  }
  pinPointerStart = {
    card,
    x: event.clientX,
    y: event.clientY,
  };
}, true);

document.addEventListener("pointerup", (event) => {
  const start = pinPointerStart;
  pinPointerStart = null;
  if (!start || shouldIgnorePinOpenTarget(event.target)) return;
  const card = event.target.closest(".pin-card");
  if (!card || card !== start.card) return;
  const deltaX = Math.abs(event.clientX - start.x);
  const deltaY = Math.abs(event.clientY - start.y);
  if (deltaX > boardTapMoveTolerance || deltaY > boardTapMoveTolerance) return;
  if (modalIsOpen(dialog)) return;
  ignoreNextBoardClick = true;
  openPinFromCard(card, event);
}, true);

document.addEventListener("click", (event) => {
  if (ignoreNextBoardClick) {
    ignoreNextBoardClick = false;
    return;
  }
  if (shouldIgnorePinOpenTarget(event.target)) return;
  const card = event.target.closest(".pin-card");
  if (!card || modalIsOpen(dialog)) return;
  openPinFromCard(card, event);
}, true);

chips.forEach((chip) => {
  chip.addEventListener("click", () => setCategory(chip.dataset.category));
});

navPills.forEach((pill) => {
  pill.addEventListener("click", () => setView(pill.dataset.view));
});

savedSearchTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-saved-search-id]");
  if (!button) return;
  if (savedSearchHoldTriggered) {
    event.preventDefault();
    event.stopPropagation();
    savedSearchHoldTriggered = false;
    return;
  }
  closeSavedSearchContextMenu();
  activateSavedSearchTab(button.dataset.savedSearchId);
});

savedSearchTabs?.addEventListener("contextmenu", (event) => {
  const button = event.target.closest("[data-saved-search-id]");
  if (!button) return;
  event.preventDefault();
  openSavedSearchContextMenu(button.dataset.savedSearchId, event.clientX, event.clientY);
});
savedSearchTabs?.addEventListener("pointerdown", handleSavedSearchPointerDown);
savedSearchTabs?.addEventListener("pointermove", handleSavedSearchPointerMove);
savedSearchTabs?.addEventListener("pointerup", handleSavedSearchPointerEnd);
savedSearchTabs?.addEventListener("pointercancel", handleSavedSearchPointerEnd);
savedSearchTabs?.addEventListener("pointerleave", handleSavedSearchPointerEnd);

addSavedSearchTabButton?.addEventListener("click", () => openSavedSearchDialog());

savedSearchContextEdit?.addEventListener("click", () => {
  if (!contextSavedSearchTabId) return;
  const id = contextSavedSearchTabId;
  closeSavedSearchContextMenu();
  openSavedSearchDialog(id);
});
savedSearchContextDelete?.addEventListener("click", deleteSavedSearchTab);
savedSearchDelete?.addEventListener("click", deleteSavedSearchTab);
savedSearchCancel?.addEventListener("click", closeSavedSearchDialog);
savedSearchDialog?.addEventListener("click", (event) => {
  if (event.target === savedSearchDialog) closeSavedSearchDialog();
});
savedSearchDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeSavedSearchDialog();
});
savedSearchLabelInput?.addEventListener("input", updateSavedSearchSaveButtonState);
savedSearchQueryInput?.addEventListener("input", updateSavedSearchSaveButtonState);
savedSearchDialog?.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveSavedSearchTab();
});

document.addEventListener("click", (event) => {
  if (!savedSearchContextMenu || savedSearchContextMenu.hidden) return;
  if (savedSearchContextMenu.contains(event.target)) return;
  closeSavedSearchContextMenu();
});

document.addEventListener("pointerdown", (event) => {
  if (eventProposalTypeMenu && !eventProposalTypeMenu.hidden) {
    const inEventTypeControl = event.target.closest("[data-event-type-control]");
    if (!inEventTypeControl) closeEventProposalTypeMenu();
  }
  const inCustomSelect = event.target.closest("[data-custom-select-control]");
  if (!inCustomSelect) closeAllCustomSelects();
  if (savedSearchContextMenu && !savedSearchContextMenu.hidden) {
    if (!savedSearchContextMenu.contains(event.target)) {
      closeSavedSearchContextMenu();
    }
  }
  if (floatingPostActions && !floatingPostActions.hidden) {
    const inFloatingDock = floatingPostDock?.contains(event.target);
    if (!inFloatingDock) {
      hideFloatingPostActions();
    }
  }
}, true);

window.addEventListener("scroll", closeSavedSearchContextMenu, { passive: true });
window.addEventListener("resize", closeSavedSearchContextMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSavedSearchContextMenu();
});

searchInput.addEventListener("input", () => {
  renderPins();
});
eventPrev?.addEventListener("click", () => {
  markEventCarouselInteraction();
  goToEventSlide(activeEventIndex - 1, { reason: "button" });
});
eventNext?.addEventListener("click", () => {
  markEventCarouselInteraction();
  goToEventSlide(activeEventIndex + 1, { reason: "button" });
});
openEventProposalButton?.addEventListener("click", openEventsPage);
openEventProposalFromDetail?.addEventListener("click", openEventProposalDialog);
eventsCreateButton?.addEventListener("click", openEventProposalDialog);
eventsSearchInput?.addEventListener("input", renderEventsList);
eventsQuickFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-event-filter]");
  if (!button) return;
  activeEventsFilter = button.dataset.eventFilter || "all";
  eventsQuickFilters.querySelectorAll("[data-event-filter]").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  renderEventsList();
});
eventsGrid?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-event-open]");
  if (!card) return;
  openEventDetailPage(card.dataset.eventOpen);
});
eventCarouselDots?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-event-dot]");
  if (!button) return;
  markEventCarouselInteraction();
  goToEventSlide(Number(button.dataset.eventDot), { reason: "button" });
});
eventCarouselTrack?.addEventListener("pointerdown", startEventDrag);
eventCarouselTrack?.addEventListener("pointermove", moveEventDrag);
eventCarouselTrack?.addEventListener("pointerup", endEventDrag);
eventCarouselTrack?.addEventListener("pointercancel", endEventDrag);
eventCarouselTrack?.addEventListener("transitionend", handleEventTrackTransitionEnd);
eventCarouselTrack?.addEventListener("pointerleave", (event) => {
  if (eventDragState) {
    endEventDrag(event);
    return;
  }
});
settingsLanguage?.addEventListener("change", () => {
  currentLanguage = settingsLanguage.value;
  applyLanguage({ rerender: true });
  showProfileCopyToast(t("languageChanged"));
});
settingsView?.addEventListener("click", (event) => {
  const row = event.target.closest(".settings-row");
  if (!row || event.target.closest('input[type="checkbox"]')) return;
  event.preventDefault();
});
settingsView?.addEventListener("change", handleSettingsAutoSave);
eventProposalCancel?.addEventListener("click", closeEventProposalDialog);
eventProposalImageInput?.addEventListener("change", () => {
  loadEventProposalImage(eventProposalImageInput.files?.[0]);
});
eventProposalTypeInput?.addEventListener("change", () => {
  setEventProposalType(eventProposalTypeInput.value);
});
eventProposalTypeButton?.addEventListener("click", () => {
  if (!eventProposalTypeMenu || !eventProposalTypeButton) return;
  const shouldOpen = eventProposalTypeMenu.hidden;
  eventProposalTypeMenu.hidden = !shouldOpen;
  eventProposalTypeButton.setAttribute("aria-expanded", String(shouldOpen));
  if (shouldOpen) updateEventProposalTypeCustomControl();
});
eventProposalTypeMenu?.addEventListener("click", (event) => {
  const option = event.target.closest("[data-event-type-option]");
  if (!option) return;
  setEventProposalType(option.dataset.eventTypeOption);
  closeEventProposalTypeMenu();
  eventProposalTypeButton?.focus();
});
document.addEventListener("click", (event) => {
  const customButton = event.target.closest("[data-custom-select-button]");
  if (customButton) {
    const control = customButton.closest("[data-custom-select-control]");
    const select = selectForCustomControl(control);
    const menu = control?.querySelector("[data-custom-select-menu]");
    if (!select || !menu) return;
    if (select.disabled) {
      closeCustomSelect(select);
      return;
    }
    const shouldOpen = menu.hidden;
    closeAllCustomSelects(control);
    menu.hidden = !shouldOpen;
    customButton.setAttribute("aria-expanded", String(shouldOpen));
    if (shouldOpen) refreshCustomSelect(select);
    return;
  }

  const option = event.target.closest("[data-custom-select-option]");
  if (option) {
    chooseCustomSelectOption(option);
  }
});

document.addEventListener("pointerdown", (event) => {
  const option = event.target.closest("[data-custom-select-option]");
  if (!option) return;
  if (chooseCustomSelectOption(option)) {
    event.preventDefault();
    event.stopPropagation();
  }
}, true);
setupTrimRequiredValidation();
[
  eventProposalTitleInput,
  eventProposalOtherTypeInput,
  eventProposalOrganizerInput,
  eventProposalContactInput,
  eventProposalSummaryInput,
  eventProposalSupportInput
].forEach((field) => {
  field?.addEventListener("input", updateEventProposalSubmitState);
  field?.addEventListener("change", updateEventProposalSubmitState);
});
eventProposalForm?.addEventListener("submit", submitEventProposal);
shuffleButton.addEventListener("click", shufflePins);
createButton?.addEventListener("click", openComposeHint);
createRequestButton?.addEventListener("click", openRequestComposeDialog);
floatingPost?.addEventListener("pointerdown", handleFloatingPostPointerDown);
floatingPost?.addEventListener("pointerup", handleFloatingPostPointerUp);
floatingPost?.addEventListener("pointercancel", handleFloatingPostPointerLeave);
floatingPost?.addEventListener("pointerleave", handleFloatingPostPointerLeave);
floatingPost?.addEventListener("click", handleFloatingPostClick);
floatingDraftsButton?.addEventListener("click", openComposeDraftListDialog);
floatingNewPostButton?.addEventListener("click", () => {
  hideFloatingPostActions();
  openComposeHint();
});
composeDraftListClose?.addEventListener("click", () => closeModalElement(composeDraftListDialog));
composeDraftListBody?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-compose-draft-action]");
  if (!action) return;
  if (action.dataset.composeDraftAction === "resume") {
    closeModalElement(composeDraftListDialog);
    openComposeHint({ restoreDraft: true });
    return;
  }
  if (action.dataset.composeDraftAction === "delete") {
    clearComposeDraft();
    openComposeDraftListDialog();
  }
});
themeToggle?.addEventListener("click", toggleTheme);
likedPostsButton?.addEventListener("click", () => openMyProfileArchive("likes"));
bookmarkFoldersButton?.addEventListener("click", () => openMyProfileArchive("folders"));
circlePageButton?.addEventListener("click", () => openCirclesPage());
eventPageButton?.addEventListener("click", openEventsPage);
missionButton?.addEventListener("click", openServicePage);
missionCardButton?.addEventListener("click", openServicePage);
requestManagerButton?.addEventListener("click", openRequestManagerPage);
myRequestsButton?.addEventListener("click", openMyRequestsPage);
requestManagerCreatePost?.addEventListener("click", openRequestComposeDialog);
notificationButton.addEventListener("click", openNotificationsPage);
avatarButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleAccountMenu();
});
accountMenuProfile?.addEventListener("click", () => {
  closeAccountMenu();
  openMyProfile();
});
accountMenuSubscriptions?.addEventListener("click", () => {
  closeAccountMenu();
  openSubscriptionsPage();
});
accountMenuMyRequests?.addEventListener("click", () => {
  closeAccountMenu();
  openMyRequestsPage();
});
accountMenuService?.addEventListener("click", () => {
  closeAccountMenu();
  openServicePage();
});
accountMenuAdmin?.addEventListener("click", () => {
  closeAccountMenu();
  openAdminPage();
});
accountMenuSpecs?.addEventListener("click", () => {
  closeAccountMenu();
  openBackendSpecPage();
});
accountMenuSettings?.addEventListener("click", () => {
  openSettingsPage();
});
accountMenuTheme?.addEventListener("click", () => {
  toggleTheme();
  closeAccountMenu();
});
accountMenuLogout?.addEventListener("click", () => {
  closeAccountMenu();
  openAccountActionDialog("logout");
});
accountSwitcherList?.addEventListener("click", (event) => {
  const option = event.target.closest("[data-account-switch]");
  if (!option) return;
  event.stopPropagation();
  switchAccount(option.dataset.accountSwitch);
});
accountAddButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  addMockAccount();
});
accountMenu?.addEventListener("click", (event) => {
  event.stopPropagation();
  const mobileAction = event.target.closest("[data-mobile-menu-action]");
  if (!mobileAction) return;
  const action = mobileAction.dataset.mobileMenuAction;
  closeAccountMenu();
  if (action === "home") {
    showFeed();
  } else if (action === "theme") {
    toggleTheme();
  } else if (action === "likes") {
    openMyProfileArchive("likes");
  } else if (action === "bookmarks") {
    openMyProfileArchive("folders");
  } else if (action === "subscriptions") {
    openSubscriptionsPage();
  } else if (action === "circles") {
    openCirclesPage();
  } else if (action === "requests") {
    openRequestManagerPage();
  } else if (action === "my-requests") {
    openMyRequestsPage();
  } else if (action === "events") {
    openEventsPage();
  } else if (action === "notifications") {
    openNotificationsPage();
  }
});
onboardingStartButton?.addEventListener("click", markOnboardingSeen);
onboardingServiceButton?.addEventListener("click", () => {
  markOnboardingSeen();
  closeModalElement(onboardingDialog);
  openServicePage();
});
onboardingDialog?.addEventListener("close", markOnboardingSeen);
document.addEventListener("click", (event) => {
  if (accountMenu?.hidden) return;
  if (event.target.closest(".account-menu-wrap")) return;
  closeAccountMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAccountMenu();
});
backToFeed.addEventListener("click", returnFromProfile);
backFromRequest.addEventListener("click", returnFromRequestPage);
backFromNotifications.addEventListener("click", returnFromNotifications);
backFromSettings?.addEventListener("click", returnFromSettings);
backFromRequestManager?.addEventListener("click", returnFromRequestManager);
backFromRequestDetail?.addEventListener("click", returnFromRequestManagerDetail);
backFromMyRequests?.addEventListener("click", returnFromMyRequests);
backFromMyRequestDetail?.addEventListener("click", returnFromMyRequestDetail);
backFromService?.addEventListener("click", returnFromService);
backFromEventDetail?.addEventListener("click", returnFromEventDetail);
backFromEvents?.addEventListener("click", returnFromEvents);
backFromCircles?.addEventListener("click", returnFromCircles);
backFromMission?.addEventListener("click", returnFromMission);
backFromAdmin?.addEventListener("click", returnFromAdmin);
backFromSpecs?.addEventListener("click", returnFromSpecs);
serviceMissionLink?.addEventListener("click", openMissionPage);
eventDetailOrganizer?.addEventListener("click", (event) => {
  const profileButton = event.target.closest("[data-profile]");
  if (profileButton) openProfile(profileButton.dataset.profile);
});
eventCircleRequirementButton?.addEventListener("click", (event) => {
  const circleId = event.currentTarget.dataset.circleOpen;
  if (circleId) openCirclesPage(circleId);
});
circleGrid?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-circle-open]");
  if (card) openCirclesPage(card.dataset.circleOpen);
});
circleViewTabs?.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-circle-tab]");
  if (!tab) return;
  activeCircleTab = tab.dataset.circleTab;
  if (activeCircleTab === "manage") {
    openCircleManagerPage(activeManagedCircleId);
    return;
  }
  renderCirclesPage(activeCirclePageId, { scroll: false });
});
circleSearchInput?.addEventListener("input", () => {
  activeCircleTab = "browse";
  renderCirclesPage(activeCirclePageId, { scroll: false });
});
circleFilterInputs.forEach((input) => {
  input.addEventListener("change", () => {
    activeCircleTab = "browse";
    renderCirclesPage(activeCirclePageId, { scroll: false });
  });
});
circleJoinButton?.addEventListener("click", (event) => {
  const circleId = event.currentTarget.dataset.circleJoin;
  if (circleId) toggleCircleJoin(circleId);
});
circleSupportButton?.addEventListener("click", (event) => {
  const circleId = event.currentTarget.dataset.circleSupport;
  const plans = circleSubscriptionPlans(circleById(circleId));
  if (circleId && plans[0]) openSubscriptionPlanDetailDialog(circleSubscriptionKey(circleId), plans[0].id);
});
circleManagerList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-managed-circle]");
  if (!button) return;
  activeManagedCircleId = button.dataset.managedCircle;
  history.replaceState("", document.title, `${location.pathname}${location.search}#circle-manager/${activeManagedCircleId}`);
  renderCircleManager();
});
circleManagerInviteButton?.addEventListener("click", () => {
  const circle = ensureActiveManagedCircle();
  showProfileCopyToast(`${circle?.name || "サークル"}の招待リンクをコピーしました`);
});
circleCreateTopButton?.addEventListener("click", openCircleCreateDialog);
circleCreateManagerButton?.addEventListener("click", openCircleCreateDialog);
circleCreateNameInput?.addEventListener("input", updateCircleCreateState);
circleCreateDescriptionInput?.addEventListener("input", updateCircleCreateState);
circleCreateVisibilityInput?.addEventListener("change", updateCircleCreateState);
circleCreatePostAudienceInput?.addEventListener("change", updateCircleCreateState);
circleCreateSupportPayoutInput?.addEventListener("change", updateCircleCreateState);
circleCreateForm?.addEventListener("submit", createCircleFromForm);
circleCreateDialog?.addEventListener("click", (event) => {
  if (event.target === circleCreateDialog) closeCircleCreateDialog();
});
circleCreateDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeCircleCreateDialog();
});
circleManagerMembers?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-circle-role-action]");
  if (!action) return;
  handleCircleManagerAction(action.dataset.circleRoleAction, action.dataset.member);
});
circleManagerSummary?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-circle-role-action]");
  if (!action) return;
  handleCircleManagerAction(action.dataset.circleRoleAction, action.dataset.member);
});
circleManagerRequests?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-circle-request-action]");
  if (!action) return;
  handleCircleManagerAction(action.dataset.circleRequestAction, action.dataset.request);
});
circleManagerRoles?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-circle-role-action]");
  if (!action) return;
  handleCircleManagerAction(action.dataset.circleRoleAction, action.dataset.member);
});
circlePromoteConfirm?.addEventListener("click", (event) => {
  event.preventDefault();
});
circlePromoteConfirm?.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  circlePromoteConfirm.setPointerCapture?.(event.pointerId);
  startApproveHold(circlePromoteConfirm, confirmCirclePromoteHold);
});
circlePromoteConfirm?.addEventListener("pointerup", () => {
  if (!approveHoldCompleted) clearApproveHoldState(circlePromoteConfirm);
});
circlePromoteConfirm?.addEventListener("pointerleave", () => {
  if (!approveHoldCompleted) clearApproveHoldState(circlePromoteConfirm);
});
circlePromoteConfirm?.addEventListener("pointercancel", () => {
  if (!approveHoldCompleted) clearApproveHoldState(circlePromoteConfirm);
});
circlePromoteDialog?.addEventListener("click", (event) => {
  if (event.target !== circlePromoteDialog) return;
  closeModalElement(circlePromoteDialog);
  resetCircleRoleDialogState();
});
circlePromoteDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeModalElement(circlePromoteDialog);
  resetCircleRoleDialogState();
});
circleTransferCircleInput?.addEventListener("input", updateCircleTransferConfirmState);
circleTransferMemberInput?.addEventListener("input", updateCircleTransferConfirmState);
circleTransferConfirm?.addEventListener("click", confirmCircleTransfer);
circleTransferDialog?.addEventListener("click", (event) => {
  if (event.target !== circleTransferDialog) return;
  closeModalElement(circleTransferDialog);
  resetCircleRoleDialogState();
});
circleTransferDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeModalElement(circleTransferDialog);
  resetCircleRoleDialogState();
});
circleRejectCancel?.addEventListener("click", () => {
  closeModalElement(circleRejectDialog);
  resetCircleRejectDialogState();
});
circleRejectConfirm?.addEventListener("click", confirmCircleReject);
circleRejectDialog?.addEventListener("click", (event) => {
  if (event.target !== circleRejectDialog) return;
  closeModalElement(circleRejectDialog);
  resetCircleRejectDialogState();
});
circleRejectDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeModalElement(circleRejectDialog);
  resetCircleRejectDialogState();
});
circleKickCancel?.addEventListener("click", () => {
  closeModalElement(circleKickDialog);
  resetCircleKickDialogState();
});
circleKickConfirm?.addEventListener("click", confirmCircleKick);
circleKickDialog?.addEventListener("click", (event) => {
  if (event.target !== circleKickDialog) return;
  closeModalElement(circleKickDialog);
  resetCircleKickDialogState();
});
circleKickDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeModalElement(circleKickDialog);
  resetCircleKickDialogState();
});
circleLeaveCancel?.addEventListener("click", () => {
  closeModalElement(circleLeaveDialog);
  resetCircleLeaveDialogState();
});
circleLeaveConfirm?.addEventListener("click", confirmCircleLeave);
circleLeaveDialog?.addEventListener("click", (event) => {
  if (event.target !== circleLeaveDialog) return;
  closeModalElement(circleLeaveDialog);
  resetCircleLeaveDialogState();
});
circleLeaveDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeModalElement(circleLeaveDialog);
  resetCircleLeaveDialogState();
});
document.addEventListener("click", (event) => {
  if (!floatingPostDock?.contains(event.target)) hideFloatingPostActions();
});
accountEmailButton?.addEventListener("click", () => openAccountActionDialog("email"));
accountPasswordButton?.addEventListener("click", () => openAccountActionDialog("password"));
accountLogoutButton?.addEventListener("click", () => openAccountActionDialog("logout"));
accountActionCancel?.addEventListener("click", closeAccountActionDialog);
accountActionConfirm?.addEventListener("click", () => {
  const type = accountActionDialog?.dataset.actionType || "";
  if (type === "password") {
    const newPasswordInput = accountActionFields?.querySelector('[data-account-password="new"]');
    const confirmPasswordInput = accountActionFields?.querySelector('[data-account-password="confirm"]');
    if ((newPasswordInput?.value || "") !== (confirmPasswordInput?.value || "")) {
      if (accountActionError) {
        accountActionError.textContent = t("accountPasswordMismatch");
        accountActionError.hidden = false;
      }
      confirmPasswordInput?.focus();
      return;
    }
  }
  closeAccountActionDialog();
  if (type === "logout") {
    performLogout();
    return;
  }
  showProfileCopyToast(t("accountUpdatedToast"));
});
accountActionFields?.addEventListener("input", () => {
  if (accountActionError && !accountActionError.hidden) {
    accountActionError.hidden = true;
    accountActionError.textContent = "";
  }
});
accountActionDialog?.addEventListener("click", (event) => {
  if (event.target === accountActionDialog) closeAccountActionDialog();
});
accountActionDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeAccountActionDialog();
});
accountDeleteButton?.addEventListener("click", openAccountDeleteDialog);
accountDeleteCancel?.addEventListener("click", closeAccountDeleteDialog);
accountDeletePassword?.addEventListener("input", () => {
  if (accountDeleteError) accountDeleteError.hidden = true;
});
accountDeleteDialog?.addEventListener("click", (event) => {
  if (event.target === accountDeleteDialog) closeAccountDeleteDialog();
});
accountDeleteDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeAccountDeleteDialog();
});
accountDeleteConfirm?.addEventListener("click", (event) => {
  event.preventDefault();
});
accountDeleteConfirm?.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  accountDeleteConfirm.setPointerCapture?.(event.pointerId);
  startAccountDeleteHold();
});
accountDeleteConfirm?.addEventListener("pointerup", () => {
  if (!accountDeleteHoldCompleted) clearAccountDeleteHoldState();
});
accountDeleteConfirm?.addEventListener("pointerleave", () => {
  if (!accountDeleteHoldCompleted) clearAccountDeleteHoldState();
});
accountDeleteConfirm?.addEventListener("pointercancel", () => {
  if (!accountDeleteHoldCompleted) clearAccountDeleteHoldState();
});
requestStateTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeRequestManagerState = tab.dataset.requestState;
    renderRequestManagerList();
  });
});

pendingSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pendingRequestSort = button.dataset.pendingSort || "deadline";
    renderRequestManagerList();
  });
});

requestManagerList?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-request-item]");
  if (!card) return;
  openRequestManagerDetail(Number(card.dataset.requestItem));
});

myRequestStateTabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeMyRequestState = button.dataset.myRequestState || "todo";
    renderMyRequestsList();
  });
});

myRequestsList?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-my-request-item]");
  if (!card) return;
  openMyRequestDetail(Number(card.dataset.myRequestItem));
});

myRequestNextActions?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-my-request-action]");
  if (!button) return;
  const item = myRequestItemById(activeMyRequestItemId);
  if (!item) return;
  const action = button.dataset.myRequestAction;
  if (action === "review-delivery") {
    openRequestReviewDialog("client", item);
    return;
  }
  if (action === "retake") {
    item.status = "in_progress";
    item.messages.push({ from: "you", time: "いま", text: "納品物を確認しました。リテイク相談をお願いします。" });
    renderMyRequestDetailPage(item.id);
    showProfileCopyToast("リテイク相談に戻しました");
    return;
  }
  if (action === "request-again") {
    openRequestPage(item.creator);
    return;
  }
  showProfileCopyToast(button.textContent.trim() || "操作しました");
});

myRequestChatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = myRequestItemById(activeMyRequestItemId);
  const text = myRequestChatInput?.value.trim();
  if (!item || !text) return;
  item.messages.push({ from: "you", time: "いま", text });
  if (myRequestChatInput) myRequestChatInput.value = "";
  renderMyRequestDetailPage(item.id);
});

myRequestReportButton?.addEventListener("click", () => openRequestReportDialog("sent"));
requestAttachButton?.addEventListener("click", () => requestAttachInput?.click());
requestAttachInput?.addEventListener("change", () => {
  addRequestAttachments(requestAttachInput.files || []);
  requestAttachInput.value = "";
});
requestChatPanel?.addEventListener("dragover", (event) => {
  event.preventDefault();
  requestChatPanel.classList.add("is-dragging-file");
  requestChatDropHint.hidden = false;
});
requestChatPanel?.addEventListener("dragleave", (event) => {
  if (requestChatPanel.contains(event.relatedTarget)) return;
  requestChatPanel.classList.remove("is-dragging-file");
  requestChatDropHint.hidden = true;
});
requestChatPanel?.addEventListener("drop", (event) => {
  event.preventDefault();
  requestChatPanel.classList.remove("is-dragging-file");
  requestChatDropHint.hidden = true;
  addRequestAttachments(event.dataTransfer?.files || []);
});
requestChatInput?.addEventListener("paste", (event) => {
  const files = [...(event.clipboardData?.files || [])];
  if (!files.length) return;
  addRequestAttachments(files);
});
requestChatCompose?.addEventListener("submit", (event) => {
  event.preventDefault();
  sendRequestChatMessage();
});
zipSafetyCheckbox?.addEventListener("change", () => {
  const disabled = !zipSafetyCheckbox.checked;
  zipSafetyConfirm.disabled = disabled;
  zipSafetyConfirm.classList.toggle("is-disabled", disabled);
});
zipSafetyConfirm?.addEventListener("click", confirmZipAttachments);
zipSafetyCancel?.addEventListener("click", cancelZipAttachments);
profileRequestButton.addEventListener("click", () => {
  if (profileRequestButton.hidden) return;
  if (activeProfile === "You") {
    openComposeHint();
    return;
  }
  openRequestPage(activeProfile);
});
profileShareButton?.addEventListener("click", shareCurrentProfile);
subscriptionPlanManageButton?.addEventListener("click", () => openSubscriptionPlanDialog());
subscriptionPlanForm?.addEventListener("submit", saveSubscriptionPlan);
subscriptionPlanDialog?.addEventListener("click", (event) => {
  if (event.target === subscriptionPlanDialog) closeSubscriptionPlanDialog();
});
subscriptionPlanDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeSubscriptionPlanDialog();
});
[subscriptionPlanName, subscriptionPlanPrice, subscriptionPlanSummary, subscriptionPlanPerks].filter(Boolean).forEach((input) => {
  input.addEventListener("input", updateSubscriptionPlanState);
  input.addEventListener("change", updateSubscriptionPlanState);
});
subscriptionPlanImage?.addEventListener("change", () => {
  loadSubscriptionPlanImage(subscriptionPlanImage.files?.[0]);
  subscriptionPlanImage.value = "";
});
profileSubscriptionSection?.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-plan-detail]");
  if (detailButton) {
    openSubscriptionPlanDetailDialog(detailButton.dataset.planCreator, detailButton.dataset.planDetail);
    return;
  }
  const editButton = event.target.closest("[data-plan-edit]");
  if (editButton) openSubscriptionPlanDialog(editButton.dataset.planEdit);
});
subscriptionPlanDetailDialog?.addEventListener("click", (event) => {
  if (event.target === subscriptionPlanDetailDialog) closeSubscriptionPlanDetailDialog();
});
subscriptionPlanDetailDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeSubscriptionPlanDetailDialog();
});
subscriptionPlanDetailJoin?.addEventListener("click", () => {
  const { creator, planId } = pendingSubscriptionPlanDetail;
  if (!creator || !planId || subscriptionPlanDetailJoin.disabled) return;
  subscribeToCreatorPlan(creator, planId);
  closeSubscriptionPlanDetailDialog();
});
subscriptionPlanDetailLeave?.addEventListener("click", () => {
  const { creator, planId } = pendingSubscriptionPlanDetail;
  if (!creator || !planId) return;
  unsubscribeFromCreatorPlan(creator, planId);
  closeSubscriptionPlanDetailDialog();
});
backFromSubscriptions?.addEventListener("click", returnFromSubscriptionsPage);
subscriptionsCreatePlanButton?.addEventListener("click", () => openSubscriptionPlanDialog());
subscriptionsSearchInput?.addEventListener("input", () => {
  subscriptionsQuery = subscriptionsSearchInput.value.trim();
  renderSubscriptionsPage({ scroll: false });
});
[subscriptionsJoinedList, subscriptionsPlanResults, subscriptionsCreatorPlans].filter(Boolean).forEach((container) => {
  container.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-plan-detail]");
    if (detailButton) {
      openSubscriptionPlanDetailDialog(detailButton.dataset.planCreator, detailButton.dataset.planDetail);
      return;
    }
    const editButton = event.target.closest("[data-plan-edit]");
    if (editButton) {
      openSubscriptionPlanDialog(editButton.dataset.planEdit);
      return;
    }
    const profileButton = event.target.closest("[data-profile-open]");
    if (profileButton) openProfile(profileButton.dataset.profileOpen);
    const circleButton = event.target.closest("[data-circle-open]");
    if (circleButton) {
      activeCircleTab = "posts";
      location.hash = `circle/${circleButton.dataset.circleOpen}`;
      renderCirclesPage(circleButton.dataset.circleOpen);
    }
  });
});
trustFeaturedWorks?.addEventListener("click", (event) => {
  const featured = event.target.closest("[data-featured-id]");
  if (!featured) return;
  openPin(Number(featured.dataset.featuredId), featured);
});
savedPostsBoard?.addEventListener("click", handleBoardClick);
savedPostsBoard?.addEventListener("touchstart", handleBoardTouchStart, { capture: true, passive: true });
savedPostsBoard?.addEventListener("touchmove", handleBoardTouchMove, { capture: true, passive: true });
savedPostsBoard?.addEventListener("touchend", handleBoardTouchEnd, { capture: true, passive: false });
enableHorizontalDragScroll(myRequestsTabsScroller, myRequestsTabsTrack);
window.addEventListener("resize", clampMyRequestsTabOffset);

board.addEventListener("click", handleBoardClick);
profileBoard.addEventListener("click", handleBoardClick);
board.addEventListener("touchstart", handleBoardTouchStart, { capture: true, passive: true });
profileBoard.addEventListener("touchstart", handleBoardTouchStart, { capture: true, passive: true });
board.addEventListener("touchmove", handleBoardTouchMove, { capture: true, passive: true });
profileBoard.addEventListener("touchmove", handleBoardTouchMove, { capture: true, passive: true });
board.addEventListener("touchend", handleBoardTouchEnd, { capture: true, passive: false });
profileBoard.addEventListener("touchend", handleBoardTouchEnd, { capture: true, passive: false });
profilePostSearch?.addEventListener("input", () => {
  profilePostQuery = profilePostSearch.value.trim();
  renderProfilePostArchive();
});

profileArchiveTabs.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTab = button.dataset.profileArchiveTab || "posts";
    prepareProfileArchiveTab(nextTab);
    renderProfilePostArchive();
  });
});

profilePostSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    profilePostSortMode = button.dataset.profileSort || "recent";
    renderProfilePostArchive();
  });
});

bookmarkFoldersBoard?.addEventListener("click", (event) => {
  const back = event.target.closest("[data-folder-back]");
  if (back) {
    activeBookmarkFolderId = null;
    renderSavedPostsSection();
    return;
  }
  const folder = event.target.closest("[data-folder-id]");
  if (!folder) return;
  activeBookmarkFolderId = folder.dataset.folderId;
  renderSavedPostsSection();
});

board.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const card = event.target.closest(".pin-card");
  if (card) openPin(Number(card.dataset.id), card);
});

closeDialog.addEventListener("click", closePinDialog);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closePinDialog();
});

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closePinDialog();
});

dialogRequest.addEventListener("click", (event) => {
  if (!currentPin) return;
  if (creatorHasOpenRequest(currentPin.creator)) {
    openRequestPage(currentPin.creator);
    return;
  }
  if (subscriptionProgramFor(currentPin.creator).length) openProfile(slugify(currentPin.creator));
});

requestPaymentButton.addEventListener("click", openRequestCheckoutDialog);
function completeMockAuthFromRequest() {
  requestViewerAuthenticated = true;
  localStorage.setItem("vrc-sns-auth-state", "signed-in");
  updateRequestAuthView();
  showProfileCopyToast(currentLanguage === "en" ? "Account ready" : currentLanguage === "ko" ? "계정 준비 완료" : "アカウント登録済みとして表示しました");
}

requestGuestSignUp?.addEventListener("click", completeMockAuthFromRequest);
requestGuestSignIn?.addEventListener("click", completeMockAuthFromRequest);
requestAmountInput?.addEventListener("input", () => {
  updateRequestAmountState();
});
requestAmountInput?.addEventListener("blur", () => {
  updateRequestAmountState();
});
requestConfirmButton?.addEventListener("click", () => {
  if (!requestViewerAuthenticated) {
    updateRequestAuthView();
    return;
  }
  if (!updateRequestAmountState()) {
    requestAmountInput?.focus();
    return;
  }
  if (!requestAgreement.checked) {
    requestPaymentNote.textContent = currentLanguage === "en" ? "Check the agreement before continuing." : currentLanguage === "ko" ? "동의 사항을 확인한 뒤 진행해주세요." : "同意事項を確認してから依頼確認へ進んでください。";
    return;
  }
  openRequestCheckoutDialog();
});
requestCheckoutAgreement?.addEventListener("change", () => {
  requestCheckoutSubmit.disabled = !requestCheckoutAgreement.checked;
});
requestCheckoutCancel?.addEventListener("click", () => closeModalElement(requestCheckoutDialog));
requestCheckoutSubmit?.addEventListener("click", () => {
  closeModalElement(requestCheckoutDialog);
  requestConfirmButton.textContent = currentLanguage === "en" ? "Payment screen planned" : currentLanguage === "ko" ? "결제 화면 예정" : "支払い画面へ進行予定";
  window.setTimeout(() => {
    requestConfirmButton.textContent = currentLanguage === "en" ? "Confirm request" : currentLanguage === "ko" ? "의뢰 확정" : "依頼を確定する";
  }, 1600);
});

requestCreatorProfileButton.addEventListener("click", () => {
  const slug = requestCreatorProfileButton.dataset.profile;
  if (slug) openProfile(slug);
});

requestPageReportButton?.addEventListener("click", () => openRequestReportDialog("client"));

requestDetailClientProfileButton?.addEventListener("click", () => {
  const slug = requestDetailClientProfileButton.dataset.profile;
  if (slug) openProfile(slug);
});

requestReportButton?.addEventListener("click", () => openRequestReportDialog("manager"));

requestMoreGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-request-id]");
  if (!card || !activeProfile) return;
  openRequestPage(activeProfile, Number(card.dataset.requestId));
});

notificationsList.addEventListener("click", (event) => {
  const row = event.target.closest("[data-notification-id]");
  if (!row) return;
  const item = notifications.find((notification) => notification.id === Number(row.dataset.notificationId));
  if (item) item.unread = false;
  updateNotificationBadge();
  openNotificationTarget(item);
});

notificationFilterTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-notification-filter]");
  if (!button) return;
  activeNotificationFilter = button.dataset.notificationFilter || "all";
  renderNotificationsPage();
});

document.querySelector(".admin-tabs")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-tab]");
  if (!button) return;
  activeAdminTab = button.dataset.adminTab || "events";
  renderAdminPage();
});

adminQueueList?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-admin-action]");
  if (!action) return;
  if (activeAdminTab === "events") {
    openAdminEventReview(action.dataset.adminAction);
    return;
  }
  showProfileCopyToast("運営対応の記録を更新しました");
});

adminEventReviewClose?.addEventListener("click", closeAdminEventReviewDialog);
adminEventReviewDialog?.addEventListener("click", (event) => {
  if (event.target === adminEventReviewDialog) closeAdminEventReviewDialog();
});
adminEventReviewDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeAdminEventReviewDialog();
});
adminEventApprove?.addEventListener("click", () => decideAdminEvent("approve"));
adminEventReject?.addEventListener("click", () => decideAdminEvent("reject"));

markNotificationsRead.addEventListener("click", () => {
  notifications.forEach((item) => {
    item.unread = false;
  });
  renderNotificationsPage();
  updateNotificationBadge();
});

deleteReadNotifications?.addEventListener("click", () => {
  for (let index = notifications.length - 1; index >= 0; index -= 1) {
    if (!notifications[index].unread) notifications.splice(index, 1);
  }
  renderNotificationsPage();
  updateNotificationBadge();
});

requestDecisionActions?.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-request-action]");
  if (!actionButton || !activeRequestManagerItemId) return;
  const item = requestManagerItemById(activeRequestManagerItemId);
  if (!item) return;
  const action = actionButton.dataset.requestAction;
  if (action === "approve") {
    clearApproveHoldState(requestApprovalConfirm);
    requestApprovalMessage.value = "ご依頼ありがとうございます。内容を確認しました。まずは素材と参考イメージを整理し、作業開始予定日をこのチャットで共有します。";
    showModalElement(requestApprovalDialog);
    return;
  }
  if (action === "reject") {
    requestRejectMessage.value = "";
    showModalElement(requestRejectDialog);
    return;
  }
  if (action === "start-progress") {
    if (actionButton.classList.contains("hold-to-approve-button")) return;
    completeStartProgressRequest();
    return;
  }
  if (action === "deliver") {
    openRequestDeliveryDialog();
    return;
  }
  if (action === "retake") {
    item.status = "in_progress";
    item.messages.push({ from: "client", time: "いま", text: "一部修正のお願いを送りました。再対応をお願いします。" });
    renderRequestManagerDetailPage(item.id);
    return;
  }
  if (action === "await-review") {
    openRequestReviewDialog("client", item);
    return;
  }
  if (action === "review-client") {
    openRequestReviewDialog("creator", item);
    return;
  }
  if (action === "report") {
    openRequestReportDialog();
    return;
  }
  if (action === "open-chat") {
    requestChatInput?.focus();
    requestDetailDecisionNote.textContent = currentLanguage === "en" ? "Jumped to chat input." : currentLanguage === "ko" ? "채팅 입력창으로 이동했습니다." : "チャット入力欄へ移動しました。";
    return;
  }
  requestDetailDecisionNote.textContent = "この操作はモックです。実際の実装ではここから詳細フローに進みます。";
});

requestDecisionActions?.addEventListener("pointerdown", (event) => {
  const holdButton = event.target.closest('.hold-to-approve-button[data-request-action="start-progress"]');
  if (!holdButton) return;
  event.preventDefault();
  startApproveHold(holdButton, completeStartProgressRequest);
});

requestDecisionActions?.addEventListener("pointerup", (event) => {
  const holdButton = event.target.closest('.hold-to-approve-button[data-request-action="start-progress"]');
  if (!holdButton) return;
  if (!approveHoldCompleted) clearApproveHoldState(holdButton);
});

requestDecisionActions?.addEventListener("pointerleave", (event) => {
  const holdButton = event.target.closest('.hold-to-approve-button[data-request-action="start-progress"]');
  if (!holdButton) return;
  if (!approveHoldCompleted) clearApproveHoldState(holdButton);
});

requestDecisionActions?.addEventListener("pointercancel", (event) => {
  const holdButton = event.target.closest('.hold-to-approve-button[data-request-action="start-progress"]');
  if (!holdButton) return;
  if (!approveHoldCompleted) clearApproveHoldState(holdButton);
});

requestApprovalCancel?.addEventListener("click", () => closeModalElement(requestApprovalDialog));
requestApprovalConfirm?.addEventListener("click", (event) => {
  event.preventDefault();
  return;
});

requestApprovalConfirm?.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  startApproveHold(requestApprovalConfirm, completeApproveRequest);
});

requestApprovalConfirm?.addEventListener("pointerup", () => {
  if (!approveHoldCompleted) clearApproveHoldState(requestApprovalConfirm);
});

requestApprovalConfirm?.addEventListener("pointerleave", () => {
  if (!approveHoldCompleted) clearApproveHoldState(requestApprovalConfirm);
});

requestApprovalConfirm?.addEventListener("pointercancel", () => {
  if (!approveHoldCompleted) clearApproveHoldState(requestApprovalConfirm);
});

requestReviewCancel?.addEventListener("click", closeRequestReviewDialog);
requestReviewSubmit?.addEventListener("click", submitRequestReview);
requestReviewDialog?.addEventListener("click", (event) => {
  if (event.target === requestReviewDialog) closeRequestReviewDialog();
});
requestReviewDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeRequestReviewDialog();
});

requestRejectCancel?.addEventListener("click", () => closeModalElement(requestRejectDialog));
requestRejectConfirm?.addEventListener("click", () => {
  const selected = document.querySelector('input[name="requestRejectReason"]:checked');
  const reason = selected?.value === "other" ? (requestRejectMessage.value.trim() || "その他の理由") : selected?.value;
  requestDetailDecisionNote.textContent = `却下理由: ${reason || "理由未設定"}。実装時はここで通知と理由表示へつなぐ想定です。`;
  closeModalElement(requestRejectDialog);
});

requestReportCancel?.addEventListener("click", closeRequestReportDialog);
requestReportConfirm?.addEventListener("click", submitRequestReport);
requestDeliveryCancel?.addEventListener("click", closeRequestDeliveryDialog);
requestDeliverySubmit?.addEventListener("click", submitRequestDelivery);
requestReportDialog?.addEventListener("click", (event) => {
  if (event.target === requestReportDialog) closeRequestReportDialog();
});
requestReportDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeRequestReportDialog();
});
requestDeliveryDialog?.addEventListener("click", (event) => {
  if (event.target === requestDeliveryDialog) closeRequestDeliveryDialog();
});
requestDeliveryDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeRequestDeliveryDialog();
});
requestReportResultClose?.addEventListener("click", () => closeModalElement(requestReportResultDialog));
requestReportResultDialog?.addEventListener("click", (event) => {
  if (event.target === requestReportResultDialog) closeModalElement(requestReportResultDialog);
});
requestReportResultDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeModalElement(requestReportResultDialog);
});
requestReportMute?.addEventListener("click", () => {
  const target = activeRequestReportContext?.target;
  const name = target?.client || target?.creator;
  if (name) mutedCreators.add(name);
  closeModalElement(requestReportResultDialog);
  showProfileCopyToast(currentLanguage === "en" ? "Muted this account" : currentLanguage === "ko" ? "이 계정을 뮤트했습니다" : "このアカウントをミュートしました");
});
requestReportBlock?.addEventListener("click", () => {
  const target = activeRequestReportContext?.target;
  const name = target?.client || target?.creator;
  if (name) blockedCreators.add(name);
  closeModalElement(requestReportResultDialog);
  showProfileCopyToast(currentLanguage === "en" ? "Blocked this account" : currentLanguage === "ko" ? "이 계정을 차단했습니다" : "このアカウントをブロックしました");
});
bookmarkFolderCancel?.addEventListener("click", closeBookmarkFolderDialog);
bookmarkFolderCreate?.addEventListener("click", createBookmarkFolder);
bookmarkFolderSave?.addEventListener("click", savePinToSelectedBookmarkFolder);
bookmarkFolderOptions?.addEventListener("change", updateBookmarkFolderOptionSelection);
bookmarkFolderOptions?.addEventListener("click", (event) => {
  const createCard = event.target.closest("[data-bookmark-folder-create-card]");
  if (!createCard) return;
  event.preventDefault();
  openBookmarkFolderCreateDialog();
});
bookmarkFolderName?.addEventListener("input", () => {
  updateBookmarkFolderCreateState();
});
bookmarkFolderCreateDialog?.addEventListener("click", (event) => {
  if (event.target === bookmarkFolderCreateDialog) closeBookmarkFolderCreateDialog();
});
bookmarkFolderCreateDialog?.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  createBookmarkFolder();
});
bookmarkFolderCreateDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeBookmarkFolderCreateDialog();
});
bookmarkFolderDialog?.addEventListener("click", (event) => {
  if (event.target === bookmarkFolderDialog) closeBookmarkFolderDialog();
});
bookmarkFolderDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeBookmarkFolderDialog();
});

dialogCreator.addEventListener("click", (event) => {
  const profileButton = event.target.closest("[data-profile]");
  if (profileButton) openProfile(profileButton.dataset.profile);
});

dialogTags.addEventListener("click", (event) => {
  const tagButton = event.target.closest("[data-tag]");
  if (tagButton) searchByTag(tagButton.dataset.tag);
});

dialogCategory.addEventListener("click", (event) => {
  const circleButton = event.target.closest("[data-circle-open]");
  if (circleButton) {
    closePinDialog();
    openCirclesPage(circleButton.dataset.circleOpen);
    return;
  }
  const categoryButton = event.target.closest("[data-category-link]");
  if (categoryButton) filterByCategory(categoryButton.dataset.categoryLink);
});

dialogAvatar.addEventListener("click", (event) => {
  const metaButton = event.target.closest("[data-meta-category]");
  if (metaButton) searchByMeta(metaButton.dataset.metaCategory, metaButton.dataset.metaQuery);
});

dialogWorld.addEventListener("click", (event) => {
  const metaButton = event.target.closest("[data-meta-category]");
  if (metaButton) searchByMeta(metaButton.dataset.metaCategory, metaButton.dataset.metaQuery);
});

dialogSave.addEventListener("click", () => toggleSave(currentPin.id));

dialogFollow.addEventListener("click", () => {
  if (followedCreators.has(currentPin.creator)) {
    followedCreators.delete(currentPin.creator);
  } else {
    followedCreators.add(currentPin.creator);
  }
  updateFollowButton(dialogFollow, currentPin.creator);
});

dialogCopyLink?.addEventListener("click", copyCurrentPinLink);
dialogShareX?.addEventListener("click", shareCurrentPinToX);
dialogCommentInput?.addEventListener("input", () => {
  if (!dialogCommentSubmit) return;
  dialogCommentSubmit.disabled = !dialogCommentInput.value.trim() || !currentPin || !postAllowsComments(currentPin);
});
dialogCommentForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitDialogComment();
});

profileFollow.addEventListener("click", () => {
  if (!activeProfile) return;
  if (followedCreators.has(activeProfile)) {
    followedCreators.delete(activeProfile);
  } else {
    followedCreators.add(activeProfile);
  }
  updateFollowButton(profileFollow, activeProfile);
});

profileEditButton?.addEventListener("click", openEditProfile);
profileFollowingButton?.addEventListener("click", openFollowingListDialog);

followingListBody?.addEventListener("click", (event) => {
  const profileButton = event.target.closest("[data-following-profile]");
  if (!profileButton) return;
  closeFollowingListDialog();
  openProfile(profileButton.dataset.followingProfile);
});

followingListDialog?.addEventListener("click", (event) => {
  if (event.target === followingListDialog) closeFollowingListDialog();
});

followingListDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeFollowingListDialog();
});

profileNotifyButton?.addEventListener("click", () => {
  if (!activeProfile || activeProfile === "You") return;
  if (notificationEnabledCreators.has(activeProfile)) {
    notificationEnabledCreators.delete(activeProfile);
  } else {
    notificationEnabledCreators.add(activeProfile);
    mutedCreators.delete(activeProfile);
  }
  updateProfileSocialButtons(activeProfile, false);
});

profileMuteButton?.addEventListener("click", () => {
  if (!activeProfile || activeProfile === "You") return;
  if (mutedCreators.has(activeProfile)) {
    mutedCreators.delete(activeProfile);
  } else {
    mutedCreators.add(activeProfile);
    notificationEnabledCreators.delete(activeProfile);
  }
  updateProfileSocialButtons(activeProfile, false);
});

profileBlockButton?.addEventListener("click", () => {
  if (!activeProfile || activeProfile === "You") return;
  if (blockedCreators.has(activeProfile)) {
    blockedCreators.delete(activeProfile);
  } else {
    blockedCreators.add(activeProfile);
    mutedCreators.add(activeProfile);
    notificationEnabledCreators.delete(activeProfile);
    followedCreators.delete(activeProfile);
  }
  updateFollowButton(profileFollow, activeProfile);
  updateProfileSocialButtons(activeProfile, false);
});

closeEditProfile.addEventListener("click", closeEditProfileDialog);
cancelEditProfile.addEventListener("click", closeEditProfileDialog);

editProfileDialog.addEventListener("click", (event) => {
  if (event.target === editProfileDialog) closeEditProfileDialog();
});

editProfileDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeEditProfileDialog();
});

editProfileForm.addEventListener("submit", saveEditProfile);

[editDisplayName, editUserHandle, editRole, editBio, editLink, editVisibility].filter(Boolean).forEach((input) => {
  input.addEventListener("input", updateEditProfilePreview);
  input.addEventListener("change", updateEditProfilePreview);
});
editUserHandle?.addEventListener("keydown", (event) => {
  const start = editUserHandle.selectionStart ?? 0;
  const end = editUserHandle.selectionEnd ?? start;
  const deletingPrefix = (event.key === "Backspace" && start <= 1 && end <= 1) || (event.key === "Delete" && start === 0);
  if (deletingPrefix) {
    event.preventDefault();
    editUserHandle.setSelectionRange(1, 1);
  }
});
editUserHandle?.addEventListener("beforeinput", (event) => {
  const start = editUserHandle.selectionStart ?? 0;
  const end = editUserHandle.selectionEnd ?? start;
  if ((event.inputType || "").startsWith("delete") && start === 0 && end <= 1) {
    event.preventDefault();
    editUserHandle.setSelectionRange(1, 1);
  }
});
editUserHandle?.addEventListener("input", () => {
  enforceUserHandlePrefix();
  updateProfileHandleState();
});
editUserHandle?.addEventListener("change", () => {
  enforceUserHandlePrefix();
  updateProfileHandleState();
});

editAvatarPreview.addEventListener("click", () => {
  if (pendingAvatarSource || myProfile.avatar) {
    openMediaEditor("avatar");
    return;
  }
  mediaEditMode = "avatar";
  editAvatarInput.click();
});

openAvatarEditorButton.addEventListener("click", () => {
  if (!pendingAvatarSource && !myProfile.avatar) {
    mediaEditMode = "avatar";
    editAvatarInput.click();
    return;
  }
  openMediaEditor("avatar");
});

editBannerPreview?.addEventListener("click", () => {
  if (pendingBannerSource || myProfile.banner) {
    openMediaEditor("banner");
    return;
  }
  mediaEditMode = "banner";
  editAvatarInput.click();
});

openBannerEditorButton?.addEventListener("click", () => {
  if (!pendingBannerSource && !myProfile.banner) {
    mediaEditMode = "banner";
    editAvatarInput.click();
    return;
  }
  openMediaEditor("banner");
});

editAvatarInput.addEventListener("change", () => {
  loadAvatarEditorImage(editAvatarInput.files?.[0]);
  editAvatarInput.value = "";
  window.setTimeout(() => openMediaEditor(mediaEditMode), 30);
});

[avatarZoom, avatarOffsetX, avatarOffsetY].forEach((input) => {
  input.addEventListener("input", () => {
    clampAvatarOffsets();
    updateAvatarCropTransform();
  });
  input.addEventListener("change", () => {
    clampAvatarOffsets();
    updateAvatarCropTransform();
  });
});

avatarCropFrame.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  beginAvatarDrag(event);
});
avatarCropFrame.addEventListener("wheel", handleAvatarWheel, { passive: false });
avatarCropImage.addEventListener("load", () => {
  refreshAvatarImageLayout();
  clampAvatarOffsets();
  updateAvatarCropTransform();
});
window.addEventListener("resize", () => {
  if (avatarCropPanel.hidden) return;
  refreshAvatarImageLayout();
  clampAvatarOffsets();
  updateAvatarCropTransform();
});

closeAvatarEditor.addEventListener("click", closeAvatarEditorDialog);
avatarChooseImage.addEventListener("click", () => editAvatarInput.click());
avatarEditorDone.addEventListener("click", async () => {
  await applyMediaEditorResult();
  closeAvatarEditorDialog();
});

avatarEditorDialog.addEventListener("click", (event) => {
  if (event.target === avatarEditorDialog) closeAvatarEditorDialog();
});

avatarEditorDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeAvatarEditorDialog();
});

function ensureProfileLinksRow() {
  let linksRow = document.querySelector("#profileLinks");
  if (linksRow) return linksRow;
  linksRow = document.createElement("div");
  linksRow.id = "profileLinks";
  linksRow.className = "profile-links";
  profileBio.insertAdjacentElement("afterend", linksRow);
  return linksRow;
}

function linkIconMarkup(kind) {
  if (kind === "x") {
    return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h4.2l4 5.6L17 4H20l-6.3 7.3L20 20h-4.2l-4.3-6-5.2 6H3l6.7-7.8z" /></svg>`;
  }
  if (kind === "booth") {
    return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 7h14l-1 12H6L5 7Z" /><path d="M8 7a4 4 0 1 1 8 0" /></svg>`;
  }
  if (kind === "vrchat") {
    return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 6h18v9l-4 3-3-3h-4l-3 3-4-3V6Z" /><path d="M8 10h2" /><path d="M14 10h2" /></svg>`;
  }
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M10 14 21 3" /><path d="M15 3h6v6" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>`;
}

function detectLinkKind(url) {
  const value = String(url || "").toLowerCase();
  if (!value) return "generic";
  if (value.includes("x.com") || value.includes("twitter.com")) return "x";
  if (value.includes("booth.pm")) return "booth";
  if (value.includes("vrchat.com")) return "vrchat";
  return "generic";
}

function isTrustedProfileLinkKind(kind) {
  return kind === "x" || kind === "booth" || kind === "vrchat";
}

function confirmGenericProfileLink(url) {
  return window.confirm(`このリンクはVRChat / BOOTH / X以外の外部サイトです。\n\n${url}\n\n開いてもよろしいですか？`);
}


function getCurrentMediaSource() {
  return mediaEditMode === "banner"
    ? (pendingBannerSource || myProfile.banner || "")
    : (pendingAvatarSource || myProfile.avatar || "");
}


function refreshAvatarImageLayout() {
  const naturalWidth = avatarCropImage.naturalWidth || 1;
  const naturalHeight = avatarCropImage.naturalHeight || 1;
  const frameWidth = avatarCropFrame.clientWidth || (mediaEditMode === "banner" ? 420 : 260);
  const frameHeight = avatarCropFrame.clientHeight || (mediaEditMode === "banner" ? (frameWidth * 7 / 20) : frameWidth);
  const coverScale = Math.max(frameWidth / naturalWidth, frameHeight / naturalHeight);

  avatarBaseSize = {
    width: naturalWidth * coverScale,
    height: naturalHeight * coverScale,
    frame: frameWidth,
    frameHeight,
  };

  if (Number(avatarZoom.value || 1) < 1) avatarZoom.value = "1";
}

function clampAvatarOffsets() {
  const zoom = Number(avatarZoom.value || 1);
  const scaledWidth = avatarBaseSize.width * zoom;
  const scaledHeight = avatarBaseSize.height * zoom;
  const limitX = Math.max(0, (scaledWidth - avatarBaseSize.frame) / 2);
  const limitY = Math.max(0, (scaledHeight - avatarBaseSize.frameHeight) / 2);
  avatarOffsetX.value = String(Math.max(-limitX, Math.min(limitX, Number(avatarOffsetX.value || 0))));
  avatarOffsetY.value = String(Math.max(-limitY, Math.min(limitY, Number(avatarOffsetY.value || 0))));
}

function updateAvatarCropTransform() {
  const x = Number(avatarOffsetX.value || 0);
  const y = Number(avatarOffsetY.value || 0);
  const zoom = Number(avatarZoom.value || 1);
  avatarCropImage.style.setProperty("--avatar-base-width", `${avatarBaseSize.width}px`);
  avatarCropImage.style.setProperty("--avatar-base-height", `${avatarBaseSize.height}px`);
  avatarCropImage.style.setProperty("--avatar-x", `${x}px`);
  avatarCropImage.style.setProperty("--avatar-y", `${y}px`);
  avatarCropImage.style.setProperty("--avatar-zoom", String(zoom));
}

async function loadAvatarEditorImage(file) {
  if (!file || !file.type.startsWith("image/")) return;
  const image = await readImageFile(file, {
    maxSize: mediaEditMode === "banner" ? { width: 1920, height: 1080 } : uploadImageLimits.square,
    quality: mediaEditMode === "banner" ? 0.9 : 0.92
  });
  if (!image) return;
  if (mediaEditMode === "banner") {
    pendingBannerSource = image.src;
  } else {
    pendingAvatarSource = image.src;
  }
  avatarCropPanel.hidden = false;
  avatarCropImage.src = image.src;
  avatarZoom.value = "1";
  avatarOffsetX.value = "0";
  avatarOffsetY.value = "0";
  updateEditProfilePreview();
}

function getCropRectFromPreview(naturalWidth, naturalHeight) {
  const zoom = Number(avatarZoom.value || 1);
  const displayedWidth = avatarBaseSize.width * zoom;
  const displayedHeight = avatarBaseSize.height * zoom;
  const frameWidth = avatarBaseSize.frame;
  const frameHeight = avatarBaseSize.frameHeight;
  const offsetX = Number(avatarOffsetX.value || 0);
  const offsetY = Number(avatarOffsetY.value || 0);

  const visibleLeft = (displayedWidth - frameWidth) / 2 - offsetX;
  const visibleTop = (displayedHeight - frameHeight) / 2 - offsetY;

  const scaleX = naturalWidth / displayedWidth;
  const scaleY = naturalHeight / displayedHeight;

  let sx = visibleLeft * scaleX;
  let sy = visibleTop * scaleY;
  let sw = frameWidth * scaleX;
  let sh = frameHeight * scaleY;

  sx = Math.max(0, Math.min(naturalWidth - sw, sx));
  sy = Math.max(0, Math.min(naturalHeight - sh, sy));

  return { sx, sy, sw, sh };
}

async function cropAvatarToDataUrl() {
  const source = pendingAvatarSource;
  if (!source) return "";
  const image = new Image();
  image.src = source;
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  const { sx, sy, sw, sh } = getCropRectFromPreview(image.width, image.height);
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f7f5ef";
  ctx.fillRect(0, 0, size, size);
  ctx.save();
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(image, sx, sy, sw, sh, 0, 0, size, size);
  ctx.restore();
  return canvas.toDataURL("image/jpeg", 0.9);
}

function updateEditProfilePreview() {
  const handle = normalizeUserHandle(editUserHandle?.value || currentUserHandle());
  editPreviewName.textContent = `${editDisplayName.value.trim() || "You"}${handle ? ` ${handle}` : ""}`;
  editPreviewBio.textContent = editBio.value.trim() || "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。";

  if (editBannerPreview) {
    const banner = pendingBannerSource || myProfile.banner;
    editBannerPreview.style.backgroundImage = banner
      ? `linear-gradient(180deg, rgba(15,15,15,0.06), rgba(15,15,15,0.22)), url("${banner}")`
      : "";
    editBannerPreview.classList.toggle("has-image", Boolean(banner));
  }

  const avatar = pendingAvatarSource || myProfile.avatar;
  if (avatar) {
    editAvatarPreview.style.backgroundImage = `url("${avatar}")`;
    editAvatarPreview.classList.add("has-image");
    editAvatarPreview.textContent = "";
  } else {
    editAvatarPreview.style.backgroundImage = "";
    editAvatarPreview.classList.remove("has-image");
    editAvatarPreview.textContent = (editDisplayName.value.trim() || "Y").slice(0, 1).toUpperCase();
  }
}

function refreshProfilePreviewAfterMediaEdit() {
  updateEditProfilePreview();
  renderProfile("You");
}

function openMediaEditor(mode) {
  mediaEditMode = mode;
  normalizeProfileEditorText();
  if (mode === "avatar") {
    if (!pendingAvatarSource && myProfile.avatar) pendingAvatarSource = myProfile.avatar;
    avatarCropPanel.hidden = !pendingAvatarSource;
    avatarCropImage.src = pendingAvatarSource || "";
    avatarCropFrame.classList.remove("is-banner");
  } else {
    if (!pendingBannerSource && myProfile.banner) pendingBannerSource = myProfile.banner;
    avatarCropPanel.hidden = !pendingBannerSource;
    avatarCropImage.src = pendingBannerSource || "";
    avatarCropFrame.classList.add("is-banner");
  }
  refreshAvatarImageLayout();
  clampAvatarOffsets();
  updateAvatarCropTransform();
  showModalElement(avatarEditorDialog);
}

async function applyMediaEditorResult() {
  if (mediaEditMode === "banner") {
    pendingBannerSource = await cropBannerToDataUrl();
  } else {
    pendingAvatarSource = await cropAvatarToDataUrl();
  }
  refreshProfilePreviewAfterMediaEdit();
}

async function cropBannerToDataUrl() {
  const source = pendingBannerSource;
  if (!source) return "";
  const image = new Image();
  image.src = source;
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  const width = 1600;
  const height = 560;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  const zoom = Number(avatarZoom.value || 1);
  const frameW = avatarBaseSize.frame;
  const frameH = Math.round(frameW * 0.36);
  const coverScale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * coverScale * zoom;
  const drawHeight = image.height * coverScale * zoom;
  const offsetX = Number(avatarOffsetX.value || 0) * (width / frameW);
  const offsetY = Number(avatarOffsetY.value || 0) * (height / frameH);
  const drawX = (width - drawWidth) / 2 + offsetX;
  const drawY = (height - drawHeight) / 2 + offsetY;
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  return canvas.toDataURL("image/jpeg", 0.88);
}


window.addEventListener("pointermove", moveAvatarDrag);
window.addEventListener("pointerup", endAvatarDrag);
window.addEventListener("pointercancel", endAvatarDrag);

profileLevelBadge?.addEventListener("click", openTrustInfo);

trustStatus.addEventListener("click", (event) => {
  if (event.target.closest(".trust-rank")) openTrustInfo(event);
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-trust-info-trigger]");
  if (!trigger) return;
  openTrustInfo(event);
});

document.addEventListener("click", (event) => {
  const link = event.target.closest(".profile-link-button[data-external-warning]");
  if (!link) return;
  event.preventDefault();
  const url = link.href;
  if (!confirmGenericProfileLink(url)) return;
  window.open(url, "_blank", "noopener,noreferrer");
});

closeTrustInfo.addEventListener("click", closeTrustInfoDialog);

trustInfoDialog.addEventListener("click", (event) => {
  if (event.target === trustInfoDialog) closeTrustInfoDialog();
});

trustInfoDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeTrustInfoDialog();
});

eventProposalDialog?.addEventListener("click", (event) => {
  if (event.target === eventProposalDialog) closeEventProposalDialog();
});

eventProposalDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeEventProposalDialog();
});

closeCompose.addEventListener("click", openComposeCloseConfirmDialog);

composeDialog.addEventListener("click", (event) => {
  if (event.target === composeDialog) openComposeCloseConfirmDialog();
});

composeDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  openComposeCloseConfirmDialog();
});

composeCloseCancel?.addEventListener("click", closeComposeCloseConfirmDialog);
composeCloseDiscard?.addEventListener("click", closeComposeWithoutDraftSave);
composeCloseSave?.addEventListener("click", closeComposeWithDraftSave);
composeCloseConfirmDialog?.addEventListener("click", (event) => {
  if (event.target === composeCloseConfirmDialog) closeComposeCloseConfirmDialog();
});
composeCloseConfirmDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeComposeCloseConfirmDialog();
});

composeForm.addEventListener("submit", handleMockSubmit);

saveDraftButton?.addEventListener("click", () => {
  persistComposeDraft();
  composeNotice.hidden = false;
  composeNotice.textContent = "通常投稿の下書きを保存しました。";
});

[composePostTitle, composeCategory, composeVisibility, composeCircle, composeAvatar, composeWorld, composeTags, composeDescription, composeR18Toggle, composeGoreToggle, composeRepliesToggle].filter(Boolean).forEach((input) => {
  input.addEventListener("input", () => {
    updateComposeCircleVisibility();
    updateComposePreview();
    updateComposeSubmitState();
    persistComposeDraft();
  });
  input.addEventListener("change", () => {
    updateComposeCircleVisibility();
    updateComposePreview();
    updateComposeSubmitState();
    persistComposeDraft();
  });
});

composeCircleToggle?.addEventListener("change", () => {
  handleComposeCircleToggleChange();
  unlockComposeVisibilityWhenCircleOff();
});

composeImage.addEventListener("change", () => {
  loadComposeImages(composeImage.files || [], false);
  window.setTimeout(persistComposeDraft, 40);
});

composePreviewImage.addEventListener("load", () => {
  if (!composePreviewImage.naturalWidth || !composePreviewImage.naturalHeight) return;
  const ratio = composePreviewImage.naturalWidth / composePreviewImage.naturalHeight;
  composePreviewImage.closest(".upload-drop")?.style.setProperty("--preview-ratio", String(Math.min(Math.max(ratio, 0.64), 1.18)));
});

prevComposeImage.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  moveComposeImage(-1);
});

nextComposeImage.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  moveComposeImage(1);
});

removeComposeImage.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  removeCurrentComposeImage();
});

closeRequestCompose?.addEventListener("click", closeRequestComposeDialog);

requestComposeDialog?.addEventListener("click", (event) => {
  if (event.target === requestComposeDialog) closeRequestComposeDialog();
});

requestComposeDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeRequestComposeDialog();
});

requestComposeForm?.addEventListener("submit", handleRequestComposeSubmit);

saveRequestDraftButton?.addEventListener("click", () => {
  persistRequestComposeDraft();
  requestComposeNotice.hidden = false;
  requestComposeNotice.textContent = "依頼受付の下書きを保存しました。";
});

[requestPostTitle, requestPostCategory, requestPostVisibility, requestPostPrice, requestPostDelivery, requestPostCapacity, requestPostRetake, requestPostChat, requestPostAvatar, requestPostWorld, requestPostTags, requestPostDescription, requestPostRequirements].filter(Boolean).forEach((input) => {
  input?.addEventListener("input", () => {
    updateRequestComposePreview();
    updateRequestComposeSubmitState();
    persistRequestComposeDraft();
  });
  input?.addEventListener("change", () => {
    updateRequestComposePreview();
    updateRequestComposeSubmitState();
    persistRequestComposeDraft();
  });
});

requestTemplateButtons.forEach((button) => {
  button.addEventListener("click", () => applyRequestTemplate(button.dataset.requestTemplate));
});

requestComposeImage?.addEventListener("change", () => {
  loadRequestComposeImage(requestComposeImage.files?.[0]);
  window.setTimeout(persistRequestComposeDraft, 40);
});

requestComposePreviewImage?.addEventListener("load", () => {
  if (!requestComposePreviewImage.naturalWidth || !requestComposePreviewImage.naturalHeight) return;
  const ratio = requestComposePreviewImage.naturalWidth / requestComposePreviewImage.naturalHeight;
  requestComposePreviewImage.closest(".upload-drop")?.style.setProperty("--preview-ratio", String(Math.min(Math.max(ratio, 0.72), 1.22)));
});

window.addEventListener("hashchange", routeFromHash);
if (feedView && typeof MutationObserver !== "undefined") {
  new MutationObserver(updateTopbarSearchVisibility).observe(feedView, {
    attributes: true,
    attributeFilter: ["hidden"]
  });
}
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopEventAutoplay();
  else markEventCarouselInteraction();
});
window.addEventListener("dragenter", (event) => {
  if (!event.dataTransfer?.types?.includes("Files")) return;
  if (modalIsOpen(composeDialog) || modalIsOpen(requestComposeDialog)) return;
  document.body.classList.add("is-dragging");
  dropHint.hidden = false;
});
window.addEventListener("dragover", (event) => {
  event.preventDefault();
});
window.addEventListener("dragleave", (event) => {
  if (event.clientX <= 0 || event.clientY <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight) {
    document.body.classList.remove("is-dragging");
    dropHint.hidden = true;
  }
});
window.addEventListener("drop", (event) => {
  event.preventDefault();
  document.body.classList.remove("is-dragging");
  dropHint.hidden = true;
  if (modalIsOpen(requestComposeDialog)) return;
  if (!modalIsOpen(composeDialog)) openComposeHint();
  if (event.dataTransfer?.files?.length) {
    loadComposeImages(event.dataTransfer.files);
  }
});

loadSavedSettings();
defaultReducedMotionOff();
applyReducedMotionSetting();
applyContentDisplaySettings();
applyThemeMode(localStorage.getItem("vrc-sns-theme-mode") || settingsThemeMode?.value || "system");
applyMyAvatarToChrome();
normalizeProfileEditorText();
enhanceSheetCloseButtons();
enhancePostComposeCustomSelects();
updateComposePreview();
updateNotificationBadge();
applyLanguage();
startHeroTitleRotation();
renderPins();
routeFromHash();
updateTopbarSearchVisibility();
maybeShowOnboarding();

function ensureEditLinkList() {
  return document.querySelector("#editLinkList");
}

function collectProfileLinksFromInputs() {
  const urls = [];
  document.querySelectorAll(".edit-link-input").forEach((input) => {
    const value = input.value.trim();
    if (value) urls.push(value);
  });
  return urls;
}

function appendProfileLinkInput(value = "") {
  const list = ensureEditLinkList();
  if (!list) return null;
  const row = document.createElement("div");
  row.className = "edit-link-row";
  row.innerHTML = `
    <input class="edit-link-input" type="url" value="${value.replace(/"/g, "&quot;")}" placeholder="https://vrchat.com / booth.pm / x.com / ..." />
    <button class="edit-link-remove" type="button" aria-label="リンクを削除">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  `;
  list.appendChild(row);
  const input = row.querySelector("input");
  input.addEventListener("input", handleProfileLinkInputChange);
  input.addEventListener("change", handleProfileLinkInputChange);
  row.querySelector(".edit-link-remove").addEventListener("click", () => {
    row.remove();
    normalizeEditLinkRows();
  });
  return input;
}

function handleProfileLinkInputChange() {
  normalizeEditLinkRows();
}

function normalizeEditLinkRows() {
  const list = ensureEditLinkList();
  if (!list) return;
  const inputs = [...document.querySelectorAll(".edit-link-input")];
  const filled = inputs.filter((input) => input.value.trim());
  const empty = inputs.filter((input) => !input.value.trim());
  empty.slice(1).forEach((input) => input.closest(".edit-link-row")?.remove());
  if (!inputs.length || inputs.at(-1)?.value.trim()) {
    appendProfileLinkInput("");
  }
  document.querySelectorAll(".edit-link-remove").forEach((button) => {
    button.hidden = filled.length === 0 && document.querySelectorAll(".edit-link-input").length <= 1;
  });
}

function syncProfileLinkInputs(values) {
  const list = ensureEditLinkList();
  if (!list) return;
  list.innerHTML = "";
  const links = values.filter(Boolean);
  links.forEach((value) => appendProfileLinkInput(value));
  appendProfileLinkInput("");
  normalizeEditLinkRows();
}

function getProfileLinks() {
  if (Array.isArray(myProfile.links) && myProfile.links.length) return myProfile.links.filter(Boolean);
  if (myProfile.link) return [myProfile.link];
  return [];
}

function renderProfileLinks(urls) {
  const linksRow = ensureProfileLinksRow();
  const list = Array.isArray(urls) ? urls.filter(Boolean) : (urls ? [urls] : []);
  if (!list.length) {
    linksRow.innerHTML = "";
    linksRow.hidden = true;
    return;
  }
  linksRow.hidden = false;
  linksRow.innerHTML = list.map((url) => {
    const kind = detectLinkKind(url);
    const label = kind === "x" ? "X" : kind === "booth" ? "BOOTH" : kind === "vrchat" ? "VRChat" : "Link";
    const safeUrl = url.replace(/"/g, "&quot;");
    const warningAttr = isTrustedProfileLinkKind(kind) ? "" : ` data-external-warning="true"`;
    return `<a class="profile-link-button" href="${safeUrl}" target="_blank" rel="noreferrer"${warningAttr} aria-label="${label}を開く">${linkIconMarkup(kind)}<span>${label}</span></a>`;
  }).join("");
}

function topTagsFromPosts(posts, limit = 3) {
  const counts = new Map();
  posts.forEach((post) => {
    (post.tags || []).forEach((tag) => {
      const normalized = String(tag).trim();
      if (!normalized) return;
      counts.set(normalized, (counts.get(normalized) || 0) + 1);
    });
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ja"))
    .slice(0, limit)
    .map(([tag]) => tag);
}

function getTrustProfile(creator, posts, isMine) {
  const fallback = trustProfiles[creator] || {};
  const frequentTags = topTagsFromPosts(posts, 3);
  return {
    summary: fallback.summary || `${creator}の投稿、依頼受付状況、代表作、外部リンクをまとめて確認できる公開プロフィール。`,
    style: fallback.style || `${posts[0]?.category || "VRChat"}を中心に、過去作品から作風を確認できる構成です。`,
    scope: frequentTags.length ? frequentTags : [...new Set(posts.map((post) => post.category))].slice(0, 3),
    links: isMine ? getProfileLinks().concat(fallback.links || []) : (fallback.links || []),
    completed: fallback.completed ?? posts.filter((post) => post.request).length * 4,
    likes: fallback.likes ?? posts.length * 42,
    saves: fallback.saves ?? posts.length * 14,
    repeat: fallback.repeat ?? Math.max(1, Math.floor(posts.length / 2)),
  };
}

function formatMetric(value, label) {
  return `<span><strong>${value}</strong><small>${label}</small></span>`;
}

function clampScore(value, max) {
  return Math.min(value, max);
}

function trustedLinkCount(links) {
  return new Set((links || [])
    .map((url) => detectLinkKind(url))
    .filter((kind) => kind === "x" || kind === "booth" || kind === "vrchat")).size;
}

function postLikeCount(post) {
  if (Number.isFinite(post.likes)) return post.likes;
  const categoryBoost = {
    Avatar: 42,
    Photo: 34,
    Retouch: 28,
    Video: 38,
    World: 32,
    Commission: 24,
  }[post.category] || 18;
  const requestBoost = post.request?.open ? 26 : 0;
  return 72 + ((post.id * 37) % 180) + categoryBoost + requestBoost;
}

function topLikedPosts(posts, limit = 3) {
  return [...posts]
    .sort((a, b) => postLikeCount(b) - postLikeCount(a) || b.id - a.id)
    .slice(0, limit);
}

function profilePostMatchesQuery(post, query) {
  if (!query) return true;
  const haystack = [
    post.title,
    post.category,
    post.creator,
    post.role,
    post.avatar,
    post.world,
    post.description,
    post.request?.title || "",
    ...(post.tags || []),
  ].join(" ").toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function sortedProfilePosts(posts) {
  const filtered = posts.filter((post) => profilePostMatchesQuery(post, profilePostQuery.trim()));
  if (profilePostSortMode === "likes") {
    return filtered.sort((a, b) => postLikeCount(b) - postLikeCount(a) || b.id - a.id);
  }
  return filtered.sort((a, b) => b.id - a.id);
}

function renderProfilePostArchive() {
  let sourcePosts = [...activeProfilePosts];
  if (activeProfileArchiveTab === "likes") {
    sourcePosts = pins.filter((post) => likedPins.has(post.id) && canViewPin(post));
  } else if (activeProfileArchiveTab === "posts") {
    sourcePosts = [...activeProfilePosts];
  }
  const posts = sortedProfilePosts(sourcePosts);
  profileArchiveTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.profileArchiveTab === activeProfileArchiveTab);
  });
  profilePostSortButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.profileSort === profilePostSortMode);
  });
  if (profilePostSearch && profilePostSearch.value !== profilePostQuery) {
    profilePostSearch.value = profilePostQuery;
  }
  const showFolders = activeProfileArchiveTab === "folders";
  profileBoard.hidden = showFolders;
  if (savedPostsSection) savedPostsSection.hidden = activeProfile !== "You" || !showFolders;
  const searchWrap = profilePostSearch?.closest(".profile-post-search");
  const sortWrap = document.querySelector(".profile-post-sort");
  if (searchWrap) searchWrap.hidden = showFolders;
  if (sortWrap) sortWrap.hidden = showFolders;
  if (profilePostEmpty) {
    const isEmpty = showFolders
      ? bookmarkFolders.length === 0 && !activeBookmarkFolderId
      : posts.length === 0;
    profilePostEmpty.hidden = !isEmpty;
  }
  if (!showFolders) {
    profileBoard.innerHTML = posts.map(pinCard).join("");
    bindPinCards(profileBoard);
  } else {
    renderSavedPostsSection();
  }
  applyProfileArchivePinnedHeight();
}

function trustScore(posts, trust, creator = "") {
  if (isOfficialProfileName(creator)) return 1000;
  return Math.round(
    clampScore(posts.length * 3, 60) +
    clampScore(trust.completed * 12, 420) +
    clampScore(trust.repeat * 18, 270) +
    clampScore(trust.saves * 0.35, 120) +
    clampScore(trust.likes * 0.08, 100)
  );
}

function officialTrustNote() {
  if (currentLanguage === "en") return "A service operations account verified by Veacon.";
  if (currentLanguage === "ko") return "Veacon에서 확인한 서비스 운영 계정입니다.";
  return "Veaconが確認したサービス運営アカウント。";
}

function trustedLevel(score, creator = "") {
  if (isOfficialProfileName(creator)) {
    return { label: "Official", key: "official", note: officialTrustNote() };
  }
  if (score >= 760) {
    return { label: "Trusted User", key: "trusted", note: "実績、保存、リピートが十分に積み上がった依頼しやすいクリエイター。" };
  }
  if (score >= 520) {
    return { label: "Known User", key: "known", note: "複数の実績と反応が見えていて、作風を判断しやすい状態。" };
  }
  if (score >= 260) {
    return { label: "User", key: "user", note: "投稿と保存が増え始め、活動内容が見えやすくなっている状態。" };
  }
  if (score >= 90) {
    return { label: "New User", key: "new", note: "プロフィールと投稿が揃い始めた初期の公開アカウント。" };
  }
  return { label: "Visitor", key: "visitor", note: "まだ実績が少ないため、代表作や外部リンクの追加が有効な状態。" };
}
function renderProfileLevelBadge(posts, trust, creator = "") {
  if (!profileLevelBadge) return;
  const score = trustScore(posts, trust, creator);
  const level = trustedLevel(score, creator);
  const badgeLabel = level.label.replace(" User", "");
  profileLevelBadge.hidden = false;
  profileLevelBadge.className = `profile-level-badge profile-level-badge--${level.key}`;
  profileLevelBadge.innerHTML = `<span>${badgeLabel}</span><i aria-hidden="true">?</i>`;
  profileLevelBadge.title = `Trust score: ${score} pts`;
  profileLevelBadge.setAttribute("data-trust-info-trigger", "");
  profileLevelBadge.setAttribute("aria-label", `${level.label}. ${t("trustScore")} ${score} points.`);
}

function renderTrustProfile(creator, posts, isMine) {
  const trust = getTrustProfile(creator, posts, isMine);
  const featured = topLikedPosts(posts, 3);
  const links = [...new Set(trust.links.filter(Boolean))];
  const score = trustScore(posts, trust, creator);
  const level = trustedLevel(score, creator);
  const scopeSummary = trust.scope.join(" / ");

  trustSummaryText.textContent = "";
  trustStatus.innerHTML = `
    <button class="trust-rank trust-rank--${level.key}" type="button" data-trust-info-trigger aria-label="${level.label}. Trust score ${score} points. トラストレベルの説明を開く">
      <small>${t("trustLevel")}</small>
      <strong>${level.label}</strong>
      <span>${score} pts</span>
      <i aria-hidden="true">?</i>
    </button>
    <strong>${scopeSummary}</strong>
    <span>${trust.style}</span>
  `;
  trustMetrics.innerHTML = [
    formatMetric(score, t("trustScore")),
    formatMetric(posts.length, t("posts")),
    formatMetric(trust.completed, t("completedMetric")),
    formatMetric(trust.repeat, t("repeat")),
    formatMetric(trust.saves, t("saves")),
  ].join("");
  if (trustScopeTags) trustScopeTags.innerHTML = trust.scope.map((item) => `<span>${item}</span>`).join("");
  if (trustStyleNote) trustStyleNote.textContent = trust.style;
  trustTimelineLabel.textContent = `${t("topLiked")} ${featured.length} / ${posts.length} works`;
  trustFeaturedWorks.innerHTML = featured.map((post) => `
    <button class="featured-work" type="button" data-featured-id="${post.id}">
      <img src="${post.image}" alt="${post.title}" loading="lazy" />
      <span>${postLikeCount(post)} likes</span>
      <strong>${post.title}</strong>
    </button>
  `).join("");

  renderProfileLinks(links);
}

function currentProfileUrl() {
  const base = `${location.origin}${location.pathname}`;
  if (activeProfile === "You") return `${base}#me`;
  if (!activeProfile) return base;
  return `${base}#profile/${slugify(activeProfile)}`;
}

function showProfileCopyToast(message = t("copySuccess"), ok = true) {
  if (!profileCopyToast) return;
  if (profileCopyToastTimer) {
    window.clearTimeout(profileCopyToastTimer);
    profileCopyToastTimer = 0;
  }
  const messageNode = profileCopyToast.querySelector("span");
  if (messageNode) messageNode.textContent = message;
  profileCopyToast.hidden = false;
  profileCopyToast.classList.remove("is-visible", "is-hiding", "is-error");
  profileCopyToast.classList.toggle("is-error", !ok);
  void profileCopyToast.offsetWidth;
  profileCopyToast.classList.add("is-visible");
  profileCopyToastTimer = window.setTimeout(() => {
    profileCopyToast.classList.add("is-hiding");
    profileCopyToast.classList.remove("is-visible");
    profileCopyToastTimer = window.setTimeout(() => {
      profileCopyToast.hidden = true;
      profileCopyToast.classList.remove("is-hiding");
      profileCopyToastTimer = 0;
    }, 180);
  }, 1300);
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Clipboard unavailable");
  return true;
}

async function shareCurrentProfile() {
  const url = currentProfileUrl();
  const resetShareButton = () => {
    if (!profileShareButton) return;
    profileShareButton.classList.remove("is-copied");
    profileShareButton.setAttribute("aria-label", t("profileUrlCopy"));
    profileShareButton.title = t("profileUrlCopy");
  };

  try {
    await copyTextToClipboard(url);
    profileShareButton.classList.add("is-copied");
    profileShareButton.classList.remove("is-copying");
    void profileShareButton.offsetWidth;
    profileShareButton.classList.add("is-copying");
    profileShareButton.setAttribute("aria-label", t("copied"));
    profileShareButton.title = t("copied");
    showProfileCopyToast();
  } catch {
    resetShareButton();
    profileShareButton?.classList.remove("is-copying");
    void profileShareButton?.offsetWidth;
    profileShareButton?.classList.add("is-copying");
    showProfileCopyToast(t("copyFailed"), false);
    return;
  }

  window.setTimeout(resetShareButton, 1400);
}

function currentPostShareUrl(post) {
  const base = `${location.origin}${location.pathname}`;
  return `${base}#post/${post.id}`;
}

function shareCurrentPinToX() {
  if (!currentPin) return;
  const text = `${currentPin.title} by ${currentPin.creator} #VRChat`;
  const shareUrl = currentPostShareUrl(currentPin);
  const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
  window.open(intentUrl, "_blank", "noopener,noreferrer");
  showProfileCopyToast("Xで共有画面を開きました");
}

async function copyCurrentPinLink() {
  if (!currentPin || !dialogCopyLink) return;
  const url = currentPostShareUrl(currentPin);
  const resetButton = () => {
    dialogCopyLink.classList.remove("is-copied");
    dialogCopyLink.setAttribute("aria-label", t("postUrlCopy"));
    dialogCopyLink.title = t("postUrlCopy");
  };

  try {
    await copyTextToClipboard(url);
    dialogCopyLink.classList.add("is-copied");
    dialogCopyLink.classList.remove("is-copying");
    void dialogCopyLink.offsetWidth;
    dialogCopyLink.classList.add("is-copying");
    dialogCopyLink.setAttribute("aria-label", t("copied"));
    dialogCopyLink.title = t("copied");
    showProfileCopyToast(currentLanguage === "en" ? "Post URL copied" : currentLanguage === "ko" ? "게시물 URL을 복사했습니다" : "投稿URLをコピーしました");
  } catch {
    resetButton();
    dialogCopyLink.classList.remove("is-copying");
    void dialogCopyLink.offsetWidth;
    dialogCopyLink.classList.add("is-copying");
    showProfileCopyToast(t("copyFailed"), false);
    return;
  }

  window.setTimeout(resetButton, 1400);
}

function normalizeProfileEditorText() {
  document.querySelector("#editProfileTitle").textContent = currentLanguage === "en" ? "Edit profile" : currentLanguage === "ko" ? "프로필 편집" : "プロフィール編集";
  if (openAvatarEditorButton) openAvatarEditorButton.textContent = currentLanguage === "en" ? "Adjust icon" : currentLanguage === "ko" ? "아이콘 조정" : "アイコンを調整";
  if (openBannerEditorButton) openBannerEditorButton.textContent = currentLanguage === "en" ? "Adjust banner" : currentLanguage === "ko" ? "배너 조정" : "バナーを調整";
  if (editProfileNotice) editProfileNotice.textContent = currentLanguage === "en" ? "Saved." : currentLanguage === "ko" ? "저장했습니다." : "保存しました。";
  if (cancelEditProfile) cancelEditProfile.textContent = currentLanguage === "en" ? "Cancel" : currentLanguage === "ko" ? "취소" : "キャンセル";

  const labels = [
    [editDisplayName, currentLanguage === "en" ? "Display name" : currentLanguage === "ko" ? "표시 이름" : "表示名"],
    [editUserHandle, currentLanguage === "en" ? "User ID" : currentLanguage === "ko" ? "사용자 ID" : "ユーザーID"],
    [editRole, currentLanguage === "en" ? "Role" : currentLanguage === "ko" ? "직함" : "肩書き"],
    [editBio, currentLanguage === "en" ? "Bio" : currentLanguage === "ko" ? "소개" : "自己紹介"],
    [editVisibility, currentLanguage === "en" ? "Visibility" : currentLanguage === "ko" ? "공개 설정" : "公開設定"],
    [editLink, currentLanguage === "en" ? "Links" : currentLanguage === "ko" ? "링크" : "リンク"],
  ];
  labels.forEach(([input, text]) => {
    const label = input?.closest(".field")?.querySelector("span");
    if (label) label.textContent = text;
  });

  document.querySelectorAll(".edit-link-field span").forEach((label) => {
    label.textContent = currentLanguage === "en" ? "Links" : currentLanguage === "ko" ? "링크" : "リンク";
  });

  if (avatarEditorTitle) avatarEditorTitle.textContent = mediaEditMode === "banner" ? (currentLanguage === "en" ? "Adjust banner" : currentLanguage === "ko" ? "배너 조정" : "バナーを調整") : (currentLanguage === "en" ? "Adjust icon" : currentLanguage === "ko" ? "아이콘 조정" : "アイコンを調整");
  if (avatarEditorEyebrow) avatarEditorEyebrow.textContent = mediaEditMode === "banner" ? "Profile banner" : "Profile icon";
  if (avatarChooseImage) avatarChooseImage.textContent = currentLanguage === "en" ? "Choose image" : currentLanguage === "ko" ? "이미지 선택" : "画像を選ぶ";
  if (avatarEditorDone) avatarEditorDone.textContent = currentLanguage === "en" ? "Done" : currentLanguage === "ko" ? "완료" : "完了";
}
function openEditProfile() {
  mediaEditMode = "avatar";
  pendingAvatarSource = myProfile.avatar;
  pendingBannerSource = myProfile.banner;
  editDisplayName.value = myProfile.displayName;
  if (editUserHandle) editUserHandle.value = currentUserHandle();
  editRole.value = myProfile.role;
  editBio.value = myProfile.bio;
  editLink.value = "";
  editVisibility.value = myProfile.visibility;
  syncProfileLinkInputs(getProfileLinks());
  normalizeProfileEditorText();
  editProfileNotice.hidden = true;
  avatarZoom.value = "1";
  avatarOffsetX.value = "0";
  avatarOffsetY.value = "0";
  updateEditProfilePreview();
  updateProfileHandleState();
  showModalElement(editProfileDialog);
  window.setTimeout(() => editDisplayName.focus(), 140);
}

function renderProfile(creator) {
  const isMine = creator === "You";
  const directPosts = creatorPosts(creator);
  const syntheticPosts = syntheticClientPosts(creator);
  const organizerPosts = syntheticEventOrganizerPosts(creator);
  const posts = isMine ? myPosts : (directPosts.length ? directPosts : (syntheticPosts.length ? syntheticPosts : organizerPosts));
  const first = posts[0];
  if (!first) return;

  activeProfile = creator;
  hideMyRequestViews();
  feedView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  circleView.hidden = true;
  missionView.hidden = true;
  adminView.hidden = true;
  backendSpecView.hidden = true;
  profileView.hidden = false;
  profileView.classList.toggle("is-mine", isMine);
  const bannerImage = isMine ? myProfile.banner : first.image;
  profileBanner.style.backgroundImage = bannerImage
    ? `linear-gradient(180deg, rgba(15,15,15,0.08), rgba(15,15,15,0.32)), url("${bannerImage}")`
    : "";
  profileBanner.classList.toggle("has-image", Boolean(bannerImage));
  profileName.textContent = creator;
  profileRole.textContent = isMine ? "My page / creator dashboard" : first.role;
  profileBio.textContent = isMine
    ? myProfile.bio
    : directPosts.length
      ? `${first.category}を中心に、VRChat向けの作品投稿をまとめたポートフォリオ。通常投稿を眺めつつ、依頼受付がある場合は詳細確認へ進む想定です。`
      : `依頼履歴と対応状況を確認できるクライアントプロフィール。過去に依頼した内容ややり取りの傾向をまとめて見られる想定です。`;
  if (profilePosts) profilePosts.textContent = `${posts.length} ${t("posts")}`;

  if (isMine) {
    profileName.textContent = myProfile.displayName;
    profileRole.textContent = `My page / ${currentUserHandle()} / ${myProfile.role} / ${myProfile.visibility}`;
  }

  if (isMine && myProfile.avatar) {
    profileAvatar.style.backgroundImage = `url("${myProfile.avatar}")`;
    profileAvatar.classList.add("has-image");
    profileAvatar.textContent = "";
  } else {
    profileAvatar.style.backgroundImage = "";
    profileAvatar.classList.remove("has-image");
    profileAvatar.textContent = (profileName.textContent || "Y").slice(0, 1).toUpperCase();
  }

  renderProfileLinks(isMine ? getProfileLinks() : []);
  renderProfileSupportBadges(creator);
  if (profileRequest) profileRequest.textContent = isMine ? `${savedPins.size} ${t("saves")}` : posts.some((pin) => pin.request?.open) ? t("requestOpen") : t("normalPost");
  if (profileRating) profileRating.textContent = isMine ? "Drafts 2" : `${t("rating")} ${requestItemsByClient(creator)[0]?.rating || "4.8 / 5.0"}`;
  const trust = getTrustProfile(creator, posts, isMine);
  const openRequest = posts.some((pin) => pin.request?.open);
  renderProfileLevelBadge(posts, trust, creator);
  renderTrustProfile(creator, posts, isMine);
  renderProfileReviews(creator);
  renderProfileSubscriptionSection(creator, posts, isMine);
  if (profileRequest) profileRequest.textContent = openRequest ? t("requestOpen") : `${trust.completed} ${t("completedMetric")}`;
  if (profileRating) profileRating.textContent = `${trust.saves} ${t("saves")}`;
  activeProfilePosts = posts;
  profilePostQuery = "";
  activeBookmarkFolderId = null;
  activeProfileArchiveTab = isMine ? activeProfileArchiveTab : "posts";
  renderProfilePostArchive();

  if (isMine) {
    profileArchiveTabs.forEach((button) => {
      button.hidden = false;
    });
    profileFollow.hidden = true;
    if (profileEditButton) profileEditButton.hidden = false;
    if (profileFollowingButton) profileFollowingButton.hidden = false;
    updateProfileSocialButtons(creator, true);
    profileRequestButton.hidden = true;
  } else {
    activeProfileArchiveTab = "posts";
    profileArchiveTabs.forEach((button) => {
      button.hidden = button.dataset.profileArchiveTab !== "posts";
    });
    profileFollow.hidden = false;
    if (profileEditButton) profileEditButton.hidden = true;
    if (profileFollowingButton) profileFollowingButton.hidden = true;
    updateFollowButton(profileFollow, creator);
    updateProfileSocialButtons(creator, false);
    profileRequestButton.hidden = !directPosts.some((pin) => pin.request?.open);
    profileRequestButton.textContent = t("requestOpen");
    if (savedPostsSection) savedPostsSection.hidden = true;
  }

  scrollPageTop();
}

function saveEditProfile(event) {
  event.preventDefault();
  updateProfileHandleState();
  if (editProfileSubmit?.disabled) return;
  const links = collectProfileLinksFromInputs();
  const nextHandle = normalizeUserHandle(editUserHandle?.value || currentUserHandle());
  myProfile = {
    ...myProfile,
    displayName: editDisplayName.value.trim() || "You",
    role: editRole.value.trim() || "VRChat creator",
    bio: editBio.value.trim() || "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。",
    link: links[0] || "",
    links,
    visibility: editVisibility.value,
    avatar: pendingAvatarSource,
    banner: pendingBannerSource,
  };
  editProfileNotice.hidden = false;
  const activeAccount = currentAccountRecord();
  if (activeAccount) activeAccount.handle = nextHandle;
  persistActiveAccountProfile();
  renderAccountSwitcher();
  applyMyAvatarToChrome();
  renderProfile("You");
  window.setTimeout(closeEditProfileDialog, 260);
}

hideFloatingPostActions();
ensureEditLinkList();





