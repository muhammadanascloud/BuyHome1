"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields.");
      setSuccessMessage("");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("https://formspree.io/f/xlderjbe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent!");
        setErrorMessage("");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMessage("Oops! Something went wrong. Please try again.");
        setSuccessMessage("");
      }
    } catch {
      setErrorMessage("There was a problem sending your message. Please try again.");
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-black text-white px-4 mt-24 md:mt-32">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg mt-4 md:mt-8">
        <h1 className="text-5xl md:text-6xl font-heading text-heading mb-8 text-center">
          <span className="text-white">Contact</span> <span className="text-blue-500">Us</span>
        </h1>

        {successMessage && <p className="text-center text-green-500 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-center text-red-500 mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-text mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 rounded-lg border ${!name && errorMessage ? "border-red-500" : ""} text-black outline-none focus:ring-2 focus:ring-accent`}
            />
          </div>

          <div>
            <label className="block text-text mb-2">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 rounded-lg border ${!isValidEmail(email) && errorMessage ? "border-red-500" : ""} text-black outline-none focus:ring-2 focus:ring-accent`}
            />
          </div>

          <div>
            <label className="block text-text mb-2">Your Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows={5}
              className={`w-full px-4 py-2 rounded-lg border ${!message && errorMessage ? "border-red-500" : ""} text-black outline-none focus:ring-2 focus:ring-accent`}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-6 rounded-lg font-bold w-full transition-all duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:from-blue-300 hover:to-blue-500"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
