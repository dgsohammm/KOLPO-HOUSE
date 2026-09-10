'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, Mail, Phone, Instagram, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate deliberate graceful dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#292A28]/40 backdrop-blur-md"
          />

          {/* Modal Container with Glide-in / Glide-out */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#F5F2EA] rounded-3xl border border-[#292A28]/20 shadow-2xl p-6 sm:p-10 md:p-12 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 text-[#292A28] hover:bg-[#EEE9DE] rounded-full transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#292A28] text-[#F5F2EA] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display-luxury text-3xl sm:text-4xl text-[#292A28]">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-sm text-[#41413D] max-w-md mx-auto leading-relaxed font-light">
                  Thank you for reaching out to KOLPO HOUSE. Our creative strategy team in Kolkata will review your inquiry with deliberate intent and reach out promptly.
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full bg-[#292A28] text-[#F5F2EA] text-xs font-mono tracking-widest uppercase hover:bg-[#41413D] transition-colors cursor-pointer"
                  >
                    RETURN TO SITE
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#41413D]/70 mb-2">
                  START A CONVERSATION
                </div>
                <h2 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl text-[#292A28] mb-2 leading-tight">
                  LET&apos;S BUILD SOMETHING DISTINCTIVE.
                </h2>
                <p className="text-xs sm:text-sm text-[#41413D] mb-8 font-light max-w-lg">
                  Share your brand vision, upcoming campaign goals, or strategic repositioning needs. We approach every partnership with curiosity and clarity.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest uppercase text-[#41413D] mb-1.5">
                        NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-[#EEE9DE]/70 border border-[#292A28]/20 rounded-xl text-sm text-[#292A28] placeholder-[#41413D]/40 focus:outline-none focus:border-[#292A28] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest uppercase text-[#41413D] mb-1.5">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@enterprise.com"
                        className="w-full px-4 py-3 bg-[#EEE9DE]/70 border border-[#292A28]/20 rounded-xl text-sm text-[#292A28] placeholder-[#41413D]/40 focus:outline-none focus:border-[#292A28] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-[#41413D] mb-1.5">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 7003497348"
                      className="w-full px-4 py-3 bg-[#EEE9DE]/70 border border-[#292A28]/20 rounded-xl text-sm text-[#292A28] placeholder-[#41413D]/40 focus:outline-none focus:border-[#292A28] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-[#41413D] mb-1.5">
                      MESSAGE / BRAND BRIEF *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand ambition, timeline, and objectives..."
                      className="w-full px-4 py-3 bg-[#EEE9DE]/70 border border-[#292A28]/20 rounded-xl text-sm text-[#292A28] placeholder-[#41413D]/40 focus:outline-none focus:border-[#292A28] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[10px] font-mono text-[#41413D]/60 tracking-wider">
                      DIRECT: kolpohouse@gmail.com • <a href="tel:7003497348" className="hover:underline text-[#292A28] font-medium">+91 7003497348</a>
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#292A28] text-[#F5F2EA] rounded-full text-xs font-mono tracking-widest uppercase font-medium hover:bg-[#41413D] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{submitting ? 'SENDING...' : 'TRANSMIT INQUIRY'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>

                {/* Direct Studio Channels */}
                <div className="mt-8 pt-6 border-t border-[#292A28]/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <a
                    href="mailto:kolpohouse@gmail.com"
                    className="flex items-center gap-2 text-[#41413D] hover:text-[#292A28] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#292A28]" />
                    <span className="truncate">kolpohouse@gmail.com</span>
                  </a>
                  <a
                    href="tel:7003497348"
                    className="flex items-center gap-2 text-[#41413D] hover:text-[#292A28] transition-colors font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#292A28]" />
                    <span>7003497348</span>
                  </a>
                  <a
                    href="https://instagram.com/kolpo.house"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#41413D] hover:text-[#292A28] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#292A28]" />
                    <span>@kolpo.house</span>
                  </a>
                  <div className="flex items-center gap-2 text-[#41413D]">
                    <MapPin className="w-3.5 h-3.5 text-[#292A28]" />
                    <span>Kolkata, India</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
