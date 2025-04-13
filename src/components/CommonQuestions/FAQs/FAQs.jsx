import { FAQsWrapper } from "./FAQs.styled";
import { FAQS } from "../../../constants/mockData";
import FAQsItems from "./FAQsItems/FAQsItems";
import { useState } from "react";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <FAQsWrapper>
      {FAQS.map((FAQ, index) => {
        return (
          <FAQsItems
            key={index}
            data={FAQ}
            isActive={activeIndex === index + 1}
            onShow={() => {
              activeIndex === index + 1
                ? setActiveIndex(0)
                : setActiveIndex(index + 1);
            }}
          />
        );
      })}
    </FAQsWrapper>
  );
}

export default FAQs;
