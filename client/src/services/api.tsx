import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export default api;

// axios.get('http://localhost:4000/post')
// axios.get('url')
// axios.delete('url')
// axios.head('url')
// axios.options('url')
// axios.post('url', { ...dados })
// axios.put('url', { ...dados })
// axios.patch('url', { ...dados })
