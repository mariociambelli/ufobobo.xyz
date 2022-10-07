import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotAppFarm from '@/images/screenshots/app-internal-farm.png'
import screenshotAppSales from '@/images/screenshots/app-internal-sales.png'
import screenshotAppAccounting from '@/images/screenshots/app-internal-accounting.png'


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
      className="relative overflow-hidden bg-zinc-200 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className=" md:mx-auto md:text-center xl:max-w-none">
          <h4 className="mb-2 text-xs font-bold uppercase">Soplaya case study</h4>
          <h1 className="text-4xl font-bold text-black sm:text-4xl md:text-5xl">
            Desktop
          </h1>
          <p className="mt-6 text-lg tracking-tight text-zinc-500">
            The complexity of business internal applications. The semplicity of
            a design system.
          </p>

          <div className="mt-16 w-full overflow-hidden rounded-xl shadow-2xl sm:w-auto ">
            <Image
              className="w-full grayscale hover:grayscale-0"
              src={screenshotAppSales}
              alt=""
              priority
              sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
            />
          </div>
          <div className="mt-8 w-full overflow-hidden rounded-xl shadow-2xl sm:w-auto md:mt-8 ">
            <Image
              className="w-full grayscale hover:grayscale-0"
              src={screenshotAppFarm}
              alt=""
              priority
              sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
            />
          </div>
          <div className="mt-8 w-full overflow-hidden rounded-xl shadow-2xl sm:w-auto md:mt-8 ">
            <Image
              className="w-full grayscale hover:grayscale-0"
              src={screenshotAppAccounting}
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
