import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'

const montserrat = Montserrat({
  subsets:["latin"],
  varaible: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
      </Head>
        <main className={`${montserrat.varaible}font-mont`}>
          <Component {...pageProps} />
        </main>
    </>
)
}
