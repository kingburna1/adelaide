'use client';
import React, { useState } from 'react';
import {
  Zap, Mail, User, MapPin, Wheat, LayoutGrid, AlertTriangle, CheckCircle, Droplet
} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Static Data for UI Design
const SOIL_TYPES = [
  { name: 'Loamy', icon: '🍃', color: 'bg-yellow-600', desc: 'Ideal for most crops, excellent balance.' },
  { name: 'Sandy', icon: '🏖️', color: 'bg-yellow-400', desc: 'Drains quickly, poor nutrient retention.' },
  { name: 'Clay', icon: '🧱', color: 'bg-red-800', desc: 'Heavy, holds water, slow to warm.' },
  { name: 'Silt', icon: '💧', color: 'bg-blue-300', desc: 'Fertile, holds water well, compacts easily.' },
  { name: 'Peat', icon: '🪨', color: 'bg-green-900', desc: 'Organic matter, acidic, low density.' },
  { name: 'Chalky', icon: '⚪', color: 'bg-gray-200', desc: 'Alkaline, good drainage, often pale.' },
];

// Component for Input Fields
const InputField = ({ label, icon: Icon, type = 'text', name, value, placeholder, required = false, onChange }) => (
  <div className="flex flex-col space-y-1">
    <label htmlFor={name} className="text-sm font-semibold text-gray-700 flex items-center">
      {Icon && <Icon className="w-4 h-4 mr-1 text-green-700" />}
      {label} {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {type === 'select' ? (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out shadow-sm"
      >
        <option value="">Select an option</option>
        <option value="Commercial">Commercial</option>
        <option value="Subsistence">Subsistence</option>
        <option value="Organic">Organic</option>
        <option value="Vertical">Vertical</option>
        <option value="Hydroponic">Hydroponic</option>
      </select>
    ) : type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        rows="4"
        placeholder={placeholder}
        onChange={onChange}
        className="p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out shadow-sm resize-none"
      />
    ) : (
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out shadow-sm"
      />
    )}
  </div>
);

