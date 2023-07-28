import React from "react";

export default function TeamBlogs() {
  return (
    <>
      <div className="border border-slate-200 dark:border-slate-800/80 rounded-2xl flex flex-col justify-start w-full gap-3.5 py-5 px-6 ">
        <div className="flex justify-between gap-2 items-center">
          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-heading text-xl font-semibold dark:text-slate-300 text-slate-700">
              Team Blogs
            </h2>
            <span className="text-[10px] leading-4 px-1.5 font-semibold py-0.5 text-white uppercase bg-green-600 rounded">
              NEW
            </span>
          </div>
          <a
            href="/teams?source=right_sidebar_team_blogs_widget"
            target="_blank"
            rel="noopener"
            className="rounded-full flex text-blue-600 !p-0 hover:underline focus:outline-none focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 disabled:text-blue-300 disabled:dark:text-blue-900 disabled:cursor-not-allowed disabled:hover:no-underline text-sm py-2.5 px-5 flex items-center"
          >
            Learn More
            <span className="ml-2 inline-block">
              <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                <path
                  stroke="currentColor"
                  d="M15 12.083V15a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V7.5A2.5 2.5 0 0 1 5 5h2.917m5.416-2.5H17.5m0 0v4.167m0-4.167-6.667 6.667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                ></path>
              </svg>
            </span>
          </a>
        </div>
        <div>
          <p className="dark:text-slate-300 text-slate-600 font-normal text-base">
            An end-to-end blogging platform for devtools, engineering, and
            open-source teams.
          </p>
        </div>
        <div className="">
          <a
            href="/unlock-blog?team=true&amp;source=right_sidebar_team_blogs_widget"
            rel="noopener"
            className="rounded-full flex text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 hover:dark:border-slate-700 hover:bg-slate-50 hover:dark:bg-slate-800 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:dark:ring-offset-slate-800 disabled:bg-white disabled:border-slate-200 disabled:cursor-not-allowed disabled:text-slate-300 disabled:dark:bg-slate-950 disabled:dark:border-slate-800 disabled:dark:text-slate-800 text-sm py-2.5 px-5 w-full items-center justify-center"
          >
            Create a team blog
          </a>
        </div>
      </div>
    </>
  );
}
