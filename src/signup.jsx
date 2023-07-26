/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import Hashnode from "./assets/logo-standard.jpg";
export default function signup() {
  return (
    <>
      <div className="flex justify-center border-b py-2">
        {/* className="my-2 h-8 px-4" */}
        <Hashnode className="my-2 h-8 px-4" />
      </div>
      <div className="flex gap-5 bg-blue-600 p-28">
        <div className="w-1/2 space-y-5 bg-red-600 py-5">
          <h1 className="text-center text-2xl font-bold">Sign up / Log in</h1>
          <div className="grid-col-2 grid gap-x-5 gap-y-3 border-b px-10 pb-5">
            <div className="rounded-2xl bg-white px-4 py-1">github</div>
            <div className="rounded-2xl bg-white px-4 py-1">github</div>
            <div className="rounded-2xl bg-white px-4 py-1">github</div>
            <div className="rounded-2xl bg-white px-4 py-1">github</div>
            <div className="col-span-2 mx-10 rounded-2xl bg-white py-1 text-center">
              github
            </div>
          </div>
          <h3 className="text-center">Or sign in using a magic link</h3>
          <input
            type="email"
            className="mx-10 w-5/6 rounded-2xl px-5 py-1"
            placeholder="Enter your Email address"
            name=""
            id=""
          />
          <div className="flex justify-center">
            <input
              type="submit"
              className="w-36 rounded-full bg-blue-700 text-white"
              value="Submit"
            />
          </div>
        </div>

        <div className="w-1/2 space-y-5 bg-red-600 py-24">
          <h2 className="flex flex-col justify-center px-3">
            "It's amazing to see how fast devs go from 0 to Blog under a domain
            they own on Hashnode 🤯. It reminds me a lot of what Substack did
            for journalists."
          </h2>
          <div className="flex gap-5 px-3">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1645091032744/UERdc-IVr.jpeg?auto=compress"
              className="h-10 w-10 rounded-full"
              alt=""
            />
            <div className="">
              Guillermo Rauch
              <div className="">CEO, Vercel</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
