import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CryptoChart from '../components/CryptoChart';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Defi Sync</title>
        <meta
          content="Defi Sync"
          name="Reet Batra"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem' }}>
          <ConnectButton />
        </div>
        <div style={{ padding: '2rem' }}>
          <CryptoChart />
        </div>
      </div>
    </main>

      <footer className={styles.footer}>
        <a href="https://x.com/reet_batra" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by Reet
        </a>
      </footer>
    </div>
  );
};

export default Home;
