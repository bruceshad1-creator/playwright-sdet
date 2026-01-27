# Base image with Node.js
FROM node:25-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Expose any port if needed (optional)
EXPOSE 3000

# Default command
CMD ["npx", "playwright", "test"]
