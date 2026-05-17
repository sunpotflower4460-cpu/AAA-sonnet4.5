# 残心 / Zanshin

> 書いたあとにも、心がそこに残るメモ帳。  
> A note-taking app where the heart lingers, even after the writing ends.

---

## アプリ概要 / About

「残心」は、和の美意識・間・余白・静けさを大切にした、シンプルなiOS向けメモアプリです。

大量の機能で埋めるのではなく、  
書くこと、読み返すこと、書いたあとに残る余韻を美しくすることを目指します。

Zanshin is a minimalist note-taking app inspired by Japanese aesthetics, focusing on stillness, space, and the lingering essence after writing.

---

## MVP機能 / MVP Features

| 機能 | Feature |
|------|---------|
| メモ一覧 | Notes list |
| メモ作成 | Create notes |
| メモ編集 | Edit notes |
| メモ削除 | Delete notes |
| 自動保存 | Auto-save |
| 検索 | Search |
| お気に入り | Favorites |
| ローカル保存 | Local storage (localStorage) |
| iPhone向けUI | iPhone-first responsive UI |
| 多言語文言設計 | Japanese/English UI text |

---

## 技術スタック / Tech Stack

- **Vite** — Fast development environment
- **React + TypeScript** — Type-safe component design
- **Tailwind CSS** — Utility-first CSS framework
- **localStorage** — Local data persistence (MVP)

将来的にCapacitorを使ってiOSネイティブアプリ化する想定。  
Future plan: Native iOS app using Capacitor.

---

## セットアップ / Setup

### 1. リポジトリをクローン / Clone repository

```bash
git clone https://github.com/sunpotflower4460-cpu/AAA-sonnet4.5.git
cd AAA-sonnet4.5
```

### 2. 依存関係をインストール / Install dependencies

```bash
npm install
```

### 3. 開発サーバーを起動 / Start development server

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開く。  
Open `http://localhost:5173` in your browser.

### 4. ビルド / Build

```bash
npm run build
```

ビルド成果物は `dist/` フォルダに出力されます。  
Build output will be in the `dist/` folder.

---

## プロジェクト構成 / Project Structure

```
src/
  types/
    note.ts           # Note data type
  lib/
    storage.ts        # localStorage utilities
    date.ts           # Date formatting
    i18n.ts           # UI text content
  components/
    AppShell.tsx      # App container
    NotesList.tsx     # Notes list view
    NoteCard.tsx      # Individual note card
    SearchBar.tsx     # Search component
    EmptyState.tsx    # Empty state UI
    NoteEditor.tsx    # Note editor view
    ZanshinMark.tsx   # App logo/mark
  App.tsx             # Main app logic
  main.tsx            # Entry point
  index.css           # Global styles
```

---

## Cloudflare Pages デプロイ / Cloudflare Pages Deployment

MVP完成後、Cloudflare Pagesにデプロイできます。  
After MVP completion, you can deploy to Cloudflare Pages.

### デプロイ設定 / Deployment Settings

| 項目 | 設定 |
|------|------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 18 or later |

### 手順 / Steps

1. [Cloudflare Pages](https://pages.cloudflare.com/)にログイン
2. 新しいプロジェクトを作成
3. GitHubリポジトリを連携
4. ビルド設定を入力：
   - Build command: `npm run build`
   - Build output directory: `dist`
5. デプロイ開始

デプロイ後、Cloudflare PagesのURLでアプリにアクセス可能。

---

## 開発フェーズ / Development Phases

| Phase | 内容 | Status |
|-------|------|--------|
| **Phase 1** | Design & documentation | ✅ Complete |
| **Phase 2** | Design audit | ✅ Complete |
| **Phase 3** | MVP implementation | ✅ Complete |

詳細は [docs/development-phases.md](docs/development-phases.md) を参照。

---

## ドキュメント / Documentation

| File | Description |
|------|-------------|
| [docs/concept.md](docs/concept.md) | Concept & philosophy |
| [docs/design-system.md](docs/design-system.md) | Design system & UI guidelines |
| [docs/mvp-spec.md](docs/mvp-spec.md) | MVP specification |
| [docs/development-phases.md](docs/development-phases.md) | Development phases |
| [docs/audit-phase-2.md](docs/audit-phase-2.md) | Phase 2 audit report |

---

## ライセンス / License

MIT

---

## コンセプト / Concept

残心（Zanshin）は、武道や茶道における「心がそこに残る」状態を指します。

動作が終わった後も、その瞬間の集中と余韻が続く——  
そんな体験を、メモアプリで再現します。

---

静かに開く  
言葉を置く  
余韻が残る  
また戻ってくる

Zanshin is the state of awareness that remains after an action ends,  
rooted in martial arts and tea ceremony.

This app brings that lingering stillness into your writing.
