import { cache } from 'react'
import Mux from '@mux/mux-node'

// Assumes you have your access token set in environment variables:
// Access Token ID: process.env.MUX_TOKEN_ID
// Access Token Secret: process.env.MUX_TOKEN_SECRET
const { Video } = new Mux()

const listAssets = cache(async () => {
  try {
    const assets = await Video.Assets.list()
    return assets
  } catch (e) {
    console.error(e)
  }
})

const getAssetByPlaybackId = cache(async (playbackId) => {
  // find asset by playback id from list and return
  const assets = await listAssets()

  const asset = assets.find((asset) => {
    asset.playback_ids.some((pid) => {
      return pid.id === playbackId
    })
  })

  return asset
})

const getAsset = cache(async (assetId) => {
  // find asset from list and return
  const assets = await listAssets()
  const asset = assets.find((asset) => {
    return asset.id === assetId
  })

  return asset
})

export { Video, listAssets, getAssetByPlaybackId, getAsset }
