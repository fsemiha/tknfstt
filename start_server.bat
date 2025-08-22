@echo off
echo Siber Macera Oyunu - Mobil Server
echo ================================
echo.
echo Mobil cihazlar icin server baslatiliyor...
echo.
cd /d "%~dp0"
python -m http.server 8080
pause
