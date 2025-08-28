import React, { useState, useEffect } from "react";
import {
  Upload,
  FileText,
  Calendar,
  User,
  Mail,
  Phone,
  Building,
  Hash,
  Globe,
  ChevronDown,
  CheckCircle,
  Loader2,
} from "lucide-react";

// --- Helper Data ---
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const defaultCountries = [
  "Ghana",
  "Nigeria",
  "United States",
  "United Kingdom",
  "Canada",
];
const defaultCourses = [
  "Cloud and Cybersecurity",
  "AI Developer",
  "Power Platform (PP)",
  "Data Engineer",
  "Data Analyst",
];
const defaultStatuses = ["Student", "Employed", "Unemployed", "Other"];
const defaultEducationLevels = [
  "High School",
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
];

// --- Form Data Type ---
interface IFormData {
  firstName: string;
  lastName: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  gender: string;
  streetAddress: string;
  streetAddressLine2: string;
  city: string;
  postalCode: string;
  country: string;
  email: string;
  mobileNumber: string;
  phoneNumber: string;
  company: string;
  cardNo: string;
  cardImage: File | null;
  course: string;
  status: string;
  levelOfEducation: string;
  additionalComments: string;
}

interface TutorRegistrationFormProps {
  onSubmit?: (data: IFormData) => void;
  onSave?: (data: IFormData) => void;
  logoUrl?: string;
  programTitle?: string;
  countries?: string[];
  courses?: string[];
  statuses?: string[];
  educationLevels?: string[];
}

// --- Input Components ---
interface InputFieldProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ElementType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type = "text",
  placeholder,
  required = false,
  icon: Icon,
  value,
  onChange,
}) => (
  <div className="relative w-full">
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    />
    {Icon && (
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    )}
  </div>
);

interface SelectFieldProps {
  id: string;
  name: string;
  required?: boolean;
  icon?: React.ElementType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}
const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  required = false,
  icon: Icon,
  value,
  onChange,
  children,
}) => (
  <div className="relative w-full">
    <select
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    >
      {children}
    </select>
    {Icon && (
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    )}
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
  </div>
);

