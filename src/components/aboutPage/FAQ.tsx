import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./FAQAccordion";

export default function FAQ() {
  return (
    <div className="w-full h-fit flex flex-col justify-start p-5 gap-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Does Modon Real Estate Development provide freehold housing units?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
