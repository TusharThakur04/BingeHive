import { FAQsWrapper } from "./FAQs.styled";
import { FAQS } from "../../../constants/mockData";
import FAQsItems from "./FAQsItems/FAQsItems";
import { useState } from "react";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <FAQsWrapper>
      <div className="grid faqItems">
        {FAQS.map((FAQ, index) => (
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
        ))}
      </div>
    </FAQsWrapper>
  );
}

export default FAQs;
