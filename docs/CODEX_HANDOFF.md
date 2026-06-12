# Veacon Mock Codex Handoff

Last updated: 2026-06-12

This document is intended for another Codex instance that needs to understand and continue the current frontend prototype without relying on chat history.

## Project Summary

Veacon is a static frontend mock for a VRChat creator platform. It combines:

- Pinterest-like visual discovery for VRChat posts.
- Creator profile pages that act as trust pages, not just name cards.
- Commission request pages, creator-side request management, and requester-side My Requests.
- Event discovery and user-submitted event applications.
- Circle/community features with circle-only posting and circle management.
- Membership support for creators and circles.
- Notifications, settings, admin review, and backend-spec reference screens.

The prototype is currently implemented as a single static app:

- `index.html`: all view containers, dialogs, buttons, and form skeletons.
- `styles.css`: all layout, visual design, themes, responsive rules, hover states, modal layers.
- `app.js`: mock data, route handling, render functions, local state, validation, and interactions.

There is no real backend yet. All data is in-memory mock data in `app.js`, with selected UI preferences using `localStorage`.

## How To Run

From the repo root:

```powershell
python -m http.server 4188
```

Then open:

```text
http://127.0.0.1:4188/index.html
```

The app also works via `file://`, but local server mode is better for browser QA.

## Deployment Context

The repo is intended to be published to GitHub Pages. The canonical public URL used in OGP metadata is:

```text
https://yuma0906.github.io/vrc-sns-mock/
```

There is also an `outputs` folder outside this repo at:

```text
C:\Users\yumas\Documents\Codex\2026-06-03\web\outputs
```

When local file preview needs to reflect changes, copy `index.html`, `app.js`, and `styles.css` from `work\vrc-sns-mock` to `outputs`.

## Update Policy For Future Codex Runs

When the user asks to push, do a minimal sanity check unless they explicitly request full QA:

```powershell
node --check app.js
git diff --check
git status --short
```

The user has stated that browser-runtime failures can be ignored. Do not block a push only because Codex browser automation is unavailable.

Update this document in the same commit whenever a change affects:

- A route or page.
- A modal or major workflow.
- Data structures in `app.js`.
- Validation rules.
- Responsive behavior.
- Button/menu behavior.
- Any feature another Codex would need to preserve.

## Recent Changes

- 2026-06-12: Adjusted requester-side My Requests cards for smartphone layouts. The mobile CSS now removes the previous fixed `560px` minimum card width, constrains card content to the viewport, wraps metadata safely, and keeps status/turn pills readable without horizontal overflow.
- 2026-06-12: Updated the stylesheet cache key in `index.html` so local/browser previews load the corrected mobile card styles.
- 2026-06-12: Added mobile account-menu scroll locking. When the smartphone account menu is open, the underlying home/feed page is fixed at its current scroll position and restored when the menu closes, while the menu itself has a capped height and remains internally scrollable. The document root is also locked and background `touchmove` is prevented outside the menu to avoid mobile browser scroll leakage.

Do not update this document for tiny color-only tweaks unless the tweak reflects a durable design rule.

## Core Product Direction

The design target is:

- Modern, minimal, Apple/Pinterest-adjacent.
- VRChat-specific, not a generic social app.
- Visual-first browsing with cards, thumbnails, creator pages, and trust proof.
- Creator monetization through commissions and memberships.
- Safe operations around ZIP uploads, request acceptance, reporting, and account deletion.
- Mobile-first enough for testers, but PC should stay polished.

Avoid cheap-looking gradients, oversized marketing sections, vague explanatory clutter, and cramped mobile controls.

## Major Routes

Routing is hash-based in `routeFromHash()` in `app.js`.

