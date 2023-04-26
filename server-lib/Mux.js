import Mux from '@mux/mux-node'

// Assumes you have your access token set in environment variables:
// Access Token ID: process.env.MUX_TOKEN_ID
// Access Token Secret: process.env.MUX_TOKEN_SECRET
const { Video } = new Mux()

export { Video }
