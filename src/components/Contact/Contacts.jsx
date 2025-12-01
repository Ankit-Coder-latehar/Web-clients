import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: "",
    captcha: false,
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation Function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (formData.website.trim()) {
      try {
        new URL(formData.website);
      } catch {
        newErrors.website = "Enter a valid website URL";
      }
    }

    if (!formData.service) newErrors.service = "Select a service type";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (!formData.captcha) newErrors.captcha = "Please confirm CAPTCHA";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">Want to Increase Admissions</h1>
      <p className="text-center mt-2 max-w-2xl text-gray-600">
        Ready to transform your business with immersive technology? Get in touch with our experts today.
      </p>

      {/* Main Container */}
      <div className="w-full max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Info Card */}
        <div className="bg-gradient-to-b from-[#ffe8e8] to-white rounded-3xl shadow-md p-10 border border-gray-200">
          <div className="space-y-8 text-gray-700">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <span>digital@techdigistics.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <span>+91 99908-13304</span>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6" />
              <div>
                <span className="text-red-500 font-semibold">Chandigarh</span> -{" "}
                <span className="font-semibold">Delhi - Haryana</span>
                <p className="text-gray-700 text-sm">
                  407, 4th Floor, Jubilee Walk, Sector 70, Chandigarh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-center mb-6">Connect With Us</h2>

          <form
            action="https://formspree.io/f/xyzqaebp"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded-md px-4 py-3 w-full"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-md px-4 py-3 w-full"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex border rounded-md overflow-hidden">
                  <span className="px-4 py-3 border-r bg-gray-100">+91</span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 w-full"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="website"
                  placeholder="Your Website Link"
                  value={formData.website}
                  onChange={handleChange}
                  className="border rounded-md px-4 py-3 w-full"
                />
                {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
              </div>
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="border rounded-md px-4 py-3 w-full text-gray-600"
              >
                <option value="">Select Service Type</option>
                <option value="SEO">PPC</option>
                <option value="SEO">SEO</option>
                <option value="SEO">Web Design</option>
                <option value="Branding">Branding</option>
                <option value="Other">Other</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Comment"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-md px-4 py-3 w-full h-32"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* CAPTCHA */}
            <div className="border rounded-md p-3 w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="captcha"
                  checked={formData.captcha}
                  onChange={handleChange}
                  className="w-5 h-5 border"
                />
                <span>I'm not a robot</span>
              </div>

              <div className="text-xs text-gray-500 text-right">
                reCAPTCHA <br /> Privacy · Terms
              </div>
            </div>
            {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}

            <button
              type="submit"
              className="bg-[#ff8f8f] text-white px-8 py-2 rounded-full block mx-auto hover:bg-[#ff7b7b] transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
