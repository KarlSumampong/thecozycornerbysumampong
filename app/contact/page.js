"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section className="fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 text-sm font-semibold mb-4">
            ✉️ Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-amber-900/70 max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We would love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl -z-10"></div>
            
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              <span>📬</span>
              <span>Send Us a Message</span>
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span className="font-medium">Message sent successfully! We will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-amber-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full border-2 border-amber-200 p-3 rounded-xl focus:border-amber-500 transition-colors bg-white text-amber-900 placeholder-amber-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-amber-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full border-2 border-amber-200 p-3 rounded-xl focus:border-amber-500 transition-colors bg-white text-amber-900 placeholder-amber-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-amber-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full border-2 border-amber-200 p-3 rounded-xl focus:border-amber-500 transition-colors bg-white text-amber-900 placeholder-amber-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-amber-900 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us what's on your mind..."
                  className="w-full border-2 border-amber-200 p-3 rounded-xl focus:border-amber-500 transition-colors bg-white text-amber-900 placeholder-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full h-12 rounded-full text-white font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info and additional details */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200 p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <span>📍</span>
                <span>Other Ways to Reach Us</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-semibold text-amber-900">Email</div>
                    <div className="text-amber-700 text-sm">hello@thecozycorner.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                  <span className="text-2xl">💬</span>
                  <div>
                    <div className="font-semibold text-amber-900">Social Media</div>
                    <div className="text-amber-700 text-sm">@thecozycorner on all platforms</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <div className="font-semibold text-amber-900">Response Time</div>
                    <div className="text-amber-700 text-sm">We typically respond within 24-48 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200 p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <span>❓</span>
                <span>Quick Questions?</span>
              </h3>
              
              <div className="space-y-3 text-sm">
                <details className="p-3 bg-amber-50 rounded-lg cursor-pointer">
                  <summary className="font-semibold text-amber-900">Are all books really free?</summary>
                  <p className="text-amber-700 mt-2">Yes! Every book on The Cozy Corner is 100% free to read and download.</p>
                </details>

                <details className="p-3 bg-amber-50 rounded-lg cursor-pointer">
                  <summary className="font-semibold text-amber-900">How do I request a book?</summary>
                  <p className="text-amber-700 mt-2">Use the contact form above to suggest books you would like to see in our collection.</p>
                </details>

                <details className="p-3 bg-amber-50 rounded-lg cursor-pointer">
                  <summary className="font-semibold text-amber-900">Can I contribute to the site?</summary>
                  <p className="text-amber-700 mt-2">Absolutely! We welcome book reviews and recommendations from our community.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}