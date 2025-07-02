import React, { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Privacy Policy");
      return;
    }
    // Handle form submission
    console.log("Submitted:", { email, agreed });
    setError("");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Heading */}
          <div className="lg:w-5/12">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Subscribe for the
              <br />
              exclusive updates!
            </h2>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-7/12 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input with Subscribe Button */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 pr-36 rounded-full bg-white border border-gray-200 
                           focus:border-violet-600 focus:ring-2 focus:ring-violet-600/20 
                           outline-none transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 
                           bg-violet-600 hover:bg-violet-700 text-white 
                           px-8 py-3 rounded-full font-medium 
                           inline-flex items-center gap-2
                           transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-2 px-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1.5 h-4 w-4 rounded border-gray-300 
                           text-violet-600 focus:ring-violet-600/20"
                />
                <label htmlFor="privacy" className="text-gray-600 text-sm">
                  I agree to the{" "}
                  <a
                    href="/privacy-policy"
                    className="text-gray-900 underline hover:text-violet-600 
                             transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm px-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