const App = () => {
  const [formData, setFormData] = useState({
    selectedSoil: null,
    email: '',
    fullName: '',
    location: '',
    farmingType: '',
    crop: '',
    observations: '',
    error: null,
    reportData: null,
    userId: 'mock-user-id-abc12345',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSoilSelect = (soilName) => {
    setFormData(prev => ({ ...prev, selectedSoil: soilName }));
  };

  const handleUnknownSoil = () => {
    setFormData(prev => ({ ...prev, selectedSoil: "I don't know my soil type." }));
  };

  const handleGenerateReport = () => {
    const { email, fullName, location, farmingType, crop, selectedSoil } = formData;

    // ✅ Check for missing required fields
    if (!email || !fullName || !location || !farmingType || !crop || !selectedSoil) {
      toast.error('⚠️ Please fill in all required fields before generating your report!', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // ✅ If all fields filled, proceed
    setFormData(prev => ({
      ...prev,
      error: null,
      reportData: `AI-generated report for ${fullName} on ${crop} farming at ${location}.`,
    }));

    toast.success('✅ Report generated successfully! Check below or your email.', {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  const { selectedSoil, email, fullName, location, farmingType, crop, observations, reportData, userId } = formData;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 p-4 md:p-10 flex flex-col items-center">
      {/* Toast Container */}
      <ToastContainer position="top-center" />

      <header className="text-center mb-10 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#38A169] tracking-tight">
         Adela Agri-Advisor <Zap className="inline-block w-8 h-8 text-[#FFC82C]" />
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          Your AI-Powered Guide to Optimal Farming Production
        </p>
      </header>

      <div className="w-full max-w-4xl space-y-8">

        {/* Section A */}
        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#FFC82C]">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-green-800">
            <Mail className="w-6 h-6 mr-2" /> 1. Delivery Information
          </h2>
          <InputField
            label="Email Address for Report Delivery"
            icon={Mail}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@farmmail.com"
            required
          />
        </div>

        {/* Section B */}
        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#38A169]">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-green-800">
            <User className="w-6 h-6 mr-2" /> 2. Your Farming Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Farmer's Full Name"
              icon={User}
              name="fullName"
              value={fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
            <InputField
              label="Farm/Geographical Location (Crucial for AI)"
              icon={MapPin}
              name="location"
              value={location}
              onChange={handleChange}
              placeholder="e.g., Accra, Ghana or Iowa, USA"
              required
            />
            <InputField
              label="Type of Farming"
              icon={LayoutGrid}
              type="select"
              name="farmingType"
              value={farmingType}
              onChange={handleChange}
              required
            />
            <InputField
              label="Specific Product/Crop You Are Farming"
              icon={Wheat}
              name="crop"
              value={crop}
              onChange={handleChange}
              placeholder="e.g., Maize/Corn, Coffee, Tomatoes"
              required
            />
          </div>
        </div>

        {/* Section C */}
        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#FFC82C]">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-green-800">
            <Droplet className="w-6 h-6 mr-2" /> 3. Identify Your Soil Type
          </h2>
          <p className="mb-4 text-gray-600">Select the type that best matches your farm's soil.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            {SOIL_TYPES.map((soil) => (
              <div
                key={soil.name}
                onClick={() => handleSoilSelect(soil.name)}
                className={`
                  p-4 text-center rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out
                  ${selectedSoil === soil.name
                    ? 'border-4 border-[#38A169] ring-4 ring-[#38A169]/30 bg-green-50'
                    : 'border-2 border-gray-200 hover:border-green-400 bg-gray-50 hover:bg-white'
                  }
                `}
              >
                <div className={`text-4xl mb-2 ${soil.color}`}>{soil.icon}</div>
                <div className="font-semibold text-lg text-gray-900">{soil.name}</div>
                <p className="text-xs text-gray-500 h-8 overflow-hidden">{soil.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleUnknownSoil}
            className={`w-full p-3 font-bold rounded-xl transition-all duration-200 ease-in-out text-white shadow-md
              ${selectedSoil === "I don't know my soil type."
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-yellow-500 hover:bg-yellow-600'
              }
            `}
          >
            <AlertTriangle className="w-5 h-5 inline mr-2" />
            I don't know my soil type.
          </button>
        </div>

        {/* Section D */}
        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#38A169]">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-green-800">
            <LayoutGrid className="w-6 h-6 mr-2" /> 4. Additional Observations (Optional)
          </h2>
          <InputField
            label="Observations or History of the Land"
            type="textarea"
            name="observations"
            value={observations}
            onChange={handleChange}
            placeholder="Enter any optional details..."
          />
        </div>

        {/* Section E */}
        <div className="p-6">
          <button
            onClick={handleGenerateReport}
            disabled={!email || !fullName || !location || !farmingType || !crop || !selectedSoil}
            className={`w-full py-4 text-xl font-extrabold rounded-xl transition-all duration-300 ease-in-out shadow-2xl text-gray-900 ${
              !email || !fullName || !location || !farmingType || !crop || !selectedSoil
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-[#FFC82C] hover:bg-[#ffdf72]'
            }`}
          >
            Generate My Personalized Report
          </button>
        </div>
      </div>

      {reportData && (
        <div id="report-section" className="w-full max-w-4xl mt-12 mb-20">
          <div className="p-6 bg-white rounded-xl shadow-2xl border-t-8 border-[#38A169]">
            <h2 className="text-3xl font-bold mb-4 flex items-center text-green-800 border-b pb-2">
              <CheckCircle className="w-7 h-7 mr-2 text-green-600" />
              Your Personalized Farm AI Report
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              *This report would be delivered to {email}.*
            </p>
            <div className="prose max-w-none prose-green">
              <div dangerouslySetInnerHTML={{ __html: reportData.replace(/\n/g, '<br/>') }} />
            </div>
            <div className="mt-8 text-center border-t pt-4">
              <p className="text-gray-600 font-semibold">
                UserId: {userId} (This is your unique farm ID for support)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
