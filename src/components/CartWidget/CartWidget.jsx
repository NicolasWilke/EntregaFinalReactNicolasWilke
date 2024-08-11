import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <Link to="/cart">
      <i className="fa-solid fa-cart-shopping cart"></i>
      {
        cantidadTotal > 0 && <p className='cartCounter'> {cantidadTotal} </p>
      }
    </Link>
  )
}

export default CartWidget