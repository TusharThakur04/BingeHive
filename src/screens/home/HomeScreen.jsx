import { Banner } from "../../components";
import { Genre } from "../../components";
import { CommonQuestions } from "../../components";
const HomeScreen = () => {
  return (
    <div className="pg-home">
      <Banner />
      <Genre />
      <CommonQuestions />
    </div>
  );
};

export default HomeScreen;
