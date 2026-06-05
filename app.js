const vrchatImages = {
  community: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=900&q=85",
  creators: "https://images.unsplash.com/photo-1635016288720-c8e9d971c787?auto=format&fit=crop&w=900&q=85",
  crossPlatform: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=900&q=85",
  plus: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=85",
  world: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
  portrait: "https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&w=900&q=85",
  neon: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=85",
  studio: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=85",
  event: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85",
  city: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
  desk: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  fashion: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
};

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
    image: vrchatImages.portrait,
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
    image: vrchatImages.community,
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
    image: vrchatImages.crossPlatform,
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
    image: vrchatImages.plus,
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
    image: vrchatImages.world,
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
    image: vrchatImages.community,
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
    image: vrchatImages.crossPlatform,
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
    image: vrchatImages.plus,
  },
  { id: 9, title: "World photo walk", category: "Photo", creator: "Lumi Photo", role: "Photographer", avatar: "Moe", world: "Amber Station", tags: ["#worldphoto", "#写真", "#portfolio"], request: { open: true, title: "ワールド同行撮影", price: "¥3,000〜", capacity: "受付 2 / 4", delivery: "平均 2日" }, description: "お気に入りのワールドでプロフィール用写真をまとめて撮影するプラン。", image: vrchatImages.community },
  { id: 10, title: "Weekend avatar snapshot", category: "Photo", creator: "Yoru Snap", role: "Casual poster", avatar: "Rurune", world: "Blue Hour Street", tags: ["#日常投稿", "#写真", "#bluehour"], request: null, description: "依頼受付ではない通常の写真投稿。お気に入りワールドで撮った週末ログ。", image: vrchatImages.city },
  { id: 11, title: "Asset credit board", category: "Avatar", creator: "Mika Alterworks", role: "Avatar editor", avatar: "Selestia", world: "Portfolio", tags: ["#credit", "#使用アセット", "#booth"], request: null, description: "使用アバター、衣装、アクセサリーのクレジットをまとめた通常投稿。", image: vrchatImages.desk },
  { id: 12, title: "Night market memories", category: "Photo", creator: "Lumi Photo", role: "Photographer", avatar: "Manuka", world: "Night Market", tags: ["#worldphoto", "#friends", "#album"], request: null, description: "フレンドと回ったワールドの写真アルバム。閲覧、保存、プロフィール遷移を主目的にした投稿。", image: vrchatImages.neon },
  { id: 13, title: "Retouch study 04", category: "Retouch", creator: "Aoi Retouch", role: "Retoucher", avatar: "Kikyo", world: "White Studio", tags: ["#study", "#colorgrade", "#比較"], request: null, description: "レタッチ練習の記録。改善前後や色味の研究をポートフォリオに残す想定。", image: vrchatImages.studio },
  { id: 14, title: "Dance event recap", category: "Video", creator: "Frame Drift", role: "Video creator", avatar: "Various", world: "Club Prism", tags: ["#イベント", "#recap", "#動画"], request: null, description: "イベント後の通常投稿。YouTube埋め込みや短尺動画サムネイルが入る想定。", image: vrchatImages.event },
  { id: 15, title: "Creator room WIP", category: "World", creator: "Orbit Build", role: "World creator", avatar: "World sample", world: "Creator Room", tags: ["#wip", "#world", "#lighting"], request: null, description: "制作途中のワールド進捗投稿。依頼ではなく、フォロワー向けの制作ログ。", image: vrchatImages.world },
  { id: 16, title: "Spring outfit lookbook", category: "Avatar", creator: "Nagi Closet", role: "Outfit stylist", avatar: "Shinra", world: "Soft Garden", tags: ["#lookbook", "#衣装", "#春コーデ"], request: null, description: "衣装コーデの通常投稿。Boothリンクや使用アセット表示を載せる想定。", image: vrchatImages.fashion },
  { id: 17, title: "Thumbnail commission sample", category: "Commission", creator: "Rin Works", role: "Commission designer", avatar: "Creator profile", world: "Portfolio", tags: ["#依頼受付", "#サムネ", "#sample"], request: { open: true, title: "サムネ制作依頼", price: "¥4,500〜", capacity: "受付 3 / 8", delivery: "平均 5日" }, description: "コミッション受付投稿のサムネイル例。依頼受付投稿でも画像サンプルをしっかり見せる想定。", image: vrchatImages.creators },
  { id: 18, title: "World launch announcement", category: "World", creator: "Orbit Build", role: "World creator", avatar: "World sample", world: "Metro Bloom", tags: ["#公開告知", "#world", "#イベント"], request: null, description: "新ワールド公開の告知投稿。広告ではなくフィードに自然に混ざるイベント告知のイメージ。", image: vrchatImages.crossPlatform },
  { id: 19, title: "Avatar PV editing", category: "Video", creator: "Frame Drift", role: "Video creator", avatar: "Lapwing", world: "Black Stage", tags: ["#PV", "#ギミック紹介", "#youtube"], request: { open: true, title: "短尺PV編集依頼", price: "¥20,000〜", capacity: "受付 1 / 4", delivery: "平均 12日" }, description: "アバターの魅力やギミックを短尺動画で伝えるPV編集サンプル。", image: vrchatImages.event },
  { id: 20, title: "Shader test notes", category: "Avatar", creator: "Yoru Snap", role: "Casual poster", avatar: "Rurune", world: "Test Room", tags: ["#shader", "#memo", "#avatar"], request: null, description: "シェーダー設定や色味の比較メモ。自分用の記録としても使える通常投稿。", image: vrchatImages.desk },
  { id: 101, title: "Draft avatar board", category: "Avatar", creator: "You", role: "VRChat creator", avatar: "Rurune", world: "Creator Room", tags: ["#draft", "#avatar", "#memo"], request: null, description: "自分用の下書きアバターボード。", image: vrchatImages.portrait },
  { id: 102, title: "Saved outfit ideas", category: "Avatar", creator: "You", role: "VRChat creator", avatar: "Shinra", world: "Soft Garden", tags: ["#saved", "#outfit", "#booth"], request: null, description: "保存した衣装アイデアをまとめたマイページ用投稿。", image: vrchatImages.fashion },
  { id: 103, title: "World walk archive", category: "World", creator: "You", role: "VRChat creator", avatar: "Rurune", world: "Silent Harbor", tags: ["#world", "#archive", "#photo"], request: null, description: "お気に入りワールドの散歩ログ。", image: vrchatImages.world },
];

const myPosts = pins.filter((pin) => pin.creator === "You");

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
];

