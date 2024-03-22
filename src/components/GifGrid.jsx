import { useEffect, useState } from "react";
import getGifts from "../helpers/getGifts";
import GiftItem from "./GiftItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map(( image) => (
          <GiftItem
           key={image.id}
          { ...image } />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
