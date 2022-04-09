import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   getGifs(category).then(setImages); //esto devuelve una promesa por tanto puedo hacer un then
  // }, [category]); // si un argumento es pasado en la funcion como primer argumento entonces solo podriamos dejar la funcion

  return (
    <>
      <h3>{category}</h3>
      {loading && "Cargando..."}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}; //falta 14
