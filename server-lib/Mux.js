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
  const response = await Video.PlaybackIds.get(playbackId)
  const asset = await getAsset(response.object.id)
  return asset
})

const getAsset = cache(async (assetId) => {
  const response = await Video.Assets.get(assetId)
  return response
})

export { Video, listAssets, getAssetByPlaybackId, getAsset }
