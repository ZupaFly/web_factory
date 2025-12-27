/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import PageTemplate from "./PageTemplate";

const Contacts: React.FC<{ data: any }> = ({ data }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submission simulated!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    })
  };

  const contacts = [
    { icon: <FaFacebook />, label: "Facebook", link: "https://www.facebook.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com" },
    { icon: <FaTwitter />, label: "Twitter", link: "https://www.twitter.com" },
    { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com" },
  ];

  return (
    <PageTemplate data={data}>
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mt-2 self-start"
          >
            Send
          </button>
        </form>

        <div className="flex-1 flex flex-col gap-6 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Contacts</h2>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:info@example.com"
              onClick={(e) => e.preventDefault()}
              className="text-blue-600 hover:underline transition"
            >
              info@example.com
            </a>
            <a
              href="tel:+1234567890"
              onClick={(e) => e.preventDefault()}
              className="text-blue-600 hover:underline transition"
            >
              +1 234 567 890
            </a>
            <p>123 Learning Street, EduCity, Spain</p>
          </div>

          <div className="flex gap-4 mt-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
              >
                <span className="text-xl">{c.icon}</span>
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Contacts;
