@echo off
setlocal

set "PUBLIC_DIR=frontend\public"

if not exist "%PUBLIC_DIR%\index.html" (
    echo ERROR: index.html not found:
    echo   %PUBLIC_DIR%\index.html
    pause
    exit /b
)

echo Root dir: %PUBLIC_DIR%
echo Starting server on http://localhost:8080 ...
echo.

powershell -NoLogo -ExecutionPolicy Bypass -File "local-server.ps1" -RootDir "%PUBLIC_DIR%" -Port 8080

echo.
echo ===== PowerShell exited, press any key to close =====
pause

endlocal

