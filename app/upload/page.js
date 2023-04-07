'use client'

import React, { useEffect, useState } from 'react';
import MuxUploader from '@mux/mux-uploader-react';
import Link from 'next/link';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const muxUploader = document.querySelector("mux-uploader");
    muxUploader.endpoint = async function () {
      const response = await fetch('/api/uploads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      setTitle('');
      setDescription('');

      const data = await response.json();
      return data.url;
    };

    return () => muxUploader.endpoint = null;
  }, [title, description])

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Link href="/">Home</Link>
      <h1>Upload a video</h1>
      <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>
        Title
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter video title"
          style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
        />
      </label>
      <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>
        Description
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter video description"
          style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
        />
      </label>
      <MuxUploader />
    </div>
  );
}
