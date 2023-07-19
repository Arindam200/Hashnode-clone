function Teams() {
  return (
    <div className="mt-14 -mx-5 sm:mx-0 rounded-lg border md:py-16 md:space-y-5 dark:bg-[#334155] bg-white p-6">
      <div className="mt-5 md:flex space-y-2 justify-center gap-4">
        <button className="mx-auto max-sm:flex max-sm:justify-center text-sm sm:text-base md:mx-0 rounded-full bg-green-600 py-1 pl-5 pr-3 text-center text-white">
          NEW ✨
        </button>
        <h1 className="text-center font-semibold text-blue-600 md:py-1">
          ONBOARD YOUR EDITORIAL TEAM
        </h1>
      </div>
      <h1 className="mt-5 text-center text-xl sm:text-3xl md:text-4xl font-bold">
        Introducing <span className="Home"> Hashnode for Teams</span>
      </h1>
      <h2 className="mt-5 text-center text-lg sm:text-2xl font-semibold text-slate-500">
        Hassle-free blogs for fast growing teams
      </h2>
      <div className="flex justify-center">
        <button className="mt-6 flex justify-center rounded-full bg-blue-600 px-8 py-2 text-lg text-white hover:bg-blue-800">
          Start a team blog
        </button>
      </div>
    </div>
  );
}

export default Teams;
