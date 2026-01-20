# 启动脚本
#!/bin/bash

#if [ -d "frontend" ] && [ -f "frontend/package.json" ]; then
#    cd frontend
#    npm install
#    npm run build
#    cd ..
#fi

if [ -d "backend" ] && [ -f "backend/package.json" ]; then
    cd backend
    npm install
    cd ..
fi