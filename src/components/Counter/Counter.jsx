import { useState } from "react";
import Swal from 'sweetalert2'
import './Counter.css';

const Counter = ({ stock, inicial, funcionAgregar }) => {
    const alertaAgregarProducto = () => {
        (Swal.fire({
            title: 'Agregado al carrito',
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            background: "grey",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            toast: true,
            position: 'top-end',
            timer: 2000,
            timerProgressBar: true
        }));
    };

    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <div className="botones">
            <button onClick={restarContador} className="botonRestar"><b> - </b></button>
            <strong className="contador"> {contador} </strong>
            <button onClick={sumarContador} className="botonSumar"><b> + </b></button>

            {
                stock > 0 ? (
                    <button onClick={() => { funcionAgregar(contador); alertaAgregarProducto() }} className="botonAgregarCarrito">Agregar al carrito</button>)
                    : <button className="botonAgregarCarrito">SIN STOCK</button>
            }

        </div>
    )
}

export default Counter