import React from "react";

const Balance = () => {
  return (

      <>
    <div className="internetandbalances">
      <div className="internet ">
        <div className="tab">
          <h1 className="active">Internet</h1>
          <h1>Cambiazo</h1>
        </div>
        <div className="line"></div>
        <div className="otrospaquetes">
            <h1>Otros paquetes y bonos</h1>
          <div className="btns">
            <button>Comprar internet</button>
          </div>
        </div>
        <div className="capacidad">
          <div className="info">
            <div className="libre">
              <h1>Libre</h1>
              <h2>5GB - 5 Días</h2>
            </div>
            <div className="consumo">
              <h1>Consumido</h1>
              <h2>2 MB</h2>
            </div>
          </div>
          <div className="iconos">
            <div className="icon">
                
              <i className="fas fa-exclamation"></i>
            </div>
            <div className="icon">
              <i className="far fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="btns2">
          <button>Comprar internet</button>
        </div>
      </div>

      <div className="internet ">
        <div className="tab">
          <h1>Balances</h1>
        </div>
        <div className="line"></div>
        <div className="otrospaquetes">
          <h1>Consulta de Balances</h1>
          <div className="btns">
            <button>Pasatiempo</button>
            <button>Recargar</button>
          </div>
        </div>
        <div className="capacidad">
          <div className="info">
            <div className="libre">
              <h1>Recarga</h1>
              <h2>$76.00</h2>
            </div>
            <div className="consumo">
              <h1>Pasatiempo</h1>
              <h2>$0.00</h2>
            </div>
            <div className="consumo">
              <h1>Balance Promocional</h1>
              <h2>$200.00</h2>
            </div>
            <div className="consumo">
              <h1>Bono</h1>
              <h2>$75.00</h2>
            </div>
          </div>
          <div className="iconos">
            <div className="icon">
              <i className="fas fa-exclamation"></i>
            </div>
          </div>
        </div>

        <div className="btns2">
          <button>Pasatiempo</button>

          <button>Recargar</button>
        </div>
      </div>
    </div>
  </>
)
};

export default Balance;
