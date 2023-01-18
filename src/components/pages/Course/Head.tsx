import React from "react";
import Typography from "components/atoms/Typography";
import { Center } from "styles/layouts/Center";

const Head = () => (
  <header className="mt-50">
    <Center>
      <Typography as="h6" className="heading-20">
        CREATIVE & DESIGN
      </Typography>
      <Typography as="h6" className="heading-21">
        Design Thinking live course :
      </Typography>
      <Typography as="h6" className="heading-22">
        People-Centered Innovation
      </Typography>
      <Typography as="p" className="paragraph-16 max-width-690 mt-20">
        Go through all the stages of Design Thinking and find innovative
        solutions for your products, processes or services.
      </Typography>
    </Center>
  </header>
);

export default Head;
