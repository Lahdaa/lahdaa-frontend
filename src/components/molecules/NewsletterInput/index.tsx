import React from "react";
import { Button } from "components/atoms/Button";
import { Wrapper } from "./style";

interface Props {}
const NewsletterInput: React.FC<Props> = () => {
  return (
    <Wrapper>
      <input
        type="text"
        className="input"
        placeholder="Sign up for newsletter"
      />
      <Button className="btn-primary btn-round-6 btn-newsletter-input">
        Sign Up
      </Button>
    </Wrapper>
  );
};

export default NewsletterInput;
