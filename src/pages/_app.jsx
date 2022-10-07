import { useEffect, useRef } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

import { motion } from 'framer-motion'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <Header />
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <div className="relative">
          <main>
            <Component previousPathname={previousPathname} {...pageProps} />
          </main>
          <Footer />
        </div>
      </motion.div>
    </>
  )
}
