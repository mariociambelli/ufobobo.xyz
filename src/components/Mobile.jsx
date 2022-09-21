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
      <div className="mt-16 bg-white sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-16  sm:gap-8">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative  w-44 flex-none overflow-hidden rounded-xl shadow-xl sm:w-72 sm:rounded-2xl',
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
          ))}
        </div>
      </div>
    )
  }
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-white pt-20 pb-28 sm:py-24"
    >
      <Container className="relative">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <h1 className="text-4xl font-bold  text-zinc-800 sm:text-4xl md:text-5xl">
            Mobile
          </h1>
          <p className="mt-6 text-lg tracking-tight text-zinc-600">
            More than a decade designing web and mobile applications.
          </p>
        </div>

        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-6">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-xl py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? ' ring-1 ring-gray-100 '
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'text-lg font-bold [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-zinc-800 lg:text-zinc-800'
                              : 'text-gray-600 hover:text-gray-500 lg:text-zinc-800'
                          )}
                        >
                          <span className="absolute inset-0 rounded-2xl lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-zinc-800'
                            : 'text-gray-600 group-hover:text-gray-500'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="lg:col-span-6">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem]  ring-inset  sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-zinc-800 sm:text-center">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-10 w-full rounded-xl sm:w-auto lg:mt-0 lg:w-[20rem] ">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px), 20rem, (min-width: 640px) 100vw, rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
      <Photos />
      <div className="ml-0 mt-16 flex gap-2 w-full justify-center md:justify-center">
        <AppStoreLink color="black" />
        <PlayStoreLink color="black" />
      </div>
    </section>
  )
}
