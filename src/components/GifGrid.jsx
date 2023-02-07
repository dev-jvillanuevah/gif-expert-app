import { useFetchGifs } from '../hooks/useFetchGifs';
import { GitItem } from './GitItem';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}{' '}
      {/* If isLoading is true it will show the second argument (<h2>Loading...</h2>) */}
      <div className="card-grid">
        {' '}
        {/* This will now show until we have the images loaded */}
        {images.map((image) => (
          <GitItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
