// import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div>
      <h1 className='px-0 py-3 bg-indigo-500 text-center font-poppins text-3xl text-white'>Ji<span className="highlight text-indigo-900">mmm</span>ing</h1>
      <div className="App h-full pt-0 pb-[10%] pl-[17%] pr-[17%] bg-gradient-to-r from-violet-500 to-fuchsia-500 font-worksans">
        {/* Add a SearchBar Component */}
        <SearchBar />
        <div className="App-playlist flex justify-between w-full">
          {/* Add a SearchResult Component */}
          <SearchResults />
          {/* Add a Playlist Componet */}
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
