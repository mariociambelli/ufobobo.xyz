import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto mb-20">
      <Container>
        <div className="items-left flex flex-col justify-between gap-1 border-t border-zinc-300 sm:flex-row md:gap-6">
          <div className="flex gap-6 pt-8 text-sm font-normal">
            <a
              href="https://github.com/mariociambelli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-purple-500"
            >
              github
            </a>
            <a
              href="mailto:mario@spearbit.com"
              className="text-zinc-700 hover:text-purple-500"
            >
              email
            </a>
            <a
              href="https://www.instagram.com/mario.ciambelli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-purple-500"
            >
              ig
            </a>
          </div>
          <p className="mt-1 pt-0 pb-8 text-sm text-zinc-500 md:mt-0 md:pb-0 md:pt-8">
            &copy; {new Date().getFullYear()} Ufobobo - All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
