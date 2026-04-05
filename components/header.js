(function () {
  document.write(`
    <header id="header" class="header d-flex justify-content-between">
      <button id="menu-toggle" class="menu-toggle btn" type="button" aria-label="Open menu" aria-expanded="false">
        <i class="ph-bold ph-list"></i>
      </button>

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
              </a>
              <button class="menu__dropbtn-inline btn" type="button" aria-label="Open Portfolio menu" aria-expanded="false">
                <i class="ph-bold ph-caret-down"></i>
              </button>
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
              </a>
              <button class="menu__dropbtn-inline btn" type="button" aria-label="Open Resume menu" aria-expanded="false">
                <i class="ph-bold ph-caret-down"></i>
              </button>
              <ul class="menu__dropdown">
                <li><a class="menu__dropdown-link" href="cv.html">View CV</a></li>
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
              </a>
              <button class="menu__dropbtn-inline btn" type="button" aria-label="Open More menu" aria-expanded="false">
                <i class="ph-bold ph-caret-down"></i>
              </button>
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

      <button class="menu-backdrop" type="button" aria-label="Close menu"></button>

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
    var pageMeta = {
      "index.html": { label: "Home", section: null },
      "about.html": { label: "About", section: null },
      "portfolio.html": { label: "Portfolio", section: null },
      "projects.html": { label: "Projects", section: "Portfolio" },
      "case-studies.html": { label: "Case Studies", section: "Portfolio" },
      "github-repos.html": { label: "GitHub Repos", section: "Portfolio" },
      "live-demos.html": { label: "Live Demos", section: "Portfolio" },
      "resume.html": { label: "Resume", section: null },
      "cv.html": { label: "View CV", section: "Resume" },
      "experience.html": { label: "Experience", section: "Resume" },
      "certifications.html": { label: "Certifications", section: "Resume" },
      "skills.html": { label: "Skills", section: "Resume" },
      "contact.html": { label: "Contact", section: null },
      "blog.html": { label: "Blog", section: "More" },
      "services.html": { label: "Services", section: "More" },
      "platform-architecture.html": { label: "Platform Flow", section: "More" },
      "testimonials.html": { label: "Testimonials", section: "More" },
      "achievements.html": { label: "Achievements", section: "More" }
    };

    var groupedRoutes = {
      portfolio: ["portfolio.html", "projects.html", "case-studies.html", "github-repos.html", "live-demos.html"],
      resume: ["resume.html", "cv.html", "experience.html", "certifications.html", "skills.html"],
      more: ["blog.html", "services.html", "platform-architecture.html", "testimonials.html", "achievements.html"]
    };

    var mainLinks = document.querySelectorAll("#menu .menu__item > .menu__link");
    mainLinks.forEach(function (link) {
      var href = link.getAttribute("href").split("#")[0];
      if (href === current) link.classList.add("active");
    });

    var groups = document.querySelectorAll("#menu .menu__item--has-dropdown");
    var dropdownLinks = document.querySelectorAll("#menu .menu__dropdown-link");
    var header = document.getElementById("header");
    var menuToggle = document.getElementById("menu-toggle");
    var menuBackdrop = header ? header.querySelector(".menu-backdrop") : null;
    var mobileQuery = window.matchMedia("(max-width: 991px)");

    function injectBreadcrumb() {
      var wrapper = document.querySelector(".content__wrapper");
      if (!wrapper) return;

      var meta = pageMeta[current] || {
        label: current.replace(".html", "").replace(/-/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); }),
        section: null
      };

      var crumbItems = ['<a href="index.html">Home</a>'];
      if (meta.section) {
        crumbItems.push("<span>" + meta.section + "</span>");
      }
      if (current !== "index.html") {
        crumbItems.push("<span>" + meta.label + "</span>");
      }

      var breadcrumbWrap = document.createElement("div");
      breadcrumbWrap.className = "content__block breadcrumb-block";
      breadcrumbWrap.innerHTML = '<nav class="site-breadcrumb" aria-label="Breadcrumb">' + crumbItems.join('<i class="ph-bold ph-caret-right"></i>') + "</nav>";

      wrapper.insertBefore(breadcrumbWrap, wrapper.firstChild);
    }

    function closeMobileMenu() {
      if (!header || !menuToggle) return;
      header.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    injectBreadcrumb();

    if (menuToggle && header) {
      menuToggle.addEventListener("click", function () {
        var willOpen = !header.classList.contains("menu-open");
        header.classList.toggle("menu-open", willOpen);
        document.body.classList.toggle("menu-open", willOpen);
        menuToggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
      });
    }

    if (menuBackdrop) {
      menuBackdrop.addEventListener("click", closeMobileMenu);
    }

    dropdownLinks.forEach(function (link) {
      var href = link.getAttribute("href").split("#")[0];
      if (href === current) {
        link.classList.add("active");
        var parent = link.closest(".menu__item--has-dropdown");
        if (parent) {
          parent.classList.add("active", "is-open");
          var top = parent.querySelector(":scope > .menu__link");
          if (top) top.classList.add("active");
          var b = parent.querySelector(":scope > .menu__dropbtn-inline");
          if (b) b.setAttribute("aria-expanded", "true");
        }
      }
    });

    groups.forEach(function (item) {
      var key = item.getAttribute("data-group");
      var topLink = item.querySelector(":scope > .menu__link");
      var dropBtn = item.querySelector(":scope > .menu__dropbtn-inline");

      if (groupedRoutes[key] && groupedRoutes[key].indexOf(current) !== -1 && topLink) {
        topLink.classList.add("active");
      }

      if (dropBtn) {
        dropBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          var willOpen = !item.classList.contains("is-open");

          groups.forEach(function (other) {
            other.classList.remove("is-open");
            var ob = other.querySelector(":scope > .menu__dropbtn-inline");
            if (ob) ob.setAttribute("aria-expanded", "false");
          });

          if (willOpen) {
            item.classList.add("is-open");
            dropBtn.setAttribute("aria-expanded", "true");
          }
        });
      }
    });

    document.querySelectorAll("#menu .menu__link, #menu .menu__dropdown-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (mobileQuery.matches) closeMobileMenu();
      });
    });

    window.addEventListener("resize", function () {
      if (!mobileQuery.matches) closeMobileMenu();
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".menu__item--has-dropdown")) {
        groups.forEach(function (item) {
          item.classList.remove("is-open");
          var btn = item.querySelector(":scope > .menu__dropbtn-inline");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      }
    });
  });
})();
