import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [showForm, setShowForm] = useState(true);
     /*const mostrarBoton = (mostrarFormulario) => {
         if (mostrarFormulario === true) {
             mostrarFormulario = true;
         } else {
             mostrarFormulario = false;
         }
         return mostrarFormulario;
     }*/
     
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link
                        to={'/'}
                        className="text-light"
                    >CRUD, REACT, REDUX, REST API & Axios</Link>
                </h1>
            </div>

            {
                (showForm) ? (
                    <Link 
                        to={'/'}
                        className="btn btn-warning mr-2 nuevo-post d-block d-md-inline-block"
                        >&larr; Cancelar</Link>
                ) : (
                    <Link 
                        to={'/productos/nuevo'}
                        className="btn btn-danger nuevo-post d-block d-md-inline-block"
                    >Agregar Producto &#43;</Link>
                );
            }
        </nav>
    );
}
 
export default Header;
