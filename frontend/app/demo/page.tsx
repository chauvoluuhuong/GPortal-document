'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    description: ''
  })
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
    setSubmitStatus('idle')

    // Simulate form submission
    // In a real application, you would send this to your backend API
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ email: '', phone: '', description: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
          ← Quay lại trang chủ
        </Link>
      </div>

      <h1><strong>Đặt lịch Demo miễn phí</strong></h1>
      
      <p>Vui lòng điền thông tin bên dưới để chúng tôi có thể liên hệ với bạn và sắp xếp một buổi demo phù hợp.</p>

      {submitStatus === 'success' && (
        <div style={{
          padding: '1rem',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '8px',
          color: '#155724',
          marginBottom: '1.5rem'
        }}>
          Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
        </div>
      )}

      {submitStatus === 'error' && (
        <div style={{
          padding: '1rem',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '8px',
          color: '#721c24',
          marginBottom: '1.5rem'
        }}>
          Đã xảy ra lỗi. Vui lòng thử lại sau.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '2rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Email <span style={{ color: '#dc3545' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              fontFamily: 'inherit'
            }}
            placeholder="your.email@example.com"
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Số điện thoại <span style={{ color: '#dc3545' }}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              fontFamily: 'inherit'
            }}
            placeholder="0123456789"
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Mô tả yêu cầu của bạn <span style={{ color: '#dc3545' }}>*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={6}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
            placeholder="Vui lòng mô tả ngắn gọn về yêu cầu hoặc vấn đề bạn muốn giải quyết với GPortal..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1,
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = '#0051cc'
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = '#0070f3'
            }
          }}
        >
          {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
        </button>
      </form>
    </div>
  )
}

