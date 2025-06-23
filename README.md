# Ulrean Test Work - Next.js v15.3.3

This project is a Next.js application featuring:

- Public post pages: `/` (Read-only landing page - view all posts)
- Public post pages: `/post/[id]` (Read-only post view)
- Admin dashboard: `/admin`
- Admin posts list: `/admin/posts`
- Admin post edit: `/admin/posts/[id]/edit`

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+ (recommended)
- npm or yarn package manager
- Next.js v15.3.3

---

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/MohammadMustafawaqar/ulreana-test-work.git
cd ulreana-test-work
npm install
# or
yarn install

```
---

### Run development server
```bash

npm run dev
# or
yarn dev

```
Runs the Next.js app in development mode.
Open http://localhost:3000 to view it in the browser.

---

### Build for production
```bash
npm run build
# or
yarn build

```
Builds the app for production to the .next folder.

---

### Run production server
```bash
npm run start
# or
yarn start

```
Runs the compiled production build.

---

### Project Structure Overview
```bash
|src
|-app
|-- layout.tsx
|-- not-found.tsx
|-- login
  |-- page.tsx
|-- api
  |-- login
    |-- route.ts
  |-- logout
    |-- route.ts
|-- (public)
  |-- layout.tsx
  |-- page.tsx
  |-- posts
    |-- [id]
      |-- page.tsx
|-- admin
  |-- layout.tsx
  |-- page.tsx
  |-- posts
    |-- page.tsx
    |-- create
      |-- page.tsx
    |-- [id]
      |-- edit
        |-- page.tsx
```
---
## Routing Details

### Public Routes

#### `/` (Landing Page)

- **Description:** Shows a list of posts on the landing page.
- **Functionality:** Fetches and displays multiple posts, often with search and filtering.
- **Notes:** Typically uses client or server components with data fetching.

#### `/post/[id]`

- **Description:** View a single post by its ID.
- **Functionality:** Fetches and displays the post content.
- **Notes:** Uses server-side data fetching and supports metadata generation for SEO.

---

### Admin Routes

#### `/admin`

- **Description:** Admin dashboard home page.
- **Functionality:** Provides overview and access to admin features.
- **Notes:** Should be protected with authentication.

#### `/admin/posts`

- **Description:** Admin page listing all posts.
- **Functionality:** Allows managing posts (view, create, delete).
- **Notes:** Fetches posts data, usually with React Query or server components.

#### `/admin/posts/[id]/edit`

- **Description:** Edit page for a specific post.
- **Functionality:** Provides a form to edit and update post details.
- **Notes:** Should handle form submission and validation.

