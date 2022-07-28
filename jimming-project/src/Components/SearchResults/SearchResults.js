import TrackList from "../TrackList/TrackList";

function SearchResults({ searchResult, onAdd }) {

    return (
        <div className="SearchResults w-1/2 h-[59rem] overflow-y-auto p-[0.88rem] bg-[#010c3f]/70 text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] rounded-lg">
            <h2 className="font-poppins text-3xl">Results</h2>
            <TrackList tracks={searchResult} onAdd={onAdd} isRemoval={false}/>
        </div>
    );
}

export default SearchResults;