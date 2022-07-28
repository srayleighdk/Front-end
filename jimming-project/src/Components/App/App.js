
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useState } from 'react';

const data = [{
  id: 1,
  name: 'test',
  artist: 'test',
  album: 'test'
}]

let data1 = [];

function App() {
  const [searchResult, setSearchResult] = useState(data);
  const [playlistName, setPlaylistName] = useState('Favorite Song');
  const [playlistTracks, setPlaylistTracks] = useState(data1);


  const addTrack = ({track}) => {
    if (playlistTracks.find(saveTrack => saveTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks(playlistTracks.push({track}));
  };

  return (
    <div>
      <h1 className='px-0 py-3 bg-indigo-500 text-center font-poppins text-3xl text-white'>Ji<span className="highlight text-indigo-900">mmm</span>ing</h1>
      <div className="App h-full pt-0 pb-[10%] pl-[17%] pr-[17%] bg-gradient-to-r from-violet-500 to-fuchsia-500 font-worksans">
        {/* Add a SearchBar Component */}
        <SearchBar />
        <div className="App-playlist flex justify-between w-full">
          {/* Add a SearchResult Component */}
          <SearchResults searchResult={searchResult} onAdd={addTrack}/>
          {/* Add a Playlist Componet */}
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
