import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import MediaGallery from '../components/MediaGallery';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ShareButtons from '../components/ShareButtons';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
          <Head>
        <title>IC Catering | Layanan Catering Terbaik di Sidomulyo Pekanbaru</title>
        <meta name="description" content="IC Catering menghadirkan layanan catering terbaik di Sidomulyo, Pekanbaru. Cocok untuk acara keluarga, kantor, hingga pesta besar." />
        <meta name="keywords" content="IC Catering, Catering Pekanbaru, Catering Sidomulyo, Catering murah, Layanan catering Pekanbaru, Catering enak Sidomulyo" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="IC Catering | Layanan Catering Terbaik di Sidomulyo Pekanbaru" />
        <meta property="og:description" content="Layanan catering terpercaya di Pekanbaru dengan menu lezat dan harga terjangkau." />
        <meta property="og:url" content="https://catering.andhim.net" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://catering.andhim.net/images/og.webp" />
        <meta property="og:site_name" content="IC Catering" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IC Catering | Layanan Catering Terbaik di Sidomulyo Pekanbaru" />
        <meta name="twitter:description" content="Layanan catering terpercaya di Pekanbaru dengan menu lezat dan harga terjangkau." />
        <meta name="twitter:image" content="https://catering.andhim.net/images/og.webp" />
  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-M8N6FYLBN8"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M8N6FYLBN8', {
        page_path: window.location.pathname,
      });
    `
  }} />
      </Head>
      <Hero />
      <About />
      <Menu />
      <MediaGallery />
      <Features />
      <Testimonials />
      <ContactForm />
      <ShareButtons />
      <Footer />
    </>
  );
}
