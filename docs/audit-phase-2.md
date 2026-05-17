# 残心 / Zanshin Phase 2 Audit

## 監査日
2026-05-17

## 監査対象
- README.md
- docs/concept.md
- docs/design-system.md
- docs/mvp-spec.md
- docs/development-phases.md
- .github/copilot-instructions.md

---

## 1. コンセプト監査

**判定:** OK

### 確認内容:

- ✅ アプリ名「残心 / Zanshin」が明記されている
- ✅ 一言コンセプト「書いたあとにも、心がそこに残るメモ帳」が README.md に配置されている
- ✅ 「残心」「間」「余白」が UI/UX の中核として docs/concept.md に明確に説明されている
- ✅ 単なる和風メモ帳ではなく、「書く体験の余韻」を大切にするアプリとして整理されている
- ✅ 機能追加よりも静かに書く体験が優先される方針が明記されている
- ✅ 3つのキーワード（残心・間・余白）が独立したセクションとして説明されている
- ✅ 和のモチーフが「意味」として使われ、「装飾」として使わない方針が明記されている

### 修正した内容:

- なし（コンセプトは明確で、矛盾なく整理されている）

---

## 2. デザイン監査

**判定:** OK

### 確認内容:

- ✅ 和風要素が過剰になっておらず、「静かな現代和」を目指している
- ✅ 刀・扇・墨・和紙・金箔・円相などのモチーフが意味を持って整理されている
- ✅ 「現代和」「静けさ」「海外にも伝わる日本的美意識」として成立している
- ✅ 「古臭い和風テーマパークのような方向に寄っていない」旨が明記されている
- ✅ 黄金比スケール（4 / 8 / 13 / 21 / 34 / 55 / 89）が明記されている
- ✅ 余白、行間、カード間隔、FABサイズなどに具体的な数値方針がある
- ✅ カラーパレットが7色定義されている（Washi, Soft Paper, Sumi, Faded Ink, Gold, Deep Indigo, Vermilion）
- ✅ タイポグラフィが明朝（見出し）とサンセリフ（本文）で分けられている
- ✅ アニメーション方針が「遅く、柔らかく、意図的」と明記されている
- ✅ iPhone画面で窮屈にならない方針になっている（左右余白21px、safe-area対応）

### 修正した内容:

- なし（デザインシステムは十分に詳細で、MVPに対応できる）

---

## 3. MVP範囲監査

**判定:** OK

### 確認内容:

#### MVP必須機能がすべて定義されている:
- ✅ メモ一覧
- ✅ メモ作成
- ✅ メモ編集
- ✅ メモ削除（確認ダイアログ付き）
- ✅ 自動保存（デバウンス処理）
- ✅ 検索（リアルタイム検索）
- ✅ お気に入り（トグル・フィルタ）
- ✅ ローカル保存（localStorage / IndexedDB移行可能な構造）
- ✅ iPhone向けレスポンシブUI（safe-area / viewport対応）
- ✅ 日本語/英語を意識した文言（プレースホルダー、空状態メッセージ、保存ステータス）

#### MVPで作らないものが明確:
- ✅ ログイン
- ✅ クラウド同期
- ✅ AI機能
- ✅ 課金
- ✅ Markdown完全対応
- ✅ 複雑なタグ管理
- ✅ 共同編集
- ✅ App Store申請
- ✅ Cloudflareへの途中デプロイ

#### データ構造の確認:
- ✅ シンプルなNote型が定義されている（id, title, body, createdAt, updatedAt, isFavorite, locale）
- ✅ localStorage保存キー `zanshin.notes.v1` が定義されている
- ✅ 保存処理を `lib/storage.ts` に分離する方針が明記されている
- ✅ 将来IndexedDBへ移行できる構造になっている

#### 粒度の確認:
- ✅ MVPが大きくなりすぎていない
- ✅ Phase 3で一気に作れる粒度である
- ✅ 将来Capacitor化を邪魔しない設計になっている

### 修正した内容:

- なし（MVP範囲は適切で、Phase 3で実装可能な粒度に整理されている）

---

## 4. 開発フェーズ監査

**判定:** OK

### 確認内容:

