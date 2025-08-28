import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const WEBINAL_URL = import.meta.env.VITE_GTECH_WEBINAL_URL;
// const WEBINAL_TOKEN = import.meta.env.VITE_GTECH_WEBINAL_TOKEN;

const Webinar: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.reload.ng/Bot/app/Gtechafrica/webinar/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJKV1QiLCJqdGkiOiIxIiwiaXNzIjoiQmxhY2tTaWxpY29uIiwiaWF0IjoxNzUwMTcwNDQ1LCJleHAiOjIzNzIyNTA0NDV9.uiGW-qDngP5ui6Z1l3KLtCqTIhoUPbCBL_RY8qp3VPSeRDuUDG1HLhyNxKrHCh9FjXOwKjbiMdRCqekCm8FmFg",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect after 10 seconds if submitted
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate("/", { replace: true });
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, navigate]);

  if (isSubmitting) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-100 to-green-300">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-700 mb-4"></div>
        <p className="text-xl font-semibold text-green-900">
          Submitting your registration...
        </p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-100 to-green-300 text-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl animate-fade-in">
          <h2 className="text-3xl font-extrabold text-green-700 mb-4">
            🎉 Registration Successful!
          </h2>
          <p className="text-green-900 mb-6">
            Thank you for registering for the webinar! You will be redirected to
            the homepage shortly.
          </p>
          <div className="border-t-4 border-green-700 w-16 mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10"
    >
      <div className="mb-6 text-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Land Remote IT Jobs That Pay in Dollars & Euros — From Home
        </h1>
        <p className="text-gray-600 mb-4">
          Join our free webinar to discover how Microsoft-certified Microdegrees
          help Nigerians secure global opportunities — without leaving home.
        </p>
        <div className="flex justify-center">
          <img
            src="/growtechafrica.png"
            alt="GrowTechAfrica Logo"
            className="h-14"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Webinar Registration
      </h2>
      {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-1 font-medium">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1 font-medium">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block mb-1 font-medium">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
      >
        Register
      </button>
    </form>
  );
};

export default Webinar;
