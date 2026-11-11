# **Shopping Cart**

## **Description**

A mock online store with three pages: a home page, a shop page and a cart page. Shoppers can browse products, choose a quantity with a typed input or plus and minus buttons, and add items to their cart. The cart link in the navigation bar shows how many items are in the cart and updates as items are added or removed. On the cart page, quantities can be changed or items removed, and the total updates automatically. There is no checkout, and the cart is held in memory, so it resets when the page is refreshed.

Product data is fetched from the [FakeStore API](https://fakestoreapi.com).

Built as part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart).

## Live Demo
[Visit the store](https://shopping-cart-omega-tawny.vercel.app/)

## Built With
- React
- Vite
- React Router
- CSS Modules
- Vitest and React Testing Library
- FakeStore API
- GitHub Actions (continuous integration)
- Vercel (continuous deployment)

## Run Locally

1. Clone the repository:

```bash
   git clone https://github.com/Badger-cmyk/shopping-cart.git
   cd shopping-cart
```

2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm run dev
```

4. Open the local address shown in your terminal (usually `http://localhost:5173`).

Built with Node.js 22. No API key is needed, because the FakeStore API is free and public.

To create a production build and preview it:

```bash
npm run build
npm run preview
```

## Run the Tests

```bash
npm test
```

The tests use mocked network requests, so they run without an internet connection. The same lint, test and build checks run automatically on every push and pull request through GitHub Actions.

## What I Learned
- How to set up client side routing with React Router and a navigation bar shown on every page
- How to fetch data from an API inside a custom hook, handling loading, success and error states
- How to share cart state across unrelated components using React Context, a provider and a custom hook
- How to build a reusable controlled component, the quantity input, used in both the shop and the cart
- How to update state without mutating it, including combining repeated additions of the same product
- How to derive values like the item count and the cart total from existing state instead of storing them separately
- How to test components and hooks with React Testing Library and Vitest, using mocked fetch calls and a memory router
- How to test user behavior instead of implementation details, by querying elements by role and label
- How to scope styles locally with CSS Modules 
- How to set up a continuous integration pipeline with GitHub Actions that lints, tests and builds on every change
- How to deploy a single page application to Vercel, including the rewrite rule that lets React Router handle direct links
- How to work with feature branches, small commits and pull requests