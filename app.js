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
const backToFeed = document.querySelector("#backToFeed");
const profileName = document.querySelector("#profileName");
const profileRole = document.querySelector("#profileRole");
const profileBio = document.querySelector("#profileBio");
const profilePosts = document.querySelector("#profilePosts");
const profileRequest = document.querySelector("#profileRequest");
const profileRating = document.querySelector("#profileRating");
const profileFollow = document.querySelector("#profileFollow");
const profileRequestButton = document.querySelector("#profileRequestButton");
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

let activeCategory = "All";
let activeView = "discover";
let savedPins = new Set([3, 7]);
let followedCreators = new Set(["Lumi Photo"]);
let currentPin = null;
let activeProfile = null;

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function creatorBySlug(slug) {
  return pins.find((pin) => slugify(pin.creator) === slug);
}

function creatorPosts(creator) {
  return pins.filter((pin) => pin.creator === creator);
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
  } else {
    savedPins.add(pinId);
  }
  syncSaveButtons(pinId);
  if (currentPin?.id === pinId) updateDialogSave();
}

function syncSaveButtons(pinId) {
  const saved = savedPins.has(pinId);
  document.querySelectorAll(`[data-save="${pinId}"]`).forEach((button) => {
    const pin = pins.find((item) => item.id === pinId);
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
  currentPin = pins.find((pin) => pin.id === pinId);
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
  dialog.showModal();
}

function closePinDialog() {
  if (!dialog.open || dialog.classList.contains("is-closing")) return;
  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    dialog.classList.remove("is-closing");
    dialog.close();
  }, 180);
}

function renderProfile(creator) {
  const posts = creatorPosts(creator);
  const first = posts[0];
  if (!first) return;

  activeProfile = creator;
  feedView.hidden = true;
  profileView.hidden = false;
  profileName.textContent = creator;
  profileRole.textContent = first.role;
  profileBio.textContent = `${first.category}を中心に、VRChat向けの作品投稿をまとめたポートフォリオ。通常投稿を眺めつつ、依頼受付がある場合だけ詳細導線を出す想定です。`;
  profilePosts.textContent = `${posts.length} posts`;
  profileRequest.textContent = posts.some((pin) => pin.request?.open) ? "依頼受付中" : "通常投稿中心";
  profileRating.textContent = "評価 4.9";
  profileBoard.innerHTML = posts.map(pinCard).join("");
  updateFollowButton(profileFollow, creator);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFeed() {
  activeProfile = null;
  profileView.hidden = true;
  feedView.hidden = false;
  if (location.hash.startsWith("#profile/")) {
    history.pushState("", document.title, location.pathname + location.search);
  }
  renderPins();
}

function routeFromHash() {
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
  if (dialog.open) dialog.close();
  location.hash = `profile/${slug}`;
  renderProfile(pin.creator);
}

function searchByTag(tag) {
  if (dialog.open) closePinDialog();
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
  if (dialog.open) closePinDialog();
  activeProfile = null;
  profileView.hidden = true;
  feedView.hidden = false;
  searchInput.value = "";
  setView("discover");
  setCategory(category);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function searchByMeta(category, query) {
  if (dialog.open) closePinDialog();
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
  searchInput.focus();
  searchInput.placeholder = "投稿オーバーレイはバックエンド連携後に実装";
}

function handleBoardClick(event) {
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
backToFeed.addEventListener("click", showFeed);
profileRequestButton.addEventListener("click", () => {
  setView("requests");
  showFeed();
});

board.addEventListener("click", handleBoardClick);
profileBoard.addEventListener("click", handleBoardClick);

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
  if (dialog.open) dialog.close();
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
  if (followedCreators.has(activeProfile)) {
    followedCreators.delete(activeProfile);
  } else {
    followedCreators.add(activeProfile);
  }
  updateFollowButton(profileFollow, activeProfile);
});

window.addEventListener("hashchange", routeFromHash);
window.addEventListener("dragenter", () => {
  dropHint.hidden = false;
});
window.addEventListener("dragover", (event) => {
  event.preventDefault();
});
window.addEventListener("dragleave", (event) => {
  if (event.clientX <= 0 || event.clientY <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight) {
    dropHint.hidden = true;
  }
});
window.addEventListener("drop", (event) => {
  event.preventDefault();
  dropHint.hidden = true;
  openComposeHint();
});

setTheme(localStorage.getItem("vrc-sns-theme") || "light");
renderPins();
routeFromHash();
