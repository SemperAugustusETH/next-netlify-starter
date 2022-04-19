import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="CreatureToadz new website is under construction 🐸!" />
        <p className="description">
          Come back soon! Croak!
        </p>
      </main>

      <Footer />
    </div>
  )
}
