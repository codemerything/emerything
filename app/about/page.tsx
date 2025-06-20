import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="">
      {/* About Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* About Me Section */}
          <section className="space-y-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">About me</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm Emery. You may also know me as <a href="https://www.x.com/zimaab" className="italic">Zima</a>, currently a Design
                Engineer at{" "}
                <Link href="https://juxstudios.com" className="text-shamock-green-500 underline hover:no-underline">
                  Jux Studios
                </Link>
                . Previously I worked as an Assistant Creative Director at{" "}
                <Link href="www.instagram.com/dnmgdx" className="text-shamock-green-500 underline hover:no-underline">
                  DNMGD Apparel
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-shamock-green-500 underline hover:no-underline">
                  Another Company
                </Link>
                . A few links to explore:
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  <Link href="/writing" className="text-shamock-green-500 underline hover:no-underline">
                    Writing
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-shamock-green-500 underline hover:no-underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <a href="/Emmanuel_Edem_Resume.md" download className="text-shamock-green-500 underline hover:no-underline">
                    Download Resume <span className="text-xs">(MD)</span>
                  </a>
                </li>
                <li>
                  <Link href="#" className="text-shamock-green-500 underline hover:no-underline">
                    What I'm doing now
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Elsewhere Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Elsewhere</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                You can{" "}
                <Link
                  href="mailto:your@email.com"
                  className="text-shamock-green-500 underline hover:no-underline"
                >
                  receive updates from me via email
                </Link>{" "}
                or follow me:
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  RSS feed:{" "}
                  <Link href="/feed.xml" className="text-shamock-green-500 underline hover:no-underline">
                    yourname.com/feed
                  </Link>
                </li>
                <li>
                  Twitter:{" "}
                  <Link
                    href="https://twitter.com/zimaab"
                    className="text-shamock-green-500 underline hover:no-underline"
                  >
                    @zimaab
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  GitHub:{" "}
                  <Link
                    href="https://github.com/codemerything"
                    className="text-shamock-green-500 underline hover:no-underline"
                  >
                    @codemerything
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  LinkedIn:{" "}
                  <Link
                    href="https://linkedin.com/in/mmnldm"
                    className="text-shamock-green-500 underline hover:no-underline"
                  >
                    @mmnldm
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  Farcaster:{" "}
                  <Link
                    href="https://farcaster.xyz/@zimaa"
                    className="text-shamock-green-500 underline hover:no-underline"
                  >
                    @zimaa
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  Behance:{" "}
                  <Link
                    href="https://www.behance.net/mmnldm"
                    className="text-shamock-green-500 underline hover:no-underline"
                  >
                    @mmnldm
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* What I'm doing now Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">What I'm doing now</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently working on a new project called <a href="https://chromewebstore.google.com/detail/degen-cost/kmpmnllmhildaflkcfdjenkiiggddcco" className="text-shamock-green-500 underline hover:no-underline" target="_blank">
                  Degen Cost
                </a>. It's an extension that helps converts fiat to crypto and it was inspired by the trading culture in web3 and I thought a little tool to help put things in perspective.
              </p>
            </div>
          </section>

          {/* Colophon Section
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Colophon</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                This website was built with Next.js, Tailwind CSS, and TypeScript. The color pallete is
              </p>
            </div>
          </section> */}

        </div>
      </main>
    </div>
  )
}
