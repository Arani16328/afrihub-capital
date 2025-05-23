
import emailjs from 'emailjs-com';

// Initialize EmailJS
export const initEmailJS = () => {
  // Initialize with your EmailJS User ID
  emailjs.init("qi2jESWU3B2JU26K8");
};

// Function to send general contact form emails
export const sendContactEmail = async (contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    to_email: "isaacogero3@gmail.com",
    from_name: contactData.name,
    from_email: contactData.email,
    subject: contactData.subject,
    message: contactData.message,
  };

  return emailjs.send("default_service", "template_default", templateParams);
};

// Function to send application form emails
export const sendApplicationEmail = async (applicationData: any) => {
  const templateParams = {
    to_email: "isaacogero3@gmail.com",
    from_name: applicationData.fullName,
    from_email: applicationData.email,
    subject: `New Application: ${applicationData.program} Program`,
    message: `
      Full Name: ${applicationData.fullName}
      ID/Birth Certificate: ${applicationData.idNumber}
      Email: ${applicationData.email}
      Phone: ${applicationData.phone}
      Program: ${applicationData.program}
      Campus: ${applicationData.campus}
      Education: ${applicationData.education}
      Additional Information: ${applicationData.message || "None provided"}
    `,
  };

  return emailjs.send("default_service", "template_default", templateParams);
};
