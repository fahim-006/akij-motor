import Head from 'next/head';
import HeaderTop from '../../components/HeaderTop';
import Navigation from '../../components/Navigation';
import HeaderBottom from '../../components/HeaderBottom';
import Footer from '../../components/Footer';
import CommercialCategory from '../../components/commercial/CommercialHero/CommercialCategory';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection/HeroSection';

const CommercialVehicle = () => {
  return (
    <>
      <Head>
        <title>Commercial Vehicle | Akij Motors</title>
      </Head>

      <main>
        <HeaderTop />
        <Navigation />
        <HeaderBottom />
        <HeroSection />
        <CommercialCategory />
        <Footer />
      </main>
    </>
  );
};

export default CommercialVehicle;
