import KeyFeatures from "./KeyFeatures";

function Nextpart() {
  return (
    <div className="mt-16">
      <h1 className="flex justify-center text-base font-bold text-blue-600">
        OWN YOUR CONTENT
      </h1>
      <h2 className="mt-3 justify-center text-center text-4xl md:text-5xl font-bold">
        No Ads. No Paywall. <span className="Home">No Kidding.</span>
      </h2>
      <div className="mt-10 md:px-8 md:gap-4 lg:px-10 lg:gap-10 gap-0 md:flex md:justify-center  md:space-y-0 space-y-7">
        <div className="mx-auto flex-col">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286673231/WuDnrjhoX.png?auto=compress"
            className="mx-auto md:mx-0 h-40"
          />
          <h1 className="mb-2 text-center md:text-start text-3xl font-semibold">
            Blog on your personal domain
          </h1>
          <h3 className="text-center sm:text-start mx-6 md:mx-0">
            Map your custom domain in just seconds. Serve your blog over HTTPS
            with no extra configuration. Get a high performance, secure, and
            fully-optimized dev blog that delights your readers.
          </h3>
        </div>
        <div className="mx-auto flex-col">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286976832/PZ6-e1Da2.png?auto=compress"
            className="mx-auto md:mx-0 h-40"
          />
          <h1 className="mb-2 text-center md:text-start text-3xl font-semibold">
            Instantly find your audience
          </h1>
          <h3 className="text-center sm:text-start  md:mx-0">
            Every time you write an article, Hashnode publishes it on your
            domain and shares it with the dev community members on the homepage.
            The readers are directed to your website to read and interact with
            your content.
          </h3>
        </div>
        <div className="mx-auto flex-col">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286986603/ovWZjIV-n.png?auto=compress"
            className="mx-auto md:mx-0 h-40"
          />
          <h1 className="mb-2 text-center md:text-start text-3xl font-semibold">
            No annoying ads/pop-ups
          </h1>
          <h3 className="text-center sm:text-start  md:mx-0">
            Knowledge sharing on Hashnode is and will always be completely free.
            Because we value the relationship between you and your readers, we
            won&apos;t show ads or pop-ups on your articles.
          </h3>
        </div>
      </div>
      <KeyFeatures />
    </div>
  );
}

export default Nextpart;
