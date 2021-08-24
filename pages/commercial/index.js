import Head from 'next/head';
import CommercialCategory from '../../components/commercial/CommercialHero/CommercialCategory';
import Layout from '../../components/Layout';

const CommercialVehicle = () => {
  return (
    <>
      <Head>
        <title>Commercial Vehicle | Akij Motors</title>
      </Head>

      <main>
        <Layout>          
           <CommercialCategory/>
        </Layout>
      </main>
    </>
  );
};

export default CommercialVehicle;
