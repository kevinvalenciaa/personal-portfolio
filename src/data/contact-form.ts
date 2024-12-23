export const contactForm = {
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Your full name" },
    { name: "email", label: "Email Address", type: "email", required: true, placeholder: "your.email@example.com" },
    { name: "company", label: "Company", type: "text", required: false, placeholder: "Your company (optional)" },
    { name: "budget", label: "Budget Range", type: "select", required: false, options: ["Under $1000", "$1000-$5000", "$5000-$10000", "Above $10000"] },
    { name: "message", label: "Project Details", type: "textarea", required: true, placeholder: "Tell me about your project..." }
  ],
  submitText: "Send Message",
  successMessage: "Thank you! I will get back to you within 24 hours.",
  errorMessage: "Something went wrong. Please try again or email me directly."
};
