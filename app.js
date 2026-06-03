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
    request: {
      open: true,
      title: "アバター改変依頼",
      price: "¥12,000〜",
      capacity: "受付 2 / 5",
      delivery: "平均 10日",
    },
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
    request: {
      open: true,
      title: "VRChat撮影依頼",
      price: "¥4,000〜",
      capacity: "受付 1 / 3",
      delivery: "平均 3日",
    },
    description: "ワールド選定からライティング、ポーズ提案まで行うVRChat内ポートレート撮影。",
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
    tags: ["#レタッチ", "#beforeafter", "#credit"],
    request: {
      open: true,
      title: "レタッチ依頼",
      price: "¥2,500〜",
      capacity: "受付 4 / 8",
      delivery: "平均 2日",
    },
    description: "肌、光、被写界深度、色味を整え、SNS投稿やポートフォリオに使いやすい一枚に仕上げる。",
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
    request: {
      open: false,
      title: "動画編集依頼",
      price: "¥18,000〜",
      capacity: "満枠",
      delivery: "平均 14日",
    },
    description: "YouTube埋め込みを想定した、ワールド紹介やイベント告知向けの短尺映像編集。",
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
    tags: ["#ワールド制作", "#lighting", "#vrchat"],
    request: {
      open: true,
      title: "ワールド制作相談",
      price: "¥60,000〜",
      capacity: "受付 1 / 2",
      delivery: "平均 30日",
    },
    description: "イベント、撮影、展示向けに使える、軽量で雰囲気のあるVRChatワールド制作サンプル。",
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
    request: {
      open: true,
      title: "衣装導入依頼",
      price: "¥5,000〜",
      capacity: "受付 3 / 6",
      delivery: "平均 5日",
    },
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
    request: {
      open: true,
      title: "サムネ制作依頼",
      price: "¥3,500〜",
      capacity: "受付 5 / 10",
      delivery: "平均 4日",
    },
    description: "最低価格、平均納期、残受付数、サンプル画像を一画面で確認できる依頼受付投稿。コミッション受付にも写真サムネイルを設定できる想定。",
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
    request: {
      open: false,
      title: "イベント画像制作",
      price: "¥8,000〜",
      capacity: "満枠",
      delivery: "平均 7日",
    },
    description: "DiscordやX共有を想定した、VRChatイベント向けの告知ビジュアル制作。",
    image: vrchatImages.plus,
  },
  {
    id: 9,
    title: "World photo walk",
    category: "Photo",
    creator: "Lumi Photo",
    role: "Photographer",
    avatar: "Moe",
    world: "Amber Station",
    tags: ["#撮影ワールド", "#写真", "#portfolio"],
    request: {
      open: true,
      title: "ワールド同行撮影",
      price: "¥3,000〜",
      capacity: "受付 2 / 4",
      delivery: "平均 2日",
    },
    description: "撮影ワールド検索から見つけた場所で、プロフィール用の写真をまとめて撮影するプラン。",
    image: vrchatImages.community,
  },
  {
    id: 10,
    title: "Weekend avatar snapshot",
    category: "Photo",
    creator: "Yoru Snap",
    role: "Casual poster",
    avatar: "Rurune",
    world: "Blue Hour Street",
    tags: ["#日常投稿", "#写真", "#bluehour"],
    request: null,
    description: "依頼受付ではない普通の写真投稿。お気に入りのワールドで撮った週末ログ。",
    image: vrchatImages.city,
  },
  {
    id: 11,
    title: "Asset credit board",
    category: "Avatar",
    creator: "Mika Alterworks",
    role: "Avatar editor",
    avatar: "Selestia",
    world: "Portfolio",
    tags: ["#credit", "#使用アセット", "#booth"],
    request: null,
    description: "使用アバター、衣装、髪型、アクセサリーのクレジットをまとめた通常投稿。",
    image: vrchatImages.desk,
  },
  {
    id: 12,
    title: "Night market memories",
    category: "Photo",
    creator: "Lumi Photo",
    role: "Photographer",
    avatar: "Manuka",
    world: "Night Market",
    tags: ["#worldphoto", "#friends", "#album"],
    request: null,
    description: "フレンドと回ったワールドの写真アルバム。閲覧、保存、プロフィール遷移を主目的にした投稿。",
    image: vrchatImages.neon,
  },
  {
    id: 13,
    title: "Retouch study 04",
    category: "Retouch",
    creator: "Aoi Retouch",
    role: "Retoucher",
    avatar: "Kikyo",
    world: "White Studio",
    tags: ["#study", "#colorgrade", "#比較"],
    request: null,
    description: "レタッチ練習の記録。改変前後比較や色味の研究をポートフォリオに残す想定。",
    image: vrchatImages.studio,
  },
  {
    id: 14,
    title: "Dance event recap",
    category: "Video",
    creator: "Frame Drift",
    role: "Video creator",
    avatar: "Various",
    world: "Club Prism",
    tags: ["#イベント", "#recap", "#動画"],
    request: null,
    description: "イベント後の通常投稿。YouTube埋め込みや短尺動画サムネイルが入る想定。",
    image: vrchatImages.event,
  },
  {
    id: 15,
    title: "Creator room WIP",
    category: "World",
    creator: "Orbit Build",
    role: "World creator",
    avatar: "World sample",
    world: "Creator Room",
    tags: ["#wip", "#ワールド", "#lighting"],
    request: null,
    description: "制作途中のワールド進捗投稿。依頼ではなく、フォロワー向けの制作ログ。",
    image: vrchatImages.world,
  },
  {
    id: 16,
    title: "Spring outfit lookbook",
    category: "Avatar",
    creator: "Nagi Closet",
    role: "Outfit stylist",
    avatar: "Shinra",
    world: "Soft Garden",
    tags: ["#lookbook", "#衣装", "#春コーデ"],
    request: null,
    description: "衣装コーデの通常投稿。Boothリンクや使用アセット表示を載せる想定。",
    image: vrchatImages.fashion,
  },
  {
    id: 17,
    title: "Thumbnail commission sample",
    category: "Commission",
    creator: "Rin Works",
    role: "Commission designer",
    avatar: "Creator profile",
    world: "Portfolio",
    tags: ["#依頼受付", "#サムネ", "#sample"],
    request: {
      open: true,
      title: "サムネ制作依頼",
      price: "¥4,500〜",
      capacity: "受付 3 / 8",
      delivery: "平均 5日",
    },
    description: "コミッション受付投稿のサムネイル例。依頼受付投稿でも画像サンプルをしっかり見せる想定。",
    image: vrchatImages.creators,
  },
  {
    id: 18,
    title: "World launch announcement",
    category: "World",
    creator: "Orbit Build",
    role: "World creator",
    avatar: "World sample",
    world: "Metro Bloom",
    tags: ["#公開告知", "#ワールド", "#イベント"],
    request: null,
    description: "新ワールド公開の告知投稿。広告ではなくフィードに自然に混ざるイベント告知のイメージ。",
    image: vrchatImages.crossPlatform,
  },
  {
    id: 19,
    title: "Avatar PV editing",
    category: "Video",
    creator: "Frame Drift",
    role: "Video creator",
    avatar: "Lapwing",
    world: "Black Stage",
    tags: ["#PV", "#ギミック紹介", "#youtube"],
    request: {
      open: true,
      title: "アバターPV編集",
      price: "¥20,000〜",
      capacity: "受付 1 / 2",
      delivery: "平均 12日",
    },
    description: "ギミック紹介やアバター販売ページに使えるPV編集の受付投稿。",
    image: vrchatImages.plus,
  },
  {
    id: 20,
    title: "Favorite world list",
    category: "World",
    creator: "Yoru Snap",
    role: "Casual poster",
    avatar: "Rurune",
    world: "Various",
    tags: ["#お気に入り", "#撮影ワールド", "#リスト"],
    request: null,
    description: "撮影に使いやすいワールドをまとめた普通のリスト投稿。検索の入口にもなる。",
    image: vrchatImages.community,
  },
  {
    id: 21,
    title: "Makeup texture test",
    category: "Avatar",
    creator: "Nagi Closet",
    role: "Outfit stylist",
    avatar: "Manuka",
    world: "White Studio",
    tags: ["#texture", "#makeup", "#改変"],
    request: null,
    description: "メイクテクスチャの試作投稿。販売や依頼ではなく、反応を見るための通常投稿。",
    image: vrchatImages.portrait,
  },
  {
    id: 22,
    title: "Creator support thank you",
    category: "Photo",
    creator: "Rin Works",
    role: "Commission designer",
    avatar: "Creator profile",
    world: "Portfolio",
    tags: ["#支援者", "#thankyou", "#portfolio"],
    request: null,
    description: "支援者やフォロワー向けの近況投稿。将来的な月額支援や限定投稿の余地を見せる。",
    image: vrchatImages.desk,
  },
  {
    id: 23,
    title: "Group photo retouch pack",
    category: "Retouch",
    creator: "Aoi Retouch",
    role: "Retoucher",
    avatar: "Group shot",
    world: "Night Hall",
    tags: ["#集合写真", "#レタッチ", "#依頼受付"],
    request: {
      open: true,
      title: "集合写真レタッチ",
      price: "¥6,000〜",
      capacity: "受付 2 / 4",
      delivery: "平均 6日",
    },
    description: "イベント集合写真をまとめて整える依頼受付投稿。サンプルサムネイルつき。",
    image: vrchatImages.event,
  },
  {
    id: 24,
    title: "Morning room snapshot",
    category: "Photo",
    creator: "Yoru Snap",
    role: "Casual poster",
    avatar: "Rurune",
    world: "Morning Room",
    tags: ["#日常", "#room", "#snapshot"],
    request: null,
    description: "朝のルームで撮った何気ない一枚。依頼色のない、SNSらしい投稿密度を作るための通常投稿。",
    image: vrchatImages.studio,
  },
];

