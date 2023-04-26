import { useSearchParams } from 'next/navigation'
import MuxUploader from '@mux/mux-uploader-react'
import Mux from '@mux/mux-node'

import Link from 'next/link'

// Assumes you have your access token set in environment variables:
// Access Token ID: process.env.MUX_TOKEN_ID
// Access Token Secret: process.env.MUX_TOKEN_SECRET
const { Video } = new Mux()

export default async function Upload() {
  const searchParams = useSearchParams()
  const title = searchParams.get('title') ?? 'Default title'
  const description = searchParams.get('description') ?? 'Default description'
  const passthrough = { title, description }

  const upload = await Video.Uploads.create({
    cors_origin: '*',
    new_asset_settings: {
      playback_policy: 'public',
      passthrough: JSON.stringify(passthrough),
    },
  })

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Link href="/">Home</Link>
      <h1>Upload a video</h1>

      <MuxUploader endpoint={upload.url} />
    </div>
  )
}
