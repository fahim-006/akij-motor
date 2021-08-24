import Head from 'next/head';
import CommercialCategory from '../../components/private/CommercialHero/CommercialCategory';
import Layout from '../../components/Layout';


const CommercialVehicle = () => {
  return (
    <>
      <Head>
        <title>Public Vehicle | Akij Motors</title>
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
