import type { NextPage } from 'next'
import Header from "../sections/Header"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Entrance from '../sections/Entrance'
import Graysection from '../sections/Graysection'
import Modalsection from '../sections/Modalsection'
import Conversation from '../sections/Conversation'
import Faq from '../sections/Faq'
import Footer from '../sections/Footer'
const Home: NextPage = () => {
  return (
    <>
<Header/>
<Entrance/>
<Graysection/>
<Modalsection/>
<Conversation/>
<Faq/>
<Footer/>
    {/* <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  
  <div className='card-a1_1'>
  <div className='btn-link_white half'>Cancel</div>
  <div className='btn-link_violet half'>Continue</div>
  </div>
  <div className='card-c1_1'>
  <div className='btn-link_white full'>Cancel</div>
  <div className='btn-link_violet full'>Continue</div>
  </div> */}
  </>
  )
}

export default Home
