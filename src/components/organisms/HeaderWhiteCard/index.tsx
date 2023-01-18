import React from "react";
import HeaderCardItem from "components/molecules/HeaderCardListItem";
import { CardSection, CardContainer } from "./style";

// Variable
const items = [
  {
    id: 1,
    title: "Learn from anywhere",
    subTitle: "Take 100% online courses",
  },
  {
    id: 2,
    title: "Affordable education ",
    subTitle: "Learn without breaking the bank",
  },
  {
    id: 3,
    title: "Cohort based learning",
    subTitle: "Connect & study with your peers",
  },
];

interface Props {}
const HeaderWhiteCard: React.FC<Props> = () => {
  return (
    <CardSection>
      <CardContainer>
        {items.map((item) => (
          <HeaderCardItem
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </CardContainer>
    </CardSection>
  );
};

export default HeaderWhiteCard;
