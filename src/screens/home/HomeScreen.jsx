import React from "react";
import { Banner } from "../../components";
import Genere from "../../components/common/genre/Genre/Genere";

const HomeScreen = () => {
  return (
    <div className="pg-home">
      <Banner />
      <Genere />
    </div>
  );
};

export default HomeScreen;
