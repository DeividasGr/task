import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID VGTGUGg3rwzffj10dBO7bijzYoqXLS2wUygdiSzTzo4',
  },
});
