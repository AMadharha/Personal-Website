# Personal-Website
My personal website where you can view my personal projects, professional experience, and much more.

## Run With Docker

This branch includes a Vite + React + TypeScript scaffold and a Docker setup for both local development and production builds.

### Development

1. Install Docker Desktop.
2. From the repository root, run `docker compose up --build`.
3. Open `http://localhost:5173` in your browser.

### Production Image

1. Build the image with `docker build -t personal-website .`.
2. Run it with `docker run --rm -p 8080:80 personal-website`.
3. Open `http://localhost:8080`.

### Notes

- The dev container uses the Vite development server with hot reload.
- The production image serves the built app through Nginx with SPA fallback routing.
