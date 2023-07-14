export default function Simon() {
  const quote =
    ' "I wanted to use my own domain with Hashnode and was prepared for all the hassle…and then - literally just one click and it was done! So easy, so convenient. Go Hashnode!"';
  const img_url =
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1628416513348/_9QAnjxxE.jpeg?auto=compress&w=200";
  const person_name = "Simon Holdorf";
  const description =
    "Full-Stack Engineer at SAP, Cloud Advocate - AWS Certified";
  return (
    <>
      <div className="rounded-xl md:h-auto md:w-1/2 bg-white dark:bg-[#334155]">
        <h1 className="p-8 ">{quote}</h1>
        <img src={img_url} className="mx-auto h-28 rounded-full" />
        <h2 className="mt-2 flex justify-center text-lg font-semibold">
          {person_name}
        </h2>
        <h3 className="p-5 pt-1 text-center ">{description}</h3>
      </div>
    </>
  );
}
