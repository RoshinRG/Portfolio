document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            // For now, if href is "#", just scroll top or nothing
            // In a real multi-page or sectioned app, we would scroll to target id
            const target = e.currentTarget.getAttribute("href");
            if (target === "#") {
                // Determine which link was clicked based on text content
                const linkText = e.currentTarget.textContent.trim().toLowerCase();
                
                if (linkText === "about") {
                    document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
                } else if (linkText === "projects") {
                    document.querySelector(".works").scrollIntoView({ behavior: "smooth" });
                } else if (linkText === "contact") {
                    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Hire Me Button -> Scroll to bottom (contact)
    const hireBtn = document.querySelector(".hire");
    if (hireBtn) {
        hireBtn.addEventListener("click", () => {
            // Scroll to the footer section where the phone / contact is
            document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Copy Email Button -> Copy predefined email to clipboard
    const emailBtn = document.querySelector(".email");
    if (emailBtn) {
        emailBtn.addEventListener("click", () => {
            // Add actual email
            const email = "roshin.rg.2024.aids@rajalakshmi.edu.in";

            navigator.clipboard.writeText(email).then(() => {
                const originalText = emailBtn.innerHTML;
                emailBtn.innerHTML = 'Copied! <i class="fas fa-check"></i>';
                
                // Revert back after 2 seconds
                setTimeout(() => {
                    emailBtn.innerHTML = originalText;
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy email: ", err);
            });
        });
    }
});
