import Head from 'next/head';
import { Main } from './styles';
import { ResetCSS } from '../styles/reset';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        <ResetCSS />
        <h1>Yo!</h1>
      </Main>
    </>
  );
}
