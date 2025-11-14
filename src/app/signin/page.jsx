'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast.error('Please fill in both fields.');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email.');
      return false;
    }

    // Password validation (same as signup)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-={}\[\]|\\:;"'<>,./?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must have at least 8 characters, including upper, lower, number, and symbol.'
      );
      return false;
    }

    return true;
  };

  // 🔹 Updated handleSubmit using NextAuth signIn + role-based redirect
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        toast.error(result.error);
        setLoading(false);
        return;
      }

      // Fetch user session to check role
      const sessionRes = await fetch("/api/auth/session");
      const session = await sessionRes.json();

      toast.success('Signed in successfully!');
      setFormData({ email: '', password: '' });

      // Redirect based on role
      setTimeout(() => {
        if (session?.user?.role === "admin") {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      }, 1200);
    } catch (err) {
      toast.error(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      // Force logout from Google account too
      window.open("https://accounts.google.com/Logout", "_blank", "width=500,height=600");
  
      // Wait a short moment to let Google logout window trigger
      setTimeout(async () => {
        await signOut({
          callbackUrl: '/signup', // redirect to signup page after full logout
        });
        toast.success('Signed out successfully');
      }, 800);
    } catch (error) {
      toast.error('Failed to sign out.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Card container */}
      <div className="w-full max-w-[980px] h-auto md:h-[520px] bg-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row backdrop-blur-2xl">
        
        {/* LEFT: artwork */}
        <div className="relative w-full md:w-1/2 hidden md:block">
          <div className="absolute inset-0 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
            <Image
              src="/image79.jpg"
              alt="signin art"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT: form area */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col">
          {/* heading + social */}
          <div className="flex flex-col gap-4 mb-2">
            <div className="flex justify-between items-center flex-col sm:flex-row text-center sm:text-left gap-3">
              <div className="flex gap-2 items-center justify-center sm:justify-start">
                <Image src="/adela1.jpg" alt="Adela" width={20} height={20} className="rounded-full" />
                <h1 className="text-sm md:text-md font-semibold text-gray-900">Adela</h1>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Sign In</h1>
            </div>

            {/* Social buttons row */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              {/* Google */}
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                type="button"                 
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-4 py-2 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-100 text-xs font-medium text-gray-800 shadow-sm transition"
              >
                <Image src="/image77.png" alt="google" width={18} height={18} />
                Sign in with Google
              </button>

              {/* Facebook */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-full border border-gray-300 bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-100 text-xs font-medium text-gray-800 shadow-sm transition"
              >
                <Image src="/image78.png" alt="fb" width={18} height={18} />
                Sign in with Facebook
              </button>
            </div>

            <div className="text-xs text-gray-400 text-center sm:text-left">
              Or <span className="text-indigo-600 font-medium hover:underline hover:cursor-pointer">signin</span>  with your email address
            </div>
          </div>

          {/* form */}
          <form className="mt-3 flex-1 flex flex-col justify-start" onSubmit={handleSubmit}>
            <label className="text-xs text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mb-3 w-full px-4 py-2 border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />

            <label className="text-xs text-gray-600 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mb-6 w-full px-4 py-2 border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-48 md:w-56 py-2 rounded-full text-white font-semibold 
              bg-gradient-to-r from-green-400 to-yellow-400 
              shadow-md transition-all duration-300 ease-in-out 
              hover:brightness-110 hover:scale-[1.02] hover:shadow-lg mx-auto sm:mx-0"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-indigo-600 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </form>

          {/* Optional signout button for testing */}
          <button
            onClick={handleSignOut}
            className="mt-4 text-xs text-gray-500 underline hover:text-gray-700 self-center"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
