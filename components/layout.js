import Head from "next/head";
import Script from "next/script";
import Navigation from "../components/navigation";

export const siteTitle = "Gabe Grieve";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Creative developer, designer &amp; product manager."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XDSEY865NX"
        strategy="lazyOnload"
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XDSEY865NX');
        `}
      </Script>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
}
