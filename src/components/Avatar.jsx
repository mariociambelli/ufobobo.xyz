import { useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import Logo from '@/images/logos/ufobobo.jpg'

export function Avatar() {
  return (
    <div className="flex w-full justify-center">
      <Image
        className="w-72 rounded-full md:w-96"
        src={Logo}
        alt=""
        priority
        sizes="(min-width: 1024px),(min-width: 640px) 100vw, rem"
      />
    </div>
  )
}
