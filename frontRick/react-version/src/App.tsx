import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import crudder from "./apis/rickmorty";

function App() {
  const Base:any = crudder(process.env.REACT_APP_RICK_MORTY_API);
  const characters = Base("character/?page=1");

  useEffect(() => {
    (async function () {
      if(!fetchedData.length) return
      let data = await characters.get;
      updateFetchedData(data);
    })();
  }, [characters]);

  let [fetchedData, updateFetchedData] = useState([]);
  let results = fetchedData;

  return (
  <div className="App">
    <h1 className="text-center mb-3">Characters</h1>
    <div className="container">
    <div className="row">
      Filter component will be placed here2
      <div className="col-lg-8 col-12">
        <div className="row">
          <Card results={results} />
        </div>
      </div>
    </div>
    </div>
  </div>
  );
}

export default App;
