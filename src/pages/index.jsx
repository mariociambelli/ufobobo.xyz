import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import portraitImage from '@/images/avatar.jpg'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Mobile } from '@/components/Mobile'
import { Desktop } from '@/components/Desktop'
import { Branding } from '@/components/Branding'
import { GitHubIcon, LinkedInIcon, Mailicon } from '@/components/SocialIcons'

import { formatDate } from '@/lib/formatDate'

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
        <title>Mario Ciambelli. UI/UX Designer based in Tuscany</title>
        <meta
          name="description"
          content="I'm Mario Ciambelli, aka ufobobo. UI/UX Designer based in Tuscany"
        />
        <meta
          property="og:image"
          content="_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b4942396.jpg&w=1080&q=75"
        />
      </Head>

      <Container className="relative m-auto mario-bg flex h-screen items-center">
        <div className=" max-w-6xl">
          <h1 className="text-6xl text-zinc-800 md:text-8xl">
            I&apos;m Mario Ciambelli. <br></br>
            <i className="text-6xl">aka</i> <b>ufobobò</b>
          </h1>
          <h2 className="mt-6 text-2xl text-zinc-600">
            UI/UX Designer and creative content creator.<br></br>Currently
            working @Soplaya
          </h2>
        </div>
      </Container>
      <Mobile />
      <Desktop />
      <Branding />
    </>
  )
}
