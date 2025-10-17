# Workflow Project

Workflow course assignment for FED2 at Noroff.  
Includes ESLint, Prettier, Husky, Vitest (unit tests), and Playwright (end-to-end tests).

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Running the project

```bash
npm run dev
```

### Running tests

```bash
npm run test
```

---

## Environment Variables

This project uses environment variables. Create a `.env` file in the project root with the following variables:

```bash
BASE_URL=http://127.0.0.1:5500/
LOGIN_EMAIL=your_email@example.com
LOGIN_PASSWORD=your_password
```

.env is listed in .gitignore

An .env.example file is included with variable names only (no values)

---

## Available Scripts

```bash
npm run dev              # Start Tailwind in watch mode
npm test                 # Run Vitest unit tests
npx playwright test      # Run Playwright end-to-end tests
npx playwright show-report  # Open the latest Playwright HTML report
npx eslint .             # Run ESLint on all JavaScript files
npx prettier --write .   # Format all supported files using Prettier
```

### Unit Tests (Vitest)

Located in the `/tests` folder.

**isActivePath function:**

- Returns true when the current path matches exactly
- Returns true for `/` and `/index.html`
- Returns true when the current path includes the href
- Returns false when paths don’t match

**getUsername function:**

- Returns the name from the user object in storage
- Returns null when no user exists in storage

Run all unit tests:

```bash
npm test
```

### End-to-End Tests (Playwright)

Located in the `/e2e` folder.

**Login tests:**

- Logs in successfully with valid credentials from environment variables
- Displays an error message with invalid credentials

**Navigation test:**

- Navigates to the home page
- Waits for the venue list to load
- Opens the first venue
- Confirms “Venue details” appears on the details page

Run all e2e tests:

```bash
npx playwright test
```

---

## Technologies used

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Vite
- Vitest
- Husky
- Playwright
- dotenv

---

## Folder Structure

workflow/
├── .husky
├── css/
├── e2e/
├── js/
│ ├── api/
│ ├── constants/
│ ├── listeners/
│ ├── ui/
│ └── utils/
├── login/
├── register/
├── tests/
│ └── utils/
├── venue/
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── favicon.ico
├── index.html
├── package-lock-json
├── package.json
├── playwright.config.js
├── README.md
└── tailwind.config.js

---

# Author

Arnt Helge Vold
Vold-Art @ GitHub
FED2 | Noroff