const FormPage: React.FC<TutorRegistrationFormProps> = ({
  onSubmit,
  onSave,
  logoUrl = "/growtechafrica.png",
  programTitle = "Microsoft Skills for Jobs Microdegree Program",
  countries = defaultCountries,
  courses = defaultCourses,
  statuses = defaultStatuses,
  educationLevels = defaultEducationLevels,
}) => {
  const initialFormData: IFormData = {
    firstName: "",
    lastName: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
    streetAddress: "",
    streetAddressLine2: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
    mobileNumber: "",
    phoneNumber: "",
    company: "",
    cardNo: "",
    cardImage: null,
    course: "",
    status: "",
    levelOfEducation: educationLevels[0],
    additionalComments: "",
  };

  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [fileName, setFileName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    // Cleanup
    return () => {
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.removeEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  // --- Handlers ---
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, cardImage: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 50));

    try {
      const data = new FormData();

      // ✅ Map frontend fields to backend DTO fields
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);

      // ✅ Convert day/month/year → yyyy-MM-dd
      if (formData.birthYear && formData.birthMonth && formData.birthDay) {
        const month = String(
          new Date(`${formData.birthMonth} 1`).getMonth() + 1
        ).padStart(2, "0");
        const day = formData.birthDay.padStart(2, "0");
        const birthDate = `${formData.birthYear}-${month}-${day}`;
        data.append("birthDate", birthDate);
      }

      data.append("gender", formData.gender);

      // ✅ Combine address fields into one string
      const fullAddress = [
        formData.streetAddress,
        formData.streetAddressLine2,
        formData.city,
        formData.postalCode,
        formData.country,
      ]
        .filter(Boolean)
        .join(", ");
      data.append("address", fullAddress);

      data.append("email", formData.email);
      data.append("mobileNumber", formData.mobileNumber);
      if (formData.phoneNumber)
        data.append("phoneNumber", formData.phoneNumber);
      if (formData.company) data.append("company", formData.company);

      data.append("cardNo", formData.cardNo);
      if (formData.cardImage)
        data.append("cardImage", formData.cardImage as File);

      data.append("course", formData.course);
      data.append("status", formData.status);
      data.append("educationLevel", formData.levelOfEducation);
      if (formData.additionalComments)
        data.append("additionalComments", formData.additionalComments);

      console.log("Submitting form data:", Object.fromEntries(data.entries()));

      const response = await fetch(
        "https://api-growtechafrica.blacksillicon.com/api/registration",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData(initialFormData);
        setFileName("");
        if (onSubmit) onSubmit(formData);
      } else {
        const errorBody = await response.text();
        let errorMsg;
        try {
          const errJson = JSON.parse(errorBody);
          errorMsg = errJson.message || "Submission failed";
        } catch {
          errorMsg = errorBody || "Submission failed";
        }

        setIsSubmitting(false);

        if (
          errorMsg.toLowerCase().includes("mobile number already exists") ||
          errorMsg.toLowerCase().includes("phone number already exists") ||
          errorMsg
            .toLowerCase()
            .includes("mobile number and phone number already exists")
        ) {
          alert(errorMsg);
        } else {
          alert("Submission failed: " + errorMsg);
        }
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSave = () => {
    if (onSave) onSave(formData);
    else alert("Your progress has been saved!");
  };

  // --- Header ---
  const Header = (
    <>
      {/* Header */}
      <header
        id="site-header"
        className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-green-50/90 to-white/95 backdrop-blur-md shadow transition-all duration-300"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src="/growtechafrica.png"
              width={56}
              height={56}
              alt="GrowTechAfrica Logo"
              className="rounded-xl shadow-md group-hover:rotate-3 group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/80x80/000000/FFFFFF?text=GTA";
              }}
            />
            <span className="text-2xl font-extrabold text-gray-800 ml-3 tracking-tight group-hover:text-grass-green transition-colors duration-300">
              GrowTechAfrica
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            {[
              ["About", "/#about"],
              ["Programs", "/#programs"],
              ["Who Should Enroll", "/#who"],
              ["Career Outcomes", "/#outcomes"],
              ["Partners", "/#partners"],
              ["Team", "/#team"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative text-gray-700 hover:text-grass-green transition-colors duration-300 group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-grass-green transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="/form"
              className="ml-4 bg-grass-green text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-grass-green/40 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Enroll</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-grass-green focus:outline-none transition"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-xl animate-slideFade"
          >
            <div className="px-6 py-4 space-y-2">
              {[
                ["About", "/#about"],
                ["Programs", "/#programs"],
                ["Who Should Enroll", "/#who"],
                ["Career Outcomes", "/#outcomes"],
                ["Partners", "/#partners"],
                ["Team", "/#team"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block py-2 px-3 rounded hover:bg-gray-100 hover:text-grass-green transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              <a
                href="/form"
                className="block bg-grass-green text-white text-center py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enroll
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideFade {
          animation: slideFade 0.4s ease-out;
        }

        /* Shrink header on scroll */
        #site-header.scrolled {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </>
  );

  // --- Interfaces ---
  if (isSubmitting) {
    return (
      <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
          <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center animate-fade-in">
            <Loader2 className="mx-auto h-16 w-16 text-blue-600 animate-spin-slow mb-4" />
            <h2 className="text-3xl font-bold text-gray-700 mb-2">
              Submitting Your Application...
            </h2>
            <p className="text-gray-500">
              Hang tight! We're processing your registration.
            </p>
          </div>
        </div>
        {/* Tailwind custom styles (same as HomePage) */}
        <style>{`
          .grass-green { color: #4ade80; }
          .bg-grass-green { background-color: #4ade80; }
          .border-grass-green { border-color: #4ade80; }
          .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
        `}</style>
      </>
    );
  }

  if (isSubmitted) {
    return (
      <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
          <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center animate-fade-in">
            <CheckCircle className="mx-auto h-20 w-20 text-green-500 mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-green-600 mb-4 animate-pulse">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to the {programTitle}. We have received
              your information.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Another Application
            </button>
          </div>
        </div>
        {/* Tailwind custom styles (same as HomePage) */}
        <style>{`
          .grass-green { color: #4ade80; }
          .bg-grass-green { background-color: #4ade80; }
          .border-grass-green { border-color: #4ade80; }
          .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
        `}</style>
      </>
    );
  }

  // --- Default Form ---
  return (
    <>
      {Header}

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
          {/* Form Header */}
          <div className="text-center mb-8">
            <a href="/" className="block mb-4">
              <img
                src={logoUrl}
                alt="Institute Logo"
                className="mx-auto mb-4 h-16"
              />
            </a>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {programTitle}
            </h1>
            <p className="text-gray-500 mt-2">
              Fill out the form carefully for registration
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section: Personal Information */}
            <fieldset className="p-6 border border-gray-200 rounded-lg">
              <legend className="px-2 text-lg font-semibold text-gray-700">
                Personal Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Student Name *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <InputField
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                      icon={User}
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <InputField
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      icon={User}
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Gender *
                  </label>
                  <SelectField
                    id="gender"
                    name="gender"
                    required
                    icon={User}
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Please Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </SelectField>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Birth Date *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <SelectField
                      id="birthDay"
                      name="birthDay"
                      required
                      icon={Calendar}
                      value={formData.birthDay}
                      onChange={handleChange}
                    >
                      <option value="">Day</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </SelectField>
                    <SelectField
                      id="birthMonth"
                      name="birthMonth"
                      required
                      icon={Calendar}
                      value={formData.birthMonth}
                      onChange={handleChange}
                    >
                      <option value="">Month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </SelectField>
                    <SelectField
                      id="birthYear"
                      name="birthYear"
                      required
                      icon={Calendar}
                      value={formData.birthYear}
                      onChange={handleChange}
                    >
                      <option value="">Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </SelectField>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Section: Contact Information */}
            <fieldset className="p-6 border border-gray-200 rounded-lg">
              <legend className="px-2 text-lg font-semibold text-gray-700">
                Contact Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="streetAddress"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Address
                  </label>
                  <InputField
                    id="streetAddress"
                    name="streetAddress"
                    placeholder="Street Address"
                    icon={Globe}
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <InputField
                    id="streetAddressLine2"
                    name="streetAddressLine2"
                    placeholder="Street Address Line 2"
                    icon={Globe}
                    value={formData.streetAddressLine2}
                    onChange={handleChange}
                  />
                </div>
                <InputField
                  id="city"
                  name="city"
                  placeholder="City"
                  icon={Globe}
                  value={formData.city}
                  onChange={handleChange}
                />
                <InputField
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal / Zip Code"
                  icon={Globe}
                  value={formData.postalCode}
                  onChange={handleChange}
                />
                <div className="md:col-span-2">
                  <SelectField
                    id="country"
                    name="country"
                    icon={Globe}
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </SelectField>
                </div>
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail Address"
                  required
                  icon={Mail}
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  placeholder="Mobile Number"
                  required
                  icon={Phone}
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                <InputField
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  icon={Phone}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <InputField
                  id="company"
                  name="company"
                  placeholder="Company (Optional)"
                  icon={Building}
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </fieldset>

            {/* Section: Identification & Education */}
            <fieldset className="p-6 border border-gray-200 rounded-lg">
              <legend className="px-2 text-lg font-semibold text-gray-700">
                Identification & Education
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="cardNo"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    National Identity Number *
                  </label>
                  <InputField
                    id="cardNo"
                    name="cardNo"
                    placeholder="XXXXXXXXXX"
                    required
                    icon={Hash}
                    value={formData.cardNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    NIN Card Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="cardImage"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="cardImage"
                            name="cardImage"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                            accept="image/*,.pdf"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                      {fileName && (
                        <p className="text-sm text-green-600 mt-2">
                          <FileText className="inline-block h-4 w-4 mr-1" />
                          {fileName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Course *
                  </label>
                  <SelectField
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option value="">Please Select</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </SelectField>
                </div>
                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Current Status *
                  </label>
                  <SelectField
                    id="status"
                    name="status"
                    required
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="">Please Select</option>
                    {statuses.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </SelectField>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="levelOfEducation"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Highest Level of Education *
                  </label>
                  <SelectField
                    id="levelOfEducation"
                    name="levelOfEducation"
                    required
                    value={formData.levelOfEducation}
                    onChange={handleChange}
                  >
                    {educationLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </SelectField>
                </div>
              </div>
            </fieldset>

            {/* Section: Additional Comments */}
            <div>
              <label
                htmlFor="additionalComments"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Additional Comments
              </label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                rows={4}
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Any other information you'd like to share..."
                value={formData.additionalComments}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={handleSave}
                className="w-full sm:w-auto px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Save
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tailwind custom styles (same as HomePage) */}
      <style>{`
        .grass-green { color: #4ade80; }
        .bg-grass-green { background-color: #4ade80; }
        .border-grass-green { border-color: #4ade80; }
        .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
      `}</style>
    </>
  );
};

export default FormPage;
