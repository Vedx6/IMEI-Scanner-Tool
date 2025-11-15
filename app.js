// app.js - Reads PAID API URL from window.env and exposes it as window.PAID_API_URL
// This file should be loaded AFTER config.js in your HTML.
(function(){
  'use strict';

  // Read the paid API URL from the environment object set in config.js
  var paidUrl = null;
  try {
    paidUrl = (window.env && window.env.PAID_API_URL) ? window.env.PAID_API_URL : null;
  } catch (e) {
    console.warn('Failed to read window.env.PAID_API_URL', e);
  }

  // Expose to global scope for the rest of the app to use
  window.PAID_API_URL = paidUrl;

  if (!paidUrl || paidUrl === 'PASTE_YOUR_PAID_API_URL_HERE') {
    console.warn('PAID_API_URL is not set. Please create config.js and set window.env.PAID_API_URL');
  } else {
    try {
      // Masked log (do not log full secret)
      var masked = paidUrl.slice(0, 12) + '...' + paidUrl.slice(-8);
      console.info('PAID_API_URL loaded (masked):', masked);
    } catch (e) { /* ignore */ }
  }

})();
