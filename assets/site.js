document.documentElement.classList.add("js-ready");

const navToggle = document.querySelector("[data-nav-toggle]");
const navRoot = document.querySelector("[data-nav-root]");

if (navToggle && navRoot) {
  navToggle.addEventListener("click", () => {
    const open = navRoot.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const revealTargets = [...document.querySelectorAll("[data-reveal]")];

if ("IntersectionObserver" in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -24px 0px",
    },
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
