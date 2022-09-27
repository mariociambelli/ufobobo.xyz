import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'


import { Container } from '@/components/Container'

import { NavLink } from '@/components/NavLink'
import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  DribbbleIcon,
} from '@/components/SocialIcons'
function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}
function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-400 transition hover:text-zinc-800"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-400 transition group-hover:fill-zinc-800" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/">home</MobileNavLink>
            <MobileNavLink href="/about">about</MobileNavLink>
            <hr className="border-t-1 border-gray-200"></hr>
            <MobileNavLink href="mailto:mario@bottegaduepuntozero.it">
              contact
            </MobileNavLink>
          </Popover.Panel>npm
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="bg-white py-6">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/">home</NavLink>
              <NavLink href="/about">about</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-44 md:gap-x-8">
            <div className="flex lg:pl-20">
              <SocialLink
                href="https://dribbble.com/mariociambelli"
                icon={DribbbleIcon}
                className=""
              ></SocialLink>
              <SocialLink
                href="https://github.com/mariociambelli"
                icon={GitHubIcon}
                className=""
              ></SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/mariociambelli/"
                icon={LinkedInIcon}
                className=""
              ></SocialLink>
              <SocialLink
                href="mailto:mario@bottegaduepuntozero.it"
                icon={MailIcon}
                className=""
              ></SocialLink>
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
