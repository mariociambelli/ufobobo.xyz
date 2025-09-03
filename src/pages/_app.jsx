import { Footer } from '@/components/Footer'
import '@/styles/tailwind.css'
import 'focus-visible'

import { motion } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
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
      <div className="relative h-screen flex flex-col">
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </motion.div>
  )
}
