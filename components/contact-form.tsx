"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"


const API_ENDPOINT = "/api/handleEmail";
// const API_ENDPOINT= "http://localhost:7071/api/handleEmail";

const ContactForm = () => {

  const { toast } = useToast()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message1: "",
    interest: "",
    preferredLocation: "",
  })

  const [errors, setErrors] = useState<any>({})

  const MAX_LENGTH = {
    name: 50,
    email: 100,
    phone: 15,
    company: 100,
    subject: 150,
    message1: 1000,
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const nameRegex = /^[a-zA-Z\s'-]+$/
  const companyRegex = /^[a-zA-Z0-9\s.&'-]+$/
  const phoneRegex = /^\d{7,15}$/

  // NEW SUBJECT VALIDATION REGEX
  const subjectRegex = /^[a-zA-Z0-9\s.,!?'"()\-:&]+$/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target
    let newValue = value

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > MAX_LENGTH.phone) return
    }

    if (name === "name") {

      if (value.length > MAX_LENGTH.name) return

      // Remove special characters - only allow letters, spaces, hyphens, apostrophes
      newValue = value.replace(/[^a-zA-Z\s'-]/g, "")

      // Only clear errors if input is valid or empty
      if (newValue === "" || nameRegex.test(newValue)) {
        setErrors((p: any) => ({ ...p, name: "" }))
      }

    }

    if (name === "email") {

      if (value.length > MAX_LENGTH.email) return

      if (value && !emailRegex.test(value)) {
        setErrors((p: any) => ({ ...p, email: "Invalid email format" }))
      } else {
        setErrors((p: any) => ({ ...p, email: "" }))
      }

    }

    if (name === "company") {

      if (value.length > MAX_LENGTH.company) return

      if (value && !companyRegex.test(value)) {
        setErrors((p: any) => ({ ...p, company: "Invalid company name" }))
      } else {
        setErrors((p: any) => ({ ...p, company: "" }))
      }

    }

    // SUBJECT VALIDATION
    if (name === "subject") {

      if (value.length > MAX_LENGTH.subject) return

      if (value && !subjectRegex.test(value)) {
        setErrors((p: any) => ({
          ...p,
          subject: "Subject contains invalid characters"
        }))
      } else {
        setErrors((p: any) => ({ ...p, subject: "" }))
      }

    }

    if (name === "message1") {
      if (value.length > MAX_LENGTH.message1) return
    }

    setFormData(prev => ({ ...prev, [name]: newValue }))
  }

  const handleSelectChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }))
  }

  const validateForm = () => {

    const newErrors: any = {}

    if (!formData.name.trim() || formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters"

    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email"

    if (formData.phone && !phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be 7-15 digits"

    if (!formData.company.trim())
      newErrors.company = "Company name is required"

    // SUBJECT VALIDATION
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }
    else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }
    else if (!subjectRegex.test(formData.subject)) {
      newErrors.subject = "Subject contains invalid characters"
    }

    if (formData.message1.length > MAX_LENGTH.message1)
      newErrors.message1 = "Message too long"

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const isFormValid = () => {
    const nameValid = formData.name.trim().length >= 2 && nameRegex.test(formData.name)
    const emailValid = emailRegex.test(formData.email)
    const phoneValid = !formData.phone || phoneRegex.test(formData.phone)
    const companyValid = formData.company.trim().length > 0 && companyRegex.test(formData.company)
    const subjectValid = formData.subject.trim().length >= 5 && subjectRegex.test(formData.subject)
    const noErrors = Object.keys(errors).length === 0

    return nameValid && emailValid && phoneValid && companyValid && subjectValid && noErrors
  }

  return (

    // <form
    //   onSubmit={async (e) => {

    //     e.preventDefault()

    //     if (!validateForm()) {
    //       toast({
    //         title: "Please fix validation errors",
    //         variant: "destructive"
    //       })
    //       return
    //     }

    //     setIsSubmitting(true)

    //     const serviceId = 'service_jvcfdxq'
    //     const templateId = 'template_03nshuf'
    //     const publicKey = 'uf1J58re3AQuJkwKz'

    //     try {

    //       await emailjs.send(
    //         serviceId,
    //         templateId,
    //         { ...formData, to_name: 'NathCorp Team' },
    //         publicKey
    //       )

    //       toast({ title: "Message sent successfully! 🎉" })

    //       setFormData({
    //         name: "",
    //         email: "",
    //         phone: "",
    //         company: "",
    //         subject: "",
    //         message1: "",
    //         interest: "",
    //         preferredLocation: "",
    //       })

    //       setErrors({})

    //     } catch (error) {

    //       toast({
    //         title: "Failed to send",
    //         variant: "destructive"
    //       })

    //     } finally {

    //       setIsSubmitting(false)

    //     }

    //   }}
    //   className="space-y-6"
    // >

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    //     <div className="space-y-2">
    //       <Label htmlFor="name">Full Name *</Label>
    //       <Input
    //         id="name"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         required
    //         maxLength={50}
    //         placeholder="John Doe"
    //       />
    //       {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
    //     </div>

    //     <div className="space-y-2">
    //       <Label htmlFor="email">Email *</Label>
    //       <Input
    //         id="email"
    //         name="email"
    //         type="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //         maxLength={100}
    //         placeholder="john@example.com"
    //       />
    //       {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
    //     </div>

    //     <div className="space-y-2">
    //       <Label htmlFor="phone">Phone</Label>
    //       <Input
    //         id="phone"
    //         name="phone"
    //         value={formData.phone}
    //         onChange={handleChange}
    //         maxLength={15}
    //         placeholder="+1 555 123 4567"
    //       />
    //       {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    //     </div>

    //     <div className="space-y-2">
    //       <Label htmlFor="company">Company *</Label>
    //       <Input
    //         id="company"
    //         name="company"
    //         value={formData.company}
    //         onChange={handleChange}
    //         required
    //         maxLength={100}
    //         placeholder="Acme Inc."
    //       />
    //       {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
    //     </div>

    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <div className="space-y-2">
    //       <Label htmlFor="modal-interest">I'm interested in</Label>
    //       <Select
    //         value={formData.interest}
    //         onValueChange={(v) => handleSelectChange("interest", v)}
    //       >
    //         <SelectTrigger className="border-slate-300 focus:border-blue-500">
    //           <SelectValue placeholder="Select service area" />
    //         </SelectTrigger>
    //         {/* ✅ Ensure dropdown is above overlay */}
    //         <SelectContent className="z-[70]">
    //           <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
    //           <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
    //           <SelectItem value="it-consulting">IT Consulting</SelectItem>
    //           <SelectItem value="security-services">Security Services</SelectItem>
    //           <SelectItem value="ai-services">AI Services</SelectItem>
    //           <SelectItem value="other">Other/Custom</SelectItem>
    //         </SelectContent>
    //       </Select>
    //     </div>

    //     <div className="space-y-2">
    //       <Label htmlFor="modal-preferredLocation">Preferred Office</Label>
    //       <Select
    //         value={formData.preferredLocation}
    //         onValueChange={(v) => handleSelectChange("preferredLocation", v)}
    //       >
    //         <SelectTrigger className="border-slate-300 focus:border-blue-500">
    //           <SelectValue placeholder="Select preferred office" />
    //         </SelectTrigger>
    //         {/* ✅ Ensure dropdown is above overlay */}
    //         <SelectContent className="z-[70]">
    //           <SelectItem value="Ranchi, India">Ranchi, India</SelectItem>
    //           <SelectItem value="Irvine, USA">Irvine, USA</SelectItem>
    //           <SelectItem value="Dubai, UAE">Dubai, UAE</SelectItem>
    //           <SelectItem value="Any Office">Any Office</SelectItem>
    //         </SelectContent>
    //       </Select>
    //     </div>
    //   </div>

    //   <div className="space-y-2">
    //     <Label htmlFor="subject">Subject *</Label>
    //     <Input
    //       id="subject"
    //       name="subject"
    //       value={formData.subject}
    //       onChange={handleChange}
    //       required
    //       maxLength={150}
    //       placeholder="How can we help you?"
    //     />
    //     {errors.subject && (
    //       <p className="text-red-500 text-sm">{errors.subject}</p>
    //     )}
    //   </div>

    //   <div className="space-y-2">
    //     <Label htmlFor="message1">Message</Label>
    //     <Textarea
    //       id="message1"
    //       name="message1"
    //       value={formData.message1}
    //       onChange={handleChange}
    //       rows={5}
    //       maxLength={1000}
    //       placeholder="Please provide details about your inquiry..."
    //     />
    //     <p className="text-xs text-gray-500">
    //       {formData.message1.length}/1000 characters
    //     </p>
    //   </div>

    //   <Button
    //     type="submit"
    //     className="w-full"
    //     disabled={isSubmitting}
    //   >
    //     {isSubmitting ? "Sending..." : "Send Message"}
    //   </Button>

    // </form>

    // using DL to send contact us form

    <form
      onSubmit={async (e) => {

        e.preventDefault()

        if (!validateForm()) {
          toast({
            title: "Please fix validation errors",
            variant: "destructive"
          })
          return
        }

        setIsSubmitting(true)

        try {

          const res = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              company: formData.company,
              service: formData.interest,
              office: formData.preferredLocation,
              subject: formData.subject,
              message: formData.message1,
            }),
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.error ?? "Something went wrong.");
          }

          toast({ title: "Message sent successfully! 🎉" })

          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message1: "",
            interest: "",
            preferredLocation: "",
          })

          setErrors({})

        } catch (error) {

          toast({
            title: "Failed to send",
            variant: "destructive"
          })

        } finally {

          setIsSubmitting(false)

        }

      }}
      className="space-y-6"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
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
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={15}
            placeholder="+1 555 123 4567"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            maxLength={100}
            placeholder="Acme Inc."
          />
          {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="modal-interest">I'm interested in</Label>
          <Select
            value={formData.interest}
            onValueChange={(v) => handleSelectChange("interest", v)}
          >
            <SelectTrigger className="border-slate-300 focus:border-blue-500">
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="modal-preferredLocation">Preferred Office</Label>
          <Select
            value={formData.preferredLocation}
            onValueChange={(v) => handleSelectChange("preferredLocation", v)}
          >
            <SelectTrigger className="border-slate-300 focus:border-blue-500">
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
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          maxLength={150}
          placeholder="How can we help you?"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message1">Message</Label>
        <Textarea
          id="message1"
          name="message1"
          value={formData.message1}
          onChange={handleChange}
          rows={5}
          maxLength={1000}
          placeholder="Please provide details about your inquiry..."
        />
        <p className="text-xs text-gray-500">
          {formData.message1.length}/1000 characters
        </p>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

    </form>


  )
}

export default ContactForm;