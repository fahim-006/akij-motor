import Head from 'next/head';
import CommercialCategory from '../../components/special/CommercialHero/CommercialCategory';
import Layout from '../../components/Layout';

const CommercialVehicle = () => {
  return (
    <>
      <Head>
        <title>Special Vehicle | Akij Motors</title>
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
