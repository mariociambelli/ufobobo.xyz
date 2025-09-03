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
      <Container className="m-auto flex items-center justify-center h-full">
        <div className="text-left">
          <div className="mt-6">
            <h1 className="font-semibold text-7xl text-zinc-900 md:text-9xl">
              I'm Mario <i>aka</i> Ufobobo
            </h1>
            <h2 className="mt-6 font-medium text-3xl text-zinc-700">
              Currently Product Designer{' '}
              <a href="https://spearbit.com/" className="hover:text-black">
                @Spearbit
              </a>
            </h2>
          </div>
          <div className="mt-20">
            <ul className="text-2xl font-semibold text-zinc-700 uppercase">
              <li className="list-none mb-2 cursor-pointer font-medium relative group">
                <span className="relative">
                  <a href='https://cantina.xyz'>Cantina</a>
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li className="list-none mb-2 cursor-pointer font-medium relative group">
                <span className="relative">
                  <a href='https://spearbit.com'>Spearbit</a>
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li className="list-none mb-2 cursor-pointer font-medium relative group">
                <span className="relative">
                <a href='https://soplaya.com'>Soplaya</a>
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li className="list-none mb-2 cursor-pointer font-medium relative group">
                <span className="relative">
                  <a href='https://magazzino77.com'>M77</a>
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
