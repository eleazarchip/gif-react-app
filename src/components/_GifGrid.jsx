/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getGifs } from "../helpers/getGifs";
import { GridItem } from "./GridItem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{ category }</h3>
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