(function () {
  document.write(`
    <header id="header" class="header d-flex justify-content-between">
      <div id="menu-backdrop" class="menu-backdrop" aria-hidden="true"></div>

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
              <a class="menu__link btn" href="about.html">
                <span class="menu__caption">About</span>
                <i class="ph-bold ph-user"></i>
              </a>
            </li>

            <li class="menu__item menu__item--has-dropdown" data-group="portfolio">
              <a class="menu__link btn" href="portfolio.html">
                <span class="menu__caption">Portfolio</span>
                <i class="ph-bold ph-squares-four"></i>
                <i class="ph-bold ph-caret-down menu__arrow"></i>
              </a>
              <ul class="menu__dropdown">
                <li><a class="menu__dropdown-link" href="projects.html">Projects</a></li>
                <li><a class="menu__dropdown-link" href="case-studies.html">Case Studies</a></li>
                <li><a class="menu__dropdown-link" href="github-repos.html">GitHub Repos</a></li>
                <li><a class="menu__dropdown-link" href="live-demos.html">Live Demos</a></li>
              </ul>
            </li>

            <li class="menu__item menu__item--has-dropdown" data-group="resume">
              <a class="menu__link btn" href="resume.html">
                <span class="menu__caption">Resume</span>
                <i class="ph-bold ph-article"></i>
                <i class="ph-bold ph-caret-down menu__arrow"></i>
              </a>
              <ul class="menu__dropdown">
                <li><a class="menu__dropdown-link" href="resume.html#download-cv">Download CV</a></li>
                <li><a class="menu__dropdown-link" href="experience.html">Experience</a></li>
                <li><a class="menu__dropdown-link" href="certifications.html">Certifications</a></li>
                <li><a class="menu__dropdown-link" href="skills.html">Skills</a></li>
              </ul>
            </li>

            <li class="menu__item">
              <a class="menu__link btn" href="contact.html">
                <span class="menu__caption">Contact</span>
                <i class="ph-bold ph-envelope"></i>
              </a>
            </li>

            <li class="menu__item menu__item--has-dropdown" data-group="more">
              <a class="menu__link btn" href="blog.html">
                <span class="menu__caption">More</span>
                <i class="ph-bold ph-dots-three-outline"></i>
                <i class="ph-bold ph-caret-down menu__arrow"></i>
              </a>
              <ul class="menu__dropdown">
                <li><a class="menu__dropdown-link" href="blog.html">Blog</a></li>
                <li><a class="menu__dropdown-link" href="services.html">Services</a></li>
                <li><a class="menu__dropdown-link" href="platform-architecture.html">Platform Flow</a></li>
                <li><a class="menu__dropdown-link" href="testimonials.html">Testimonials</a></li>
                <li><a class="menu__dropdown-link" href="achievements.html">Achievements</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header__controls d-flex justify-content-end">
        <button id="menu-toggle" class="menu-toggle btn" type="button" aria-label="Toggle menu" aria-expanded="false">
          <i class="ph-bold ph-list"></i>
        </button>
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
    var header = document.getElementById("header");
    var menuToggle = document.getElementById("menu-toggle");
    var backdrop = document.getElementById("menu-backdrop");

    var groupedRoutes = {
      portfolio: ["portfolio.html", "projects.html", "case-studies.html", "github-repos.html", "live-demos.html"],
      resume: ["resume.html", "experience.html", "certifications.html", "skills.html"],
      more: ["blog.html", "services.html", "platform-architecture.html", "testimonials.html", "achievements.html"]
    };

    function closeMenu() {
      header.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    }

    function toggleMenu() {
      var isOpen = header.classList.toggle("menu-open");
      document.body.classList.toggle("menu-open", isOpen);
      if (menuToggle) menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    if (menuToggle) {
      menuToggle.addEventListener("click", function (e) {
        e.preventDefault();
        toggleMenu();
      });
    }

    if (backdrop) {
      backdrop.addEventListener("click", function () {
        closeMenu();
      });
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1200) closeMenu();
    });

    var mainLinks = document.querySelectorAll("#menu .menu__item > .menu__link");
    mainLinks.forEach(function (link) {
      var href = link.getAttribute("href").split("#")[0];
      if (href === current) {
        link.classList.add("active");
      }
    });

    var dropdownLinks = document.querySelectorAll("#menu .menu__dropdown-link");
    dropdownLinks.forEach(function (link) {
      var href = link.getAttribute("href").split("#")[0];
      if (href === current) {
        link.classList.add("active");
        var parentItem = link.closest(".menu__item--has-dropdown");
        if (parentItem) {
          parentItem.classList.add("active", "is-open");
          var top = parentItem.querySelector(":scope > .menu__link");
          if (top) top.classList.add("active");
        }
      }

      link.addEventListener("click", function () {
        if (window.innerWidth < 1200) closeMenu();
      });
    });

    var groups = document.querySelectorAll("#menu .menu__item--has-dropdown");
    groups.forEach(function (item) {
      var key = item.getAttribute("data-group");
      var topLink = item.querySelector(":scope > .menu__link");
      if (groupedRoutes[key] && groupedRoutes[key].indexOf(current) !== -1 && topLink) {
        topLink.classList.add("active");
        item.classList.add("active");
      }

      topLink.addEventListener("click", function (e) {
        if (window.innerWidth < 1200) {
          e.preventDefault();
          var willOpen = !item.classList.contains("is-open");
          groups.forEach(function (other) {
            other.classList.remove("is-open");
          });
          if (willOpen) item.classList.add("is-open");
        }
      });
    });

    var normalLinks = document.querySelectorAll("#menu .menu__item:not(.menu__item--has-dropdown) .menu__link");
    normalLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 1200) closeMenu();
      });
    });

    document.addEventListener("click", function (e) {
      if (window.innerWidth < 1200 && !e.target.closest(".menu__item--has-dropdown") && !e.target.closest("#menu-toggle")) {
        groups.forEach(function (item) {
          item.classList.remove("is-open");
        });
      }
    });
  });
})();

