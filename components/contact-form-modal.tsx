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


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Only allow digits
      if (/^\d*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Check if all mandatory fields are filled
  const isFormValid = formData.name.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.company.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate phone: only digits allowed (if not empty)
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Phone number must contain digits only.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    // EmailJS service configuration (same as contact form)
    const serviceId = "service_jvcfdxq";
    const templateId = "template_03nshuf";
    const publicKey = "uf1J58re3AQuJkwKz";

    // Create template parameters with all form fields
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      subject: serviceName,
      message1: formData.message1,
      interest: serviceName,
      preferredLocation: "Any",
      to_name: "NathCorp Team",
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      console.log("Email sent successfully!", response);

      toast({
        title: "Message sent successfully! 🎉",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message1: "",
      });

      setOpen(false);
    } catch (error) {
      console.error("Email send failed:", error);

      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact us directly.",
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
          <DialogTitle className="text-2xl">Get Started with {serviceName}</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will reach out to discuss your project requirements.
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
                placeholder="John Doe"
              />
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
                placeholder="john@example.com"
              />
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
              placeholder="Please describe your project requirements, timeline, and any specific needs..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
            
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
