# Use official Playwright base image (includes browsers + deps)
FROM mcr.microsoft.com/playwright:v1.58.0-jammy

# Set working directory
WORKDIR /app

# Copy package files first (better Docker layer caching)
COPY package.json package-lock.json ./

# Install Node dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Optional: verify Playwright installation (fails fast if broken)
RUN npx playwright --version

# Default command (can be overridden in docker run)
CMD ["npx", "playwright", "test"]