| Route | Purpose |
|---|---|
| `#` | Home feed with Featured Events, rotating hero word, saved/search tabs, visual post grid. |
| `#post/{id}` | Opens home feed and then opens the post modal for the matching post. |
| `#profile/{slug}` | Public creator profile page. |
| `#me` | Current user's profile page. |
| `#request/{creatorSlug}/{postId}` | Commission request page for a creator/request post. |
| `#request-manager` | Creator-side request management overview. |
| `#request-manager/{id}` | Request detail and chat/workflow screen. |
| `#my-requests` | Requester-side sent request overview. |
| `#my-requests/{id}` | Requester-side sent request detail, next action, chat, delivery, review, and report screen. |
| `#notifications` | Notification list with unread/read states and filtering actions. |
| `#settings` | App/account settings. |
| `#service` | Service guide and FAQ-style explanation. |
| `#mission` | Service mission/philosophy page. |
| `#events` | Event discovery and event application entry point. |
| `#event/{index}` | Event detail page. |
| `#circles` | Circle top page. |
| `#circle/{circleId}` | Circle detail/posts context. |
| `#circle-manager/{circleId}` | Circle management page. |
| `#admin` | Admin review mock screen. |
| `#backend-spec` | In-app backend data specification reference. |
| `#subscriptions` | Membership page. Display wording should be "メンバーシップ", not "サブスク". |

## Main Mock Data

All primary mock data lives near the top of `app.js`.

### `vrchatImages`

Central image URL registry. Images are currently remote VRChat/Steam/VRChat press images. Broken image handling adds `is-broken-image`.

### `pins`

Post data for the home feed and profile archives.

Important fields:

- `id`
- `title`
- `category`
- `creator`
- `role`
- `avatar`
- `world`
- `tags`
- `request`
- `description`
- `image`
- `circleId`
- `visibility`
- reply/comment permissions where applicable

Post visibility concepts:

- Normal public/follower-only posts.
- Circle posts linked by `circleId`.
- Membership-only posts with `visibility: "SubscriberOnly"`.
- Sensitive flags are available in compose UI for R18 and gore content.

### `circleGroups`

Circle definitions. Current terminology must be "サークル"; avoid "グループ" in UI copy.

Important fields:

- `id`
- `name`
- `owner`
- `cover`
- `description`
- `tags`
- `members`
- `visibility`: `"承認制"` or `"自由参加OK"`
- `eventRule`
- `postAudience`: `"Public"`, `"CircleOnly"`, or `"Both"`
- `supportPayout`: `"owner"` or `"split"`

Circle creation is immediate. It does not require admin approval.

### `circleManagementData`

Circle manager mock state:

- owner / manager / member roles.
- pending join requests.
- role promotion.
- owner transfer.
- kick.
- leave circle if not owner.

Owner-only behavior:

- Owner transfer menu should only show for the owner.
- Co-managers can view management but cannot transfer ownership.

### `trustProfiles`

Creator trust page data:

- `summary`
- `style`
- `scope`
- trusted external `links`
- completed request count
- likes
- saves
- repeat count

Trust level calculation is in `trustScore()` and `trustedLevel()`.

`Veacon運営` is an official account. Its trust level is `Official`, with a special visual style.

### `notifications`

Notification list with:

- unread/read state.
- target routing.
- compact display.
- unread count badge.
- read notification deletion.

Notification target behavior:

- Opening something from notifications should make its Back path return to notifications.

### `adminQueues`

Admin-side queues:

- Event applications.
- Reports.

Circle creation and circle join requests are not admin-managed. Circle owners/managers handle circle membership.

### `requestManagerItems`

Creator-side request records.

Statuses:

- `pending`: not accepted yet. No chat panel until accepted.
- `accepted`: request accepted, work not started.
- `in_progress`: creator has started work.
- `awaiting_review`: delivery submitted; waiting for requester review. Creator should not see review or retake buttons at this stage.
- `awaiting_your_review`: requester reviewed; creator must review the requester.
- `completed`: both sides done.

Request cards sort by deadline by default. Pending requests can sort by amount descending.

### `myRequestItems`

Requester-side sent request records for `#my-requests`.

This is intentionally separate from `requestManagerItems`:

- Creator-side request manager answers: "What requests did I receive, and what must I do as the creator?"
- My Requests answers: "What did I send, where is it now, and what do I need to do next as the requester?"

Requester-side statuses:

- `draft`: request draft before sending.
- `sent`: sent and waiting for creator response.
- `consulting`: pre-acceptance consultation, with turn badges.
- `estimate`: estimate/payment-before-confirmation check needed.
- `in_progress`: creator is working.
- `review`: delivery confirmation and requester review turn. Retake returns it to `in_progress`.
- `creator_review`: requester has reviewed; waiting for creator review.
- `completed`: completed request history.
- `closed`: canceled, rejected, or reported request.

