(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function scrollToSectionAndControl(sectionId) {
    // Call the scrollToSection function
    scrollToSection(sectionId);
  
    // Add your control logic here
    // For example, you can add or remove classes, update styles, etc.
    document.querySelector(".active-btn").classList.remove("active-btn");
    document.querySelector(".control[data-id='" + sectionId + "']").classList.add("active-btn");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(sectionId).classList.add("active");
  }
