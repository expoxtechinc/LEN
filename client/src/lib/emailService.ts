import emailjs from 'emailjs-com';

/**
 * EmailJS Service Configuration
 * 
 * This service handles sending contact form emails to aki.sokpah.link@gmail.com
 * 
 * Required Environment Variables:
 * - VITE_EMAILJS_PUBLIC_KEY: Your EmailJS public key
 * - VITE_EMAILJS_SERVICE_ID: Your Gmail service ID
 * - VITE_EMAILJS_TEMPLATE_ID: Your contact form template ID
 * - VITE_EMAILJS_TO_EMAIL: Recipient email (aki.sokpah.link@gmail.com)
 */

// Initialize EmailJS with your public key
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Send contact form email via EmailJS
 * 
 * @param formData - Contact form data
 * @returns Promise with success/error response
 */
export const sendContactEmail = async (
  formData: ContactFormData
): Promise<EmailResponse> => {
  try {
    // Validate required environment variables
    if (!PUBLIC_KEY) {
      console.error('EmailJS Public Key not configured');
      return {
        success: false,
        message: 'Email service not configured. Please try again later.',
        error: 'Missing VITE_EMAILJS_PUBLIC_KEY',
      };
    }

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'gmail_service';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'contact_form_template';
    const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'aki.sokpah.link@gmail.com';

    // Prepare email parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone || 'Not provided',
      message: formData.message,
      to_email: TO_EMAIL,
      reply_to: formData.email,
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
      };
    } else {
      return {
        success: false,
        message: 'Failed to send message. Please try again.',
        error: `Status: ${response.status}`,
      };
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.',
      error: errorMessage,
    };
  }
};

/**
 * Validate contact form data
 * 
 * @param formData - Contact form data to validate
 * @returns Object with validation results
 */
export const validateContactForm = (formData: ContactFormData) => {
  const errors: Record<string, string> = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Format phone number for display
 * 
 * @param phone - Phone number to format
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format as: +XXX XXX XXX XXX
  if (digits.length === 12) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }
  
  return phone;
};

export default {
  sendContactEmail,
  validateContactForm,
  formatPhoneNumber,
};
