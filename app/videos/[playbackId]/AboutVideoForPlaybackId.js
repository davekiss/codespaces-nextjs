import FormatPassthrough from '../AboutVideo'
import { getAssetByPlaybackId } from '../../../server-lib/Mux'

const AboutVideoForPlaybackId = async ({ playbackId }) => {
  const asset = await getAssetByPlaybackId(playbackId)
  return <FormatPassthrough asset={asset} />
}

export default AboutVideoForPlaybackId
