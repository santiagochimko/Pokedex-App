import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cards from './Components/Cards';
import ExpandedCard from './Components/ExpandedCard';


function App() {
  const [filterValue, setFilterValue] = useState('');
  const [sortBy, setSortBy] = useState(null);

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const handleSortChange = () => {
    setSortBy((prevSortBy) => {
      if (prevSortBy === 'name') {
        return 'id';
      } else {
        return 'name';
      }
    });
  };

  return (
    <div className="app">
      <Header
        handleInputChange={handleFilterChange}
        handleSortChange={handleSortChange}
      />
      <Cards filterValue={filterValue} sortBy={sortBy} />      
    </div>
  );
}

export default App;
