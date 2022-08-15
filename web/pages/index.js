import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tom Crampin</title>
				<meta name="description" content="Descriptions" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-video-wrap">
				<video
					className="reel object-cover"
					src="/reel.mp4"
					loop
					muted
					preload
					autoPlay="autoplay"
				></video>
			</div>
			<main className={styles.main}></main>

			{/* <footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Tom Crampin
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer> */}
		</div>
	)
}
