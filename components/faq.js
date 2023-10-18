import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How do you charge for your services?",
    answer: "Our pricing is flexible, depending on the project's complexity, duration, and specific requirements. We can work on a fixed-price, hourly, or retainer basis. Contact us for a detailed quote.",
  },
  {
    question: "Do you offer ongoing support after the project completion?",
    answer: "Yes, we offer various post-project support packages, including troubleshooting, updates, and continuous improvement strategies to ensure the longevity and effectiveness of the solutions we implement.",
  },
  {
    question: "Do you offer remote consulting services?",
    answer:
      "Yes, in the era of digital transformation, we understand the importance of flexibility. We offer both in-person and remote consulting services to cater to clients globally.",
  },
  {
    question: "Can you work alongside our existing Dev team?",
    answer:
      "Absolutely. We often collaborate with in-house teams, enhancing their capabilities and providing specialized expertise where needed.",
  },
];

export default Faq;