import Head from 'next/head';
import styles from '@/styles/Landing.module.css';
import Landing from '@/component/landing';
import Header from '@/component/common/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>CourseMind</title>
        <meta name="description" content="ChatGPT for Students Trained on Your Class Data" />
        <meta name="description" content="Empowering student success by seamlessly integrating Canvas data and providing intelligent support through ChatGPT for a smarter learning experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        {/* Satoshi Font Family */}
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={styles.main}>
        <Header/>
        <Landing />
      </main>
    </>
  )
}
