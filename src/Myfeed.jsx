import React from "react";

const Myfeed = () => {
  return (
    <div className="w-11/12 md:w-7/12 lg:w-8/12 xl:w-9/12 mx-auto flex justify-center gap-10 pt-10">
      {/* Left Section */}
      <div className="w-7/12 space-y-5">
        <div className="flex flex-col gap-2 rounded-none border-t border-slate-200 bg-white pt-5 first-of-type:border-t-0 dark:border-slate-800/80 dark:bg-slate-950 sm:gap-4 md:pt-8 lg:rounded-2xl lg:!border lg:p-6 lg:pb-5">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-3">
              <a href="/@Frag?source=feed-profile-clicked">
                <div className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100">
                  <img
                    alt="Matteo Crosta"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1690423175000/mu6131lcf.jpg?w=124&amp;h=124&amp;fit=crop&amp;crop=faces&amp;auto=compress,format&amp;format=webp"
                    decoding="async"
                    data-nimg="fill"
                    className="css-1vfhcql"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
                  />
                </div>
              </a>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-start gap-1 text-sm">
                  <a href="/@Frag?source=feed-profile-clicked">
                    <span className="cursor-pointer font-semibold text-slate-700 dark:text-slate-200">
                      Matteo Crosta
                    </span>
                  </a>
                </div>
                <div className="flex flex-row items-center justify-start gap-1">
                  <div className="hidden flex-row items-center justify-start gap-1 sm:flex">
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://fragland.dev"
                    >
                      <p className="hidden text-sm font-normal text-slate-500 dark:text-slate-400 sm:block">
                        fragland.dev
                      </p>
                    </a>
                    <p className="hidden text-sm font-normal text-slate-500 dark:text-slate-400 sm:block">
                      •
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                  >
                    <p className="text-sm font-normal text-slate-500 dark:text-slate-400">
                      11 hours ago
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <button type="button" aria-label="Featured on Hashnode">
              <div
                className="flex w-auto cursor-pointer items-center justify-center gap-1 rounded-full bg-indigo-100 px-3 py-1 font-sans text-sm font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-50"
                data-state="closed"
              >
                <span className="hidden sm:block">Featured</span>
              </div>
            </button>
          </div>
          <div className="flex w-full flex-col justify-start gap-4 md:gap-5">
            <div className="flex w-full flex-col justify-between gap-3 sm:gap-4 md:flex-row md:gap-6">
              <div className="flex flex-col gap-1">
                <div>
                  <a
                    target="_blank"
                    href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                  >
                    <h1 className="font-heading hn-break-words cursor-pointer text-base font-semibold text-slate-700 dark:text-slate-200 sm:text-xl sm:font-bold">
                      Mastering PostgreSQL Table Partitioning
                    </h1>
                  </a>
                </div>
                <div className="hidden md:block">
                  <a
                    target="_blank"
                    href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                  >
                    <span className="hn-break-words hidden cursor-pointer text-base font-normal text-slate-500 dark:text-slate-400 md:line-clamp-3">
                      Table partitioning is a highly effective technique used to
                      improve the performance of very large database tables. By
                      dividing the table's content into smaller sub-tables,
                      known as partitions, the overall size of the table is
                      reduced, leading to signi...
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative w-full cursor-pointer overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:h-[108px] md:shrink-0 md:basis-[180px] md:rounded-lg">
                <div className="md:hidden">
                  <div
                    data-radix-aspect-ratio-wrapper=""
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0 }}>
                      <a
                        target="_blank"
                        href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            inset: 0,
                          }}
                        >
                          <img
                            alt="Mastering PostgreSQL Table Partitioning"
                            src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/YXwt-vJ3szA/upload/4c1df44c0fe9efc10fc42bd9f91c4a42.jpeg?w=1600&amp;h=840&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                            }}
                          />
                          <noscript></noscript>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden h-full w-full md:block">
                  <a
                    target="_blank"
                    href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        inset: 0,
                      }}
                    >
                      <img
                        alt="Mastering PostgreSQL Table Partitioning"
                        src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/YXwt-vJ3szA/upload/4c1df44c0fe9efc10fc42bd9f91c4a42.jpeg?w=1600&amp;h=840&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          inset: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <noscript></noscript>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <div className="flex flex-row items-center justify-start gap-2">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                >
                  <button
                    className="group flex w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full bg-transparent px-1 py-1.5 font-sans text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600"
                    aria-label="Like reaction"
                  >
                    <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400">
                      <svg
                        fill="none"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          stroke="currentColor"
                          d="M10 17.5c.833 0 8.333-4.166 8.333-10 0-2.916-2.5-4.963-5-5-1.25-.018-2.5.417-3.333 1.667-.833-1.25-2.105-1.666-3.333-1.666-2.5 0-5 2.083-5 5 0 5.833 7.5 9.999 8.333 9.999Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                        ></path>
                      </svg>
                    </span>
                    11
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12#comments-list"
                >
                  <button
                    className="group flex w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full bg-transparent px-1 py-1.5 font-sans text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600"
                    aria-label="Comment"
                  >
                    <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400">
                      <svg
                        fill="none"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          stroke="currentColor"
                          d="M13.333 8.75H7.5m3.333 2.917H7.5m-2.803-6.97A7.5 7.5 0 1 1 7.035 16.89a.885.885 0 0 0-.495-.064l-3.465.578a.417.417 0 0 1-.48-.48l.58-3.458a.886.886 0 0 0-.064-.496 7.503 7.503 0 0 1 1.586-8.274Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="hidden items-center gap-2 sm:flex">
                  <a href="/n/postgresql?source=tags_feed_article">
                    <div className="flex w-min max-w-[126px] cursor-pointer items-center justify-start truncate rounded-full bg-slate-100 px-2 py-1 text-left text-xs font-medium text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-700">
                      <span className="truncate">PostgreSQL</span>
                    </div>
                  </a>
                  <div
                    data-orientation="horizontal"
                    role="separator"
                    className="h-3 w-px bg-slate-200 dark:bg-slate-800"
                  ></div>
                </div>
                <button
                  className="bookmark-button"
                  aria-label="Bookmark post"
                  data-state="closed"
                >
                  <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400">
                    <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                      <path
                        stroke="currentColor"
                        d="M10 6.77v1.874m0 0v1.875m0-1.875h1.875m-1.875 0H8.125M7.083 2.5h5.834a2.5 2.5 0 0 1 2.5 2.5v12.5l-4.98-3.065a.833.833 0 0 0-.874 0L4.583 17.5V5a2.5 2.5 0 0 1 2.5-2.5Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.25"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-none border-t border-slate-200 bg-white pt-5 first-of-type:border-t-0 dark:border-slate-800/80 dark:bg-slate-950 sm:gap-4 md:pt-8 lg:rounded-2xl lg:!border lg:p-6 lg:pb-5">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-3">
              <a href="/@Frag?source=feed-profile-clicked">
                <div className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100">
                  <img
                    alt="Matteo Crosta"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1690423175000/mu6131lcf.jpg?w=124&amp;h=124&amp;fit=crop&amp;crop=faces&amp;auto=compress,format&amp;format=webp"
                    decoding="async"
                    data-nimg="fill"
                    className="css-1vfhcql"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
                  />
                </div>
              </a>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-start gap-1 text-sm">
                  <a href="/@Frag?source=feed-profile-clicked">
                    <span className="cursor-pointer font-semibold text-slate-700 dark:text-slate-200">
                      Matteo Crosta
                    </span>
                  </a>
                </div>
                <div className="flex flex-row items-center justify-start gap-1">
                  <div className="hidden flex-row items-center justify-start gap-1 sm:flex">
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://fragland.dev"
                    >
                      <p className="hidden text-sm font-normal text-slate-500 dark:text-slate-400 sm:block">
                        fragland.dev
                      </p>
                    </a>
                    <p className="hidden text-sm font-normal text-slate-500 dark:text-slate-400 sm:block">
                      •
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                  >
                    <p className="text-sm font-normal text-slate-500 dark:text-slate-400">
                      11 hours ago
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <button type="button" aria-label="Featured on Hashnode">
              <div
                className="flex w-auto cursor-pointer items-center justify-center gap-1 rounded-full bg-indigo-100 px-3 py-1 font-sans text-sm font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-50"
                data-state="closed"
              >
                <span className="hidden sm:block">Featured</span>
              </div>
            </button>
          </div>
          <div className="flex w-full flex-col justify-start gap-4 md:gap-5">
            <div className="flex w-full flex-col justify-between gap-3 sm:gap-4 md:flex-row md:gap-6">
              <div className="flex flex-col gap-1">
                <div>
                  <a
                    target="_blank"
                    href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                  >
                    <h1 className="font-heading hn-break-words cursor-pointer text-base font-semibold text-slate-700 dark:text-slate-200 sm:text-xl sm:font-bold">
                      Mastering PostgreSQL Table Partitioning
                    </h1>
                  </a>
                </div>
                <div className="hidden md:block">
                  <a
                    target="_blank"
                    href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                  >
                    <span className="hn-break-words hidden cursor-pointer text-base font-normal text-slate-500 dark:text-slate-400 md:line-clamp-3">
                      Table partitioning is a highly effective technique used to
                      improve the performance of very large database tables. By
                      dividing the table's content into smaller sub-tables,
                      known as partitions, the overall size of the table is
                      reduced, leading to signi...
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative w-full cursor-pointer overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:h-[108px] md:shrink-0 md:basis-[180px] md:rounded-lg">
                <div className="md:hidden">
                  <div
                    data-radix-aspect-ratio-wrapper=""
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0 }}>
                      <a
                        target="_blank"
                        href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            inset: 0,
                          }}
                        >
                          <img
                            alt="Mastering PostgreSQL Table Partitioning"
                            src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/YXwt-vJ3szA/upload/4c1df44c0fe9efc10fc42bd9f91c4a42.jpeg?w=1600&amp;h=840&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                            }}
                          />
                          <noscript></noscript>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden h-full w-full md:block">
                  <a
                    target="_blank"
                    href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        inset: 0,
                      }}
                    >
                      <img
                        alt="Mastering PostgreSQL Table Partitioning"
                        src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/YXwt-vJ3szA/upload/4c1df44c0fe9efc10fc42bd9f91c4a42.jpeg?w=1600&amp;h=840&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          inset: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <noscript></noscript>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <div className="flex flex-row items-center justify-start gap-2">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12"
                >
                  <button
                    className="group flex w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full bg-transparent px-1 py-1.5 font-sans text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600"
                    aria-label="Like reaction"
                  >
                    <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400">
                      <svg
                        fill="none"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          stroke="currentColor"
                          d="M10 17.5c.833 0 8.333-4.166 8.333-10 0-2.916-2.5-4.963-5-5-1.25-.018-2.5.417-3.333 1.667-.833-1.25-2.105-1.666-3.333-1.666-2.5 0-5 2.083-5 5 0 5.833 7.5 9.999 8.333 9.999Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                        ></path>
                      </svg>
                    </span>
                    11
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12#comments-list"
                >
                  <button
                    className="group flex w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full bg-transparent px-1 py-1.5 font-sans text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600"
                    aria-label="Comment"
                  >
                    <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400">
                      <svg
                        fill="none"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          stroke="currentColor"
                          d="M13.333 8.75H7.5m3.333 2.917H7.5m-2.803-6.97A7.5 7.5 0 1 1 7.035 16.89a.885.885 0 0 0-.495-.064l-3.465.578a.417.417 0 0 1-.48-.48l.58-3.458a.886.886 0 0 0-.064-.496 7.503 7.503 0 0 1 1.586-8.274Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="hidden items-center gap-2 sm:flex">
                  <a href="/n/postgresql?source=tags_feed_article">
                    <div className="flex w-min max-w-[126px] cursor-pointer items-center justify-start truncate rounded-full bg-slate-100 px-2 py-1 text-left text-xs font-medium text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-700">
                      <span className="truncate">PostgreSQL</span>
                    </div>
                  </a>
                  <div
                    data-orientation="horizontal"
                    role="separator"
                    className="h-3 w-px bg-slate-200 dark:bg-slate-800"
                  ></div>
                </div>
                <button
                  className="bookmark-button"
                  aria-label="Bookmark post"
                  data-state="closed"
                >
                  <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400">
                    <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                      <path
                        stroke="currentColor"
                        d="M10 6.77v1.874m0 0v1.875m0-1.875h1.875m-1.875 0H8.125M7.083 2.5h5.834a2.5 2.5 0 0 1 2.5 2.5v12.5l-4.98-3.065a.833.833 0 0 0-.874 0L4.583 17.5V5a2.5 2.5 0 0 1 2.5-2.5Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.25"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-4/12 space-y-5">
        {/* Recommended Articles */}
        <div className="flex w-full flex-col justify-start gap-3.5 rounded-2xl border border-slate-200 px-6 py-5 dark:bg-slate-950 dark:border-slate-800/80">
          <h2 className="font-heading text-xl font-semibold text-slate-700 dark:text-slate-300">
            Recommended Articles
          </h2>
          <div>
            <div className="flex flex-col gap-5">
              {/* Recommended Article 1 */}
              <div className="flex flex-col gap-1">
                <h2
                  className="line-clamp-2 cursor-pointer font-semibold text-slate-700 dark:text-slate-300"
                  aria-label="Post Title"
                  title="I Stopped Tracking My Time and Now I'm More Productive"
                >
                  I Stopped Tracking My Time and Now I'm More Productive
                </h2>
                <div className="flex h-6 flex-row items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                  <p>
                    <a
                      href="/@miketalbot"
                      aria-label="Post Author"
                      title="Mike"
                    >
                      Mike
                    </a>
                  </p>
                  <span className="mx-2 inline-block font-bold opacity-50">
                    ·
                  </span>
                  <p>2023 views</p>
                </div>
              </div>
              {/* Recommended Article 2 */}
              <div className="flex flex-col gap-1">
                <h2
                  className="line-clamp-2 cursor-pointer font-semibold text-slate-700 dark:text-slate-300"
                  aria-label="Post Title"
                  title="The Complete Guide to Software Engineering Books"
                >
                  The Complete Guide to Software Engineering Books
                </h2>
                <div className="flex h-6 flex-row items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                  <p>
                    <a
                      href="/@BurdetteLamar"
                      aria-label="Post Author"
                      title="Burdette Lamar"
                    >
                      Burdette Lamar
                    </a>
                  </p>
                  <span className="mx-2 inline-block font-bold opacity-50">
                    ·
                  </span>
                  <p>512 views</p>
                </div>
              </div>
              {/* Recommended Article 3 */}
              <div className="flex flex-col gap-1">
                <h2
                  className="line-clamp-2 cursor-pointer font-semibold text-slate-700 dark:text-slate-300"
                  aria-label="Post Title"
                  title="7 YouTube Channels to Level Up Your Web Development Skills"
                >
                  7 YouTube Channels to Level Up Your Web Development Skills
                </h2>
                <div className="flex h-6 flex-row items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                  <p>
                    <a
                      href="/@yogeshchavan"
                      aria-label="Post Author"
                      title="Yogesh Chavan"
                    >
                      Yogesh Chavan
                    </a>
                  </p>
                  <span className="mx-2 inline-block font-bold opacity-50">
                    ·
                  </span>
                  <p>393 views</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-white disabled:text-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 hover:dark:border-slate-700 hover:dark:bg-slate-800 focus:dark:ring-offset-slate-800 disabled:dark:border-slate-800 disabled:dark:bg-slate-950 disabled:dark:text-slate-800">
              Show More
            </button>
          </div>
        </div>
        <div className="w-full">
          {/* Trending Articles */}
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
                    Unveiling the Single-Threaded Nature of JavaScript and
                    Node.js: The Waiter and the Restaurant Analogy
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
                      <a
                        href="/@dotarjun"
                        aria-label="Post Author"
                        title="Arjun"
                      >
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
        </div>
        {/* 2nd part */}
        <div className="border border-slate-200 dark:border-slate-800/80 rounded-2xl flex flex-col justify-start w-full gap-3.5 py-5 px-6">
          <div>
            <h2 className="font-heading text-xl font-semibold dark:text-slate-300 text-slate-700">
              Writing Challenges
            </h2>
          </div>
          <div>
            <div dir="ltr" data-orientation="horizontal" className="">
              <section className="mb-5">
                <div
                  role="tablist"
                  aria-orientation="horizontal"
                  aria-label="Manage your account"
                  className="flex gap-1 radix-orientation-horizontal:flex-row radix-orientation-vertical:flex-col"
                  tabIndex={0}
                  data-orientation="horizontal"
                  style={{ outline: "none" }}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="radix-:r2m:-content-incomplete"
                    data-state="active"
                    id="radix-:r2m:-trigger-incomplete"
                    variant="rectangle"
                    width="full"
                    className="group flex flex-col grow"
                    tabIndex={-1}
                    data-orientation="horizontal"
                    data-radix-collection-item=""
                  >
                    <div className="text-slate-600 dark:text-slate-300 border-transparent flex items-center px-3 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 group-radix-state-active:bg-slate-100 group-radix-state-active:text-slate-700 group-radix-state-active:dark:bg-slate-800 group-radix-state-active:dark:text-slate-200 font-medium text-md w-full justify-center">
                      Up for grabs
                    </div>
                    <span className="inline-block h-0"></span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="radix-:r2m:-content-complete"
                    data-state="inactive"
                    id="radix-:r2m:-trigger-complete"
                    variant="rectangle"
                    width="full"
                    className="group flex flex-col grow"
                    tabIndex={-1}
                    data-orientation="horizontal"
                    data-radix-collection-item=""
                  >
                    <div className="text-slate-600 dark:text-slate-300 border-transparent flex items-center px-3 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 group-radix-state-active:bg-slate-100 group-radix-state-active:text-slate-700 group-radix-state-active:dark:bg-slate-800 group-radix-state-active:dark:text-slate-200 font-medium text-md w-full justify-center">
                      Completed
                    </div>
                    <span className="inline-block h-0"></span>
                  </button>
                </div>
              </section>
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r2m:-trigger-incomplete"
                id="radix-:r2m:-content-incomplete"
                tabIndex={0}
                style={{ animationDuration: "0s" }}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row items-start gap-x-2 gap-y-5">
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                        <a
                          href="/challenge/2articles1week?source=writing_challenges_clicked"
                          aria-label="#2Articles1Week Challenge"
                        >
                          #2Articles1Week Challenge
                        </a>
                      </h3>
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        <p className="text-sm text-slate-500 dark:text-slate-300">
                          Become better at technical writing; accept Hashnode's
                          writing challenge for four weeks.
                        </p>
                      </a>
                    </div>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                      className="w-[72px] h-[72px]"
                    ></a>
                  </div>
                  {/* Add other challenge sections here */}
                  <div className="flex flex-row items-start gap-x-2 gap-y-5">
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                        <a
                          href="/challenge/2articles1week?source=writing_challenges_clicked"
                          aria-label="#2Articles1Week Challenge"
                        >
                          #2Articles1Week Challenge
                        </a>
                      </h3>
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        <p className="text-sm text-slate-500 dark:text-slate-300">
                          Become better at technical writing; accept Hashnode's
                          writing challenge for four weeks.
                        </p>
                      </a>
                    </div>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                      className="w-[72px] h-[72px]"
                    ></a>
                  </div>
                  <div className="flex flex-row items-start gap-x-2 gap-y-5">
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                        <a
                          href="/challenge/2articles1week?source=writing_challenges_clicked"
                          aria-label="#2Articles1Week Challenge"
                        >
                          #2Articles1Week Challenge
                        </a>
                      </h3>
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        <p className="text-sm text-slate-500 dark:text-slate-300">
                          Become better at technical writing; accept Hashnode's
                          writing challenge for four weeks.
                        </p>
                      </a>
                    </div>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                      className="w-[72px] h-[72px]"
                    ></a>
                  </div>
                  <div className="flex flex-row items-start gap-x-2 gap-y-5">
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                        <a
                          href="/challenge/2articles1week?source=writing_challenges_clicked"
                          aria-label="#2Articles1Week Challenge"
                        >
                          #2Articles1Week Challenge
                        </a>
                      </h3>
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        <p className="text-sm text-slate-500 dark:text-slate-300">
                          Become better at technical writing; accept Hashnode's
                          writing challenge for four weeks.
                        </p>
                      </a>
                    </div>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                      className="w-[72px] h-[72px]"
                    ></a>
                  </div>
                  <div className="flex flex-row items-start gap-x-2 gap-y-5">
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                        <a
                          href="/challenge/2articles1week?source=writing_challenges_clicked"
                          aria-label="#2Articles1Week Challenge"
                        >
                          #2Articles1Week Challenge
                        </a>
                      </h3>
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        <p className="text-sm text-slate-500 dark:text-slate-300">
                          Become better at technical writing; accept Hashnode's
                          writing challenge for four weeks.
                        </p>
                      </a>
                    </div>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                      className="w-[72px] h-[72px]"
                    ></a>
                  </div>
                  <div className="flex flex-row items-start gap-x-2 gap-y-5">
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                        <a
                          href="/challenge/2articles1week?source=writing_challenges_clicked"
                          aria-label="#2Articles1Week Challenge"
                        >
                          #2Articles1Week Challenge
                        </a>
                      </h3>
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        <p className="text-sm text-slate-500 dark:text-slate-300">
                          Become better at technical writing; accept Hashnode's
                          writing challenge for four weeks.
                        </p>
                      </a>
                    </div>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                      className="w-[72px] h-[72px]"
                    ></a>
                  </div>
                </div>
              </div>

              {/* <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r2m:-trigger-complete"
                hidden=""
                id="radix-:r2m:-content-complete"
                tabIndex={0}
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myfeed;
