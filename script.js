/* ================= MOBILE NAVIGATION ================= */

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


if (toggle && nav) {

  toggle.addEventListener("click", () => {

    const isOpen =
      nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    toggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation"
        : "Open navigation"
    );

  });


  document
    .querySelectorAll(".nav a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );

        toggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

    });


  /*
   * Close mobile navigation when clicking outside it.
   */

  document.addEventListener("click", (event) => {

    const clickedInsideNav =
      nav.contains(event.target);

    const clickedToggle =
      toggle.contains(event.target);

    if (
      !clickedInsideNav &&
      !clickedToggle &&
      nav.classList.contains("open")
    ) {

      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "Open navigation"
      );

    }

  });


  /*
   * Close the mobile menu when the Escape key is pressed.
   */

  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      nav.classList.contains("open")
    ) {

      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "Open navigation"
      );

      toggle.focus();

    }

  });

}


/* ================= SCROLL ANIMATION ================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observerInstance.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.08
      }
    );


  revealElements.forEach((element) => {

    observer.observe(element);

  });

} else {

  /*
   * Fallback for older browsers.
   */

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

}