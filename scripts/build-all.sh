#!/bin/bash

# Build All Platforms Script
# This script attempts to build for all platforms, continuing even if one fails

echo "🚀 Starting multi-platform build..."
echo "=================================="

BUILD_STATUS=0

# Build web first (required for all platforms)
echo ""
echo "📦 Building web assets..."
bun run build:web
if [ $? -ne 0 ]; then
    echo "❌ Web build failed - cannot continue"
    exit 1
fi
echo "✅ Web build complete"

# Compile Electron
echo ""
echo "⚡ Compiling Electron..."
bun run electron:compile
if [ $? -ne 0 ]; then
    echo "❌ Electron compile failed"
    BUILD_STATUS=1
else
    echo "✅ Electron compiled"
fi

# Build Mac
echo ""
echo "🍎 Building Mac..."
electron-builder --mac 2>/dev/null
if [ $? -ne 0 ]; then
    echo "⚠️  Mac build failed (may need code signing)"
    BUILD_STATUS=1
else
    echo "✅ Mac build complete"
fi

# Build Windows
echo ""
echo "🪟 Building Windows..."
electron-builder --win 2>/dev/null
if [ $? -ne 0 ]; then
    echo "⚠️  Windows build failed"
    BUILD_STATUS=1
else
    echo "✅ Windows build complete"
fi

# Sync Capacitor Android
echo ""
echo "🤖 Syncing Android..."
if [ -d "android" ]; then
    npx cap sync android 2>/dev/null
    if [ $? -ne 0 ]; then
        echo "⚠️  Android sync failed"
        BUILD_STATUS=1
    else
        echo "✅ Android synced"
    fi
else
    echo "⏭️  Android not initialized (run: bun run cap:init:android)"
fi

# Sync Capacitor iOS
echo ""
echo "📱 Syncing iOS..."
if [ -d "ios" ]; then
    npx cap sync ios 2>/dev/null
    if [ $? -ne 0 ]; then
        echo "⚠️  iOS sync failed (may need Xcode)"
        BUILD_STATUS=1
    else
        echo "✅ iOS synced"
    fi
else
    echo "⏭️  iOS not initialized (run: bun run cap:init:ios)"
fi

# Summary
echo ""
echo "=================================="
if [ $BUILD_STATUS -eq 0 ]; then
    echo "🎉 All builds completed successfully!"
else
    echo "⚠️  Build completed with some failures"
fi

# List outputs
echo ""
echo "📁 Build outputs:"
ls -la release/*.dmg release/*.exe 2>/dev/null || echo "   No desktop builds found"

exit $BUILD_STATUS
