import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotAppFarm from '@/images/screenshots/app-internal-farm.png'
import screenshotAppSales from '@/images/screenshots/app-internal-sales.png'
import screenshotAppAccounting from '@/images/screenshots/app-internal-accounting.png'

const features = [
  {
    image: screenshotAppSales,
  },
  {
    image: screenshotAppFarm,
  },
]
export function Desktop() {
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
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-gray-50 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className=" md:mx-auto md:text-center xl:max-w-none">
          <h1 className="text-4xl font-bold text-zinc-800 sm:text-4xl md:text-5xl">
            Desktop
          </h1>
          <p className="mt-6 text-lg tracking-tight text-zinc-600">
          The complexity of business internal applications. The semplicity of a design system.
          </p>

          <div className="mt-16 w-full shadow-2xl overflow-hidden rounded-xl sm:w-auto ">
            <Image
              className="w-full"
              src={screenshotAppSales}
              alt=""
              priority
              sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
            />
          </div>
          <div className="mt-8 md:mt-8 w-full shadow-2xl overflow-hidden rounded-xl sm:w-auto ">
            <Image
              className="w-full"
              src={screenshotAppAccounting}
              alt=""
              priority
              sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
            />
          </div>
          <div className="mt-8 md:mt-8 w-full shadow-2xl overflow-hidden rounded-xl sm:w-auto ">
            <Image
              className="w-full"
              src={screenshotAppFarm}
              alt=""
              priority
              sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
