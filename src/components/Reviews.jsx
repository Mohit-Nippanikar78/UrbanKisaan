import { CardStack } from "../components/ui/card-stack";
import { cn } from "../utils/lib";
export default function Reviews() {
  return (
    (<div className="h-[20rem] flex items-center justify-center  gap-16 w-full">
      <h1 className="text-3xl font-bold text-center">Testimonials</h1>
      <CardStack items={CARDS} />
    </div>)
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    (<span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>)
  );
};

const CARDS = [
  {
    id: 0,
    name: "Amit, Urban Farmer",
    designation: "Soil Health Enthusiast",
    content: (
      <p>
        UrbanKisaan has been a <Highlight>game-changer</Highlight> for me. The dashboard makes it so easy to monitor soil health and crop growth in real-time!
      </p>
    ),
  },
  {
    id: 1,
    name: "Rahul, Rooftop Gardener",
    designation: "Urban Gardener",
    content: (
      <p>
        UrbanKisaan's marketplace has made <Highlight>buying and selling produce</Highlight> so much easier. The platform is simple to use, and the dashboard helps me <Highlight>track my crops</Highlight> progress without any hassle.
      </p>
    ),
  }
  
];
