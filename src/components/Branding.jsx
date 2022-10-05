import { useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import screenshotLogoSoplaya from '@/images/screenshots/new-logo-esecutivo.jpg'

import PDFSoplaya from '@/images/avatar.jpg'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function PDFIcon(props) {
  return (
    <svg
      width="20pt"
      height="20pt"
      version="1.1"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m21.594 4.5273c-2.0977 0-3.8047 1.6953-3.8047 3.7812v83.383c0 2.0859 1.707 3.7852 3.8047 3.7852h56.812c2.0977 0 3.8047-1.6992 3.8047-3.7852v-60.637h-24.633c-1.0469 0-1.8945-0.84766-1.8945-1.8945v-24.633zm37.883 1.3281v21.41h20.605zm-10.246 23.16c1.4102 0.015625 2.3086 0.625 2.8555 1.2148 2.1758 2.3633 1.3047 7.3945-1.082 15.098 2.3281 5.4805 5.7969 11.43 9.3672 15.715 1.5742-0.27734 3.082-0.4375 4.5117-0.48047 4.2969-0.12109 7.7305 0.81641 9.6562 2.6445 1.3594 1.2891 1.8125 2.9492 1.2188 4.4414-0.80859 2.0273-3.2891 3.1914-6.8086 3.1914-3.2344 0-6.6797-2.2461-9.9375-5.668-2.8164 0.66016-6.1719 1.7812-10.109 3.5977-2.4961 1.1523-4.6992 2.2656-6.6445 3.332-2.3047 6.4414-4.8828 10.965-10.352 13.695-1.5508 0.77344-2.7734 1.0508-3.7266 1.0508-0.94922 0-1.6328-0.26953-2.1094-0.59375-0.94922-0.64062-1.4375-1.7227-1.3359-2.9688 0.24609-3.0625 4.2969-8.0469 14.426-13.801 0.58594-1.7422 1.1875-3.6641 1.8477-5.7852 0.47266-1.5156 0.96875-3.1133 1.5156-4.8086 0.67969-2.1133 1.4414-4.3516 2.1758-6.5195 0.78125-2.3008 1.5781-4.6406 2.2891-6.8789-1.3281-3.3555-2.2227-6.4766-2.5234-8.9258-0.68359-5.5391 1.707-6.9883 3.1914-7.3594 0.58984-0.14844 1.1133-0.20703 1.5859-0.19922zm-0.027344 3.7852c-0.10938 0-0.31641 0.011719-0.63672 0.09375-0.22656 0.054688-0.62891 0.94531-0.34766 3.2188 0.11328 0.91406 0.31641 1.9219 0.59766 2.9961 1.2461-5.2148 0.55469-6.2266 0.48828-6.3086-0.003907 0.003907-0.035157 0-0.10156 0zm0.070313 17.848c-0.32031 0.95312-0.65234 1.9375-0.99609 2.9492-0.73047 2.1523-1.4883 4.375-2.1562 6.457h0.003906c-0.53906 1.6797-1.0352 3.2734-1.5039 4.7773-0.22266 0.71875-0.44141 1.4219-0.65625 2.1094 1.0664-0.53125 2.1836-1.0664 3.3516-1.6055 3.0977-1.4297 6.1094-2.5508 8.9648-3.3516-2.6289-3.375-5.043-7.3672-7.0039-11.336zm15.902 13.703c-0.48438 0.007813-1.0039 0.03125-1.5547 0.074219 1.8867 1.6406 3.7188 2.6289 5.3281 2.6289 2.168 0 3.0508-0.53906 3.2539-0.76172-0.082031-0.16016-0.39062-0.55078-1.1953-0.95312-0.57031-0.28516-2.4258-1.0469-5.8281-0.98828zm-28.344 11.008c-5.4414 3.6211-7.5664 6.3594-8.1484 7.6328 0.34766-0.078126 0.84766-0.24219 1.5234-0.57813 3.0742-1.5352 5.0195-3.7969 6.625-7.0547z" />
    </svg>
  )
}

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
]
const maxPrice = Math.max(...prices)
const minPrice = Math.min(...prices)

export function Branding() {
  return (
    <div className="overflow-hidden bg-zinc-50 py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className=" md:mx-auto md:text-center xl:max-w-none">
          <h4 className="mb-2 text-xs font-bold uppercase">Soplaya</h4>
          <h1 className="text-4xl font-bold text-black sm:text-4xl md:text-5xl">
            Branding
          </h1>
          <p className="mt-6 text-lg tracking-tight text-gray-600">
            As a graphic designer I do love to spread concepts using visual
            creativity.
          </p>

          <div className="mt-16 w-full overflow-hidden rounded-xl shadow-2xl sm:w-auto ">
            <Image
              className="w-full"
              src={screenshotLogoSoplaya}
              alt=""
              priority
              sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
            />
          </div>
          <div className="mt-16 text-center">
            <Button
              src={PDFSoplaya}
              variant="outline"
              className="ring-1 ring-gray-200"
            >
              <PDFIcon className="h-6 w-6 flex-none" />
              <a href="https://shared-assets.adobe.com/link/8e949e55-29d9-4f74-404a-c7e37c3e9bf2">
                See the document
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
