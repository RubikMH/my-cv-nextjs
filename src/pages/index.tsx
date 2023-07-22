/* eslint-disable import/no-extraneous-dependencies */
import LandingPage from '@/components/LandingPage'
import Layout from '@/containers/Layout'
import Head from 'next/head'
import { MdDeveloperMode } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import { AiFillChrome } from 'react-icons/ai'
import Skills from '@/components/Skills'
import InfoAboutMe from '@/components/InfoAboutMe'

export default function Home() {
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker
  //       .register('/service-worker.js')
  //       .then((registration) => {
  //         console.log('Service worker registered:', registration)
  //       })
  //       .catch((error) => {
  //         console.error('Error registering service worker:', error)
  //       })
  //   })
  // }

  return (
    <Layout>
      <Head>
        <title>RubikMH</title>
      </Head>
      <LandingPage />
      <MdDeveloperMode
        className="absolute transition-all duration-300 right-20 top-40 animate-pulse text-primary "
        size={100}
      />
      <CgWebsite
        size={100}
        className="absolute transition-all duration-300 left-20 top-96 animate-bounce  text-primary"
      />

      <AiFillChrome
        size={100}
        className="absolute  transition-all duration-300 left-20 top-10 animate-spin-slow text-primary "
      />
      <Skills />
      <InfoAboutMe />
    </Layout>
  )
}
