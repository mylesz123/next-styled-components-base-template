import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 3rem;
 }
`;

const Main = styled.div`
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        <GlobalStyle />
        <h1>Yo!</h1>
      </Main>
    </>
  );
}
