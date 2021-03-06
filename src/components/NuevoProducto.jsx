import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions'

const NuevoProducto = ({history}) => {

    // state del componente
    const [ nombre, guardarNombre ] = useState('');
    const [ precio, guardarPrecio ] = useState(0);

    // Utilizar useDispatch y te crea una función, se define ocmo una función que toma otra función
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector( state => state.productos.error );

    console.log(cargando);

    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

    // Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // Validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            return;
        }
        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        })

        // Redireccionar
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weigth-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form 
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="Nombre Producto"
                                    placeholder="Nombre Producto"        
                                    name="nombre" 
                                    value={nombre}
                                    onChange={ e => guardarNombre(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio Producto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="Precio Producto"
                                    placeholder="Precio Producto"        
                                    name="precio" 
                                    value={precio}
                                    onChange={ e => guardarPrecio(Number(e.target.value))}
                                    />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                AGREGAR
                            </button>
                        </form>
                        { cargando ? <Spinner /> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto;