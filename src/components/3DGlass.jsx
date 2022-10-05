import { useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue, useScroll } from 'framer-motion'
import { GlassSVG } from '@/images/logos/glass.svg'

export function Glass() {
  return (
    <div className="flex w-full justify-center">
      <svg className="flex-no-shrink fill-current" viewBox="0 0 300 380" width="250px" height="350px">
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#7A5FFF">
              <animate
                attributeName="stop-color"
                values="#7A5FFF; #01FF89; #7A5FFF"
                dur="4s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="100%" stop-color="#ad277b">
              <animate
                attributeName="stop-color"
                values="#27fde1; #ad277b; #27fde1"
                dur="4s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
        <g>
          <path
            fill="url('#logo-gradient')"
            d="M278.5,187.4l4.3-130l0.4-0.7l-85-44.2l-0.2-0.1h-38.8L23.9,42.4L11,59l0.5,0.3l8.8,82.8l0,0l0,0.4l2.2,20.9
	c-0.4,4-11.1,113.3-11.1,133c0,1.3,0,4.6,38.6,34.6c18.9,14.7,38,28.7,38.2,28.8l0.2,0.2l50,4.3l0.2,0l143.8-38.8l15-25.5
	L278.5,187.4z M277.1,167.9L270.8,77l9.9-16.2L277.1,167.9z M100.7,296.7l26.6,4l10,61.5L90,358.1L100.7,296.7z M170.4,102
	l25.3,107.4L113.2,226L133.4,111L170.4,102z M111.8,222.2l-26.1-116l45.6,4.9L111.8,222.2z M112.1,232.4l14.9,66.2l-25.8-3.9
	L112.1,232.4z M113.1,228l83.5-16.8l65.3,47.8l0.6-0.8l0.3-0.4l0,0l0.3-0.4l-65.3-47.9l-25.4-108L268.9,78l7.6,109.4L262.6,263
	L129,298.6L113.1,228z M180.3,97.5l-20-83.2h36.2l-9.5,81.6L180.3,97.5z M269.1,75.9l-79.9,19.5l9.3-80.5l81.8,42.6L269.1,75.9z
	 M25,44.2l133.4-29.7l20,83.5l-45.9,11.2l-47.6-5.1L13.9,58.5L25,44.2z M83.6,105.7l27.1,120.7L34,233.2l0.2,2l76.6-6.8l-11.5,65.4
	L35,249.9L22.3,142.3l-8.7-81.5L83.6,105.7z M13.4,296.4c0-16.6,7.8-98.4,10.4-124.7l9.3,78.9l0.1,0.5L98.8,296l-10.8,61.3
	C58.8,335.7,13.7,301,13.4,296.4z M281.1,323.8L139.3,362l-9.9-61l0.1,0l-0.1-0.5l134.3-35.8l0.6-0.2l13.1-71.4l17.9,106.4
	L281.1,323.8z"
          ></path>
        </g>
      </svg>
    </div>
  )
}
