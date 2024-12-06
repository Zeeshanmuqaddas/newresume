// TypeScript to update dynamic content if needed

document.addEventListener("DOMContentLoaded", () => {
    // Example: Dynamic content (can be used if you want to modify resume data programmatically)
    const name = "John Doe"; // Change to your name
    const email = "john.doe@example.com"; // Your email
    const phone = "+1234567890"; // Your phone number
  
    document.querySelector("h1")!.textContent = name;
    document.querySelector(".personal-info .title")!.textContent = "Web Developer & UI/UX Designer";
    document.querySelector(".contact-info a[href^='mailto:']")!.textContent = email;
    document.querySelector(".contact-info a[href^='tel:']")!.textContent = phone;
  });
  