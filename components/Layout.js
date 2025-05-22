import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout({ children, title = 'Kaamyaab India - Next-gen AI Education' }) {
  const description = "Kaamyaab equips Indian students with one-year AI/ML & DSA programs to prepare them for top tech interviews. Our hands-on approach, expert mentors, and real-world projects ensure you become job-ready in just 12 months. Join us to unlock your potential and succeed in the AI-driven future."
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
        <meta property="og:site_name" content="Kaamyaab India" />

        {/* Twitter Card Meta Tags */}
        <meta name="x:card" content="summary_large_image" />
        <meta name="x:title" content={title} />
        <meta name="x:description" content={description} />
        <meta name="x:image" content={logoUrl} />
        
        {/* Optional: If you have an X handle */}
        <meta name="x:site" content="@kaamyaabin" />
      </Head>
      
      <Header />
      
      <main>{children}</main>

      <Footer />
      
      <style jsx>{`
        .container {
          max-width: 1200px;
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
