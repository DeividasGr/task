import { useState, useEffect } from 'react';
import Unsplash from '../api/Unsplash';

function App() {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [order, setOrder] = useState(false);

  const check = order && 'latest';

  useEffect(() => {
    const search = async () => {
      const response = await Unsplash.get('/search/photos', {
        params: {
          query: 'dog',
          per_page: 20,
          order_by: check,
        },
      });
      const { results } = response.data;
      setImages(results);
    };
    search();
  }, [check]);

  return (
    <div>
      App
      <button onClick={() => setOrder(!order)}>Latest</button>
    </div>
  );
}

export default App;
