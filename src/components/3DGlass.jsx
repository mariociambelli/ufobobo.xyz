import { useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue, useScroll } from 'framer-motion'
import Logo from '@/images/logos/glass.png'

export function Glass() {
  return (
    <div className="flex w-full justify-center">
      <Image
        className=" w-96"
        src={Logo}
        alt=""
        priority
        sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
      />
    </div>
  )
}
