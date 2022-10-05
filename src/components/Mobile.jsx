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
import image3 from '@/images/prototype/image-3.jpg'
import image4 from '@/images/prototype/image-4.jpg'
import image5 from '@/images/prototype/image-5.jpg'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Semplicity is not stupidity',
    description:
      'I do like to craft simple but beautiful user interfaces. Less is more is my dogma.',
    image: screenshotAppDelivery,
  },

  {
    title: 'Information design',
    description:
      'During my studies I have being inspired by the strenght of information design communication.',
    image: screenshotAppChart,
  },
]
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
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-16  sm:gap-8">
        {[image4, image2, image1, image3, image5].map((image, imageIndex) => (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <div
              key={image.src}
              className={clsx(
                'relative  w-44 flex-none overflow-hidden rounded-xl  shadow-xl sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className=" object-fit  inset-0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    )
  }
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-zinc-50 pt-20 pb-28 sm:py-24"
    >
      <Container className="relative">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <h4 className="mb-2 text-xs font-bold uppercase">Soplaya</h4>
          <h1 className="text-4xl font-bold  text-zinc-800 sm:text-4xl md:text-5xl">
            Mobile
          </h1>
          <p className="mt-6 text-lg tracking-tight text-zinc-600">
            Semplicity is not stupitidy: I do love to craft simple but beautiful
            user interfaces.<br></br>
            The Soplaya case study.
          </p>
        </div>
      </Container>
      <Photos />
      <div className="ml-0 mt-16 flex w-full justify-center gap-2 md:justify-center">
        <AppStoreLink color="black" />
        <PlayStoreLink color="black" />
      </div>
    </section>
  )
}
