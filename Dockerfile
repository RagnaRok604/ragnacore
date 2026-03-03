# ---------- 1️⃣ Builder Stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Copy only dependency files first (better layer caching)
COPY package*.json ./

# Install ALL deps (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build


# ---------- 2️⃣ Production Stage ----------
FROM node:22-alpine AS production

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy only package files
COPY package*.json ./

# Install ONLY production dependencies
RUN npm ci --omit=dev

# Copy built app from builder
COPY --from=builder /app/dist ./dist

# If you need other static assets, copy them too
# COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "dist/index.js"]