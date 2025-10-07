# 🚀 React 19 Learn

A comprehensive learning playground showcasing **React 19** features and hooks with interactive examples. Built with React 19, TypeScript, Vite, Bun, and Tailwind CSS.

The repo is based on [Exploring React 19 Features - use() Hook, Actions & More](https://youtu.be/EPaLg4U_K1o?si=4ZnDsnXcefe67c7R) and [the repo](https://github.com/bradtraversy/react-19-playground) from Traversy Media.

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-Latest-orange.svg)](https://bun.sh/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📖 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [React 19 Features Covered](#-react-19-features-covered)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Examples](#-available-examples)
- [Technologies Used](#-technologies-used)
- [Scripts](#-scripts)
- [Learn More](#-learn-more)
- [License](#-license)

## ✨ Features

- 🎯 **10+ Interactive Examples** demonstrating React 19 features
- 🔥 **React Compiler** enabled for automatic optimizations
- ⚡ **Lightning-fast Builds** with Bun runtime
- 📱 **Fully Responsive** design with Tailwind CSS
- 🎨 **Modern UI/UX** with gradient backgrounds and smooth transitions
- 📝 **TypeScript** for type safety throughout
- 🚀 **Fast Development** with Vite and HMR
- 🧪 **Educational Content** with explanations in each example

## 🌐 Live Demo

This project will be deployed to GitHub Pages at: `https://lu0-wenfeng.github.io/React19Learn/`

## 🎓 React 19 Features Covered

### 1. **`use()` Hook**

- Fetching data from APIs (Chuck Norris jokes, JSONPlaceholder posts)
- Resolving promises directly in components
- Reading context values with `use(context)`

### 2. **Actions**

- Form submissions with server actions
- Shopping cart operations
- Async state updates

### 3. **`useFormStatus` Hook**

- Real-time form submission status
- Loading states and pending indicators
- Form validation feedback

### 4. **`useActionState` Hook** (formerly `useFormState`)

- Managing form state with actions
- Server-side validation feedback
- Optimistic updates with actions

### 5. **`useOptimistic` Hook**

- Optimistic UI updates
- Instant feedback before server response
- Graceful error handling

### 6. **`useTransition` Hook**

- Non-blocking UI updates
- Handling expensive renders
- Smooth tab switching with 500+ items

## 🚀 Getting Started

### Prerequisites

- **Bun** 1.0+ (recommended) or **Node.js** 18+

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Lu0-Wenfeng/React19Learn.git
   cd React19Learn/app
   ```

2. **Install dependencies**

   Using Bun (recommended - super fast! ⚡):

   ```bash
   bun install
   ```

   Using npm:

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
React19Learn/
├── app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── actionExample1/       # Form submission with actions
│   │   │   ├── actionExample2/       # Shopping cart actions
│   │   │   ├── useExample1/          # use() hook with jokes API
│   │   │   ├── useExample2/          # use() hook with posts API
│   │   │   ├── useExample3/          # use() hook with promises
│   │   │   ├── useExampleContext/    # use() hook with context
│   │   │   ├── useFormStatusExample/ # useFormStatus demo
│   │   │   ├── useFormStateExample/  # useActionState demo
│   │   │   ├── useOptimisticExample/ # useOptimistic demo
│   │   │   └── useTransitionExample/ # useTransition demo
│   │   ├── layouts/
│   │   │   └── MainLayout.tsx        # Main layout with navigation
│   │   ├── App.tsx                   # Router configuration
│   │   ├── main.tsx                  # App entry point
│   │   └── index.css                 # Global styles
│   ├── public/                       # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── tsconfig.json
└── README.md
```

## 📚 Available Examples

### 1. **use() Hook Example 1** - Chuck Norris Jokes

Demonstrates fetching data from an API using the `use()` hook with comparison to `useEffect`.

### 2. **use() Hook Example 2** - Posts List

Shows how to fetch and display a list of posts from JSONPlaceholder API.

### 3. **use() Hook Example 3** - Promise Resolution

Resolves a promise directly in the component to display a message.

### 4. **use(context) Example** - Theme Context

Demonstrates reading context values using the `use()` hook.

### 5. **Action Example 1** - Post Form

Submit form data using React 19 actions with server-side processing.

### 6. **Action Example 2** - Shopping Cart

Add items to cart using form actions with quantity selection.

### 7. **useFormStatus Example**

Real-time form submission status with loading states and disabled inputs.

### 8. **useActionState Example**

Form state management with actions and server validation feedback.

### 9. **useOptimistic Example**

Instant UI updates with optimistic state while waiting for server confirmation.

### 10. **useTransition Example**

Smooth navigation between tabs with one containing 500+ slow-rendering items.

## 🛠 Technologies Used

- **[React 19.1.1](https://react.dev)** - Latest React with new features
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type safety
- **[Bun](https://bun.sh/)** - Lightning-fast JavaScript runtime & package manager ⚡
- **[Vite](https://vitejs.dev/)** - Fast build tool with HMR
- **[Rolldown](https://rolldown.dev/)** - Fast Rust-based bundler
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[React Router 7](https://reactrouter.com/)** - Client-side routing
- **[React Compiler](https://react.dev/learn/react-compiler)** - Automatic optimizations

## 📜 Scripts

```bash
# Development server with HMR (Bun recommended for speed)
bun dev
# or
npm run dev

# Type-check and build for production
bun run build
# or
npm run build

# Preview production build locally
bun preview
# or
npm run preview

# Run ESLint
bun run lint
# or
npm run lint
```

## 📖 Learn More

### React 19 Resources

- [React 19 Documentation](https://react.dev)
- [React Compiler](https://react.dev/learn/react-compiler)
- [React 19 Blog Post](https://react.dev/blog/2024/12/05/react-19)

### Hooks Documentation

- [use() Hook](https://react.dev/reference/react/use)
- [useOptimistic Hook](https://react.dev/reference/react/useOptimistic)
- [useTransition Hook](https://react.dev/reference/react/useTransition)
- [useActionState Hook](https://react.dev/reference/react/useActionState)
- [useFormStatus Hook](https://react.dev/reference/react-dom/hooks/useFormStatus)

### Tutorials

- [React 19 Actions](https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action)
- [Server Components](https://react.dev/reference/rsc/server-components)

---

**Happy Learning! 🎉**
