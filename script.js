document.addEventListener("DOMContentLoaded", () => {
  const applyBtn = document.querySelector(".hero--call-to-action");
  const icons = document.querySelectorAll(".icons i");
  const hamburg = document.querySelector(".hamburg");
  const logos = document.querySelectorAll(".logo");

  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      window.location.href = "index.html#home";
    });
  });

  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      window.location.href = "./admission-form.html";
    });
  }

  icons.forEach((icon) => {
    setTimeout(() => {
      icon.classList.remove("hidden");
    }, 200);
  });
  var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });

  let goToTopBtn = document.getElementById("goToTopBtn");
  let floatingApplyBtn = document.getElementById("apply-now");

  window.onscroll = function () {
    toggleFixedButtons(goToTopBtn, floatingApplyBtn);
  };

  function toggleFixedButtons(...btns) {
    btns.forEach((btn) => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        btn.style.display = "flex";
      } else {
        btn.style.display = "none";
      }
    });
  }
  goToTopBtn.addEventListener("click", () => {
    scrollToTop();
  });

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function countUp() {
    console.log(
      "Element's top is above the bottom of the screen, executing function..."
    );
    const metrics = document.querySelectorAll("#legacy .metric h1");

    metrics.forEach((metric) => {
      const upperBound = parseInt(metric.innerText, 10);
      metric.innerText = 0;

      const duration = 1000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.round(progress * upperBound);

        if (metric != metrics[1]) {
          metric.innerText = currentValue + "+";
        } else {
          metric.innerText = currentValue;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (metric != metrics[1]) {
            metric.innerText = upperBound + "+";
          } else {
            metric.innerText = upperBound;
          }
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  function onElementVisible(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Element is visible");
        countUp();
      }
    });
  }

  let observer = new IntersectionObserver(onElementVisible, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  let target = document.getElementById("legacy");
  observer.observe(target);

  const navbar = document.querySelector(".header .nav");
  hamburg.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
