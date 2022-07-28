

function Track({track, onAdd, isRemoval, onRemove}) {

    
    const addTrack = () => {
        onAdd(track);
    }
    
    const removeTrack = () => {
        onRemove(track);
    }
    
    const renderAction = () => {
        if (isRemoval) {
            return <button onClick={removeTrack} className="Track-action cursor-pointer p-[0.5rem] text-base transition text-black hover:text-gray-500 duration-500">-</button>
        } else {
            return <button onClick={addTrack} className="Track-action cursor-pointer p-[0.5rem] text-base transition text-black hover:text-gray-500 duration-500">+</button>
        }
    }
    return(
        <div className="Track flex items-center border-b-[2px] border-indigo-600">
            <div className="Track-information flex flex-grow flex-col justify-center h-[4.5rem]">
                <h3 className="mb-[0.2rem] text-base">{track.name}</h3>
                <p className="text-[0.8rem] font-light text-gray-500">{track.artist} | {track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;