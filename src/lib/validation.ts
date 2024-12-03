export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData) {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  } else if (data.subject.trim().length < 5) {
    errors.subject = "Subject must be at least 5 characters";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (data.message.trim().length > 1000) {
    errors.message = "Message must be less than 1000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
