import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { motion, useScroll } from 'framer-motion'
import { Container } from '@/components/Container'
import CryptoIMG from '@/images/screenshots/crypto.jpg'

export function Crypto() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-zinc-200 px-0 pt-20 pb-28 sm:py-20">
      <div className="relative w-full px-0">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <div className="px-4">
            <h4 className="mb-2 text-xs font-bold uppercase">Dashboards</h4>
            <h1 className="text-4xl font-bold text-black sm:text-4xl md:text-5xl">
              Desktop
            </h1>
            <p className="mt-6 text-lg tracking-tight text-zinc-500">
              I do love to make data beautiful. Working with dashboard and stats
              have always been a key core of my job.
            </p>
          </div>
          <div className="mx-auto mt-16 w-full max-w-5xl">
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 1 },
              }}
            >
              <Image
                className="scale-150 md:scale-100 ml-40 md:ml-0 mt-32 md:mt-0 mx-auto items-center rounded-2xl shadow-2xl md:w-full"
                src={CryptoIMG}
                alt=""
                priority
                sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}