const myPosts = [
  {
    id: 101,
    title: "Blue hour photo dump",
    category: "Photo",
    creator: "You",
    role: "VRChat creator",
    avatar: "Manuka",
    world: "Blue Hour Loft",
    tags: ["#photo", "#daily", "#portfolio"],
    request: null,
    description: "最近撮った写真をまとめた通常投稿。公開前のモックでは、複数画像の投稿プレビューやタグ整理の確認に使う想定です。",
    image: vrchatImages.city,
  },
  {
    id: 102,
    title: "Avatar texture note",
    category: "Avatar",
    creator: "You",
    role: "VRChat creator",
    avatar: "Selestia",
    world: "Creator Room",
    tags: ["#avatar", "#texture", "#wip"],
    request: null,
    description: "改変メモと使用テクスチャの整理。あとからプロフィール内で過去投稿として見返せる想定です。",
    image: vrchatImages.fashion,
  },
  {
    id: 103,
    title: "World walk archive",
    category: "World",
    creator: "You",
    role: "VRChat creator",
    avatar: "Rurune",
    world: "Silent Harbor",
    tags: ["#world", "#archive", "#photo"],
    request: null,
    description: "お気に入りワールドの散歩ログ。通常投稿のみ作れる投稿ボタンから作成されるイメージです。",
    image: vrchatImages.world,
  },
];

const trustProfiles = {
  You: {
    summary: "通常投稿、下書き、保存した参考資料をまとめて、公開前のポートフォリオとして見直せる自分用の信用ページ。",
    style: "VRChat内の自然な空気感、日常ログ、ワールド散歩の記録を中心に整理しています。",
    scope: ["VRChat photo", "Avatar notes", "World archive", "Portfolio"],
    links: ["https://vrchat.com/home/user/example", "https://x.com/YUMA0906", "https://yuma0906.booth.pm/"],
    completed: 0,
    likes: 128,
    saves: 18,
    repeat: 0,
  },
  "Mika Alterworks": {
    summary: "衣装導入、表情調整、軽いギミック追加まで相談しやすいアバター改変クリエイター。",
    style: "ネオン、和風、柔らかい日常系まで、BOOTH衣装を自然に馴染ませる作風。",
    scope: ["Avatar edit", "Outfit setup", "Expression", "Booth assets"],
    links: ["https://vrchat.com/home/user/mika-alterworks", "https://x.com/mika_alterworks", "https://mika-alterworks.booth.pm/"],
    completed: 42,
    likes: 980,
    saves: 246,
    repeat: 18,
  },
  "Lumi Photo": {
    summary: "ワールド選定からポーズ提案まで任せられるVRChatフォトグラファー。",
    style: "夜景、ポートレート、フレンドとの記念撮影をしっとり見せる写真表現。",
    scope: ["Portrait photo", "World photo", "Lighting", "Album"],
    links: ["https://vrchat.com/home/user/lumi-photo", "https://x.com/lumi_vrcphoto"],
    completed: 31,
    likes: 720,
    saves: 184,
    repeat: 12,
  },
  "Aoi Retouch": {
    summary: "肌、髪、色味、集合写真の仕上げを中心に対応するレタッチ担当。",
    style: "素材感を残しながら、SNSで見栄えする明るさと奥行きを整える作風。",
    scope: ["Retouch", "Color grading", "Group photo", "Before after"],
    links: ["https://x.com/aoi_retouch", "https://aoi-retouch.booth.pm/"],
    completed: 58,
    likes: 840,
    saves: 210,
    repeat: 25,
  },
  "Frame Drift": {
    summary: "ワールド紹介、イベント告知、アバターPVの短尺編集をまとめて相談できる映像クリエイター。",
    style: "テンポ感のあるカット、暗めのステージ、SNSで流しやすい短尺動画が得意。",
    scope: ["Video edit", "Avatar PV", "Event recap", "YouTube"],
    links: ["https://x.com/framedrift_vrc"],
    completed: 22,
    likes: 650,
    saves: 132,
    repeat: 7,
  },
  "Orbit Build": {
    summary: "撮影、展示、イベント用途の軽量ワールド制作を相談できるワールドクリエイター。",
    style: "光と余白を大事にした、写真を撮りたくなるコンパクトな空間設計。",
    scope: ["World build", "Lighting", "Event space", "Optimization"],
    links: ["https://vrchat.com/home/world/orbit-build"],
    completed: 16,
    likes: 540,
    saves: 176,
    repeat: 6,
  },
  "Rin Works": {
    summary: "依頼受付投稿、サムネイル、料金表カードの見せ方を整えるデザイナー。",
    style: "価格、納期、残り枠がぱっと読める、依頼前提の情報設計が得意。",
    scope: ["Commission card", "Thumbnail", "Menu design", "Portfolio"],
    links: ["https://x.com/rinworks_vrc", "https://rinworks.booth.pm/"],
    completed: 36,
    likes: 610,
    saves: 198,
    repeat: 14,
  },
};

