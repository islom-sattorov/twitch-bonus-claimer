# Twitch Bonus Claimer Extension

A simple browser extension that automatically claims Twitch channel points bonuses every minute.

## Installation

### Chrome/Edge

1. Open Chrome/Edge and go to `chrome://extensions/` or `edge://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `twitch-bonus-claimer` folder

### Firefox

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select the `manifest.json` file from the `twitch-bonus-claimer` folder

## Usage

1. Navigate to any Twitch channel
2. The extension will automatically check for bonuses every minute
3. Click the extension icon to see status and enable/disable the auto-claimer
4. Check browser console (F12) to see claim logs

## Features

- Automatic bonus claiming every minute
- Simple enable/disable toggle
- Console logging for debugging
- Works on all Twitch channels

## Notes

- The extension only runs on `twitch.tv` pages
- You need to have the Twitch page open for it to work
- Icons are referenced but not included - the extension will work without them

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that claims bonuses
- `popup.html` - Extension popup UI
- `popup.js` - Popup functionality
