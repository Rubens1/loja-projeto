import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import MapaDoSite from '../components/MapaDoSite'

export default function MapaSite() {
  return (
    <>
      <Head>
        <title>Mapa do site</title>
      </Head>
      <Menu />
      <MapaDoSite />
      <Footer />
    </>
  )
}
