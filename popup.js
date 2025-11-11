let isEnabled = true;

const statusEl = document.getElementById('status');
const toggleBtn = document.getElementById('toggleBtn');

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs[0] && tabs[0].url && tabs[0].url.includes('twitch.tv')) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getStatus' }, (response) => {
      if (response) {
        updateUI(response.enabled);
      }
    });
  }
});

toggleBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].url && tabs[0].url.includes('twitch.tv')) {
      isEnabled = !isEnabled;
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle', enabled: isEnabled }, (response) => {
        if (response) {
          updateUI(response.enabled);
        }
      });
    }
  });
});

function updateUI(enabled) {
  isEnabled = enabled;
  statusEl.textContent = enabled ? 'Enabled' : 'Disabled';
  statusEl.className = enabled ? 'enabled' : 'disabled';
  toggleBtn.textContent = enabled ? 'Disable' : 'Enable';
}
