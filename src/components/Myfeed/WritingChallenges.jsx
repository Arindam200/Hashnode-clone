import React from "react";

export default function WritingChallenges() {
  return (
    <>
      <div className="border border-slate-200 dark:border-slate-800/80 rounded-2xl flex flex-col justify-start w-full gap-3.5 py-5 px-6">
        <div>
          <h2 className="font-heading text-xl font-semibold dark:text-slate-300 text-slate-700">
            Writing Challenges
          </h2>
        </div>
        <div>
          <div dir="ltr" data-orientation="horizontal" className="">
            <section className="mb-5">
              <div
                role="tablist"
                aria-orientation="horizontal"
                aria-label="Manage your account"
                className="flex gap-1 radix-orientation-horizontal:flex-row radix-orientation-vertical:flex-col"
                tabIndex={0}
                data-orientation="horizontal"
                style={{ outline: "none" }}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-:r2m:-content-incomplete"
                  data-state="active"
                  id="radix-:r2m:-trigger-incomplete"
                  variant="rectangle"
                  width="full"
                  className="group flex flex-col grow"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  <div className=" border-transparent flex items-center px-3 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 group-radix-state-active:bg-slate-100 group-radix-state-active:text-slate-700 group-radix-state-active:dark:bg-slate-800 group-radix-state-active:dark:text-slate-200 font-medium text-md w-full justify-center">
                    Up for grabs
                  </div>
                  <span className="inline-block h-0"></span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:r2m:-content-complete"
                  data-state="inactive"
                  id="radix-:r2m:-trigger-complete"
                  variant="rectangle"
                  width="full"
                  className="group flex flex-col grow"
                  tabIndex={-1}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  <div className="text-slate-600 dark:text-slate-300 border-transparent flex items-center px-3 py-2 rounded-md  hover:bg-slate-100 dark:hover:bg-slate-800 group-radix-state-active:bg-slate-100 group-radix-state-active:text-slate-700 group-radix-state-active:dark:bg-slate-800 group-radix-state-active:dark:text-slate-200 font-medium text-md w-full justify-center">
                    Completed
                  </div>
                  <span className="inline-block h-0"></span>
                </button>
              </div>
            </section>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r2m:-trigger-incomplete"
              id="radix-:r2m:-content-incomplete"
              tabIndex={0}
              style={{ animationDuration: "0s" }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-row items-start gap-x-2 gap-y-5">
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        #2Articles1Week Challenge
                      </a>
                    </h3>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                    >
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        Become better at technical writing; accept Hashnode's
                        writing challenge for four weeks.
                      </p>
                    </a>
                  </div>
                  <a
                    href="/challenge/2articles1week?source=writing_challenges_clicked"
                    aria-label="#2Articles1Week Challenge"
                    className="w-[72px] h-[72px]"
                  >
                    <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1646650597222/jDhCDbcwd.png?w=75&h=75&fit=crop&crop=entropy&auto=compress&auto=compress,format&format=webp"
                      alt=""
                    />
                  </a>
                </div>
                {/* Add other challenge sections here */}
                <div className="flex flex-row items-start gap-x-2 gap-y-5">
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        #2Articles1Week Challenge
                      </a>
                    </h3>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                    >
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        Become better at technical writing; accept Hashnode's
                        writing challenge for four weeks.
                      </p>
                    </a>
                  </div>
                  <a
                    href="/challenge/2articles1week?source=writing_challenges_clicked"
                    aria-label="#2Articles1Week Challenge"
                    className="w-[72px] h-[72px]"
                  >
                    <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1646650597222/jDhCDbcwd.png?w=75&h=75&fit=crop&crop=entropy&auto=compress&auto=compress,format&format=webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex flex-row items-start gap-x-2 gap-y-5">
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        #2Articles1Week Challenge
                      </a>
                    </h3>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                    >
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        Become better at technical writing; accept Hashnode's
                        writing challenge for four weeks.
                      </p>
                    </a>
                  </div>
                  <a
                    href="/challenge/2articles1week?source=writing_challenges_clicked"
                    aria-label="#2Articles1Week Challenge"
                    className="w-[72px] h-[72px]"
                  >
                    <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1646650597222/jDhCDbcwd.png?w=75&h=75&fit=crop&crop=entropy&auto=compress&auto=compress,format&format=webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex flex-row items-start gap-x-2 gap-y-5">
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        #2Articles1Week Challenge
                      </a>
                    </h3>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                    >
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        Become better at technical writing; accept Hashnode's
                        writing challenge for four weeks.
                      </p>
                    </a>
                  </div>
                  <a
                    href="/challenge/2articles1week?source=writing_challenges_clicked"
                    aria-label="#2Articles1Week Challenge"
                    className="w-[72px] h-[72px]"
                  >
                    <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1646650597222/jDhCDbcwd.png?w=75&h=75&fit=crop&crop=entropy&auto=compress&auto=compress,format&format=webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex flex-row items-start gap-x-2 gap-y-5">
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        #2Articles1Week Challenge
                      </a>
                    </h3>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                    >
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        Become better at technical writing; accept Hashnode's
                        writing challenge for four weeks.
                      </p>
                    </a>
                  </div>
                  <a
                    href="/challenge/2articles1week?source=writing_challenges_clicked"
                    aria-label="#2Articles1Week Challenge"
                    className="w-[72px] h-[72px]"
                  >
                    <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1646650597222/jDhCDbcwd.png?w=75&h=75&fit=crop&crop=entropy&auto=compress&auto=compress,format&format=webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex flex-row items-start gap-x-2 gap-y-5">
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="font-semibold text-base text-slate-700 dark:text-slate-200">
                      <a
                        href="/challenge/2articles1week?source=writing_challenges_clicked"
                        aria-label="#2Articles1Week Challenge"
                      >
                        #2Articles1Week Challenge
                      </a>
                    </h3>
                    <a
                      href="/challenge/2articles1week?source=writing_challenges_clicked"
                      aria-label="#2Articles1Week Challenge"
                    >
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        Become better at technical writing; accept Hashnode's
                        writing challenge for four weeks.
                      </p>
                    </a>
                  </div>
                  <a
                    href="/challenge/2articles1week?source=writing_challenges_clicked"
                    aria-label="#2Articles1Week Challenge"
                    className="w-[72px] h-[72px]"
                  >
                    <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1646650597222/jDhCDbcwd.png?w=75&h=75&fit=crop&crop=entropy&auto=compress&auto=compress,format&format=webp"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2m:-trigger-complete"
          hidden=""
          id="radix-:r2m:-content-complete"
          tabIndex={0}
        ></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
