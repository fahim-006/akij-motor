import Head from 'next/head';
import AboutUsHero from '../../components/AboutUs/AboutUsHero/AboutUsHero';
import Milestone from '../../components/AboutUs/Milestone/Milestone';
import MissionSection from '../../components/AboutUs/MissionSection/MissionSection';
import MultiCard from '../../components/AboutUs/MultiCard/MultiCard';
import OwnerSpeech from '../../components/AboutUs/OwnerSpeech/OwnerSpeech';
import Advisor from '../../components/AboutUs/TeamsAndDirectors/Advisor';
import Directors from '../../components/AboutUs/TeamsAndDirectors/BoardOfDirectors';
import Teams from '../../components/AboutUs/TeamsAndDirectors/Teams';
import Customers from '../../components/Customers/Customers';
import Layout from '../../components/Layout';
import Partners from '../../components/Partners/Partners';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Akij motors | about us</title>
      </Head>

      <main>
        <AboutUsHero />
        <MissionSection />
        <MultiCard />

        <Teams />
        <Directors />
        <Advisor />

        <OwnerSpeech />

        <Milestone />

        <Customers />

        <Partners />
      </main>
    </Layout>
  );
};

export default About;
