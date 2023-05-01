import Link from 'next/link'

import MuxPlayer from '../../_components/MuxPlayer'
import AboutVideoForPlaybackId from './AboutVideoForPlaybackId'
import Comments from './Comments'

const Video = async ({ params }) => {
  const { playbackId } = params

  return (
    <>
      <Link href="/" className="link-home">
        Home
      </Link>
      <div className="player-wrapper">
        <MuxPlayer
          streamType="on-demand"
          playbackId={playbackId}
          metadata={{
            video_id: 'video-id-54321',
            video_title: 'Test video title',
            viewer_user_id: 'user-id-007',
          }}
        />
      </div>
      <AboutVideoForPlaybackId playbackId={playbackId} />
      <Comments playbackId={playbackId} />
    </>
  )
}

export default Video
