import React, { useState, type SubmitEvent, type ChangeEvent } from "react"
import emailjs from "@emailjs/browser"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet
} from "./components/ui/field"

import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Button } from "./components/ui/button"

import NavMenu from "./NavMenu.tsx"


// 1. Define the interface for form data state
interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  // 2. Handle typesafe input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle form submission
  const sendEmail = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    // Access environment variables securely in Vite
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Pass formData keys directly as template parameters
      await emailjs.send(
        serviceId,
        templateId,
        formData as unknown as Record<string, unknown>,
        publicKey
      );
      
      setStatusMessage("Message sent successfully!");
      setFormData({ from_name: "", from_email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <>
    <NavMenu />
    <div id="contact-form">
      <span id="dash-lg">&ndash;</span>
      <h2>Contact</h2>
      <p>Got a question about a piece, pricing, or custom work? Send me a note below and I’ll get back to you soon.</p>
      <br />
      <br />
      <form onSubmit={sendEmail}>
        <FieldSet>
        <FieldGroup>
          <Field>
          <FieldLabel className="label" htmlFor="from_name">Full name</FieldLabel>
          <Input
            type="text"
            id="contact-from-name"
            name="from_name"
            placeholder="Your name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
          <FieldLabel className="label" htmlFor="from_email" >Email</FieldLabel>
          <Input
            type="email"
            id="contact-from-email"
            name="from_email"
            placeholder="sayhello@youremail.com"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
          <FieldLabel className="label" htmlFor="message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            placeholder="Please detail your gallery, press, or acquisition inquiry..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
          </Field>
        </FieldGroup>

        <Button  id="contact-btn"
          type="submit" 
          disabled={isSubmitting}
          style={{ width: "100%", padding: "10px", cursor: isSubmitting ? "not-allowed" : "pointer" }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        </FieldSet>
      </form>

      {statusMessage && (
        <p style={{ marginTop: "15px", textAlign: "center", fontWeight: "bold" }}>
          {statusMessage}
        </p>
      )}
    </div>
    </>
  );
};

export default Contact
