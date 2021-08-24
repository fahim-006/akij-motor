import Head from 'next/head';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <main>
        <NotFoundPage />
      </main>
    </>
  );
};

export default NotFound;
