import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout({ children, title = 'Kaamyaab India - Next-gen AI Education' }) {
  const description = "Kaamyaab equips Indian students with our one-year AI/ML program to prepare you for the jobs of tomorrow."
  const siteUrl = "https://kaamyaab.in" 
  const logoUrl = "https://kaamyaab.in/assets/kaamyaab.png" 

  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/assets/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:site_name" content="kaamyaab labs" />

        {/* Twitter Card Meta Tags */}
        <meta name="x:card" content="summary_large_image" />
        <meta name="x:title" content={title} />
        <meta name="x:description" content={description} />
        <meta name="x:image" content={logoUrl} />
        
        {/* Optional: If you have an X handle */}
        <meta name="x:site" content="@kaamyaab" />
      </Head>
      
      <Header />
      
      <main>{children}</main>

      {/* Fillout Form Container */}
      <div 
        data-fillout-id="wP1cRursxcus" 
        data-fillout-embed-type="popup" 
        data-fillout-button-text="📅 let's gmeet!" 
        data-fillout-dynamic-resize 
        data-fillout-button-float="bottom-right"
        data-fillout-inherit-parameters
        data-fillout-popup-size="medium"
      />

      {/* Fillout Script */}
      <Script 
        src="https://server.fillout.com/embed/v1/" 
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Error loading Fillout script:', e);
        }}
        onLoad={() => {
          console.log('Fillout script loaded successfully');
        }}
      />
      
      <Footer />
      
      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        main {
          min-height: calc(100vh - 150px);
          padding: 2rem 0;
        }
      `}</style>
    </div>
  )
}
