# Workflow Project

Workflow Course Assignment for FED2 at Noroff. It includes ESLint, Prettier, Husky, Vitest (unit tests), and Playwright (end-to-end tests).

---

# Installation

Clone the repository and install dependencies:

```bash
npm install
```

# Scripts

npm run dev
Start Tailwind in watch mode

npm test
Run Vitest unit tests

npx playwright test
Run Playwright end-to-end tests

npx playwright show-report
Open the latest Playwright HTML report

npx eslint .
Run ESLint on all JavaScript files

npx prettier --write .
Format all supported files using Prettier

# Testing Overview

Unit Tests (Vitest):

Located in the /tests folder:

isActivePath function:

Returns true when the current path matches exactly

Returns true for / and /index.html

Returns true when the current path includes the href

Returns false when paths don’t match

getUsername function:

Returns the name from the user object in storage

Returns null when no user exists in storage

Run all unit tests:

npm test

End-to-End Tests (Playwright)

Located in /e2e:

Login tests

Logs in successfully with valid credentials from environment variables

Displays an error message with invalid credentials

Navigation test

Navigates to the home page

Waits for the venue list to load

Opens the first venue

Confirms “Venue details” appears on the details page

Run all e2e tests:

npx playwright test

View the report:

npx playwright show-report

# Environment Variables

Create a .env file in the project root with the following variables:

BASE_URL=http://127.0.0.1:5500/
LOGIN_EMAIL=your_email@example.com
LOGIN_PASSWORD=your_password

.env is listed in .gitignore

An .env.example file is included with variable names only (no values)

# Folder Structure

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

# Author

Arnt Helge Vold
FED2 | Noroff
