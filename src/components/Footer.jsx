import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-700 inline-block rounded-lg py-1 px-2 transition hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto mb-20">
      <Container>
        <div className="flex flex-col items-left justify-between gap-1 border-t border-zinc-200 sm:flex-row md:gap-6">
          <div className="flex gap-6 pt-8 text-sm uppercase font-medium">
            <a
              href="https://twitter.com/MarioCiambelli"
              className="text-zinc-700 hover:text-zinc-400"
            >
              twitter
            </a>
            <a
              href="https://github.com/mariociambelli"
              className="text-zinc-700 hover:text-zinc-400"
            >
              github
            </a>
            <a
              href="mailto:mario@spearbit.com"
              className="text-zinc-700 hover:text-zinc-400"
            >
              email
            </a>
          </div>
          <p className="pt-0 pb-8 text-sm text-zinc-400 md:pb-0 md:pt-8">
            &copy; {new Date().getFullYear()} Ufobobo - All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
