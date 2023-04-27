import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Mux Reactathon Workshop</h1>

      <ul>
        <li>
          <Link href="/upload">Upload</Link>
        </li>
        <li>
          <Link href="/videos">All Videos</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
