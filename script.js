
    const backToTopBtn = document.getElementById("backToTop");

    // Show button when scrolling down 200px
    window.onscroll = function() {
      if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };

    // Scroll back to top smoothly
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });