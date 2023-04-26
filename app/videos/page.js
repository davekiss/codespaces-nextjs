import Link from 'next/link'
import Mux from '@mux/mux-node'
import { cache } from 'react'

// Assumes you have your access token set in environment variables:
// Access Token ID: process.env.MUX_TOKEN_ID
// Access Token Secret: process.env.MUX_TOKEN_SECRET
const { Video } = new Mux()
const getAssets = cache(async () => {
  return await Video.Assets.list()
})

export default async function VideosPage() {
  const assets = await getAssets()
  const videos = assets.map((asset) => {
    let title = 'Default Title'
    let description = 'Default description'
    const playbackId = asset.playback_ids[0].id
    if (asset.passthrough) {
      const passthrough = JSON.parse(asset.passthrough)
      if (passthrough.title) {
        title = passthrough.title
      }
      if (passthrough.description) {
        description = passthrough.description
      }
    }
    return {
      id: asset.id,
      playbackId,
      title,
      description,
    }
  })

  return (
    <>
      <Link href="/">Home</Link>
      <h1>All Videos</h1>
      <ul>
        {videos.map(({ id, title, description, playbackId }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.mux.com/${playbackId}/thumbnail.jpg?width=640&height=360`}
                width={160}
                height={90}
              />
              <h3>
                {title} - {description}
              </h3>
            </li>
          )
        })}
      </ul>
    </>
  )
}
