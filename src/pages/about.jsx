import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Mario Ciambelli. UI/UX Designer based in Tuscany</title>
        <meta
          name="description"
          content="I'm Mario Ciambelli, aka ufobobo. UI/UX Designer based in Tuscany"
        />
      </Head>
      <Container className="mt-16 bg-black sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="">
            <div className='md:w-full'>
              <Image
                src={portraitImage}
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2 -mt-28 md:mt-0">
            <h1 className=" text-5xl text-zinc-300 md:text-7xl">
              <b>I’m Mario.</b> UI/UX Designer based in Tuscany
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-500">
              <p>
                I was born in Lucca on March 11th 1987 and the town where I live
                now is a source of infinte creative inspiration.
              </p>
              <p>
                Since the age of 14 i started designing web applications. I got graduated in
                Graphic Design in 2011 and then I moved to The Netherlands where
                I could start working as an Information Designer.
              </p>
              <p>
                Since 2021 I am Senior Product Designer{' '}
                <a href="https://soplaya.com">@Soplaya.</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
