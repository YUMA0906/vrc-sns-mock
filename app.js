
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
