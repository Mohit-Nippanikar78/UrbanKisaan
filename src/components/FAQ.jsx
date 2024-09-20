import {Accordion, AccordionItem} from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="max-w-4xl mx-auto my-24">
      <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Accordion 1" title="What can I track with the dashboard?">
          Track soil health, crop growth, and environmental data in real-time. Get insights to optimize your farming practices.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="How can the educational resources help me?">
          Access webinars, expert advice, and tutorials to improve your urban farming skills and stay updated with the latest techniques.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="How does the marketplace work?">
          Exchange feeds, produce, and more with other farmers. Connect and collaborate through our platform for better farming solutions.
        </AccordionItem>
      </Accordion>
    </div>
  );
}