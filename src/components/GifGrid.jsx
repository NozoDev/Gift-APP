import getGifts from "../helpers/getGifts";

const GifGrid = ({ category }) => {
  getGifts(category);
  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  );
};

export default GifGrid;
