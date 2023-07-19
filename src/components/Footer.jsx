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
        <div className="border-t border-zinc-200 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row md:gap-6">
              <div className="flex gap-6 text-sm text-zinc-400">
                <a
                  href="https://twitter.com/MarioCiambelli"
                  className="hover:text-black"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/mariociambelli"
                  className="hover:text-black"
                >
                  GitHub
                </a>
                <a
                  href="mailto:mario@spearbit.com"
                  className="hover:text-black"
                >
                  Mail
                </a>
              </div>
              <p className="text-sm text-zinc-400">
                &copy; {new Date().getFullYear()} Ufobobo - All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
