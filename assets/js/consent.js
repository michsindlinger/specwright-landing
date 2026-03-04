/**
 * Cookie Consent + Analytics Manager
 * Loads GA4 and Microsoft Clarity only after user consent.
 *
 * Replace the placeholder IDs before going live:
 *   GA4_MEASUREMENT_ID  → your G-XXXXXXXXXX
 *   CLARITY_PROJECT_ID  → your Clarity project ID
 */

(function () {
  'use strict';

  var GA_ID = 'G-YRQCJH4PRC';
  var CLARITY_ID = 'vqlgu26p2g';
  var STORAGE_KEY = 'specwright_consent';

  // --- helpers ---------------------------------------------------------

  function getConsent() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function setConsent(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* silent */ }
  }

  // --- tracking loaders ------------------------------------------------

  function loadGA4() {
    if (document.getElementById('ga4-script')) return;
    var s = document.createElement('script');
    s.id = 'ga4-script';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function loadClarity() {
    if (document.getElementById('clarity-script')) return;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.id = 'clarity-script';
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  function loadAllTracking() {
    loadGA4();
    loadClarity();
  }

  // --- consent banner --------------------------------------------------

  function injectBanner() {
    var banner = document.createElement('div');
    banner.id = 'consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie-Einstellungen');
    banner.innerHTML =
      '<div style="' +
        'position:fixed;bottom:0;left:0;right:0;z-index:9999;' +
        'background:#1E3A5F;color:#fff;padding:16px 24px;' +
        'font-family:Plus Jakarta Sans,system-ui,sans-serif;font-size:14px;' +
        'display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px 24px;' +
        'box-shadow:0 -2px 12px rgba(0,0,0,.15);' +
      '">' +
        '<p style="margin:0;max-width:640px;line-height:1.5;">' +
          'Wir nutzen Cookies f\u00fcr Analyse (Google Analytics) und Nutzererfahrung (Microsoft Clarity). ' +
          '<a href="/privacy.html" style="color:#00D4FF;text-decoration:underline;">Mehr erfahren</a>' +
        '</p>' +
        '<div style="display:flex;gap:8px;flex-shrink:0;">' +
          '<button id="consent-reject" style="' +
            'background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4);' +
            'padding:8px 20px;border-radius:6px;cursor:pointer;font-size:14px;font-family:inherit;' +
          '">Ablehnen</button>' +
          '<button id="consent-accept" style="' +
            'background:#00D4FF;color:#1E3A5F;border:none;' +
            'padding:8px 20px;border-radius:6px;cursor:pointer;font-weight:600;font-size:14px;font-family:inherit;' +
          '">Akzeptieren</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    document.getElementById('consent-accept').addEventListener('click', function () {
      setConsent('granted');
      banner.remove();
      loadAllTracking();
    });

    document.getElementById('consent-reject').addEventListener('click', function () {
      setConsent('denied');
      banner.remove();
    });
  }

  // --- init ------------------------------------------------------------

  function init() {
    var consent = getConsent();
    if (consent === 'granted') {
      loadAllTracking();
    } else if (consent !== 'denied') {
      // No decision yet → show banner
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectBanner);
      } else {
        injectBanner();
      }
    }
    // 'denied' → do nothing, no banner, no tracking
  }

  init();
})();
