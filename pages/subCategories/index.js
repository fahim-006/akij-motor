import Head from "next/head";
import HeaderTop from "../../components/HeaderTop";
import Navigation from "../../components/Navigation";
import HeaderBottom from "../../components/HeaderBottom";
import HeroSection from "../../components/HeroSection/HeroSection";
import Categories from "../../components/Categories/Categories.jsx";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <>
      <Head>
        <title>Akij Motors | Sub Categories</title>
      </Head>
      <div>
        <HeaderTop />
        <Navigation />
        <HeaderBottom />
        <HeroSection />
        <Categories SubCategories={true} SubCategoriesTitle="All Products" />
        <Footer />
      </div>
    </>
  );
};

export default index;
