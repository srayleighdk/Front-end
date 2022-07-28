
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useEffect, useState } from 'react';
import Spotify from '../../util/Spotify';


function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [playlistName, setPlaylistName] = useState('Favorite Song');
  const [playlistTracks, setPlaylistTracks] = useState([]);


  const addTrack = (track) => {
    let tracks = [...playlistTracks];
    if (tracks.find(saveTrack => saveTrack.id === track.id)) {
      return ;
    } else {
      tracks.push(track);
      setPlaylistTracks(tracks);
    }
  };

  const removeTrack = (track) => {
    let tracks = [...playlistTracks];
    tracks = tracks.filter(tracka => tracka.id !== track.id);
    setPlaylistTracks(tracks);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([])
    })
  }

  const search = (searchTerm) => {
    Spotify.search(searchTerm).then(searchResultSpotify => {
      setSearchResult(searchResultSpotify);
    })
  }

  return (
    <div>
      <h1 className='px-0 py-3 bg-indigo-500 text-center font-poppins text-3xl text-white'>Ji<span className="highlight text-indigo-900">mmm</span>ing</h1>
      <div className="App h-full pt-0 pb-[10%] pl-[17%] pr-[17%] bg-gradient-to-r from-violet-500 to-fuchsia-500 font-worksans">
        {/* Add a SearchBar Component */}
        <SearchBar onSearch={search}/>
        <div className="App-playlist flex justify-between w-full">
          {/* Add a SearchResult Component */}
          <SearchResults searchResult={searchResult} onAdd={addTrack}/>
          {/* Add a Playlist Componet */}
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
