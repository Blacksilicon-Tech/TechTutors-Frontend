import React, { useState } from "react";

const WEBINAL_URL = import.meta.env.VITE_GTECH_WEBINAL_URL;
const WEBINAL_TOKEN = import.meta.env.VITE_GTECH_WEBINAL_TOKEN;

const Webinar: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(WEBINAL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: WEBINAL_TOKEN,
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-6 bg-green-50 rounded text-green-700 text-center">
        Thank you for registering for the webinar!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded shadow"
    >
      <div className="mb-6 text-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Land Remote IT Jobs That Pay in Dollars &amp; Euros — From Home
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
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1 font-medium">First Name</label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition"
      >
        Register
      </button>
    </form>
  );
};

export default Webinar;
