import Track from "../Track/Track";

function TrackList({ tracks, onAdd, isRemoval, onRemove }) {
    console.log(tracks);
    return(
        <div className="TrackList w-full">
            {/* A map method that render a set of Track Component */}
            {
                tracks.map(track => {
                    return   <Track key={track.id} track={track} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove}/>
                }
                )
            }
        </div>
    )
}

export default TrackList;