The `todo` tab is derived, not stored. It groups requests where the requester needs to act, currently `estimate`, `consulting`, and `review`.

My Requests and creator-side request manager currently use text-first list/detail layouts with no request thumbnails.

### Membership Data

Membership plans are attached to creators and circles. Display wording should be "メンバーシップ".

Features:

- Free and paid plans are allowed.
- Plan card can have an image.
- Profile cards should look visually rich.
- Plan CTA should open details first, not immediately join.
- Plan detail modal includes join and leave controls.
- Creator/circle membership pages aggregate joined plans, plan search, and plan creation.
- Circle membership support can pay out to owner only or split among members based on circle setting.

## Header And Navigation Rules

Desktop topbar:

- Brand returns home.
- Search is visible only on home.
- When search is hidden, topbar should become narrower rather than reserving full search space.
- Icon buttons exist for likes, bookmarks, circles, events, request manager, notifications, and account menu.
- Light/dark toggle lives in the account dropdown, not as a standalone topbar button.
- Tooltip style should match the small polished floating hint used by the floating post button.

Mobile:

- User icon appears at top left.
- Tapping it opens a Twitter-like menu.
- Mobile menu includes Home, night mode, likes, bookmarks, memberships, circles, requests, events, notifications, profile/settings/service/admin entries.
- Topbar button density must stay compact.

## Home Feed

Home includes:

- Featured Events banner.
- Rotating hero word: `Discover`, `Commission`, `Connect`.
- Shuffle button near title area.
- Feed tabs:おすすめ, フォロー中, 依頼受付中, plus custom user tabs.
- Custom tab creation modal with display label and internal search query.

Search behavior:

- Custom tab query is internal and must not populate the top search input.
- If the user types into the top search input while a custom tab is selected, search should combine tab query and input with AND semantics.
- Switching to other tabs disables the custom tab query but does not clear the visible search input.
- Event banner should stay visible even when the search input has text.

Saved/custom tabs:

- Plus button appears directly next to existing tabs.
- Custom tabs can be edited/deleted by right-click on desktop and long press on mobile.
- The edit/delete context menu closes when clicking/touching elsewhere.
- Duplicate tab names are not allowed. The modal should validate before submit and disable the submit button if invalid.
- AND/OR search syntax is supported.

## Event Banner

Featured Events banner requirements:

- Header text is `Featured Events`.
- Event page button is beside the title on mobile and in controls on desktop.
- Mobile previous/next buttons are hidden.
- Banner supports dragging/swiping.
- Dragging should not trigger click navigation.
- It uses an inactivity timer: auto-scroll only after the user has not interacted with the banner for the configured delay.
- Looping should feel natural; do not visibly jump from edge to edge.
- Event image area must not change banner height.
- If no image is configured, use frosted-glass styling.
- Avoid gradient overlays on images. Readability is handled by subtle glass/text cards.
- Banner card shadows must not be clipped or bleed strange image-colored artifacts when unrelated topbar buttons are hovered.

Clicking an event banner opens `#event/{index}`.

## Event Page And Event Detail

Event page:

- Tabs: All, official events, user-submitted/user-originated events.
- Search supports hashtags.
- Notices should not be mixed into the event page; notifications handle notices.
- Event application button text is `イベント開催を申請`.
- Event banner/card height should not depend on image dimensions.

Event application modal:

- Required text inputs use a unified required label/badge style and red border only while invalid/empty.
- Whitespace-only values are invalid.
- Dropdown/select fields do not need required badges.
- Organizer name auto-fills from current account display name.
- Contact email auto-fills from current account email.
- Image upload is optional.
- "運営に期待すること" is optional and label includes `(※サポートを確約するものではありません)`.
- Desired event timing field was removed.
- Submission model: after admin approval, the organizer receives permission and can choose timing/duration and publish announcements/posts at their own timing.

Event detail:

- Shows organizer.
- Organizer name is a link to the profile page.
- Do not show admin application flow/status cards on public event detail.
- It may show related events from the same organizer.
- It may show a compact "あなたもイベントを開催してみませんか？" card.

## Profiles

Profile page purpose:

- A trust page, not just a business card.
- Shows banner, avatar, display name, user handle, trust level, bio, external links, representative work, metrics, proof, posts.

Profile header:

