import PropTypes from "prop-types";
import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
      <h3>{ category }</h3>
      { isLoading && <p>Cargando...</p> }
      <div className="card-grid">
      {
        images.map(( image ) => (
          <GridItem 
            key={ image.id }
            { ...image }/> 
        ))
      }
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}