const board = document.querySelector("#board");
const profileBoard = document.querySelector("#profileBoard");
const feedView = document.querySelector("#feedView");
const profileView = document.querySelector("#profileView");
const searchInput = document.querySelector("#searchInput");
const chips = [...document.querySelectorAll(".chip")];
const navPills = [...document.querySelectorAll(".nav-pill")];
const emptyState = document.querySelector("#emptyState");
const shuffleButton = document.querySelector("#shuffleButton");
const createButton = document.querySelector("#createButton");
const floatingPost = document.querySelector("#floatingPost");
const dropHint = document.querySelector("#dropHint");
const themeToggle = document.querySelector("#themeToggle");
const avatarButton = document.querySelector("#avatarButton");
const backToFeed = document.querySelector("#backToFeed");
const profileBanner = document.querySelector("#profileBanner");
const profileAvatar = document.querySelector("#profileAvatar");
const profileName = document.querySelector("#profileName");
const profileRole = document.querySelector("#profileRole");
const profileBio = document.querySelector("#profileBio");
const profilePosts = document.querySelector("#profilePosts");
const profileRequest = document.querySelector("#profileRequest");
const profileRating = document.querySelector("#profileRating");
const profileFollow = document.querySelector("#profileFollow");
const profileRequestButton = document.querySelector("#profileRequestButton");
const profileShareButton = document.querySelector("#profileShareButton");
const trustSummaryText = document.querySelector("#trustSummaryText");
const trustStatus = document.querySelector("#trustStatus");
const trustMetrics = document.querySelector("#trustMetrics");
const trustScopeTags = document.querySelector("#trustScopeTags");
const trustStyleNote = document.querySelector("#trustStyleNote");
const trustFeaturedWorks = document.querySelector("#trustFeaturedWorks");
const trustTimelineLabel = document.querySelector("#trustTimelineLabel");
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
const composeDialog = document.querySelector("#composeDialog");
const composeForm = document.querySelector("#composeForm");
const closeCompose = document.querySelector("#closeCompose");
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
let followedCreators = new Set(["Lumi Photo"]);
let currentPin = null;
let activeProfile = null;
let lockedScrollY = 0;
let composeImages = [];
let composeImageIndex = 0;
let myProfile = {
  displayName: "You",
  role: "VRChat creator",
  bio: "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。通常投稿の作成、プロフィール編集、過去投稿の見返しをここから行う想定です。",
  link: "https://vrchat.com/home/user/example",
  visibility: "Public",
  avatar: "",
  banner: "",
};
let pendingAvatarSource = "";
let pendingBannerSource = "";
let avatarDragState = null;
let avatarBaseSize = { width: 260, height: 260, frame: 260 };
let mediaEditMode = "avatar";

function modalIsOpen(modal) {
  return modal.open || modal.hasAttribute("open");
}

function showModalElement(modal) {
  lockPageScroll();
  if (typeof modal.showModal === "function") {
    modal.showModal();
    return;
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
    if (modalIsOpen(dialog) || modalIsOpen(composeDialog) || modalIsOpen(editProfileDialog) || modalIsOpen(avatarEditorDialog)) return;
    unlockPageScroll();
  }, 0);
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function creatorBySlug(slug) {
  return pins.find((pin) => slugify(pin.creator) === slug);
}

function creatorPosts(creator) {
  return pins.filter((pin) => pin.creator === creator);
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

function iconBookmark() {
  return `<svg class="bookmark-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M19 21 12 17 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" /></svg>`;
}

function iconFollow() {
  return `<svg class="follow-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>`;
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
  if (!pin.request.open) return "満枠";
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

function pinCard(pin) {
  const saved = savedPins.has(pin.id);
  const status = requestLabel(pin);
  return `
    <article class="pin-card" tabindex="0" data-id="${pin.id}" aria-label="${pin.title}">
      <div class="pin-media">
        <img src="${pin.image}" alt="${pin.title}" loading="lazy" />
        <div class="pin-overlay">
          ${status ? `<span class="status-chip">${status}</span>` : "<span></span>"}
          <button class="save-dot ${saved ? "is-saved" : ""}" type="button" data-save="${pin.id}" aria-label="${saved ? "Unsave" : "Save"} ${pin.title}">
            ${iconBookmark()}
          </button>
        </div>
        <div class="pin-image-meta">
          <span>${pin.category} · <span class="creator-link-onimage">${pin.creator}</span></span>
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
    savedPins.delete(pinId);
    profileRequestButton.textContent = "投稿を作成";
  } else {
    savedPins.add(pinId);
  }
  syncSaveButtons(pinId);
  if (currentPin?.id === pinId) updateDialogSave();
}

function syncSaveButtons(pinId) {
  const saved = savedPins.has(pinId);
  document.querySelectorAll(`[data-save="${pinId}"]`).forEach((button) => {
    const pin = findPostById(pinId);
    button.classList.toggle("is-saved", saved);
    if (pin) {
      button.setAttribute("aria-label", `${saved ? "Unsave" : "Save"} ${pin.title}`);
    }
  });
}

function updateDialogSave() {
  const saved = savedPins.has(currentPin.id);
  dialogSave.classList.toggle("is-saved", saved);
  dialogSave.setAttribute("aria-label", saved ? "Unsave" : "Save");
  dialogSave.innerHTML = `${iconBookmark()} ${saved ? "Saved" : "Save"}`;
}

function updateFollowButton(button, creator) {
  const following = followedCreators.has(creator);
  button.innerHTML = `${iconFollow()} ${following ? "Following" : "Follow"}`;
  button.setAttribute("aria-label", following ? `Unfollow ${creator}` : `Follow ${creator}`);
  button.classList.toggle("is-saved", following);
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
    : `${categoryLink(currentPin.category)} / 通常投稿`;
  dialogTitle.textContent = currentPin.title;
  dialogDescription.textContent = currentPin.description;
  dialogCreator.innerHTML = `<button class="creator-link" type="button" data-profile="${slugify(currentPin.creator)}">${currentPin.creator}</button>`;
  dialogAvatar.innerHTML = metaSearchLink("Avatar", currentPin.avatar, "Avatar");
  dialogWorld.innerHTML = metaSearchLink("World", currentPin.world, "World");
  dialogTags.innerHTML = tagLinks(currentPin.tags);
  const creatorOpenRequest = primaryOpenRequestForCreator(currentPin.creator);
  dialogRequest.innerHTML = creatorOpenRequest
    ? `
      <strong>依頼受付中</strong>
      <span>${creatorOpenRequest.title} · ${creatorOpenRequest.price}</span>
      <span>${creatorOpenRequest.capacity} · ${creatorOpenRequest.delivery}</span>
      <span>このクリエイターの依頼受付ページへ進む導線を想定。</span>
    `
    : `
      <strong>通常投稿</strong>
      <span>閲覧、検索、保存、プロフィール遷移を中心にした投稿。</span>
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
  }, 180);
}