- Banner sits behind avatar.
- Edit button is an icon in the header for own profile.
- Copy link is an icon-only circular button and copies directly without opening a share popup.
- Follow icon is icon-only. Followed state fills the person icon and changes plus/check state.
- Notification, mute, block buttons must be visually readable in both themes.

Profile edit:

- Display name can duplicate other users.
- User ID handle starts with `@`, and `@` is fixed/non-deletable.
- Handle uniqueness is checked against other accounts.
- Existing `@` stays in the field; the editable part is after it.
- If invalid or duplicate, save button is disabled and styled disabled.
- Links can be added dynamically.
- X/Twitter, BOOTH, and VRChat links use known icons.
- Non-trusted external links show warning before opening.
- Icon and banner crop tools exist with Twitter-like crop behavior.

Profile archive:

- Bottom area has tabs: own posts, liked posts, bookmark folders.
- Own/liked posts can sort by post order or likes.
- Profile post search filters within that profile/archive.
- Bookmark folder view should preserve scroll position comparable to liked-post shortcut navigation.
- Bookmark folders persist even if empty.

## Trust Level

Trust level is calculated from creator proof:

- completed requests.
- repeats.
- saves received.
- likes received.

Link count is intentionally excluded from the trust score.

Trust level UI:

- Badge appears next to name.
- Badge includes the rank text inside.
- Trust profile card includes trusted level details.
- Clicking/tapping trust badge or trust profile card opens an explanation modal.
- Official accounts use `Official` as trust level with a special high-end visual style.

## Posts And Post Modal

Post cards:

- Visual-first masonry-like layout.
- Hover does not cause layout shift.
- Image overlay can show tags but image overlays should not contain links.
- Clicking/tapping image opens post modal, not profile links.
- Mobile tap handling must distinguish scroll gestures from taps.

Post modal:

- Shows image, title, creator, Avatar, World, tags, request CTA if creator has open request.
- Avatar and World chips inside modal are links that search within the corresponding category.
- Tags inside modal are links that search by tag.
- Image overlay tags are not links.
- Save/Saved button size should not change.
- Follow/Following button size should not change.
- Save and follow visual state should use icon fill/check rather than button color changes.
- Has X share button.
- Has link copy button matching circular profile copy button.
- Comments/replies are supported where allowed.
- If replies are disabled for a post, comment input should not be available.

## Post Creation

Floating button:

- Normal click opens new post modal.
- Long press opens a small menu with draft list and new post options.
- Long-press menu hit area must exist only while visible.
- Hover hint should not be mispositioned and must hide while the long-press menu is open.

Post compose modal:

- Only normal posts are created from this modal; commission category is not selectable here.
- Title is required.
- Default category is `Photo`.
- Default visibility is `Public`.
- Visibility choices are `Public` and `FollowerOnly` for normal posts.
- Multiple images can be attached.
- 4K/HDR uploads should be normalized client-side into non-HDR-ish canvas output and compressed down to about 1080p long edge.
- Images can be removed.
- Preview must preserve full image visibility and not break layout for wide images.
- R18 and gore content checkboxes exist.
- Reply permission checkbox exists and should default to the previous post's setting.
- Circle posting checkbox label is `サークル向けに投稿する`.

Circle post behavior:

- The user first chooses whether this is a circle post.
- If unchecked, circle destination is hidden and normal visibility is editable.
- If checked, the destination circle field appears beside the circle-post control.
- The destination dropdown is initially closed.
- Avatar/World fields reserve the layout position so they do not jump when circle destination appears.
- Circle post audience syncs to selected circle policy.
- If the selected circle allows `Both`, the composer can choose between Public and CircleOnly.
- If selected circle is fixed `Public` or fixed `CircleOnly`, visibility follows that policy.

Closing compose:

- X button and clicking outside behave the same.
- If the compose form is empty, close without draft confirmation.
- If there is content, show a draft-save confirmation.
- Reopening after discard must not retain previous values.

## Bookmark Folders

When saving a post:

- Show a folder picker modal.
- Folder picker visual style should match My Page folder cards.
- The create-folder card appears in the grid where the new folder would appear.
- Pressing create folder opens a name input modal.
- Duplicate folder names are not allowed.
- Duplicate check happens before submit.
- Invalid submit button is disabled and has disabled styling.
- Empty folders are not auto-deleted.

## Request / Commission Pages

Request page:

