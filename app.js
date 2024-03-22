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


    document.addEventListener("DOMContentLoaded", function() {
        var backButton = document.querySelector(".back-btn");
        if (backButton) {
            backButton.addEventListener("click", function() {
                // Construct the URL for index.html with the portfolio section parameter
                var url = "index.html?section=portfolio";
    
                // Open the new URL in the same window
                window.location.href = url;
            });
        } else {
            console.error("Back button not found.");
        }
    
        // Check if the section parameter is 'portfolio' and activate (show) the portfolio section
        const urlParams = new URLSearchParams(window.location.search);
        const sectionParam = urlParams.get('section');
        if (sectionParam === 'portfolio') {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                portfolioSection.classList.add('active');

                  // Update the active state of the buttons
            document.querySelector(".active-btn").classList.remove("active-btn");
            document.querySelector(".control[data-id='portfolio']").classList.add("active-btn");

            // Update the active state of the sections
            document.querySelector(".active").classList.remove("active");
            portfolioSection.classList.add("active");   
            }
        }
    });


    document.addEventListener("DOMContentLoaded", function() {
        // Get a reference to the download button
        var downloadButton = document.getElementById('downloadCV');
    
        // Add a click event listener to the download button
        downloadButton.addEventListener('click', function(event) {
            // Prevent the default action of the link
            event.preventDefault();
    
            // Create an anchor element
            var downloadLink = document.createElement('a');
    
            // Set the href attribute to the URL of the document to download
            downloadLink.href = 'https://drive.google.com/file/d/1i6t2Ejt45LhM5eLzeANce4Z1JyHnuIpO/view?usp=sharing'; // Replace 'path/to/your/cv.pdf' with the actual path to your CV
    
            downloadLink.target = '_blank';
    
            // Append the anchor element to the document body
            document.body.appendChild(downloadLink);
    
            // Trigger a click event on the anchor element
            downloadLink.click();
    
            // Remove the anchor element from the document body
            document.body.removeChild(downloadLink);
        });
    });
    

})();

// function scrollToSectionAndControl(sectionId) {
//  // Call the scrollToSection function
//      scrollToSection(sectionId);
  
//      // Add your control logic here
//      // For example, you can add or remove classes, update styles, etc.
//      document.querySelector(".active-btn").classList.remove("active-btn");
//      document.querySelector(".control[data-id='" + sectionId + "']").classList.add("active-btn");
//      document.querySelector(".active").classList.remove("active");
//      document.getElementById(sectionId).classList.add("active");
//   }

  
