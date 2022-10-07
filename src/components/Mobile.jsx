import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AppStoreLink } from '@/components/AppStoreLink'
import { PlayStoreLink } from '@/components/PlayStoreLink'
import { Container } from '@/components/Container'
import screenshotAppVendor from '@/images/screenshots/app-screen-vendor.png'
import screenshotAppChart from '@/images/screenshots/app-screen-chart.png'
import screenshotAppDelivery from '@/images/screenshots/app-screen-delivery.png'
import image1 from '@/images/prototype/image-1.jpg'
import image2 from '@/images/prototype/image-2.jpg'
import image5 from '@/images/prototype/image-5.jpg'


import { motion, useScroll } from 'framer-motion'


export function Mobile() {
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
  function Photos() {
    let rotations = ['rotate-0', 'rotate-0', 'rotate-0', 'rotate-0']

    return (
      <div className="-my-4 md:flex w-full p-10 justify-center gap-4 overflow-hidden md:py-16  ">
        {[image5, image1, image2].map((image, imageIndex) => (

            <div
              key={image.src}
              className={clsx(
                'relative overflow-hidden rounded-xl shadow-xl sm:w-80 sm:rounded-2xl mt-10 md:mt-0',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="object-fit  inset-0"
              />
            </div>

        ))}
      </div>
            
    )
  }
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-zinc-200 pt-20 pb-28 sm:py-24"
    >
      <Container className="relative">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <h4 className="mb-2 text-xs font-bold uppercase">Soplaya case study</h4>
          <h1 className="text-4xl font-bold  text-black md:text-5xl">
            Mobile
          </h1>
          <p className="mt-6 text-lg tracking-tight text-zinc-500">
            Semplicity is not stupitidy: I do love to craft simple but beautiful
            user interfaces.<br></br>
            The Soplaya case study.
          </p>
        </div>
      </Container>
      <Photos />
      <div className="ml-0 mt-16 flex w-full justify-center gap-2 md:justify-center">
        <AppStoreLink color="black" />

      </div>
    </section>
  )
}
