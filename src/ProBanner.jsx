function ProBanner() {
  return (
    <div className="m-4 lg:mx-20 xl:mx-36 2xl:mx-56 md:flex lg:px-10 justify-between space-y-2 rounded-lg pro-banner p-5">
      <span className="font-semibold lg:pr-52 lg:w-5/6 text-white">
        {" "}
        🌟 <span className="font-bold underline">
          Introducing Hashnode Pro
        </span>{" "}
        Boost your tech writing with AI-assisted features, exclusive perks, and
        more! Elevate your blogging experience like never before.
      </span>
      <button className="w-fit lg:w-1/6 lg:ml-10 px-4 rounded-full bg-inherit text-white border-white border py-1 hover:bg-slate-200">
        Try it now!
      </button>
    </div>
  );
}

export default ProBanner;
