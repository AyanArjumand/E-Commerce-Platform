# E-Commerce Platform Start Script
# This script starts both backend and frontend servers
# Run: .\start.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting E-Commerce Platform" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB is running
Write-Host "Checking MongoDB connection..." -ForegroundColor Yellow
$mongoRunning = $false
try {
    $mongoTest = Test-NetConnection -ComputerName localhost -Port 27017 -WarningAction SilentlyContinue
    if ($mongoTest.TcpTestSucceeded) {
        $mongoRunning = $true
        Write-Host "✓ MongoDB is running" -ForegroundColor Green
    }
} catch {
    # Port check failed
}

if (-not $mongoRunning) {
    Write-Host "✗ MongoDB is not running!" -ForegroundColor Red
    Write-Host "  Please start MongoDB before running this script." -ForegroundColor Yellow
    Write-Host "  You can start MongoDB Compass or run 'mongod' in a terminal." -ForegroundColor Yellow
    Write-Host ""
    $continue = Read-Host "Continue anyway? (y/n)"
    if ($continue -ne "y") {
        exit 1
    }
}

Write-Host ""
Write-Host "Starting backend server..." -ForegroundColor Yellow
Write-Host "Backend will run on http://localhost:5000" -ForegroundColor Cyan

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; npm run dev"

Write-Host ""
Write-Host "Starting frontend server..." -ForegroundColor Yellow
Write-Host "Frontend will run on http://localhost:3000" -ForegroundColor Cyan

Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; npm run dev"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Both servers are starting!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C in each terminal window to stop the servers" -ForegroundColor Yellow
Write-Host ""
