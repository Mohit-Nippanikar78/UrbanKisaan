import { FocusCards } from "../ui/focus-cards";

export default function Education() {
  const cards = [
    {
      title: "Make a Living on a Smal Farm! (7 Step Tutorial)",
      src: "http://i3.ytimg.com/vi/fRlUhUWS0Hk/hqdefault.jpg",
      link: "https://www.youtube.com/watch?app=desktop&v=fRlUhUWS0Hk"
    },
    {
      title: "How is Singapore Leading the way in Efficient Urban Farming?",
      src: "http://i3.ytimg.com/vi/W9tGyNyfDbs/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=W9tGyNyfDbs"
    },
    {
      title: "Top 5 Benefits of Urban Farming Explainer Video",
      src: "http://i3.ytimg.com/vi/2h59wJjQfiE/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=2h59wJjQfiE"
    },
    {
      title: "Urban Farming - Urban Agriculture",
      src: "http://i3.ytimg.com/vi/ckeXvykKe9A/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=ckeXvykKe9A"
    },
  ];

  return <FocusCards cards={cards} />;
}
