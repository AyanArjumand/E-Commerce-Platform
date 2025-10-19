#!/bin/sh
set -e

echo "Starting AYAN's Store Application..."

# Start backend with PM2
cd /app/backend
pm2 start server.js --name "backend" --no-daemon &

# Start frontend with serve
cd /app/frontend/dist
serve -s . -l 3000 &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
