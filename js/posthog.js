
(function () {
  const config = window.SITE_CONFIG?.posthog;

  if (!config?.enabled || !config.apiKey) {
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://us-assets.i.posthog.com/static/array.js';
  script.async = true;
  script.onload = function () {
    if (!window.posthog) {
      return;
    }

    window.posthog.init(config.apiKey, {
      api_host: config.host || 'https://us.i.posthog.com',
      defaults: '2026-05-30'
    });
  };

  document.head.appendChild(script);
})();
