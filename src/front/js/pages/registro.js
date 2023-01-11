import React from "react";
import "../../styles/registro.css"

function Registro() {
    document.body.style = "background: #2A2A2A"

    return (
        <formreg className="row g-2 col-4 mx-auto" style={{ marginTop: "250px" }}>
            <div className="fw-bold g-2" style={{ textAlign: "center" }}><legend>Crear Cuenta Nueva</legend></div>
            <div className="col-md-12">
                <label for="inputNombre" className="form-label"></label>
                <input type="text" className="form-control" id="inputNombre" placeholder="Nombre"></input>
            </div>
            <div className="col-md-12">
                <label for="inputApellidos" className="form-label"></label>
                <input type="text" className="form-control" id="inputApellidos" placeholder="Apellidos"></input>
            </div>
            <div className="col-12">
                <label for="inputContraseña" className="form-label"></label>
                <input type="password" className="form-control" id="inputContraseña" placeholder="Contraseña"></input>
            </div>
            <div className="col-12">
                <label for="inputContraseña" className="form-label"></label>
                <input type="password" className="form-control" id="inputContraseña" placeholder="Confirmar Contraseña"></input>
            </div>
            <div className="col-md-12" style={{ marginBottom: "" }}>
                <label for="inputEmail" className="form-label"></label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
            </div>
            <button type="submit" className="btn btn-reg col-6 mx-auto" style={{ marginTop: "20px" }}>Aceptar</button>
        </formreg>

    )
}

export default Registro;