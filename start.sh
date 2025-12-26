#!/bin/bash
# Start Jekyll server with proper UTF-8 encoding
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
cd "$(dirname "$0")"
echo "Starting Jekyll server..."
echo "Server will be available at: http://localhost:4000"
echo "Press Ctrl+C to stop the server"
bundle exec jekyll serve --host 127.0.0.1 --port 4000
