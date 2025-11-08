'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      toast.error('Please fill in all fields.');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address — must contain @ and a valid domain.');
      return false;
    }

    // Password validation: at least 8 chars, uppercase, lowercase, number, and symbol
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-={}\[\]|\\:;"'<>,./?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must be at least 8 chars and include upper, lower, number, and symbol.'
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');

      toast.success('Signup successful! Redirecting to Sign In...');
      setFormData({ name: '', email: '', password: '' });

      // Wait 2 seconds then redirect
      setTimeout(() => {
        router.push('/signin');
      }, 2000);
    } catch (error) {
      toast.error(error.message || 'Something went wrong.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e0e9ff] to-[#f9fbff] p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row w-full max-w-[850px] h-auto md:h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Image Section */}
        <div className="hidden md:flex w-1/2 relative bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-100">
          <Image
            src="/image79.jpg"
            alt="signup art"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 py-10">

          <div className="flex justify-between items-center mb-6 flex-col sm:flex-row">
            <div className="flex gap-2 items-center">
              <Image src="/adela1.jpg" alt="Adela" width={18} height={18} className="rounded-full" />
              <h1 className="text-sm md:text-md font-semibold text-gray-900">Adela</h1>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center md:text-left">
              Create Account
            </h2>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full sm:w-1/2 py-2 border border-gray-300 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:bg-gray-50 transition bg-linear-to-br from-blue-200 via-purple-200 to-yellow-100"
              onClick={() => window.location.href = '/api/auth/signin/google'}
            >
              <Image src="/image77.png" alt="Google" width={18} height={18} />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full sm:w-1/2 py-2 border border-gray-300 rounded-full text-xs sm:text-xs font-medium text-gray-600 hover:bg-gray-50 transition bg-linear-to-br from-blue-200 via-purple-200 to-yellow-100">
              <Image src="/image78.png" alt="Facebook" width={18} height={18} />
              Sign up with Facebook
            </button>
          </div>

          <p className="text-xs text-gray-400 mb-4 text-center md:text-left">
            Or <span className="text-blue-500 font-medium hover:underline">Sign up</span> with your email address
          </p>

          {/* Form Fields */}
          <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-gray-600 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-2xl"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-2xl"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full mt-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-2xl"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-48 md:w-56 py-2 rounded-full text-white font-semibold 
              bg-gradient-to-r from-green-400 to-yellow-400 
              shadow-md transition-all duration-300 ease-in-out 
              hover:brightness-110 hover:scale-[1.02] hover:shadow-lg mx-auto sm:mx-0"
            >
              Sign up
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-500 font-medium hover:underline">
              Signin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
