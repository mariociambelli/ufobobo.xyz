import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { Avatar, Glass } from '@/components/Avatar'
import { Container } from '@/components/Container'

import { formatDate } from '@/lib/formatDate'
import { Blackhole } from '@/images/logos/ufobobo.jpg'
import { motion } from 'framer-motion'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
    </Link>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Mario Ciambelli aka Ufobobo. Head Designer @Spearbit</title>
        <meta
          name="description"
          content="I'm Mario Ciambelli, aka ufobobo. UI/UX Designer based in Tuscany"
        />
        <meta
          property="og:image"
          content="_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b4942396.jpg&w=1080&q=75"
        />
      </Head>
      <Container className="mario-bg m-auto flex items-center bg-zinc-100 pt-12">
        <div className="">
          <div className="max-w-6xl text-center">
            <div className="mx-auto w-72">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 1 },
                }}
              >
                <Avatar />
              </motion.div>
            </div>
            <div className="mt-6">
              <h1 className="bold text-5xl text-zinc-900 md:text-7xl">
                I'm Mario <i>aka</i> <b>Ufobobo</b>
              </h1>
              <h2 className="mt-6 text-xl text-zinc-500">
                Creative content creator. Currently Product Designer{' '}
                <a href="https://spearbit.com/" className="hover:text-black">
                  @Spearbit
                </a>
                <br></br>
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
