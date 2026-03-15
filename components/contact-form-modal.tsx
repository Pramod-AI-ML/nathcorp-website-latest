"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactFormModalProps {
  triggerText?: string;
  triggerClassName?: string;
  serviceName?: string;
  showIcon?: boolean;
}

export default function ContactFormModal({
  triggerText = "Start Project",
  triggerClassName = "bg-blue-600 hover:bg-blue-700",
  serviceName = "Our Services",
  showIcon = true,
}: ContactFormModalProps) {

  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message1: "",
  });

  const [errors, setErrors] = useState<any>({});

  const MAX_LENGTH = {
    name: 50,
    email: 100,
    phone: 15,
    company: 100,
    message1: 500,
  };

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameRegex =
    /^[a-zA-Z\s]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;

    let newValue = value;

    if (name === "phone") {

      if (!/^\d*$/.test(value)) return;

      if (value.length > MAX_LENGTH.phone) return;

      newValue = value;

    }

    if (name === "name") {

      if (value.length > MAX_LENGTH.name) return;

      if (value && !nameRegex.test(value)) {
        setErrors((prev: any) => ({
          ...prev,
          name: "Name should contain letters only",
        }));
      } else {
        setErrors((prev: any) => ({ ...prev, name: "" }));
      }

    }

    if (name === "email") {

      if (value.length > MAX_LENGTH.email) return;

      if (value && !emailRegex.test(value)) {
        setErrors((prev: any) => ({
          ...prev,
          email: "Invalid email format",
        }));
      } else {
        setErrors((prev: any) => ({ ...prev, email: "" }));
      }

    }

    if (name === "company") {
      if (value.length > MAX_LENGTH.company) return;
    }

    if (name === "message1") {
      if (value.length > MAX_LENGTH.message1) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.company.trim() !== "" &&
    !errors.name &&
    !errors.email;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Full name is required",
        variant: "destructive",
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Phone number must contain digits only.",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone.length > MAX_LENGTH.phone) {
      toast({
        title: "Invalid Phone Number",
        description: "Phone number is too long.",
        variant: "destructive",
      });
      return;
    }

    if (formData.message1.length > MAX_LENGTH.message1) {
      toast({
        title: "Message Too Long",
        description: "Message must be under 500 characters.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const serviceId = "service_jvcfdxq";
    const templateId = "template_03nshuf";
    const publicKey = "uf1J58re3AQuJkwKz";

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      subject: serviceName,
      message1: formData.message1,
      interest: serviceName,
      preferredLocation: "Any",
      to_name: "NathCorp Team",
    };

    try {

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully!", response);

      toast({
        title: "Message sent successfully! 🎉",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message1: "",
      });

      setErrors({});

      setOpen(false);

    } catch (error) {

      console.error("Email send failed:", error);

      toast({
        title: "Failed to send message",
        description:
          "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={triggerClassName}>
          {triggerText}
          {showIcon && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">

        <DialogHeader>
          <DialogTitle className="text-2xl">
            Get Started with {serviceName}
          </DialogTitle>

          <DialogDescription>
            Fill out the form below and our team will reach out to discuss your
            project requirements.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="space-y-2">

              <Label htmlFor="name">Full Name *</Label>

              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={50}
                placeholder="John Doe"
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

            </div>

            <div className="space-y-2">

              <Label htmlFor="email">Email Address *</Label>

              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={100}
                placeholder="john@example.com"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="space-y-2">

              <Label htmlFor="phone">Phone Number</Label>

              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                placeholder="+1 (555) 123-4567"
              />

            </div>

            <div className="space-y-2">

              <Label htmlFor="company">Company Name *</Label>

              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                maxLength={100}
                placeholder="Your Company"
              />

            </div>

          </div>

          <div className="space-y-2">

            <Label htmlFor="message1">Project Details</Label>

            <Textarea
              id="message1"
              name="message1"
              value={formData.message1}
              onChange={handleChange}
              rows={5}
              maxLength={500}
              placeholder="Please describe your project requirements, timeline, and any specific needs..."
            />

            <p className="text-xs text-gray-500">
              {formData.message1.length}/500 characters
            </p>

          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
}