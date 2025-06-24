import { ExternalLink, PenLine, FolderGit2, FileText } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="">
      {/* About Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* About Me Section */}
          <section className="space-y-4">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">About me</h1>
            <div className=" max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm Emery. You may also know me as <a href="https://www.x.com/zimaab" className="italic underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">Zima</a>, currently a Design
                Engineer at{" "}
                <Link href="https://juxstudios.com" className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                  Jux Studios
                </Link>
                . Previously I worked as an Assistant Creative Director at{" "}
                <Link href="www.instagram.com/dnmgdx" className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                  DNMGD Apparel
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                  Another Company
                </Link>
                . A few links to explore:
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  <Link href="/writing" className="inline-flex items-center gap-2 underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                    <PenLine className="h-4 w-4" />
                    Writing
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="inline-flex items-center gap-2 underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                    <FolderGit2 className="h-4 w-4" />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="inline-flex items-center gap-2 underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                    <FileText className="h-4 w-4" />
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Elsewhere Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Elsewhere</h2>
            <div className=" max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                You can{" "}
                <Link
                  href="mailto:your@email.com"
                  className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                >
                  receive updates from me via email
                </Link>{" "}
                or follow me:
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  RSS feed:{" "}
                  <Link href="/feed.xml" className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                    yourname.com/feed
                  </Link>
                </li>
                <li>
                  Twitter:{" "}
                  <Link
                    href="https://twitter.com/zimaab"
                    className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                  >
                    @zimaab
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  GitHub:{" "}
                  <Link
                    href="https://github.com/codemerything"
                    className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                  >
                    @codemerything
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  LinkedIn:{" "}
                  <Link
                    href="https://linkedin.com/in/mmnldm"
                    className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                  >
                    @mmnldm
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  Farcaster:{" "}
                  <Link
                    href="https://farcaster.xyz/@zimaa"
                    className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                  >
                    @zimaa
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  Behance:{" "}
                  <Link
                    href="https://www.behance.net/mmnldm"
                    className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
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
            <div className=" max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently working on a new project called <a href="https://chromewebstore.google.com/detail/degen-cost/kmpmnllmhildaflkcfdjenkiiggddcco" className="underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors" target="_blank">
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
