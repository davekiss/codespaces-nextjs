'use client'

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Upload() {
  const formRef = useRef()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const params = new URLSearchParams(formData)
    router.push(`/upload/upload?${params.toString()}`)
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Link href="/">Home</Link>
      <h1>Video Upload</h1>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="title"
          style={{ display: 'block', marginBottom: '5px' }}
        >
          Title
          <input
            name="title"
            type="text"
            placeholder="Enter video title"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '2px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />
        </label>
        <label
          htmlFor="description"
          style={{ display: 'block', marginBottom: '5px' }}
        >
          Description
          <textarea
            name="description"
            placeholder="Enter video description"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '2px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />
        </label>
        <button type="submit" style={{ padding: '10px 20px' }}>
          Create Upload URL
        </button>
      </form>
    </div>
  )
}
