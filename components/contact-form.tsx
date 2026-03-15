"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Check if all mandatory fields are filled
  const isFormValid = formData.name.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.subject.trim() !== "" && 
                     formData.company.trim() !== ""

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const serviceId = 'service_jvcfdxq'
        const templateId = 'template_03nshuf'
        const publicKey = 'uf1J58re3AQuJkwKz'
        try {
          await emailjs.send(serviceId, templateId, { ...formData, to_name: 'NathCorp Team' }, publicKey)
          toast({ title: "Message sent successfully! 🎉" })
          setFormData({ name: "", email: "", phone: "", company: "", subject: "", message1: "", interest: "", preferredLocation: "" })
        } catch (error) {
          toast({ title: "Failed to send", variant: "destructive" })
        } finally {
          setIsSubmitting(false)
        }
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Acme Inc." />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>I'm interested in</Label>
          <Select value={formData.interest} onValueChange={(v) => setFormData(p => ({...p, interest: v}))}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
              <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
              <SelectItem value="it-consulting">IT Consulting</SelectItem>
              <SelectItem value="security-services">Security Services</SelectItem>
              <SelectItem value="ai-services">AI Services</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Preferred Office</Label>
          <Select value={formData.preferredLocation} onValueChange={(v) => setFormData(p => ({...p, preferredLocation: v}))}>
            <SelectTrigger>
              <SelectValue placeholder="Select preferred office" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ranchi, India">Ranchi, India</SelectItem>
              <SelectItem value="Irvine, USA">Irvine, USA</SelectItem>
              <SelectItem value="Dubai, UAE">Dubai, UAE</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help you?" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message1">Message</Label>
        <Textarea id="message1" name="message1" value={formData.message1} onChange={handleChange} rows={5} placeholder="Please provide details about your inquiry..." />
      </div>
      <Button type="submit" className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

export default ContactForm
