import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon List | Home</title>
        <meta name="keywords" content="pokemon" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.test}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quidem quasi nihil, maiores, veniam commodi, tempore accusamus sapiente id iure facere illo repellat at sunt esse alias itaque. Impedit, temporibus.</p>
        <Link href="/pokemon">
          <a className={styles.btn}>See Pokemon Listing</a>
        </Link>
      </div>
    </>
  )
}

export default Home
