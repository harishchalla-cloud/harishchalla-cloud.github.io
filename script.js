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

      });

    });

}


/* ================= SCROLL ANIMATION ================= */

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

        }

      });

    },
    {
      threshold: 0.08
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });