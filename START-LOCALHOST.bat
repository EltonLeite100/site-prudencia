@echo off
cls
echo.
echo ========================================
echo   PRUDENCIA - DEVELOPMENT SERVER
echo ========================================
echo.
echo Iniciando servidor em http://127.0.0.1:5173/
echo.
timeout /t 2
npm run dev:local
pause
