import Head from 'next/head';
import CommercialCategory from '../../components/electric/CommercialHero/CommercialCategory';
import Layout from '../../components/Layout';

const CommercialVehicle = () => {
  return (
    <>
      <Head>
        <title>Electric Motorcycle | Akij Motors</title>
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
