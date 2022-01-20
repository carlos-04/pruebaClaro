import React from "react";

const Perfil = () => {
  return (

    <>
       <div className="profile">
          <div className="contact">
            <div className="trespuntos">
              <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="phoneicon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="info">
              <h1>Leandro Moreno</h1>
              <div className="phone">
                <h2>(829) 543-8361</h2>
                <h3>Activo</h3>
              </div>
            </div>
          </div>
          <div className="contact2">
            <div className="plan">
              <h1>Plan</h1>
              <h2>Prepago</h2>
            </div>
            <div className="line"></div>
            <div className="fecha">
              <h1>Fecha de suspensión</h1>
              <h2>22 de febrero</h2>
            </div>
          </div>
        </div>
    </>
  )
 
};

export default Perfil;
