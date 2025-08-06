# Timmy Tiny LMS
<a href="https://opensource.org/license/mit"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" height="24" /></a>
<a href="https://pnpm.io/"><img src="https://img.shields.io/badge/Package-PNPM-orange?style=flat-square" height="24" /></a>
<img src="https://img.shields.io/badge/Module-ECMAScript-yellow?style=flat-square" height="24" />

Timmy tiny learning management system

## Features
- Tiny learning management system that provides a simple interface for lessons
- Responsive design for use on both desktop and mobile devices
- Automatic database installation

## Stack Used
- [SvelteKit](https://svelte.dev/)
- [Tailwind](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [SQLite](https://www.sqlite.org/)

## Local Preview
1. Clone this repository to your local computer
2. Copy the default environment file and ensure all variables are correctly filled
   ```sh
   cp .env.example .env
   ```
3. Install all required dependencies
   ```sh
   pnpm i
   ```
4. Run the application in development mode
   ```sh
   pnpm run dev
   ```

## Deployment
1. Adjust the `VITE_BASE_PATH` inside the environment file
2. Run the deployment script
   ```sh
   pnpm run deploy
   ```
