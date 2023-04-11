import styles from '../styles/home.module.css'
import Link from 'next/link';

function Home() {
  return (
    <main className={styles.main}>
      <h1>Mux Reactathon Workshop</h1>

      <Link href="/upload">Upload</Link>
      <br />
      <Link href="/videos">All videos</Link>
      <br />
      <Link href="/videos/yb2L3z3Z4IKQH02HYkf9xPToVYkOC85WA">Single video</Link>

      <hr className={styles.hr} />
    </main>
  )
}

export default Home
