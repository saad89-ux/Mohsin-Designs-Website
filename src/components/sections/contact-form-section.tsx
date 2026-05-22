'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="min-h-screen py-20 pt-40 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#0305a8] md:text-5xl lg:text-6xl">Get in Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Have a project in mind? Let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-lg border border-slate-100 bg-[#f7f8fc]/40 p-8 shadow-sm">
            <h2 className="mb-8 text-2xl font-bold text-[#0305a8]">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#0305a8] focus:outline-none focus:ring-1 focus:ring-[#0305a8]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#0305a8] focus:outline-none focus:ring-1 focus:ring-[#0305a8]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#0305a8] focus:outline-none focus:ring-1 focus:ring-[#0305a8]"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#0305a8] focus:outline-none focus:ring-1 focus:ring-[#0305a8]"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#0305a8] focus:outline-none focus:ring-1 focus:ring-[#0305a8]"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#0305a8] px-6 py-3 font-semibold text-[#fff35c] transition-all hover:bg-[#0305a8]/90 hover:shadow-lg hover:shadow-[#0305a8]/20"
              >
                Send Message
              </button>
              {submitted && (
                <p className="rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-600">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-8 text-2xl font-bold text-[#0305a8]">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#0305a8]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0305a8]">Email</h3>
                  <p className="text-gray-600">hello@luminamotionlabs.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#0305a8]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0305a8]">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#0305a8]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0305a8]">Address</h3>
                  <p className="text-gray-600">123 Design Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-12 rounded-lg border border-slate-100 bg-[#f7f8fc]/40 p-6">
              <h3 className="mb-4 font-bold text-[#0305a8]">Office Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