- ✅ Phase 1: README/docsに設計を入れる
- ✅ Phase 2: 監査フェーズ
- ✅ Phase 3: MVPまで一気に作る
- ✅ Phase 1で実装しない方針が明記されている
- ✅ Phase 2で監査のみ行う方針が明記されている
- ✅ Phase 3で初めてMVP実装する流れになっている
- ✅ Phase 3のMVP完成後以外はCloudflareにデプロイしないルールが明記されている
- ✅ 今後の拡張候補（Phase 4〜9）がMVPと混ざっていない

### 修正した内容:

- なし（開発フェーズは明確で、各フェーズの役割が整理されている）

---

## 5. Cloud Agent指示監査

**判定:** OK

### 確認内容:

- ✅ プロジェクトの目的が明確（"make writing feel quiet, spacious, and intentional"）
- ✅ 「多機能化しすぎない」ルールが明記されている（"Keep the MVP small", "Avoid unnecessary features"）
- ✅ 「余白」「静けさ」「iPhone-first」が Core Principles に明記されている
- ✅ Phase 1 / Phase 2 / Phase 3 の作業範囲が明確に分けられている
- ✅ Cloudflareデプロイ禁止ルールが各Phase で明記されている
- ✅ 実装時の技術方針が簡潔に書かれている（React + TypeScript, Vite + Tailwind, localStorage → IndexedDB移行可能な構造）
- ✅ AI Agentが勝手にAI機能・ログイン・同期・課金などを追加しないようになっている（"What Zanshin Is NOT" セクション）
- ✅ UX Guardrails が明確（Open → Write → Save quietly → Return → Read again）
- ✅ Design Guardrails が明確（黄金比、カラーパレット、フォント、アニメーション）

### 修正した内容:

- なし（Cloud Agent指示は十分に明確で、実装時の迷いを防ぐ構造になっている）

---

## 6. 海外向け表現の確認

**判定:** OK

### 確認内容:

以下の表現が適切に配置されている:

- ✅ Japanese minimalism (README.md, copilot-instructions.md)
- ✅ Zen-inspired writing (README.md: "Zen")
- ✅ Wabi-sabi (README.md)
- ✅ Mindful writing / Mindful notes (README.md: "Mindful writing")
- ✅ Calm journaling (README.md: "Calm journaling")
- ✅ "Write with stillness" の類似表現（"Saved in stillness", "quiet, spacious, and intentional"）
- ✅ 英語表現が入りすぎておらず、日本語アプリの芯が薄くなっていない

### 補足:

- README.md のターゲットセクションに「海外向け」として Japanese minimalism / Zen / Wabi-sabi / Mindful writing / Calm journaling が列挙されている
- 英語の一言コンセプト "A note-taking app where the heart lingers, even after the writing ends." が美しく配置されている
- プレースホルダー、空状態メッセージ、保存ステータスに日英両方の表現がある

---

## 7. iOS前提の確認

**判定:** OK

### 確認内容:

- ✅ iPhone幅で美しく見える（左右余白21px、黄金比スケール）
- ✅ タップしやすいボタンサイズ（FAB 55px）
- ✅ キーボード表示時も使いやすい構造を想定（safe-area対応が明記されている）
- ✅ PWA / Capacitor化を想定（技術方針に明記、Phase 8でCapacitorでiOS化）
- ✅ MVPではWebアプリとして作り、将来iOSアプリ化できる構造にする方針が明記されている

---

## 8. 「残心らしさ」の最終確認

**判定:** ✅ この設計は「残心」と呼べる

### 判断基準の検証:

| 基準 | 判定 | 根拠 |
|------|------|------|
| 書く体験が静かか | ✅ | プレースホルダー、自動保存が静かに行われる、派手な演出を避ける |
| 保存体験が静かか | ✅ | 「余韻を保存しました / Saved in stillness」の文言、完了後は静かに消える |
| 読み返しに余韻があるか | ✅ | 将来の読み返しモード（フォントを大きく、UIを隠す）を想定、間と余白の重視 |
| UIに間があるか | ✅ | 黄金比スケールによる余白、セクション間隔34px、呼吸できる余白 |
| 和の要素が意味として入っているか | ✅ | モチーフが「意味」として整理、装飾ではなく体験の一部 |
| 機能が画面を騒がせていないか | ✅ | MVP範囲が厳密に制限、機能追加よりも体験の質を優先 |

