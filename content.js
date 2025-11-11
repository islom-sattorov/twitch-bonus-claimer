let isRunning = true;

function claimBonus() {
  if (!isRunning) return;

  const bonusButton = document.querySelector('button[class*="claimable-bonus"]') ||
                      document.querySelector('button[aria-label*="Получить бонус"]') ||
                      document.querySelector('button[aria-label*="Claim Bonus"]') ||
                     document.querySelector('button[class*="ScCoreButton"][class*="ScCoreButtonSuccess"]');

  if (bonusButton) {
    bonusButton.click();
    console.log('Twitch Bonus Claimer: Bonus claimed!', new Date().toLocaleTimeString());
  } else {
    console.log('Twitch Bonus Claimer: No bonus available', new Date().toLocaleTimeString());
  }
}

// 1 minute
const INTERVAL = 1 * 60 * 1000;

setTimeout(claimBonus, 1000);

const intervalId = setInterval(claimBonus, INTERVAL);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggle') {
    isRunning = request.enabled;
    console.log('Twitch Bonus Claimer:', isRunning ? 'Enabled' : 'Disabled');
    sendResponse({ success: true, enabled: isRunning });
  } else if (request.action === 'getStatus') {
    sendResponse({ enabled: isRunning });
  }
  return true;
});
