
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
  // Make sure EmailJS is initialized
  initEmailJS();
  
  const templateParams = {
    to_email: "isaacogero3@gmail.com",
    from_name: contactData.name,
    from_email: contactData.email,
    subject: contactData.subject,
    message: contactData.message,
  };

  try {
    const response = await emailjs.send(
      "service_e69zhbh",  // Use your actual service ID
      "template_l6l442z", // Use your actual template ID
      templateParams
    );
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};

// Function to send application form emails
export const sendApplicationEmail = async (applicationData: any) => {
  // Make sure EmailJS is initialized
  initEmailJS();
  
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

  try {
    const response = await emailjs.send(
      "service_e69zhbh",  // Use your actual service ID
      "template_l6l442z", // Use your actual template ID
      templateParams
    );
    console.log("Application email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Application email sending error:", error);
    throw error;
  }
};
