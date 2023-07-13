import React, { useState } from "react";
import Header from "./Components/Header";
import Cards from "./Components/Cards";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const handleSortChange = () => {
    setSortBy((prevSortBy) => {
      if (prevSortBy === "name") {
        return "id";
      } else {
        return "name";
      }
    });
  };

  return (
    <>
      <Header 
      handleFilterChange={handleFilterChange} 
      handleSortChange={handleSortChange} />
      <Cards 
      filterValue={filterValue}
      sortBy = {sortBy} />
    </>
  );
}

export default App;
