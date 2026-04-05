(function () {
  var year = new Date().getFullYear();
  document.write(`
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <p class="site-footer__name">Hamid Ali</p>
          <p class="site-footer__tagline">Backend Software Engineer focused on building SaaS products.</p>
        </div>

        <div class="site-footer__links">
          <a href="index.html">Home</a>
          <a href="projects.html">Projects</a>
          <a href="services.html">Services</a>
          <a href="platform-architecture.html">Platform Flow</a>
          <a href="contact.html">Contact</a>
        </div>

        <div class="site-footer__social">
          <a href="https://www.linkedin.com/in/hamid-ali-sep26" target="_blank" aria-label="LinkedIn"><i class="ph-bold ph-linkedin-logo"></i></a>
          <a href="https://wa.me/923129874339" target="_blank" aria-label="WhatsApp"><i class="ph-bold ph-whatsapp-logo"></i></a>
          <a href="mailto:alihamid2609@gmail.com?subject=Portfolio%20Inquiry" aria-label="Email"><i class="ph-bold ph-envelope-simple"></i></a>
        </div>

        <p class="site-footer__copy">&copy; ${year} Hamid Ali. Built for scalable product engineering opportunities.</p>
      </div>
    </footer>
  `);
})();



