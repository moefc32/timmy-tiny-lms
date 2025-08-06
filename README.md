# Envbox
<a href="https://opensource.org/license/mit"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" height="24" /></a>
<a href="https://pnpm.io/"><img src="https://img.shields.io/badge/Package-PNPM-orange?style=flat-square" height="24" /></a>
<img src="https://img.shields.io/badge/Module-ECMAScript-yellow?style=flat-square" height="24" />

Envbox is a SvelteKit application to store .env configurations

![image](https://github.com/user-attachments/assets/d097051c-5be8-4dde-becc-0082199dc82b)

## Features
- Create, update, and delete environment configurations
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
1. Clone this repository to the development server
2. Copy the default environment file and ensure all variables are correctly filled
   ```sh
   cp .env.example .env
   ```
3. Install all required dependencies
   ```sh
   pnpm i
   ```
4. Optimize the application for production
   ```sh
   pnpm run build
   ```
5. Serve the application using PM2
   ```sh
   pm2 start ecosystem.config.cjs
   ```
