/* eslint-disable no-undef */
export default function Danny() {
  const quote =
    "I've decided to make a huge leap and migrate my developer blog to Hashnode ! I'm really impressed with what they've accomplished in this short amount of time! I'm happy to join this community and I can't wait to share more of my learnings on AWS with you!";
  const img_url =
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1625481244426/ihj4R-Qy-.png?auto=compress&w=200";
  const person_name = "Danny Steenman";
  const description =
    "AWS Cloud Consultant & AWS APN Ambassador at CloudNation";
  return (
    <>
      <div className="rounded-xl md:h-auto md:w-1/2 bg-white">
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
