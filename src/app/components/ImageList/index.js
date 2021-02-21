import { useEffect } from 'react';
import ImageCard from '../ImageCard';
import Loader from '../Loader';
import Unsplash from '../../../api/Unsplash';
import InfiniteScroll from 'react-infinite-scroll-component';

function ImageList({ images, count, setImages }) {
  const fetchImagesFromUnsplash = async () => {
    const response = await Unsplash.get('/photos/random', {
      params: {
        count: count,
        orientation: 'landscape',
      },
    });
    const { data } = response;
    setImages(data);
  };

  useEffect(() => {
    fetchImagesFromUnsplash();
  }, []);

  const fetchMoreDataFromUnsplash = async () => {
    const response = await Unsplash.get('/photos/random', {
      params: {
        count: count,
        orientation: 'landscape',
      },
    });
    const { data } = response;
    setImages(images.concat(data));
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchMoreDataFromUnsplash}
      hasMore={true}
      loader={<Loader />}
    >
      <ImageCard images={images} />
    </InfiniteScroll>
  );
}

export default ImageList;
