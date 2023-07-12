/* eslint-disable react/no-unescaped-entities */
function Map() {
  return (
    <div className="mt-20 md:flex md:flex-row-reverse rounded-xl border bg-white py-6 px-8">
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
        <div className="flex gap-4 pt-5">
          <button className="flex justify-center rounded-full bg-blue-600 px-8 py-2 sm:py-3 text-lg font-semibold text-white hover:bg-blue-800">
            Get Started- it's free
          </button>
          <button className="flex justify-center rounded-full bg-inherit border border-blue-600 text-blue-600 px-8 py-2 sm:py-3 text-lg hover:bg-blue-800">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Map;
