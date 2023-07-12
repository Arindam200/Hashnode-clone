import Simon from "./Simon";
import Danny from "./Danny";

function Testimonial() {
  return (
    <div className="mx-4 lg:mx-20 xl:mx-36 2xl:mx-56 p-5 md:p-10 bg-[#f8fafc] border-x">
      <h2 className="text-blue-600">TESTIMONIALS</h2>
      <h3 className="text-3xl lg:mt-5 md:text-5xl lg:w-4/5 md:w-2/3 md:pr-20 font-bold">
        Don&apos;t just take our word for it,{" "}
        <span className="Home"> trust the community!</span>
      </h3>

      <div className="mt-10 md:flex md:gap-10 justify-around space-y-10 md:space-y-0 p-10 pt-0">
        <Simon />
        <Danny />
      </div>
      <div className="md:flex md:gap-10 justify-around space-y-10 md:space-y-0 p-10 pt-0">
        <div className="rounded-xl bg-white md:w-1/2">
          <h1 className="p-8 ">
            &quot;After using Gastby, Ghost, Jekyll and Wordpress I&apos;m going
            to use Hashnode, I wished to have known this amazing project months
            ago.&quot;
          </h1>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1618972297914/YHFdbdMR9.png?auto=compress&w=200"
            className="mx-auto h-28  sm:h-20 rounded-full"
          />
          <h2 className="mt-2 flex justify-center text-lg font-semibold">
            Rafael Corrêa Gomes
          </h2>
          <h3 className="p-5 pt-1 text-center text-lg">
            Tecnology Director at Le Site
          </h3>
        </div>
        <div className="rounded-xl md:w-1/2 bg-white">
          <h1 className="p-8 ">
            &quot;I am killing the blog off my personal site and going full on
            Hashnode. Reasons: - Personal Domain - Free Analytics - Free
            Newsletter - SEO built in - Constantly pushing new features -
            Community is amazing!&quot;
          </h1>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1601488264155/uTgxJ2Kgi.png?auto=compress&w=200"
            className="mx-auto h-28  sm:h-20 rounded-full"
          />
          <h2 className="mt-2 flex justify-center text-lg font-semibold">
            Corey O&apos;Donnell
          </h2>
          <h3 className="p-5 pt-1 text-center text-lg">
            Software Engineer at Better.com
          </h3>
        </div>
      </div>
      <div className="md:flex md:gap-10 justify-around space-y-10 md:space-y-0 p-10 pt-0">
        <div className="rounded-xl bg-white">
          <h1 className="p-8 ">
            &quot;Hashnode is super developer-friendly. I like it much better
            than Medium. Being able to write blogs solely using markdown and
            auto backup with GitHub is awesome! Goodbye, Medium.&quot;
          </h1>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1596286836603/euVGAMiVZ.jpeg?auto=compress&w=200"
            className="mx-auto mt-1 sm:h-20 rounded-full"
          />
          <h2 className="mt-2 flex justify-center text-lg font-semibold">
            Qiusheng Wu
          </h2>
          <h3 className="p-5 pt-1 text-center text-lg">
            Assistant Professor at the University of Tennessee
          </h3>
        </div>
        <div className="rounded-xl bg-white">
          <h1 className="p-8 ">
            &quot;100 days ago, I published my first blog post on a new and
            unfamiliar platform called Hashnode. Today, publishing articles on
            Hashnode is a routine, a hobby, a great joy.&quot;
          </h1>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1592617052267/KUaHl6HMa.png?auto=compress&w=200"
            className="mx-auto  h-28 sm:h-20 rounded-full"
          />
          <h2 className="mt-2 flex justify-center text-lg font-semibold">
            Victoria Lo
          </h2>
          <h3 className="p-5 pt-1 text-center text-lg">
            Solutions Engineer at PayPal
          </h3>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="h-10 w-52 rounded-full bg-blue-600 text-lg text-white hover:bg-blue-800">
          See all testimonials 💖
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
