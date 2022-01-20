import React from "react";
import Perfil from "../../components/perfil/index.js";
import Balance from "../../components/balance/index.js";
const Home = () => {
  return (
    <>
      <div className="container">
        <Perfil />
        <Balance/>
      </div>
    </>
  );
};

export default Home;
