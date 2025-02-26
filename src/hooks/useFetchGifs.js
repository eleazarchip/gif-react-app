/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    getImages();
  }, []);
  

  return  {
    images,
    isLoading
  };
}