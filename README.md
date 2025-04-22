# 📋 Register Form App with React Hook Form + Zod

このプロジェクトは、`react-hook-form` と `zod` を使ったフォームバリデーションの練習用アプリケーションです。Next.js と Tailwind CSS をベースに構築されています。

## 🧰 使用技術スタック

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 起動方法

```bash
git clone https://github.com/your-username/register-form-app.git
cd register-form-app
npm install
npm run dev
```

## ディレクトリ構成

```
register-form-app/
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # UIコンポーネント
│   │   └── RegisterForm.tsx
│   ├── lib/               # APIやユーティリティ
│   │   └── api.ts
│   ├── schemas/           # Zodスキーマ
│   │   └── registerSchema.ts
│   └── styles/            # グローバルスタイル
│       └── globals.css
├── public/
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

## 🧱 アーキテクチャ・設計方針

このプロジェクトでは、**保守性・再利用性・スケーラビリティ** を意識して以下のような設計方針を採用しています。

### 🔹 コンポーネントの分割

RegisterForm は1つの大きなフォームとして定義されていますが、実際には以下のような小さな再利用可能なコンポーネントに分割されています：

- `TextInput`：ラベル・エラー表示付きの基本入力コンポーネント
- `FormError`：エラー表示専用コンポーネント

**メリット：**
- 再利用可能な部品として使える
- テストや保守が簡単になる
- UI の一貫性を保ちやすくなる

### 🔹 スキーマバリデーションと責務分離

Zod によるバリデーションロジックは `schemas/` ディレクトリに切り出しており、**UI とロジックの責務を明確に分けた構成**となっています。


