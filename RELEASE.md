# Release Guide

## Quick Start

Create a new release by pushing a version tag:

```bash
# Bump version
npm version patch  # or minor, or major

# Push with tags
git push origin main --tags
```

GitHub Actions will automatically build and upload:

- macOS DMG
- Windows installer
- Android APK

---

## Local Builds

### macOS (requires macOS)

```bash
bun run release:macos
```

**Output**: `release/DevLife Simulator-*.dmg`

### Windows (requires Windows)

```bash
bun run release:windows
```

**Output**: `release/DevLife Simulator Setup *.exe`

### Android APK

```bash
bun run release:android:apk
```

**Output**: `android/app/build/outputs/apk/release/app-release.apk`

### Android AAB (for Play Store)

```bash
bun run release:android:aab
```

**Output**: `android/app/build/outputs/bundle/release/app-release.aab`

### iOS (requires macOS + Xcode)

```bash
bun run build
npx cap sync ios
npx cap open ios
```

Then in Xcode:

1. Select "Any iOS Device"
2. Product → Archive
3. Distribute App → App Store/Ad Hoc

---

## Automated Release Process

### 1. Prepare Release

Update version in `package.json`:

```bash
npm version patch    # 1.0.0 → 1.0.1
npm version minor    # 1.0.0 → 1.1.0
npm version major    # 1.0.0 → 2.0.0
```

### 2. Push Tag

```bash
git push origin main --tags
```

### 3. GitHub Actions

Workflows automatically:

- Build macOS DMG (unsigned)
- Build Windows installer
- Build Android APK
- Create GitHub Release
- Upload all artifacts

### 4. Manual iOS

iOS requires manual Xcode build (free GitHub Actions doesn't support):

1. Build locally following steps above
2. Upload IPA to release manually

---

## Platform Matrix

| Platform    | Auto Build | Manual Build        | Distribution   |
| ----------- | ---------- | ------------------- | -------------- |
| **macOS**   | ✅ Yes     | ✅ Yes              | DMG file       |
| **Windows** | ✅ Yes     | ✅ Yes (on Windows) | NSIS installer |
| **Android** | ✅ Yes     | ✅ Yes              | APK/AAB        |
| **iOS**     | ❌ No      | ✅ Yes (Xcode)      | IPA            |

---

## Troubleshooting

### macOS: Build fails with signing error

**Solution**: Builds are unsigned by default. Users will see "Cannot verify developer" warning - this is expected for free distribution.

### Windows: Missing dependencies

**Solution**: Run on Windows machine or use GitHub Actions.

### Android: Gradle build fails

**Solution**:

```bash
cd android
./gradlew clean
./gradlew assembleRelease
```

### iOS: Archive fails

**Solution**: Check signing certificates in Xcode project settings.

---

## Version Management

### Semantic Versioning

- **Patch** (1.0.X): Bug fixes, minor changes
- **Minor** (1.X.0): New features, backwards compatible
- \*_Major_

* (X.0.0): Breaking changes

### Pre-release Tags

For beta/alpha releases:

```bash
git tag v1.0.0-beta.1
git push origin v1.0.0-beta.1
```

---

## Release Checklist

Before creating a release:

- [ ] Update version in `package.json`
- [ ] Test all platforms locally
- [ ] Update CHANGELOG.md
- [ ] Verify all assets (images, audio) are included
- [ ] Test buy me a coffee links
- [ ] Push commits and tags
- [ ] Wait for GitHub Actions to complete
- [ ] Download and test release artifacts
- [ ] Write release notes on GitHub

---

## Distribution

### Independent Distribution (Current)

**macOS**:

- Share DMG file directly
- Users: Right-click .app → Open (to bypass Gatekeeper)

**Windows**:

- Share .exe installer
- Users: Install normally

**Android**:

- Share APK file
- Users: Enable "Install from unknown sources"

### App Store Distribution (Future)

**Requirements**:

- Apple Developer Account ($99/year)
- Google Play Developer ($25 one-time)
- Code signing certificates
- Privacy policy URL

See [implementation_plan.md](/.gemini/antigravity/brain/572a6d35-9a1a-4781-a53d-cfe7c863f0e4/implementation_plan.md) for App Store submission details.

---

## Support

For build issues:

- Check GitHub Actions logs
- Review error messages
- Open issue on GitHub

For release questions:

- See implementation plan
- Check platform-specific docs
