import SectionTitle from "../SectionTitle/SectionTitle";
import { NotDataFoundWrapper } from "./NotDataFound.styles";

const NotDataFound = () => {
  return (
    <NotDataFoundWrapper className="flex justify-center items-center">
      <SectionTitle title="No Match Found" />
    </NotDataFoundWrapper>
  );
};

export default NotDataFound;
