import React from "react";
import "../../styles/login.css"
import logo from "../../img/image.png"


function Login() {
    return (

        <div className="col-4 m-auto mx-auto ">
            
            <form className="rounded-4" style={{marginTop:"250px", textAlign:"end"}}>
                <legend className="mb-2" style={{textAlign:"left"}}>Iniciar Sesión</legend>

                <div className="mb-2">
                    <input type="email" id="email" className="form-control border-0" placeholder="Ingresa tú email" />
                </div>

                <div className="mb-2 mt-2">
                    <input type="password" id="password" className="form-control border-0" placeholder="Ingresa tú Contraseña" />
                </div>
                <div style={{textAlign:"start"}}>
                    <p className="colorletra">¿Aún no estas subscrito?<br />
                        Subscríbete <a href="#" class="colorletra">aquí</a><br />
                    </p>
                </div>
                <button type="submit" className="btn">Aceptar</button>
            </form>
        </div>

    )


}

export default Login;