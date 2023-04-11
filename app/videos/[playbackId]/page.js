import { Suspense } from 'react'
import MuxPlayer from '../../_components/MuxPlayer'

import VideoTitle from './VideoTitle'
import VideoTranscript from './VideoTranscript'

const Video = async ({ params }) => {
  const { playbackId } = params

  return (
    <>
      <Suspense fallback={<h1>Loading Title...</h1>}>
        <VideoTitle playbackId={playbackId} />
      </Suspense>
      <Suspense fallback={<p>Loading Transcript...</p>}>
        <VideoTranscript playbackId={playbackId} />
      </Suspense>
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
    </>
  )
}

export default Video