const requestManagerItems = [
  { id: 1, title: "Selestia spring look 改変", client: "Aoi Kisaragi", summary: "衣装差し替え、表情3種、ポーズ撮影用の軽微な調整。", status: "pending", deadline: "2026-06-06", budget: "¥12,000", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-06-03 22:15", scope: ["衣装導入", "表情3種", "PhysBone確認", "納品ZIP"], messages: [{ from: "client", time: "6/3 22:15", text: "春っぽい衣装に差し替えて、表情も少し追加したいです。" }, { from: "you", time: "6/3 22:40", text: "内容確認しました。使用アセットのリンクも送ってください。" }] },
  { id: 2, title: "Club Prism 告知サムネ", client: "DJ Nemu", summary: "イベント告知用の横長サムネイルとSNS投稿用画像の制作依頼。", status: "pending", deadline: "2026-06-08", budget: "¥7,500", thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-06-04 09:30", scope: ["横長サムネ", "SNS正方形", "テキスト調整", "2案提出"], messages: [{ from: "client", time: "6/4 09:30", text: "今週末のイベント告知画像をお願いしたいです。" }] },
  { id: 3, title: "BOOTH商品ページ用PV編集", client: "Lumi Photo", summary: "30秒尺、字幕入れ、色味調整まで承諾済み。", status: "accepted", deadline: "2026-06-10", budget: "¥28,000", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-06-01 13:20", scope: ["30秒PV", "字幕入れ", "色味調整", "BOOTH掲載向け"], messages: [{ from: "client", time: "6/1 13:21", text: "テンポ少し速めで、商品カットを多めにしたいです。" }, { from: "you", time: "6/1 13:40", text: "承諾しました。絵コンテを明日までに送ります。" }] },
  { id: 4, title: "Yayoi Rain ポートレート補正", client: "Rin Works", summary: "肌補正、ライティング調整、SNS掲載用のトリミング。", status: "accepted", deadline: "2026-06-12", budget: "¥9,000", thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-06-02 20:10", scope: ["肌補正", "ライティング調整", "SNS比率3種", "文字なし版"], messages: [{ from: "client", time: "6/2 20:14", text: "ポスターにも使いたいので少しだけシャープ寄りでお願いします。" }] },
  { id: 5, title: "ライブ用ギミック導入", client: "Mika Alterworks", summary: "作業開始済み。メニュー導線とアイコン差し替えの最終調整。", status: "in_progress", deadline: "2026-06-07", budget: "¥22,000", thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-05-31 19:45", scope: ["メニュー導線", "アイコン差し替え", "動作確認", "prefab納品"], messages: [{ from: "you", time: "6/3 10:03", text: "作業を開始しました。メニュー導線の感触を確認してほしいです。" }, { from: "client", time: "6/3 10:22", text: "かなり良いです。この方向でお願いします。" }] },
  { id: 6, title: "展示会ブース用メインビジュアル", client: "Kite Atelier", summary: "進行中。構図FIX済みで仕上げ段階。", status: "in_progress", deadline: "2026-06-09", budget: "¥35,000", thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-05-30 16:05", scope: ["メインビジュアル", "展示用2種", "サムネ最適化", "PSD同梱"], messages: [{ from: "client", time: "6/2 14:50", text: "構図FIXでお願いします。キャッチコピーは後から送ります。" }] },
  { id: 7, title: "3周年記念アバター撮影セット", client: "Haru Works", summary: "納品完了。相手からの確認と評価を待っている状態。", status: "awaiting_review", deadline: "2026-05-31", budget: "¥16,000", thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-05-24 22:18", scope: ["撮影セット12枚", "告知画像", "サムネ3種", "納品データ整理"], messages: [{ from: "you", time: "5/31 18:05", text: "納品完了しました。Google Driveのフォルダも共有済みです。" }] },
  { id: 8, title: "ポスター用レタッチ一式", client: "Noa Frame", summary: "相手から評価済み。こちらから相手を評価するターン。", status: "awaiting_your_review", deadline: "2026-05-28", budget: "¥14,000", thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-05-22 11:02", scope: ["印刷用レタッチ", "SNS比率版", "色校正", "書き出し2種"], messages: [{ from: "client", time: "5/28 15:01", text: "受け取りました。完成度高かったので評価も入れておきました。" }] },
  { id: 9, title: "衣装導入ミニ依頼", client: "Sora Closet", summary: "相互評価まで完了してクローズした依頼。", status: "completed", deadline: "2026-05-20", budget: "¥5,000", thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80", requestedAt: "2026-05-18 12:40", scope: ["衣装導入", "軽微な干渉修正", "Unitypackage確認", "完了済み"], messages: [{ from: "you", time: "5/20 19:12", text: "こちらも評価しました。ご依頼ありがとうございました。" }] },
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
const settingsView = document.querySelector("#settingsView");
const serviceView = document.querySelector("#serviceView");
const eventDetailView = document.querySelector("#eventDetailView");
const eventsView = document.querySelector("#eventsView");
const missionView = document.querySelector("#missionView");
const searchInput = document.querySelector("#searchInput");
const chips = [...document.querySelectorAll(".chip")];
const navPills = [...document.querySelectorAll(".nav-pill")];
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
const eventPageButton = document.querySelector("#eventPageButton");
const missionButton = document.querySelector("#missionButton");
const missionCardButton = document.querySelector("#missionCardButton");
const requestManagerButton = document.querySelector("#requestManagerButton");
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
const accountMenuService = document.querySelector("#accountMenuService");
const accountMenuSettings = document.querySelector("#accountMenuSettings");
const accountMenuLogout = document.querySelector("#accountMenuLogout");
const backToFeed = document.querySelector("#backToFeed");
const backFromRequest = document.querySelector("#backFromRequest");
const backFromNotifications = document.querySelector("#backFromNotifications");
const backFromSettings = document.querySelector("#backFromSettings");
const backFromRequestManager = document.querySelector("#backFromRequestManager");
const backFromRequestDetail = document.querySelector("#backFromRequestDetail");
const backFromService = document.querySelector("#backFromService");
const backFromEventDetail = document.querySelector("#backFromEventDetail");
const backFromEvents = document.querySelector("#backFromEvents");
const backFromMission = document.querySelector("#backFromMission");
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
const requestAgreement = document.querySelector("#requestAgreement");
const requestConfirmButton = document.querySelector("#requestConfirmButton");
const requestCreatorProfileButton = document.querySelector("#requestCreatorProfileButton");
const requestPageReportButton = document.querySelector("#requestPageReportButton");
const requestMoreSection = document.querySelector("#requestMoreSection");
const requestMoreGrid = document.querySelector("#requestMoreGrid");
const notificationsList = document.querySelector("#notificationsList");
const markNotificationsRead = document.querySelector("#markNotificationsRead");
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
const requestDetailShell = document.querySelector(".request-detail-shell");
const requestDetailImage = document.querySelector("#requestDetailImage");
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
const eventDetailHighlights = document.querySelector("#eventDetailHighlights");
const eventDetailStats = document.querySelector("#eventDetailStats");
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
const eventProposalWindowInput = document.querySelector("#eventProposalWindowInput");
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
const bookmarkFolderDialog = document.querySelector("#bookmarkFolderDialog");
const bookmarkFolderOptions = document.querySelector("#bookmarkFolderOptions");
const bookmarkFolderName = document.querySelector("#bookmarkFolderName");
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
const composeAvatar = document.querySelector("#composeAvatar");
const composeWorld = document.querySelector("#composeWorld");
const composeTags = document.querySelector("#composeTags");
const composeDescription = document.querySelector("#composeDescription");
const composeNotice = document.querySelector("#composeNotice");
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
const requestPostCapacity = document.querySelector("#requestPostCapacity");
const requestPostAvatar = document.querySelector("#requestPostAvatar");
const requestPostWorld = document.querySelector("#requestPostWorld");
const requestPostTags = document.querySelector("#requestPostTags");
const requestPostDescription = document.querySelector("#requestPostDescription");
const requestPostRequirements = document.querySelector("#requestPostRequirements");
const requestComposeNotice = document.querySelector("#requestComposeNotice");
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

let activeCategory = "All";
let activeView = "discover";
let savedPins = new Set([3, 7]);
let likedPins = new Set([1, 5, 12, 18]);
let followedCreators = new Set(["Lumi Photo"]);
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
let notificationReturnHash = "";
let settingsReturnHash = "";
let requestManagerReturnHash = "";
let serviceReturnHash = "";
let profileReturnHash = "";
let requestPageReturnHash = "";
let activeRequestManagerItemId = null;
let missionReturnHash = "";
let eventDetailReturnHash = "";
let eventsReturnHash = "";
let activeRequestManagerState = "pending";
let pendingRequestSort = "deadline";
let activeEventsFilter = "official";
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
let ignoreEventSlideClick = false;
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
let requestComposeImageData = "";
let bookmarkFolders = [
  { id: "folder-photo", name: "撮影参考", pinIds: [3, 12] },
  { id: "folder-avatar", name: "改変メモ", pinIds: [7] },
  { id: "folder-world", name: "World ideas", pinIds: [18] }
];
savedPins = new Set(bookmarkFolders.flatMap((folder) => folder.pinIds || []));
let profileArchivePinnedHeight = 0;
const composeDraftStorageKey = "vrc-sns-compose-draft";
const requestComposeDraftStorageKey = "vrc-sns-request-compose-draft";
let myProfile = {
  displayName: "You",
  role: "VRChat creator",
  bio: "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。通常投稿の作成、プロフィール編集、過去投稿の見返しをここから行う想定です。",
  link: "https://vrchat.com/home/user/example",
  visibility: "Public",
  avatar: "",
  banner: "",
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
      visibility: "Public",
      avatar: "",
      banner: vrchatImages.portrait,
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
      visibility: "Private",
      avatar: "",
      banner: vrchatImages.community,
    }
  }
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
    delivery: "平均 10日",
    capacity: "受付 2 / 5",
    tags: "#依頼受付 #avatar #booth",
    description: "衣装導入、表情調整、軽いギミック追加、撮影向けの見た目調整まで対応する依頼受付です。",
    requirements: "使用アセットの購入状況、アバター名、改変イメージ、希望納期、参考画像を依頼時に共有してください。"
  },
  photo: {
    title: "VRChat撮影依頼",
    category: "Photo",
    price: "¥4,000〜",
    delivery: "平均 3日",
    capacity: "受付 3 / 6",
    tags: "#依頼受付 #photo #world",
    description: "ワールド提案、ポーズ相談、SNS用トリミングまで含めた撮影依頼を受け付けます。",
    requirements: "希望ワールド、人数、使いたい用途、参考写真、納期を依頼時に共有してください。"
  },
  world: {
    title: "ワールド制作依頼",
    category: "World",
    price: "¥60,000〜",
    delivery: "平均 30日",
    capacity: "受付 1 / 2",
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
      ja: "写真投稿を集中的に集めて、ワールド撮影やポートレート作品を特集導線で見せたい提案。",
      en: "A proposal to gather photo posts and surface world photography and portrait work through a featured lane.",
      ko: "사진 게시물을 모아 월드 촬영과 포트레이트 작업을 특집 동선으로 보여주려는 제안입니다."
    },
    status: "approved",
    participants: 168,
    image: vrchatImages.community,
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
      ja: "7月後半 / 週末開催",
      en: "Late July / weekend run",
      ko: "7월 하순 / 주말 진행"
    },
    summary: {
      ja: "小規模の共同制作イベントとして、制作ログ投稿と途中経過の共有を集めたい提案。",
      en: "A small collaboration event proposal focused on work logs and progress-sharing posts from creators.",
      ko: "작업 로그와 중간 진행 공유 게시물을 모으는 소규모 공동 제작 이벤트 제안입니다."
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
      ja: "依頼前に比較しやすい実績投稿を増やすため、改変前後の作品を集めるキャンペーン案。",
      en: "A campaign idea focused on before-and-after posts so clients can compare work quality before requesting.",
      ko: "의뢰 전에 결과물을 비교하기 쉽도록 개변 전후 게시물을 모으는 캠페인 아이디어입니다."
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
    eventProposalTrigger: "イベント開催を提案",
    eventProposalSectionTitle: "ユーザー発案でイベントを提案する",
    eventProposalSectionLead: "開催希望を送ると運営イベント窓口へメールが届き、内容確認と承認後にイベントとして公開される想定です。",
    eventProposalStatusTitle: "イベント提案の審査状況",
    eventProposalDialogTitle: "イベント開催を提案",
    eventProposalDialogLead: "送信すると運営イベント窓口へメール通知され、審査承認後に開催中イベントや特集枠へ掲載される想定です。",
    eventProposalSubmit: "提案を送信",
    eventProposalSuccess: "運営へイベント提案を送信しました",
    eventsLead: "開催中のイベントを探したり、ユーザー発案の新しいイベントを運営へ提案できます。",
    eventsSearchPlaceholder: "イベント名、主催者、#タグで検索",
    eventsEmptyTitle: "イベントが見つかりませんでした",
    eventsEmptyBody: "検索語句やフィルタを変えてもう一度探してみてください。",
    heroTitle: "作品を見つける、繋がる、依頼する。",
    portfolioDesc: "改変・撮影・レタッチ・動画・ワールド制作を投稿",
    commissionDesc: "投稿やプロフィールから依頼受付へ接続",
    communityDesc: "閲覧・検索・プロフィール確認はログイン不要で快適に",
    explore: "Explore",
    requests: "Requests",
    shuffle: "Shuffle",
    request: "Request",
    post: "Post",
    noResultsTitle: "見つかりませんでした",
    noResultsBody: "検索語句やカテゴリを変えてもう一度探してみてください。",
    back: "Back",
    markAllRead: "すべて既読",
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
    eventProposalTrigger: "Propose an event",
    eventProposalSectionTitle: "Pitch a community-led event",
    eventProposalSectionLead: "When a creator sends a request, the operations team gets an email and the event goes live after approval.",
    eventProposalStatusTitle: "Proposal review status",
    eventProposalDialogTitle: "Propose an event",
    eventProposalDialogLead: "Submitting this form sends an email to the operations event inbox. Approved proposals can be published as live event banners or featured programs.",
    eventProposalSubmit: "Send proposal",
    eventProposalSuccess: "Your event proposal was sent to operations",
    eventsLead: "Search active events or send a new community event proposal to operations.",
    eventsSearchPlaceholder: "Search by event, organizer, or #tag",
    eventsEmptyTitle: "No events found",
    eventsEmptyBody: "Try another keyword or filter.",
    heroTitle: "Discover works, connect, and commission.",
    portfolioDesc: "Post avatar edits, photos, retouching, video, and worlds",
    commissionDesc: "Connect from posts and profiles to commission pages",
    communityDesc: "Browse, search, and view profiles comfortably without login",
    explore: "Explore",
    requests: "Requests",
    shuffle: "Shuffle",
    request: "Request",
    post: "Post",
    noResultsTitle: "No results found",
    noResultsBody: "Try another keyword or category.",
    back: "Back",
    markAllRead: "Mark all read",
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
    eventProposalTrigger: "이벤트 개최 제안",
    eventProposalSectionTitle: "사용자 발안 이벤트 제안",
    eventProposalSectionLead: "개최 희망을 보내면 운영 이벤트 창구로 메일이 도착하고, 내용 확인 및 승인 후 이벤트가 공개되는 흐름입니다.",
    eventProposalStatusTitle: "이벤트 제안 심사 현황",
    eventProposalDialogTitle: "이벤트 개최 제안",
    eventProposalDialogLead: "제출하면 운영 이벤트 메일함으로 알림이 가고, 승인 후 진행 중 이벤트나 특집 영역에 노출되는 흐름입니다.",
    eventProposalSubmit: "제안 보내기",
    eventProposalSuccess: "운영에 이벤트 제안을 보냈습니다",
    eventsLead: "진행 중인 이벤트를 검색하거나 사용자 발안 이벤트를 운영에 제안할 수 있습니다.",
    eventsSearchPlaceholder: "이벤트명, 주최자, #태그로 검색",
    eventsEmptyTitle: "이벤트를 찾을 수 없습니다",
    eventsEmptyBody: "검색어나 필터를 바꿔 다시 찾아보세요.",
    heroTitle: "작품을 찾고, 연결하고, 의뢰하세요.",
    portfolioDesc: "아바타 수정, 사진, 보정, 영상, 월드 작업을 게시",
    commissionDesc: "게시물과 프로필에서 의뢰 페이지로 연결",
    communityDesc: "로그인 없이도 검색과 프로필 확인을 편하게",
    explore: "Explore",
    requests: "Requests",
    shuffle: "Shuffle",
    request: "Request",
    post: "Post",
    noResultsTitle: "검색 결과가 없습니다",
    noResultsBody: "검색어나 카테고리를 바꿔 다시 찾아보세요.",
    back: "Back",
    markAllRead: "모두 읽음",
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

function setAttr(target, attr, key) {
  const node = typeof target === "string" ? document.querySelector(target) : target;
  if (node) node.setAttribute(attr, t(key));
}

function setSelectOptionTexts(select, keys) {
  if (!select) return;
  [...select.options].forEach((option, index) => {
    if (keys[index]) option.textContent = t(keys[index]);
  });
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
    const typeLabel = eventProposalTypeLabel(proposal.type);
    const autoFeatured = ["approved", "scheduled"].includes(proposal.status) && Number(proposal.participants || 0) >= EVENT_AUTO_FEATURE_THRESHOLD;
    return {
      badge: status.label,
      date: localizedValue(proposal.window),
      title: localizedValue(proposal.title),
      image: proposal.image || vrchatImages.event,
      body: localizedValue(proposal.summary),
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
  return activeEventsFilter === "community" ? getCommunityEventCampaignList() : getOfficialEventCampaignList();
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

function eventProposalTypeLabel(type) {
  const labels = {
    showcase: { ja: "作品特集", en: "Showcase", ko: "작품 특집" },
    contest: { ja: "コンテスト", en: "Contest", ko: "콘테스트" },
    workshop: { ja: "ワークショップ", en: "Workshop", ko: "워크숍" },
    support: { ja: "依頼促進", en: "Support campaign", ko: "의뢰 촉진" }
  };
  return localizedValue(labels[type] || labels.showcase);
}

function eventProposalStatusMeta(status) {
  const map = {
    pending: {
      label: { ja: "審査待ち", en: "Waiting review", ko: "심사 대기" },
      note: { ja: "運営イベント窓口へメール送信済み", en: "Email sent to operations", ko: "운영 이벤트 창구로 메일 발송됨" },
      className: "is-pending"
    },
    approved: {
      label: { ja: "開催承認済み", en: "Approved", ko: "개최 승인됨" },
      note: { ja: "掲載内容の最終確認中", en: "Final placement review", ko: "노출 내용 최종 확인 중" },
      className: "is-approved"
    },
    scheduled: {
      label: { ja: "開催予定", en: "Scheduled", ko: "개최 예정" },
      note: { ja: "公開日と掲載面を確定済み", en: "Publish date is fixed", ko: "공개일과 노출면 확정" },
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
      title: currentLanguage === "en" ? "Send a proposal" : currentLanguage === "ko" ? "제안 보내기" : "開催希望を送る",
      body: currentLanguage === "en" ? "The request form sends an email to the operations event inbox with title, timing, and summary." : currentLanguage === "ko" ? "제목, 시기, 개요가 운영 이벤트 메일함으로 전달됩니다." : "タイトル、開催時期、概要を入力すると運営イベント窓口へメールが送られます。"
    },
    {
      title: currentLanguage === "en" ? "Operations review" : currentLanguage === "ko" ? "운영 검토" : "運営が内容を確認",
      body: currentLanguage === "en" ? "The team checks whether the theme fits the service, if schedules work, and whether guide text is needed." : currentLanguage === "ko" ? "서비스와의 적합성, 일정, 안내 문구 필요 여부를 운영이 검토합니다." : "サービスとの相性、開催期間、必要な注意事項や掲載面を運営が確認します。"
    },
    {
      title: currentLanguage === "en" ? "Approved and published" : currentLanguage === "ko" ? "승인 후 개최" : "承認後に開催",
      body: currentLanguage === "en" ? "Approved proposals can appear in the event banner, featured lanes, and event detail page." : currentLanguage === "ko" ? "승인되면 이벤트 배너, 특집 동선, 이벤트 상세로 노출됩니다." : "承認された提案は開催中イベントのバナー、特集導線、詳細ページへ掲載されます。"
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
    return `
      <article class="event-proposal-item">
        <div class="event-proposal-item-top">
          <span class="event-proposal-type">${eventProposalTypeLabel(proposal.type)}</span>
          <span class="event-proposal-status ${status.className}">${status.label}</span>
        </div>
        <strong>${localizedValue(proposal.title)}</strong>
        <p>${localizedValue(proposal.summary)}</p>
        <div class="event-proposal-meta">
          ${proposal.image ? `<span>${currentLanguage === "en" ? "Banner image attached" : currentLanguage === "ko" ? "배너 이미지 첨부됨" : "バナー画像あり"}</span>` : ""}
          <span>${currentLanguage === "en" ? "Organizer" : currentLanguage === "ko" ? "주최자" : "主催者"}: ${proposal.organizer}</span>
          <span>${currentLanguage === "en" ? "Requested window" : currentLanguage === "ko" ? "희망 일정" : "希望開催時期"}: ${localizedValue(proposal.window)}</span>
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

function eventSearchText(event) {
  return [
    event.title,
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
  missionView.hidden = true;
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
  eventCarouselTrack.style.transform = `translateX(calc(-${visualIndex * 100}% + ${offsetPx}px))`;
  if (options.immediate) {
    void eventCarouselTrack.offsetWidth;
    eventCarouselTrack.style.transition = "";
  }
  [...eventCarouselDots.querySelectorAll(".event-dot")].forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeEventIndex);
  });
}

function stopEventAutoplay() {
  if (!eventAutoplayTimer) return;
  window.clearTimeout(eventAutoplayTimer);
  eventAutoplayTimer = 0;
}

function scheduleEventAutoplay() {
  stopEventAutoplay();
  const campaigns = getEventCampaignList();
  if (campaigns.length <= 1) return;
  const delay = 9000;
  eventAutoplayTimer = window.setTimeout(() => {
    goToEventSlide(activeEventIndex + 1);
  }, delay);
}

function goToEventSlide(index) {
  const campaigns = getEventCampaignList();
  if (!campaigns.length) return;
  const previousIndex = activeEventIndex;
  const normalizedIndex = (index + campaigns.length) % campaigns.length;
  activeEventIndex = normalizedIndex;
  eventLoopResetIndex = null;

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
  updateEventCarouselPosition(eventDragState.deltaX, eventVisualIndex);
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
  ignoreEventSlideClick = !isTap;
  if (isCanceled || isVerticalScroll) {
    eventDragState = null;
    updateEventCarouselPosition(0, eventVisualIndex);
    scheduleEventAutoplay();
    return;
  }
  if (isTap) {
    eventDragState = null;
    scheduleEventAutoplay();
    const matchedIndex = tappedElement?.getAttribute("href")?.match(/#event\/(\d+)$/)?.[1] || linkHref.match(/#event\/(\d+)$/)?.[1];
    openEventDetailPage(Number(matchedIndex || sourceIndex || activeEventIndex));
    return;
  }
  const targetIndex = absX > threshold ? activeEventIndex + (deltaX < 0 ? 1 : -1) : activeEventIndex;
  eventDragState = null;
  goToEventSlide(targetIndex);
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

function renderEventDetailPage(index) {
  const event = eventByIndex(index);
  if (!event || !eventDetailView) {
    showFeed();
    return;
  }
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  missionView.hidden = true;
  eventsView.hidden = true;
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
  if (eventDetailHighlights) eventDetailHighlights.innerHTML = event.highlights.map((item) => `<span>${item}</span>`).join("");
  if (eventDetailStats) {
    eventDetailStats.innerHTML = event.stats.map((stat) => `
      <article>
        <strong>${stat.value}</strong>
        <p>${stat.label}</p>
      </article>
    `).join("");
  }
  renderEventProposalFlow();
  renderEventProposalList();
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
  if (eventProposalOrganizerInput) eventProposalOrganizerInput.value = myProfile?.displayName || "You";
  if (eventProposalContactInput) eventProposalContactInput.value = "you@example.com";
  showModalElement(eventProposalDialog);
  window.setTimeout(() => eventProposalTitleInput?.focus(), 140);
}

function closeEventProposalDialog() {
  if (!eventProposalDialog) return;
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

function loadEventProposalImage(file) {
  if (!file || !file.type.startsWith("image/")) {
    updateEventProposalImagePreview("");
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    updateEventProposalImagePreview(String(reader.result || ""));
  });
  reader.readAsDataURL(file);
}

function submitEventProposal(event) {
  event.preventDefault();
  const proposalTitle = eventProposalTitleInput?.value?.trim();
  if (!proposalTitle) return;
  communityEventProposals = [
    {
      id: Date.now(),
      title: proposalTitle,
      type: eventProposalTypeInput?.value || "showcase",
      organizer: eventProposalOrganizerInput?.value?.trim() || myProfile?.displayName || "You",
      window: eventProposalWindowInput?.value?.trim() || (currentLanguage === "en" ? "Timing undecided" : currentLanguage === "ko" ? "일정 미정" : "時期調整中"),
      summary: eventProposalSummaryInput?.value?.trim() || (currentLanguage === "en" ? "Awaiting organizer summary." : currentLanguage === "ko" ? "주최자 개요 대기 중." : "主催者からの概要確認待ちです。"),
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
  setAttr(themeToggle, "title", "toggleTheme");
  setAttr(likedPostsButton, "aria-label", "likedPostsShortcut");
  setAttr(likedPostsButton, "title", "likedPostsShortcut");
  setAttr(bookmarkFoldersButton, "aria-label", "bookmarkFoldersShortcut");
  setAttr(bookmarkFoldersButton, "title", "bookmarkFoldersShortcut");
  if (eventPageButton) {
    eventPageButton.setAttribute("aria-label", t("events"));
    eventPageButton.setAttribute("title", t("events"));
  }
  setAttr(requestManagerButton, "aria-label", "requestManager");
  setAttr(requestManagerButton, "title", "requestManager");
  setAttr(notificationButton, "aria-label", "notifications");
  setAttr(notificationButton, "title", "notifications");
  setAttr(notificationBadge, "aria-label", "unreadNotifications");
  setAttr(avatarButton, "aria-label", "account");
  setText("#accountMenuProfile span", "myPage");
  if (accountMenuService) accountMenuService.querySelector("span").textContent = currentLanguage === "en" ? "Service guide" : currentLanguage === "ko" ? "서비스 설명" : "サービス説明";
  setText("#accountMenuSettings span", "appSettings");
  setText("#accountMenuLogout span", "logout");
  const mobileMenuLabels = {
    home: currentLanguage === "en" ? "Home" : currentLanguage === "ko" ? "홈" : "ホーム",
    theme: currentLanguage === "en" ? "Night mode" : currentLanguage === "ko" ? "나이트 모드" : "ナイトモード",
    likes: currentLanguage === "en" ? "Liked posts" : currentLanguage === "ko" ? "좋아요" : "いいね",
    bookmarks: currentLanguage === "en" ? "Bookmarks" : currentLanguage === "ko" ? "북마크" : "ブックマーク",
    requests: currentLanguage === "en" ? "Requests" : currentLanguage === "ko" ? "의뢰 확인" : "依頼確認",
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
  setText("#eventBannerHeading", currentLanguage === "en" ? "Picked events" : currentLanguage === "ko" ? "픽업 이벤트" : "ピックアップイベント");
  if (eventPrev) eventPrev.setAttribute("aria-label", currentLanguage === "en" ? "Previous event" : currentLanguage === "ko" ? "이전 이벤트" : "前のイベント");
  if (eventNext) eventNext.setAttribute("aria-label", currentLanguage === "en" ? "Next event" : currentLanguage === "ko" ? "다음 이벤트" : "次のイベント");
  if (missionCardButton) {
    missionCardButton.querySelector("strong").textContent = currentLanguage === "en" ? "Service guide" : currentLanguage === "ko" ? "서비스 설명" : "サービス説明";
    missionCardButton.querySelector("span").textContent = currentLanguage === "en" ? "See what this service does before opening Our Mission." : currentLanguage === "ko" ? "Our Mission으로 가기 전에 이 서비스가 무엇을 하는지 먼저 봅니다." : "Our Mission に進む前に、このサービスで何ができるかを見る";
  }
  renderEventCarousel();
  scheduleEventAutoplay();
  setText("#serviceEyebrow", currentLanguage === "en" ? "Service Guide" : currentLanguage === "ko" ? "서비스 설명" : "サービス説明");
  setText("#serviceHeroTitle", currentLanguage === "en" ? "A simple guide to what to open first and how to use the mock." : currentLanguage === "ko" ? "무엇을 먼저 열어야 하는지와 주요 사용 흐름을 정리한 가이드입니다." : "最初にどこを見ればよくて、何ができるかをまとめた使い方ガイド。");
  setText("#serviceHeroLead", currentLanguage === "en" ? "This page explains what each area is for: home, post details, profiles, requests, notifications, and settings. It is meant to work as a quick onboarding page before testing." : currentLanguage === "ko" ? "홈, 게시물 상세, 프로필, 의뢰, 알림, 설정이 각각 무엇을 위한 화면인지 짧게 정리합니다. 테스트 전에 보는 온보딩 페이지 역할입니다." : "ホーム、投稿、プロフィール、依頼、通知、設定がそれぞれ何のためにあるのかを短く整理しています。身内テスト前の案内ページとしても使える想定です。");
  setText("#servicePanelTitle1", currentLanguage === "en" ? "Discover works" : currentLanguage === "ko" ? "작품을 찾는다" : "作品を探す");
  setText("#servicePanelTitle2", currentLanguage === "en" ? "Check the creator" : currentLanguage === "ko" ? "상대를 확인한다" : "相手を確認する");
  setText("#servicePanelTitle3", currentLanguage === "en" ? "Manage requests" : currentLanguage === "ko" ? "의뢰와 진행을 관리한다" : "依頼と進行を管理する");
  setText("#servicePillarTitle1", currentLanguage === "en" ? "Start from the home feed" : currentLanguage === "ko" ? "홈에서 작품을 찾기" : "ホームで作品を探す");
  setText("#servicePillarBody1", currentLanguage === "en" ? "Use categories, search, and event cards to find interesting works and commission posts." : currentLanguage === "ko" ? "카테고리, 검색, 이벤트 카드에서 흥미로운 작품과 의뢰 접수 게시물을 찾습니다." : "カテゴリ、検索、イベントカードから気になる作品や依頼受付を見つけます。");
  setText("#servicePillarTitle2", currentLanguage === "en" ? "Use profiles as trust pages" : currentLanguage === "ko" ? "프로필로 신뢰를 확인하기" : "プロフィールで信用を見る");
  setText("#servicePillarBody2", currentLanguage === "en" ? "Check featured work, completed jobs, reviews, external links, and current commission status before deciding." : currentLanguage === "ko" ? "대표작, 완료 실적, 리뷰, 외부 링크, 현재 의뢰 상태를 확인하고 판단합니다." : "代表作、実績、レビュー、リンク、依頼受付状況を見て相手を判断します。");
  setText("#servicePillarTitle3", currentLanguage === "en" ? "Track progress after sending a request" : currentLanguage === "ko" ? "의뢰 후 진행 추적" : "依頼後は進行を追う");
  setText("#servicePillarBody3", currentLanguage === "en" ? "Follow acceptance, work in progress, delivery, and reviews from the request manager and detail chat view." : currentLanguage === "ko" ? "의뢰 관리와 상세 채팅 화면에서 승인, 진행중, 납품, 평가 흐름을 확인합니다." : "承諾、進行中、納品、評価までを依頼管理画面とチャットで確認できます。");
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
  setText("#eventProposalEyebrow", currentLanguage === "en" ? "Community event" : currentLanguage === "ko" ? "커뮤니티 이벤트" : "ユーザーイベント");
  setText("#eventProposalSectionTitle", "eventProposalSectionTitle");
  setText("#eventProposalSectionLead", "eventProposalSectionLead");
  setText("#openEventProposalFromDetail", "eventProposalTrigger");
  setText("#eventProposalStatusEyebrow", currentLanguage === "en" ? "Proposal status" : currentLanguage === "ko" ? "제안 현황" : "提案ステータス");
  setText("#eventProposalStatusTitle", "eventProposalStatusTitle");
  setText("#eventProposalDialogEyebrow", currentLanguage === "en" ? "Community event" : currentLanguage === "ko" ? "커뮤니티 이벤트" : "ユーザーイベント");
  setText("#eventProposalDialogTitle", "eventProposalDialogTitle");
  setText("#eventProposalDialogLead", "eventProposalDialogLead");
  setText("#eventProposalTitleLabel", currentLanguage === "en" ? "Event title" : currentLanguage === "ko" ? "이벤트명" : "イベント名");
  setText("#eventProposalImageLabel", currentLanguage === "en" ? "Event banner image" : currentLanguage === "ko" ? "이벤트 배너 이미지" : "イベントバナー画像");
  setText("#eventProposalImageHelp", currentLanguage === "en" ? "Operations uses this to judge the event mood and how it would look in the top banner." : currentLanguage === "ko" ? "운영이 이벤트 분위기와 톱 배너 게재 시 보이는 모습을 판단하는 데 사용합니다." : "トップバナー掲載時の見え方やイベントの雰囲気を運営が確認するために使います。");
  setText("#eventProposalImagePreviewLabel", currentLanguage === "en" ? "Banner image preview" : currentLanguage === "ko" ? "배너 이미지 미리보기" : "バナー画像プレビュー");
  setText("#eventProposalTypeLabel", currentLanguage === "en" ? "Event type" : currentLanguage === "ko" ? "이벤트 종류" : "イベント種別");
  setText("#eventProposalWindowLabel", currentLanguage === "en" ? "Preferred timing" : currentLanguage === "ko" ? "희망 일정" : "希望開催時期");
  setText("#eventProposalOrganizerLabel", currentLanguage === "en" ? "Organizer name" : currentLanguage === "ko" ? "주최자명" : "主催者名");
  setText("#eventProposalContactLabel", currentLanguage === "en" ? "Contact email" : currentLanguage === "ko" ? "연락처 이메일" : "連絡先メール");
  setText("#eventProposalSummaryLabel", currentLanguage === "en" ? "Overview" : currentLanguage === "ko" ? "개최 개요" : "開催概要");
  setText("#eventProposalSupportLabel", currentLanguage === "en" ? "Requested support from ops" : currentLanguage === "ko" ? "운영에 기대하는 지원" : "運営に期待すること");
  setText("#eventProposalMailTitle", currentLanguage === "en" ? "Sent to" : currentLanguage === "ko" ? "전송 대상" : "送信先");
  setText("#eventProposalMailBody", currentLanguage === "en" ? "An email notification is sent to the operations event inbox: events@vrc-sns.mock." : currentLanguage === "ko" ? "운영 이벤트 메일함 events@vrc-sns.mock 으로 알림 메일이 전송됩니다." : "運営イベント窓口 events@vrc-sns.mock にメール通知されます。");
  setText("#eventProposalCancel", currentLanguage === "en" ? "Cancel" : currentLanguage === "ko" ? "취소" : "キャンセル");
  setText("#eventProposalSubmit", "eventProposalSubmit");
  setText("#eventsEyebrow", currentLanguage === "en" ? "Events" : currentLanguage === "ko" ? "이벤트" : "Events");
  setText("#eventsTitle", "events");
  setText("#eventsLead", "eventsLead");
  setText("#eventsCreateButton", "eventProposalTrigger");
  setAttr(eventsSearchInput, "placeholder", "eventsSearchPlaceholder");
  setText("[data-event-filter='official']", currentLanguage === "en" ? "Official events" : currentLanguage === "ko" ? "공식 이벤트" : "公式イベント");
  setText("[data-event-filter='community']", currentLanguage === "en" ? "Community" : currentLanguage === "ko" ? "사용자 발안" : "ユーザー発案");
  setText("#eventsEmpty p", "eventsEmptyTitle");
  setText("#eventsEmpty span", "eventsEmptyBody");
  if (eventProposalTypeInput) {
    [...eventProposalTypeInput.options].forEach((option) => {
      option.textContent = eventProposalTypeLabel(option.value);
    });
  }
  if (eventProposalTitleInput) eventProposalTitleInput.placeholder = currentLanguage === "en" ? "Example: Avatar styling showcase week" : currentLanguage === "ko" ? "예: Avatar styling showcase week" : "例: Avatar styling showcase week";
  if (eventProposalWindowInput) eventProposalWindowInput.placeholder = currentLanguage === "en" ? "Example: Early July / 2 weeks" : currentLanguage === "ko" ? "예: 7월 초 / 2주" : "例: 7月前半 / 2週間";
  if (eventProposalOrganizerInput) eventProposalOrganizerInput.placeholder = currentLanguage === "en" ? "Your display name" : currentLanguage === "ko" ? "표시 이름" : "表示名";
  if (eventProposalContactInput) eventProposalContactInput.placeholder = "organizer@example.com";
  if (eventProposalSummaryInput) eventProposalSummaryInput.placeholder = currentLanguage === "en" ? "What you want to run, who it is for, and what kind of posts or requests you want to collect." : currentLanguage === "ko" ? "무엇을 열고 싶은지, 누구를 위한 이벤트인지, 어떤 게시물을 모으고 싶은지 적어주세요." : "何を開催したいか、誰に見てほしいか、どんな投稿や依頼を集めたいかを書いてください。";
  if (eventProposalSupportInput) eventProposalSupportInput.placeholder = currentLanguage === "en" ? "Feature placement, banner exposure, signup flow, moderation notes, and so on." : currentLanguage === "ko" ? "특집 노출, 배너 게재, 모집 동선, 운영 안내 등 기대하는 지원을 적어주세요." : "特集掲載、バナー露出、募集導線、運営案内など期待する支援を書いてください。";
  renderEventProposalFlow();
  renderEventProposalList();
  setText("#pageTitle", "heroTitle");
  const summary = [...document.querySelectorAll(".summary-strip:not([hidden]) > div span")];
  ["portfolioDesc", "commissionDesc", "communityDesc"].forEach((key, index) => setText(summary[index], key));
  setText("[data-view='discover']", "explore");
  setText("[data-view='requests']", "requests");
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
  document.querySelectorAll("#backToFeed, #backFromRequest, #backFromNotifications, #backFromSettings, #backFromRequestManager, #backFromRequestDetail, #backFromEventDetail, #backFromEvents, #backFromMission").forEach((button) => {
    const svg = button.querySelector("svg")?.outerHTML || "";
    button.innerHTML = `${svg}${t("back")}`;
  });
  setText(".notifications-heading h1", "notifications");
  setText("#markNotificationsRead", "markAllRead");
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
    if (modalIsOpen(dialog) || modalIsOpen(trustInfoDialog) || modalIsOpen(composeDialog) || modalIsOpen(requestComposeDialog) || modalIsOpen(editProfileDialog) || modalIsOpen(avatarEditorDialog)) return;
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

function creatorPosts(creator) {
  return pins.filter((pin) => pin.creator === creator);
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

function openRequestPostsForCreator(creator) {
  return creatorPosts(creator).filter((pin) => pin.request?.open);
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
  const query = searchInput.value.trim().toLowerCase();
  return pins.filter((pin) => {
    const matchesView = activeView === "discover" || pin.request?.open;
    const matchesCategory = activeCategory === "All" || pin.category === activeCategory;
    const haystack = [
      pin.title,
      pin.category,
      pin.creator,
      pin.avatar,
      pin.world,
      pin.description,
      pin.request?.title || "",
      ...pin.tags,
    ].join(" ").toLowerCase();
    return matchesView && matchesCategory && haystack.includes(query);
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
  const status = requestLabel(pin);
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
      </div>
    </article>
  `;
}

function renderPins(items = filteredPins()) {
  board.innerHTML = items.map(pinCard).join("");
  emptyState.hidden = items.length !== 0;
  bindPinCards(board);
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

function setView(view) {
  activeView = view;
  navPills.forEach((pill) => pill.classList.toggle("is-active", pill.dataset.view === view));
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

  setDialogOrigin(sourceElement);
  dialogImage.src = currentPin.image;
  dialogImage.alt = currentPin.title;
  dialogCategory.innerHTML = currentPin.request
    ? `${categoryLink(currentPin.category)} / ${currentPin.request.title}`
    : `${categoryLink(currentPin.category)} / ${t("normalPost")}`;
  dialogTitle.textContent = currentPin.title;
  dialogDescription.textContent = currentPin.description;
  dialogCreator.innerHTML = `<button class="creator-link" type="button" data-profile="${slugify(currentPin.creator)}">${currentPin.creator}</button>`;
  dialogAvatar.innerHTML = metaSearchLink("Avatar", currentPin.avatar, "Avatar");
  dialogWorld.innerHTML = metaSearchLink("World", currentPin.world, "World");
  dialogTags.innerHTML = tagLinks(currentPin.tags);
  const creatorOpenRequest = primaryOpenRequestForCreator(currentPin.creator);
  dialogRequest.innerHTML = creatorOpenRequest
    ? `
      <strong>${t("requestOpen")}</strong>
      <span>${creatorOpenRequest.title} / ${creatorOpenRequest.price}</span>
      <span>${creatorOpenRequest.capacity} / ${creatorOpenRequest.delivery}</span>
      <span>${t("requestCtaBody")}</span>
    `
    : `
      <strong>${t("normalPost")}</strong>
      <span>閲覧、検索、保存、プロフィール遷移を中心にした投稿です。</span>
      <span>このクリエイターは現在、依頼受付を公開していません。</span>
    `;
  dialogRequest.hidden = !creatorOpenRequest;
  dialogRequest.disabled = !creatorOpenRequest;
  dialogRequest.classList.toggle("is-action", Boolean(creatorOpenRequest));
  updateDialogSave();
  updateFollowButton(dialogFollow, currentPin.creator);
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


function showFeed() {
  activeProfile = null;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  missionView.hidden = true;
  profileView.hidden = true;
  profileView.classList.remove("is-mine");
  feedView.hidden = false;
  if (location.hash.startsWith("#profile/") || location.hash.startsWith("#request/") || location.hash.startsWith("#request-manager/") || location.hash.startsWith("#event/") || location.hash === "#events" || location.hash === "#notifications" || location.hash === "#settings" || location.hash === "#request-manager" || location.hash === "#service" || location.hash === "#mission" || location.hash === "#me") {
    history.pushState("", document.title, location.pathname + location.search);
  }
  renderPins();
  scrollPageTop();
}

function routeFromHash() {
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
  const requestDetailMatch = location.hash.match(/^#request-manager\/(\d+)$/);
  if (requestDetailMatch) {
    renderRequestManagerDetailPage(Number(requestDetailMatch[1]));
    return;
  }
  if (location.hash === "#request-manager") {
    renderRequestManagerPage();
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
  if (location.hash === "#notifications") {
    renderNotificationsPage();
    return;
  }
  if (location.hash === "#settings") {
    renderSettingsPage();
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
  if (pin) renderProfile(pin.creator);
}

function openProfile(slug) {
  const pin = creatorBySlug(slug);
  if (!pin) return;
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
  missionView.hidden = true;
  location.hash = `profile/${slug}`;
  renderProfile(pin.creator);
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
  missionView.hidden = true;
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

function openMyProfileArchive(tabName) {
  activeProfileArchiveTab = tabName;
  activeBookmarkFolderId = null;
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
  feedView.hidden = true;
  profileView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  missionView.hidden = true;
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
    `<div><strong>${currentLanguage === "en" ? "Requested delivery" : currentLanguage === "ko" ? "희망 납기" : "希望納期"}</strong><span>${post.request?.delivery || "平均 7日"}</span></div>`,
    `<div><strong>${currentLanguage === "en" ? "Average delivery" : currentLanguage === "ko" ? "평균 납기" : "平均納期"}</strong><span>${post.category === "Photo" ? "2〜4日" : "7〜10日"}</span></div>`,
    `<div><strong>${currentLanguage === "en" ? "Max slots" : currentLanguage === "ko" ? "접수 한도" : "受付上限"}</strong><span>${maxCount}${currentLanguage === "en" ? "" : "件"}</span></div>`,
    `<div><strong>${currentLanguage === "en" ? "Open slots" : currentLanguage === "ko" ? "현재 접수" : "現在受付中"}</strong><span>${currentCount}${currentLanguage === "en" ? "" : "件"}</span></div>`,
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
  requestAgreement.checked = false;
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
  requestCheckoutSummary.innerHTML = [
    `<div><strong>依頼タイトル</strong><span>${post.request.title}</span></div>`,
    `<div><strong>投稿名</strong><span>${post.title}</span></div>`,
    `<div><strong>支払い方法</strong><span>${requestPaymentMethod.value}</span></div>`,
    `<div><strong>金額</strong><span>${formatYen(finalAmount)}</span></div>`,
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

function unreadNotificationCount() {
  return notifications.filter((item) => item.unread).length;
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

function localizedNotification(item) {
  const copy = {
    ja: {
      1: ["Mika Alterworksが依頼受付を更新しました", "アバター改変依頼の受付枠と納期が更新されています。", "5分前"],
      2: ["あなたの投稿が保存されました", "World walk archive が新しく保存されました。", "18分前"],
      3: ["Lumi Photoがあなたをフォローしました", "プロフィールと過去投稿を確認できます。", "1時間前"],
      4: ["依頼前相談に返信があります", "料金、納期、必要素材について返信が届いています。", "昨日"],
    },
    en: {
      1: ["Mika Alterworks updated commissions", "Slots and delivery time for avatar edit requests were updated.", "5 min ago"],
      2: ["Your post was saved", "World walk archive was saved by someone.", "18 min ago"],
      3: ["Lumi Photo followed you", "You can check their profile and past posts.", "1 hour ago"],
      4: ["You have a reply on a pre-request chat", "A reply about price, delivery, and required assets arrived.", "Yesterday"],
    },
    ko: {
      1: ["Mika Alterworks가 의뢰 접수를 업데이트했습니다", "아바타 수정 의뢰의 접수 슬롯과 납기가 업데이트되었습니다.", "5분 전"],
      2: ["내 게시물이 저장되었습니다", "World walk archive가 새로 저장되었습니다.", "18분 전"],
      3: ["Lumi Photo가 나를 팔로우했습니다", "프로필과 과거 게시물을 확인할 수 있습니다.", "1시간 전"],
      4: ["의뢰 전 상담에 답장이 있습니다", "금액, 납기, 필요한 소재에 대한 답장이 도착했습니다.", "어제"],
    },
  };
  const translated = copy[currentLanguage]?.[item.id] || copy.ja[item.id];
  return translated ? { ...item, title: translated[0], body: translated[1], time: translated[2] } : item;
}

function renderNotificationsPage() {
  activeProfile = null;
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  missionView.hidden = true;
  notificationsView.hidden = false;
  notificationsList.innerHTML = notifications.map((source) => {
    const item = localizedNotification(source);
    return `
    <button class="notification-item ${item.unread ? "is-unread" : ""}" type="button" data-notification-id="${item.id}">
      <span class="notification-mark">${notificationIcon(item.type)}</span>
      <span class="notification-copy">
        <strong>${item.title}</strong>
        <span>${item.body}</span>
      </span>
      <time>${item.time}</time>
    </button>
  `;
  }).join("");
  updateNotificationBadge();
  scrollPageTop();
}

function renderSettingsPage() {
  activeProfile = null;
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  missionView.hidden = true;
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

function requestServiceLines(post) {
  const base = [
    `サービス内容: ${post.request?.title || post.category}`,
    `希望納期: ${post.request?.delivery || "平均 7日"}`,
    `受付枠: ${post.request?.capacity || "受付中"}`,
  ];
  if (post.category === "Photo") {
    base.push("納品形式: JPG / PNG");
    base.push("依頼後はチャットで参考画像と要望を共有");
  } else if (post.category === "Avatar") {
    base.push("データ受け渡し: ZIP / 画像添付対応");
    base.push("承認時に初回案内を自動送信する想定");
  } else {
    base.push("やり取りは依頼チャットで継続");
    base.push("必要に応じて納品後リテイク対応");
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
    return `<button class="primary-button" type="button" data-request-action="await-review">${t("waitReceive")}</button><button class="soft-button" type="button" data-request-action="retake">${t("backToRetake")}</button>`;
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
    return "納品済みで、相手からの受け取り確認と評価を待っている段階です。";
  }
  if (item.status === "awaiting_your_review") {
    return "相手の評価が返ってきたので、こちらからもレビューを返して完了へ進みます。";
  }
  return "依頼の履歴とやり取りをあとから見返せる状態です。";
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

function renderSavedPostsSection() {
  if (!savedPostsSection || !savedPostsBoard || !bookmarkFoldersBoard) return;
  savedPostsSection.hidden = activeProfile !== "You" || activeProfileArchiveTab !== "folders";
  if (activeProfile !== "You" || activeProfileArchiveTab !== "folders") return;

  const folders = bookmarkFolders.filter((folder) => (folder.pinIds || []).length);
  bookmarkFoldersBoard.hidden = false;
  if (activeBookmarkFolderId) {
    const folder = bookmarkFolders.find((entry) => entry.id === activeBookmarkFolderId);
    const posts = pins.filter((post) => folder?.pinIds?.includes(post.id));
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
    const covers = pins.filter((post) => folder.pinIds?.includes(post.id)).slice(0, 3);
    return `
      <button class="bookmark-folder-card" type="button" data-folder-id="${folder.id}">
        <div class="bookmark-folder-covers">
          ${covers.map((post) => `<img src="${post.image}" alt="${post.title}" loading="lazy" />`).join("")}
        </div>
        <strong>${folder.name}</strong>
        <span>${folder.pinIds.length} posts</span>
      </button>
    `;
  }).join("");
}

function openBookmarkFolderDialog(pinId) {
  pendingBookmarkPinId = pinId;
  if (!bookmarkFolderDialog || !bookmarkFolderOptions) return;
  const options = bookmarkFolders.map((folder, index) => `
    <label class="bookmark-folder-option">
      <input type="radio" name="bookmarkFolderSelect" value="${folder.id}" ${index === 0 ? "checked" : ""} />
      <span>${folder.name}</span>
      <small>${folder.pinIds.length} posts</small>
    </label>
  `).join("");
  bookmarkFolderOptions.innerHTML = options || `<p class="bookmark-folder-empty">${currentLanguage === "en" ? "Create your first folder" : currentLanguage === "ko" ? "첫 폴더를 만들어보세요" : "最初のフォルダを作成してください"}</p>`;
  bookmarkFolderName.value = "";
  showModalElement(bookmarkFolderDialog);
}

function closeBookmarkFolderDialog() {
  closeModalElement(bookmarkFolderDialog);
  pendingBookmarkPinId = null;
}

function selectedBookmarkFolderId() {
  return bookmarkFolderDialog?.querySelector('input[name="bookmarkFolderSelect"]:checked')?.value || bookmarkFolders[0]?.id || null;
}

function createBookmarkFolder() {
  const name = bookmarkFolderName?.value.trim();
  if (!name) return null;
  const id = `folder-${Date.now()}`;
  bookmarkFolders.unshift({ id, name, pinIds: [] });
  openBookmarkFolderDialog(pendingBookmarkPinId);
  const radio = bookmarkFolderDialog?.querySelector(`input[value="${id}"]`);
  if (radio) radio.checked = true;
  bookmarkFolderName.value = "";
  return id;
}

function savePinToSelectedBookmarkFolder() {
  if (!pendingBookmarkPinId) return;
  let folderId = selectedBookmarkFolderId();
  if (!folderId) {
    folderId = createBookmarkFolder();
    if (!folderId) return;
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
    avatar: composeAvatar.value,
    world: composeWorld.value,
    tags: composeTags.value,
    description: composeDescription.value,
    images: composeImages,
    savedAt: Date.now()
  };
  localStorage.setItem(composeDraftStorageKey, JSON.stringify(payload));
}

function restoreComposeDraft() {
  const raw = localStorage.getItem(composeDraftStorageKey);
  if (!raw) return;
  try {
    const draft = JSON.parse(raw);
    composePostTitle.value = draft.title || "";
    composeCategory.value = draft.category || "Photo";
    composeAvatar.value = draft.avatar || "";
    composeWorld.value = draft.world || "";
    composeTags.value = draft.tags || "";
    composeDescription.value = draft.description || "";
    composeImages = Array.isArray(draft.images) ? draft.images : [];
    composeImageIndex = 0;
    renderComposeImage();
  } catch {}
}

function clearComposeDraft() {
  localStorage.removeItem(composeDraftStorageKey);
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
}

function showFloatingPostActions() {
  if (!floatingPostActions) return;
  floatingPostActions.hidden = false;
  window.requestAnimationFrame(() => {
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
  requestPostTags.value = preset.tags;
  requestPostDescription.value = preset.description;
  requestPostRequirements.value = preset.requirements;
  updateRequestComposePreview();
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
      <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
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
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  missionView.hidden = true;
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
      ["other", "その他"],
    ];
  }
  return [
    ["アバター、衣装、販売データなどの共有を要求している", "アバターや販売データを要求してくる"],
    ["威圧的、脅迫的、攻撃的な発言がある", "威圧的、脅迫的、攻撃的な発言がある"],
    ["外部決済や直接取引へ誘導している", "外部決済や直接取引へ誘導している"],
    ["著作権、規約、利用許諾に違反する可能性がある", "権利や利用許諾に違反する可能性がある"],
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
  const target = isClient ? currentOpenRequestPost() : requestManagerItemById(activeRequestManagerItemId);
  if (!target) return;
  activeRequestReportContext = { mode, target };
  renderRequestReportReasons(mode);
  if (requestReportTarget) {
    requestReportTarget.textContent = isClient
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
  if (mode === "client") {
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
  if (requestReviewTargetName) requestReviewTargetName.textContent = `${targetName}: ${reviewingCreator ? "You" : item.client}`;
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
  const item = requestManagerItemById(activeRequestReviewContext.itemId);
  if (!item) return;
  const score = requestReviewDialog?.querySelector('input[name="requestReviewScore"]:checked')?.value || "good";
  const labels = { good: "良かった", normal: "普通", bad: "残念だった" };
  const tags = [...(requestReviewTags?.querySelectorAll("input:checked") || [])].map((input) => input.value);
  const comment = requestReviewComment?.value.trim() || "";
  const targetCreator = activeRequestReviewContext.mode === "client" ? "You" : item.client;
  if (!publicReviewsByCreator[targetCreator]) publicReviewsByCreator[targetCreator] = [];
  publicReviewsByCreator[targetCreator].unshift({
    score,
    author: activeRequestReviewContext.mode === "client" ? item.client : "You",
    body: comment || `${labels[score]}。`,
    tags
  });
  if (activeRequestReviewContext.mode === "client") {
    item.status = "awaiting_your_review";
    item.messages.push({ from: "client", time: "いま", text: `受け取り確認と評価が完了しました。評価: ${labels[score]}${tags.length ? ` / ${tags.join("・")}` : ""}` });
  } else {
    item.status = "completed";
    item.messages.push({ from: "you", time: "いま", text: `こちらからの評価も完了しました。評価: ${labels[score]}${comment ? ` / ${comment}` : ""}` });
  }
  closeRequestReviewDialog();
  renderRequestManagerDetailPage(item.id);
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
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  missionView.hidden = true;
  requestManagerDetailView.hidden = false;

  requestDetailImage.src = item.thumbnail;
  requestDetailImage.alt = item.title;
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
  requestDecisionActions.innerHTML = decisionActionsForRequest(item);
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
  feedView.hidden = true;
  profileView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  missionView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
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
  }
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
  setView("discover");
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
  setView("discover");
  setCategory(category);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function searchByMeta(category, query) {
  if (modalIsOpen(dialog)) closePinDialog();
  activeProfile = null;
  profileView.hidden = true;
  feedView.hidden = false;
  searchInput.value = query;
  setView("discover");
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

function openComposeHint() {
  if (modalIsOpen(dialog)) closePinDialog();
  document.body.classList.remove("is-dragging");
  dropHint.hidden = true;
  composeNotice.hidden = true;
  if (composeCategory.value === "Commission") composeCategory.value = "Photo";
  restoreComposeDraft();
  updateComposePreview();
  showModalElement(composeDialog);
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

function updateComposePreview() {
  const category = composeCategory.value || "Avatar";
  const title = composePostTitle.value.trim() || "新しい投稿タイトル";
  const tags = composeTags.value.trim() || "#vrchat #portfolio";
  const creator = "You";

  composePreviewCard.innerHTML = `
    <span>${category} / ${creator}</span>
    <strong>${title}</strong>
    <small>${tags}</small>
  `;
}

function requestComposeValues() {
  const title = requestPostTitle.value.trim() || "依頼受付タイトル";
  const category = requestPostCategory.value || "Avatar";
  const price = requestPostPrice.value.trim() || "¥12,000〜";
  const delivery = requestPostDelivery.value.trim() || "平均 10日";
  const capacity = requestPostCapacity.value.trim() || "受付 2 / 5";
  const tags = requestPostTags.value.trim() || "#依頼受付 #vrchat #portfolio";
  const description = requestPostDescription.value.trim() || "説明を入力すると、依頼受付ページの導入文として表示されます。";
  const requirements = requestPostRequirements.value.trim() || "参考画像、使用アセット、希望納期を依頼時に確認する想定です。";
  return { title, category, price, delivery, capacity, tags, description, requirements };
}

function updateRequestComposePreview() {
  const values = requestComposeValues();
  requestComposePreviewCard.innerHTML = `
    <span>${values.category} / Commission · You</span>
    <strong>${values.title}</strong>
    <small>${values.price} / ${values.delivery}</small>
  `;
  requestComposePageTitle.textContent = values.title;
  requestComposePageDescription.textContent = values.description;
  requestComposePageMeta.innerHTML = `
    <span>${values.price}</span>
    <span>${values.capacity}</span>
    <span>${values.delivery}</span>
  `;
}

function readImageFile(file) {
  return new Promise((resolve) => {
    if (!file || !file.type.startsWith("image/")) {
      resolve(null);
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve({ src: reader.result, name: file.name });
    });
    reader.readAsDataURL(file);
  });
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
  composeNotice.hidden = false;
  composeNotice.textContent = "通常投稿のモックを作成しました。実装時は画像、本文、タグ、Avatar/World情報を投稿APIへ送信する想定です。";
  clearComposeDraft();
  updateComposePreview();
}

function handleRequestComposeSubmit(event) {
  event.preventDefault();
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
      delivery: values.delivery,
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

searchInput.addEventListener("input", () => renderPins());
eventPrev?.addEventListener("click", () => goToEventSlide(activeEventIndex - 1));
eventNext?.addEventListener("click", () => goToEventSlide(activeEventIndex + 1));
openEventProposalButton?.addEventListener("click", openEventsPage);
openEventProposalFromDetail?.addEventListener("click", openEventProposalDialog);
eventsCreateButton?.addEventListener("click", openEventProposalDialog);
eventsSearchInput?.addEventListener("input", renderEventsList);
eventsQuickFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-event-filter]");
  if (!button) return;
  activeEventsFilter = button.dataset.eventFilter || "official";
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
  goToEventSlide(Number(button.dataset.eventDot));
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
eventProposalForm?.addEventListener("submit", submitEventProposal);
shuffleButton.addEventListener("click", shufflePins);
createButton.addEventListener("click", openComposeHint);
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
    openComposeHint();
    return;
  }
  if (action.dataset.composeDraftAction === "delete") {
    clearComposeDraft();
    openComposeDraftListDialog();
  }
});
themeToggle.addEventListener("click", toggleTheme);
likedPostsButton?.addEventListener("click", () => openMyProfileArchive("likes"));
bookmarkFoldersButton?.addEventListener("click", () => openMyProfileArchive("folders"));
eventPageButton?.addEventListener("click", openEventsPage);
missionButton?.addEventListener("click", openServicePage);
missionCardButton?.addEventListener("click", openServicePage);
requestManagerButton?.addEventListener("click", openRequestManagerPage);
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
accountMenuService?.addEventListener("click", () => {
  closeAccountMenu();
  openServicePage();
});
accountMenuSettings?.addEventListener("click", () => {
  openSettingsPage();
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
  } else if (action === "requests") {
    openRequestManagerPage();
  } else if (action === "events") {
    openEventsPage();
  } else if (action === "notifications") {
    openNotificationsPage();
  }
});
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
backFromService?.addEventListener("click", returnFromService);
backFromEventDetail?.addEventListener("click", returnFromEventDetail);
backFromEvents?.addEventListener("click", returnFromEvents);
backFromMission?.addEventListener("click", returnFromMission);
serviceMissionLink?.addEventListener("click", openMissionPage);
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
  zipSafetyConfirm.disabled = !zipSafetyCheckbox.checked;
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
trustFeaturedWorks?.addEventListener("click", (event) => {
  const featured = event.target.closest("[data-featured-id]");
  if (!featured) return;
  openPin(Number(featured.dataset.featuredId), featured);
});
savedPostsBoard?.addEventListener("click", handleBoardClick);
savedPostsBoard?.addEventListener("touchstart", handleBoardTouchStart, { capture: true, passive: true });
savedPostsBoard?.addEventListener("touchmove", handleBoardTouchMove, { capture: true, passive: true });
savedPostsBoard?.addEventListener("touchend", handleBoardTouchEnd, { capture: true, passive: false });

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
    const previousHeight = currentProfileArchiveHeight();
    profileArchivePinnedHeight = nextTab === "folders" ? Math.max(previousHeight, 320) : 0;
    activeProfileArchiveTab = nextTab;
    activeBookmarkFolderId = null;
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
  if (!currentPin || !creatorHasOpenRequest(currentPin.creator)) return;
  openRequestPage(currentPin.creator);
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

markNotificationsRead.addEventListener("click", () => {
  notifications.forEach((item) => {
    item.unread = false;
  });
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

[editDisplayName, editRole, editBio, editLink, editVisibility].forEach((input) => {
  input.addEventListener("input", updateEditProfilePreview);
  input.addEventListener("change", updateEditProfilePreview);
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

function loadAvatarEditorImage(file) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (mediaEditMode === "banner") {
      pendingBannerSource = reader.result;
    } else {
      pendingAvatarSource = reader.result;
    }
    avatarCropPanel.hidden = false;
    avatarCropImage.src = reader.result;
    avatarZoom.value = "1";
    avatarOffsetX.value = "0";
    avatarOffsetY.value = "0";
    updateEditProfilePreview();
  });
  reader.readAsDataURL(file);
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
  editPreviewName.textContent = editDisplayName.value.trim() || "You";
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
  if (event.target === composeDialog) closeComposeDialog();
});

composeDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeComposeDialog();
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

saveDraftButton.addEventListener("click", () => {
  persistComposeDraft();
  composeNotice.hidden = false;
  composeNotice.textContent = "通常投稿の下書きを保存しました。";
});

[composePostTitle, composeCategory, composeAvatar, composeWorld, composeTags, composeDescription].forEach((input) => {
  input.addEventListener("input", () => {
    updateComposePreview();
    persistComposeDraft();
  });
  input.addEventListener("change", () => {
    updateComposePreview();
    persistComposeDraft();
  });
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

[requestPostTitle, requestPostCategory, requestPostVisibility, requestPostPrice, requestPostDelivery, requestPostCapacity, requestPostAvatar, requestPostWorld, requestPostTags, requestPostDescription, requestPostRequirements].forEach((input) => {
  input?.addEventListener("input", () => {
    updateRequestComposePreview();
    persistRequestComposeDraft();
  });
  input?.addEventListener("change", () => {
    updateRequestComposePreview();
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
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopEventAutoplay();
  else scheduleEventAutoplay();
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
  if (event.dataTransfer?.files?.length) {
    loadComposeImages(event.dataTransfer.files);
  }
  if (!modalIsOpen(composeDialog)) openComposeHint();
});

loadSavedSettings();
applyReducedMotionSetting();
applyContentDisplaySettings();
applyThemeMode(localStorage.getItem("vrc-sns-theme-mode") || settingsThemeMode?.value || "system");
applyMyAvatarToChrome();
normalizeProfileEditorText();
updateComposePreview();
updateNotificationBadge();
applyLanguage();
renderPins();
routeFromHash();

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
    sourcePosts = pins.filter((post) => likedPins.has(post.id));
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
      ? bookmarkFolders.every((folder) => !(folder.pinIds || []).length) && !activeBookmarkFolderId
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

function trustScore(posts, trust) {
  return Math.round(
    clampScore(posts.length * 3, 60) +
    clampScore(trust.completed * 12, 420) +
    clampScore(trust.repeat * 18, 270) +
    clampScore(trust.saves * 0.35, 120) +
    clampScore(trust.likes * 0.08, 100)
  );
}

function trustedLevel(score) {
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
function renderProfileLevelBadge(posts, trust) {
  if (!profileLevelBadge) return;
  const score = trustScore(posts, trust);
  const level = trustedLevel(score);
  const badgeLabel = level.label.replace(" User", "");
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
  const score = trustScore(posts, trust);
  const level = trustedLevel(score);
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
  showModalElement(editProfileDialog);
  window.setTimeout(() => editDisplayName.focus(), 140);
}

function renderProfile(creator) {
  const isMine = creator === "You";
  const directPosts = creatorPosts(creator);
  const posts = isMine ? myPosts : (directPosts.length ? directPosts : syntheticClientPosts(creator));
  const first = posts[0];
  if (!first) return;

  activeProfile = creator;
  feedView.hidden = true;
  requestView.hidden = true;
  notificationsView.hidden = true;
  requestManagerView.hidden = true;
  requestManagerDetailView.hidden = true;
  settingsView.hidden = true;
  serviceView.hidden = true;
  eventDetailView.hidden = true;
  eventsView.hidden = true;
  missionView.hidden = true;
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
    profileRole.textContent = `My page / ${myProfile.role} / ${myProfile.visibility}`;
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
  if (profileRequest) profileRequest.textContent = isMine ? `${savedPins.size} ${t("saves")}` : posts.some((pin) => pin.request?.open) ? t("requestOpen") : t("normalPost");
  if (profileRating) profileRating.textContent = isMine ? "Drafts 2" : `${t("rating")} ${requestItemsByClient(creator)[0]?.rating || "4.8 / 5.0"}`;
  const trust = getTrustProfile(creator, posts, isMine);
  const openRequest = posts.some((pin) => pin.request?.open);
  renderProfileLevelBadge(posts, trust);
  renderTrustProfile(creator, posts, isMine);
  renderProfileReviews(creator);
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
    updateProfileSocialButtons(creator, true);
    profileRequestButton.hidden = true;
  } else {
    activeProfileArchiveTab = "posts";
    profileArchiveTabs.forEach((button) => {
      button.hidden = button.dataset.profileArchiveTab !== "posts";
    });
    profileFollow.hidden = false;
    if (profileEditButton) profileEditButton.hidden = true;
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
  const links = collectProfileLinksFromInputs();
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
  persistActiveAccountProfile();
  renderAccountSwitcher();
  applyMyAvatarToChrome();
  renderProfile("You");
  window.setTimeout(closeEditProfileDialog, 260);
}

ensureEditLinkList();





