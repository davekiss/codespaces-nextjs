import { Suspense } from 'react'
import Link from 'next/link'

import MuxPlayer from '../../_components/MuxPlayer'
import AboutVideo from './AboutVideoForPlaybackId'

const Video = async ({ params }) => {
  const { playbackId } = params

  return (
    <>
      <Link href="/" className="link-home">
        Home
      </Link>
      <MuxPlayer
        streamType="on-demand"
        playbackId={playbackId}
        metadata={{
          video_id: 'video-id-54321',
          video_title: 'Test video title',
          viewer_user_id: 'user-id-007',
        }}
        style={{
          maxWidth: '42rem',
        }}
      />
      <Suspense fallback={<h3>Loading Video Info...</h3>}>
        <AboutVideo playbackId={playbackId} />
      </Suspense>
    </>
  )
}

export default Video
