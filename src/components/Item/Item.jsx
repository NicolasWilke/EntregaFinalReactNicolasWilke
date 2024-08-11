import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ nombre, varietal, precio, img, id, stock }) => {

    return (
       
        
       <div className="cardProducto">
            <img src={img} alt={nombre} />
            <div>
                <h5>{nombre}</h5>
                <h6>{varietal}</h6>
                <p>${precio}</p>
                <Link to={`/item/${id}`} ><button className="details"> Ver Detalles </button></Link>
            </div>
        </div>
    )
}

export default Item