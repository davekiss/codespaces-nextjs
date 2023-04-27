import Link from 'next/link'
import { listAssets } from '../../server-lib/Mux.js'
import AboutVideo from './AboutVideo.js'

export default async function VideosPage() {
  const assets = await listAssets()
  return (
    <>
      <Link href="/" className="link-home">
        Home
      </Link>
      <h1>All Videos</h1>
      <ul className="videos">
        {assets.map((asset) => {
          const assetId = asset.id
          const playbackId = asset.playback_ids[0].id
          return (
            <li key={assetId}>
              <Link href={`/videos/${playbackId}`}>
                <img
                  src={`https://image.mux.com/${playbackId}/thumbnail.jpg?width=640&height=360`}
                  width={160}
                  height={90}
                />
                <AboutVideo asset={asset} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