function renderProfile(creator) {
  const isMine = creator === "You";
  const posts = isMine ? myPosts : creatorPosts(creator);
  const first = posts[0];
  if (!first) return;

  activeProfile = creator;
  feedView.hidden = true;
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
    ? "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。通常投稿の作成、プロフィール編集、過去投稿の見返しをここから行う想定です。"
    : `${first.category}を中心に、VRChat向けの作品投稿をまとめたポートフォリオ。通常投稿を眺めつつ、依頼受付がある場合だけ詳細導線を出す想定です。`;
  profilePosts.textContent = `${posts.length} posts`;
  if (isMine) {
    profileName.textContent = myProfile.displayName;
    profileRole.textContent = `My page / ${myProfile.role} / ${myProfile.visibility}`;
    profileBio.textContent = myProfile.bio;
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
  profileRequest.textContent = isMine
    ? `${savedPins.size} saved`
    : posts.some((pin) => pin.request?.open) ? "依頼受付中" : "通常投稿中心";
  profileRating.textContent = isMine ? "Drafts 2" : "評価 4.9";
  const trust = getTrustProfile(creator, posts, isMine);
  const openRequest = posts.some((pin) => pin.request?.open);
  renderTrustProfile(creator, posts, isMine);
  profileRequest.textContent = openRequest ? "依頼受付中" : `${trust.completed} completed`;
  profileRating.textContent = `${trust.saves} saved`;
  profileBoard.innerHTML = posts.map(pinCard).join("");
  if (isMine) {
    profileFollow.innerHTML = "プロフィール編集";
    profileFollow.setAttribute("aria-label", "Edit profile");
    profileFollow.classList.remove("is-saved");
    profileFollow.textContent = "プロフィール編集";
    profileRequestButton.textContent = "投稿を作成";
    profileRequestButton.textContent = "投稿を作成";
  } else {
    updateFollowButton(profileFollow, creator);
    profileRequestButton.textContent = "依頼受付を見る";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFeed() {
  activeProfile = null;
  profileView.hidden = true;
  profileView.classList.remove("is-mine");
  feedView.hidden = false;
  if (location.hash.startsWith("#profile/") || location.hash === "#me") {
    history.pushState("", document.title, location.pathname + location.search);
  }
  renderPins();
}

function routeFromHash() {
  if (location.hash === "#me") {
    renderProfile("You");
    return;
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
  location.hash = `profile/${slug}`;
  renderProfile(pin.creator);
}

function openMyProfile() {
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  if (modalIsOpen(composeDialog)) closeComposeDialog();
  location.hash = "me";
  renderProfile("You");
}

function normalizeProfileEditorText() {
  document.querySelector("#editProfileTitle").textContent = "プロフィール編集";
  document.querySelector("#openAvatarEditor").textContent = "アイコンを調整";
  document.querySelector("#editProfileNotice").textContent = "保存しました。";
  document.querySelector("#cancelEditProfile").textContent = "キャンセル";
  const displayNameLabel = editDisplayName.closest(".field")?.querySelector("span");
  const roleLabel = editRole.closest(".field")?.querySelector("span");
  const bioLabel = editBio.closest(".field")?.querySelector("span");
  const linkLabel = editLink.closest(".field")?.querySelector("span");
  const visibilityLabel = editVisibility.closest(".field")?.querySelector("span");
  if (displayNameLabel) displayNameLabel.textContent = "表示名";
  if (roleLabel) roleLabel.textContent = "肩書き";
  if (bioLabel) bioLabel.textContent = "自己紹介";
  if (linkLabel) linkLabel.textContent = "リンク";
  if (visibilityLabel) visibilityLabel.textContent = "公開設定";
}

function openEditProfile() {
  normalizeProfileEditorText();
  editProfileNotice.hidden = true;
  pendingAvatarSource = myProfile.avatar;
  pendingBannerSource = myProfile.banner;
  editDisplayName.value = myProfile.displayName;
  editRole.value = myProfile.role;
  editBio.value = myProfile.bio;
  editLink.value = myProfile.link;
  editVisibility.value = myProfile.visibility;
  mediaEditMode = "avatar";
  avatarZoom.value = "1";
  avatarOffsetX.value = "0";
  avatarOffsetY.value = "0";
  updateEditProfilePreview();
  showModalElement(editProfileDialog);
  window.setTimeout(() => editDisplayName.focus(), 140);
}

function closeAvatarEditorDialog() {
  if (!modalIsOpen(avatarEditorDialog) || avatarEditorDialog.classList.contains("is-closing")) return;
  avatarEditorDialog.classList.add("is-closing");
  window.setTimeout(() => {
    avatarEditorDialog.classList.remove("is-closing");
    closeModalElement(avatarEditorDialog);
  }, 180);
}

function refreshAvatarImageLayout() {
  const naturalWidth = avatarCropImage.naturalWidth || 1;
  const naturalHeight = avatarCropImage.naturalHeight || 1;
  const frameWidth = avatarCropFrame.clientWidth || 260;
  const frameHeight = avatarCropFrame.classList.contains("is-banner")
    ? Math.round(frameWidth * 0.36)
    : frameWidth;
  const coverScale = Math.max(frameWidth / naturalWidth, frameHeight / naturalHeight);
  avatarBaseSize = {
    width: Math.round(naturalWidth * coverScale),
    height: Math.round(naturalHeight * coverScale),
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

function saveEditProfile(event) {
  event.preventDefault();
  myProfile = {
    displayName: editDisplayName.value.trim() || "You",
    role: editRole.value.trim() || "VRChat creator",
    bio: editBio.value.trim() || "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。",
    link: editLink.value.trim(),
    visibility: editVisibility.value,
    avatar: pendingAvatarSource,
    banner: pendingBannerSource,
  };
  editProfileNotice.hidden = false;
  applyMyAvatarToChrome();
  renderProfile("You");
  window.setTimeout(closeEditProfileDialog, 260);
}

function updateEditProfilePreview() {
  editPreviewName.textContent = editDisplayName.value.trim() || "You";
  editPreviewBio.textContent = editBio.value.trim() || "自己紹介がここに表示されます。";
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

function openEditProfile() {
  normalizeProfileEditorText();
  editProfileNotice.hidden = true;
  pendingAvatarSource = myProfile.avatar;
  editDisplayName.value = myProfile.displayName;
  editRole.value = myProfile.role;
  editBio.value = myProfile.bio;
  editLink.value = myProfile.link;
  editVisibility.value = myProfile.visibility;
  avatarCropPanel.hidden = !pendingAvatarSource;
  avatarCropImage.src = pendingAvatarSource || "";
  avatarZoom.value = "1";
  avatarOffsetX.value = "0";
  avatarOffsetY.value = "0";
  clampAvatarOffsets();
  updateAvatarCropTransform();
  updateEditProfilePreview();
  editPreviewBio.textContent = editBio.value.trim() || "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。";
  showModalElement(editProfileDialog);
  window.setTimeout(() => editDisplayName.focus(), 140);
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

function refreshAvatarImageLayout() {
  const naturalWidth = avatarCropImage.naturalWidth || 1;
  const naturalHeight = avatarCropImage.naturalHeight || 1;
  const frame = avatarCropFrame.clientWidth || 260;
  const coverScale = Math.max(frame / naturalWidth, frame / naturalHeight);
  avatarBaseSize = {
    width: Math.round(naturalWidth * coverScale),
    height: Math.round(naturalHeight * coverScale),
    frame,
  };
  if (Number(avatarZoom.value || 1) < 1) avatarZoom.value = "1";
}

function clampAvatarOffsets() {
  const zoom = Number(avatarZoom.value || 1);
  const scaledWidth = avatarBaseSize.width * zoom;
  const scaledHeight = avatarBaseSize.height * zoom;
  const limitX = Math.max(0, (scaledWidth - avatarBaseSize.frame) / 2);
  const limitY = Math.max(0, (scaledHeight - avatarBaseSize.frame) / 2);
  avatarOffsetX.value = String(Math.max(-limitX, Math.min(limitX, Number(avatarOffsetX.value || 0))));
  avatarOffsetY.value = String(Math.max(-limitY, Math.min(limitY, Number(avatarOffsetY.value || 0))));
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

function loadAvatarEditorImage(file) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (mediaEditMode === "banner") {
      pendingBannerSource = reader.result;
      avatarCropImage.src = pendingBannerSource;
    } else {
      pendingAvatarSource = reader.result;
      avatarCropImage.src = pendingAvatarSource;
    }
    avatarCropPanel.hidden = false;
    avatarZoom.value = "1";
    avatarOffsetX.value = "0";
    avatarOffsetY.value = "0";
    window.setTimeout(() => {
      refreshAvatarImageLayout();
      clampAvatarOffsets();
      updateAvatarCropTransform();
    }, 0);
    updateEditProfilePreview();
  });
  reader.readAsDataURL(file);
}

async function cropAvatarToDataUrl() {
  if (!pendingAvatarSource) return "";
  const image = new Image();
  image.src = pendingAvatarSource;
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f7f5ef";
  ctx.fillRect(0, 0, size, size);

  const zoom = Number(avatarZoom.value || 1);
  clampAvatarOffsets();
  const offsetX = Number(avatarOffsetX.value || 0) * (size / 260);
  const offsetY = Number(avatarOffsetY.value || 0) * (size / 260);
  const baseScale = Math.max(size / image.width, size / image.height);
  const drawWidth = image.width * baseScale * zoom;
  const drawHeight = image.height * baseScale * zoom;
  const drawX = (size - drawWidth) / 2 + offsetX;
  const drawY = (size - drawHeight) / 2 + offsetY;

  ctx.save();
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  ctx.restore();

  return canvas.toDataURL("image/jpeg", 0.86);
}

function saveEditProfile(event) {
  event.preventDefault();
  cropAvatarToDataUrl().then((avatar) => {
    myProfile = {
    displayName: editDisplayName.value.trim() || "You",
    role: editRole.value.trim() || "VRChat creator",
    bio: editBio.value.trim() || "自己紹介がここに表示されます。",
    link: editLink.value.trim(),
    visibility: editVisibility.value,
      avatar,
    };
    pendingAvatarSource = avatar;
    editProfileNotice.hidden = false;
    applyMyAvatarToChrome();
    renderProfile("You");
    window.setTimeout(closeEditProfileDialog, 260);
  }).catch(() => {
    editProfileNotice.hidden = false;
    editProfileNotice.textContent = "画像の読み込みに失敗しました。別の写真を選んでください。";
  });
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

function toggleTheme() {
  const current = document.documentElement.dataset.theme || "light";
  setTheme(current === "dark" ? "light" : "dark");
}

function openComposeHint() {
  if (modalIsOpen(dialog)) closePinDialog();
  document.body.classList.remove("is-dragging");
  dropHint.hidden = true;
  composeNotice.hidden = true;
  if (composeCategory.value === "Commission") composeCategory.value = "Photo";
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

function updateComposePreview() {
  const category = composeCategory.value || "Avatar";
  const title = composePostTitle.value.trim() || "新しい投稿タイトル";
  const tags = composeTags.value.trim() || "#vrchat #portfolio";
  const creator = "You";

  composePreviewCard.innerHTML = `
    <span>${category} · ${creator}</span>
    <strong>${title}</strong>
    <small>${tags}</small>
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
  composeNotice.textContent = "通常投稿のモックを作成しました。実装時は画像、本文、タグ、Avatar/World情報を投稿APIへ送信します。";
  updateComposePreview();
}

let ignoreNextBoardClick = false;
let boardTouchStart = null;
const boardTapMoveTolerance = 4;

function handleBoardClick(event) {
  if (ignoreNextBoardClick) {
    ignoreNextBoardClick = false;
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
  if (card) openPin(Number(card.dataset.id), card);
}

function handleBoardTouchStart(event) {
  if (event.touches.length !== 1) {
    boardTouchStart = null;
    return;
  }
  if (event.target.closest("[data-save], [data-tag], [data-profile]")) {
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
  if (event.target.closest("[data-save], [data-tag], [data-profile]")) return;

  const touch = event.changedTouches?.[0];
  if (!touch) return;

  const deltaX = Math.abs(touch.clientX - touchStart.x);
  const deltaY = Math.abs(touch.clientY - touchStart.y);
  if (deltaX > boardTapMoveTolerance || deltaY > boardTapMoveTolerance) return;

  const card = event.target.closest(".pin-card");
  if (!card || card !== touchStart.card) return;

  ignoreNextBoardClick = true;
  event.preventDefault();
  openPin(Number(card.dataset.id), card);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => setCategory(chip.dataset.category));
});

navPills.forEach((pill) => {
  pill.addEventListener("click", () => setView(pill.dataset.view));
});

searchInput.addEventListener("input", () => renderPins());
shuffleButton.addEventListener("click", shufflePins);
createButton.addEventListener("click", openComposeHint);
floatingPost.addEventListener("click", openComposeHint);
themeToggle.addEventListener("click", toggleTheme);
avatarButton.addEventListener("click", openMyProfile);
backToFeed.addEventListener("click", showFeed);
profileRequestButton.addEventListener("click", () => {
  if (activeProfile === "You") {
    openComposeHint();
    return;
  }
  setView("requests");
  showFeed();
});
profileShareButton?.addEventListener("click", shareCurrentProfile);
trustFeaturedWorks?.addEventListener("click", (event) => {
  const featured = event.target.closest("[data-featured-id]");
  if (!featured) return;
  openPin(Number(featured.dataset.featuredId), featured);
});

board.addEventListener("click", handleBoardClick);
profileBoard.addEventListener("click", handleBoardClick);
board.addEventListener("touchstart", handleBoardTouchStart, { capture: true, passive: true });
profileBoard.addEventListener("touchstart", handleBoardTouchStart, { capture: true, passive: true });
board.addEventListener("touchmove", handleBoardTouchMove, { capture: true, passive: true });
profileBoard.addEventListener("touchmove", handleBoardTouchMove, { capture: true, passive: true });
board.addEventListener("touchend", handleBoardTouchEnd, { capture: true, passive: false });
profileBoard.addEventListener("touchend", handleBoardTouchEnd, { capture: true, passive: false });

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
  if (modalIsOpen(dialog)) closeModalElement(dialog);
  setView("requests");
  showFeed();
  searchInput.value = currentPin.creator;
  renderPins();
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

profileFollow.addEventListener("click", () => {
  if (!activeProfile) return;
  if (activeProfile === "You") {
    openEditProfile();
    return;
  }
  if (followedCreators.has(activeProfile)) {
    followedCreators.delete(activeProfile);
  } else {
    followedCreators.add(activeProfile);
  }
  updateFollowButton(profileFollow, activeProfile);
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

function renderProfileLinks(url) {
  const linksRow = ensureProfileLinksRow();
  if (!url) {
    linksRow.innerHTML = "";
    linksRow.hidden = true;
    return;
  }
  const kind = detectLinkKind(url);
  const label = kind === "x" ? "X" : kind === "booth" ? "BOOTH" : kind === "vrchat" ? "VRChat" : "Link";
  linksRow.hidden = false;
  linksRow.innerHTML = `<a class="profile-link-button" href="${url}" target="_blank" rel="noreferrer" aria-label="${label}を開く">${linkIconMarkup(kind)}<span>${label}</span></a>`;
}

function renderProfile(creator) {
  const isMine = creator === "You";
  const posts = isMine ? myPosts : creatorPosts(creator);
  const first = posts[0];
  if (!first) return;

  activeProfile = creator;
  feedView.hidden = true;
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
    ? "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。通常投稿の作成、プロフィール編集、過去投稿の見返しをここから行う想定です。"
    : `${first.category}を中心に、VRChat向けの作品投稿をまとめたポートフォリオ。通常投稿を眺めつつ、依頼受付がある場合は詳細確認へ進む想定です。`;
  profilePosts.textContent = `${posts.length} posts`;
  if (isMine) {
    profileName.textContent = myProfile.displayName;
    profileRole.textContent = `My page / ${myProfile.role} / ${myProfile.visibility}`;
    profileBio.textContent = myProfile.bio;
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
  renderProfileLinks(isMine ? myProfile.link : "");
  profileRequest.textContent = isMine
    ? `${savedPins.size} saved`
    : posts.some((pin) => pin.request?.open) ? "依頼受付中" : "通常投稿";
  profileRating.textContent = isMine ? "Drafts 2" : "評価 4.9";
  profileBoard.innerHTML = posts.map(pinCard).join("");
  if (isMine) {
    profileFollow.setAttribute("aria-label", "Edit profile");
    profileFollow.classList.remove("is-saved");
    profileFollow.textContent = "プロフィール編集";
    profileRequestButton.textContent = "投稿を作成";
  } else {
    updateFollowButton(profileFollow, creator);
    profileRequestButton.textContent = "依頼受付を見る";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getCurrentMediaSource() {
  return mediaEditMode === "banner"
    ? (pendingBannerSource || myProfile.banner || "")
    : (pendingAvatarSource || myProfile.avatar || "");
}

function normalizeProfileEditorText() {
  document.querySelector("#editProfileTitle").textContent = "プロフィール編集";
  if (openAvatarEditorButton) openAvatarEditorButton.textContent = "アイコンを調整";
  if (openBannerEditorButton) openBannerEditorButton.textContent = "バナーを調整";
  if (editProfileNotice) editProfileNotice.textContent = "保存しました。";
  if (cancelEditProfile) cancelEditProfile.textContent = "キャンセル";

  const labels = [
    [editDisplayName, "表示名"],
    [editRole, "肩書き"],
    [editBio, "自己紹介"],
    [editLink, "リンク"],
    [editVisibility, "公開設定"],
  ];
  labels.forEach(([input, text]) => {
    const label = input?.closest(".field")?.querySelector("span");
    if (label) label.textContent = text;
  });

  if (avatarEditorTitle) avatarEditorTitle.textContent = mediaEditMode === "banner" ? "バナーを調整" : "アイコンを調整";
  if (avatarEditorEyebrow) avatarEditorEyebrow.textContent = mediaEditMode === "banner" ? "Profile banner" : "Profile icon";
  if (avatarChooseImage) avatarChooseImage.textContent = "画像を選ぶ";
  if (avatarEditorDone) avatarEditorDone.textContent = "完了";
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

function openEditProfile() {
  mediaEditMode = "avatar";
  normalizeProfileEditorText();
  editProfileNotice.hidden = true;
  pendingAvatarSource = myProfile.avatar;
  pendingBannerSource = myProfile.banner;
  editDisplayName.value = myProfile.displayName;
  editRole.value = myProfile.role;
  editBio.value = myProfile.bio;
  editLink.value = myProfile.link;
  editVisibility.value = myProfile.visibility;
  avatarZoom.value = "1";
  avatarOffsetX.value = "0";
  avatarOffsetY.value = "0";
  updateEditProfilePreview();
  showModalElement(editProfileDialog);
  window.setTimeout(() => editDisplayName.focus(), 140);
}

function openMediaEditor(mode) {
  mediaEditMode = mode;
  normalizeProfileEditorText();
  avatarCropFrame.classList.toggle("is-banner", mode === "banner");
  avatarCropPanel.hidden = !getCurrentMediaSource();
  avatarCropImage.src = getCurrentMediaSource();
  avatarZoom.value = "1";
  avatarOffsetX.value = "0";
  avatarOffsetY.value = "0";
  refreshAvatarImageLayout();
  clampAvatarOffsets();
  updateAvatarCropTransform();
  showModalElement(avatarEditorDialog);
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

async function cropBannerToDataUrl() {
  const source = pendingBannerSource;
  if (!source) return "";
  const image = new Image();
  image.src = source;
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  const { sx, sy, sw, sh } = getCropRectFromPreview(image.width, image.height);
  const width = 1600;
  const height = 560;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, sx, sy, sw, sh, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", 0.9);
}

function saveEditProfile(event) {
  event.preventDefault();
  myProfile = {
    displayName: editDisplayName.value.trim() || "You",
    role: editRole.value.trim() || "VRChat creator",
    bio: editBio.value.trim() || "投稿した作品、下書き、保存したアイデアをまとめて確認するマイページ。",
    link: editLink.value.trim(),
    visibility: editVisibility.value,
    avatar: pendingAvatarSource,
    banner: pendingBannerSource,
  };
  editProfileNotice.hidden = false;
  applyMyAvatarToChrome();
  renderProfile("You");
  window.setTimeout(closeEditProfileDialog, 260);
}

async function applyMediaEditorResult() {
  if (mediaEditMode === "banner") {
    pendingBannerSource = await cropBannerToDataUrl();
  } else {
    pendingAvatarSource = await cropAvatarToDataUrl();
  }
  updateEditProfilePreview();
  renderProfile("You");
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

function normalizeProfileEditorText() {
  document.querySelector("#editProfileTitle").textContent = "プロフィール編集";
  document.querySelector("#openAvatarEditor").textContent = "アイコンを調整";
  if (openBannerEditorButton) openBannerEditorButton.textContent = "バナーを調整";
  document.querySelector("#editProfileNotice").textContent = "保存しました。";
  document.querySelector("#cancelEditProfile").textContent = "キャンセル";
  const displayNameLabel = editDisplayName.closest(".field")?.querySelector("span");
  const roleLabel = editRole.closest(".field")?.querySelector("span");
  const bioLabel = editBio.closest(".field")?.querySelector("span");
  const linkLabel = editLink.closest(".field")?.querySelector("span");
  const visibilityLabel = editVisibility.closest(".field")?.querySelector("span");
  if (displayNameLabel) displayNameLabel.textContent = "表示名";
  if (roleLabel) roleLabel.textContent = "肩書き";
  if (bioLabel) bioLabel.textContent = "自己紹介";
  if (linkLabel) linkLabel.textContent = "リンク";
  if (visibilityLabel) visibilityLabel.textContent = "公開設定";
  if (avatarEditorTitle) avatarEditorTitle.textContent = mediaEditMode === "banner" ? "バナーを調整" : "アイコンを調整";
  if (avatarEditorEyebrow) avatarEditorEyebrow.textContent = mediaEditMode === "banner" ? "Profile banner" : "Profile icon";
  if (avatarChooseImage) avatarChooseImage.textContent = "画像を選ぶ";
  if (avatarEditorDone) avatarEditorDone.textContent = "完了";
}

window.addEventListener("pointermove", moveAvatarDrag);
window.addEventListener("pointerup", endAvatarDrag);
window.addEventListener("pointercancel", endAvatarDrag);

closeCompose.addEventListener("click", closeComposeDialog);

composeDialog.addEventListener("click", (event) => {
  if (event.target === composeDialog) closeComposeDialog();
});

composeDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeComposeDialog();
});

composeForm.addEventListener("submit", handleMockSubmit);

saveDraftButton.addEventListener("click", () => {
  composeNotice.hidden = false;
  composeNotice.textContent = "下書き保存のモックです。バックエンド接続後はドラフトAPIへ保存する想定です。";
});

[composePostTitle, composeCategory, composeAvatar, composeWorld, composeTags, composeDescription].forEach((input) => {
  input.addEventListener("input", updateComposePreview);
  input.addEventListener("change", updateComposePreview);
});

composeImage.addEventListener("change", () => {
  loadComposeImages(composeImage.files || [], false);
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

window.addEventListener("hashchange", routeFromHash);
window.addEventListener("dragenter", (event) => {
  if (!event.dataTransfer?.types?.includes("Files")) return;
  if (modalIsOpen(composeDialog)) return;
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
  if (event.dataTransfer?.files?.length) {
    loadComposeImages(event.dataTransfer.files);
  }
  if (!modalIsOpen(composeDialog)) openComposeHint();
});

setTheme(localStorage.getItem("vrc-sns-theme") || "light");
applyMyAvatarToChrome();
normalizeProfileEditorText();
updateComposePreview();
renderPins();
routeFromHash();

function ensureEditLinkList() {
  let list = document.querySelector("#editLinkList");
  if (list) return list;

  const linkField = editLink.closest(".field");
  const visibilityField = editVisibility.closest(".field");
  if (visibilityField && linkField && visibilityField.nextElementSibling !== linkField) {
    visibilityField.insertAdjacentElement("afterend", linkField);
  }

  linkField.classList.add("wide");
  list = document.createElement("div");
  list.id = "editLinkList";
  list.className = "edit-link-list";
  linkField.insertAdjacentElement("afterend", list);
  return list;
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
  const row = document.createElement("label");
  row.className = "field wide edit-link-field";
  row.innerHTML = `<span>リンク</span><input class="edit-link-input" type="url" value="${value.replace(/"/g, "&quot;")}" />`;
  list.appendChild(row);
  const input = row.querySelector("input");
  input.addEventListener("input", handleProfileLinkInputChange);
  input.addEventListener("change", handleProfileLinkInputChange);
  return input;
}

function handleProfileLinkInputChange() {
  const inputs = [...document.querySelectorAll(".edit-link-input")];
  const last = inputs.at(-1);
  if (last && last.value.trim()) {
    appendProfileLinkInput("");
  }
}

function syncProfileLinkInputs(values) {
  const list = ensureEditLinkList();
  list.innerHTML = "";
  const links = values.filter(Boolean);
  if (!links.length) {
    appendProfileLinkInput("");
    return;
  }
  links.forEach((value) => appendProfileLinkInput(value));
  appendProfileLinkInput("");
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
    return `<a class="profile-link-button" href="${url}" target="_blank" rel="noreferrer" aria-label="${label}を開く">${linkIconMarkup(kind)}<span>${label}</span></a>`;
  }).join("");
}

function getTrustProfile(creator, posts, isMine) {
  const fallback = trustProfiles[creator] || {};
  return {
    summary: fallback.summary || `${creator}の投稿、依頼受付状況、代表作、外部リンクをまとめて確認できる公開プロフィール。`,
    style: fallback.style || `${posts[0]?.category || "VRChat"}を中心に、過去作品から作風を確認できる構成です。`,
    scope: fallback.scope || [...new Set(posts.map((post) => post.category))],
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

function trustScore(posts, trust) {
  return Math.round(
    posts.length * 4 +
    trust.completed * 8 +
    trust.saves +
    trust.repeat * 10 +
    trust.likes * 0.2
  );
}

function trustedLevel(score) {
  if (score >= 650) {
    return {
      label: "Trusted User",
      key: "trusted",
      note: "実績、保存、リピートが十分に積み上がった依頼しやすいクリエイター。",
    };
  }
  if (score >= 380) {
    return {
      label: "Known User",
      key: "known",
      note: "複数の実績と反応が見えていて、作風を判断しやすい状態。",
    };
  }
  if (score >= 180) {
    return {
      label: "User",
      key: "user",
      note: "投稿と保存が増えはじめ、活動内容が見えやすくなっている状態。",
    };
  }
  if (score >= 45) {
    return {
      label: "New User",
      key: "new",
      note: "プロフィールと投稿が揃いはじめた初期の公開アカウント。",
    };
  }
  return {
    label: "Visitor",
    key: "visitor",
    note: "まだ実績が少ないため、代表作や外部リンクの追加が効く状態。",
  };
}

function renderTrustProfile(creator, posts, isMine) {
  const trust = getTrustProfile(creator, posts, isMine);
  const openRequest = posts.some((post) => post.request?.open);
  const featured = posts.slice(0, 3);
  const links = [...new Set(trust.links.filter(Boolean))];
  const score = trustScore(posts, trust);
  const level = trustedLevel(score);

  trustSummaryText.textContent = trust.summary;
  trustStatus.innerHTML = `
    <strong>${openRequest ? "依頼受付中" : "通常投稿中心"}</strong>
    <span>${openRequest ? "料金・納期・受付枠を投稿から確認できます。" : "作風と過去作品を見てから相談できます。"}</span>
  `;
  trustStatus.innerHTML = `
    <div class="trust-rank trust-rank--${level.key}">
      <small>Trusted level</small>
      <strong>${level.label}</strong>
      <span>${score} pts</span>
    </div>
    <strong>${openRequest ? "依頼受付中" : "通常投稿中心"}</strong>
    <span>${level.note}</span>
  `;
  trustMetrics.innerHTML = [
    formatMetric(score, "Trust score"),
    formatMetric(posts.length, "投稿"),
    formatMetric(trust.completed, "完了実績"),
    formatMetric(trust.likes, "いいね"),
    formatMetric(trust.saves, "保存"),
    formatMetric(trust.repeat, "リピート"),
  ].join("");
  trustScopeTags.innerHTML = trust.scope.map((item) => `<span>${item}</span>`).join("");
  trustStyleNote.textContent = trust.style;
  trustTimelineLabel.textContent = `Latest ${featured.length} / ${posts.length} works`;
  trustFeaturedWorks.innerHTML = featured.map((post) => `
    <button class="featured-work" type="button" data-featured-id="${post.id}">
      <img src="${post.image}" alt="${post.title}" loading="lazy" />
      <span>${post.category}</span>
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

async function shareCurrentProfile() {
  const url = currentProfileUrl();
  const label = activeProfile ? `${activeProfile} のプロフィール` : "VRC SNS";

  try {
    if (navigator.share) {
      await navigator.share({ title: label, text: "VRChat creator profile", url });
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    }
    profileShareButton.textContent = "コピー済み";
  } catch {
    profileShareButton.textContent = "URLをコピー";
    return;
  }

  window.setTimeout(() => {
    profileShareButton.textContent = "URLをコピー";
  }, 1400);
}

function normalizeProfileEditorText() {
  document.querySelector("#editProfileTitle").textContent = "プロフィール編集";
  if (openAvatarEditorButton) openAvatarEditorButton.textContent = "アイコンを調整";
  if (openBannerEditorButton) openBannerEditorButton.textContent = "バナーを調整";
  if (editProfileNotice) editProfileNotice.textContent = "保存しました。";
  if (cancelEditProfile) cancelEditProfile.textContent = "キャンセル";

  const labels = [
    [editDisplayName, "表示名"],
    [editRole, "肩書き"],
    [editBio, "自己紹介"],
    [editVisibility, "公開設定"],
    [editLink, "リンク"],
  ];
  labels.forEach(([input, text]) => {
    const label = input?.closest(".field")?.querySelector("span");
    if (label) label.textContent = text;
  });

  document.querySelectorAll(".edit-link-field span").forEach((label) => {
    label.textContent = "リンク";
  });

  if (avatarEditorTitle) avatarEditorTitle.textContent = mediaEditMode === "banner" ? "バナーを調整" : "アイコンを調整";
  if (avatarEditorEyebrow) avatarEditorEyebrow.textContent = mediaEditMode === "banner" ? "Profile banner" : "Profile icon";
  if (avatarChooseImage) avatarChooseImage.textContent = "画像を選ぶ";
  if (avatarEditorDone) avatarEditorDone.textContent = "完了";
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
  const posts = isMine ? myPosts : creatorPosts(creator);
  const first = posts[0];
  if (!first) return;

  activeProfile = creator;
  feedView.hidden = true;
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
    : `${first.category}を中心に、VRChat向けの作品投稿をまとめたポートフォリオ。通常投稿を眺めつつ、依頼受付がある場合は詳細確認へ進む想定です。`;
  profilePosts.textContent = `${posts.length} posts`;

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
  profileRequest.textContent = isMine ? `${savedPins.size} saved` : posts.some((pin) => pin.request?.open) ? "依頼受付中" : "通常投稿";
  profileRating.textContent = isMine ? "Drafts 2" : "評価 4.9";
  const trust = getTrustProfile(creator, posts, isMine);
  const openRequest = posts.some((pin) => pin.request?.open);
  renderTrustProfile(creator, posts, isMine);
  profileRequest.textContent = openRequest ? "依頼受付中" : `${trust.completed} completed`;
  profileRating.textContent = `${trust.saves} saved`;
  profileBoard.innerHTML = posts.map(pinCard).join("");

  if (isMine) {
    profileFollow.setAttribute("aria-label", "Edit profile");
    profileFollow.classList.remove("is-saved");
    profileFollow.textContent = "プロフィール編集";
    profileRequestButton.textContent = "投稿を作成";
  } else {
    updateFollowButton(profileFollow, creator);
    profileRequestButton.textContent = "依頼受付を見る";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
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
  applyMyAvatarToChrome();
  renderProfile("You");
  window.setTimeout(closeEditProfileDialog, 260);
}

ensureEditLinkList();
