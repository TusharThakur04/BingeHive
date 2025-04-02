import SectionTitle from "../../SectionTitle/SectionTitle";
import { GenreWrapper } from "./Genere,styled";

function Genre() {
  return (
    <GenreWrapper>
      <SectionTitle
        title={"Explore our variety of categories"}
        text={
          "Whether you are looking for a comedy to make tou laugh , a drama to make toy think, or a documentary to learn something new."
        }
      />
    </GenreWrapper>
  );
}

export default Genre;
