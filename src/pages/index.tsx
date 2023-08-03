/* eslint-disable no-constant-condition */
/* eslint-disable import/no-extraneous-dependencies */
import LandingPage from '@/components/LandingPage'
import Layout from '@/containers/Layout'
import Head from 'next/head'
import { MdDeveloperMode } from 'react-icons/md'

import { CgWebsite } from 'react-icons/cg'
import { AiFillChrome } from 'react-icons/ai'

import Skills from '@/components/Skills'
import InfoAboutMe from '@/components/InfoAboutMe'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { NextPage } from 'next'
import axios from 'axios'

const Home: NextPage = (props) => {
  const [online, setOnline] = useState(true)

  const { data }: any = props

  //  typeof window
  const handelOnline = () => {
    setOnline(navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener('online', handelOnline)
    window.addEventListener('offline', handelOnline)
  })
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('Service worker registered:', registration)
          })
          .catch((error) => {
            console.error('Error registering service worker:', error)
          })
      })
    }
  }, [])

  useEffect(() => {
    if (online) {
      toast.success('you are onLine now :)')
    } else {
      toast.error('you are offLine !!! ')
    }
  }, [online])

  return (
    <Layout>
      <Toaster />
      <Head>
        <title>RubikMH</title>

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="md:block hidden md:h-10 xl:h-20" />
      <LandingPage data={data.res.Profile} />

      <div className="w-full flex justify-between md:max-w-2xl mx-auto flex-wrap items-center h-52">
        <MdDeveloperMode
          className="xl:absolute w-1/2 md:w-1/4   xl:w-28 transition-all duration-300 xl:right-20 top-40 animate-pulse text-primary "
          size={100}
        />
        <CgWebsite
          size={100}
          className="xl:absolute w-1/2 md:w-1/4    xl:w-28 transition-all duration-300 xl:left-20 top-96 animate-bounce  text-primary"
        />

        <AiFillChrome
          size={100}
          className="xl:absolute  w-1/2 md:w-1/4   xl:w-28 transition-all duration-300 xl:left-20 top-10 animate-spin-slow text-primary "
        />
      </div>
      <Skills skillsData={data.res.Skills} />
      <InfoAboutMe />
    </Layout>
  )
}

export default Home

Home.getInitialProps = async () => {
  const res = await axios.get('http://localhost:8080/Profile')

  return { data: res.data }
}
