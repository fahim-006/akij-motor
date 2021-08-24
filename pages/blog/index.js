import Head from 'next/head';
import BlogHero from '../../components/Blog/BlogHero/BlogHero';
import BlogSection from "../../components/Blog/BlogSection/BlogSection";
import Layout from '../../components/Layout';

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Akij Motors</title>
      </Head>

      <main>
        <Layout>
          <BlogHero />
          <BlogSection />

        </Layout>
      </main>
    </>
  );
};

export default BlogPage;
