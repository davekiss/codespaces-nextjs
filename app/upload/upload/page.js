import Link from 'next/link'
import MuxUploader from '../../_components/MuxUploader'
import { Video } from '../../../server-lib/Mux'

export default async function Upload({ _, searchParams }) {
  const upload = await Video.Uploads.create({
    cors_origin: '*',
    new_asset_settings: {
      playback_policy: 'public',
      passthrough: JSON.stringify(searchParams),
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
