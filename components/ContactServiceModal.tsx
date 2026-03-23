// src/components/ContactServiceModal.tsx 
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Clock, X, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

import emailjs from "@emailjs/browser"; 

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message1: "",
  interest: "",
  preferredLocation: "Any Office",
};

interface ContactServiceModalProps {
  open: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const ContactServiceModal: React.FC<ContactServiceModalProps> = ({
  open,
  onClose,
  defaultSubject = "General Inquiry",
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
    subject: defaultSubject,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Update the subject whenever the modal opens with a new defaultSubject
  useEffect(() => {
    if (open) {
      setFormData((prev) => ({
        ...prev,
        subject: defaultSubject,
      }));
    }
  }, [open, defaultSubject]);

  if (!open) return null;

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.trim().length < 2) {
          error = "Full name must be at least 2 characters";
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          error = "Full name can only contain letters and spaces";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) {
          error = "Phone number can only contain digits, spaces, hyphens, plus signs, and parentheses";
        }
        break;
      case "company":
        // Optional, no validation
        break;
      case "interest":
        if (!value) {
          error = "Please select your area of interest";
        }
        break;
      case "preferredLocation":
        // Has default, but let's make it required
        if (!value) {
          error = "Please select a preferred office";
        }
        break;
      case "message1":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Allow digits, spaces, hyphens, plus, parentheses
      if (/^[\d\s\-\+\(\)]*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Check if all mandatory fields are filled and no errors
  const isFormValid = formData.name.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.message1.trim() !== "" &&
                     formData.interest !== "" &&
                     Object.values(errors).every(error => error === "");

  // ✅ Close only when clicking directly on the dark background
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      if (key !== "subject") { // Skip hidden subject
        const error = validateField(key, formData[key as keyof typeof formData]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const serviceId = "service_jvcfdxq";
    const templateId = "template_03nshuf";
    const publicKey = "uf1J58re3AQuJkwKz";

    const templateParams = {
      ...formData,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      interest: formData.interest || "Not specified",
      preferredLocation: formData.preferredLocation || "Any",
      to_name: "NathCorp Team",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Inquiry Sent Successfully! 🎉",
        description: "Thank you for reaching out. We will contact you shortly!",
      });

      setFormData({ ...INITIAL_FORM_DATA, subject: defaultSubject });
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Email send failed:", error);

      toast({
        title: "Failed to send inquiry",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start lg:items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl my-auto bg-white rounded-2xl shadow-2xl"
      >
        <Card className="border-0 shadow-xl overflow-hidden w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Side: Contact Info Block */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Discuss Your Custom Requirements</h3>
              <p className="mb-8">
                Fill out the form and our specialist team will be in touch shortly to discuss your unique project.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Globe className="h-6 w-6 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Global Presence</h4>
                    <p className="text-blue-100">India, USA & UAE Operations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">24/7 Support</h4>
                    <p className="text-blue-100">Round-the-clock assistance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Quick Response</h4>
                    <p className="text-blue-100">Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-3 p-8 relative">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Project Inquiry</h3>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100"
                aria-label="Close form"
              >
                <X size={24} />
              </button>

              <form id="custom-service-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="modal-name">Full Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      required
                      className={`border-slate-300 focus:border-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modal-email">Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="modal-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      required
                      className={`border-slate-300 focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="modal-phone">Phone (Optional)</Label>
                    <Input
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 555 123 4567"
                      className={`border-slate-300 focus:border-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modal-company">Company (Optional)</Label>
                    <Input
                      id="modal-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Acme Inc."
                      className="border-slate-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="modal-interest">I'm interested in <span className="text-red-500">*</span></Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(v) => handleSelectChange("interest", v)}
                    >
                      <SelectTrigger className={`border-slate-300 focus:border-blue-500 ${errors.interest ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select service area" />
                      </SelectTrigger>
                      {/* ✅ Ensure dropdown is above overlay */}
                      <SelectContent className="z-[70]">
                        <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
                        <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                        <SelectItem value="it-consulting">IT Consulting</SelectItem>
                        <SelectItem value="security-services">Security Services</SelectItem>
                        <SelectItem value="ai-services">AI Services</SelectItem>
                        <SelectItem value="other">Other/Custom</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.interest && <p className="text-red-500 text-sm">{errors.interest}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="modal-preferredLocation">Preferred Office <span className="text-red-500">*</span></Label>
                    <Select
                      value={formData.preferredLocation}
                      onValueChange={(v) => handleSelectChange("preferredLocation", v)}
                    >
                      <SelectTrigger className={`border-slate-300 focus:border-blue-500 ${errors.preferredLocation ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select preferred office" />
                      </SelectTrigger>
                      {/* ✅ Ensure dropdown is above overlay */}
                      <SelectContent className="z-[70]">
                        <SelectItem value="Ranchi, India">Ranchi, India</SelectItem>
                        <SelectItem value="Irvine, USA">Irvine, USA</SelectItem>
                        <SelectItem value="Dubai, UAE">Dubai, UAE</SelectItem>
                        <SelectItem value="Any Office">Any Office</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.preferredLocation && <p className="text-red-500 text-sm">{errors.preferredLocation}</p>}
                  </div>
                </div>

                {/* Hidden Subject Field */}
                <Input type="hidden" name="subject" value={formData.subject} />

                <div className="space-y-2">
                  <Label htmlFor="modal-message">Message/Details <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="modal-message"
                    name="message1"
                    value={formData.message1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={`Details about your inquiry (Subject: ${formData.subject})`}
                    rows={5}
                    required
                    className={`border-slate-300 focus:border-blue-500 ${errors.message1 ? 'border-red-500' : ''}`}
                  />
                  {errors.message1 && <p className="text-red-500 text-sm">{errors.message1}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  
                >
                  {isSubmitting ? "Sending Inquiry..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
