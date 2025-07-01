import { ExternalLink, PenLine, FolderGit2, FileText } from "lucide-react"
import Link from "next/link"
import { ClientTooltip } from "@/components/client-tooltip"

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
                I'm Emery. You may also know me as <a href="https://www.x.com/zimaab" className="italic underline cursor-alias font-bold decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">Zima</a>, currently a{" "}
                <ClientTooltip
                  className="max-w-xs p-3 bg-misty-rose-50 dark:bg-smoky-black-900 border-misty-rose-200 dark:border-smoky-black-700"
                  content={
                    <p className="text-sm text-smoky-black-700 dark:text-misty-rose-300">
                      A Design Engineer bridges the gap between design and development, combining visual design skills with technical implementation to create seamless user experiences.
                    </p>
                  }
                >
                  <span className="cursor-help">
                    Design Engineer
                    <sup className="text-xs ml-1 text-shamock-green-500 hover:text-shamock-green-600 dark:text-shamock-green-400 dark:hover:text-shamock-green-300">
                      ?
                    </sup>
                  </span>
                </ClientTooltip>{" "}
                at {" "}
                <Link href="https://juxstudios.com" className="underline cursor-alias decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                  Jux Studios
                </Link>
                . Previously I worked as an Assistant Creative Director at{" "}
                <Link href="www.instagram.com/dnmgdx" className="underline cursor-alias font-bold decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                  DNMGD Apparel
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline cursor-alias font-bold decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                  Uncos Naija
                </Link> as a Technical Support Engineer.
                {" "}
                A few links to explore:
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  <Link href="/writing" className="inline-flex cursor-alias decoration-dotted items-center gap-2 underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                    <PenLine className="h-4 w-4" />
                    Writing
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="inline-flex cursor-alias decoration-dotted items-center gap-2 underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                    <FolderGit2 className="h-4 w-4" />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="inline-flex cursor-alias decoration-dotted items-center gap-2 underline hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
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
                  href="mailto:emerything@yahoo.com"
                  className="underline cursor-alias decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                >
                  receive updates from me via email
                </Link>{" "}
                or follow me:
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  RSS feed:{" "}
                  <Link href="https://zimah.substack.com" className="underline cursor-alias decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors">
                    zimah.substack.com/feed
                  </Link>
                </li>
                <li>
                  Twitter:{" "}
                  <Link
                    href="https://twitter.com/zimaab"
                    className="underline cursor-alias decoration-dotted   hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                  >
                    @zimaab
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  GitHub:{" "}
                  <Link
                    href="https://github.com/codemerything"
                    className="underline cursor-alias decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                  >
                    @codemerything
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  LinkedIn:{" "}
                  <Link
                    href="https://linkedin.com/in/emerything"
                    className="underline cursor-alias decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                  >
                    @emerything
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  Farcaster:{" "}
                  <Link
                    href="https://farcaster.xyz/@zimaa"
                    className="underline cursor-alias decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
                  >
                    @zimaa
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  Behance:{" "}
                  <Link
                    href="https://www.behance.net/mmnldm"
                    className="underline cursor-alias decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors"
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
                I'm currently working on a new project called <a href="https://chromewebstore.google.com/detail/degen-cost/kmpmnllmhildaflkcfdjenkiiggddcco" className="underline cursor-alias decoration-dotted hover:text-shamock-green-500 dark:hover:text-shamock-green-400 transition-colors" target="_blank">
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
