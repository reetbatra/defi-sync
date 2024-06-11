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
        <meta content="Defi Sync" name="Reet Batra" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', display: 'flex', gap: '1rem' }}>
{/*             <button
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                backgroundColor: '#ff5733',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '900'
              }}
            >
              Swap
            </button> */}
            <ConnectButton />
          </div>
          <h1 style={{ textAlign: 'center', marginTop: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>
            Defi-Sync
          </h1>
          <div style={{ marginTop: '1rem' }}>
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

