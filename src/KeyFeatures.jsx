import GitHub from "./assets/asset 22.svg";
import Markdown from "./assets/asset 23.svg";
import Globe from "./assets/asset 24.svg";
import Light from "./assets/asset 25.svg";
function KeyFeatures() {
  return (
    <>
      <div className="mt-10 rounded-2xl bg-[#0f172a] sm:p-10 p-5 text-white">
        <div className="flex flex-col">
          <div className="md:flex md:flex-row-reverse">
            <div className="flex justify-center md:w-1/5">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643362175006/IgPo-NlO9.png?auto=compress"
                className="sm:h-40 h-36"
              />
            </div>
            <div className="md:w-4/5 sm:pr-20 w-auto">
              <h1 className="sm:text-lg text-base text-green-600">
                KEY FEATURES
              </h1>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-5xl md:font-bold font-semibold">
                Everything you need to start blogging as a developer!
              </h2>
            </div>
          </div>

          <div className="space-y-5 md:space-y-10 mt-10 md:p-10 ">
            <div className="space-y-5 md:gap-8 md:space-y-0 md:flex">
              <div className="flex sm:gap-5 gap-3 mt-2 sm:mt-10 md:mt-0">
                <img src={GitHub} alt="" className=" h-8" />
                <div className="">
                  <h1 className="sm:text-xl text-lg font-semibold sm:font-bold">
                    Automatic GitHub Backup
                  </h1>
                  <h2 className="sm:text-lg text-sm sm:font-light">
                    &quot;Every time you publish an article on your tech blog, a
                    markdown version of the post is pushed to your private
                    GitHub repo as a backup.&quot;
                  </h2>
                </div>
              </div>
              <div className="flex sm:gap-5 gap-3">
                <img src={Markdown} alt="" className=" sm:h-7 h-6" />
                <div className="">
                  <h1 className="sm:text-xl text-lg font-semibold sm:font-bold">
                    Automatic GitHub Backup
                  </h1>
                  <h2 className="sm:text-lg text-sm sm:font-light">
                    &quot;Every time you publish an article on your tech blog, a
                    markdown version of the post is pushed to your private
                    GitHub repo as a backup.&quot;
                  </h2>
                </div>
              </div>
            </div>
            <div className="space-y-5 md:gap-8 md:space-y-0 md:flex">
              <div className="flex sm:gap-5 gap-3 ">
                <img src={Globe} alt="" className=" h-8" />
                <div className="">
                  <h1 className="sm:text-xl text-lg font-semibold sm:font-bold">
                    Automatic GitHub Backup
                  </h1>
                  <h2 className="sm:text-lg text-sm sm:font-light">
                    &quot;Every time you publish an article on your tech blog, a
                    markdown version of the post is pushed to your private
                    GitHub repo as a backup.&quot;
                  </h2>
                </div>
              </div>
              <div className="flex sm:gap-5 gap-3 ">
                <img src={Light} alt="" className=" h-8" />
                <div className="">
                  <h1 className="sm:text-xl text-lg font-semibold sm:font-bold">
                    Automatic GitHub Backup
                  </h1>
                  <h2 className="sm:text-lg text-sm sm:font-light">
                    &quot;Every time you publish an article on your tech blog, a
                    markdown version of the post is pushed to your private
                    GitHub repo as a backup.&quot;
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeyFeatures;
