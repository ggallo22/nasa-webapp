import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Navbar from '@/comps/navbar'
import Footer from '@/comps/footer'

export default function Home() {
  const [data, setData] = useState();

  const apiKey = "uIbVuf4mPa3EMsP5ozC8xCK9ELLO6XrkHxFgQAny";
  const url = `https://api.nasa.gov/techtransfer/patent/?q=10&engine&api_key=${apiKey}`;

  const getTechTransferData = async () => {
    const res = await axios.get(url);
    const info = await res.data;
    console.log(info);
    setData(info);
  }

  useEffect(() => {
    getTechTransferData();
  }, [])


  return (
    <>
      <Head>
        <title>NASA Web Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NASAlogo.png" />
      </Head>

      <div className='background'>
        <main className={styles.main}>


          <Navbar />
          {
            data && data.results.map((tech, index) => {
              return (
                <div key={index}>
                  {
                    tech && tech.map((t, ind) => {
                      if (ind === 10) {
                        return (

                          <Image src={t} alt={t} key={ind} width={200} height={200} />

                        )
                      }
                    })
                  }
                </div>
              )
            })
          }
          <Footer />

        </main>
      </div>
    </>
  )
}