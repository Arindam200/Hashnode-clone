import Nextpart from "./Nextpart";
import Testimonial from "./Testimonials/Testimonial";
import Hashnode from "./assets/asset 3.png";

function Hero() {
  return (
    <>
      <div className="m-4 lg:mx-20 xl:mx-36 2xl:mx-56 mb-0 rounded-tl-lg border-x border-t rounded-tr-lg px-5 lg:pt-8 py-16">
        <div className="space-y-10 md:space-y-0 md:gap-2 gap-0 md:flex md:flex-row-reverse md:py-10 md:px-5 px-0 py-0">
          <div className="px-20 md:px-0 w-auto md:w-2/5 lg:w-1/2 sm:flex sm:justify-center justify-normal">
            <img
              className="mr-12  sm:mr-0 sm:h-72 md:h-auto md:p-8 p-0"
              src={Hashnode}
            />
          </div>
          <div className="md:space-y-10 w-auto md:w-3/5 space-y-5 lg:w-1/2">
            <h1 className="mt-2 text-center text-3xl md:text-start sm:text-4xl lg:text-6xl font-bold">
              <span className="Home">Home</span> for tech writers and readers
            </h1>
            <h2 className="text-center md:text-start mx-2 sm:mx-4 lg:mr-8 md:mx-0 text-xl">
              The hassle-free blogging platform for engineers, thought-leaders,
              and the dev community!
            </h2>
            <h2 className="text-center lg:font-semibold md:text-start sm:mx-6 mx-2 md:mx-0 text-xl font-medium sm:font-bold">
              Blog on a custom domain, own your content and share your ideas
              with the world.
            </h2>
            <div className="flex justify-center md:justify-start">
              <button className="sm:h-12 h-10 w-60 rounded-full bg-blue-600 text-xl text-white hover:bg-blue-800">
                Get started - it&apos;s free!
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Larson Box --> */}
        <div className="">
          <div className="mt-24 lg:mt-0 lg:mx-4 md:flex gap-6 rounded-lg border border-slate-400 bg-[#f8fafc] p-8 md:p-10 md:gap-10">
            <div className="flex justify-center w-auto md:w-1/3">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1640878938509/PLqvxeH9g.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress"
                className="h-28 rounded-full"
              />
            </div>

            <div className="space-y-4 md:space-y-6 text-lg  font-normal ">
              <h1>
                &quot;You can start a dev blog in just a few seconds using
                Hashnode and then you can move that to your own domain if you
                get one later. They will even help distribute your articles on
                their platform. By far the best place to create a blog,
                imho.&quot;
              </h1>
              <h3>
                <span className="font-bold">Quincy Larson,</span> Founder
                freeCodeCamp
              </h3>
              <button className="h-9 w-52 rounded-full bg-blue-600 text-lg text-white hover:bg-blue-800">
                Join the community
              </button>
            </div>
          </div>
          {/*  next part */}
        </div>
        <Nextpart />
      </div>

      <Testimonial />
      <div className="m-4 lg:mx-20 xl:mx-36 2xl:mx-56 mb-0 mt-0 px-5 py-4 border-x">
        <div className="mt-0 sm:mx-5 md:flex md:p-10 md:gap-10 space-y-5 rounded-lg border border-slate-400 bg-[#f8fafc] p-8">
          <div className="flex justify-center w-auto md:w-1/3">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1636364350552/i6QmUq7eq.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=webp&q=75"
              className="h-28 rounded-full"
            />
          </div>

          <div className="space-y-4 text-lg font-normal">
            <h1>
              &quot;It&apos;s amazing to see how fast devs go from 0 to Blog
              under a domain they own on Hashnode 🤯. It reminds me a lot of
              what Substack did for journalists.&quot;
            </h1>

            <h3>
              <span className="font-semibold">Guillermo Rauch,</span> CEO Vercel
            </h3>
            <button className="h-9 w-52 rounded-full bg-blue-600 text-lg text-white hover:bg-blue-800">
              Join the community
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
