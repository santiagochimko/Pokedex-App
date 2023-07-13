import React, {useState} from "react";
import Header from "./Components/Header"
import Cards from "./Components/Cards"

function App() {

  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <>
    <Header handleFilterChange={handleFilterChange}/>
    <Cards filterValue={filterValue}/>
    </>
  );
}

export default App;
