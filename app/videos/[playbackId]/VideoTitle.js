import { cache } from 'react'

// using setTimeout to simulate a network call
const getVideoTitle = cache(async (playbackId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${playbackId} title`)
    }, 1000)
  })
})

const VideoTitle = async ({ playbackId }) => {
  const videoTitle = await getVideoTitle(playbackId)
  return <h1>{videoTitle}</h1>
}

export default VideoTitle
