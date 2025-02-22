"use client"; // Required for client-side interactivity

import { useState } from "react";
import { Linkedin, Instagram, Youtube, Palette } from "lucide-react"; // Assuming you're using Lucide icons

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Call to Action */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {` Let's`} Work Together
        </h1>
        <p className="text-lg text-gray-300">
          Have a project in mind? Reach out to me, and {`let's `}create
          something amazing!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-[#121212] p-8 rounded-lg shadow-lg">
        {isSubmitted ? (
          <div className="text-center text-green-500">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p>
              Your message has been sent successfully. {`I'll`} get back to you
              soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14AFF1]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14AFF1]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#14AFF1]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-[#14AFF1] text-white font-semibold rounded-lg hover:bg-[#0F8AC0] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Find Me Online</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/olamide-famojuro-3b47a7185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#14AFF1] transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com/@henry__fame"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#14AFF1] transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/@henry__fame"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#14AFF1] transition-colors"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://henryfame.artstation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#14AFF1] transition-colors"
          >
            <Palette size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
