import { useState, useEffect } from 'react';

import './App.css';
// import axios from 'axios';

// const ACCESS_KEY = '5jOTyfTQTdUdZH7uunAK7km41pZDP7lSpdm5ob9thZQ';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
};
export default App;
