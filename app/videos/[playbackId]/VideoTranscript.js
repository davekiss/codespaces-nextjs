import { cache } from 'react'

// using setTimeout to simulate a network call
const getVideoTranscript = cache(async (playbackId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${playbackId} transcript`)
    }, 2000)
  })
})

const VideoTranscript = async ({ playbackId }) => {
  const videoTranscript = await getVideoTranscript(playbackId)
  return <p>{videoTranscript}</p>
}

export default VideoTranscript
