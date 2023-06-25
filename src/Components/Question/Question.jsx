import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const Question = () => {
  return (
    <div className="pb-10 pt-2">
        <h1 className="text-xl font-semibold pb-4">
            Frequently Asked Questions
        </h1>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "#10847e", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Do you deliver across America?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, for special circumstances the details are mentioned in the product description
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "#10847e", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                What is the refund policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Every product has a different refund policy which is mentioned in the Product's description
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "#10847e", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Are all these medications certified?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, all these medications are certified and the certifications are mentioned on the top.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
