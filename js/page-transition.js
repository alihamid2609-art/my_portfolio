(function () {
  function isInternalPageLink(anchor) {
    if (!anchor || !anchor.getAttribute) return false;
    var href = anchor.getAttribute('href');
    if (!href) return false;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;
    if (anchor.target === '_blank' || anchor.hasAttribute('download')) return false;

    var url;
    try {
      url = new URL(href, window.location.href);
    } catch (e) {
      return false;
    }

    if (url.origin !== window.location.origin) return false;
    if (!url.pathname.toLowerCase().endsWith('.html')) return false;

    return true;
  }

  window.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('page-ready');

    document.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (!isInternalPageLink(link)) return;

      event.preventDefault();
      var destination = link.href;

      document.body.classList.add('page-leaving');
      window.setTimeout(function () {
        window.location.href = destination;
      }, 220);
    });
  });
})();
