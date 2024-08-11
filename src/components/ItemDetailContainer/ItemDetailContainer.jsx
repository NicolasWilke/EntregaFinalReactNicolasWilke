import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
  const alertaError = () => {
    (Swal.fire({
      title: 'Los emails ingresados no coinciden',
      html: `` + error,
      showCancelButton: false,
      confirmButtonText: 'Entendido',
      background: "grey",
      color: "#eeee",
      confirmButtonColor: "black",
      width: '50rem',
    }));
  };

  const [error, setError] = useState("");

  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();


  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem)

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevosProducto = { id: res.id, ...data }
        setProducto(nuevosProducto);
      })
      .catch(error => setError("Se ha producido un error", error));
  }, [idItem])


  return (
    <div className="itemDetailContainer">
      <ItemDetail {...producto} />

      {
        error && (alertaError())
      }
    </div>
  )
}

export default ItemDetailContainer