### 総合評価:

この設計は、単なる「和風メモ帳」ではなく、  
**「書く」→「残る」→「読み返す」→「静まる」→「また書く」**  
という循環を大切にした、余韻のあるアプリとして成立している。

---

## 9. Phase 3 実装前の最終方針

Phase 3では以下を守ること:

- ✅ Vite + React + TypeScript + TailwindでMVPを作る
- ✅ localStorage保存から開始する
- ✅ メモ一覧、作成、編集、削除、自動保存、検索、お気に入りを実装する
- ✅ iPhone-firstで設計する
- ✅ 余白と行間を大切にする
- ✅ 機能を増やしすぎない
- ✅ Cloudflare PagesへのデプロイはMVP完成後のみ行う
- ✅ 保存処理は `lib/storage.ts` に分離する
- ✅ デザイントークン（colors, spacing, fonts）を一元管理する
- ✅ コンポーネントはシンプルで役割を明確にする
- ✅ アニメーションは遅く、柔らかく、意図的に（最低200ms）

---

## 10. MVPでまだ作らないもの

- ❌ ログイン
- ❌ クラウド同期
- ❌ AI機能
- ❌ 課金
- ❌ Markdown完全対応
- ❌ 複雑なタグ管理
- ❌ 共同編集
- ❌ App Store申請
- ❌ Phase 3完成前のCloudflareデプロイ

---

## 11. 総合判定

```txt
✅ Phase 3に進んでよい

理由:

1. 全ての必須ドキュメントが作成され、内容が整理されている
2. コンセプト（残心・間・余白）が明確で、矛盾がない
3. デザインシステムが具体的で、実装可能な粒度になっている
4. MVP範囲が適切で、Phase 3で一気に実装できる
5. 開発フェーズが明確で、Cloudflareデプロイのルールが守られる構造になっている
6. Cloud Agent指示が十分に詳細で、実装時の迷いを防ぐ
7. 海外向け表現とiOS前提の設計が適切に配置されている
8. 「残心らしさ」が全体に貫かれている

修正が必要な箇所は見つからなかった。
Phase 1で作成された設計は、MVPを作るための十分な土台になっている。
```

---

## 12. Phase 2で発見された追加の推奨事項（任意）

以下は必須ではないが、Phase 3実装時に意識すると良い点:

### A. ファイル構成の初期提案

```
src/
  components/
    NoteCard.tsx          # メモカード
    NoteList.tsx          # メモ一覧画面
    Editor.tsx            # エディタ画面
    SearchBar.tsx         # 検索バー
    FavoriteButton.tsx    # お気に入りボタン
    EmptyState.tsx        # 空状態表示
    ConfirmDialog.tsx     # 削除確認ダイアログ
  lib/
    storage.ts            # localStorage / IndexedDB抽象化
    utils.ts              # ユーティリティ関数
  types/
    note.ts               # Note型定義
  constants/
    colors.ts             # カラーパレット
    spacing.ts            # 黄金比スケール
    i18n.ts               # 文言定義
  App.tsx
  main.tsx
  index.css
```

### B. Tailwind設定の推奨

`tailwind.config.js` に以下を追加することを推奨:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        washi: '#F7F1E5',
        'soft-paper': '#FBF8F1',
        sumi: '#1F1B18',
        'faded-ink': '#5F5750',
        gold: '#C9A646',
        'deep-indigo': '#243B53',
        vermilion: '#B14A36',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '13': '13px',
        '21': '21px',
        '34': '34px',
        '55': '55px',
        '89': '89px',
      },
      fontFamily: {
        serif: ['"Hiragino Mincho ProN"', '"Yu Mincho"', '"Noto Serif JP"', '"Noto Serif"', 'serif'],
        sans: ['"Hiragino Sans"', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

### C. 自動保存のデバウンス時間

- 入力停止後 **1000ms〜1500ms** を推奨
- 短すぎると静けさを損なう
- 長すぎるとデータ損失のリスクが高まる

---

## Phase 2 完了

✅ すべての監査項目をクリアしました。  
✅ Phase 3へ進む準備が整いました。  
✅ Cloudflareへデプロイしていません。  
✅ MVP実装を開始していません。

**次のステップ:** Phase 3 MVP実装へ進む
