import React from 'react';
import PageHdr from './components/PageHdr';
import Search from './components/Search';

// two main parts of the page: static page header,
//  and search (including search input box and resulting table of employees)
function App() {
  return (
    <div>
      <PageHdr />
      <Search />
    </div>
  );
}

export default App;
