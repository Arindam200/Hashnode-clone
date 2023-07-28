import React from "react";

function BlogCard({
  profileUrl,
  profileImage,
  profileName,
  postUrl,
  postTitle,
  postDescription,
  postImage,
  postDate,
}) {
  return (
    <div className="flex flex-col gap-2 rounded-none border-t border-slate-200 bg-white pt-5 first-of-type:border-t-0 dark:border-slate-800/80 dark:bg-slate-950 sm:gap-4 md:pt-8 lg:rounded-2xl lg:!border lg:p-6 lg:pb-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-3">
          <a href={profileUrl}>
            <div className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100">
              <img alt="Profile" src={profileImage} loading="lazy" />
            </div>
          </a>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-start gap-1 text-sm">
              <a href={profileUrl}>
                <span className="cursor-pointer font-semibold text-slate-700 dark:text-slate-200">
                  {profileName}
                </span>
              </a>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <div className="hidden flex-row items-center justify-start gap-1 sm:flex">
                <a target="_blank" rel="noopener" href={profileUrl}>
                  <p className="hidden text-sm font-normal text-slate-500 dark:text-slate-400 sm:block">
                    {profileUrl}
                  </p>
                </a>
                <p className="hidden text-sm font-normal text-slate-500 dark:text-slate-400 sm:block">
                  •
                </p>
              </div>
              <a target="_blank" rel="noopener" href={postUrl}>
                <p className="text-sm font-normal text-slate-500 dark:text-slate-400">
                  {postDate}
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
              <a target="_blank" href={postUrl}>
                <h1 className="font-heading hn-break-words cursor-pointer text-base font-semibold text-slate-700 dark:text-slate-200 sm:text-xl sm:font-bold">
                  {postTitle}
                </h1>
              </a>
            </div>
            <div className="hidden md:block">
              <a target="_blank" href={postUrl}>
                <span className="hn-break-words hidden cursor-pointer text-base font-normal text-slate-500 dark:text-slate-400 md:line-clamp-3">
                  {postDescription}
                </span>
              </a>
            </div>
          </div>
          <div className="relative w-full cursor-pointer overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:h-[108px] md:shrink-0 md:basis-[180px] md:rounded-lg">
            <div className="md:hidden">
              <div className="relative w-full pb-[56.25%]">
                <div className="absolute inset-0">
                  <a target="_blank" href={postUrl}>
                    <img alt={postTitle} src={postImage} className="h-full" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden h-full w-full md:block">
              <a target="_blank" href={postUrl}>
                <img
                  alt={postTitle}
                  src={postImage}
                  className="w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between text-sm text-slate-600 dark:text-slate-300">
          {/* Add the Like, Comment, and Bookmark buttons here */}

          <div className="flex flex-row items-center justify-start gap-2">
            <a
              target="_blank"
              rel="noopener"
              href="https://arindam1729.hashnode.dev/a-beginners-guide-to-open-source"
            >
              <button
                className="group flex w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full bg-transparent px-1 py-1.5 font-sans text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600"
                aria-label="Like reaction"
              >
                <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400">
                  <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                    <path
                      stroke="currentColor"
                      d="M10 17.5c.833 0 8.333-4.166 8.333-10 0-2.916-2.5-4.963-5-5-1.25-.018-2.5.417-3.333 1.667-.833-1.25-2.105-1.666-3.333-1.666-2.5 0-5 2.083-5 5 0 5.833 7.5 9.999 8.333 9.999Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                    ></path>
                  </svg>
                </span>
                110
              </button>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://arindam1729.hashnode.dev/a-beginners-guide-to-open-source"
            >
              <button
                className="group flex w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full bg-transparent px-1 py-1.5 font-sans text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600"
                aria-label="Comment"
              >
                <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400">
                  <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
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
                  <span className="truncate">Open Source</span>
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
  );
}

export default function Blogs() {
  // Sample data for multiple blog posts
  const posts = [
    {
      profileUrl: "https://arindam1729.hashnode.dev/",
      profileImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1672587156771/wGaH-wFZE.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
      profileName: "Arindam Majumder",
      postUrl:
        "https://arindam1729.hashnode.dev/a-beginners-guide-to-open-source",
      postTitle: "A Beginners Guide to Open Source",
      postDescription:
        "Open-source software has been around for decades, but it's only in recent years that it has gained mainstream acceptance. That's why we've put together this beginner's guide to open source to help you understand the basics and get started on your open-source journey.",
      postImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1673727414736/174f7e4e-43a9-450e-bf63-7103b608c2de.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      postDate: "11 hours ago",
    },
    // Add more post objects here with different data
    {
      profileUrl: "https://arindam1729.hashnode.dev/",
      profileImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1672587156771/wGaH-wFZE.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp",
      profileName: "Arindam Majumder",
      postUrl:
        "https://arindam1729.hashnode.dev/getting-started-with-blogging-a-beginners-guide",
      postTitle: "Getting Started with Blogging: A Beginners Guide",
      postDescription:
        "If you're someone who has always wanted to start a blog but doesn't know where to begin, or you're just curious about the world of blogging, this is the perfect place for you.Through this blog, we'll explore the basics of blogging, including the Benefits of Blogging, How to Start, Tools to Boost your Blogs, Finding an audience, and much more.",
      postImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1678203645622/0025ed38-bb32-4b03-a6ca-763c6f7a71b6.png",
      postDate: "2 days ago",
    },
    // Add more post objects as needed
  ];

  return (
    <>
      {/* Map over the array of posts and render BlogCard for each post */}
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </>
  );
}
