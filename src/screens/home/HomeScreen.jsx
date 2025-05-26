import { useEffect } from "react";
import { Banner } from "../../components";
import { Genre } from "../../components";
import { CommonQuestions } from "../../components";
const HomeScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pg-home">
      <Banner />
      <Genre />
      <CommonQuestions />
    </div>
  );
};

export default HomeScreen;
