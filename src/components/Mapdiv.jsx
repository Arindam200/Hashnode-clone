/* eslint-disable react/no-unescaped-entities */
function Map() {
  return (
    <div className="mt-20 -mx-5 sm:mx-0 md:flex md:flex-row-reverse rounded-xl border dark:bg-gradient-to-r dark:from-[#1f2937] dark:to-[#000] bg-gradient-to-r from-[#eff6ff] to-[#e9d5ff] py-6 px-8">
      <div className="mt-8 md:w-2/5">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643394967065/pOn8uxJFD.png?auto=compress"
          alt=""
        />
      </div>
      <div className="md:w-3/5">
        <h1 className="text-2xl md:text-3xl font-semibold ">
          Join a growing dev community of millions of active developers!
        </h1>
        <h2 className="mt-1 text-lg md:text-base">
          Millions of tech blogs publish on Hashnode daily. Be a part of an
          active community of developers, tech enthusiasts and creators. Blog on
          your personal domain, share ideas, and connect with the global tech
          community.
        </h2>
        <div className="sm:flex gap-4 space-y-2 sm:space-y-0 pt-5">
          <button className="flex justify-center rounded-full bg-blue-600 sm:px-8 px-2 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white hover:bg-blue-800">
            Get Started- it's free
          </button>
          <button className="flex px-6 justify-center rounded-full bg-inherit border border-blue-600 text-blue-600 text-sm sm:px-8 py-1 sm:py-3 sm:text-lg hover:opacity-50">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Map;
