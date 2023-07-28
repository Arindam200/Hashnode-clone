import React from "react";

export default function TrendingArticles() {
  return (
    <>
      <div className="flex w-full flex-col justify-start gap-3.5 rounded-2xl border border-slate-200 px-6 py-5 dark:bg-slate-950 dark:border-slate-800/80">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-heading text-xl font-semibold text-slate-700 dark:text-slate-300">
            Trending Articles
          </h2>
          <button
            className="flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs text-slate-600 hover:bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-white disabled:text-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 hover:dark:border-slate-700 hover:dark:bg-slate-800 focus:dark:ring-offset-slate-800 disabled:dark:border-slate-800 disabled:dark:bg-slate-950 disabled:dark:text-slate-800"
            type="button"
            id="radix-:r2i:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <span>1 week</span>
            <span>
              <svg fill="none" viewBox="0 0 16 16" width="16" height="16">
                <path
                  stroke="currentColor"
                  d="m4 7 4 4 4-4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div>
          <div className="mb-1.5 flex flex-col gap-5">
            {/* Trending Article 1 */}
            <div className="flex flex-col gap-1">
              <h2
                className="line-clamp-2 cursor-pointer font-semibold text-slate-700 dark:text-slate-300"
                aria-label="Post Title"
                title="Build a Full Stack CRUD App With GraphQL, MongoDB, NextJS, NextAuth, and TypeScript"
              >
                Build a Full Stack CRUD App With GraphQL, MongoDB, NextJS,
                NextAuth, and TypeScript
              </h2>
              <div className="flex h-6 flex-row items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                <p>
                  <a
                    href="/@JuanMendozaDev"
                    aria-label="Post Author"
                    title="Juan Sebastián Mendoza"
                  >
                    Juan Sebastián Men...
                  </a>
                  <a
                    className="css-i7ftw6 group"
                    href="/pro?source=proBadge"
                    data-state="closed"
                  ></a>
                </p>
                <span className="mx-2 ml-0 inline-block font-bold opacity-50">
                  ·
                </span>
                <p>539 reads</p>
              </div>
            </div>
            {/* Trending Article 2 */}
            <div className="flex flex-col gap-1">
              <h2
                className="line-clamp-2 cursor-pointer font-semibold text-slate-700 dark:text-slate-300"
                aria-label="Post Title"
                title="Unveiling the Single-Threaded Nature of JavaScript and Node.js: The Waiter and the Restaurant Analogy"
              >
                Unveiling the Single-Threaded Nature of JavaScript and Node.js:
                The Waiter and the Restaurant Analogy
              </h2>
              <div className="flex h-6 flex-row items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                <p>
                  <a
                    href="/@godnik"
                    aria-label="Post Author"
                    title="Nikhil Mishra"
                  >
                    Nikhil Mishra
                  </a>
                </p>
                <span className="mx-2 inline-block font-bold opacity-50">
                  ·
                </span>
                <p>117 reads</p>
              </div>
            </div>
            {/* Trending Article 3 */}
            <div className="flex flex-col gap-1">
              <h2
                className="line-clamp-2 cursor-pointer font-semibold text-slate-700 dark:text-slate-300"
                aria-label="Post Title"
                title="Next.js 13.4 - Install NOW or Risk Falling Behind Your Competition?"
              >
                Next.js 13.4 - Install NOW or Risk Falling Behind Your
                Competition?
              </h2>
              <div className="flex h-6 flex-row items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                <p>
                  <a href="/@dotarjun" aria-label="Post Author" title="Arjun">
                    Arjun
                  </a>
                  <a
                    className="css-i7ftw6 group"
                    href="/pro?source=proBadge"
                    data-state="closed"
                  >
                    <div className="css-15v8co2">Pro</div>
                  </a>
                </p>
                <span className="mx-2 ml-0 inline-block font-bold opacity-50">
                  ·
                </span>
                <p>126 reads</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button className="flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-white disabled:text-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 hover:dark:border-slate-700 hover:dark:bg-slate-800 focus:dark:ring-offset-slate-800 disabled:dark:border-slate-800 disabled:dark:bg-slate-950 disabled:dark:text-slate-800">
            Show More
          </button>
        </div>
      </div>
    </>
  );
}
