import { useEffect, useState } from 'react';
import Head from 'next/head';

function Index() {
  const [date, setDate] = useState([]);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Head>
        <title>Next.js + Node API</title>
      </Head>
      <h1>Next.js + Node.js API</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/zeit/now-examples/blob/master/nextjs"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://nextjs.org/">Next.js</a> app with two directories,{' '}
        <code>/static</code> for static content and <code>/pages</code> which
        contains content and <code>/api</code>, a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js</a> function. See{' '}
        <a href="/pages/api/date.js">
          <code>api/date.js</code> for the Date API with Node.js
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js is:</h2>
      <p>{date ? date.date : 'Loading date...'}</p>
      <style jsx>{`
        main {
          align-content: center;
          box-sizing: border-box;
          display: grid;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          hyphens: auto;
          line-height: 1.65;
          margin: 0 auto;
          max-width: 680px;
          min-height: 100vh;
          padding: 72px 0;
          text-align: center;
        }
        h1 {
          font-size: 45px;
        }
        h2 {
          margin-top: 1.5em;
        }
        p {
          font-size: 16px;
        }
        a {
          border-bottom: 1px solid white;
          color: #0076ff;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        a:hover {
          border-bottom: 1px solid #0076ff;
        }
        code,
        pre {
          color: #d400ff;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 0.92em;
        }
        code:before,
        code:after {
          content: '\`';
        }
      `}</style>
    </main>
  );
}

export default Index;
