import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Swal from "sweetalert2"
import "./CartItem.css"

const CartItem = ({ item, cantidad }) => {
    const alertaEliminarProducto = () => {
        (Swal.fire({
            title: '¿Estás seguro?',
            showCancelButton: true,
            confirmButtonText: 'Si',
            background: "#f94707",
            color: "#eeee",
            backdrop: false,
            confirmButtonColor: "#05121b",
            allowOutsideClick: true,
            width: '50rem',
        }).then((result)=> {
            if (result.isConfirmed)
            eliminarProducto(item.id)
        }));
    };

    const { eliminarProducto } = useContext(CarritoContext)

    return (
        <>
            <div className="d-flex gap-5 carritoDetalle">
                <div className="d-flex gap-5">
                    <img src={item.img} alt="" />
                    <div>
                        <h5> {item.nombre} </h5>
                        <p>Cantidad: {cantidad}</p>
                        <p>Precio: ${item.precio}</p>
                    </div>
                </div>
                <button onClick={() => alertaEliminarProducto()} className="botonEliminarCarrito"> Eliminar </button>
            </div>
            <hr />
        </>
    )
}

export default CartItem