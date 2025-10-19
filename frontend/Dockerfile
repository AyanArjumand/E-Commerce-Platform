# Frontend Dockerfile for AYAN's Store

# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add healthcheck - use 127.0.0.1 for IPv4
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=1 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:3000 || exit 1

# Expose port
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
