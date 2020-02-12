import React from 'react';
import PageHdr from './components/PageHdr';
import Search from './components/Search';

function App() {
  console.log("*** Started function 'App'");
  return (
    <div>
      <PageHdr />
      <Search />
    </div>
  );
}

export default App;
