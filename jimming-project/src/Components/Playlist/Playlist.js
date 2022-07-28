import TrackList from "../TrackList/TrackList";

function Playlist({playlistName, playlistTracks}) {
    return(
        <div className="Playlist flex flex-col items-center overflow-y-auto w-[37%] h-[59rem] px-[1.16rem] py-[2.2rem] bg-[#010c3f]/70 
        text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] rounded-lg">
            <input defaultValue={'New Playlist'} placeholder="Name Playlist" className="w-full border-solid bg-transparent border-b-4 focus:outline-none " />
            {/* Add Tracklist Component */}
            <TrackList tracks={playlistTracks} isRemoval={true}/>
            <button className="Playlist-save cursor-pointer w-[9rem] px-0 py-[0.7rem] rounded-[3rem] border-0 mt-[1.2rem] bg-[#6c41ec] text-center text-[0.8rem] transition-opacity hover:opacity-75 hover:duration-700 font-medium">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;