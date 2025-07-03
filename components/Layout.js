import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout({ children, title = 'The AGI School - Next-gen AI Education' }) {
  const description = "The AGI School offers industry-aligned AI and DSA training programs to equip students with the skills needed for top tech jobs. Our hands-on approach, expert mentors, and real-world projects ensure job readiness in just 12 months. Join us to unlock your potential in the AI-driven future."
  const siteUrl = 'https://theagischool.com' 
  const logoUrl = "https://theagischool.com/assets/kaamyaab.png" 

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
        <meta property="og:site_name" content="The AGI School" />

        {/* Twitter Card Meta Tags */}
        <meta name="x:card" content="summary_large_image" />
        <meta name="x:title" content={title} />
        <meta name="x:description" content={description} />
        <meta name="x:image" content={logoUrl} />
        
        {/* Optional: If you have an X handle */}
        <meta name="x:site" content="@theagischool" />
      </Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM8d7j3z2l1Z4c5e5e5e5e5e5e5e5e5e5e5e5" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E0QV6X5Z24"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E0QV6X5Z24');
        `}
      </Script>
      
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
