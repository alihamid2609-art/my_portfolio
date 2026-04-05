(function () {
  document.write(`
    <header id="header" class="header d-flex justify-content-between">
      <div class="header__navigation">
        <nav id="menu" class="menu">
          <ul class="menu__list d-flex justify-content-start">
            <li class="menu__item">
              <a class="menu__link btn" href="index.html">
                <span class="menu__caption">Home</span>
                <i class="ph-bold ph-house-simple"></i>
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link btn" href="portfolio.html">
                <span class="menu__caption">Portfolio</span>
                <i class="ph-bold ph-squares-four"></i>
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link btn" href="about.html">
                <span class="menu__caption">About Me</span>
                <i class="ph-bold ph-user"></i>
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link btn" href="resume.html">
                <span class="menu__caption">Resume</span>
                <i class="ph-bold ph-article"></i>
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link btn" href="contact.html">
                <span class="menu__caption">Contact</span>
                <i class="ph-bold ph-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header__controls d-flex justify-content-end">
        <button id="color-switcher" class="color-switcher header__switcher btn" type="button" role="switch" aria-label="light/dark mode" aria-checked="true"></button>
        <a id="notify-trigger" class="header__trigger btn" href="mailto:alihamid2609@gmail.com?subject=Portfolio%20Inquiry">
          <span class="trigger__caption">Let's Talk</span>
          <i class="ph-bold ph-chat-dots"></i>
        </a>
      </div>
    </header>
  `);

  window.addEventListener("DOMContentLoaded", function () {
    var current = window.location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll("#menu .menu__link");

    links.forEach(function (link) {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });
})();