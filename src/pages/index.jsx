import Head from 'next/head'
import { Container } from '@/components/Container'

export default function Home() {
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
      <Container className="m-auto flex h-full items-center justify-center">
        <div className="text-left">
          <div className="mt-6">
            <h1 className="text-5xl font-semibold text-zinc-900 md:text-9xl">
              I&apos;m Mario <i>aka</i> Ufobobo
            </h1>
            <h2 className="text-md mt-6 font-normal uppercase tracking-wide text-zinc-700 md:text-xl">
              Currently Product Designer{' '}
              <a
                href="https://spearbit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                @Spearbit
              </a>
            </h2>
          </div>
          <div className="mt-20">
            <ul className="text-md font-normal uppercase tracking-wide text-zinc-700 md:text-xl">
              <li className="group relative cursor-pointer list-none font-semibold text-zinc-900">
                <span className="relative">Past works</span>
              </li>
              <li className="group relative cursor-pointer list-none font-normal">
                <span className="relative">
                  <a
                    href="https://ufobobo.notion.site/Cantina-24d77d4db4608097b5bfccef8a231b7d?pvs=74"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cantina
                  </a>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li className="group relative cursor-pointer list-none font-normal">
                <span className="relative">
                  <a
                    href="https://spearbit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spearbit
                  </a>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-500  transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li className="group relative cursor-pointer list-none font-normal">
                <span className="relative">
                  <a
                    href="https://soplaya.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Soplaya
                  </a>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li className="group relative cursor-pointer list-none font-normal">
                <span className="relative">
                  <a
                    href="https://magazzino77.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    M77
                  </a>
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
