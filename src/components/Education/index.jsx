import { div } from "framer-motion/client";
import { FocusCards } from "../ui/focus-cards";
import { FlipWords } from "../ui/flips-words";

export default function Education() {
  const cards = [
    {
      title: "Make a Living on a Smal Farm! (7 Step Tutorial)",
      src: "http://i3.ytimg.com/vi/fRlUhUWS0Hk/hqdefault.jpg",
      link: "https://www.youtube.com/watch?app=desktop&v=fRlUhUWS0Hk",
    },
    {
      title: "How is Singapore Leading the way in Efficient Urban Farming?",
      src: "http://i3.ytimg.com/vi/W9tGyNyfDbs/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=W9tGyNyfDbs",
    },
    {
      title: "Top 5 Benefits of Urban Farming Explainer Video",
      src: "http://i3.ytimg.com/vi/2h59wJjQfiE/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=2h59wJjQfiE",
    },
    {
      title: "Urban Farming - Urban Agriculture",
      src: "http://i3.ytimg.com/vi/ckeXvykKe9A/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=ckeXvykKe9A",
    },
  ];
  const words = [
"Urban Farming",
"Urban Agriculture",
"Urban Farming Benefits",
"Urban Farming Tutorial",
"Urban Farming Singapore",
  ];
  return (
    <div className=" flex flex-col  ">
       <div className="h-[8rem] flex justify-center items-center">
            <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              <div className="text-3xl">
                Learn
                <FlipWords words={words} />{" "}
              </div>{" "}
            </div>
          </div>
      <FocusCards cards={cards} />;
    </div>
  );
}
