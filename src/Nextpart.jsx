// import React from "react";
import KeyFeatures from "./KeyFeatures";

const sectionsData = [
  {
    imgSrc:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1643286673231/WuDnrjhoX.png?auto=compress",
    title: "Blog on your personal domain",
    description:
      "Map your custom domain in just seconds. Serve your blog over HTTPS with no extra configuration. Get a high performance, secure, and fully-optimized dev blog that delights your readers.",
  },
  {
    imgSrc:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1643286976832/PZ6-e1Da2.png?auto=compress",
    title: "Instantly find your audience",
    description:
      "Every time you write an article, Hashnode publishes it on your domain and shares it with the dev community members on the homepage. The readers are directed to your website to read and interact with your content.",
  },
  {
    imgSrc:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1643286986603/ovWZjIV-n.png?auto=compress",
    title: "No annoying ads/pop-ups",
    description:
      "Knowledge sharing on Hashnode is and will always be completely free. Because we value the relationship between you and your readers, we won't show ads or pop-ups on your articles.",
  },
];

function Nextpart() {
  return (
    <div className="mt-16">
      <h1 className="flex justify-center text-base font-bold text-blue-600">
        OWN YOUR CONTENT
      </h1>
      <h2 className="mt-3 justify-center sm:text-4xl text-2xl  text-center text-4x md:text-5xl font-bold">
        No Ads. No Paywall. <span className="Home">No Kidding.</span>
      </h2>
      <div className="mt-10 md:px-8 md:gap-4 lg:px-10 lg:gap-10 gap-0 md:flex md:justify-center  md:space-y-0 space-y-7">
        {sectionsData.map((section, index) => (
          <div key={index} className="mx-auto flex-col">
            <img
              src={section.imgSrc}
              className="mx-auto md:mx-0 h-40"
              alt={`Section ${index}`}
            />
            <h1 className="mb-2 text-center md:text-start text-3xl font-semibold">
              {section.title}
            </h1>
            <h3 className="text-center sm:text-start mx-6 md:mx-0">
              {section.description}
            </h3>
          </div>
        ))}
      </div>
      <KeyFeatures />
    </div>
  );
}

export default Nextpart;
