import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'

import { Button } from '@/components/Button'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 150)
  const z = useParallax(scrollYProgress, 10)

  return (
    <section className="section-gallery h-screen md:h-screen bg-black p-2">
      <motion.div style={{ z }} className="flex h-full items-center p-0">
        <img className="img-gallery" src={`/${id}.jpg`} />
      </motion.div>
      <div className="flex h-full w-full items-center">
        <motion.h1 style={{ y }}>
          <div>
            <h4 className="mb-2 text-xs text-zinc-300 font-bold uppercase">Soplaya case study</h4>
            <h1 className="bold text-4xl text-zinc-300 md:text-5xl">
              <b>Branding</b>
            </h1>
            <p className="mt-2  text-base text-zinc-500 md:text-xl">
              As a graphic designer I do love to spread concepts using visual
              creativity.
            </p>
          </div>
          <div ref={ref} className="ml-0 mt-6 text-left">
            <Button
              variant="primary"
              href="https://shared-assets.adobe.com/link/8e949e55-29d9-4f74-404a-c7e37c3e9bf2"
            >
              See the document
            </Button>
          </div>
        </motion.h1>
      </div>
    </section>
  )
}

export function SuperGallery() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <>
      {['1'].map((image) => (
        <Image id={image} />
      ))}
      <motion.div
        className="progress z-50 bg-gradient-to-r from-teal-300 to-indigo-900"
        style={{ scaleX }}
      />
    </>
  )
}