- Large thumbnail and description.
- Right third is a simple payment card; currently only indicates Stripe embed planned.
- If unauthenticated, the right card becomes account registration CTA.
- Guest users cannot send requests.
- Request amount is user-entered with creator-defined minimum.
- Chat preference exists for requester.
- Initial request application and delivery completion communication are mandatory even when normal chat is disabled.
- Creator/requester can choose no-chat preference where applicable.
- Other requests from same creator can appear below.

Request compose / commission posting:

- Built from request manager area, not the normal floating post button.
- Contains thumbnail, title, description, price/minimum amount, desired delivery, retake availability, chat option, and samples.
- "平均納期" should be computed from previous request data and displayed, not manually entered.
- Creator enters "希望納期" or desired delivery field when creating request post.
- Creator can set whether retakes are supported.
- Creator can set chat availability.

## Request Manager

Request manager overview:

- Top area is request/commission post creation.
- Lower area is compact request management.
- Tabs represent request lifecycle:
  - 未承諾
  - 承諾済
  - 進行中
  - 評価待ち
  - 相手を評価
  - 完了
- Counts are shown in tab labels.
- Pending can sort by deadline or amount; amount sort is high-to-low.
- Deadline within 3 days is red except completed/closed states.
- Mobile layout must avoid text over images.
- Cards should not be affected by thumbnail aspect ratio.

Request detail:

- Pending/unaccepted state must not show chat, including below the detail.
- Pending has profile button, accept flow, reject reason flow, report button.
- Accept to chat requires long press. Current duration is 1 second.
- Work-start action also requires long press and shows the same style of success popup.
- Success popups blur the background and should not stay too long.
- Report button appears once in the top right and is red in both themes.
- Report reasons include avatar data request, aggressive behavior, rights issue, suspicious attachment, unreasonable demand, unfair review, other.
- Requester side can also report, using suitable requester-side reasons.
- ZIP attachment in chat shows rights confirmation modal. Button label should be `送信する`; it is disabled until "入っていません" is checked.
- Chat rows display whose turn it is:
  - Last message from client means your turn.
  - Last message from you means client turn.
- Evaluation flow is Mercari-like and used by both delivery side and receiving side.
- Rating colors:
  - 良かった: pink
  - 普通: yellow
  - 残念だった: blue
- In `awaiting_review`, creator waits for requester review and should not see review or retake buttons.

## Notifications

Notification page:

- Compact cards.
- Unread/read must be clear without making the whole card red.
- Current unread accent uses blue.
- Header badge shows unread count.
- When all read, badge disappears.
- There is an action to delete read notifications.
- Back behavior after navigating from a notification should return to notifications.

## Settings

Settings page:

- Auto-save; no "save changes" button.
- No "autosaved" badge at top.
- Icons should be actual symbols, not square kanji placeholders.
- Language switching should update all supported UI text where implemented.
- Reduced motion defaults off.
- Sensitive content settings:
  - Show R18 content.
  - Show gore content.
  - Choose whether sensitive content appears immediately or blurred with a view button.
- Account actions open modals.
- Export data was removed.
- Stripe linkage belongs under account settings, not a separate request-payment settings card.
- Account deletion:
  - Red destructive button.
  - Password required.
  - If active/in-progress requests exist, password input is disabled and deletion cannot proceed.
  - Final delete requires 3-second long press.
- Password change:
  - Requires entering new password twice.
  - If they do not match, show mismatch and disable update.

Switch behavior:

- Setting switches should only toggle from the visual switch area, not the entire row.

## Service / Mission / Backend Spec

Service page:

- Explains how to use the app, where things are, and FAQ-style information.
- It should not duplicate the mission page.

Mission page:

- Contains service philosophy:
  - Create. Discover. Support.
  - VRChat creation culture.
  - Discoverability, sustainable creation, support, and community circulation.

Backend spec page:

- In-app reference cards summarizing likely backend tables.
- Keep aligned with `backendSpecCards`.

## Events And Admin

Admin page:

- Event approvals are handled by admin.
- Event application cards have a `確認する` button.
- Clicking it opens all submitted details.
- Decision buttons are side by side: reject and approve.
- Circle join requests do not belong in admin.

Event approval model:

- Approval grants event hosting permission.
- Organizer can choose timing/duration and publish announcements/posts later.

