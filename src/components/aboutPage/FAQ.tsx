import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./FAQAccordion";

export default function FAQ() {
  const {t} = useTranslation();
  return (
    <div className="w-full h-fit flex flex-col justify-start p-5 gap-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("faq-q1")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a1-1")} <br /> 
          <div className="m-3 leading-10">
          {t("faq-a1-2")}.<br />
          {t("faq-a1-3")}<br />
          {t("faq-a1-4")} <br />
          {t("faq-a1-5")} <br />
          {t("faq-a1-6")}
          </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t("faq-q2")}</AccordionTrigger>
          <AccordionContent>
            {t("faq-a2")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t("faq-q3")}</AccordionTrigger>
          <AccordionContent>
            {t("faq-a3")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t("faq-q4")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a4")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>{t("faq-q5")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a5")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>{t("faq-q6")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a6")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>{t("faq-q7")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a7")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>{t("faq-q8")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a8-1")} <br /> 
          <div className="m-3 leading-10">
          {t("faq-a8-2")}<br />
          {t("faq-a8-3")}<br />
          {t("faq-a8-4")} <br />
          {t("faq-a8-5")} <br />
          </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>{t("faq-q9")}</AccordionTrigger>
          <AccordionContent>
         {t("faq-a9")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>{t("faq-q10")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a10")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger>{t("faq-q11")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a11")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger>{t("faq-q12")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a12")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger>{t("faq-q13")}</AccordionTrigger>
          <AccordionContent>
            {t("faq-a13")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger>{t("faq-q14")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a14")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-16">
          <AccordionTrigger>{t("faq-q15")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a15")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-17">
          <AccordionTrigger>{t("faq-q16")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a16")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger>{t("faq-q17")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a17")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-19">
          <AccordionTrigger>{t("faq-q18")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a18")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-20">
          <AccordionTrigger>{t("faq-q19")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a19")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-21">
          <AccordionTrigger>{t("faq-q20")}</AccordionTrigger>
          <AccordionContent>
          {t("faq-a20")}
          </AccordionContent>
        </AccordionItem>
       
      </Accordion>
    </div>
  );
}
