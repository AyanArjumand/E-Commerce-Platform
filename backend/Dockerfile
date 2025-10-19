# Backend Dockerfile for AYAN's Store

FROM node:18-alpine

# Set working directory
WORKDIR /app/backend

# Install dependencies for better performance
RUN apk add --no-cache tini

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production && \
    npm cache clean --force

# Copy application source
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app/backend

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 5000

# Use tini as entrypoint for proper signal handling
ENTRYPOINT ["/sbin/tini", "--"]

# Health check endpoint - use 127.0.0.1 instead of localhost to force IPv4
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=1 \
  CMD node -e "require('http').get('http://127.0.0.1:5000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)}).on('error', () => process.exit(1))"

# Start the application
CMD ["node", "server.js"]
