import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-smtext-slate-700 inline-block rounded-lg py-1 px-2 transition hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-800 pt-10 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm text-zinc-100">
                <NavLink href="/">home</NavLink>
                <NavLink href="/about">about</NavLink>
              </div>
              <p className="text-sm text-zinc-400">
                &copy; {new Date().getFullYear()} Bottega 2.0 - All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
