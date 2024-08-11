import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {
    const alertaVaciarCarrito = () => {
        (Swal.fire({
            title: '¿Estás seguro de vaciar el carrito?',
            showCancelButton: true,
            confirmButtonText: 'Si',
            background: "grey",
            color: "#eeee",
            backdrop: false,
            confirmButtonColor: "#05121b",
            allowOutsideClick: true,
            width: '50rem',
        }).then((result)=> {
            if (result.isConfirmed)
            vaciarCarrito()
        }));
    };

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="carritoVacio container">
                <div>
                    <img src="http://drive.google.com/uc?export=view&id=18kW-y6uNvQdcdo2beUWJtVV4btwQobWj" alt="" />
                    <h2>Carrito vacío</h2>
                </div>
                <Link to="/" className="botonVerProd"> Ver Productos </Link>
            </div>
        )
    }

    return (
        <div className="carritoLLeno container">
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <h4>Total Productos: {cantidadTotal}</h4>
            <h3>Total: ${total}</h3>
            <div className="botonesCarritoLleno">
                <Link to="/checkout" className="finalizarCompra"> Finalizar Compra </Link>
                <button onClick={() => alertaVaciarCarrito()}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart