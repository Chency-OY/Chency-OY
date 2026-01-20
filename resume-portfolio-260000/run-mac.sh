#!/bin/bash

DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DIR="$DIR/frontend/public"
PORT=8080

if [ ! -f "$PUBLIC_DIR/index.html" ]; then
  echo "ERROR: index.html not found:"
  echo "  $PUBLIC_DIR/index.html"
  exit 1
fi

echo "Serving directory:"
echo "  $PUBLIC_DIR"
echo "URL:"
echo "  http://localhost:$PORT"
echo

cd "$PUBLIC_DIR" || exit 1

start_server() {
  CMD=$1
  DESC=$2

  echo "Starting server using: $DESC"
  echo "Command: $CMD"
  echo

  eval "$CMD" &
  SERVER_PID=$!

  if command -v open >/dev/null 2>&1; then
    open "http://localhost:$PORT"
  fi

  echo "Server running. Press Ctrl+C to stop."
  wait $SERVER_PID
  exit 0
}

# 1. php
if command -v php >/dev/null 2>&1; then
  start_server "php -S localhost:$PORT" "PHP built-in server"
fi

# 2. ruby
if command -v ruby >/dev/null 2>&1; then
  start_server "ruby -run -e httpd . -p $PORT" "Ruby httpd"
fi

# 3. python3
if command -v python3 >/dev/null 2>&1; then
  start_server "python3 -m http.server $PORT" "Python3 http.server"
fi

# 4. python
if command -v python >/dev/null 2>&1; then
  start_server "python -m http.server $PORT" "Python http.server"
fi

echo "ERROR: No available server found (php / ruby / python3 / python)."
exit 1

