'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFieldFilled = (fieldName: string) => {
    return formData[fieldName as keyof typeof formData] !== ''
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">Message sent successfully!</p>
          <p className="text-green-600 text-sm mt-1">We'll get back to you within 24 hours.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">Something went wrong.</p>
          <p className="text-red-600 text-sm mt-1">Please try again or contact us directly.</p>
        </div>
      )}

      {/* Floating Label Input - Name */}
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          required
          className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-[#dea01e] outline-none transition-all duration-200 bg-white"
          placeholder=" "
        />
        <label 
          htmlFor="name" 
          className={`absolute left-4 transition-all duration-200 pointer-events-none
            ${focusedField === 'name' || isFieldFilled('name')
              ? 'text-xs top-2 text-[#dea01e]' 
              : 'text-base top-4 text-gray-500'
            }
          `}
        >
          Your Name
        </label>
      </div>

      {/* Floating Label Input - Email */}
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          required
          className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-[#dea01e] outline-none transition-all duration-200 bg-white"
          placeholder=" "
        />
        <label 
          htmlFor="email" 
          className={`absolute left-4 transition-all duration-200 pointer-events-none
            ${focusedField === 'email' || isFieldFilled('email')
              ? 'text-xs top-2 text-[#dea01e]' 
              : 'text-base top-4 text-gray-500'
            }
          `}
        >
          Email Address
        </label>
      </div>

      {/* Floating Label Input - Subject */}
      <div className="relative">
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setFocusedField('subject')}
          onBlur={() => setFocusedField(null)}
          required
          className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-[#dea01e] outline-none transition-all duration-200 bg-white"
          placeholder=" "
        />
        <label 
          htmlFor="subject" 
          className={`absolute left-4 transition-all duration-200 pointer-events-none
            ${focusedField === 'subject' || isFieldFilled('subject')
              ? 'text-xs top-2 text-[#dea01e]' 
              : 'text-base top-4 text-gray-500'
            }
          `}
        >
          Subject
        </label>
      </div>

      {/* Floating Label Textarea - Message */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          required
          rows={6}
          className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-[#dea01e] outline-none transition-all duration-200 resize-none bg-white"
          placeholder=" "
        />
        <label 
          htmlFor="message" 
          className={`absolute left-4 transition-all duration-200 pointer-events-none
            ${focusedField === 'message' || isFieldFilled('message')
              ? 'text-xs top-2 text-[#dea01e]' 
              : 'text-base top-4 text-gray-500'
            }
          `}
        >
          Your Message
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 transform
          ${isSubmitting 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-[#dea01e] text-white hover:bg-[#c8901a] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
          }
        `}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}