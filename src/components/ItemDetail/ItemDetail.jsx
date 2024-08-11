import { useState } from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import './ItemDetail.css';

const ItemDetail = ({ id, stock, nombre, precio, varietal, img, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarAlCarrito } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, varietal, precio, img, stock };
        if (stock >= !0) {
            return (agregarAlCarrito(item, cantidad, stock))
        }
    }

    return (
        <div className='itemStyle'>
            <img src={img} alt={nombre} />
            <div className='itemDetail'>
                <h2> {nombre} </h2>
                <h3> Varietal: {varietal} </h3>
                <h4> Precio: ${precio} </h4>
                <div className="alert alert-secondary" role="alert">Hasta 3 cuotas sin interés en compras mayores a $150.000</div>
                <p>{descripcion}</p>
            </div>

            <div>
                {
                    agregarCantidad > 0 ? (<div className='d-flex'> <Link to="/cart" className='botonTerminarCompra'>Terminar compra</Link> <Link to="/" className="botonSeguirComprando"> Seguir comprando </Link></div>) : (<Counter inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>

        </div>
    )
}

export default ItemDetail