## Circles

Circle page:

- Has tabbed sections rather than stacking everything:
  - circle browse/list
  - circle-limited post search
  - managed circles
- Circle search is available.
- Browse filters appear only on circle browse tab:
  - joined circles visible/hidden
  - approval-required visible/hidden
  - free-join visible/hidden
- Circle thumbnails should be compact, not huge.
- Many mock circles exist for layout testing.

Circle creation:

- Button exists on circle top and circle management.
- Opens circle creation modal.
- Circle creation does not require approval.
- On successful creation, show a success popup like request acceptance and navigate to the created circle management page.
- Public method options are only:
  - 承認制
  - 自由参加OK
- Cover image uses file attachment, not URL.
- Circle post audience setting is included:
  - Public
  - CircleOnly
  - Both
- Support payout setting is included:
  - Owner takes all
  - Split among members

Circle management:

- Owner and co-managers can open the page.
- Co-managers cannot see owner-transfer menu.
- Owner transfer requires a confirmation modal.
- Owner transfer confirmation requires typing both circle name and target user name exactly; OK disabled until both match.
- Promote-to-manager uses confirmation modal with 1-second hold animation.
- Reject join request uses confirmation modal.
- Kick member button is visible to non-owner managers too.
- Non-owner can leave the circle from management.
- All settings chosen during circle creation should be editable in circle management, including circle post audience and support payout.

## Memberships

Use "メンバーシップ" everywhere.

Membership page:

- Accessible from account dropdown and mobile account menu.
- Shows joined plans.
- Supports plan search.
- Supports creator plan creation.

Profile membership section:

- Shows creator support/membership cards.
- Cards can use images.
- Free plan is allowed.
- CTA opens detail modal first.
- Detail modal includes join/leave.

Circle membership:

- Circles can also receive support.
- Owner configures payout:
  - owner receives all.
  - split among members.
- No official approval required for creator/circle membership setup.

User badges:

- Add account-age style badges such as years since registration.
- Add early supporter / early premium member badge concept.
- These can appear on profile proof/support badge areas.

## Accounts

Multiple mock accounts are supported.

Account dropdown:

- Compact account switcher: account icons in a horizontal row.
- If accounts overflow, row scrolls horizontally.
- Tapping/clicking an account icon switches account.
- Add account action exists.

User identity:

- Internal user ID is separate from public `@handle`.
- Public handle starts with `@`.
- `@` is fixed in profile edit input and cannot be deleted.
- Public handle must be unique across users.
- Display name can duplicate other users.

## Comments / Replies

Posts can have comments.

Post creator can choose per post whether replies are allowed.

The reply permission default should copy the previous post's setting. If previous post had replies ON, the next compose modal starts with replies ON.

If replies are disabled, the UI should show comments read-only or hide the input.

## Media Upload Rules

Post images:

- Multiple images per post.
- Preview all images with previous/next controls.
- Remove image action.
- Wide images must not break layout.
- Thumbnail preview should show the whole image.

HDR / 4K:

- Uploaded HDR-looking images should be normalized through canvas to non-HDR-ish output.
- Images larger than 1080p long edge should be downscaled automatically.

ZIP attachments:

- ZIP upload in request chat requires rights confirmation.
- Confirmation text should ask whether avatars/clothes/assets sold by others are included.
- The send button remains disabled until the user checks that they are not included.

## Validation Rules

For all modals:

- Required inputs use unified required styling.
- Required text fields have red border while empty/invalid.
- Red border clears after valid input.
- Whitespace-only values are invalid.
- Dropdown/select fields do not need required badges.
- Decision buttons should be disabled and visually disabled until requirements are met.
- Disabled buttons should not glow on hover.
- Cancel buttons are generally merged into the top-right X unless a destructive confirmation requires explicit choices.

## Design Rules

Buttons:

- Default primary action: light mode uses dark button with white text; dark mode uses light button with dark text.
- Destructive/report buttons are red in both themes.
- Icon-only buttons should be circular when conceptually an icon action.
- Avoid accidental ellipses for link-copy buttons.
- Button text should be non-selectable.
- Hover motion must not clip button tops or cause layout shifts.

Dropdowns:

- Use the same custom visual style as the post destination circle dropdown.
- Dropdown width should fit the longest title without wrapping.
- Dropdown layers must appear above nearby cards/modals.

