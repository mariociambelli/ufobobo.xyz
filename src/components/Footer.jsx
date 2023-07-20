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
        <div className="">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-3 border-t  border-zinc-200 sm:flex-row md:gap-6">
              <div className="flex gap-6 pt-8 text-sm text-zinc-400">
                <a
                  href="https://twitter.com/MarioCiambelli"
                  className="text-black hover:text-zinc-400"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/mariociambelli"
                  className="text-black hover:text-zinc-400"
                >
                  GitHub
                </a>
                <a
                  href="mailto:mario@spearbit.com"
                  className="text-black hover:text-zinc-400"
                >
                  Mail
                </a>
              </div>
              <p className="pt-0 text-sm text-zinc-400  md:pt-8">
                &copy; {new Date().getFullYear()} Ufobobo - All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
