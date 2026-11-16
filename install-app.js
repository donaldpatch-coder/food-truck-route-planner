(() => {
  'use strict';
  let installPrompt;
  const buttons = [...document.querySelectorAll('[data-install-app]')];
  const status = document.querySelector('[data-install-status]');
  const say = (message) => { if (status) status.textContent = message; };
  const installed = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  if (installed()) { buttons.forEach(b => b.hidden = true); say('You’re using The Street Bite app.'); }
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); installPrompt = event;
    buttons.forEach(b => { b.hidden = false; b.textContent = 'Install The Street Bite'; });
  });
  buttons.forEach(button => button.addEventListener('click', async () => {
    if (!installPrompt) {
      const steps = document.getElementById('install-instructions');
      if (steps) { steps.open = true; steps.scrollIntoView({behavior:'smooth',block:'center'}); }
      say('iPhone/iPad: open in Safari, tap Share, then Add to Home Screen. Android/desktop: use the browser menu’s Install app or Add to Home screen option.');
      return;
    }
    const prompt = installPrompt; installPrompt = null;
    try { await prompt.prompt(); const choice = await prompt.userChoice; say(choice.outcome === 'accepted' ? 'Installation requested. Look for The Street Bite on your device.' : 'You can install later, or keep using the app in your browser.'); }
    catch { say('Use your browser menu to install, or open the app in your browser.'); }
  }));
  window.addEventListener('appinstalled', () => { installPrompt = null; buttons.forEach(b => b.hidden = true); say('The Street Bite is installed.'); });
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {
      say('The app works online. Offline setup could not finish; refresh when connected to try again.');
    });
  }
  const screen = new URLSearchParams(location.search).get('screen');
  if (screen && document.getElementById(screen)?.classList.contains('screen') && typeof showScreen === 'function') showScreen(screen);
  const connection = document.querySelector('[data-connection-status]');
  const updateConnection = () => { if (connection) connection.textContent = navigator.onLine ? '' : 'Offline: browser-saved owner tools are available after your first online visit. Sign-in, syncing, live weather, reviews and public listings need an internet connection.'; };
  window.addEventListener('online', updateConnection); window.addEventListener('offline', updateConnection); updateConnection();
})();
