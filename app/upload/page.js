'use client'

import React, { useRef } from 'react'
import Link from 'next/link'

export default function Upload() {
  const formRef = useRef()
  const handleCreateUploadUrlSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const { title, description } = formData
    await fetch('/api/uploads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Link href="/">Home</Link>
      <h1>Video Upload</h1>
      <form onSubmit={handleCreateUploadUrlSubmit}>
        <label
          htmlFor="title"
          style={{ display: 'block', marginBottom: '5px' }}
        >
          Title
          <input
            id="title"
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
            id="description"
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
