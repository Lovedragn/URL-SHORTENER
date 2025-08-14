# URL Shortener

A simple and clean React app to shorten long URLs using the Bitly API.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [License](#license)

---

## Overview
This project is a minimal URL shortener built with React and Vite. It allows users to input a long URL and receive a shortened version using the Bitly API.

---

## Features
- Shorten any valid URL instantly
- Clean and modern UI
- Error handling for invalid or empty input
- Direct link to the shortened URL

---

## Demo
![Screenshot](demo-screenshot.png)

---

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd URL-SHORTENER
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage
1. Enter a long URL in the input field.
2. Click the **Shorten** button.
3. The shortened URL will appear below. Click it to open in a new tab.
4. If an error occurs (e.g., invalid URL), an error message will be displayed.

---

## Project Structure
```
URL-SHORTENER/
├── src/
│   ├── App.jsx         # Main React component
│   ├── main.jsx        # Entry point
│   └── index.css       # Styles
├── index.html          # HTML template
├── package.json        # Project metadata and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

---

## Customization
- **API Key:** The Bitly API key is hardcoded in `App.jsx`. For production, store it securely (e.g., in environment variables).
- **Styling:** Modify `index.css` or component classes for custom styles.
- **Domain:** Change the `domain` field in the API request body to use a different Bitly domain if needed.

---

## License
This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgements
- [Bitly API Documentation](https://dev.bitly.com/docs/getting-started/authentication/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
