'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Upload() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    router.push(`/upload/upload?title=${title}&description=${description}`)
  }

  return (
    <>
      <Link href="/" className="link-home">
        Home
      </Link>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '2px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />
        </label>
        <button
          type="submit"
          style={{ padding: '10px 20px' }}
          disabled={!title.trim() || !description.trim()}
        >
          Create Upload URL
        </button>
      </form>
    </>
  )
}
