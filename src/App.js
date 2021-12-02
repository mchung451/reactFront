import './App.css';
import KennelComponent from './components/KennelComponent';
import RoostComponent from './components/RoostComponent';
import AddDog from './components/NewSearchComponent';
import AddBat from './components/AddBat';
import Header from './components/Header'
import SearchBar from './components/Search'
import React, { useState } from "react";


const posts =[
  {id: '1', name: 'This first post is about React'},
  {id: '2', name: 'This next post is about Preact!'},
];

const {search} = window.location;
const query = new URLSearchParams(search).get('s');

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query)
  });
};

function App() {
  
  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, query); 

  return (
    <div>
      <Header />
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      /> <br />
      <div>
      <u1>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </u1>
      </div>
      <AddDog />
      <AddBat />
      <KennelComponent />
      <RoostComponent />
    </div>
    
  );
}

export default App;
