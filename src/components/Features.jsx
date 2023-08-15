/* eslint-disable react/prop-types */
// import { useState } from "react";
import Teams from "./Teams";
import Map from "./Mapdiv";
import NextLogo from "../assets/asset 26.svg";
import Data from "../assets/asset 27.svg";
import Pen from "../assets/asset 28.svg";
import NewsLetter from "../assets/asset 29.svg";
import Analytics from "../assets/asset 30.svg";
import Series from "../assets/asset 31.svg";
import Drafts from "../assets/asset 32.svg";
import HTTPS from "../assets/asset 33.svg";
import GitHub from "../assets/asset 34.svg";
import People from "../assets/asset 35.svg";
import Hashnode_B from "../assets/logo-standard.jpg";
import Hashnode_W from "../assets/logo_white.svg";
import Reveal from "../Reveal";

function Features({ isDarkTheme }) {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const Hashnode = isDarkTheme ? Hashnode_W : Hashnode_B;
  return (
    <div className="m-4 lg:mx-20 xl:mx-36 2xl:mx-56 mb-0 mt-0 border-x px-10 py-10 dark:bg-[#0f172a]">
      <div className="">
        <Reveal>
          <div className="md:flex space-y-3 sm:space-y-0 md:p-10 md:gap-10 gap-10 rounded-lg border dark:bg-[#334155] border-slate-900 bg-slate-100 p-8">
            <div className="flex justify-center w-auto md:w-1/3">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1584725566758/W2boEyqqw.png?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=webp&q=75"
                className="h-28 rounded-full"
                alt=""
              />
            </div>

            <div className=" space-y-2 sm:text-xl text-lg font-normal ">
              <h1>
                &quot;Just started out on Hashnode about 1 month ago, and
                I&apos;m already at 14,000 page views. Really impressed with how
                much visibility I&apos;ve gotten there!&quot;
              </h1>

              <h3>
                <span className="font-semibold">James Q Quick, </span>
                Developer Advocate at PlanetScale
              </h3>
              <button className="h-9 w-52 rounded-full bg-blue-600 text-lg text-white hover:bg-blue-800">
                Join the community
              </button>
            </div>
          </div>
        </Reveal>
        <div>
          <h1 className="mt-10 text-center font-bold text-blue-600">
            FOCUS ON WRITING, WHILE WE DO THE REST
          </h1>
          <h2 className="mt-5 text-center text-3xl md:text-4xl font-bold">
            Features that make tech blogging
          </h2>
          <h3 className="mt-1 text-center flex justify-center md:flex md:justify-center text-3xl md:text-4xl font-bold Home">
            10x better
          </h3>
        </div>
      </div>
      <Reveal>
        <div className="sm:mt-14 mt-2  md:flex md:p-5">
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={NextLogo} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">
                Superfast Next.js Powered Blogs
              </h1>
              <h2 className="">
                Hashnode blogs are powered by Next.js, and are served via
                Vercel&apos;s word className CDN.
              </h2>
            </div>
          </div>
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={Data} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">Own your data</h1>
              <h2 className="">
                You retain all the rights to your content. Export and download
                all your posts from your dashboard with a single click.
              </h2>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="mt-1 md:flex md:p-5 gap-2">
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={Pen} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">
                Customize Design using CSS
              </h1>
              <h2 className="">
                Modify the appearance of your developer blog using our Custom
                CSS feature. Change the font family, font size, primary link
                colors, and more.
              </h2>
            </div>
          </div>
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={NewsLetter} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">
                Free built-in newsletter service
              </h1>
              <h2 className="">
                Enable a newsletter service with the click of a button, and let
                your readers easily subscribe to your developer blog.
              </h2>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="mt-1 md:flex md:p-5 gap-2">
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={Analytics} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">Built-in Analytics</h1>
              <h2 className="">
                Powerful analytics to track the number of views, likes, and
                comments, and analyze the performance of your articles over a
                period of time.
              </h2>
            </div>
          </div>
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={Series} className="h-8" />
            <div>
              <h1 className="text-2xl font-semibold">Article Series</h1>
              <h2 className="">
                Series is a great way to organize your content. It helps you
                easily group a series of articles related to a single topic.
              </h2>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="mt-1 md:flex md:p-5 gap-2">
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={Drafts} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">Drafts</h1>
              <h2 className="">
                Share your drafts with your friends to get some early feedback
                before you hit the publish button.
              </h2>
            </div>
          </div>
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={HTTPS} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">HTTPS by default</h1>
              <h2 className="">
                It doesn&apos;t matter if you are using our free subdomain or a
                custom one. We provide SSL certificates for free for all the
                blogs.
              </h2>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="mt-1 md:flex md:p-5 gap-2">
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={GitHub} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">
                Native GitHub Integration
              </h1>
              <h2 className="">
                Publish and backup articles directly on a private or public
                GitHub repo - enabling you to always have control over your
                content.
              </h2>
            </div>
          </div>
          <div className="flex md:w-1/2 gap-5 p-1 sm:p-5">
            <img src={People} className="h-8" alt="" />
            <div>
              <h1 className="text-2xl font-semibold">Unlimited Staff Users</h1>
              <h2 className="">
                Invite your editorial team and let multiple authors publish
                articles on the same blog.
              </h2>
            </div>
          </div>
        </div>
      </Reveal>
      <Teams />
      <Map />
      <hr className="border-1 my-20 mb-0 h-px  border-slate-700" />
      <h3 className="mt-10 text-center">© Hashnode 2023</h3>
      <div className="flex my-5 justify-center sm:gap-10 gap-5 sm:py-4">
        <button className="text-sm sm:text-base">Privacy Policy</button>
        <button className="text-sm sm:text-base">Terms</button>
        <button className="text-sm sm:text-base">Code of Conduct</button>
      </div>
      <div className="flex justify-center">
        <img src={Hashnode} className="h-5 sm:h-10 md:h-8" />
      </div>
    </div>
  );
}

export default Features;
