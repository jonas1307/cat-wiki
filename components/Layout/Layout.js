import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css'

const Layout = ({children, title}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? `${title} - CatWiki` : "CatWiki"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className={styles.header}>
        <Link href="/">
          <img src={`/img/logo.svg`} alt='CatWiki logo' />
        </Link>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <Link href="/">
          <img src={`/img/logo.svg`} alt='CatWiki logo' />
        </Link>
        <span><a href="https://jonasamorim.dev">jonasamorim.dev</a> @ devchallenge.io</span>
      </footer>
    </div>
  )
}

export default Layout;
