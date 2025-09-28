"use client";

import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import github from "./image/githubb.svg"; 
import linkedin from "./image/linked.svg"; 
import back from "./image/back.jpg";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_wlivz2v", 
        "template_hkrski7", 
        formData, 
        "zo_jBaTlQ0J_n7V47" 
      );
      
      setSubmitStatus('success');
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { name: "name", type: "text", placeholder: "Your Full Name", icon: "👤" },
    { name: "phone", type: "tel", placeholder: "Phone Number", icon: "📱" },
    { name: "email", type: "email", placeholder: "Email Address", icon: "✉️" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Abdallah-Wael10",
      icon: github,
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
      hoverColor: "from-gray-600 to-gray-800"
    },
    {
      href: "https://www.linkedin.com/in/abdallah-wael-01a443301/?trk=public-profile-join-page",
      icon: linkedin,
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative w-full min-h-screen py-20 overflow-hidden"
    >
      {/* Background Image with Better Overlay */}
      <div className="absolute inset-0">
        <Image
          src={back}
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
        {/* Reduced blur and improved contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/15 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/15 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/15 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className={`text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">Let's Connect</span>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Get In
              </span>
              <br />
              <span>Touch</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-200">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
              <br className="hidden md:block" />
              <span className="text-blue-400 font-medium">I'd love to hear from you!</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium">abdallahwael844@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">🌍</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white font-medium">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                >
                  <Image 
                    src={social.icon} 
                    alt={social.label} 
                    className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '0.2s' }}>
            
            <div className="relative">
              {/* Form Container - Improved Visibility */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/40 shadow-2xl">
                
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Send Message</h3>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you soon!</p>
                </div>

                {/* Status Messages */}
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-2xl border transition-all duration-500 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">
                        {submitStatus === 'success' ? '✅' : '❌'}
                      </span>
                      <span className="font-medium">
                        {submitStatus === 'success' 
                          ? 'Message sent successfully! I\'ll get back to you soon.' 
                          : 'Failed to send message. Please try again.'}
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Input Fields */}
                  {inputFields.map((field, index) => (
                    <div key={field.name} className="relative group">
                      <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-xl transition-all duration-300 z-10 ${
                        focusedField === field.name || formData[field.name] 
                          ? 'text-blue-600 scale-110' 
                          : 'text-gray-400'
                      }`}>
                        {field.icon}
                      </div>
                      
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-14 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/20 ${
                          focusedField === field.name ? 'scale-[1.02] border-blue-500' : 'hover:border-gray-300'
                        }`}
                        required
                      />
                      
                      {/* Field Border Effect */}
                      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                        focusedField === field.name ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
                      </div>
                    </div>
                  ))}

                  {/* Message Field */}
                  <div className="relative group">
                    <div className={`absolute left-4 top-6 text-xl transition-all duration-300 z-10 ${
                      focusedField === 'message' || formData.message 
                        ? 'text-blue-600 scale-110' 
                        : 'text-gray-400'
                    }`}>
                      💬
                    </div>
                    
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full pl-14 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/20 resize-none ${
                        focusedField === 'message' ? 'scale-[1.02] border-blue-500' : 'hover:border-gray-300'
                      }`}
                      required
                    />
                    
                    {/* Field Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'message' ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                      isSubmitting ? 'animate-pulse' : 'hover:scale-[1.02]'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                    
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  </button>
                </form>
              </div>

              {/* Form Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
