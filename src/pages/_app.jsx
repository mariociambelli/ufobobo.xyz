import { Footer } from '@/components/Footer'
import '@/styles/tailwind.css'
import 'focus-visible'

import { motion } from 'framer-motion'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
      <div className="relative flex h-screen flex-col">
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <SpeedInsights />
    </motion.div>
  )
}