Cards:

- Use subtle shadows, not heavy one-note color blocks.
- Avoid cards visually touching; maintain enough grid gap.
- Responsive cards must not stretch only to compensate for short content.

Modals:

- Background blur should apply properly when open.
- Clicking outside should behave like X close when applicable.
- Modals with long content can scroll internally.
- On mobile, avoid hidden submit buttons behind viewport bottom.

Responsive:

- Every major page should work on mobile and desktop.
- Common problem areas:
  - request manager cards.
  - event banner aspect ratio.
  - circle search/filter controls.
  - profile archive tabs.
  - modal footer buttons.
  - custom tab row overflow.

## Key Functions To Inspect

Routing:

- `routeFromHash()`
- `showFeed()`
- `openProfile()`
- `renderProfile()`
- `renderRequestPage()`
- `renderRequestManagerPage()`
- `renderRequestManagerDetailPage()`
- `renderEventsPage()`
- `renderEventDetailPage()`
- `renderCirclesPage()`
- `renderCircleManager()`
- `renderSubscriptionsPage()`

Home/search:

- `filteredPins()`
- `renderPins()`
- `renderSavedSearchTabs()`
- `openSavedSearchDialog()`
- `openSavedSearchContextMenu()`

Events:

- `renderEventCarousel()`
- `scheduleEventAutoplay()`
- `markEventCarouselInteraction()`
- `startEventDrag()`
- `endEventDrag()`
- `openEventProposalDialog()`
- `submitEventProposal()`

Compose:

- `openComposeHint()`
- `resetComposeFormState()`
- `updateComposeSubmitState()`
- `updateComposeCircleVisibility()`
- `handleMockSubmit()`
- `loadComposeImages()`
- `renderComposeImage()`

Requests:

- `openRequestComposeDialog()`
- `updateRequestComposeSubmitState()`
- `handleRequestComposeSubmit()`
- `renderRequestManagerList()`
- `decisionActionsForRequest()`
- `openRequestReportDialog()`
- `openRequestReviewDialog()`

Profile:

- `openEditProfile()`
- `saveEditProfile()`
- `updateProfileHandleState()`
- `enforceUserHandlePrefix()`
- `renderProfileLinks()`
- `renderTrustProfile()`
- `renderProfilePostArchive()`

Circles:

- `openCircleCreateDialog()`
- `createCircleFromForm()`
- `renderCircleCards()`
- `renderCircleManager()`
- `openCircleTransferDialog()`
- `confirmCircleTransfer()`
- `openCircleKickDialog()`

Memberships:

- `renderProfileSubscriptionSection()`
- `openSubscriptionPlanDialog()`
- `openSubscriptionPlanDetailDialog()`
- `renderSubscriptionsPage()`

## Known Current Limitations

- This is still a mock. There is no persistence beyond limited `localStorage`.
- No real authentication, Stripe, email, or backend API integration.
- Uploaded images are client-side previews and mock state only.
- GitHub Pages deployment serves static files only.
- Remote VRChat images can fail or change.
- Some language switching is implemented, but not every Japanese string is fully localized.

## Backend Handoff Notes

The backend should eventually model these domains:

- users
- accounts
- public handles
- profiles
- profile links
- posts
- post images
- post tags
- post visibility
- comments
- reactions
- bookmark folders
- commission posts
- request applications
- request messages
- request attachments
- delivery records
- reviews
- reports
- events
- event applications
- circles
- circle members
- circle join requests
- memberships
- membership plans
- membership subscriptions
- notifications
- admin reviews

Mock data in `backendSpecCards` is an in-app summary, but this document is the more detailed handoff.

## Pre-Push Checklist

Unless the user requests full QA, keep this lightweight:

```powershell
node --check app.js
git diff --check
git status --short
```

If the user explicitly asks for full QA:

- Check home on desktop and mobile.
- Check event banner swipe/click.
- Check post modal open/close.
- Check compose modal validation.
- Check profile edit handle validation.
- Check request manager detail.
- Check circles and circle manager.
- Check settings destructive/account modals.
- Check membership modal.
- Check notifications navigation.

Update this document before pushing if any of those features changed.

## Current Naming

The service display name is `Veacon`. Keep the icon artwork as-is unless the user asks for a visual rebrand.
