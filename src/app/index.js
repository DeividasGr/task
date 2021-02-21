import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ImageList from './components/ImageList';
import Select from './components/Select';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(20);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const sortImagesArray = (type) => {
      const types = {
        downloads: 'downloads',
        likes: 'likes',
        views: 'views',
      };
      const sortProperty = types[type];
      const sortedImages = [...images].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setImages(sortedImages);
    };
    sortImagesArray(sortType);
  }, [sortType]);

  return (
    <Container>
      <main>
        <Select setSortType={setSortType} />
        <ImageList images={images} count={count} setImages={setImages} />
      </main>
    </Container>
  );
}

export default App;
