import React, { useState, useEffect } from "react";
import "./App.css";
import { getUrls, postUrl } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

function App() {
  const [urls, setUrls] = useState([]);
 
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    getUrls()
    .then(data => setUrls(data.urls))
    .catch(err => console.error(err))
  }


  const addUrl = (newUrl) => {
    setUrls([...urls, newUrl]);
  };

  


  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl} postUrl={postUrl} />
      </header>

      <UrlContainer urls={urls} />
    </main>
  );
}

export default App;
