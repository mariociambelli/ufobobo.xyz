import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import screenshotAppSales from '@/images/screenshots/app-internal-sales.jpg'



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
      className="relative w-full overflow-hidden px-0 bg-zinc-200 pt-20 pb-28 sm:py-32"
    >
      <div className="relative w-full px-0">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <div className="px-4">
          <h4 className="mb-2 text-xs font-bold uppercase">Soplaya case study</h4>
          <h1 className="text-4xl font-bold text-black sm:text-4xl md:text-5xl">
            Desktop
          </h1>
          <p className="mt-6 text-lg tracking-tight text-zinc-500">
            The complexity of business internal applications. The semplicity of
            a design system.
          </p>
          </div>
          <div className="mt-16 w-full max-w-5xl overflow-hidden  ">
            <Image
              className="w-full"
              src={screenshotAppSales}
              alt=""
              priority
              sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
            />
          </div>


        </div>
      </div>
    </section>
  )
}
