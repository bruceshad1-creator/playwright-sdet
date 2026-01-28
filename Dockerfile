# Using latest stable Playwright image with all browsers preinstalled
ARG PLAYWRIGHT_VERSION=1.58.0
ARG OS_VARIANT=noble
FROM mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-${OS_VARIANT}

# Set working directory
WORKDIR /app

# Environment variables
ENV CI=true
ENV PW_HEADLESS=1
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=0

# Copy only lockfiles first (better caching)
COPY package.json package-lock.json* ./

# Install deps INSIDE the container
RUN npm ci

# Copy the rest of the project
COPY . .

# Create a folder for downloads
RUN mkdir -p /app/downloads

# Ensure browsers are present (safety net)
RUN npx playwright install --with-deps

# Default command
CMD ["npx", "playwright", "test"]