import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import portraitImage from '@/images/avatar.jpg'
import clsx from 'clsx'
import { motion, useScroll } from 'framer-motion'
import { Glass } from '@/components/3DGlass'
import { Container } from '@/components/Container'
import { Mobile } from '@/components/Mobile'
import { SuperGallery } from '@/components/Gallery'
import { Crypto } from '@/components/Crypto'
import { Desktop } from '@/components/Desktop'

import { GitHubIcon, LinkedInIcon, Mailicon } from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { Blackhole } from '@/images/logos/glass.png'

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
        <title>Bottega 2.0. UI/UX Designer based in Tuscany</title>
        <meta
          name="description"
          content="I'm Mario Ciambelli, aka ufobobo. UI/UX Designer based in Tuscany"
        />
        <meta
          property="og:image"
          content="_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b4942396.jpg&w=1080&q=75"
        />
      </Head>
      <Container className="mario-bg m-auto flex items-center bg-black pb-32 pt-2 md:p-32">
        <div className="">
          <div className="max-w-6xl text-center">
            <div className="w-full">
              <Glass />
            </div>
            <div className="mt-0">
              <h1 className="bold text-5xl text-zinc-300 md:text-7xl">
                <b>Bottega 2.0</b>
              </h1>
              <h2 className="mt-6 text-2xl text-zinc-500">
                I'm Mario <i>aka</i> <b>ufobobo</b>.<br></br>UI/UX Designer and creative content creator.<br></br>
              </h2>
            </div>
          </div>
        </div>
      </Container>
      <Crypto />
      <Mobile />
      <SuperGallery />
    </>
  )
}
