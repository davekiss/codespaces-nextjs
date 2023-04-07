'use client'

import React, { useEffect, useState } from 'react';
import MuxUploader from '@mux/mux-uploader-react';
import Link from 'next/link';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadUrl, setUploadUrl] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCreateUploadUrlSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/uploads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });

    const data = await response.json();
    setUploadUrl(data.url);
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Link href="/">Home</Link>
      <h1>Upload a video</h1>
      <form onSubmit={handleCreateUploadUrlSubmit}>
        <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>
          Title
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter video title"
            style={{ width: '100%', padding: '8px', borderRadius: '2px', border: '1px solid #ccc', marginBottom: '10px' }}
            disabled={!!uploadUrl}
          />
        </label>
        <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>
          Description
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter video description"
            style={{ width: '100%', padding: '8px', borderRadius: '2px', border: '1px solid #ccc', marginBottom: '10px' }}
            disabled={!!uploadUrl}
          />
        </label>
        <button disabled={!!uploadUrl} type="submit" style={{ padding: '10px 20px' }}>
          Create Upload URL
        </button>
      </form>
      {!!uploadUrl && <>
        <hr />
        <MuxUploader endpoint={uploadUrl} />
      </>}
    </div>
  );
}
